import { Component, ViewChild, Input } from '@angular/core';
import { LeftbarComponent } from '../leftbar/leftbar.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() MunicipioMenu: string | undefined;
  @ViewChild(LeftbarComponent) leftbarOpen!: LeftbarComponent;
  mostrarDiagnostico: boolean = false;
  alternarleftCard() {
    this.leftbarOpen.alternarleftCard();
  }
  toggleDiagnostico(): void {
    this.mostrarDiagnostico = !this.mostrarDiagnostico;
  }
  ocultarDiagnostico(): void {
    this.mostrarDiagnostico = false;
  }
}
