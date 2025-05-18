import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalStateService {
  private vistaActual = new BehaviorSubject<'manuales' | 'convenios' | 'alter-rightbar' | 'alternativas' | 'recuperacion' | 'card' | 'diagnostico' | 'leftbar' | 'evaluamos' | 'verdiagnostico' | null>(null);
  private botonActivoMenu = new BehaviorSubject<string>('');
  private tresBtnActivo = new BehaviorSubject<'tresBtn' | null>(null);
  private btnEvaluamos = new BehaviorSubject<'btnEvaluamos' | null>(null);
  data$: Observable<string> = this.botonActivoMenu.asObservable();
  vistaActual$ = this.vistaActual.asObservable();
  tresBtnAct$ = this.tresBtnActivo.asObservable();
  BtnEvaluamos$ = this.btnEvaluamos.asObservable();

  mostrarAlter_rightbar(botonSeleccionado: any) {
    this.botonActivoMenu.next(botonSeleccionado);
    this.vistaActual.next('alter-rightbar');
  }
  mostrarTresBtn() {
    this.tresBtnActivo.next('tresBtn');
  }
  mostrarCard() {
    this.vistaActual.next('card');
  }
  mostrarManuales() {
    this.vistaActual.next('manuales');
  }
  mostrarDiagnostico() {
    this.vistaActual.next('diagnostico');
  }
  mostrarleftbar() {
    this.vistaActual.next('leftbar');
  }
  mostrarEvaluamos() {
    this.vistaActual.next('evaluamos');
  }
  mostrarVerDiagnostico() {
    this.vistaActual.next('verdiagnostico');
  }
  mostrarrecu() {
    this.vistaActual.next('recuperacion');
  }
  mostrarConvenios() {
    this.vistaActual.next('convenios');
  }
  mostraralternativas() {
    this.vistaActual.next('alternativas');
  }
  cerrarVistas() {
    this.vistaActual.next(null);
  }
  cerrartresBtn() {
    this.tresBtnActivo.next(null);
  }
  mostrarBtnEvaluamos() {
    this.btnEvaluamos.next('btnEvaluamos');
  }
  cerrarBtnEvaluamos() {
    this.btnEvaluamos.next(null);
  }
}
