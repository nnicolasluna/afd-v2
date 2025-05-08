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

  ciudades = [
    { nombre: 'San Buenaventura', lat: -14.45812, lon: -67.58674599999999 },
    { nombre: 'Palos Blancos', lat: -15.583, lon: -67.25 }, 
    { nombre: 'San Borja', lat: -14.8583, lon: -66.7475 }, 
    { nombre: 'Rurrenabaque', lat: -14.442222, lon: -67.528333 }, 
    { nombre: 'Vinto', lat: -17.383333, lon: -66.3 }, 
    { nombre: 'Tiquipaya', lat: -17.333333, lon: -66.216667 } 
];

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.cargarContornoDpts();
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

  private cargarContornoDpts(): void {
    this.http.get<any>('assets/bolivia.geo.json').subscribe(data => {
      const departamentosDeseados = ['La Paz', 'Beni', 'Cochabamba'];

      const featuresFiltradas = data.features.filter((feature: any) => {
        const props = feature.properties;
        return departamentosDeseados.includes(props.NOM_DEP);
      });

      const geojsonFiltrado = {
        ...data,
        features: featuresFiltradas
      };

      L.geoJSON(geojsonFiltrado, {
        style: {
          color: 'gold',
          weight: 2,
          fillOpacity: 0
        }
      }).addTo(this.map);
    });
  }

  handleLocationSelection(MunucipioSelecionado: any): void {
    const newCenter: L.LatLngExpression = [MunucipioSelecionado.latMun, MunucipioSelecionado.lonMun];
    console.log(MunucipioSelecionado)
    this.map.flyTo(newCenter, 7.5);
  }

}
