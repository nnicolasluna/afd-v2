import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalStateService {
  private vistaActual = new BehaviorSubject<'leyenda' | 'talleres' | 'manuales' | 'convenios' | 'alter-rightbar' | 'alternativas' | 'recuperacion' | 'card' | 'diagnostico' | 'leftbar' | 'evaluamos' | 'verdiagnostico' | null>(null);
  private botonActivoMenu = new BehaviorSubject<string>('');
  private tresBtnActivo = new BehaviorSubject<'tresBtn' | null>(null);
  private btnEvaluamos = new BehaviorSubject<'btnEvaluamos' | null>(null);
  private prepost = new BehaviorSubject<'prepost' | null>(null);
  private focoscalor = new BehaviorSubject<'focos' | null>(null);
  private quemas = new BehaviorSubject<'quemas' | null>(null);
  private faunaflora = new BehaviorSubject<'faunaflora' | null>(null);


  data$: Observable<string> = this.botonActivoMenu.asObservable();
  vistaActual$ = this.vistaActual.asObservable();
  tresBtnAct$ = this.tresBtnActivo.asObservable();
  BtnEvaluamos$ = this.btnEvaluamos.asObservable();
  PrePost$ = this.prepost.asObservable();
  focos$ = this.focoscalor.asObservable();
  quemas$ = this.quemas.asObservable();
  faunaflora$ = this.faunaflora.asObservable();

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
    const current = this.vistaActual.getValue();
    if (current === 'manuales') {
      this.vistaActual.next(null);
    } else {
      this.vistaActual.next('manuales');

    }
  }
  mostrartalleres() {
    const current = this.vistaActual.getValue();
    if (current === 'talleres') {
      this.vistaActual.next(null);
    } else {
      this.vistaActual.next('talleres');

    }
  }
  mostrarDiagnostico() {
    const current = this.vistaActual.getValue();
    if (current === 'diagnostico') {
      this.vistaActual.next(null);
    } else {
      this.vistaActual.next('diagnostico');
    }
  }
  mostrarleftbar() {
    this.vistaActual.next('leftbar');
  }
  mostrarEvaluamos() {
    this.vistaActual.next('evaluamos');
  }
  mostrarLeyenda() {
    this.vistaActual.next('leyenda');
  }
  mostrarPrePost() {
    this.prepost.next('prepost');
  }
  cerrarPrePost() {
    this.prepost.next(null);
  }
  mostrarFaunaFlora() {
    this.faunaflora.next('faunaflora');
  }
  cerrarFaunaFlora() {
    this.faunaflora.next(null);
  }
  mostrarfocos() {
    this.focoscalor.next('focos');
  }
  cerrarfocos() {
    this.focoscalor.next(null);
  }
  mostrarquemas() {
    this.quemas.next('quemas');
  }
  cerrarquemas() {
    this.quemas.next(null);
  }
  mostrarVerDiagnostico() {
    this.vistaActual.next('verdiagnostico');
  }
  mostrarrecu() {
    const current = this.vistaActual.getValue();
    if (current === 'recuperacion') {
      this.vistaActual.next(null);
    } else {
      this.vistaActual.next('recuperacion');
    }
  }
  mostrarConvenios() {
    this.vistaActual.next('convenios');
  }
  mostraralternativas() {
    const current = this.vistaActual.getValue();
    if (current === 'alternativas') {
      this.vistaActual.next(null);
    } else {
      this.vistaActual.next('alternativas');
    }
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
