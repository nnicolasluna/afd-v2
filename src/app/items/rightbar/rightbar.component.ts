import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent {
  @Input() mostrarRightBar: boolean = true
  @Output() locationSelected = new EventEmitter<any>();
  rightBarToMenu: string = ''
  constructor(private modalstateService: ModalStateService) { } // Inyecta el servicio

  ciudades = [
    { departamento: 'La Paz', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'San Buenaventura', png: 'assets/IconosMunicipios/SanBuenaventura.png', color: '#FF5C5CB5', latMun: -14.45812, lonMun: -67.58674599999999 },
    { departamento: 'La Paz', provincia: 'Abel Iturralde', AreaProt: 'PN ANMI Madidi', publoIndigena: 'Tacna', municipio: 'Palos Blancos', png: 'assets/IconosMunicipios/Palos Blancos.png', color: '#F4A21ABD', latMun: -15.583, lonMun: -67.25 },
    { departamento: 'Beni', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'San Borja', png: 'assets/IconosMunicipios/San Borja.png', color: '#45818E', latMun: -14.8583, lonMun: -66.7475 },
    { departamento: 'Beni', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'Rurrenabaque', png: 'assets/IconosMunicipios/Rurrenabaque.png', color: '#8FCE00', latMun: -14.442222, lonMun: -67.528333 },
    { departamento: 'Cochabamba', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'Vinto', png: 'assets/IconosMunicipios/Vinto.png', color: '#3521E8', latMun: -17.383333, lonMun: -66.3 },
    { departamento: 'Cochabamba', provincia: 'Sur Yungas', AreaProt: 'RBTCO Pilon Lajas', publoIndigena: 'Moseten', municipio: 'Tiquipaya', png: 'assets/IconosMunicipios/Tiquipaya.png', color: '#C7914A', latMun: -17.333333, lonMun: -66.216667 }
  ];

  alternarRightBar() {
    this.mostrarRightBar = !this.mostrarRightBar;
  }


  selectLocation(Municipio: string): void {
    const ciudadEncontrada = this.ciudades.find(ciudad => ciudad.municipio === Municipio);
    this.locationSelected.emit(ciudadEncontrada);
    this.rightBarToMenu = Municipio
    this.modalstateService.mostrarCard();
    this.modalstateService.cerrarBtnEvaluamos();
  }
}
