import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.scss'],
})
export class CarrucelComponent implements OnChanges, OnDestroy {
  /*  imagenes: string[] = [
    'assets/imagenes/FotosAlternativas/Palos Blancos/1.jpg',
    'assets/imagenes/FotosAlternativas/Palos Blancos/2.jpg',
    'assets/imagenes/FotosAlternativas/Palos Blancos/3.jpg',
  ];
  
  imagenActual = 0;
  intervalo: any;

  ngOnInit(): void {
    this.intervalo = setInterval(() => {
      this.imagenActual = (this.imagenActual + 1) % this.imagenes.length;
    }, 2000); // cambia cada 5 segundos
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  } */
  @Input() municipio: string = '';
  @Input() taller: string = '';

  imagenes: string[] = [];
  imagenActual = 0;
  intervalo: any;
  imagenVisible = true; // <-- nuevo

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['municipio'] || changes['taller']) {
      this.imagenActual = 0;
      this.imagenes = [];
      this.cargarImagenes(this.taller);

      // Reinicia intervalo si ya estaba corriendo
      if (this.intervalo) {
        clearInterval(this.intervalo);
      }

      this.intervalo = setInterval(() => {
        this.imagenActual = (this.imagenActual + 1) % this.imagenes.length;
      }, 2000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
  ocultarImagen(): void {
    this.imagenVisible = false;
  }

  mostrarImagen(): void {
    this.imagenVisible = true;
  }
  cargarImagenes(taller: string): void {
    const totalImagenes = 2;
    if (taller != 'TALLER 3' && 'TALLER 5') {
      for (let i = 1; i <= totalImagenes; i++) {
        const ruta = `assets/imagenes/Talleres/${this.taller}/${this.municipio}/${i}.png`;
        this.imagenes.push(ruta);
      }
    } else if (taller == 'TALLER 3') {
      for (let i = 1; i <= totalImagenes; i++) {
        const ruta = `assets/imagenes/Talleres/${this.taller}/${i}.png`;
        this.imagenes.push(ruta);
      }
    }
  }
}
