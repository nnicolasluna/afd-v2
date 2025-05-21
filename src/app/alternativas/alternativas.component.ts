import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alternativas',
  templateUrl: './alternativas.component.html',
  styleUrls: ['./alternativas.component.scss']
})
export class AlternativasComponent {
  @Input() municipio: string | undefined;
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
