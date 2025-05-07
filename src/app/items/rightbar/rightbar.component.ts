import { Component } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent {
  mostrarRightBar: boolean = true; // Inicializa en true si quieres que se muestre al inicio

  alternarRightBar() {
    this.mostrarRightBar = !this.mostrarRightBar;
  }
}
