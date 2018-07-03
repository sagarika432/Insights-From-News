import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../data';
import {Observable} from 'rxjs/Rx';
import {Sectioncount } from '../sectioncount'
import {TotalusageService} from '../totalusage.service'
import { DataaService } from "../dataa.service";
@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.css'],
  providers: [TotalusageService]
})
export class BargraphComponent implements OnInit {
  message:string;
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
  xAxisLabel = 'Count';
  showYAxisLabel = true;
  yAxisLabel = 'Keywords';

  colorScheme = {
    domain: ['#5DADEC', '#FF5470', '#87FF2A', '#FFDB00']
  };

  constructor(private tu :TotalusageService , private dataa: DataaService) { 
    Object.assign(this, this.test1)  
  }

  ngOnInit() {
    this.getPosts();
    this.dataa.currentMessage.subscribe(message => this.message = message)
  }
  onSelect(event) {
    console.log(event);
  }

  getPosts(): void {
    this.tu.getCount()
        .subscribe(
            resultArray => this.test1= resultArray,
            error => console.log("Error :: " + error)
        )
}
}
