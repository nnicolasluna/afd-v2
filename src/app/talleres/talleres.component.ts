import { Component } from '@angular/core';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.scss']
})
export class TalleresComponent {
  primerapantalla = true
  segundapantalla = false
  tecerapantalla_participantes = false
  tecerapantalla_desarrollo = false
  lapaz = true
  cocha = false
  beni = false

  pb = true
  sb = false
  ru = false
  sbor = false
  tiq = false
  vi = false

  botonVermas() {
    this.primerapantalla = !this.primerapantalla
    this.segundapantalla = !this.primerapantalla
    console.log(this.primerapantalla, this.segundapantalla)
  }
  verDeptbtn(dept: string) {
    if (dept === 'La Paz') {
      this.lapaz = true;
      this.cocha = false
      this.beni = false
      this.pb = true
      this.sb = false
    } if (dept === 'Beni') {
      this.lapaz = false;
      this.cocha = false
      this.beni = true
      this.ru = true
      this.sbor = false
    } if (dept === 'Cocha') {
      this.lapaz = false;
      this.cocha = true
      this.beni = false
      this.tiq = true
      this.vi = false

    }
  }
  verParticipantes() {
    this.segundapantalla = !this.segundapantalla
    this.tecerapantalla_participantes = !this.tecerapantalla_participantes
  }
  verDesarrollo() {
    this.segundapantalla = !this.segundapantalla
    this.tecerapantalla_desarrollo = !this.tecerapantalla_desarrollo
  }

}
