import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent {
  titulo = 'RECUPERACIÓN POST INCENDIOS';
  direccion = 'Calle Sánchez Lima Nro. 2653, Zona Sopocachi';
  correo = 'Informacion@incendios.gob.bo';
  logos: string[] = [
    'assets/logos/bicentenario_vertical.png',
    'assets/logos/APMT LOGO.png',
    'assets/logos/lgo-2.png',
    'assets/logos/Euroclima.png',
    'assets/logos/AFD.png',
  ];
}
