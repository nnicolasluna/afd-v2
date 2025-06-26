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
    this.sidebarAbierto = false;
  }
  cerrarCard() {
    this.modalStateService.cerrarFaunaFlora();
    this.modalStateService.cerrarPrePost();
    this.modalStateService.cerrarfocos();
    this.modalStateService.cerrarquemas();
    this.modalStateService.cerrarrege();
    this.modalStateService.cerrarrestauracion();
    this.modalStateService.cerrarafectadas();
    this.modalStateService.cerrarBtnEvaluamos();
  }
  toggleDiagnostico(btnSelected: any): void {
    this.cerrarCard();
    this.sidebarAbierto = false;
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
    this.cerrarCard();
    this.sidebarAbierto = false;
    this.cerrarCard();
    if (this.MunicipioMenu == '') {
      this.modalStateService.mostrarAlter_rightbar(btnSelected);
    } else {
      this.modalStateService.mostrarrecu();
    }
  }
  mostrarAlternativas(btnSelected: any) {
    this.cerrarCard();
    this.sidebarAbierto = false;
    this.cerrarCard();
    if (this.MunicipioMenu == '') {
      this.modalStateService.mostrarAlter_rightbar(btnSelected);
    } else {
      this.modalStateService.mostraralternativas();
    }
  }
  mostrarConvenios() {
    this.sidebarAbierto = false;
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
    this.sidebarAbierto = false;
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
    this.sidebarAbierto = false;
    this.sidebarAbierto = false;
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
  menuItems = [
    {
      id: 'home',
      label: 'HOME',
      icon: 'home',
      action: () => this.refreshAll(),
    },
    {
      id: 'plataformas',
      label: 'OTRAS PLATAFORMAS',
      icon: 'terminal',
      action: () => this.alternarleftCard(),
    },
    {
      id: 'diagnostico',
      label: 'DIAGNOSTICO',
      icon: 'monitor_heart',
      action: () => this.toggleDiagnostico('DIAGNOSTICO'),
    },
    {
      id: 'recuperacion',
      label: 'RECUPERCIÓN Y RESTAURACIÓN',
      icon: 'forest',
      action: () => this.mostrarRecu('RECUPERCIÓN'),
    },
    {
      id: 'alternativas',
      label: 'ALTERNATIVAS AL USO DE FUEGO',
      icon: 'alt_route',
      action: () => this.mostrarAlternativas('ALTERNATIVAS'),
    },
    {
      id: 'convenios',
      label: 'CONVENIOS',
      icon: 'description',
      action: () => this.mostrarConvenios(),
    },
    {
      id: 'talleres',
      label: 'TALLERES',
      icon: 'co_present',
      action: () => this.mostrarTalleres(),
    },
    {
      id: 'manuales',
      label: 'MANUALES',
      icon: 'book_2',
      action: () => this.mostrarManuales(),
    },
  ];
  sidebarAbierto = false;

  toggleSidebar() {
    this.sidebarAbierto = !this.sidebarAbierto;
  }

  // Opcional: cerrar el sidebar al hacer clic en un menú (solo en móviles)
  cerrarSidebarEnMovil() {
    if (window.innerWidth <= 768) {
      this.sidebarAbierto = false;
    }
  }
}
