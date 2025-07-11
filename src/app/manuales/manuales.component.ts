import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ModalStateService } from '../services/modal-state/modal-state.service';

@Component({
  selector: 'app-manuales',
  templateUrl: './manuales.component.html',
  styleUrls: ['./manuales.component.scss'],
})
export class ManualesComponent {
  mostrarManual = true;
  manual: string = '';
  titulo: string = '';
  isMobile = false;
  manuales = [
    {
      archivo: 'MANUAL DE ACCIONES DE RECUPERACION.pdf',
      titulo: 'ACCIONES DE RECUPERACIÓN',
    },
    {
      archivo:
        'MANUAL PRACTICAS ALTERNATIVAS.pdf',
      titulo: 'PRÁCTICAS ALTERNATIVAS AL USO DEL FUEGO',
    },
    {
      archivo:
        'MANUAL EVALUACION DE DAÑOS.pdf',
      titulo: 'EVALUACION DE DAÑOS AMBIENTALES Y IMPACTOS',
    }, {
      archivo:
        'LINEAMIENTOS METODOLOGICOS GESI.pdf',
      titulo: 'LINEAMIENTOS METODOLOGICOS GESI',
    },

  ];

  ShowManual(direccion: string, tituloPdf: string) {
    this.mostrarManual = !this.mostrarManual;
    this.manual = direccion;
    this.titulo = tituloPdf;
  }
  pdfUrl: SafeResourceUrl | undefined;

  constructor(private breakpointObserver: BreakpointObserver, private modalStateService: ModalStateService) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
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
