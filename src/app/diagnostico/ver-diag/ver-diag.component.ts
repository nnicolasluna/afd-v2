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
  constructor(private modalStateService: ModalStateService) { }

  municipios = [
    { Municipio: 'Palos Blancos', preparacion: 'assets/Datos_tablas/PalosBlancos/preparacion.json', apoyoProy: 'assets/Datos_tablas/PalosBlancos/apoyoProyectos.json', actores: 'assets/Datos_tablas/PalosBlancos/actores.json',leccionesAprendidas :'assets/Datos_tablas/PalosBlancos/leccionesAprendidas.json'},
    { Municipio: 'San Buenaventura', preparacion: 'assets/Datos_tablas/PalosBlancos/preparacion.json', apoyoProy: 'assets/Datos_tablas/SanBuenaventura/apoyoProyectos.json', actores: 'assets/Datos_tablas/SanBuenaventura/actores.json' ,leccionesAprendidas :''},
  ];

ngOnInit(): void {
  if(this.Municipio) {
  const municipioData = this.municipios.find(m => m.Municipio === this.Municipio);
  if (municipioData) {
    this.actores = municipioData.actores;
    this.apoyoProy = municipioData.apoyoProy;
    this.preparacion = municipioData.preparacion;
    this.leccionesAprendidas = municipioData.leccionesAprendidas;
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
