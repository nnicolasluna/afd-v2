import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface TableData {
  headers: { key: string; header: string }[];
  rows: any[];
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() jsonUrl: string = '';

  columns: { key: string; header: string }[] = [];
  data: any[] = [];
  loading = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.jsonUrl) {
      this.http.get<TableData>(this.jsonUrl).subscribe({
        next: (response) => {
          this.columns = response.headers;
          this.data = response.rows;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error cargando el JSON:', err);
          this.loading = false;
        }
      });
    }
  }
}
