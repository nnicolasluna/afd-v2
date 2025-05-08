import { Component } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent {
  mostrarleftCard: boolean = false;
  alternarleftCard() {
    this.mostrarleftCard = !this.mostrarleftCard;
  }
}
