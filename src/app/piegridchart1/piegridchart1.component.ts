import { Component, OnInit } from '@angular/core';
import {single, multi} from '../data';
import { ArticlesectioncountService }from '../articlesectioncount.service'
import {Observable} from 'rxjs/Rx';
import {Sectioncount } from '../sectioncount'
import { DataaService } from "../dataa.service";


@Component({
  selector: 'app-piegridchart1',
  templateUrl: './piegridchart1.component.html',
  styleUrls: ['./piegridchart1.component.css'],
  providers :[ArticlesectioncountService]
})
export class Piegridchart1Component implements OnInit {
  message:string;
  test1 : any [] ;
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5DADEC', '#FF5470', '#87FF2A', '#FFDB00','#00755E']
  };

  // line, area
  autoScale = true;
  
  constructor(private seccount : ArticlesectioncountService , private dataa : DataaService) { 
    Object.assign(this, this.test1)  
  }

  ngOnInit() {
    this.getPosts();
    this.dataa.currentMessage.subscribe(message => {this.message = message;
    this.getPosts();})
  }

  onSelect(event) {
    console.log(event);
  }

  getPosts(): void {
    this.seccount.getCount(this.message)
        .subscribe(
            resultArray => this.test1= resultArray,
            error => console.log("Error :: " + error)
        )
}
}
