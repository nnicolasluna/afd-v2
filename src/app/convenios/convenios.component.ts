import { Component } from '@angular/core';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent {
  mostrarManual = true
  manual: string = ''
  titulo: string = ''
  ShowManual(direccion: string, tituloPdf: string) {
    this.mostrarManual = !this.mostrarManual
    this.manual = direccion
    this.titulo = tituloPdf
  }
}
