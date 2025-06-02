import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flora-fauna',
  templateUrl: './flora-fauna.component.html',
  styleUrls: ['./flora-fauna.component.scss']
})
export class FloraFaunaComponent {
  @Input() Municipio: string = '';
  @Input() datos: any[] = [];
  @Input() tipo: any;
  @Output() tipomapa = new EventEmitter<any>();

  municipioData: any
  seleccionado: string = '';
  seleccionadoFauna: string = ''
  /* data = [
    {
      municipio: 'San Buenaventura',
      fauna: {
        centrosPoblados: [
          { texto: 'Principales Centros Poblados', img: '' },
          { texto: 'Centros Poblados', img: '' },
          { texto: 'Limite Municipal', img: '' },
          { texto: 'Limite Municipal-San Buenaventura', img: '' },
        ],
        aq: [
          { texto: 'Area Quemada 2023', img: '' },
        ],
        tco: [
          { texto: 'Mosetenes', img: '' },
          { texto: 'Pilón Lajas', img: '' },
        ],
        ap: [
          { texto: 'Reserva de la Biosfera Pilón Lajas', img: '' },
        ],
        bosques: [
          { texto: 'Bosque Amazónico', img: '' },
          { texto: 'Bosque Yungas', img: '' },
        ]
      },
      flora: {
        reptiles: {
          anfibiosReptiles: {
            aq: [
              { texto: 'Area Quemada 2023', img: '' },
              { texto: 'Principales Centros Poblados', img: '' },
              { texto: 'Limite Municipal', img: '' },
            ],
            reptiles: [
              { texto: 'Culebra de Balzan', img: '' },
            ]
          },
          avesMamiferos: {}
        }
      }
    }
  ] */
  data = [
    {
      "municipio": "Palos Blancos",
      "fauna": {
        "centrosPoblados": [
          { "texto": "Principales Centros Poblados", "img": "" },
          { "texto": "Centros Poblados", "img": "" },
          { "texto": "Límite Municipal", "img": "" },
          { "texto": "Límite Municipal-Palos Blancos", "img": "" }
        ],
        "areaquemada": [
          { "texto": "Área Quemada 2023", "img": "" }
        ],
        "Tco": [
          { "texto": "Mosetenes", "img": "" },
          { "texto": "Pilón Lajas", "img": "" }
        ],
        "areasprotegidas": [
          { "texto": "Reserva de la Biosfera Pilón Lajas", "img": "" }
        ],
        "bosques": [
          { "texto": "Bosque Amazónico", "img": "" },
          { "texto": "Bosque Yungas", "img": "" }
        ]
      }
    },
    {
      "municipio": "San Buenaventura",
      "fauna": {
        "centrosPoblados": [
          { "texto": "Principales Centros Poblados", "img": "" },
          { "texto": "Centros Poblados", "img": "" },
          { "texto": "Límite Municipal", "img": "" },
          { "texto": "Límite Municipal-San Buenaventura", "img": "" }
        ],
        "areaquemada": [
          { "texto": "Área Quemada 2023", "img": "" }
        ],
        "Tco": [
          { "texto": "San Jose de Uchupiamonas", "img": "" },
          { "texto": "Tacana I", "img": "" }
        ],
        "areasprotegidas": [
          { "texto": "Área Natural de Manejo Integrado Madidi", "img": "" }
        ],
        "bosques": [
          { "texto": "Bosque Amazónico", "img": "" },
          { "texto": "Bosque Yungas", "img": "" }
        ]
      }
    },
    {
      "municipio": "Tiquipaya",
      "fauna": {
        "centrosPoblados": [
          { "texto": "Centros Poblados", "img": "" }
        ],
        "areaquemada": [
          { "texto": "1 año", "img": "" },
          { "texto": "2 años", "img": "" },
          { "texto": "3 años", "img": "" }
        ],
        "areasprotegidas": [
          { "texto": "Parque Nacional", "img": "" },
          { "texto": "Reserva de Vida Silvestre", "img": "" }
        ],
        "bosques": [
          { "texto": "Bosque Seco Interandino", "img": "" }
        ]
      }
    },
    {
      "municipio": "Vinto",
      "fauna": {
        "centrosPoblados": [
          { "texto": "Centros Poblados", "img": "" }
        ],
        "areaquemada": [
          { "texto": "1 año", "img": "" },
          { "texto": "2 años", "img": "" },
          { "texto": "Vinto", "img": "" }
        ],
        "areasprotegidas": [
          { "texto": "Parque Nacional Tunari", "img": "" }
        ],
        "bosques": [
          { "texto": "Bosque Andino", "img": "" },
          { "texto": "Bosque Seco Interandino", "img": "" }
        ]
      }
    },
    {
      "municipio": "Rurrenabaque",
      "fauna": {
        "centrosPoblados": [
          { "texto": "Principales Centros Poblados", "img": "" },
          { "texto": "Centros Poblados", "img": "" },
          { "texto": "Límite Municipal", "img": "" },
          { "texto": "Límite Municipal-Rurrenabaque", "img": "" }
        ],
        "areaquemada": [
          { "texto": "Área Quemada 2023", "img": "" }
        ],
        "Tco": [
          { "texto": "Pilón Lajas", "img": "" },
          { "texto": "Tacana I", "img": "" }
        ],
        "areasprotegidas": [
          { "texto": "Reserva de la Biosfera Pilón Lajas", "img": "" }
        ],
        "bosques": [
          { "texto": "Bosque Amazónico", "img": "" },
          { "texto": "Bosque de Llanuras Inundables", "img": "" }
        ]
      }
    },
    {
      "municipio": "San Borja",
      "fauna": {
        "centrosPoblados": [
          { "texto": "Principales Centros Poblados", "img": "" },
          { "texto": "Centros Poblados", "img": "" },
          { "texto": "Área Quemada 2023", "img": "" },
          { "texto": "Límite Municipal-San Borja", "img": "" },
          { "texto": "Límite Municipal", "img": "" }
        ],
        "Tco": [
          { "texto": "Pilón Lajas", "img": "" },
          { "texto": "Territorio Indígena Chiman", "img": "" }
        ],
        "areasprotegidas": [
          { "texto": "Parque Nacional y Territorio Indígena Isiboro Sécure", "img": "" },
          { "texto": "Parque Regional Yacuma", "img": "" },
          { "texto": "Refugio de Vida Silvestre Espíritu de Elíser", "img": "" },
          { "texto": "Reserva de la Biosfera y Territorio Indígena Pilón Lajas", "img": "" },
          { "texto": "Reserva de la Biosfera Estación Biológica del Beni", "img": "" },
          { "texto": "Zona de Protección de CH Eva Eva Mosetenes", "img": "" },
          { "texto": "Área Protegida Municipal Cabeceras del Maniquí", "img": "" }
        ],
        "bosques": [
          { "texto": "Bosque Amazónico", "img": "" },
          { "texto": "Bosque de Llanuras Inundables", "img": "" },
          { "texto": "Bosque Yungas", "img": "" }
        ]
      }
    }
  ]
  fauna = [
    {
      "municipio": "Palos Blancos",
      "especiesAmenazadas": {
        "anfibiosReptiles": {
          "anfibios": [
            // "Rana Terrestre de McDiarmid",
            { "texto": "Rana Terrestre de McDiarmid", "img": "" },
            { "texto": "Rana Armada Andina", "img": "" },
            { "texto": "Rana de Cristal de Bejarano", "img": "" },
            /* "Rana Armada Andina",
            "Rana de Cristal de Bejarano" */
          ],
          "reptiles": [
            { "texto": "Culebra de Balzan", "img": "" },
            /* 
                        "Culebra de Balzan" */
          ]
        },
        "avesMamiferos": {
          "aves": [
            "Guacamayo militar",
            "Espatulilla Colicorta",
            "Mosquero de Weeden",
            "Tucán de castaño",
            "Cuco terrestre de Geoffroy",
            "Cotorra serrana boliviana"
          ],
          "mamiferos": []
        }
      }
    },
    {
      "municipio": "San Buenaventura",
      "especiesAmenazadas": {
        "anfibiosReptiles": {
          "anfibios": [],
          "reptiles": [
            "Culebra de Balzan"
          ]
        },
        "avesMamiferos": {
          "aves": [
            "Guacamayo militar",
            "Espatulilla colicorta",
            "Mosquero de Weeden",
            "Tucán de castaño",
            "Cuco terrestre de Geoffroy",
            "Mosquitero Conirostris"
          ],
          "mamiferos": []
        }
      }
    },
    {
      "municipio": "Tiquipaya",
      "especiesAmenazadas": {
        "anfibiosReptiles": {
          "anfibios": [
            "Sapo chechua"
          ],
          "reptiles": []
        },
        "avesMamiferos": {
          "aves": [
            "Monterita de Garlepp"
          ],
          "mamiferos": [
            "Ratón de Siberia"
          ]
        }
      }
    },
    {
      "municipio": "Vinto",
      "especiesAmenazadas": {
        "anfibiosReptiles": {
          "anfibios": [
            "Sapo chechua"
          ],
          "reptiles": []
        },
        "avesMamiferos": {
          "aves": [
            "Monterita de Garlepp"
          ],
          "mamiferos": [
            "Ratón de Siberia"
          ]
        }
      }
    },
    {
      "municipio": "Rurrenabaque",
      "especiesAmenazadas": {
        "anfibiosReptiles": {
          "anfibios": [],
          "reptiles": [
            "Culebra de Balzan"
          ]
        },
        "avesMamiferos": {
          "aves": [
            "Guacamayo militar",
            "Espatulilla Colicorta",
            "Tucán de castaño",
            "Cuco terrestre de Geoffroy"
          ],
          "mamiferos": [
            "Nutria gigante"
          ]
        }
      }
    },
    {
      "municipio": "San Borja",
      "especiesAmenazadas": {
        "anfibiosReptiles": {
          "anfibios": [
            "Rana terrestre de McDiarmid"
          ],
          "reptiles": [
            "Culebra de Balzan"
          ]
        },
        "avesMamiferos": {
          "aves": [
            "Guacamayo militar",
            "Espatulilla Colicorta",
            "Mosquero de Weecen",
            "Tucán de castaño",
            "Cuco terrestre",
            "Cotorra serrana boliviana"
          ],
          "mamiferos": [
            "Tití modesto",
            "Tití de Olalla",
            "Nutria gigante"
          ]
        }
      }
    }
  ]

  ngOnInit(): void {
    this.buscarMunicipio(this.Municipio, 'Flora');
  }
  buscarMunicipio(nombreMunicipio: string, opcion: string) {
    this.seleccionado = opcion;
    if (opcion == 'Flora') {
      this.municipioData = this.data.find(item => item.municipio === nombreMunicipio);
      this.tipomapa.emit('flora');
    } else {
      this.mostrarfauna('reptiles', nombreMunicipio)
    }
  }
  mostrarfauna(opcion: string, municipio: string) {
    this.seleccionadoFauna = opcion;
    this.municipioData = this.fauna.find(item => item.municipio === municipio);
    if (opcion === 'reptiles') {
      this.tipomapa.emit('reptiles');
    } else {
 
      this.tipomapa.emit('mamiferos');

    }
  }
}
