import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalStateService } from '../services/modal-state/modal-state.service';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.scss']
})
export class DiagnosticoComponent {
  visible = false;

  @Input() MunicipioDiag: string | undefined;
  @Output() cerrarDiagnostico = new EventEmitter<void>();

  constructor(private modalStateService: ModalStateService) { }

  ngOnInit() {
    this.modalStateService.vistaActual$.subscribe(vista => {
      this.visible = vista === 'diagnostico';
    });
  }
  onCerrarClick(): void {
    this.cerrarDiagnostico.emit();
  }
}
