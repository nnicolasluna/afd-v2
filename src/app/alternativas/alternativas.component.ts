import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alternativas',
  templateUrl: './alternativas.component.html',
  styleUrls: ['./alternativas.component.scss']
})
export class AlternativasComponent {
  @Input() municipio: string | undefined;
  descripcion: any
  alternativas = [
    {
      "municipio": "Palos Blancos",
      "comunidades": ["Organización de la Mujer Indígena Moseten (OMIN)"],
      "descripcion": "Entrega e instalación de un secador solar al emprendimiento de la Organización de Mujeres Indígenas del Norte (OMIN), ubicado en el municipio de Palos Blancos, con el objetivo de fortalecer la producción local de harina de plátano como alternativa económica y sostenible. La infraestructura consta de una estructura metálica techada con policarbonato resistente, diseñada para optimizar la captación de energía solar. Se incluyó además la instalación de seis ventanas con mecanismos de ventilación natural, lo que permite una adecuada circulación del aire caliente y mejora el proceso de deshidratación de los productos agrícolas",
      "tabla": [
        {
          "Material": "Material Metálico Y Policarbonato"
        },
        {
          "Material": "Ventanas para Secador Solar"
        },
        {
          "Material": "Materiales y Áridos para el Piso"
        }
      ]
    },
    {
      "municipio": "San Buenaventura",
      "comunidades": ["Comunidad Altamarani", "Comunidad Tres Hermanos"],
      "descripcion": "En la comunidad de Altamarani, se llevó adelante la implementación de cajas de abejas meliponas, con el fin de impulsar la producción y recolección de miel nativa, fortaleciendo los sistemas productivos sostenibles y respetuosos con la biodiversidad local. La meliponicultura representa una alternativa que promueve la conservación de polinizadores y el uso sostenible del bosque, generando ingresos sin comprometer los ecosistemas. Por otro lado, en la comunidad de Tres Hermanos, se brindó apoyo al emprendimiento de elaboración de jabones y champús naturales, mediante la realización de capacitaciones especializadas en técnicas artesanales, así como la entrega de insumos, materiales y utensilios necesarios para la producción.",
      "tabla": [
        {
          "Material": "Cajas de Meliponas",
          "Cantidad": "150"
        }
      ]
    },
    {
      "municipio": "Tiquipaya",
      "comunidades": ["Comunidad Molinos", "Gobierno Autónomo Municipal de Tiquipaya"],
      "descripcion": "Entrega de equipos, herramientas e insumos a la comunidad Molinos de Tiquipaya, para emplearse como alternativas al uso del fuego para fines de prevención de incendios forestales.Entrega de Kit para combate de incendios al Gobierno Autónomo Municipal de Tiquipaya y Brigada de Bomberos de la comunidad Molinos para fines de control y atención rápida de incendios forestales.",
      "tabla_Gobierno_Autónomo_Municipal": [
        {
          "Piezas": "2 Piezas",
          "Equipo": "Mochila"
        },
        {
          "Piezas": "2 Piezas",
          "Equipo": "Pulasky"
        },
        {
          "Piezas": "2 Piezas",
          "Equipo": "Pala Forestal"
        },
        {
          "Piezas": "2 Piezas",
          "Equipo": "Bate Fuego"
        },
        {
          "Piezas": "2 Piezas",
          "Equipo": "Maclao"
        },
        {
          "Piezas": "4 Equipos",
          "Equipo": "Handies"
        },
        {
          "Piezas": "300 Litros",
          "Equipo": "Diesel"
        }
      ],
      "tabla_Comunidad_Molinos": [
        {
          "Piezas": "1 Equipo",
          "Equipo": "Maquina Picadora de Ramas"
        },
        {
          "Piezas": "2 Kilos",
          "Equipo": "Sulfato de Cobre"
        },
        {
          "Piezas": "3 Kilos",
          "Equipo": "Cal Agrícola"
        },
        {
          "Piezas": "1 Pieza",
          "Equipo": "Rastrillo Trinche"
        },
        {
          "Piezas": "1 Pieza",
          "Equipo": "Lona 2x3 mt"
        },
        {
          "Piezas": "4 Kilos",
          "Equipo": "Azufre"
        },
        {
          "Piezas": "1 Pieza",
          "Equipo": "Mochila"
        },
        {
          "Piezas": "1 Pieza",
          "Equipo": "Pulasky"
        },
        {
          "Piezas": "2 Piezas",
          "Equipo": "Pala Forestal"
        },
        {
          "Piezas": "2 Piezas",
          "Equipo": "Bate Fuego"
        },
        {
          "Piezas": "1 Pieza",
          "Equipo": "Maclao"
        }
      ]
    },
    {
      "municipio": "Vinto",
      "comunidades": ["Comunidad Combuyo Chico", "Gobierno Autónomo Municipal de Vinto"],
      "descripcion": "Entrega de equipos, herramientas e insumos a la comunidad Combuyo Chico de Vinto, para emplearse como alternativas al uso del fuego para fines de prevención de incendios forestales. Entrega de Kit para combate de incendios al Gobierno Autónomo Municipal de Vinto para fines de control y atención rápida de incendios forestales.",
      "tabla_Gobierno_Autónomo_Municipal": [
        {
          "Piezas": "4 Piezas",
          "Equipo": "Mochila"
        },
        {
          "Piezas": "3 Piezas",
          "Equipo": "Pulasky"
        },
        {
          "Piezas": "3 Piezas",
          "Equipo": "Pala Forestal"
        },
        {
          "Piezas": "3 Piezas",
          "Equipo": "Bate Fuego"
        },
        {
          "Piezas": "3 Piezas",
          "Equipo": "Maclao"
        }
      ],
      "tabla_Comunidad_Combuyo_Chico": [
        {
          "Piezas": "1 Equipo",
          "Equipo": "Maquina Picadora de Ramas"
        },
        {
          "Piezas": "2 Kilos",
          "Equipo": "Sulfato de Cobre"
        },
        {
          "Piezas": "3 Kilos",
          "Equipo": "Cal Agrícola"
        },
        {
          "Piezas": "1 Pieza",
          "Equipo": "Rastrillo Trinche"
        },
        {
          "Piezas": "1 Pieza",
          "Equipo": "Lona 2x3 mt"
        },
        {
          "Piezas": "4 Kilos",
          "Equipo": "Azufre"
        }
      ]
    },
    {
      "municipio": "Rurrenabaque",
      "comunidades": ["Comunidad Carmen Florida"],
      "descripcion": "Implementación de un sistema de refrigeración solar en apoyo al ecoturismo. Así mismo se realizó la entrega e instalación de un sistema de refrigeración solar para apoyar al emprendimiento de ecoturismo.",
      "tabla": [
        {
          "Material": "Sistema de Refrigeración Solar"
        }
      ]
    },
    {
      "municipio": "San Borja",
      "comunidades": ["Comunidad Pachiuval", "Comunidad Tierra Santa"],
      "descripcion": "Se realizó la entrega de cajas de abejas meliponas a las comunidades de Tierra Santa y Pachiuval, como parte de las acciones orientadas a promover alternativas sostenibles al uso del fuego en prácticas agroproductivas y de manejo del entorno rural. La implementación de sistemas de meliponicultura representa una estrategia productiva compatible con la conservación del bosque y el uso responsable del territorio, ya que no requiere quema de áreas para su mantenimiento ni para ampliar zonas de producción. Por el contrario, incentiva la preservación de la cobertura vegetal y la biodiversidad, al depender directamente de los ecosistemas forestales para garantizar el alimento de las abejas.",
      "tabla": [
        {
          "Material": "Cajas de Meliponas",
          "Cantidad": "300"
        }
      ]
    }
  ]

  ngOnInit() {
    this.descripcion = this.alternativas.filter(item => item.municipio === this.municipio);
    console.log(this.descripcion)
  }
  mostrarPantalla1 = true;
  mostrarPantalla2 = false;
  mostrarPantalla3 = false;
  VerAlternativas() {
    this.mostrarPantalla1 = !this.mostrarPantalla1
    this.mostrarPantalla2 = !this.mostrarPantalla2
  }
  VerFotografias() {
    this.mostrarPantalla2 = !this.mostrarPantalla2
    this.mostrarPantalla3 = !this.mostrarPantalla3
  }
}
