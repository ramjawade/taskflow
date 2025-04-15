import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements AfterViewInit {
  @Input() modalId: string = 'abcd';
  @Input() modalTitle: string = '';
  @Input() modalContent: string = '';

  constructor(private modalService: ModalService, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const modalElement = this.elementRef.nativeElement.querySelector('.modal');
    if (modalElement) {
      this.modalService.registerModal(this.modalId, modalElement);
    }
  }
}
