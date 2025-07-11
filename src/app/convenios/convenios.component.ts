import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ModalStateService } from '../services/modal-state/modal-state.service';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss'],
})
export class ConveniosComponent {
  mostrarManual = true;
  manual: string = '';
  titulo: string = '';
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver, private modalStateService: ModalStateService) { }
  convenios = [
    {
      nombre: 'Gobierno Autonomo Municipal de Tiquipaya',
      nombreCorto: 'Tiquipaya',
      objeto:
        'El presente convenio tiene como objeto principal establecer una alianza estratégica',
      fecha: '1 de Febrero de 2025',
      imagen:
        'assets/imagenes/352390683_939313077346567_5335661545168067936_n.jpg',
      pdf: 'Convenio_Tiquipaya.pdf',
    },
    {
      nombre: 'Gobierno Autonomo Municipal de Vinto',
      nombreCorto: 'Vinto',
      objeto:
        'El presente convenio tiene como objeto principal establecer una alianza estratégica',
      fecha: '26 de Febrero de 2025',
      imagen:
        'assets/imagenes/486164854_9422512184532706_5850050359495577557_n.jpg',
      pdf: 'Convenio_Vinto.pdf',
    },
    {
      nombre: 'Gobierno Autonomo Municipal de San buenaventura ',
      nombreCorto: 'Vinto',
      objeto:
        'El presente convenio tiene como objeto principal establecer una alianza estratégica',
      pdf: 'Convenio_SanBuenaventura.pdf',
      imagen: 'assets/imagenes/sanbuena.jpg',
    },
    {
      nombre: 'Gobierno Autonomo Municipal de Rurrenabaque',
      nombreCorto: 'Vinto',
      objeto:
        'El presente convenio tiene como objeto principal establecer una alianza estratégica',
      pdf: 'Convenio_Rurrenabaque.pdf',
      imagen: 'assets/imagenes/rurre.png',
    },
    {
      nombre: 'Gobierno Autonomo Municipal de Palos Blancos',
      nombreCorto: 'Vinto',
      objeto:
        'El presente convenio tiene como objeto principal establecer una alianza estratégica',

      pdf: 'Convenio_PalosBlancos.pdf',
      imagen: 'assets/imagenes/palos_blancos.jpg',
    },
  ];

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
  ShowManual(direccion: string, tituloPdf: string) {
    this.mostrarManual = !this.mostrarManual;
    this.manual = direccion;
    this.titulo = tituloPdf;
  }
  DownloadManual(pdf: string) {
    const link = document.createElement('a');
    link.href = `assets/pdf/${pdf}`;
    link.download = pdf;
    link.click();
  }
  onCerrarClick() {
    this.modalStateService.cerrarVistas();
  }
}
