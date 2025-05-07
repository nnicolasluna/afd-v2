import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { LeftbarComponent } from '../leftbar/leftbar.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChild(LeftbarComponent) leftbarOpen!: LeftbarComponent;

  alternarleftCard() {
    this.leftbarOpen.alternarleftCard();
  }
}
