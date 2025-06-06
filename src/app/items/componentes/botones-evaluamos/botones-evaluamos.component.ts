import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { VisibilidadService } from 'src/app/services/modal-state/visible.service';

@Component({
  selector: 'app-botones-evaluamos',
  templateUrl: './botones-evaluamos.component.html',
  styleUrls: ['./botones-evaluamos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BotonesEvaluamosComponent {
  tooltipClass = 'custom-tooltip';
  @Input() municipio!: string;
  @Output() tipoBotonIndice = new EventEmitter<{
    indice: string;
    muni: string;
  }>();
  @Output() cerrarRightBar = new EventEmitter<boolean>();
  botonseleccionado = 9;
  constructor(private visibilidadService: VisibilidadService) {}
  seleccionarBoton(numero: number) {
    this.visibilidadService.cerrarCard();

    this.botonseleccionado = numero;
    let indiceselecionado = '';
    if (numero === 1) {
      indiceselecionado = 'nbr';
    }
    if (numero === 2) {
      indiceselecionado = 'ndvi';
    }
    if (numero === 3) {
      indiceselecionado = 'dnbr';
    }
    if (numero === 4) {
      indiceselecionado = 'quemas';
    }
    if (numero === 5) {
      indiceselecionado = 'flora';
    }
    if (numero === 6) {
      indiceselecionado = 'AreasAfectadas';
    }
    if (numero === 7) {
      indiceselecionado = 'AreasRestauracion';
    }
    if (numero === 8) {
      indiceselecionado = 'pasiva';
    }
    if (numero === 9) {
      indiceselecionado = 'focosCalor';
    }

    this.tipoBotonIndice.emit({
      indice: indiceselecionado,
      muni: this.municipio,
    });
  }
}
