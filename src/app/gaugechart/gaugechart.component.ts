import { Component, OnInit } from '@angular/core';
import {single} from '../data';
import {Observable} from 'rxjs/Rx';
import {Sectioncount } from '../sectioncount'
import {CountpastsixService} from '../countpastsix.service'
import { DataaService } from "../dataa.service";

@Component({
  selector: 'app-gaugechart',
  templateUrl: './gaugechart.component.html',
  styleUrls: ['./gaugechart.component.css'],
  providers :[ CountpastsixService ]
})
export class GaugechartComponent implements OnInit {
  
  message:string;
  view: any[] = [700, 400];
  data: any[];
  test1 : any [];
  
  colorScheme = {
    domain: ['#5DADEC', '#FF5470', '#87FF2A', '#FFDB00','#00755E']
  };
  
  onSelect(event) {
    console.log(event);
  }
  constructor(private cps :CountpastsixService ,private dataa: DataaService) {
    this.data = this.test1;
   }

  ngOnInit() {
    this.getPosts();
    this.dataa.currentMessage.subscribe(message => {this.message = message;
    this.getPosts();})
  }

  getPosts(): void {
    this.cps.getCount(this.message)
        .subscribe(
            resultArray => this.test1= resultArray,
            error => console.log("Error :: " + error)
        )
}

}
