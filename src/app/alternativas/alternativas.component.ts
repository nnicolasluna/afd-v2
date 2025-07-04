import { Component, Input } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-alternativas',
  templateUrl: './alternativas.component.html',
  styleUrls: ['./alternativas.component.scss'],
})
export class AlternativasComponent {
  @Input() municipio: string | undefined;
  descripcion: any;
  rutaBaseImagenes: string = 'assets/imagenes/FotosAlternativas/';
  alternativas = [
    {
      municipio: 'Palos Blancos',
      descripcion:
        'Entrega e instalación de un secador solar al emprendimiento de la Organización de Mujeres Indígenas del Norte (OMIN), ubicado en el municipio de Palos Blancos, con el objetivo de fortalecer la producción local de harina de plátano como alternativa económica y sostenible. La infraestructura consta de una estructura metálica techada con policarbonato resistente, diseñada para optimizar la captación de energía solar. Se incluyó además la instalación de seis ventanas con mecanismos de ventilación natural, lo que permite una adecuada circulación del aire caliente y mejora el proceso de deshidratación de los productos agrícolas. Entrega de 207 cajas meliponas para la cría de abejas y producción de miel más capacitaciones en meliponicultura. 108 cajas entregadas a Inicua Bajo y 99 a la OMIM.',
      tablas: {
        tabla1: {
          comunidad: 'Organización de la Mujer Indígena Moseten (OMIN)',
          tipo: 'MATERIALES',
          datosTabla: [
            {
              Equipo: 'Material Metálico Y Policarbonato',
            },
            {
              Equipo: 'Ventanas para Secador Solar',
            },
            {
              Equipo: 'Materiales y Áridos para el Piso',
            },
            {
              Equipo: 'Secador Solar',
            },
            {
              Equipo: 'Estructura metálica',
            },
            {
              Equipo: 'Cobertura de policarbonato',
            },
            {
              Equipo: 'áridos para el piso',
            },
          ],
        },
      },
      fotografias: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '7.jpg',
        '6.jpg',
        '8.jpg',
      ],
    },
    {
      municipio: 'San Buenaventura',
      descripcion:
        'En las comunidades de Altamarani y Tres Hermanos, se llevó adelante la implementación de cajas de abejas meliponas, con el fin de impulsar la producción y recolección de miel nativa, fortaleciendo los sistemas productivos sostenibles y respetuosos con la biodiversidad local. La meliponicultura representa una alternativa que promueve la conservación de polinizadores y el uso sostenible del bosque, generando ingresos sin comprometer los ecosistemas. Por otro lado, en la comunidad de Tres Hermanos, se brindó apoyo al emprendimiento de elaboración de jabones y champús naturales, mediante la realización de capacitaciones especializadas en técnicas artesanales, así como la entrega de insumos, materiales y utensilios necesarios para la producción.Diversificación de productos del emprendimiento TUMI dedicado a la elaboración de jabones medicinales, incorporando champú naturales y medicinales como nuevo producto. Incluye insumos, packing, talleres de capacitación para la elaboración de champú. Se entregaron 120 cajas meliponas para la cría de abejas y producción de miel más capacitaciones en meliponicultura. 60 cajas fueron entregadas a Altamarani y 60 a Tres Hermanos. Se apoyo a un emprendimiento comunitario de elaboración de shampoo y jabones por medio de la compra de insumos (moldes, utensilios, insumos vegetales y aceites naturales) y una capacitación técnica para las 12 personas que integran el emprendimiento',
      tablas: {
        tabla1: {
          comunidad: 'Comunidad Altamarani – Tres Hermanos',
          tipo: 'Modificar a Sistemas Productivos Sustentables.',
          datosTabla: [
            {
              Equipo: 'Cajas de Meliponas',
              Piezas: '150',
            },
          ],
        },
      },
      fotografias: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    },
    {
      municipio: 'Tiquipaya',
      descripcion:
        'Entrega de equipos, herramientas e insumos a la comunidad Molinos de Tiquipaya, para emplearse como alternativas al uso del fuego para fines de prevención de incendios forestales.Entrega de Kit para combate de incendios al Gobierno Autónomo Municipal de Tiquipaya y Brigada de Bomberos de la comunidad Molinos para fines de control y atención rápida de incendios forestales.',
      extraData: [
        {
          extradata: 'Elaboración de Productos Organicos',
        },
        {
          extradata: 'Elaboración de Compost',
        },
      ],
      tablas: {
        tabla1: {
          comunidad: 'Gobierno Autónomo Municipal de Tiquipaya',
          tipo: 'KIT DE BRIGADA',
          datosTabla: [
            {
              Piezas: '2 Piezas',
              Equipo: 'Mochila',
            },
            {
              Piezas: '2 Piezas',
              Equipo: 'Pulasky',
            },
            {
              Piezas: '2 Piezas',
              Equipo: 'Pala Forestal',
            },
            {
              Piezas: '2 Piezas',
              Equipo: 'Bate Fuego',
            },
            {
              Piezas: '2 Piezas',
              Equipo: 'Maclao',
            },
            {
              Piezas: '4 Equipos',
              Equipo: 'Handies',
            },
          ],
        },
        tabla2: {
          comunidad: 'Comunidad Molinos',
          tipo: 'EQUIPO',
          datosTabla: [
            {
              Piezas: '1 Equipo',
              Equipo: 'Maquina Picadora de Ramas',
            },
            {
              Piezas: '2 Kilos',
              Equipo: 'Sulfato de Cobre',
            },
            {
              Piezas: '3 Kilos',
              Equipo: 'Cal Agrícola',
            },
            {
              Piezas: '1 Pieza',
              Equipo: 'Rastrillo Trinche',
            },
            {
              Piezas: '1 Pieza',
              Equipo: 'Lona 2x3 mt',
            },
            {
              Piezas: '4 Kilos',
              Equipo: 'Azufre',
            },
            {
              Piezas: '1 Pieza',
              Equipo: 'Mochila',
            },
            {
              Piezas: '1 Pieza',
              Equipo: 'Pulasky',
            },
            {
              Piezas: '2 Piezas',
              Equipo: 'Pala Forestal',
            },
            {
              Piezas: '2 Piezas',
              Equipo: 'Bate Fuego',
            },
            {
              Piezas: '1 Pieza',
              Equipo: 'Maclao',
            },
          ],
        },
      },
      fotografias: [
        '1.jpeg',
        '2.jpeg',
        '3.jpeg',
        '4.jpeg',
        '5.jpeg',
        '7.jpeg',
        '6.jpeg',
        '8.jpeg',
        '9.jpeg',
        '10.jpeg',
        '11.jpeg',
        '12.jpeg',
      ],
    },
    {
      municipio: 'Vinto',
      descripcion:
        'Entrega de equipos, herramientas e insumos a la comunidad Combuyo Chico de Vinto, para emplearse como alternativas al uso del fuego para fines de prevención de incendios forestales. Entrega de Kit para combate de incendios al Gobierno Autónomo Municipal de Vinto para fines de control y atención rápida de incendios forestales.',
      extraData: [
        {
          extradata: 'Elaboración de Compost',
        },
        {
          extradata: 'Elaboración de Productos Organicos',
        },
      ],
      tablas: {
        tabla1: {
          comunidad: 'Gobierno Autónomo Municipal de Vinto',
          tipo: 'KIT DE BRIGADA',
          datosTabla: [
            {
              Piezas: '4 Piezas',
              Equipo: 'Mochila',
            },
            {
              Piezas: '3 Piezas',
              Equipo: 'Pulasky',
            },
            {
              Piezas: '3 Piezas',
              Equipo: 'Pala Forestal',
            },
            {
              Piezas: '3 Piezas',
              Equipo: 'Bate Fuego',
            },
            {
              Piezas: '3 Piezas',
              Equipo: 'Maclao',
            },
          ],
        },
        tabla2: {
          comunidad: 'Comunidad Combuyo Chico',
          tipo: 'EQUIPO',
          datosTabla: [
            {
              Piezas: '1 Equipo',
              Equipo: 'Maquina Picadora de Ramas',
            },
            {
              Piezas: '2 Kilos',
              Equipo: 'Sulfato de Cobre',
            },
            {
              Piezas: '3 Kilos',
              Equipo: 'Cal Agrícola',
            },
            {
              Piezas: '1 Pieza',
              Equipo: 'Rastrillo Trinche',
            },
            {
              Piezas: '1 Pieza',
              Equipo: 'Lona 2x3 mt',
            },
            {
              Piezas: '4 Kilos',
              Equipo: 'Azufre',
            },
          ],
        },
      },
      fotografias: [
        '1.jpeg',
        '2.jpeg',
        '3.jpeg',
        '4.jpeg',
        '5.jpeg',
        '7.jpeg',
        '6.jpeg',
        '8.jpeg',
        '9.jpeg',
        '10.jpeg',
        '11.jpeg',
        '12.jpeg',
      ],
    },
    {
      municipio: 'Rurrenabaque',
      descripcion:
        'Entrega e instalación de un sistema de refrigeración para apoyar al emprendimiento de ecoturismo..',
      tablas: {
        tabla1: {
          comunidad: 'Comunidad Carmen Florida',
          tipo: 'MATERIALES',
          datosTabla: [
            {
              Equipo: '5 paneles solares',
            },
            {
              Equipo: 'Soportes',
            },
            {
              Equipo: 'Batería de almacenamiento',
            },
            {
              Equipo: 'Controladores de carga',
            },
            {
              Equipo: 'Freezer de 300 litros',
            },
          ],
        },
      },
      fotografias: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',

      ],
    },
    {
      municipio: 'San Borja',
      descripcion:
        'Se realizó la entrega de cajas de abejas meliponas a las comunidades de Tierra Santa y Pachiuval, como parte de las acciones orientadas a promover alternativas sostenibles al uso del fuego en prácticas agroproductivas y de manejo del entorno rural. La implementación de sistemas de meliponicultura representa una estrategia productiva compatible con la conservación del bosque y el uso responsable del territorio, ya que no requiere quema de áreas para su mantenimiento ni para ampliar zonas de producción. Por el contrario, incentiva la preservación de la cobertura vegetal y la biodiversidad, al depender directamente de los ecosistemas forestales para garantizar el alimento de las abejas. Entrega de 123 cajas meliponas para la cria de abejas y producción de miel (78 cajas para Pachiuval y 45 para Tierra Santa) más capacitaciones en meliponicultura.',
      tablas: {
        tabla1: {
          comunidad: 'Comunidad Pachiuval',
          tipo: 'MATERIALES',
          datosTabla: [
            {
              Equipo: 'Cajas de Meliponas',
              Piezas: '150',
            },
          ],
        },
        tabla2: {
          comunidad: 'Comunidad Tierra Santa',
          tipo: 'MATERIALES',
          datosTabla: [
            {
              Equipo: 'Cajas de Meliponas',
              Piezas: '150',
            },
          ],
        },
      },
      fotografias: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
      ],
    },
  ];

  constructor(private modalStateService: ModalStateService) {}

  ngOnInit() {
    this.descripcion = this.alternativas.filter(
      (item) => item.municipio === this.municipio
    );
    /*     this.modalStateService.cerrarVistas()
     */ this.modalStateService.cerrarafectadas();
    this.modalStateService.cerrarFaunaFlora();
    this.modalStateService.cerrarquemas();
    this.modalStateService.cerrarfocos();
  }
  mostrarPantalla1 = true;
  mostrarPantalla2 = false;
  mostrarPantalla3 = false;
  VerAlternativas() {
    this.mostrarPantalla1 = !this.mostrarPantalla1;
    this.mostrarPantalla2 = !this.mostrarPantalla2;
  }
  VerFotografias() {
    this.mostrarPantalla2 = !this.mostrarPantalla2;
    this.mostrarPantalla3 = !this.mostrarPantalla3;
  }

  selectedImage: string | null = null;

  openLightbox(image: string) {
    this.selectedImage =
      this.rutaBaseImagenes + this.descripcion[0].municipio + '/' + image;
      console.log(this.selectedImage)
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
