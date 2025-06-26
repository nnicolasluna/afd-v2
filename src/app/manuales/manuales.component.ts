import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
      archivo: 'ANEXO 2 MANUAL_PRELIMINAR_DE_ACCIONES_DE_RECUPERACIÓN_V1.2.pdf',
      titulo: 'ACCIONES DE RECUPERACIÓN',

      pdfUrl:
        'assets/pdf/ANEXO 2 MANUAL_PRELIMINAR_DE_ACCIONES_DE_RECUPERACIÓN_V1.2.pdf',
    },
    {
      archivo:
        'ANEXO 3 MANUAL_PRELIMINAR_DE_PRÁCTICAS_ALTERNATIVAS_AL_USO_DEL_FUEGO_V1.2.pdf',
      titulo: 'PRÁCTICAS ALTERNATIVAS AL USO DEL FUEGO',
    },
    {
      archivo:
        'Anexo 4. Manual para la evaluación de daños ambientales e impactos .pdf',
      titulo: 'EVALUACION DE DAÑOS AMBIENTALES Y IMPACTOS',
    },
  ];

  ShowManual(direccion: string, tituloPdf: string) {
    this.mostrarManual = !this.mostrarManual;
    this.manual = direccion;
    this.titulo = tituloPdf;
  }
  pdfUrl: SafeResourceUrl | undefined;

  constructor(private breakpointObserver: BreakpointObserver) {}

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

}
