import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genericlist',
  templateUrl: './genericlist.component.html',
  styleUrls: ['./genericlist.component.scss']
})
export class GenericlistComponent implements OnInit {
 @Input() jsonPath: string = '';
  items: { title: string; bullets?: string[] }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.jsonPath) {
      this.http.get<any[]>(this.jsonPath).subscribe(
        (data) => {
          this.items = data;
        },
        (error) => {
          console.error('Error cargando el JSON:', error);
        }
      );
    }
  }
}
