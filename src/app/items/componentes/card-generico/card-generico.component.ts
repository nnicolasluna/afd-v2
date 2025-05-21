import { Component, Input } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';
@Component({
  selector: 'app-card-generico',
  templateUrl: './card-generico.component.html',
  styleUrls: ['./card-generico.component.scss']
})
export class CardGenericoComponent {
  @Input() Municipio: string | undefined;
  @Input() titulo: string | undefined;
  @Input() tamContenedor: string = '';

  ExtenderBar: boolean = true;

  constructor(private modalStateService: ModalStateService) { }

  onCerrarClick() {
    this.modalStateService.cerrarVistas();
  }
  extenderBar() {
    this.ExtenderBar = !this.ExtenderBar;
  }
}
