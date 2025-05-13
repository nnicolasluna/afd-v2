import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalStateService {
  private vistaActual = new BehaviorSubject<'card' | 'diagnostico' | 'leftbar' | 'evaluamos' | 'verdiagnostico' | null>(null);

  vistaActual$ = this.vistaActual.asObservable();

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
  cerrarVistas() {
    this.vistaActual.next(null);
  }
}
