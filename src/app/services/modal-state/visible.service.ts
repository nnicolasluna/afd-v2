// visibilidad.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VisibilidadService {
  private visibilidadSubject = new BehaviorSubject<boolean>(true);
  visibilidad$ = this.visibilidadSubject.asObservable();

  cerrarCard() {
    this.visibilidadSubject.next(false);
  }

  abrirCard() {
    this.visibilidadSubject.next(true);
  }
}
