import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
@Input() modalId: string = '';
@Input() modalTitle: string = '';
@Input() modalContent: string = '';

}
