import { Component } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent {
  mostrarRightBar: boolean = true;
  alternarRightBar() {
    this.mostrarRightBar = !this.mostrarRightBar;
  }
}
