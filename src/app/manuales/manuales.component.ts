import { Component } from '@angular/core';

@Component({
  selector: 'app-manuales',
  templateUrl: './manuales.component.html',
  styleUrls: ['./manuales.component.scss']
})
export class ManualesComponent {
  mostrarManual = true
  manual: string = ''
  titulo: string = ''
  ShowManual(direccion: string,tituloPdf:string) {
    this.mostrarManual = !this.mostrarManual
    this.manual = direccion
    this.titulo=tituloPdf
  }

}
