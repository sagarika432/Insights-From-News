import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Modal1contentComponent } from '../modal1content/modal1content.component';
@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css']
})
export class Modal1Component implements OnInit {

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
    this.bsModalRef = this.modalService.show(Modal1contentComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
