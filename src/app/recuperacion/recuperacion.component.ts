import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.scss']
})
export class RecuperacionComponent {
  @Input() municipio: string | undefined;
  mostrarPantalla1 = true;
  mostrarPantalla2 = false;
  mostrarPantalla3 = false;
  mucipioSelecionado: any
  rutaBaseImagenes: string = 'assets/imagenes/FotosRecuperacionYRestauracion/';

  verRecuperacion() {
    this.mostrarPantalla1 = !this.mostrarPantalla1
    this.mostrarPantalla2 = !this.mostrarPantalla2
  }
  verFotos() {
    this.mostrarPantalla2 = !this.mostrarPantalla2
    this.mostrarPantalla3 = !this.mostrarPantalla3
  }

  datosRecuperacion = [
    {
      "municipio": "Palos Blancos",
      "descripcion": "Entrega de materiales, herramientas e insumos a la comunidad de Inicua Bajo, con el objetivo de apoyar el establecimiento de plantaciones forestales nativas como parte de las estrategias de restauración ecológica y conservación del entorno natural. Además, se realizó la implementación de plantines de cacao criollo bajo un enfoque agroforestal, promoviendo sistemas productivos sostenibles que integran especies agrícolas y forestales.",
      "tablas": {
        "tabla1": {
          "comunidad": "Comunidad Inicua Bajo",
          "tipo": "Equipo",
          "datosTabla": [
            {
              "Equipo": "Carretillas",
              "Piezas": "2 Piezas"
            },
            {
              "Equipo": "Palas",
              "Piezas": "4 Piezas"
            },
            {
              "Equipo": "Azadones",
              "Piezas": "4 Piezas"
            },
            {
              "Equipo": "Regaderas",
              "Piezas": "4 Piezas"
            }
          ]
        },
        "tabla2": {
          "tipo": "Plantines",
          "datosTabla": [
            {
              "Equipo": "Plantas de Cacao",
              "Piezas": "625"
            },
            {
              "Equipo": "Especies Forestales",
              "Piezas": "280"
            },
            {
              "Equipo": "Plantas Frutales",
              "Piezas": "280"
            },
            {
              "Equipo": "Varetas",
              "Piezas": "3750"
            }
          ]
        }
      }
    },
    {
      "municipio": "San Buenaventura",
      "descripcion": "Entrega de plantines de cacao criollo y especies forestales nativas a la comunidad de Tres Hermanos, como parte de las acciones de fortalecimiento de sistemas agroforestales y restauración ambiental. Esta intervención busca promover prácticas productivas sostenibles que aseguren la conservación de la biodiversidad, el manejo adecuado del suelo y el incremento de cobertura vegetal. Implementación de plantines de cacao criollo con enfoque agroforestal.",
      "tablas": {
        "tabla1": {
          "comunidad": "Comunidad Tres Hermanos VIVERO",
          "tipo": "Plantines",
          "datosTabla": [
            {
              "Equipo": "Cacao Criollo",
              "Piezas": "4600"
            },
            {
              "Equipo": "Especies Forestales",
              "Piezas": "230"
            },
            {
              "Equipo": "Cedro",
              "Piezas": null
            },
            {
              "Equipo": "Toco Colorado",
              "Piezas": null
            },
            {
              "Equipo": "Palo Maria",
              "Piezas": null
            }
          ],
        }
      },
      "fotografias": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "7.jpg",
        "6.jpg",
        "8.jpg",
      ]
    },
    {
      "municipio": "Tiquipaya",
      "descripcion": "Entrega de materiales, herramientas en insumos al Gobierno Autónomo Municipal de Tiquipaya para la producción de plantines forestales nativos para establecimiento de plantaciones en zonas priorizadas en la próxima temporada de lluvias. Entrega de herramientas a la comunidad Molinos para el establecimiento de plantaciones forestales, y entrega de geomembrana para implementación de un atajado para la captura de agua, con fines de apoyo a la recuperación, prevención y mitigación de incendios.",
      "tablas": {
        "tabla1": {
          "comunidad": "Gobierno Autónomo Municipal de Tiquipaya VIVERO",
          "tipo": "Semillas Forestales",
          "datosTabla": [
            {
              "Equipo": "Semilla Kewiña",
              "Piezas": "1kg"
            },
            {
              "Equipo": "Semilla Kiswara",
              "Piezas": "1kg"
            },
            {
              "Equipo": "Semilla Lloque",
              "Piezas": "0,1"
            },
            {
              "Equipo": "Semilla Retama",
              "Piezas": "0,5 kg"
            }
          ]
        },
        "tabla2": {
          "tipo": null,
          "datosTabla": [
            {
              "Equipo": "Rollo Agrofil",
              "Piezas": "2 Rollos"
            },
            {
              "Equipo": "Rollo Semisombra",
              "Piezas": "1 Rollo"
            },
            {
              "Equipo": "Enraizante Liquido",
              "Piezas": "2 Litros"
            },
            {
              "Equipo": "Enraizante Polvo",
              "Piezas": "2 Unidades"
            },
            {
              "Equipo": "Bolsas",
              "Piezas": "60kg"
            },
            {
              "Equipo": "Tijera de Podar",
              "Piezas": "10 Piezas"
            },
            {
              "Equipo": "Tijera de Podar Pequeña",
              "Piezas": "10 Piezas"
            }
          ]
        },
        "tabla3": {
          "comunidad": "Comunidad Molinos",
          "tipo": "EQUIPO",
          "datosTabla": [
            {
              "Equipo": "Pala",
              "Piezas": "44 Piezas"
            },
            {
              "Equipo": "Picota",
              "Piezas": "44 Piezas"
            },
            {
              "Equipo": "Geomembrana",
              "Piezas": "1 Pieza 180 m2"
            }
          ]
        }
      },
      "fotografias": [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "5.jpeg",
        "7.jpeg",
        "6.jpeg",
        "8.jpeg",
      ]
    },
    {
      "municipio": "Vinto",
      "descripcion": "Entrega de materiales, herramientas en insumos al Gobierno Autónomo Municipal de Vinto para la producción de plantines forestales nativos para establecimiento de plantaciones en zonas priorizadas en la próxima temporada de lluvias. Entrega de herramientas a la comunidad Combuyo Chico para el establecimiento de plantaciones forestales.",
      "tablas": {
        "tabla1": {
          "comunidad": "Gobierno Autónomo Municipal de Vinto VIVERO",
          "tipo": " Semillas Forestales",
          "datosTabla": [
            {
              "Equipo": "Semilla Chacatea",
              "Piezas": "1,25kg"
            },
            {
              "Equipo": "Semilla Jacaranda",
              "Piezas": "0,75kg"
            },
            {
              "Equipo": "Semilla Lloque",
              "Piezas": "0,15kg"
            },
            {
              "Equipo": "Semilla Molle",
              "Piezas": "1,25 kg"
            },
            {
              "Equipo": "Semilla Soto",
              "Piezas": "0,75kg"
            },
            {
              "Equipo": "Tuna",
              "Piezas": "700"
            }
          ]
        },
        "tabla2": {
          "tipo": null,
          "datosTabla": [
            {
              "Equipo": "Rollo Agrofil",
              "Piezas": "2 Rollos"
            },
            {
              "Equipo": "Rollo Semisombra",
              "Piezas": "4 Rollos"
            },
            {
              "Equipo": "Enraizante Liquido",
              "Piezas": "2 Litros"
            },
            {
              "Equipo": "Enraizante Polvo",
              "Piezas": "2 Unidades"
            },
            {
              "Equipo": "Bolsas",
              "Piezas": "60kg"
            },
            {
              "Equipo": "Lama",
              "Piezas": "24 Cubos"
            }
          ]
        },
        "tabla3": {
          "comunidad": "Comunidad Combuyo Chico",
          "tipo": "EQUIPO",
          "datosTabla": [
            {
              "Equipo": "Pala",
              "Piezas": "45 Piezas"
            },
            {
              "Equipo": "Picota",
              "Piezas": "45 Piezas"
            }
          ]
        }
      },
      "fotografias": [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "5.jpeg",
        "7.jpeg",
        "6.jpeg",
        "8.jpeg",
      ]
    },
    {
      "municipio": "Rurrenabaque",
      "descripcion": "Desarrollo de actividades orientadas a la implementación de plantines de cacao criollo bajo un enfoque agroforestal, en el marco del fortalecimiento de sistemas productivos resilientes en el municipio de Rurrenabaque. Esta intervención busca mejorar la recuperación de suelos degradados",
      "tablas": {
        "tabla1": {
          "comunidad": "Asunción del Quiquibey VIVERO",
          "tipo": " Plantines",
          "datosTabla": [
            {
              "Equipo": "Cacao Criollo",
              "Piezas": "5800"
            },
            {
              "Equipo": "Plantines Forestales",
              "Piezas": "130"
            }
          ],

        }
      },
      "fotografias": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "7.jpg",
        "6.jpg",
        "8.jpg",
      ]
    },
    {
      "municipio": "San Borja",
      "descripcion": "Entrega de plantines de cacao criollo y especies forestales a la comunidad de Pachiuval. Esta intervención tiene como objetivo promover la reforestación y mejorar la calidad del suelo.",
      "tablas": {
        "tabla1": {
          "comunidad": "Comunidad Pachiuval VIVERO",
          "tipo": " Plantines",
          "datosTabla": [
            {
              "Equipo": "Cacao Criollo",
              "Piezas": "3500"
            },
            {
              "Equipo": "Especies Forestales",
              "Piezas": "350"
            },
            {
              "Equipo": "Cedro",
              "Piezas": null
            },
            {
              "Equipo": "Toco Colorado",
              "Piezas": null
            },
            {
              "Equipo": "Palo María",
              "Piezas": null
            }
          ]
        }
      },
      "fotografias": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "7.jpg",
        "6.jpg",
        "8.jpg",
      ]
    }
  ]
  ngOnInit() {
    this.mucipioSelecionado = this.datosRecuperacion.filter(item => item.municipio === this.municipio);
  }
}
