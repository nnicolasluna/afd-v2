import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements AfterViewInit {/* 
  private map!: L.Map;
  constructor(private http: HttpClient) { }
  ngAfterViewInit(): void {
    this.initMap();
    this.cargarContornoBolivia();
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [-16.5, -64.15],
      zoom: 6,
      scrollWheelZoom: false,
      dragging: false,
      zoomControl: false,
      doubleClickZoom: false
    });
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18
    }).addTo(this.map);
  }
  private cargarContornoBolivia(): void {
    this.http.get<any>('assets/municipios1.geo.json').subscribe(data => {
      L.geoJSON(data, {
        style: {
          color: 'white',
          weight: 2,
          fillOpacity: 0
        }
      }).addTo(this.map);
    });
  } */
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
      zoom: 6,
      /* scrollWheelZoom: false, */
      dragging: false,
      zoomControl: false,
      doubleClickZoom: false
    });

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18
    }).addTo(this.map);
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
      const featuresFiltradas = data.features.filter((feature: any) => {
        const props = feature.properties;
        return (
          municipiosDeseados.includes(props.NOM_MUN)
        );
      });

      const geojsonFiltrado = {
        ...data,
        features: featuresFiltradas
      };

      L.geoJSON(geojsonFiltrado, {
        style: {
          color: 'white',
          weight: 2,
          fillOpacity: 0
        }
      }).addTo(this.map);
    });
  }
  private cargarContornoBolivia(): void {
    this.http.get<any>('assets/bolivia.geo.json').subscribe(data => {
      L.geoJSON(data, {
        style: {
          color: 'white',
          weight: 2,
          fillOpacity: 0
        }
      }).addTo(this.map);
    });
  }
}
