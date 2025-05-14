import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-alter-rightbar',
  templateUrl: './alter-rightbar.component.html',
  styleUrls: ['./alter-rightbar.component.scss']
})
export class AlterRightbarComponent implements OnInit {
  option: string | undefined;
  @Output() locationSelected = new EventEmitter<any>();
  ciudades = [
    { departamento: 'La Paz', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'San Buenaventura', color: '#FF5C5CB5', latMun: -14.45812, lonMun: -67.58674599999999 },
    { departamento: 'La Paz', provincia: 'Abel Iturralde', AreaProt: 'PN ANMI Madidi', publoIndigena: 'Tacna', municipio: 'Palos Blancos', color: '#F4A21ABD', latMun: -15.583, lonMun: -67.25 },
    { departamento: 'Beni', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'San Borja', color: '#45818E', latMun: -14.8583, lonMun: -66.7475 },
    { departamento: 'Beni', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'Rurrenabaque', color: '#8FCE00', latMun: -14.442222, lonMun: -67.528333 },
    { departamento: 'Cochabamba', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'Vinto', color: '#3521E8', latMun: -17.383333, lonMun: -66.3 },
    { departamento: 'Cochabamba', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'Tiquipaya', color: '#C7914A', latMun: -17.333333, lonMun: -66.216667 }
  ];
  constructor(private modalStateService: ModalStateService) {}
  ngOnInit(): void {
   this.modalStateService.data$.subscribe(
      botonActivo => {
        if (botonActivo == 'DIAGNOSTICO') {
          this.option = 'DIAGNOSTICO';

        }
        if (botonActivo == 'RECUPERCIÓN') {
          this.option = 'RECUPERCIÓN Y RESTAURACIÓN';
        }
        if (botonActivo == 'ALTERNATIVAS') {
          this.option = 'ALTERNATIVAS AL USO DE FUEGO';
        }
      }
    )
  }
  onCerrarClick() {
    this.modalStateService.cerrarVistas();
  }
  selectLocation(Municipio: string): void {
    const ciudadEncontrada = this.ciudades.find(ciudad => ciudad.municipio === Municipio);
    this.locationSelected.emit(ciudadEncontrada);
    /* this.modalStateService.mostrarCard(); */
    this.modalStateService.data$.subscribe(
      botonActivo => {
        if (botonActivo == 'DIAGNOSTICO') {
          this.modalStateService.mostrarDiagnostico();
        }
        if (botonActivo == 'RECUPERCIÓN') {
          this.modalStateService.mostrarrecu();
        }
        if (botonActivo == 'ALTERNATIVAS') {
          this.modalStateService.mostraralternativas();
        }
      }
    )
  }
}
