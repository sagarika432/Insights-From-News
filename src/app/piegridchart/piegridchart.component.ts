import { Component, OnInit } from '@angular/core';
import { ArticleSectionCount } from '../article-section-count';
import { ArticlesectioncountService }from '../articlesectioncount.service'
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from '../data';
// import { Observable } from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
import {Sectioncount } from '../sectioncount'
@Component({
  selector: 'app-piegridchart',
  templateUrl: './piegridchart.component.html',
  styleUrls: ['./piegridchart.component.css'],
  providers :[ArticlesectioncountService]
})
export class PiegridchartComponent implements OnInit {
  test :ArticleSectionCount[];
  test1 : any[];
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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor(private seccount : ArticlesectioncountService ) {
    Object.assign(this, {single,multi}
    
    
    
    
    
    
    
    );   
  }
  
  onSelect(event) {
    console.log(event);
  }

  /* getdata() : void 
  {
     this.seccount.getcount().subscribe(temp=> this.test = {...temp});
  } */

  ngOnInit() {
    // this.getdata();
    //this.getPosts();
  }
 /*  getPosts(): void {
    this.seccount.getCount()
        .subscribe(
            resultArray => this.test1= resultArray,
            error => console.log("Error :: " + error)
        )
} */


}
