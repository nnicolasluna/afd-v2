import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { ModalStateService } from '../services/modal-state/modal-state.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements AfterViewInit {
  private map!: L.Map;
  private map1!: L.Map;
  private map2!: L.Map;

  municipio = '';
  mostrarCard = false;
  mostrarDiagnostico = false;
  mostrarLeftBar = false;
  mostrarEvaluamos = false;
  mostrarVerDiagnostico = false;
  mostrarrecu = false;
  mostraralternativas = false;
  mostraralter_rightbar = false;
  mostrartrebotones = false;
  mostrarMapa2 = false;

  departamentos = [
    { departamento: 'La Paz', source: 'assets/geojson/LaPaz/LaPaz.geo.json', state: true },
    { departamento: 'Beni', source: 'assets/geojson/Beni/Beni.geo.json', state: true },
    { departamento: 'Cochabamba', source: 'assets/geojson/Cocha/Cochabamba.geo.json', state: true },
  ];
  municipios = [
    { municipio: 'San Buenaventura', departamento: 'La Paz', source: 'assets/geojson/LaPaz/Municipios/SanBuenaventura.geo.json', quemado: 'assets/geojson/LaPaz/Municipios/quemado/quemas_sanbuena.geo.json', color: '#FF5C5CB5', lat: -14.45812, lon: -67.58674599999999 },
    { municipio: 'Palos Blancos', departamento: 'La Paz', source: 'assets/geojson/LaPaz/Municipios/PalosBlancos.geo.json', color: '#F4A21ABD', lat: -15.583, lon: -67.25 },
    { municipio: 'San Borja', departamento: 'Beni', source: 'assets/geojson/Beni/Municipios/SanBorja.geo.json', color: '#45818E', lat: -14.8583, lon: -66.7475 },
    { municipio: 'Rurrenabaque', departamento: 'Beni', source: 'assets/geojson/Beni/Municipios/Rurre.geo.json', color: '#8FCE00', lat: -14.442222, lon: -67.528333 },
    { municipio: 'Vinto', departamento: 'Cochabamba', source: 'assets/geojson/Cocha/Municipios/Vinto.geo.json', color: '#3521E8', lat: -17.383333, lon: -66.3 },
    { municipio: 'Tiquipaya', departamento: 'Cochabamba', source: 'assets/geojson/Cocha/Municipios/Tiqui.geo.json', color: '#C7914A', lat: -17.333333, lon: -66.216667 }
  ];

  private geoLayers: { [key: string]: L.GeoJSON } = {};
  constructor(private http: HttpClient, private modalServiceState: ModalStateService) { }

  ngOnInit() {
    this.modalServiceState.vistaActual$.subscribe(
      vista => {
        this.mostrarCard = vista === 'card';
        this.mostrarDiagnostico = vista === 'diagnostico';
        this.mostrarLeftBar = vista === 'leftbar';
        this.mostrarEvaluamos = vista === 'evaluamos';
        this.mostrarVerDiagnostico = vista === 'verdiagnostico';
        this.mostrarrecu = vista === 'recuperacion';
        this.mostraralternativas = vista === 'alternativas';
        this.mostraralter_rightbar = vista === 'alter-rightbar';
      });
    this.modalServiceState.tresBtnAct$.subscribe
      (data => {
        this.mostrartrebotones = data === 'tresBtn';
      })
  }
  ngAfterViewInit(): void {
    this.initMap();
    this.departamentos.forEach(
      dep => {
        this.cargarDepartamento(dep);
      }
    );
    this.municipios.forEach(mun => {
      this.cargarMunicipio(mun, '#FDE9A0');
    });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [-16.5, -64.15],
      zoom: 5,
      scrollWheelZoom: false,
      dragging: false,
      zoomControl: false,
      doubleClickZoom: false
    });
    this.map.setZoom(5.5);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18
    }).addTo(this.map);
    const labelsLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      pane: 'labels'
    });

    if (!this.map.getPane('labels')) {
      this.map.createPane('labels');
      this.map.getPane('labels')!.style.zIndex = '';
      this.map.getPane('labels')!.style.pointerEvents = 'none';
    }

    labelsLayer.addTo(this.map);
  }
  private iniciarmapa2(municipio: any): void {
    this.mostrarMapa2 = true
    setTimeout(() => {
      this.map1 = L.map('map1', {
        center: [-16.5, -64.15],
        zoom: 5,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false
      });
      this.map2 = L.map('map2', {
        center: [-16.5, -64.15],
        zoom: 5,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false
      });


      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18
      }).addTo(this.map1);
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18
      }).addTo(this.map2);

      this.http.get<any>(municipio).subscribe((geojsonData) => {
        const geojsonLayer1 = L.geoJSON(geojsonData, {
          style: {
            weight: 2,
            fillColor: '#8FC938',
            fillOpacity: 0.5,
            color: '#8FC938',
          }
        }).addTo(this.map1);

        this.map1.flyToBounds(geojsonLayer1.getBounds(), {
          padding: [120, 120],
          duration: 1.2,
        });
      });

      this.http.get<any>('assets/geojson/LaPaz/Municipios/quemado/quemas_sanbuena.geo.json').subscribe((geojsonData) => {
        const geojsonLayer2 = L.geoJSON(geojsonData, {
          style: {
            weight: 2,
            fillColor: '#D7191C',
            fillOpacity: 0.5,
            color: '#D7191C',
          }
        }).addTo(this.map2);

        this.map2.flyToBounds(geojsonLayer2.getBounds(), {
          padding: [120, 120],
          duration: 1.2,
        });
      });
    }, 0);
    /* this.map1 = L.map('map1', {
      center: [-16.5, -64.15],
      zoom: 5.5
    });
    this.map2 = L.map('map2', {
      center: [-16.5, -64.15],
      zoom: 5.5
    });

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18
    }).addTo(this.map1);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18
    }).addTo(this.map2);

    this.http.get<any>(municipio).subscribe((geojsonData) => {
      const geojsonLayer1 = L.geoJSON(geojsonData, {
        style: {
          weight: 2,
          fillColor: '#8FC938',
          fillOpacity: 0.5
        }
      }).addTo(this.map1);

      this.map1.flyToBounds(geojsonLayer1.getBounds(), {
        padding: [120, 120],
        duration: 1.2,
      });
    });

    this.http.get<any>('assets/geojson/LaPaz/Municipios/quemado/quemas_sanbuena.geo.json').subscribe((geojsonData) => {
      const geojsonLayer2 = L.geoJSON(geojsonData, {
        style: {
          weight: 2,
          fillColor: '#D7191C',
          fillOpacity: 0.5
        }
      }).addTo(this.map2);

      this.map2.flyToBounds(geojsonLayer2.getBounds(), {
        padding: [120, 120],
        duration: 1.2,
      });
    }); */
    /* this.synchronizeMaps(); */
  }


  private cargarMunicipio(mun: any, color: any): void {
    this.http.get<any>(mun.source).subscribe({
      next: data => {
        const layer = L.geoJSON(data, {
          style: {
            color: color,
            weight: 2,
            fillOpacity: 0.5,
            fillColor: mun.color
          }
        });
        layer.addTo(this.map);
        this.geoLayers[mun.municipio] = layer;
        mun.state = true;
      },
      error: err => {
        console.error(`Error al cargar el municipio ${mun.municipio}:`, err);
      }
    });
  }
  updateMapWidth(event: Event): void {
    const sliderValue = (event.target as HTMLInputElement).value;
    const percent = parseInt(sliderValue, 10);

    // Update clip paths based on slider value
    document.getElementById('map1')!.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    document.getElementById('map2')!.style.clipPath = `inset(0 0 0 ${percent}%)`;
  }
  private synchronizeMaps(): void {
    // Sync map1 to map2
    this.map1.on('move', () => {
      this.map2.setView(this.map1.getCenter(), this.map1.getZoom(), {
        animate: false
      });
    });

    // Sync map2 to map1
    this.map2.on('move', () => {
      this.map1.setView(this.map2.getCenter(), this.map2.getZoom(), {
        animate: false
      });
    });
  }


  private cargarMunicipioPersonalizado(mun: any, color: any, fillColor: any): void {
    this.http.get<any>(mun).subscribe({
      next: data => {
        const layer = L.geoJSON(data, {
          style: {
            color: color,
            weight: 2,
            fillOpacity: 0.5,
            fillColor: fillColor
          }
        });
        layer.addTo(this.map);

        // Guardar la capa
        this.geoLayers[mun.municipio] = layer;


        const bounds = layer.getBounds();
        this.map.flyToBounds(bounds, {
          padding: [120, 120],
          duration: 1.2,
        });
        if (this.map) {
          this.map.scrollWheelZoom.enable();
          this.map.dragging.enable();
          this.map.doubleClickZoom.enable();

          // Solo si nunca agregaste zoomControl
          if (!this.map.zoomControl) {
            L.control.zoom({ position: 'topright' }).addTo(this.map);
          }
        }
      },
      error: err => {
        console.error(`Error al cargar el municipio ${mun.municipio}:`, err);
      }
    });
  }

  private cargarDepartamento(dep: any): void {
    this.http.get<any>(dep.source).subscribe(data => {
      const layer = L.geoJSON(data, {
        style: {
          color: 'gold',
          weight: 2,
          fillOpacity: 0
        }
      });
      layer.addTo(this.map);
      this.geoLayers[dep.departamento] = layer;
      dep.state = true;
    });
  }
  handleLocationSelection(MunucipioSelecionado: any): void {
    if (this.mostrarMapa2) {
      this.mostrarMapa2 = false
      setTimeout(() => {
        this.initMap();
        this.map.flyTo(newCenter, 7.5);
      }, 0)
    }
    this.municipio = MunucipioSelecionado.municipio;
    const newCenter: L.LatLngExpression = [MunucipioSelecionado.latMun, MunucipioSelecionado.lonMun];
    this.map.flyTo(newCenter, 7.5);
    this.limpiarMapa();
    this.cargarDepartamento(this.departamentos.find(dpts => dpts.departamento === MunucipioSelecionado.departamento));
    this.cargarMunicipio(this.municipios.find(mun => mun.municipio === MunucipioSelecionado.municipio), '#FDE9A0')
    this.modalServiceState.mostrarTresBtn();
  }
  evaluamos(MunucipioSelecionado: any): void {
    /* this.mostrarMapa2 = true */
    const ciudadEncontrada = this.municipios.find(ciudad => ciudad.municipio === MunucipioSelecionado);
    if (ciudadEncontrada) {
      this.limpiarMapa();

      /* const newCenter: L.LatLngExpression = [ciudadEncontrada.lat, ciudadEncontrada.lon]; */
      /* this.map1.flyTo(newCenter, 10); */
      /* this.cargarMunicipioPersonalizado(ciudadEncontrada.source, '', '#8FC938'); */
      /* this.cargarMunicipioPersonalizado(ciudadEncontrada.quemado, '', '#D7191C'); */
      this.iniciarmapa2(ciudadEncontrada.source);

    }
  }
  toggleDepartamento(dep: any): void {
    if (dep.state) {
      // Ocultar
      this.map.removeLayer(this.geoLayers[dep.departamento]);
      dep.state = false;
    } else {
      // Mostrar
      this.cargarDepartamento(dep);
    }
  }
  private limpiarMapa(): void {
    this.map.eachLayer((layer: L.Layer) => {
      if (!(layer instanceof L.TileLayer)) {
        this.map.removeLayer(layer);
      }
    });
    this.departamentos.forEach(dep => dep.state = false);
  }
  locateUser(mesaje: string): void {
    if (!this.map) {
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const userLocation = L.latLng(lat, lng);

        this.map.setView(userLocation, 16);

        // L.marker(userLocation).addTo(this.map)
        //   .bindPopup('Tu ubicación actual').openPopup();

      }, (error: GeolocationPositionError) => { // Especifica el tipo de error
        console.error('Error al obtener la ubicación:', error);

        let errorMessage = 'No se pudo obtener tu ubicación actual.';

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Permiso denegado: No has permitido que el navegador acceda a tu ubicación. Para usar esta función, debes cambiar los permisos del sitio en la configuración de tu navegador.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Ubicación no disponible: No se pudo determinar tu ubicación. Asegúrate de tener GPS o WiFi activado.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Tiempo de espera agotado: La solicitud para obtener tu ubicación tardó demasiado.';
            break;
          default:
            errorMessage = 'Ocurrió un error desconocido al obtener tu ubicación.';
            break;
        }

        alert(errorMessage);

      });
    } else {
      alert('La geolocalización no es soportada por este navegador.');
    }
  }
}
