import { Component, OnInit } from '@angular/core';
import { DataaService } from "../dataa.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message:string;
  keyword : string  = 'gst';
  constructor(private dataa: DataaService) { }

  ngOnInit() {
    this.dataa.currentMessage.subscribe(message => this.message = message)
    this.fun4();
  }
  newMessage() {
    this.dataa.changeMessage(this.keyword);
  }
  fun1 ()
  {
    this.keyword= 'hdfc';
    this.newMessage ();
  }
  fun2 ()
  {
    this.keyword= 'tesla';
    this.newMessage ();
  }
  fun3 ()
  {
    this.keyword= 'aviation';
    this.newMessage ();
  }
  fun4 ()
  {
    this.keyword= 'gst';
    this.newMessage ();
  }
}
