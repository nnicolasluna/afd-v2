import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.scss']
})
export class DiagnosticoComponent {
  @Input() MunicipioDiag: string | undefined;
  @Output() cerrarDiagnostico = new EventEmitter<void>();
  onCerrarClick(): void {
    this.cerrarDiagnostico.emit();
  }
}
