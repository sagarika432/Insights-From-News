import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {UserService} from '../user.service'
import { DataService } from "../data.service";
import { User1} from '../user1';
@Component({

  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers : [UserService] 

})
export class UserprofileComponent implements OnInit {
  _postsArray: User1[];
  message:string;

  subscription: Subscription; 

  constructor(private us : UserService, private data: DataService ) { 
   
    
  }

  ngOnInit() {
    //this.subscription = this.us.getUser().subscribe(message => { this.message= message; });
    this.data.currentMessage.subscribe(message =>{ this.message = message;
      this.getPosts();})
    
  }
  getPosts(): void {
    if(this.message != 'default'){
    this.us.getPosts(this.message)
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        )
      }
}



}
