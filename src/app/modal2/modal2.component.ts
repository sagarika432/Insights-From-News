import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Modal2contentComponent } from '../modal2content/modal2content.component';
@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.css']
})
export class Modal2Component implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(Modal2contentComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
