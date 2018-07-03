import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal2content',
  templateUrl: './modal2content.component.html',
  styleUrls: ['./modal2content.component.css']
})
export class Modal2contentComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }

}
