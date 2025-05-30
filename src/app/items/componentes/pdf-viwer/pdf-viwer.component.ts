import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viwer',
  templateUrl: './pdf-viwer.component.html',
  styleUrls: ['./pdf-viwer.component.scss']
})
export class PdfViwerComponent {
  @Input() direccion:string=''
  @Input() titulo:string=''
  manual = 'assets/pdf/'

  constructor(private sanitizer: DomSanitizer) { }

  get safePdfUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.manual+this.direccion);
  }
}
