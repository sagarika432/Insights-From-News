import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignuploginComponent } from './signuplogin/signuplogin.component';

const routes: Routes = [
   { path: 'dashboard', component: DashboardComponent },
   { path: 'userprofile', component : UserprofileComponent},
   { path: 'signuplogin', component : SignuploginComponent}
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
