import { Component, Input } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-ver-diag',
  templateUrl: './ver-diag.component.html',
  styleUrls: ['./ver-diag.component.scss']
})
export class VerDiagComponent {
  @Input() Municipio: string | undefined;
  currentStep = 0;
  ExtenderBar: boolean = true;
  constructor(private modalStateService: ModalStateService) { }


  json='assets/Datos_tablas/PalosBlancos/actores.json'
  nextStep() {
    if (this.currentStep < 3 - 1) {
      this.currentStep++;
    }

    if (this.currentStep === 3) {
      this.ExtenderBar = false;
      this.currentStep = 1;
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
  onCerrarClick() {
    this.modalStateService.cerrarVistas();
  }
}
