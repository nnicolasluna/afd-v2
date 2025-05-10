import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent {
  @Input() municipio: string = '';

  mostrarSimpleCard: boolean = true;
  cerrarSimpleCard() {
    this.mostrarSimpleCard = !this.mostrarSimpleCard;
  }
}
