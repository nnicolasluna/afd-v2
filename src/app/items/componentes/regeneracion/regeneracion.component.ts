import { Component, Input, Output, EventEmitter } from '@angular/core';
interface datosPasiva {
  datos: { dato: string; Cantidad: string }[];
}
@Component({
  selector: 'app-regeneracion',
  templateUrl: './regeneracion.component.html',
  styleUrls: ['./regeneracion.component.scss'],
})
export class RegeneracionComponent {
  @Input() Municipio: string = '';
  @Output() tipomapa = new EventEmitter<any>();
  seleccionado: string = '';
  municipioData: any;
  datostabla: any;
  datosactivo: any;
  data = [
    {
      municipio: 'Palos Blancos',
      leyenda: [
        { texto: 'Áreas Protegida', img: 'assets/iconosLeyenda/city2.png' },
        { texto: 'Áreas Quemadas', img: 'assets/iconosLeyenda/aq.png' },
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        { texto: 'Regeneración  pasiva', img: 'assets/iconosLeyenda/b2.png' },
        { texto: 'Áreas de Restauración', img: 'assets/iconosLeyenda/ap7.png' },
      ],
    },
    {
      municipio: 'San Buenaventura',
      leyenda: [
        { texto: 'Áreas Protegida', img: 'assets/iconosLeyenda/city2.png' },
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Areas de Restauración', img: 'assets/iconosLeyenda/ap.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
    {
      municipio: 'Tiquipaya',
      leyenda: [
        { texto: 'Áreas Protegida', img: 'assets/iconosLeyenda/city2.png' },
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Areas de Restauración', img: 'assets/iconosLeyenda/ap.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
    {
      municipio: 'Vinto',
      leyenda: [
        { texto: 'Áreas Protegida', img: 'assets/iconosLeyenda/city2.png' },
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Areas de Restauración', img: 'assets/iconosLeyenda/ap.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
    {
      municipio: 'San Borja',
      leyenda: [
        { texto: 'Áreas Protegida', img: 'assets/iconosLeyenda/city2.png' },
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Areas de Restauración', img: 'assets/iconosLeyenda/ap.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
    {
      municipio: 'Rurrenabaque',
      leyenda: [
        { texto: 'Áreas Protegida', img: 'assets/iconosLeyenda/city2.png' },
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Areas de Restauración', img: 'assets/iconosLeyenda/ap.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
  ];
  activa = [
    {
      municipio: 'Palos Blancos',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Áreas de Restauración', img: 'assets/iconosLeyenda/pcp.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva ',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
    {
      municipio: 'San Buenaventura',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Areas de Restauración', img: 'assets/iconosLeyenda/ap.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
    {
      municipio: 'Tiquipaya',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Areas de Restauración', img: 'assets/iconosLeyenda/ap.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
    {
      municipio: 'Vinto',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Areas de Restauración', img: 'assets/iconosLeyenda/ap.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
    {
      municipio: 'San Borja',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Areas de Restauración', img: 'assets/iconosLeyenda/ap.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
    {
      municipio: 'Rurrenabaque',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Areas de Restauración', img: 'assets/iconosLeyenda/ap.png' },
        {
          texto: 'Comunidades',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Regeneración vegetal pasiva',
          img: 'assets/iconosLeyenda/b2.png',
        },
      ],
    },
  ];
  datosPasiva: Record<string, datosPasiva> = {
    'Palos Blancos': {
      datos: [
        { dato: 'Area Restauración Preliminar', Cantidad: '16.675,10 ha' },
        { dato: 'Área Quemada', Cantidad: '116,19 ha' },
        { dato: 'Área Regeneración Natural', Cantidad: '16674,1 ha' },
      ],
    },
    'San Buenaventura': {
      datos: [
        { dato: 'Area Restauración Preliminar', Cantidad: '5.898,20 ha' },
        { dato: 'Área Quemada', Cantidad: '1.009,30 ha' },
        { dato: 'Área Regeneración Natural', Cantidad: '179,7 ha' },
      ],
    },
    Tiquipaya: {
      datos: [
        { dato: 'Area Restauración Preliminar', Cantidad: '125,45 ha' },
        { dato: 'Área Quemada', Cantidad: '337,8 ha' },
        { dato: 'Área Regeneración Natural', Cantidad: '2,2 ha' },
      ],
    },
    Vinto: {
      datos: [
        { dato: 'Area Restauración Preliminar', Cantidad: '382 ha' },
        { dato: 'Área Quemada', Cantidad: '161,2 ha' },
        { dato: 'Área Regeneración Natural', Cantidad: '108,9 ha' },
      ],
    },
    Rurrenabaque: {
      datos: [
        { dato: 'Area Restauración Preliminar', Cantidad: '12.080,50 ha' },
        { dato: 'Área Quemada', Cantidad: '2.205,19 ha' },
        { dato: 'Área Regeneración Natural', Cantidad: '1.142,20 ha' },
      ],
    },
    'San Borja': {
      datos: [
        { dato: 'Area Restauración Preliminar', Cantidad: '29.278,40 ha' },
        { dato: 'Área Quemada', Cantidad: '4.954,73 ha' },
        { dato: 'Área Regeneración Natural', Cantidad: '2.117,7 ha' },
      ],
    },
  };
  Datosactiva = [
    {
      municipio: 'Palos Blancos',
      leyenda:
        'Implementación de plantines de cacao criollo con enfoque  agroforestal y mejoramiento de la genética del material vegetal mediante la implementación de varetas',
      area: '28 ha',
    },
    {
      municipio: 'San Buenaventura',
      leyenda:
        'Implementación de plantines de cacao criollo con enfoque agroforestal.',
      area: '11,5 ha',
    },
    {
      municipio: 'Tiquipaya',
      leyenda:
        'Producción de plantines forestales nativos para establecimiento de plantaciones en zonas priorizadas con fines de apoyo a la recuperación',
      area: '20 ha',
    },
    {
      municipio: 'Vinto',
      leyenda:
        'Producción de plantines forestales nativos para establecimiento de plantaciones en zonas priorizadas.',
      area: '20 ha',
    },
    {
      municipio: 'San Borja',
      leyenda:
        'Implementación de plantines de cacao criollo con enfoque agroforestal',
      area: '14,5 ha',
    },
    {
      municipio: 'Rurrenabaque',
      leyenda:
        'Implementación de plantines de cacao criollo con enfoque agroforestal',
      area: '8,75 ha',
    },
  ];
  ngOnInit(): void {
    this.buscarMunicipio(this.Municipio, 'pasiva');
  }
  buscarMunicipio(nombreMunicipio: string, opcion: string) {
    this.seleccionado = opcion;
    if (opcion == 'pasiva') {
      this.municipioData = this.data.find(
        (item) => item.municipio === nombreMunicipio
      );
      this.datostabla = this.obtenerDatosMunicipio(nombreMunicipio);
      this.tipomapa.emit('pasiva');
    } else {
      this.tipomapa.emit('activa');
      this.municipioData = this.activa.find(
        (item) => item.municipio === nombreMunicipio
      );
      this.datosactivo = this.Datosactiva.find(
        (item) => item.municipio === nombreMunicipio
      );
    }
  }
  obtenerDatosMunicipio(municipioBuscado: string): datosPasiva | undefined {
    return this.datosPasiva[municipioBuscado];
  }
}
