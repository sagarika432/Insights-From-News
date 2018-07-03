import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Observable} from 'rxjs/Rx';
import { FirstusedService } from '../firstused.service'
import {Firstarticle} from '../firstarticle'
@Component({
  selector: 'app-modal1content',
  templateUrl: './modal1content.component.html',
  styleUrls: ['./modal1content.component.css'],
  providers: [ FirstusedService]
})
export class Modal1contentComponent implements OnInit {

 // temp : Firstarticle;
  title: string;
  closeBtnName: string;
  list: any[] = [];

 
  constructor(public bsModalRef: BsModalRef ,private fu :FirstusedService ) { }

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }

  /* getPosts(): void {
    this.fu.getfirstuse('gst')
        .subscribe(
            resultArray => this.temp= resultArray,
            error => console.log("Error :: " + error)
        )
} */

}
