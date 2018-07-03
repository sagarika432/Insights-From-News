import { Component, OnInit } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from '../data';

@Component({
  selector: 'app-advancedpiechart',
  templateUrl: './advancedpiechart.component.html',
  styleUrls: ['./advancedpiechart.component.css']
})
export class AdvancedpiechartComponent implements OnInit {
  single: any[];
  multi: any[];
  
  view: any[] = [700, 400];
  constructor() { 
    Object.assign(this, {single, multi})   
  }
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnInit() {
  }
  onSelect(event) {
    console.log(event);
  }
}
