import { Component } from '@angular/core';
import { ModalStateService } from 'src/app/services/modal-state/modal-state.service';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent {
  mostrarleftCard: boolean = false;
  alternarleftCard() {
    this.mostrarleftCard = !this.mostrarleftCard;
  }
  visible = false;

  constructor(private ModalStateService: ModalStateService) { }

  ngOnInit() {
    this.ModalStateService.vistaActual$.subscribe(vista => {
      this.visible = vista === 'leftbar';
    });
  }
}
