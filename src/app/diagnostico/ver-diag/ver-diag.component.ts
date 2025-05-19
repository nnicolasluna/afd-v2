import { Component, Input, OnInit } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-ver-diag',
  templateUrl: './ver-diag.component.html',
  styleUrls: ['./ver-diag.component.scss']
})
export class VerDiagComponent implements OnInit {
  @Input() Municipio: string | undefined;
  currentStep = 0;
  ExtenderBar: boolean = true;
  actores: string = '';
  apoyoProy: string = '';
  preparacion: string = '';
  leccionesAprendidas: string = '';
  recoleccionDeInfo1: string = '';
  constructor(private modalStateService: ModalStateService) { }
  direcion = 'assets/Datos_tablas/'
  municipios = [
    { Municipio: 'Palos Blancos', preparacion: 'assets/Datos_tablas/Palos Blancos/preparacion.json', apoyoProy: 'assets/Datos_tablas/Palos Blancos/apoyoProyectos.json', actores: 'assets/Datos_tablas/Palos Blancos/actores.json', leccionesAprendidas: 'assets/Datos_tablas/Palos Blancos/leccionesAprendidas.json', recoleccionDeInfo1:'recoleccion1.json'},
    { Municipio: 'San Buenaventura', preparacion: 'assets/Datos_tablas/Palos Blancos/preparacion.json', apoyoProy: 'assets/Datos_tablas/San Buenaventura/apoyoProyectos.json', actores: 'assets/Datos_tablas/San Buenaventura/actores.json', leccionesAprendidas: '', recoleccionDeInfo1:'' },
  ];

  ngOnInit(): void {
    if (this.Municipio) {
      const municipioData = this.municipios.find(m => m.Municipio === this.Municipio);
      if (municipioData) {
        this.actores = municipioData.actores;
        this.apoyoProy = municipioData.apoyoProy;
        this.preparacion = municipioData.preparacion;
        this.leccionesAprendidas = municipioData.leccionesAprendidas;
        this.recoleccionDeInfo1 = this.direcion+municipioData.Municipio+'/'+municipioData.recoleccionDeInfo1;
      } else {
        console.warn(`Municipio "${this.Municipio}" no encontrado en la lista.`);
      }
    }
  }
  nextStep() {
    if (this.currentStep < 6 - 1) {
      this.currentStep++;
    }
    /* 
      if (this.currentStep === 3) {
        this.ExtenderBar = false;
        this.currentStep = 1;
      } */
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
  mostrarDiagnostico(): void {
    this.modalStateService.mostrarDiagnostico();
  }
  extenderBar() {
    this.ExtenderBar = !this.ExtenderBar;
  }
  onCerrarClick() {
    this.modalStateService.cerrarVistas();
  }
}
