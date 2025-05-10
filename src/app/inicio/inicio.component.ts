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
  municipios = [
    { municipio: 'San Buenaventura', departamento: 'La Paz', source: 'assets/geojson/LaPaz/Municipios/SanBuenaventura.geo.json', color: '#FF5C5CB5', lat: -14.45812, lon: -67.58674599999999 },
    { municipio: 'Palos Blancos', departamento: 'La Paz', source: 'assets/geojson/LaPaz/Municipios/PalosBlancos.geo.json', color: '#F4A21ABD', lat: -15.583, lon: -67.25 },
    { municipio: 'San Borja', departamento: 'Beni', source: 'assets/geojson/Beni/Municipios/SanBorja.geo.json', color: '#45818E', lat: -14.8583, lon: -66.7475 },
    { municipio: 'Rurrenabaque', departamento: 'Beni', source: 'assets/geojson/Beni/Municipios/Rurre.geo.json', color: '#8FCE00', lat: -14.442222, lon: -67.528333 },
    { municipio: 'Vinto', departamento: 'Cochabamba', source: 'assets/geojson/Cocha/Municipios/Vinto.geo.json', color: '#3521E8', lat: -17.383333, lon: -66.3 },
    { municipio: 'Tiquipaya', departamento: 'Cochabamba', source: 'assets/geojson/Cocha/Municipios/Tiqui.geo.json', color: '#C7914A', lat: -17.333333, lon: -66.216667 }
  ];
  /* ciudades = [
    { nombre: 'San Buenaventura', lat: -14.45812, lon: -67.58674599999999 },
    { nombre: 'Palos Blancos', lat: -15.583, lon: -67.25 },
    { nombre: 'San Borja', lat: -14.8583, lon: -66.7475 },
    { nombre: 'Rurrenabaque', lat: -14.442222, lon: -67.528333 },
    { nombre: 'Vinto', lat: -17.383333, lon: -66.3 },
    { nombre: 'Tiquipaya', lat: -17.333333, lon: -66.216667 }
  ]; */
  private geoLayers: { [key: string]: L.GeoJSON } = {};
  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.departamentos.forEach(
      dep => {
        this.cargarDepartamento(dep);
      }
    );
    this.municipios.forEach(mun => {
      this.cargarMunicipio(mun);
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
      this.map.getPane('labels')!.style.zIndex = '200';
      this.map.getPane('labels')!.style.pointerEvents = 'none';
    }

    labelsLayer.addTo(this.map);
  }
  private cargarMunicipio(mun: any): void {
    this.http.get<any>(mun.source).subscribe({
      next: data => {
        const layer = L.geoJSON(data, {
          style: {
            color: '#FDE9A0',
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
    this.cargarDepartamento(this.departamentos.find(dpts => dpts.departamento === MunucipioSelecionado.departamento));
    this.cargarMunicipio(this.municipios.find(mun => mun.municipio === MunucipioSelecionado.municipio))
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
}
