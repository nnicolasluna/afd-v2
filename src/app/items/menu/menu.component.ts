import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() localizacionUsuario = new EventEmitter<string>();
  @Input() MunicipioMenu: string | undefined;

  mostrarDiagnostico: boolean = false;

  constructor(private modalStateService: ModalStateService) { }
  alternarleftCard() {
    this.modalStateService.mostrarleftbar();
  }
  toggleDiagnostico(btnSelected: any): void {
    this.mostrarDiagnostico = !this.mostrarDiagnostico;
    if (this.MunicipioMenu == '') {
      this.modalStateService.mostrarAlter_rightbar(btnSelected);
    }
    else {
      this.modalStateService.mostrarDiagnostico();
    }

  }
  ocultarDiagnostico(): void {
    this.mostrarDiagnostico = false;
  }
  verLocalizacion() {
    this.localizacionUsuario.emit('true');
  }
  mostrarRecu(btnSelected: any): void {
    if (this.MunicipioMenu == '') {
      this.modalStateService.mostrarAlter_rightbar(btnSelected);
    }
    else {
      this.modalStateService.mostrarrecu();
    }
  }
  mostrarAlternativas(btnSelected: any) {
    if (this.MunicipioMenu == '') {
      this.modalStateService.mostrarAlter_rightbar(btnSelected);
    }
    else {
      this.modalStateService.mostraralternativas();
    }

  }
  refreshAll() {
    window.location.reload();
  }
}
