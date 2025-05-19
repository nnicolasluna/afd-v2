import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { ModalStateService } from '../services/modal-state/modal-state.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements AfterViewInit {
  private map!: L.Map;
  private map1!: L.Map;
  private map2!: L.Map;
  private map3!: L.Map;
  private lupaOverlay?: L.ImageOverlay;


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
  mostrartrebotonEvaluamos = false;
  mostrarConvenios = false;
  mostrarManuales = false;
  mostrarTalleres = false;

  mostrarMapa2 = false;
  mostrarMapa3 = false;
  bounds: any
  indice: any
  departamentos = [
    { departamento: 'La Paz', source: 'assets/geojson/LaPaz/LaPaz.geo.json', state: true },
    { departamento: 'Beni', source: 'assets/geojson/Beni/Beni.geo.json', state: true },
    { departamento: 'Cochabamba', source: 'assets/geojson/Cocha/Cochabamba.geo.json', state: true },
  ];
  municipios = [
    {
      municipio: 'San Buenaventura',
      departamento: 'La Paz',
      source: 'assets/geojson/LaPaz/Municipios/SanBuenaventura.geo.json',
      color: '#FF5C5CB5',
      bounds: [[-14.595647073317162, -68.08062043756617],
      [-13.949129563336342, -67.47255082174567]],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746458264450preNDVISanBuena',
          nbr: 'aceaa:a_1746457357110preNBRSanBuena'
        },
        post: {
          ndvi: 'aceaa:a_1746459648105postNDVISanBuena',
          nbr: 'aceaa:a_1746461096055PostNBRSanBuena'
        },
        dnbr: 'aceaa:a_1747538623598sanbuena_dnbr1'
      }
    },
    {
      municipio: 'Palos Blancos',
      departamento: 'La Paz',
      source: 'assets/geojson/LaPaz/Municipios/PalosBlancos.geo.json',
      color: '#F4A21ABD',
      bounds: [[-15.937101287092842, -67.66398180879155],
      [-14.921915184509372, -66.79540076057638]],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746452622394preNDVIPalosBlancos',
          nbr: 'aceaa:a_1746452806527preNBRPalosBlancos'
        },
        post: {
          ndvi: 'aceaa:a_1746458795037postNDVIPalosBlancos',
          nbr: 'aceaa:a_1746460441687PostNBRPalosBlancos'
        },
        dnbr: 'aceaa:a_1747576386958dNBR1_pb'
      }
    },
    {
      municipio: 'San Borja',
      departamento: 'Beni',
      source: 'assets/geojson/Beni/Municipios/SanBorja.geo.json',
      color: '#45818E',
      bounds: [[-15.807833717708043, -67.29180978658083],
      [-14.310701465194448, -66.52105527280628]],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746457864518preNDVISanBorja',
          nbr: 'aceaa:a_1746456545640preNBRSanBorja'
        },
        post: {
          ndvi: 'aceaa:a_1746459396083postNDVISanBorja',
          nbr: 'aceaa:a_1746460827267PostNBRSanBorja'
        },
        dnbr: 'aceaa:a_1747589538998dNBR_sb1'

      }
    },
    {
      municipio: 'Rurrenabaque',
      departamento: 'Beni',
      source: 'assets/geojson/Beni/Municipios/Rurre.geo.json',
      color: '#8FCE00',
      bounds: [[-15.04651151441675, -67.55968740430527], [-14.343220478479576, -67.0736988355966]],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746457664348preNDVIRurrenabaque',
          nbr: 'aceaa:a_1746456908941preNBRRurrenabaque'
        },
        post: {
          ndvi: 'aceaa:a_1746459230710postNDVIRurrenabaque',
          nbr: 'aceaa:a_1746460712250PostNBRRurrenabaque'
        },
        dnbr: 'aceaa:a_1747538931290rure_dnbr1'
      }
    },
    {
      municipio: 'Vinto',
      departamento: 'Cochabamba',
      source: 'assets/geojson/Cocha/Municipios/Vinto.geo.json',
      color: '#3521E8',
      bounds: [[-17.425969038992537, -66.45925118125885],
      [-17.257175597106478, -66.28695430976472]],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746458448842preNDVIVinto',
          nbr: 'aceaa:a_1746457186315preNBRVinto'
        },
        post: {
          ndvi: 'aceaa:a_1746460151272postNDVIVinto',
          nbr: 'aceaa:a_1746461278454PostNBRVinto'
        },
        dnbr: 'aceaa:a_1747536074621vinto2'
      }
    },
    {
      municipio: 'Tiquipaya',
      departamento: 'Cochabamba',
      source: 'assets/geojson/Cocha/Municipios/Tiqui.geo.json',
      color: '#C7914A',
      bounds: [[-17.3745854047409, -66.29890190304351],
      [-17.071134501765325, -66.09399618673585]],
      wms: {
        pre: {
          ndvi: 'aceaa:a_1746458375180preNDVITiquipaya',
          nbr: 'aceaa:a_1746457245470preNBRTiquipaya'
        },
        post: {
          ndvi: 'aceaa:a_1746460308299postNDVITiquipaya',
          nbr: 'aceaa:a_1746461236706PostNBRTiquipaya'
        },
        dnbr: 'aceaa:a_1747538444570tiquipaya_dnbr1'
      }
    }
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
        this.mostrarConvenios = vista === 'convenios';
        this.mostrarManuales = vista === 'manuales';
        this.mostrarTalleres = vista === 'talleres';

      });
    this.modalServiceState.tresBtnAct$.subscribe
      (data => {
        this.mostrartrebotones = data === 'tresBtn';
      })
    this.modalServiceState.BtnEvaluamos$.subscribe(
      data => {
        this.mostrartrebotonEvaluamos = data === 'btnEvaluamos';

      }
    )
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
  agregarOverlayLupa(center: L.LatLngExpression): void {
    // Elimina overlay anterior si existe
    if (this.lupaOverlay) {
      this.map.removeLayer(this.lupaOverlay);
    }

    // Calcula bounds alrededor del centro
    const lat = (center as L.LatLngTuple)[0];
    const lng = (center as L.LatLngTuple)[1];
    const bounds = L.latLngBounds(
      [lat - 0.5, lng - 0.5],
      [lat + 0.5, lng + 0.5]
    );

    this.lupaOverlay = L.imageOverlay('assets/png/Vector.png', bounds, {
      opacity: 0.8,
      interactive: false
    }).addTo(this.map);
  }
  handleLocationSelection(MunucipioSelecionado: any): void {
    if (this.mostrarMapa2 || this.mostrarMapa3) {
      this.mostrarMapa2 = false
      this.mostrarMapa3 = false

      setTimeout(() => {
        this.initMap();
        this.map.flyTo(newCenter, 7.5);
/*         this.agregarOverlayLupa(newCenter);
 */      }, 0)
    }
    this.municipio = MunucipioSelecionado.municipio;
    const newCenter: L.LatLngExpression = [MunucipioSelecionado.latMun, MunucipioSelecionado.lonMun];
    this.map.flyTo(newCenter, 7.5);
/*     this.agregarOverlayLupa(newCenter);
 */
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
      //this.iniciarmapa2(ciudadEncontrada.source);
      this.sidebysideWMS(ciudadEncontrada, 'nbr');
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

  actualizarIndice(event: { indice: string, muni: string }) {
    this.indice = event.indice;
    const ciudadEncontrada = this.municipios.find(ciudad => ciudad.municipio === event.muni);
    if (event.indice == 'nbr' || event.indice == 'ndvi') {
      this.sidebysideWMS(ciudadEncontrada, event.indice)
    }
    if (event.indice == 'dnbr') {
      this.simpleWMS(ciudadEncontrada, event.indice)
    }
  }
  sidebysideWMS(muni: any, indice: string): void {
    this.mostrarMapa2 = true;
    this.mostrarMapa3 = false;
    let layer1 = ''
    let layer2 = ''
    if (indice === 'nbr') {
      layer1 = muni!.wms.pre.nbr;
      layer2 = muni!.wms.post.nbr;
    }
    if (indice === 'ndvi') {
      layer1 = muni!.wms.pre.ndvi;
      layer2 = muni!.wms.post.ndvi;
    }
    const bounds = L.latLngBounds(muni.bounds);
    setTimeout(() => {

      if (this.map1) {
        this.map1.remove();
      }
      if (this.map2) {
        this.map2.remove();
      }
      this.map1 = L.map('map1', {
        center: [-15.7, -67.3], // Ajustado al centro aproximado de la capa
        zoom: 10,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false
      });

      this.map2 = L.map('map2', {
        center: [-15.7, -67.3],
        zoom: 10,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false
      });

      // Base layer para ambos mapas
      const baseLayerUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

      L.tileLayer(baseLayerUrl, {
        maxZoom: 18
      }).addTo(this.map1);

      L.tileLayer(baseLayerUrl, {
        maxZoom: 18
      }).addTo(this.map2);
      // Capa WMS para el mapa 1 (PRE NDVI)
      L.tileLayer.wms('https://geoserver.bits.bo/geoserver/aceaa/wms', {
        layers: layer1,
        format: 'image/png',
        transparent: true,
        version: '1.1.0',
        attribution: 'GeoServer ACEAA'
      }).addTo(this.map1);

      // Capa WMS para el mapa 2 (POST NDVI)
      L.tileLayer.wms('https://geoserver.bits.bo/geoserver/aceaa/wms', {
        layers: layer2,
        format: 'image/png',
        transparent: true,
        version: '1.1.0',
        attribution: 'GeoServer ACEAA'
      }).addTo(this.map2);
      // Ajusta ambos mapas al bounding box
      this.map1.fitBounds(bounds);
      this.map2.fitBounds(bounds);
    }, 0);
  }
  simpleWMS(muni: any, indice: string) {
    this.mostrarMapa2 = false;
    this.mostrarMapa3 = true;
    const layer1 = muni!.wms.dnbr;

    const bounds = L.latLngBounds(muni.bounds);
    setTimeout(() => {
      if (this.map3) {
        this.map3.remove();
      }
      this.map3 = L.map('map3', {
        center: [-15.7, -67.3], // Ajustado al centro aproximado de la capa
        zoom: 10,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false
      });

      // Base layer para ambos mapas
      const baseLayerUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

      L.tileLayer(baseLayerUrl, {
        maxZoom: 18
      }).addTo(this.map3);


      // Capa WMS para el mapa 1 (PRE NDVI)
      L.tileLayer.wms('https://geoserver.bits.bo/geoserver/aceaa/wms', {
        layers: layer1,
        format: 'image/png',
        transparent: true,
        version: '1.1.0',
        attribution: 'GeoServer ACEAA'
      }).addTo(this.map3);

      // Capa WMS para el mapa 2 (POST NDVI)

      // Ajusta ambos mapas al bounding box
      this.map3.fitBounds(bounds);

    }, 0);
  }
}
