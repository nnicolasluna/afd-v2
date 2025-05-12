import { Component, Input } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent {
  @Input() municipio: string = '';
  visible = false;
  constructor(private modalServiceState: ModalStateService) { }
  ngOnInit() {
    this.modalServiceState.vistaActual$.subscribe(
      vista => {
        this.visible = vista === 'card';
      }
    );
  }
  mostrarSimpleCard: boolean = true;
  cerrarSimpleCard() {
    this.mostrarSimpleCard = !this.mostrarSimpleCard;
    this.modalServiceState.cerrarVistas();
  }
}
