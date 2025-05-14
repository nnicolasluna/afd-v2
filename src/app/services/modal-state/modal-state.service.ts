import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalStateService {
  private vistaActual = new BehaviorSubject<'alter-rightbar' | 'alternativas' | 'recuperacion' | 'card' | 'diagnostico' | 'leftbar' | 'evaluamos' | 'verdiagnostico' | null>(null);
  private botonActivoMenu = new BehaviorSubject<string>('');
  private tresBtnActivo = new BehaviorSubject<'tresBtn'|null>(null);
  data$: Observable<string> = this.botonActivoMenu.asObservable();
  vistaActual$ = this.vistaActual.asObservable();
  tresBtnAct$ = this.tresBtnActivo.asObservable();
 
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
  mostraralternativas() {
    this.vistaActual.next('alternativas');
  }
  cerrarVistas() {
    this.vistaActual.next(null);
  }
  cerrartresBtn() {
    this.tresBtnActivo.next(null);
  }
}
