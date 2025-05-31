import { Component, Input } from '@angular/core';
interface DatosMunicipio {
  grafico: string;
  datos: { Mes: string; Cantidad: number }[];
}
@Component({
  selector: 'app-focosde-calor',
  templateUrl: './focosde-calor.component.html',
  styleUrls: ['./focosde-calor.component.scss']
})
export class FocosdeCalorComponent {
  @Input() municipio: string = '';
  municipioData: any
  datos: Record<string, DatosMunicipio> = {
    'San Buenaventura': {
      grafico: 'assets/tortas/sanbuena.png',
      datos: [
        { Mes: 'Junio', Cantidad: 7 },
        { Mes: 'Julio', Cantidad: 15 },
        { Mes: 'Agosto', Cantidad: 42 },
        { Mes: 'Octubre', Cantidad: 545 },
        { Mes: 'Noviembre', Cantidad: 934 },
        { Mes: 'Diciembre', Cantidad: 92 }
      ]
    },
    'San Borja': {
      grafico: 'assets/tortas/SanBorja.png',
      datos: [
        { Mes: 'Junio', Cantidad: 52 },
        { Mes: 'Julio', Cantidad: 62 },
        { Mes: 'Agosto', Cantidad: 644 },
        { Mes: 'Octubre', Cantidad: 5448 },
        { Mes: 'Noviembre', Cantidad: 1271 },
        { Mes: 'Diciembre', Cantidad: 438 }
      ]
    },
    'Palos Blancos': {
      grafico: 'assets/tortas/palos.png',
      datos: [
        { Mes: 'Junio', Cantidad: 29 },
        { Mes: 'Julio', Cantidad: 15 },
        { Mes: 'Agosto', Cantidad: 60 },
        { Mes: 'Octubre', Cantidad: 662 },
        { Mes: 'Noviembre', Cantidad: 99 },
        { Mes: 'Diciembre', Cantidad: 81 }
      ]
    },
    'Rurrenabaque': {
      grafico: 'assets/tortas/rurre.png',
      datos: [
        { Mes: 'Junio', Cantidad: 20 },
        { Mes: 'Julio', Cantidad: 14 },
        { Mes: 'Agosto', Cantidad: 79 },
        { Mes: 'Octubre', Cantidad: 1755 },
        { Mes: 'Noviembre', Cantidad: 1829 },
        { Mes: 'Diciembre', Cantidad: 86 }
      ]
    },
    'Vinto': {
      grafico: 'assets/tortas/vinto.png',
      datos: [
        { Mes: 'Junio', Cantidad: 0 },
        { Mes: 'Julio', Cantidad: 1 },
        { Mes: 'Agosto', Cantidad: 2 },
        { Mes: 'Octubre', Cantidad: 0 },
        { Mes: 'Noviembre', Cantidad: 0 },
        { Mes: 'Diciembre', Cantidad: 0 }
      ]
    },
    'Tiquipaya': {
      grafico: 'assets/tortas/tiqui.png',
      datos: [
        { Mes: 'Junio', Cantidad: 0 },
        { Mes: 'Julio', Cantidad: 0 },
        { Mes: 'Agosto', Cantidad: 21 },
        { Mes: 'Octubre', Cantidad: 0 },
        { Mes: 'Noviembre', Cantidad: 0 },
        { Mes: 'Diciembre', Cantidad: 0 }
      ]
    }
  };
  ngOnInit(): void {
    console.log(this.municipio)
    console.log('gaaaa')
    this.municipioData = this.obtenerDatosMunicipio(this.municipio);
  }
  obtenerDatosMunicipio(municipioBuscado: string): DatosMunicipio | undefined {
    return this.datos[municipioBuscado];
  }
}
