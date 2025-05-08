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

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.cargarContornoBolivia();
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
      this.map.getPane('labels')!.style.zIndex = '1000'; 
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

  private cargarContornoBolivia(): void {
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

}
