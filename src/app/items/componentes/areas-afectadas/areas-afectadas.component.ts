import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-areas-afectadas',
  templateUrl: './areas-afectadas.component.html',
  styleUrls: ['./areas-afectadas.component.scss'],
})
export class AreasAfectadasComponent {
  @Input() Municipio: string = '';

  data: any;
  datos = [
    {
      municipio: 'Palos Blancos',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        {
          texto: 'Comunidades Palos Blancos',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Establecimientos de Salud',
          img: 'assets/iconosLeyenda/muni/es.png',
        },
        {
          texto: 'Instituciones Educativas',
          img: 'assets/iconosLeyenda/muni/ie.png',
        },
        { texto: 'Caminos - Palos Blancos', img: '' },
        {
          texto: 'Principal o Carretero',
          img: 'assets/iconosLeyenda/muni/carretero.png',
        },
        {
          texto: 'Secundario o Vecinal',
          img: 'assets/iconosLeyenda/muni/secundario.png',
        },
        {
          texto: 'Senda Rodera o Vereda',
          img: 'assets/iconosLeyenda/muni/carretero.png',
        },
        { texto: 'Area Protegida', img: 'assets/iconosLeyenda/muni/ap.png' },
        { texto: 'Áreas Afectadas', img: '' },
        { texto: 'Nivel Alto', img: 'assets/iconosLeyenda/muni/nivelAlto.png' },
        {
          texto: 'Nivel Medio',
          img: 'assets/iconosLeyenda/muni/nivelMedio.png',
        },
      ],
    },
    {
      municipio: 'San Buenaventura',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        {
          texto: 'Comunidades San Buenaventura',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Establecimientos de Salud',
          img: 'assets/iconosLeyenda/muni/es.png',
        },
        {
          texto: 'Instituciones Educativas',
          img: 'assets/iconosLeyenda/muni/ie.png',
        },
        { texto: 'Caminos - San Buenaventura', img: '' },
        {
          texto: 'Principal o Carretero',
          img: 'assets/iconosLeyenda/muni/carretero.png',
        },
        {
          texto: 'Secundario o Vecinal',
          img: 'assets/iconosLeyenda/muni/secundario.png',
        },
        {
          texto: 'Senda Rodera o Vereda',
          img: 'assets/iconosLeyenda/muni/carretero.png',
        },
        { texto: 'Area Protegida', img: 'assets/iconosLeyenda/muni/ap.png' },
        { texto: 'Áreas Afectadas', img: '' },
        { texto: 'Nivel Alto', img: 'assets/iconosLeyenda/muni/nivelAlto.png' },
        {
          texto: 'Nivel Medio',
          img: 'assets/iconosLeyenda/muni/nivelMedio.png',
        },
      ],
    },
    {
      municipio: 'Tiquipaya',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        {
          texto: 'Comunidades Tiquipaya',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Establecimientos de Salud',
          img: 'assets/iconosLeyenda/muni/es.png',
        },
        {
          texto: 'Instituciones Educativas',
          img: 'assets/iconosLeyenda/muni/ie.png',
        },
        { texto: 'Caminos - Tiquipaya', img: '' },
        {
          texto: 'Principal o Carretero',
          img: 'assets/iconosLeyenda/muni/carretero.png',
        },
        {
          texto: 'Secundario o Vecinal',
          img: 'assets/iconosLeyenda/muni/secundario.png',
        },
        {
          texto: 'Senda Rodera o Vereda',
          img: 'assets/iconosLeyenda/muni/carretero.png',
        },
        { texto: 'Area Protegida', img: 'assets/iconosLeyenda/muni/ap.png' },
        { texto: 'Áreas Afectadas', img: '' },
        { texto: 'Nivel Alto', img: 'assets/iconosLeyenda/muni/nivelAlto.png' },
        {
          texto: 'Nivel Medio',
          img: 'assets/iconosLeyenda/muni/nivelMedio.png',
        },
      ],
    },
    {
      municipio: 'Vinto',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        {
          texto: 'Comunidades Vinto',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Establecimientos de Salud',
          img: 'assets/iconosLeyenda/muni/es.png',
        },
        {
          texto: 'Instituciones Educativas',
          img: 'assets/iconosLeyenda/muni/ie.png',
        },
        { texto: 'Caminos - Vinto', img: '' },
        { texto: 'Principal o Carretero', img: '' },
        {
          texto: 'Secundario o Vecinal',
          img: 'assets/iconosLeyenda/muni/secundario.png',
        },
        {
          texto: 'Senda Rodera o Vereda',
          img: 'assets/iconosLeyenda/muni/carretero.png',
        },
        { texto: 'Area Protegida', img: 'assets/iconosLeyenda/muni/ap.png' },
        { texto: 'Áreas Afectadas', img: '' },
        { texto: 'Nivel Alto', img: 'assets/iconosLeyenda/muni/nivelAlto.png' },
        {
          texto: 'Nivel Medio',
          img: 'assets/iconosLeyenda/muni/nivelMedio.png',
        },
      ],
    },
    {
      municipio: 'Rurrenabaque',
      leyenda: [
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        {
          texto: 'Comunidades Rurrenabaque',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Establecimientos de Salud',
          img: 'assets/iconosLeyenda/muni/es.png',
        },
        {
          texto: 'Instituciones Educativas',
          img: 'assets/iconosLeyenda/muni/ie.png',
        },
        { texto: 'Caminos - Rurrenabaque', img: '' },
        {
          texto: 'Principal o Carretero',
          img: 'assets/iconosLeyenda/muni/carretero.png',
        },
        {
          texto: 'Secundario o Vecinal',
          img: 'assets/iconosLeyenda/muni/secundario.png',
        },
        {
          texto: 'Senda Rodera o Vereda',
          img: 'assets/iconosLeyenda/muni/carretero.png',
        },
        { texto: 'Áreas Protegidas', img: 'assets/iconosLeyenda/muni/ap.png' },
        { texto: 'Áreas Afectadas', img: '' },
        { texto: 'Nivel Alto', img: 'assets/iconosLeyenda/muni/nivelAlto.png' },
        {
          texto: 'Nivel Medio',
          img: 'assets/iconosLeyenda/muni/nivelMedio.png',
        },
      ],
    },
    {
      municipio: 'San Borja',
      leyenda: [
        {
          texto: 'Comunidades San Borja',
          img: 'assets/iconosLeyenda/muni/comunidad.png',
        },
        {
          texto: 'Establecimientos de Salud',
          img: 'assets/iconosLeyenda/muni/es.png',
        },
        {
          texto: 'Instituciones Educativas',
          img: 'assets/iconosLeyenda/muni/ie.png',
        },
        { texto: 'Caminos - San Borja', img: '' },
        {
          texto: 'Principal o Carretero',
          img: 'assets/iconosLeyenda/muni/carretero',
        },
        {
          texto: 'Secundario o Vecinal',
          img: 'assets/iconosLeyenda/muni/secundario.png',
        },
        {
          texto: 'Senda Rodera o Vereda',
          img: 'assets/iconosLeyenda/muni/carrtero.png',
        },
        { texto: 'Limite Municipal', img: 'assets/iconosLeyenda/muni/lm.png' },
        { texto: 'Áreas Protegidas', img: 'assets/iconosLeyenda/muni/ap.png' },
        { texto: 'Lagos', img: 'assets/iconosLeyenda/muni/lagos.png' },
        { texto: 'Áreas Afectadas', img: '' },
        { texto: 'Nivel Alto', img: 'assets/iconosLeyenda/muni/nivelAlto.png' },
        {
          texto: 'Nivel Medio',
          img: 'assets/iconosLeyenda/muni/nivelMedio.png',
        },
      ],
    },
  ];
  ngOnInit(): void {
    this.data = this.datos.find((item) => item.municipio === this.Municipio);
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }
  isMobile = false;
  mostrarLeyenda = false;
  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }
}
