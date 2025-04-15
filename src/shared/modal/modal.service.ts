import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';
import { Modal } from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: Map<string, Modal> = new Map();

  constructor() {}

  registerModal(modalId: string, element: HTMLElement): void {
    const modalInstance = new Modal(element);
    // modalInstance.show()
    this.modals.set(modalId, modalInstance);

  }

  show(modalId: string): Modal | undefined {
    const modal = this.modals.get(modalId);
    if (modal) {
      setTimeout(() => modal.show(), 0)
    } else {
      console.error(`Modal with ID "${modalId}" not found.`);
    }
    return modal;
  }

  hide(modalId: string): void {
    const modal = this.modals.get(modalId);
    if (modal) {
      modal.hide();
    } else {
      console.error(`Modal with ID "${modalId}" not found.`);
    }
  }

  removeModal(modalId: string): void {
    const modal = this.modals.get(modalId);
    if (modal) {
      modal.dispose();
      this.modals.delete(modalId);
    } else {
      console.error(`Modal with ID "${modalId}" not found.`);
    }
  }


}
