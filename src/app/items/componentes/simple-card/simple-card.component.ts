import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';
import { Component, Input,LOCALE_ID  } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'; 

registerLocaleData(localeEs);
@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } 

  ],
})
export class SimpleCardComponent {
  @Input() municipio: string = '';
  visible = false;
  municipioEncontrado: any;

  data = [
    {
      "nombre": "Rurrenabaque",
      "departamento": "Beni",
      "superficie_km2": 4800,
      "poblacion": null,
      "provincia": "José Ballivián",
      "areaProtegida": "Reserva de la Biósfera Pailón Lajas",
      "ubicacion": "355 km de Trinidad, 450 km de La Paz",
      "comunarioOrigen": "•	Pilón Lajas - Tacana I",
      "caracteristicas": {
        "acceso": "Río Beni",
        "territorio": "38.8% TCO y 46.7% SERNAP",
        "uso_del_suelo": "Solo 2.600 a 3.000 km² disponibles para asentamientos urbanos/rurales"
      }
    },
    {
      "nombre": "San Buenaventura",
      "departamento": "La Paz",
      "superficie_km2": 7481,
      "poblacion": null,
      "provincia": "Abel Iturralde",
      "areaProtegida": "Área Natural de Manejo Integrado Pilón Lajas Madidi -	Reserva de la Biósfera Pilón Lajas",
      "comunarioOrigen": "Tacana I - San José de Uchupiamonas",
      "ubicacion": "481 km de La Paz",
      "caracteristicas": {
        "limita_con": "Rurrenabaque, Ixiamas, Apolo, Reyes",
        "territorio": "9.37% del área de la Provincia Abel Iturralde"
      }
    },
    {
      "nombre": "Palos Blancos",
      "departamento": "La Paz",
      "superficie_km2": 7308.2,
      "poblacion": 38793,
      "provincia": "Sur Yungas",
      "ubicacion": "Centro este de La Paz",
      "areaProtegida": "Reserva de la Biósfera Pailón Lajas",
      "comunarioOrigen": "Pilón Lajas - Moseten",
      "caracteristicas": {
        "comunidades": 294,
        "habitantes_cabecera": 7298,
        "condiciones_naturales": "Terrazas aluviales, laderas con moderada pendiente",
        "usos": "Agrícola, asentamientos"
      }
    },
    {
      "nombre": "San Borja",
      "departamento": "Beni",
      "superficie_km2": 10000,
      "poblacion": null,
      "provincia": "José Ballivián",
      "areaProtegida": "Parque Nacional Isiboro Secure, Reserva de la Biósfera Pilón Lajas, Reserva de la Biósfera Estación Biológica del Beni",
      "ubicacion": "230 km de Trinidad, 371 km de La Paz",
      "comunarioOrigen": "Territorio Indígena Chiman",
      "caracteristicas": {
        "OTBs": 145,
        "importancia": "Tránsito internacional, conexión de caminos",
        "comunidades": "Indígenas, colonos, interculturales",
        "problemas": "Acceso a servicios, distribución de agua potable"
      }
    },
    {
      "nombre": "Vinto",
      "departamento": "Cochabamba",
      "superficie_km2": 209.56,
      "poblacion": 55773,
      "areaProtegida": "Parque Nacional Tunari",
      "provincia": "Quillacollo",
      "comunarioOrigen": "Quechua",
      "caracteristicas": {
        "distritos": 6,
        "subcentrales": 14,
        "comunidades": 76,
        "problemas": "Heladas, sequías, incendios, pérdida agrícola/ganadera"
      }
    },
    {
      "nombre": "Tiquipaya",
      "departamento": "Cochabamba",
      "superficie_km2": 159.85,
      "poblacion": null,
      "provincia": "Quillacollo",
      "comunarioOrigen": "Quechua",
      "areaProtegida": "Parque Nacional Tunari",
      "ubicacion": "Noroeste de Cochabamba",
      "caracteristicas": {
        "amenazas": "Incendios, inundaciones, mazamorras, sismos",
        "causas": "Ocupación de áreas riesgosas, deforestación, pendiente topográfica"
      }
    }
  ]
  constructor(private modalServiceState: ModalStateService) { }
  /* ngOnInit() {
    this.municipioEncontrado = this.data.find(municipio => municipio.nombre === this.municipio);
  } */
  ngOnInit() {
    this.municipioEncontrado = this.data.find(municipio => municipio.nombre === this.municipio);

  }

  ngOnChanges() {
    this.municipioEncontrado = this.data.find(municipio => municipio.nombre === this.municipio);

  }
  mostrarSimpleCard: boolean = true;
  cerrarSimpleCard() {
    this.mostrarSimpleCard = !this.mostrarSimpleCard;
    this.modalServiceState.cerrarVistas();
  }
}
