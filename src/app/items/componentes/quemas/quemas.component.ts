import { Component, Input } from '@angular/core';
interface DatosMunicipio {
  superficie: string;
  datos: { Mes: string; Cantidad: number }[];
}
@Component({
  selector: 'app-quemas',
  templateUrl: './quemas.component.html',
  styleUrls: ['./quemas.component.scss']
})
export class QuemasComponent {
  @Input() municipio: string = '';
  municipioData: any
  datos: Record<string, DatosMunicipio> = {
    'San Buenaventura': {
      superficie: '14,853 ha',
      datos: [
        { Mes: '2016', Cantidad: 2393 },
        { Mes: '2017', Cantidad: 1964 },
        { Mes: '2018', Cantidad: 507 },
        { Mes: '2019', Cantidad: 0 },
        { Mes: '2020', Cantidad: 0 },
        { Mes: '2021', Cantidad: 1837 },
        { Mes: '2022', Cantidad: 1897 }
      ]
    },
    'San Borja': {
      superficie: '151,921 ha',
      datos: [
        { Mes: '2016', Cantidad: 54233 },
        { Mes: '2017', Cantidad: 23621 },
        { Mes: '2018', Cantidad: 10842 },
        { Mes: '2019', Cantidad: 16357 },
        { Mes: '2020', Cantidad: 3235 },
        { Mes: '2021', Cantidad: 9957 },
        { Mes: '2022', Cantidad: 30443 }
      ]
    },
    'Palos Blancos': {
      superficie: '2.166 ha',
      datos: [
        { Mes: '2016', Cantidad: 7500 },
        { Mes: '2017', Cantidad: 3283 },
        { Mes: '2018', Cantidad: 0 },
        { Mes: '2019', Cantidad: 0 },
        { Mes: '2020', Cantidad: 201 },
        { Mes: '2021', Cantidad: 1371 },
        { Mes: '2022', Cantidad: 4002 }
      ]
    },
    'Rurrenabaque': {
      superficie: '60,154 ha',
      datos: [
        { Mes: '2016', Cantidad: 6211 },
        { Mes: '2017', Cantidad: 2325 },
        { Mes: '2018', Cantidad: 553 },
        { Mes: '2019', Cantidad: 143 },
        { Mes: '2020', Cantidad: 1784 },
        { Mes: '2021', Cantidad: 1384 },
        { Mes: '2022', Cantidad: 6113 }
      ]
    },
    'Vinto': {
      superficie: '452 ha',
      datos: [
        { Mes: '2016', Cantidad: 293 },
        { Mes: '2017', Cantidad: 0 },
        { Mes: '2018', Cantidad: 0 },
        { Mes: '2019', Cantidad: 0 },
        { Mes: '2020', Cantidad: 59 },
        { Mes: '2021', Cantidad: 797 },
        { Mes: '2022', Cantidad: 202 }
      ]
    },
    'Tiquipaya': {
      superficie: '254 ha',
      datos: [
        { Mes: '2016', Cantidad: 2675 },
        { Mes: '2017', Cantidad: 0 },
        { Mes: '2018', Cantidad: 0 },
        { Mes: '2019', Cantidad: 247 },
        { Mes: '2020', Cantidad: 122 },
        { Mes: '2021', Cantidad: 549 },
        { Mes: '2022', Cantidad: 411 }
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
