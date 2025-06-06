import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { VisibilidadService } from 'src/app/services/modal-state/visible.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss'],
})
export class RightbarComponent {
  @Input() mostrarRightBar: boolean = true;
  @Output() locationSelected = new EventEmitter<any>();
  rightBarToMenu: string = '';
  constructor(
    private modalstateService: ModalStateService,
    private breakpointObserver: BreakpointObserver,
    private visibilidadService: VisibilidadService
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.mostrarRightBar = false;
      });
  }

  ciudades = [
    {
      departamento: 'La Paz',
      provincia: 'Sur Yungas',
      AreaProt: 'RBTCO Pilon Lajas',
      publoIndigena: 'Moseten',
      municipio: 'San Buenaventura',
      png: 'assets/IconosMunicipios/SanBuenaventura.png',
      color: '#FF5C5CB5',
      latMun: -14.45812,
      lonMun: -67.58674599999999,
    },
    {
      departamento: 'La Paz',
      provincia: 'Abel Iturralde',
      AreaProt: 'PN ANMI Madidi',
      publoIndigena: 'Tacna',
      municipio: 'Palos Blancos',
      png: 'assets/IconosMunicipios/Palos Blancos.png',
      color: '#F4A21ABD',
      latMun: -15.583,
      lonMun: -67.25,
    },
    {
      departamento: 'Beni',
      provincia: 'Sur Yungas',
      AreaProt: 'RBTCO Pilon Lajas',
      publoIndigena: 'Moseten',
      municipio: 'San Borja',
      png: 'assets/IconosMunicipios/Rurrenabaque.png',
      color: '#45818E',
      latMun: -14.8583,
      lonMun: -66.7475,
    },
    {
      departamento: 'Beni',
      provincia: 'Sur Yungas',
      AreaProt: 'RBTCO Pilon Lajas',
      publoIndigena: 'Moseten',
      municipio: 'Rurrenabaque',
      png: 'assets/IconosMunicipios/San Borja.png',
      color: '#8FCE00',
      latMun: -14.688621,
      lonMun: -67.305708,
    },
    {
      departamento: 'Cochabamba',
      provincia: 'Sur Yungas',
      AreaProt: 'RBTCO Pilon Lajas',
      publoIndigena: 'Moseten',
      municipio: 'Vinto',
      png: 'assets/IconosMunicipios/Vinto.png',
      color: '#3521E8',
      latMun: -17.361136266187586,
      lonMun: -66.338472044796234,
    },
    {
      departamento: 'Cochabamba',
      provincia: 'Sur Yungas',
      AreaProt: 'RBTCO Pilon Lajas',
      publoIndigena: 'Moseten',
      municipio: 'Tiquipaya',
      png: 'assets/IconosMunicipios/Tiquipaya.png',
      color: '#C7914A',
      latMun: -17.315427603500169,
      lonMun: -66.206486187544854,
    },
  ];
  ngOnInit() {
    this.visibilidadService.visibilidad$.subscribe((valor) => {
      this.mostrarRightBar = valor;
    });
  }
  alternarRightBar() {
    this.visibilidadService.abrirCard();
    console.log(this.visibilidadService.abrirCard());
    //this.mostrarRightBar = !this.mostrarRightBar;
    if (this.mostrarRightBar === true) {
      this.modalstateService.cerrarFaunaFlora();
      this.modalstateService.cerrarPrePost();
      this.modalstateService.cerrarfocos();
      this.modalstateService.cerrarquemas();
      this.modalstateService.cerrarrege();
      this.modalstateService.cerrarrestauracion();
      this.modalstateService.cerrarafectadas();
    }
  }

  selectLocation(Municipio: string): void {
    const ciudadEncontrada = this.ciudades.find(
      (ciudad) => ciudad.municipio === Municipio
    );
    this.locationSelected.emit(ciudadEncontrada);
    this.rightBarToMenu = Municipio;
    this.modalstateService.cerrarBtnEvaluamos();
  }
  minimizarRightBar(estado: boolean) {
    this.mostrarRightBar = estado;
    console.log(estado);
  }
}
