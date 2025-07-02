import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flora-fauna',
  templateUrl: './flora-fauna.component.html',
  styleUrls: ['./flora-fauna.component.scss'],
})
export class FloraFaunaComponent {
  @Input() Municipio: string = '';
  @Input() datos: any[] = [];
  @Input() tipo: any;
  @Output() tipomapa = new EventEmitter<any>();
  infosec: any;
  municipioData: any;
  seleccionado: string = '';
  seleccionadoFauna: string = '';
  data = [
    {
      municipio: 'Palos Blancos',
      fauna: {
        centrosPoblados: [
          {
            texto: 'Principales Centros Poblados',
            img: 'assets/iconosLeyenda/pcp.png',
          },
          { texto: 'Centros Poblados', img: 'assets/iconosLeyenda/cp.png' },
          /*           { texto: 'Límite Municipal', img: 'assets/iconosLeyenda/lc.png' },
           */ {
            texto: 'Límite Municipal-Palos Blancos',
            img: 'assets/iconosLeyenda/lmM.png',
          },
        ],
        areaquemada: [
          { texto: 'Área Quemada 2023', img: 'assets/iconosLeyenda/aq.png' },
        ],
        Tco: [
          { texto: 'Mosetenes', img: 'assets/iconosLeyenda/city1.png' },
          { texto: 'Pilón Lajas', img: 'assets/iconosLeyenda/city2.png' },
        ],
        areasprotegidas: [
          {
            texto: 'Reserva de la Biosfera Pilón Lajas',
            img: 'assets/iconosLeyenda/ap.png',
          },
        ],
        bosques: [
          { texto: 'Bosque Amazónico', img: 'assets/iconosLeyenda/b1.png' },
          { texto: 'Bosque Yungas', img: 'assets/iconosLeyenda/b2.png' },
        ],
      },
    },
    {
      municipio: 'San Buenaventura',
      fauna: {
        centrosPoblados: [
          {
            texto: 'Principales Centros Poblados',
            img: 'assets/iconosLeyenda/pcp.png',
          },
          { texto: 'Centros Poblados', img: 'assets/iconosLeyenda/cp.png' },
          /*           { texto: 'Límite Municipal', img: 'assets/iconosLeyenda/lm.png' },
           */ {
            texto: 'Límite Municipal-San Buenaventura',
            img: 'assets/iconosLeyenda/lmM.png',
          },
        ],
        areaquemada: [
          { texto: 'Área Quemada 2023', img: 'assets/iconosLeyenda/aq.png' },
        ],
        Tco: [
          {
            texto: 'San Jose de Uchupiamonas',
            img: 'assets/iconosLeyenda/city1.png',
          },
          { texto: 'Tacana I', img: 'assets/iconosLeyenda/city2.png' },
        ],
        areasprotegidas: [
          {
            texto: 'Área Natural de Manejo Integrado Madidi',
            img: 'assets/iconosLeyenda/ap.png',
          },
        ],
        bosques: [
          { texto: 'Bosque Amazónico', img: 'assets/iconosLeyenda/b1.png' },
          { texto: 'Bosque Yungas', img: 'assets/iconosLeyenda/b2.png' },
        ],
      },
    },
    {
      municipio: 'Tiquipaya',
      fauna: {
        centrosPoblados: [
          { texto: 'Centros Poblados', img: 'assets/iconosLeyenda/cp.png' },
        ],
        areaquemada: [
          { texto: '1 año', img: 'assets/iconosLeyenda/aq.png' },
          { texto: '2 años', img: 'assets/iconosLeyenda/aq2.png' },
          { texto: '3 años', img: 'assets/iconosLeyenda/aq3.png' },
        ],
        areasprotegidas: [
          { texto: 'Parque Nacional', img: 'assets/iconosLeyenda/ap.png' },
          {
            texto: 'Reserva de Vida Silvestre',
            img: 'assets/iconosLeyenda/ap2.png',
          },
        ],
        bosques: [
          {
            texto: 'Bosque Seco Interandino',
            img: 'assets/iconosLeyenda/b1.png',
          },
        ],
      },
    },
    {
      municipio: 'Vinto',
      fauna: {
        centrosPoblados: [
          { texto: 'Centros Poblados', img: 'assets/iconosLeyenda/cp.png' },
        ],
        areaquemada: [
          { texto: '1 año', img: 'assets/iconosLeyenda/aq.png' },
          { texto: '2 años', img: 'assets/iconosLeyenda/aq2.png' },
        ],
        areasprotegidas: [
          {
            texto: 'Parque Nacional Tunari',
            img: 'assets/iconosLeyenda/ap.png',
          },
        ],
        bosques: [
          { texto: 'Bosque Andino', img: 'assets/iconosLeyenda/b1.png' },
          {
            texto: 'Bosque Seco Interandino',
            img: 'assets/iconosLeyenda/b2.png',
          },
        ],
      },
    },
    {
      municipio: 'Rurrenabaque',
      fauna: {
        centrosPoblados: [
          {
            texto: 'Principales Centros Poblados',
            img: 'assets/iconosLeyenda/pcp.png',
          },
          { texto: 'Centros Poblados', img: 'assets/iconosLeyenda/cp.png' },
          /*           { texto: 'Límite Municipal', img: 'assets/iconosLeyenda/lm.png' },
           */ {
            texto: 'Límite Municipal-Rurrenabaque',
            img: 'assets/iconosLeyenda/lmM.png',
          },
        ],
        areaquemada: [
          { texto: 'Área Quemada 2023', img: 'assets/iconosLeyenda/aq.png' },
        ],
        Tco: [
          { texto: 'Pilón Lajas', img: 'assets/iconosLeyenda/city1.png' },
          { texto: 'Tacana I', img: 'assets/iconosLeyenda/pccity2p.png' },
        ],
        areasprotegidas: [
          {
            texto: 'Reserva de la Biosfera Pilón Lajas',
            img: 'assets/iconosLeyenda/ap.png',
          },
        ],
        bosques: [
          { texto: 'Bosque Amazónico', img: 'assets/iconosLeyenda/b1.png' },
          {
            texto: 'Bosque de Llanuras Inundables',
            img: 'assets/iconosLeyenda/b2.png',
          },
        ],
      },
    },
    {
      municipio: 'San Borja',
      fauna: {
        centrosPoblados: [
          {
            texto: 'Principales Centros Poblados',
            img: 'assets/iconosLeyenda/pcp.png',
          },
          { texto: 'Centros Poblados', img: 'assets/iconosLeyenda/cp.png' },
          { texto: 'Área Quemada 2023', img: 'assets/iconosLeyenda/aq.png' },
          {
            texto: 'Límite Municipal-San Borja',
            img: 'assets/iconosLeyenda/lmM.png',
          },
          /*           { texto: 'Límite Municipal', img: 'assets/iconosLeyenda/lm.png' },
           */
        ],
        Tco: [
          { texto: 'Pilón Lajas', img: 'assets/iconosLeyenda/city1.png' },
          {
            texto: 'Territorio Indígena Chiman',
            img: 'assets/iconosLeyenda/city2.png',
          },
        ],
        areasprotegidas: [
          {
            texto: 'Parque Nacional y Territorio Indígena Isiboro Sécure',
            img: 'assets/iconosLeyenda/ap.png',
          },
          {
            texto: 'Parque Regional Yacuma',
            img: 'assets/iconosLeyenda/ap.png',
          },
          {
            texto: 'Refugio de Vida Silvestre Espíritu de Elíser',
            img: 'assets/iconosLeyenda/ap2.png',
          },
          {
            texto: 'Reserva de la Biosfera y Territorio Indígena Pilón Lajas',
            img: 'assets/iconosLeyenda/ap3.png',
          },
          {
            texto: 'Reserva de la Biosfera Estación Biológica del Beni',
            img: 'assets/iconosLeyenda/ap4.png',
          },
          {
            texto: 'Zona de Protección de CH Eva Eva Mosetenes',
            img: 'assets/iconosLeyenda/ap5.png',
          },
          {
            texto: 'Área Protegida Municipal Cabeceras del Maniquí',
            img: 'assets/iconosLeyenda/ap6.png',
          },
        ],
        bosques: [
          { texto: 'Bosque Amazónico', img: 'assets/iconosLeyenda/b1.png' },
          {
            texto: 'Bosque de Llanuras Inundables',
            img: 'assets/iconosLeyenda/b2.png',
          },
          { texto: 'Bosque Yungas', img: 'assets/iconosLeyenda/b3.png' },
        ],
      },
    },
  ];
  fauna = [
    {
      municipio: 'Palos Blancos',
      especiesAmenazadas: {
        centrosPoblados: [
          {
            texto: 'Principales Centros Poblados',
            img: 'assets/iconosLeyenda/pcp.png',
          },
          { texto: 'Área Quemada 2023', img: 'assets/iconosLeyenda/aq.png' },
          /*           { texto: 'Límite Municipal', img: 'assets/iconosLeyenda/lmM.png' },
           */
        ],
        anfibiosReptiles: {
          anfibios: [
            {
              texto: 'Rana Terrestre de McDiarmid',
              img: 'assets/iconosLeyenda/ap3.png',
            },
            {
              texto: 'Rana Armada Andina',
              img: 'assets/iconosLeyenda/ap2.png',
            },
            {
              texto: 'Rana de Cristal de Bejarano',
              img: 'assets/iconosLeyenda/ap6.png',
            },
          ],
          reptiles: [
            { texto: 'Culebra de Balzan', img: 'assets/iconosLeyenda/ap4.png' },
          ],
        },
        avesMamiferos: {
          aves: [
            { texto: 'Guacamayo militar', img: 'assets/iconosLeyenda/ap2.png' },
            {
              texto: 'Espatulilla Colicorta',
              img: 'assets/iconosLeyenda/ap3.png',
            },
            {
              texto: 'Mosquero de Weeden',
              img: 'assets/iconosLeyenda/ap4.png',
            },
            { texto: 'Tucán de castaño', img: 'assets/iconosLeyenda/ap5.png' },
            {
              texto: 'Cuco terrestre de Geoffroy',
              img: 'assets/iconosLeyenda/ap6.png',
            },
            {
              texto: 'Cotorra serrana boliviana',
              img: 'assets/iconosLeyenda/ap7.png',
            },
          ],
          /*           "mamiferos": []
           */
        },
      },
    },
    {
      municipio: 'San Buenaventura',
      especiesAmenazadas: {
        centrosPoblados: [
          {
            texto: 'Principales Centros Poblados',
            img: 'assets/iconosLeyenda/pcp.png',
          },
          { texto: 'Área Quemada 2023', img: 'assets/iconosLeyenda/aq.png' },
          /*           { texto: 'Límite Municipal', img: 'assets/iconosLeyenda/lmM.png' },
           */
        ],
        anfibiosReptiles: {
          anfibios: [
            {
              texto: 'Rana Armada Andina',
              img: 'assets/iconosLeyenda/ap2.png',
            },
          ],
          reptiles: [
            { texto: 'Culebra de Balzan', img: 'assets/iconosLeyenda/ap4.png' },
          ],
        },
        avesMamiferos: {
          aves: [
            { texto: 'Guacamayo militar', img: 'assets/iconosLeyenda/ap2.png' },
            {
              texto: 'Espatulilla colicorta',
              img: 'assets/iconosLeyenda/ap3.png',
            },
            {
              texto: 'Mosquero de Weeden',
              img: 'assets/iconosLeyenda/ap4.png',
            },
            { texto: 'Tucán de castaño', img: 'assets/iconosLeyenda/ap5.png' },
            {
              texto: 'Cuco terrestre de Geoffroy',
              img: 'assets/iconosLeyenda/ap6.png',
            },
            {
              texto: 'Mosquitero Conirostris',
              img: 'assets/iconosLeyenda/ap7.png',
            },
          ],
          /*           "mamiferos": []
           */
        },
      },
    },
    {
      municipio: 'Tiquipaya',
      especiesAmenazadas: {
        centrosPoblados: [
          {
            texto: 'Principales Centros Poblados',
            img: 'assets/iconosLeyenda/pcp.png',
          },
          { texto: 'Área Quemada 2023', img: 'assets/iconosLeyenda/aq.png' },
          /*           { texto: 'Límite Municipal', img: 'assets/iconosLeyenda/lmM.png' },
           */
        ],
        anfibiosReptiles: {
          anfibios: [
            { texto: 'Sapo chechua', img: 'assets/iconosLeyenda/ap2.png' },
          ],
          reptiles: [
            { texto: 'Lagartija rayada', img: 'assets/iconosLeyenda/ap3.png' },
          ],
        },
        avesMamiferos: {
          aves: [
            {
              texto: 'Monterita de Garlepp',
              img: 'assets/iconosLeyenda/ap2.png',
            },
          ],
          mamiferos: [
            { texto: 'Ratón de Siberia', img: 'assets/iconosLeyenda/ap3.png' },
          ],
        },
      },
    },
    {
      municipio: 'Vinto',
      especiesAmenazadas: {
        centrosPoblados: [
          {
            texto: 'Principales Centros Poblados',
            img: 'assets/iconosLeyenda/pcp.png',
          },
          { texto: 'Área Quemada 2023', img: 'assets/iconosLeyenda/aq.png' },
          /*           { texto: 'Límite Municipal', img: 'assets/iconosLeyenda/lmM.png' },
           */
        ],
        anfibiosReptiles: {
          anfibios: [
            { texto: 'Sapo chechua', img: 'assets/iconosLeyenda/ap2.png' },
          ],
          /*           "reptiles": []
           */
        },
        avesMamiferos: {
          aves: [
            {
              texto: 'Monterita de Garlepp',
              img: 'assets/iconosLeyenda/ap2.png',
            },
          ],
          mamiferos: [
            { texto: 'Ratón de Siberia', img: 'assets/iconosLeyenda/ap3.png' },
          ],
        },
      },
    },
    {
      municipio: 'Rurrenabaque',
      especiesAmenazadas: {
        centrosPoblados: [
          {
            texto: 'Principales Centros Poblados',
            img: 'assets/iconosLeyenda/pcp.png',
          },
          { texto: 'Área Quemada 2023', img: 'assets/iconosLeyenda/aq.png' },
          /*           { texto: 'Límite Municipal', img: 'assets/iconosLeyenda/lmM.png' },
           */
        ],
        anfibiosReptiles: {
          anfibios: [
            {
              texto: 'Rana Armada Andina',
              img: 'assets/iconosLeyenda/ap2.png',
            },
          ],
          reptiles: [
            { texto: 'Culebra de Balzan', img: 'assets/iconosLeyenda/ap2.png' },
          ],
        },
        avesMamiferos: {
          aves: [
            { texto: 'Guacamayo militar', img: 'assets/iconosLeyenda/ap2.png' },
            {
              texto: 'Espatulilla Colicorta',
              img: 'assets/iconosLeyenda/ap3.png',
            },
            { texto: 'Tucán de castaño', img: 'assets/iconosLeyenda/ap4.png' },
            {
              texto: 'Cuco terrestre de Geoffroy',
              img: 'assets/iconosLeyenda/ap5.png',
            },
          ],
          mamiferos: [
            { texto: 'Nutria gigante', img: 'assets/iconosLeyenda/ap6.png' },
          ],
        },
      },
    },
    {
      municipio: 'San Borja',
      especiesAmenazadas: {
        centrosPoblados: [
          {
            texto: 'Principales Centros Poblados',
            img: 'assets/iconosLeyenda/pcp.png',
          },
          { texto: 'Área Quemada 2023', img: 'assets/iconosLeyenda/aq.png' },
          /*           { texto: 'Límite Municipal', img: 'assets/iconosLeyenda/lmM.png' },
           */
        ],
        anfibiosReptiles: {
          anfibios: [
            {
              texto: 'Rana terrestre de McDiarmid',
              img: 'assets/iconosLeyenda/ap2.png',
            },
          ],
          reptiles: [
            { texto: 'Culebra de Balzan', img: 'assets/iconosLeyenda/ap3.png' },
          ],
        },
        avesMamiferos: {
          aves: [
            { texto: 'Guacamayo militar', img: 'assets/iconosLeyenda/ap2.png' },
            {
              texto: 'Espatulilla Colicorta',
              img: 'assets/iconosLeyenda/ap3.png',
            },
            {
              texto: 'Mosquero de Weecen',
              img: 'assets/iconosLeyenda/ap4.png',
            },
            { texto: 'Tucán de castaño', img: 'assets/iconosLeyenda/ap5.png' },
            { texto: 'Cuco terrestre', img: 'assets/iconosLeyenda/ap6.png' },
            {
              texto: 'Cotorra serrana boliviana',
              img: 'assets/iconosLeyenda/ap7.png',
            },
          ],
          mamiferos: [
            { texto: 'Tití modesto', img: 'assets/iconosLeyenda/ap2.png' },
            { texto: 'Tití de Olalla', img: 'assets/iconosLeyenda/ap3.png' },
            { texto: 'Nutria gigante', img: 'assets/iconosLeyenda/ap4.png' },
          ],
        },
      },
    },
  ];
  info = [
    {
      nombre: 'Palos Blancos',
      CoberturaForestal: [
        {
          texto: 'Bosques Conservados',
          cantidad: '328,939 ha',
        },
        {
          texto: 'Bosques de Yungas',
          cantidad: '286,978 ha',
        },
        {
          texto: 'Bosques Amazónicos',
          cantidad: '41,961 ha',
        },
      ],
      territoriosIndigenas: [
        {
          texto: 'Reserva Pilón Lajas',
          cantidad: '130,892 ha',
        },
        {
          texto: 'TCOs Pilón Lajas y Mosetenes',
          cantidad: '130,892 ha',
        },
        {
          texto: 'Municipio con territorio de alto valor ecológico y social',
        },
      ],
      Incendios: [
        {
          texto: 'ha Afectadas por Quemas 2023',
          cantidad: '2,165 ha',
        },
        {
          texto: 'ha de los Bosques Dañados',
          cantidad: '1,899 ha',
        },
        {
          texto: 'ha de la Reserva Pilón Lajas afectada',
          cantidad: '72 ha',
        },
      ],
      territorios: [
        {
          texto: 'Moseten 79.919,5 ha',
          cantidad: '',
        },
        {
          texto: 'Total,  ',
          cantidad: 'Total, de tcos  79.919,5 ha',
        },
      ],
    },
    {
      nombre: 'San Buenaventura',
      CoberturaForestal: [
        {
          texto: 'Bosque Amazónico',
          cantidad: '205,107 ha',
        },
        {
          texto: 'Bosques de Yungas',
          cantidad: '61,227 ha',
        },
        {
          texto: 'Total de Bosque',
          cantidad: '266,334 ha',
        },
      ],
      territoriosIndigenas: [
        {
          texto: 'Área Natural de Manejo Integrado Pilón Lajas Madidi ',
          cantidad: '117.292 ha',
        },
        {
          texto: 'Reserva de la Biósfera Pilón Lajas ',
          cantidad: '0,19',
        },
        {
          texto: 'Total, de áreas protegidas ',
          cantidad: '294.963 ha',
        },
      ],
      Incendios: [
        {
          texto: 'Bosque Amazónico: 7.478 hectáreas quemadas',
          cantidad: '7.478 hectáreas quemadas',
        },
        {
          texto: 'Bosque de Yungas: ',
          cantidad: '3.731 hectáreas quemadas',
        },
        {
          texto: 'Total,  ',
          cantidad: 'afectado: 14.853 hectáreas. ',
        },
      ],
      territorios: [
        {
          texto: 'San José de Uchupiamonas 90.755 ha',
          cantidad: '',
        },
        {
          texto: '	Tacana I 204,208 ha',
          cantidad: '',
        },
        {
          texto: 'Total,  ',
          cantidad: 'Total, de tcos 294.963 ha',
        },
      ],
    },
    {
      nombre: 'Tiquipaya',
      CoberturaForestal: [
        {
          texto: 'Parque Nacional Tunari',
          cantidad: '29,300 ha',
        },
        {
          texto: 'Área Protegida Norte Tiquipaya',
          cantidad: '204,208 ha',
        },
        {
          texto: 'Bosque Seco Interandino',
          cantidad: '342 ha',
        },
        {
          texto: 'Bosque Andino',
          cantidad: '36 ha',
        },
      ],
      territoriosIndigenas: [
        {
          texto: 'Parque Nacional Tunari 29.300 ha ',
          cantidad: '',
        },
        {
          texto: 'Área Protegida Norte Tiquipaya 204.208 ha',
          cantidad: '',
        },

      ],
      Incendios: [
        {
          texto: 'ha quemadas en total',
          cantidad: '254 ha',
        },
        {
          texto: 'ha afectadas en el Norte de Tiquipaya',
          cantidad: '86.6 ha (2.3%)',
        },
        {
          texto: 'ha afectadas del Bosque Seco Interandino',
          cantidad: '3 ha (0.85%)',
        },
        {
          texto: 'Bosque Andino sin afectación registrada',
        },
      ],
    },
    {
      nombre: 'Vinto',
      territoriosIndigenas: [
        {
          texto: 'Parque Nacional Tunari 16,711 ha ',
          cantidad: '',
        },
      ],
      CoberturaForestal: [
        {
          texto: 'Parque Nacional Tunari',
          cantidad: '16,711 ha',
        },
        {
          texto: 'Bosque Seco Interandino',
          cantidad: '1,027 ha',
        },
        {
          texto: 'Bosque Andino',
          cantidad: '143 ha',
        },
      ],
      Incendios: [
        {
          texto: 'ha quemadas en total',
          cantidad: '452 ha',
        },
        {
          texto: 'Porcentaje del daño en Parque Tunari',
          descripcion: 'El 99% del daño ocurrió dentro del Parque Tunari',
        },
        {
          texto: 'ha afectadas del Bosque Seco Interandino',
          cantidad: '41 ha (0.85%)',
        },
        {
          texto: 'ha quemadas en Parque Nacional Tunari',
          cantidad: '449 ha (2.7%)',
        },
      ],
    },
    {
      nombre: 'San Borja',
      CoberturaForestal: [
        {
          texto: 'Municipio con alta diversidad biológica',
        },
        {
          texto: 'Bosque Amazónico',
          cantidad: '421,228 ha',
        },
        {
          texto: 'Bosque de Yungas',
          cantidad: '104,219 ha',
        },
        {
          texto: 'Áreas protegidas para la región',
          cantidad: '7',
        },
      ],
      territoriosIndigenas: [
        {
          texto: 'Reserva Pilón Lajas',
          cantidad: '42,873 ha (4.6% quemado)',
        },
        {
          texto: 'Estación Biológica del Beni',
          cantidad: '12,260 ha (13.6% quemado)',
        },
        {
          texto: 'Cabeceras del Maniquí',
          cantidad: '203,562 ha (4.6% quemado)',
        },
        {
          texto: 'Eva Eva Mosetenes',
          cantidad: '135,775 ha (7.8% quemado)',
        },
      ],
      Incendios: [
        {
          texto: 'ha quemadas en Total',
          cantidad: '151,921 ha',
        },
        {
          texto: 'Afectación en bosques, reservas y territorios indígenas',
        },
        {
          texto: 'Bosque Amazónico',
          descripcion: 'el más afectado por su tamaño y exposición',
        },
      ],
    },
    {
      nombre: 'Rurrenabaque',
      CoberturaForestal: [
        {
          texto: 'Reserva Pilón Lajas',
          cantidad: '140,613 ha',
        },
        {
          texto: 'Bosque Amazónico',
          cantidad: '187,647 ha',
        },
        {
          texto: 'Bosque de Yungas',
          cantidad: '22,999 ha',
        },
        {
          texto: 'Bosque de Llanuras Inundables',
          descripcion: 'Ecosistemas Sensibles',
        },
      ],
      territoriosIndigenas: [
        {
          texto: 'Afectación directa a comunidades indígenas',
        },
        {
          texto: 'Pérdida de medios de vida y recursos naturales',
        },
      ],
      Incendios: [
        {
          texto: 'ha quemadas en la Reserva Pilón Lajas',
          cantidad: '24,897 ha',
        },
        {
          texto: 'ha afectadas Bosque Amazónico',
          cantidad: '40,785 ha',
        },
        {
          texto: 'ha afectadas Bosque de Yungas',
          cantidad: '4,574 ha',
        },
      ],
      territorios: [
        {
          texto: 'Pilon Lajas 127.542 ha',
          cantidad: '',
        },
        {
          texto: 'Tacana I 0.0001 ha',
          cantidad: '',
        },
        {
          texto: 'Total,  ',
          cantidad: 'de tcos 127.542 ha',
        },
      ],
    },
  ];
  isMobile = false;
  mostrarLeyenda = false;

  ngOnInit(): void {
    this.buscarMunicipio(this.Municipio, 'Flora');
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }
  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }
  buscarMunicipio(nombreMunicipio: string, opcion: string) {
    this.seleccionado = opcion;
    if (opcion == 'Flora') {
      this.municipioData = this.data.find(
        (item) => item.municipio === nombreMunicipio
      );
      this.tipomapa.emit('flora');
      this.infosec = this.info.find((item) => item.nombre === nombreMunicipio);
    } else {
      this.mostrarfauna('reptiles', nombreMunicipio);
    }
  }
  mostrarfauna(opcion: string, municipio: string) {
    this.seleccionadoFauna = opcion;
    this.municipioData = this.fauna.find(
      (item) => item.municipio === municipio
    );
    if (opcion === 'reptiles') {
      this.tipomapa.emit('reptiles');
    } else {
      this.tipomapa.emit('mamiferos');
    }
  }
}
