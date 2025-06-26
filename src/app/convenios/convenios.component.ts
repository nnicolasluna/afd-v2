import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

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

  constructor(private breakpointObserver: BreakpointObserver) {}
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

}
