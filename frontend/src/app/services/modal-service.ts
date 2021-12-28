import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalConfirm } from '../modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private service: NgbModal) {}

  confirm(title: string, message: string, description: string): Promise<any> {
    const modal = this.service.open(NgbdModalConfirm);
    modal.componentInstance.title = title;
    modal.componentInstance.message = message;
    modal.componentInstance.description = description;
    return modal.result;
  }

  print(title: string, message: string, description: string): Promise<any> {
    const modal = this.service.open(NgbdModalConfirm);
    modal.componentInstance.title = title;
    modal.componentInstance.message = message;
    modal.componentInstance.description = description;
    return modal.result;
  }
}
