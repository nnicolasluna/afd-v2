import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() localizacionUsuario = new EventEmitter<string>();
  @Input() MunicipioMenu: string | undefined;
  vistaActualActiva: string | null = null;

  mostrarDiagnostico: boolean = false;
  ngOnInit() {
    this.modalStateService.vistaActual$.subscribe((vista) => {
      this.vistaActualActiva = vista;
    });
  }
  constructor(private modalStateService: ModalStateService) {}
  alternarleftCard() {
    this.modalStateService.mostrarleftbar();
  }
  toggleDiagnostico(btnSelected: any): void {
    this.mostrarDiagnostico = !this.mostrarDiagnostico;
    if (this.MunicipioMenu == '') {
      this.modalStateService.mostrarAlter_rightbar(btnSelected);
    } else {
      this.modalStateService.mostrarDiagnostico();
    }
  }
  ocultarDiagnostico(): void {
    this.modalStateService.cerrarBtnEvaluamos();

    this.mostrarDiagnostico = false;
  }
  verLocalizacion() {
    this.modalStateService.cerrarBtnEvaluamos();

    this.localizacionUsuario.emit('true');
  }
  mostrarRecu(btnSelected: any): void {
    this.modalStateService.cerrarBtnEvaluamos();
    this.modalStateService.cerrarrege();
    this.modalStateService.cerrarrestauracion();
    this.modalStateService.cerrarafectadas();
    this.modalStateService.cerrarFaunaFlora();
    this.modalStateService.cerrarquemas();
    this.modalStateService.cerrarfocos();
    if (this.MunicipioMenu == '') {
      this.modalStateService.mostrarAlter_rightbar(btnSelected);
    } else {
      this.modalStateService.mostrarrecu();
    }
  }
  mostrarAlternativas(btnSelected: any) {
    this.modalStateService.cerrarBtnEvaluamos();
    this.modalStateService.cerrarrege();
    this.modalStateService.cerrarrestauracion();
    this.modalStateService.cerrarafectadas();
    this.modalStateService.cerrarFaunaFlora();
    this.modalStateService.cerrarquemas();
    this.modalStateService.cerrarfocos();
    if (this.MunicipioMenu == '') {
      this.modalStateService.mostrarAlter_rightbar(btnSelected);
    } else {
      this.modalStateService.mostraralternativas();
    }
  }
  mostrarConvenios() {
    this.modalStateService.mostrarConvenios();
    this.modalStateService.cerrarBtnEvaluamos();
    this.modalStateService.cerrartresBtn();
    this.modalStateService.cerrarrege();
    this.modalStateService.cerrarrestauracion();
    this.modalStateService.cerrarafectadas();
    this.modalStateService.cerrarFaunaFlora();
    this.modalStateService.cerrarquemas();
    this.modalStateService.cerrarfocos();
  }
  mostrarManuales() {
    this.modalStateService.mostrarManuales();
    this.modalStateService.cerrarBtnEvaluamos();
    this.modalStateService.cerrartresBtn();
    this.modalStateService.cerrarrege();
    this.modalStateService.cerrarrestauracion();
    this.modalStateService.cerrarafectadas();
    this.modalStateService.cerrarFaunaFlora();
    this.modalStateService.cerrarquemas();
    this.modalStateService.cerrarfocos();
  }
  mostrarTalleres() {
    this.modalStateService.mostrartalleres();
    this.modalStateService.cerrarBtnEvaluamos();
    this.modalStateService.cerrartresBtn();
    this.modalStateService.cerrarrege();
    this.modalStateService.cerrarrestauracion();
    this.modalStateService.cerrarafectadas();
    this.modalStateService.cerrarFaunaFlora();
    this.modalStateService.cerrarquemas();
    this.modalStateService.cerrarfocos();
  }
  refreshAll() {
    window.location.reload();
  }
}
