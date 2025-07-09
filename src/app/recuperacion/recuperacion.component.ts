import { Component, Input, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);
@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class RecuperacionComponent {
  @Input() municipio: string | undefined;
  mostrarPantalla1 = true;
  mostrarPantalla2 = false;
  mostrarPantalla3 = false;
  mucipioSelecionado: any;
  rutaBaseImagenes: string = 'assets/imagenes/FotosRecuperacionYRestauracion/';

  verRecuperacion() {
    this.mostrarPantalla1 = !this.mostrarPantalla1;
    this.mostrarPantalla2 = !this.mostrarPantalla2;
  }
  verFotos() {
    this.mostrarPantalla2 = !this.mostrarPantalla2;
    this.mostrarPantalla3 = !this.mostrarPantalla3;
  }

  datosRecuperacion = [
    {
      municipio: 'Palos Blancos',
      descripcion:
        'Entrega de materiales, herramientas e insumos a la comunidad de Inicua Bajo, con el objetivo de apoyar el establecimiento de plantaciones forestales nativas como parte de las estrategias de restauración ecológica y conservación del entorno natural. Además, se realizó la implementación de plantines de cacao criollo bajo un enfoque agroforestal, promoviendo sistemas productivos sostenibles que integran especies agrícolas y forestales. Se indica que se recuperaron 28 hectáreas',
      tablas: {
        tabla1: {
          comunidad: 'Comunidad Inicua Bajo',
          tipo: 'Equipo',
          datosTabla: [
            {
              Equipo: '2 Carretillas',
            },
            {
              Equipo: '4 Palas',
            },
            {
              Equipo: '4 Azadones',
            },
            {
              Equipo: '4 Regaderas',
            },
          ],
        },
        tabla2: {
          tipo: 'Plantines',
          datosTabla: [
            {
              Equipo: 'Plantas de Cacao',
              Piezas: '625',
            },
            {
              Equipo: 'Plantines de Especies Forestales',
              Piezas: '280',
            },
            {
              Equipo: 'Plantines Frutales',
              Piezas: '280',
            },
            {
              Equipo: 'Varetas de Cacao',
              Piezas: '3.750',
            },
          ],
        },
      },
    },
    {
      municipio: 'San Buenaventura',
      descripcion:
        'Entrega de plantines de cacao criollo y especies forestales nativas a la comunidad de Tres Hermanos, como parte de las acciones de fortalecimiento de sistemas agroforestales y restauración ambiental. Esta intervención busca promover prácticas productivas sostenibles que aseguren la conservación de la biodiversidad, el manejo adecuado del suelo y el incremento de cobertura vegetal. Establecimiento de plantines de cacao criollo en parcelas agroforestales. Se recuperaron 8,75 hectáreas',
      tablas: {
        tabla1: {
          comunidad: 'Comunidad Tres Hermanos ',
          tipo: 'Plantines',
          datosTabla: [
            {
              Equipo: 'Cacao Criollo',
              Piezas: '4600',
            },
            {
              Equipo: 'Plantines de especies forestales',
              Piezas: '230',
            },
          ],
        },
        tabla2: {
          comunidad: '',
          tipo: 'Especies',
          datosTabla: [
            {
              Equipo: 'Cedro',
              Piezas: null,
            },
            {
              Equipo: 'Palo Maria',
              Piezas: null,
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
      municipio: 'Tiquipaya',
      descripcion:
        'Entrega de materiales, herramientas en insumos al Gobierno Autónomo Municipal de Tiquipaya para la producción de plantines forestales nativos para establecimiento de plantaciones en zonas priorizadas en la próxima temporada de lluvias. Entrega de herramientas a la comunidad Molinos para el establecimiento de plantaciones forestales, y entrega de geomembrana para implementación de un atajado para la captura de agua, con fines de apoyo a la recuperación, prevención y mitigación de incendios. Se apoyó con la entrega de diesel para la implementación de obras de prevención y mitigación de incendios, por medio de fajas cortafuegos y la geomembrana para un atajado para la captura de agua Se estima la recuperación de 20 hectáreas.',
      tablas: {
        tabla1: {
          comunidad: 'Gobierno Autónomo Municipal de Tiquipaya ',
          tipo: 'Semillas Forestales',
          datosTabla: [
            {
              Equipo: 'Semilla Kewiña',
              Piezas: '1kg ',
            },
            {
              Equipo: ' Semilla Kiswara',
              Piezas: '1kg',
            },
            {
              Equipo: 'Semilla Lloque',
              Piezas: '0,1 Kg',
            },
            {
              Equipo: 'Semilla Retama',
              Piezas: '0,5 kg ',
            },
          ],
        },
        tabla2: {
          tipo: null,
          datosTabla: [
            {
              Equipo: '2 Rollo Agrofil',
              Piezas: '',
            },
            {
              Equipo: '1 Rollo Semisombra',
              Piezas: '',
            },
            {
              Equipo: ' Enraizante Liquido',
              Piezas: '2 Litros',
            },
            {
              Equipo: 'Enraizante Polvo',
              Piezas: '2 Unidades ',
            },
            {
              Equipo: 'Bolsas',
              Piezas: '60kg',
            },
            {
              Equipo: 'Tijeras de Podar',
              Piezas: '10 ',
            },
            {
              Piezas: '300 Litros',
              Equipo: 'Diesel',
            },
            {
              Piezas: 'Geomembrana',
              Equipo: '',
            },
          ],
        },
        tabla3: {
          comunidad: 'Comunidad Molinos',
          tipo: 'EQUIPO',
          datosTabla: [
            {
              Equipo: '44 Pala',
              Piezas: '',
            },
            {
              Equipo: '44 Picota',
              Piezas: '',
            },
            {
              Equipo: 'Geomembrana',
              Piezas: '1 Pieza 180 m2',
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
      ],
    },
    {
      municipio: 'Vinto',
      descripcion:
        'Entrega de materiales, herramientas en insumos al Gobierno Autónomo Municipal de Vinto para la producción de plantines forestales nativos para establecimiento de plantaciones en zonas priorizadas en la próxima temporada de lluvias. Entrega de herramientas a la comunidad Combuyo Chico para el establecimiento de plantaciones forestales. Se recuperarán 20 hectáreas',
      tablas: {
        tabla1: {
          comunidad: 'Gobierno Autónomo Municipal de Vinto ',
          tipo: ' Semillas Forestales',
          datosTabla: [
            {
              Equipo: '1,25kg Semilla Chacatea',
              Piezas: '',
            },
            {
              Equipo: '0,75kg Semilla Jacaranda',
              Piezas: '',
            },
            {
              Equipo: '0,15kg Semilla Lloque',
              Piezas: '',
            },
            {
              Equipo: '1,25 kg Semilla Molle',
              Piezas: '',
            },
            {
              Equipo: '0,75kg Semilla Soto',
              Piezas: '',
            },
            {
              Equipo: 'Tallos de Tuno',
              Piezas: '',
            },
          ],
        },
        tabla2: {
          tipo: null,
          datosTabla: [
            {
              Equipo: '2 Rollos Agrofil',
              Piezas: '',
            },
            {
              Equipo: '4 Rollos Semisombra',
              Piezas: '',
            },
            {
              Equipo: '2 Litros Enraizante Liquido',
              Piezas: '',
            },
            {
              Equipo: '2 Unidades Enraizante Polvo',
              Piezas: '',
            },
            {
              Equipo: '60kg Bolsas',
              Piezas: '',
            },
            {
              Equipo: '24 Cubos Lama',
              Piezas: '',
            },
          ],
        },
        tabla3: {
          comunidad: 'Comunidad Combuyo Chico',
          tipo: 'EQUIPO',
          datosTabla: [
            {
              Equipo: '45 Pala',
              Piezas: '',
            },
            {
              Equipo: '45 Picotas',
              Piezas: '',
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
      ],
    },
    {
      municipio: 'Rurrenabaque',
      descripcion:
        'Desarrollo de actividades orientadas a la implementación de plantines de cacao criollo bajo un enfoque agroforestal, en el marco del fortalecimiento de sistemas productivos resilientes en el municipio de Rurrenabaque. Esta intervención busca mejorar la recuperación de suelos degradados. Se busca la rehabilitación de 14,5 hectáreas en sistemas agroforestales, teniendo como principal protagonista al cacao criollo',
      tablas: {
        tabla1: {
          comunidad: 'Asunción del Quiquibey ',
          tipo: ' Plantines',
          datosTabla: [
            {
              Equipo: 'Cacao Criollo',
              Piezas: '5.800',
            },
            {
              Equipo: 'Plantines Forestales',
              Piezas: '139',
            },
          ],
        },
        tabla2: {
          comunidad: '',
          tipo: ' Especies',
          datosTabla: [
            {
              Equipo: 'Cedro',
              Piezas: '',
            },
            {
              Equipo: 'Toco colorado',
              Piezas: '',
            },
            {
              Equipo: 'Palo maría',
              Piezas: '',
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
      municipio: 'San Borja',
      descripcion:
        'Entrega de plantines de cacao criollo y especies forestales a la comunidad de Pachiuval. Esta intervención tiene como objetivo promover la reforestación y mejorar la calidad del suelo. Se recuperaron 8,75 hectáreas',
      tablas: {
        tabla1: {
          comunidad: 'Comunidad Pachiuval ',
          tipo: ' Plantines forestales nativos',
          datosTabla: [
            {
              Equipo: 'Cacao Criollo',
              Piezas: '3500',
            },
            {
              Equipo: 'Plantines de Especies Forestales',
              Piezas: '350',
            },
            {
              Equipo: 'Toco colorado',
              Piezas: '350',
            },
          ],
        },
        tabla3: {
          comunidad: '',
          tipo: 'Especies',
          datosTabla: [
            {
              Equipo: 'Cedro',
              Piezas: null,
            },
            {
              Equipo: 'Toco Colorado',
              Piezas: null,
            },
            {
              Equipo: 'Palo María',
              Piezas: null,
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
  ];
  ngOnInit() {
    this.mucipioSelecionado = this.datosRecuperacion.filter(
      (item) => item.municipio === this.municipio
    );
  }
  selectedImage: string | null = null;

  openLightbox(image: string) {
    this.selectedImage =
      this.rutaBaseImagenes +
      this.mucipioSelecionado[0].municipio +
      '/' +
      image;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
}
