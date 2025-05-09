import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements AfterViewInit {
  private map!: L.Map;
  departamentos = [
    { departamento: 'La Paz', source: 'assets/geojson/LaPaz/LaPaz.geo.json', state: true },
    { departamento: 'Beni', source: 'assets/geojson/Beni/Beni.geo.json', state: true },
    { departamento: 'Cochabamba', source: 'assets/geojson/Cocha/Cochabamba.geo.json', state: true },
  ];
  ciudades = [
    { nombre: 'San Buenaventura', lat: -14.45812, lon: -67.58674599999999 },
    { nombre: 'Palos Blancos', lat: -15.583, lon: -67.25 },
    { nombre: 'San Borja', lat: -14.8583, lon: -66.7475 },
    { nombre: 'Rurrenabaque', lat: -14.442222, lon: -67.528333 },
    { nombre: 'Vinto', lat: -17.383333, lon: -66.3 },
    { nombre: 'Tiquipaya', lat: -17.333333, lon: -66.216667 }
  ];
  private geoLayers: { [key: string]: L.GeoJSON } = {};
  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.departamentos.forEach(
      dep => {
        console.log(dep)
        this.cargarDepartamento(dep);
      }
    );
    this.cargarMunicipios();
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
      this.map.getPane('labels')!.style.zIndex = '200';
      this.map.getPane('labels')!.style.pointerEvents = 'none';
    }

    labelsLayer.addTo(this.map);
  }

  private cargarMunicipios(): void {
    this.http.get<any>('assets/municipios1.geo.json').subscribe(data => {
      const municipiosDeseados = [
        'San Buenaventura',
        'Palos Blancos',
        'San Borja',
        'Rurrenabaque',
        'Vinto',
        'Tiquipaya'
      ];
      const colores = [
        '#FF5C5CB5',
        '#F4A21ABD',
        '#45818E',
        '#8FCE00',
        '#3521E8',
        '#C7914A'
      ];
      const colorPorMunicipio = new Map<string, string>();
      municipiosDeseados.forEach((nombre, index) => {
        colorPorMunicipio.set(nombre, colores[index % colores.length]);
      });

      const featuresFiltradas = data.features.filter((feature: any) => {
        const props = feature.properties;
        return municipiosDeseados.includes(props.NOM_MUN);
      });
      const geojsonFiltrado = {
        ...data,
        features: featuresFiltradas
      };

      L.geoJSON(geojsonFiltrado, {
        style: (feature: any) => {
          const nombreMunicipio = feature.properties.NOM_MUN;
          const color = colorPorMunicipio.get(nombreMunicipio) || 'white';
          return {
            color: '#FDE9A0',
            weight: 2,
            fillOpacity: 0.5,
            fillColor: color
          };
        }
      }).addTo(this.map);
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
    const newCenter: L.LatLngExpression = [MunucipioSelecionado.latMun, MunucipioSelecionado.lonMun];
    this.map.flyTo(newCenter, 7.5);
    this.limpiarMapa();
    this.cargarDepartamento(this.departamentos.find(dpts => dpts.departamento === 'La Paz'));
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
      // Evitar quitar la capa base (tile layer)
      if (!(layer instanceof L.TileLayer)) {
        this.map.removeLayer(layer);
      }
    });

    // Marcar todos los departamentos como ocultos
    this.departamentos.forEach(dep => dep.state = false);
    console.log(this.departamentos)
  }
}
