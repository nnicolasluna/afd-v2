import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-botones-evaluamos',
  templateUrl: './botones-evaluamos.component.html',
  styleUrls: ['./botones-evaluamos.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class BotonesEvaluamosComponent {
   tooltipClass = 'custom-tooltip';
  @Input() municipio!: string;
  @Output() tipoBotonIndice = new EventEmitter<{ indice: string, muni: string }>();
  botonseleccionado = 1;
  seleccionarBoton(numero: number) {
    this.botonseleccionado = numero;
    console.log(numero)
    let indiceselecionado = ''
    if (numero === 1) {
      indiceselecionado = 'nbr'
    }
    if (numero === 2) {
      indiceselecionado = 'ndvi'
    }
    if (numero === 3) {
      indiceselecionado = 'dnbr'
    }
    if (numero === 5) {
      indiceselecionado = 'FloraFauna'
    }
    this.tipoBotonIndice.emit({ indice: indiceselecionado, muni: this.municipio });
  }
}
