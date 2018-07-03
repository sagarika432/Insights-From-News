import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { FirstusedService } from '../firstused.service'
import { MostusedService } from '../mostused.service'
import {Firstarticle} from '../firstarticle'

import { DataaService } from "../dataa.service";
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [ FirstusedService]
})
export class AccordionComponent implements OnInit {
  message:string;
  isFirstOpen = true;
  temp : Firstarticle[];
  temp1 : Firstarticle [] ;
  constructor(private fu :FirstusedService, private mu : MostusedService, private dataa: DataaService) { }

  ngOnInit() {
    this.dataa.currentMessage.subscribe(message => {this.message = message;
    
    this.getPosts();
    this.getPosts1();
    })
  //  this.dataa.currentMessage.subscribe(message => this.message = message)
  }
  getPosts(): void {
    this.fu.getfirstuse(this.message)
        .subscribe(
            resultArray => this.temp= resultArray,
            error => console.log("Error :: " + error)
        )
}
getPosts1(): void {
  this.mu.getmostuse(this.message)
      .subscribe(
          resultArray => this.temp1= resultArray,
          error => console.log("Error :: " + error)
      )
}

}
