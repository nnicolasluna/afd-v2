import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() data: string = '';
  text:string='';
  title:string='';
  constructor(private http: HttpClient) { }
ngOnInit() {
    if (this.data) {
      this.http.get<any>(this.data).subscribe({
        next: (response) => {

          this.title = response.titulo;
          this.text = response.parrafo;
        },
        error: (err) => {
          console.error('Error cargando el JSON:', err);
        }
      });
    }
  }
}
