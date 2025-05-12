import { Component, Input } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-evaluamos',
  templateUrl: './evaluamos.component.html',
  styleUrls: ['./evaluamos.component.scss']
})
export class EvaluamosComponent {
  @Input() Municipio: string | undefined;
  currentStep = 0;
  ExtenderBar: boolean = true;
  constructor(private modalStateService: ModalStateService) { }

  nextStep() {
    if (this.currentStep < 2 - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
  mostrarDiagnostico(): void {
    this.modalStateService.mostrarDiagnostico();
  }
    extenderBar() {
    this.ExtenderBar = !this.ExtenderBar;
  }
}
