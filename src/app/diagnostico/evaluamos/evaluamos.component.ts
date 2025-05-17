import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-evaluamos',
  templateUrl: './evaluamos.component.html',
  styleUrls: ['./evaluamos.component.scss']
})
export class EvaluamosComponent {
  @Output() locationEvaluamos = new EventEmitter<any>();
  @Input() Municipio: string | undefined;
  ciudades = [
    { departamento: 'La Paz', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'San Buenaventura', color: '#FF5C5CB5', latMun: -14.45812, lonMun: -67.58674599999999 },
    { departamento: 'La Paz', provincia: 'Abel Iturralde', AreaProt: 'PN ANMI Madidi', publoIndigena: 'Tacna', municipio: 'Palos Blancos', color: '#F4A21ABD', latMun: -15.583, lonMun: -67.25 },
    { departamento: 'Beni', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'San Borja', color: '#45818E', latMun: -14.8583, lonMun: -66.7475 },
    { departamento: 'Beni', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'Rurrenabaque', color: '#8FCE00', latMun: -14.442222, lonMun: -67.528333 },
    { departamento: 'Cochabamba', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'Vinto', color: '#3521E8', latMun: -17.383333, lonMun: -66.3 },
    { departamento: 'Cochabamba', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'Tiquipaya', color: '#C7914A', latMun: -17.333333, lonMun: -66.216667 }
  ];

  currentStep = 0;
  ExtenderBar: boolean = true;
  constructor(private modalStateService: ModalStateService) { }

  nextStep() {
    if (this.currentStep < 3 - 1) {
      this.currentStep++;
    }
    if (this.currentStep === 2) {
      this.ExtenderBar = false;
      this.locationEvaluamos.emit(this.Municipio);
      this.currentStep = 1;
      this.modalStateService.mostrarBtnEvaluamos();
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
