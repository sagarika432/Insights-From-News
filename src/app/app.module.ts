import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BargraphComponent } from './bargraph/bargraph.component';
import { PiegridchartComponent } from './piegridchart/piegridchart.component';
import { GaugechartComponent } from './gaugechart/gaugechart.component';
import { Modal1Component } from './modal1/modal1.component';
import { Modal1contentComponent } from './modal1content/modal1content.component';
import { ModalModule } from 'ngx-bootstrap';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { Modal2Component } from './modal2/modal2.component';
import { Modal2contentComponent } from './modal2content/modal2content.component';
import { AdvancedpiechartComponent } from './advancedpiechart/advancedpiechart.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsModule } from 'ngx-bootstrap';
import { SignuploginComponent } from './signuplogin/signuplogin.component';
import { FormsModule }   from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { ArticlesectioncountService } from './articlesectioncount.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from "@angular/http";
import { Piegridchart1Component } from './piegridchart1/piegridchart1.component';
import { FirstusedService } from './firstused.service';
import { MostusedService } from './mostused.service';
import { CountpastsixService } from './countpastsix.service';
import { TotalusageService } from './totalusage.service';
import { UserService } from './user.service';
import { DataService } from './data.service';
import { DataaService } from './dataa.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    BargraphComponent,
    PiegridchartComponent,
    GaugechartComponent,
    Modal1Component,
    Modal1contentComponent,
    AccordionComponent,
    UserprofileComponent,
    Modal2Component,
    Modal2contentComponent,
    AdvancedpiechartComponent,
    TabsComponent,
    SignuploginComponent,
    CarouselComponent,
    Piegridchart1Component
  ],
  imports: [
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule ,
    FormsModule,
    HttpClientModule,
    HttpModule

  ],
  providers: [ArticlesectioncountService, FirstusedService, MostusedService, CountpastsixService, TotalusageService, UserService, DataService, DataaService],
  entryComponents: [Modal1contentComponent,
  Modal2contentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
