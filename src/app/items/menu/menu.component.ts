import { Component, ViewChild, Input } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  mostrarDiagnostico: boolean = false;
  @Input() MunicipioMenu: string | undefined;

  constructor(private modalStateService: ModalStateService) { }
  alternarleftCard() {
    this.modalStateService.mostrarleftbar();
  }
  toggleDiagnostico(): void {
    this.mostrarDiagnostico = !this.mostrarDiagnostico;
    this.modalStateService.mostrarDiagnostico(); // mostrar diagnóstico
  }
  ocultarDiagnostico(): void {
    this.mostrarDiagnostico = false;
  }
}
