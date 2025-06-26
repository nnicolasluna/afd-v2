import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leyenda',
  templateUrl: './leyenda.component.html',
  styleUrls: ['./leyenda.component.scss'],
})
export class LeyendaComponent {
  @Input() Municipio: string = '';
  @Input() subTitulo: string = '';
  @Input() datos: any[] = [];
  @Input() tipo: any;
  isMobile = false;
  mostrarLeyenda = false;

  ngOnInit() {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }
}
