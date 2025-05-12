import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalStateService {
  private vistaActual = new BehaviorSubject<'card' | 'diagnostico' | 'leftbar' | null>(null);

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
  cerrarVistas() {
    this.vistaActual.next(null);
  }
}
