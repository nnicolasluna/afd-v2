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
  preparacion: string = ''
  leccionesAprendidas: string = '';
  recoleccionInsMif: string = '';
  recoleccionLocMif: string = '';
  recoleccionInsRed: string = '';
  recoleccionLocRed: string = '';
  recoleccionInsAtn: string = '';
  recoleccionLocAtn: string = '';
  recoleccionInsPro: string = '';
  recoleccionLocPro: string = '';
  constructor(private modalStateService: ModalStateService) { }
  direcciones = {
    "direccion_base": "assets/Datos_tablas/",
    "archivos": {
      "preparacion": "preparacion.json",
      "actores": "actores.json",
      "apoyos": "apoyoProyectos.json",
      "lecciones_aprendidas": "leccionesAprendidas.json",
      "recoleccion_info": {
        "atencion_locales": "arencionLocales.json",
        "atencion_institucional": "atencionInstitucional.json",
        "mif_institucional": "mifInstitucional.json",
        "mif_locales": "mifLocales.json",
        "promocion_institucional": "promocionInstitucional.json",
        "promocion_locales": "promocionLocales.json",
        "reduccion_institucional": "reduccionInstitucional.json",
        "reduccion_locales": "reduccionLocales.json"
      }
    }
  }
  municipios = [
    { Municipio: 'Palos Blancos' },
    { Municipio: 'San Buenaventura' },
    { Municipio: 'San Borja' },
    { Municipio: 'Rurrenabaque' },
    { Municipio: 'Vinto' },
    { Municipio: 'Tiquipaya' }
  ];

  ngOnInit(): void {
    if (this.Municipio) {
      const municipioData = this.municipios.find(m => m.Municipio === this.Municipio);
      if (municipioData) {
        this.actores = this.direcciones.direccion_base + municipioData.Municipio + '/' + this.direcciones.archivos.actores;
        this.apoyoProy = this.direcciones.direccion_base + municipioData.Municipio + '/' + this.direcciones.archivos.apoyos;
        this.preparacion = this.direcciones.direccion_base + municipioData.Municipio + '/' + this.direcciones.archivos.preparacion;
        this.leccionesAprendidas = this.direcciones.direccion_base + municipioData.Municipio + '/' + this.direcciones.archivos.lecciones_aprendidas;
        this.recoleccionInsMif = this.direcciones.direccion_base + municipioData.Municipio + '/recoleccionInfo/' + this.direcciones.archivos.recoleccion_info.mif_institucional;
        this.recoleccionLocMif = this.direcciones.direccion_base + municipioData.Municipio + '/recoleccionInfo/' + this.direcciones.archivos.recoleccion_info.mif_locales;
        this.recoleccionInsRed = this.direcciones.direccion_base + municipioData.Municipio + '/recoleccionInfo/' + this.direcciones.archivos.recoleccion_info.reduccion_institucional;
        this.recoleccionLocRed = this.direcciones.direccion_base + municipioData.Municipio + '/recoleccionInfo/' + this.direcciones.archivos.recoleccion_info.reduccion_locales;
        this.recoleccionInsAtn = this.direcciones.direccion_base + municipioData.Municipio + '/recoleccionInfo/' + this.direcciones.archivos.recoleccion_info.atencion_institucional;
        this.recoleccionLocAtn = this.direcciones.direccion_base + municipioData.Municipio + '/recoleccionInfo/' + this.direcciones.archivos.recoleccion_info.atencion_locales;
        this.recoleccionInsPro = this.direcciones.direccion_base + municipioData.Municipio + '/recoleccionInfo/' + this.direcciones.archivos.recoleccion_info.promocion_institucional;
        this.recoleccionLocPro = this.direcciones.direccion_base + municipioData.Municipio + '/recoleccionInfo/' + this.direcciones.archivos.recoleccion_info.promocion_locales;
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
