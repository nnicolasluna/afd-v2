import { Component, Input } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
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
      "areaProtegida": "RBTCO Pilón Lajas",
      "ubicacion": "355 km de Trinidad, 450 km de La Paz",
      "comunarioOrigen": "Moseten, Tacana",
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
      "areaProtegida": "PN ANMI Madidi",
      "comunarioOrigen": "Tacana",
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
      "ubicacion": "Centro-este de La Paz",
      "areaProtegida": "RBTCO Pilón Lajas",
      "comunarioOrigen": "Moseten",
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
      "areaProtegida": "RBTCO Pilón Lajas",
      "ubicacion": "230 km de Trinidad, 371 km de La Paz",
      "comunarioOrigen": "Moseten, Tacana",
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
      "ubicacion": "Provincia Quillacollo",
      "provincia": "Provincia Quillacollo",
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
      "provincia": null,
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
