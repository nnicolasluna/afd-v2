import { Component } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-botones-diag-recu-alte',
  templateUrl: './botones-diag-recu-alte.component.html',
  styleUrls: ['./botones-diag-recu-alte.component.scss']
})
export class BotonesDiagRecuAlteComponent {
  constructor(private modalStateService: ModalStateService) { }

  mostrarRecu(): void {
    this.modalStateService.mostrarrecu();
  }
  mostrarDiagnostico(): void {
    this.modalStateService.mostrarDiagnostico();
  }
  mostrarAlternativas(): void {
    this.modalStateService.mostraralternativas();
  }
}
