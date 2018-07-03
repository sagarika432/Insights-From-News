import { Component, OnInit } from '@angular/core';
import { User1 } from '../user1'
import {UserService} from '../user.service'
import { Loggedinuser } from '../loggedinuser'
import { Small } from '../small'
import { DataService } from "../data.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers : [UserService]
})
export class TabsComponent implements OnInit {


  temp : User1 [];
  data :User1;
  tempname :string;
  errormsg :string;
  model = new User1('varshak333','varsha kukreja','varshak333@gmail.com','hello','varshak333');
  submitted= false ;

  constructor(private us : UserService,private data1: DataService) { }

  ngOnInit() {
    this.logged = false;
    this.data1.currentMessage.subscribe(message => this.message = message)
  }
onSubmit() { this.submitted = true;
console.log('hello');
this.addUser(); }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  addUser(): void {
    this.us.addUser(this.model)
      .subscribe( book => {
                 
                                   this.reset();   
                       this.tempname = book.name;						   
      },
                        error => this.errormsg = <any>error);
  }
  private reset() {
    this.model.username = null;	 
this.model.name = null;
this.model.emailid = null;
this.model.description= null;
this.model.password= null;
this.errormsg = null;
this.tempname = null;
}





// LOGGED IN USER CODE STARTS FROM HERE

message:string;


 public loggedinuser : Small ;
 actualusername  :string;
  errormsg1 :string;
model1 = new Loggedinuser ('varshak333','hello123');
 logged :boolean;

submitted1 = false;

  onSubmit1() { this.submitted1 = true;
  console.log('hellloo1');
  this.addBook();
  //console.log(this.loggedinuser.value);
 }

  // TODO: Remove this when we're done
  get diagnostic1() { return JSON.stringify(this.model1); }

  addBook(): void {
    if( this.logged)
    {
      this.loggedinuser.username= null;
      this.loggedinuser.value = null;
    }
    this.us.checkloginuser(this.model1)
      .subscribe( book => {
                 	
                                   this.reset1(); 
                                   if(book.value)
                                   {
                                   this.loggedinuser = book;
                                   this.logged= true ;
                                   this.newMessage (book.username)
                                  // this.sendUser ();
                                   }
                       //this.bookName = book.name;						   
      },
                        error => this.errormsg1 = <any>error);
  }
  private reset1() {
          this.model1.username= null;	 
    this.model1.password= null;
    this.errormsg1 = null;
    this.actualusername = null;
  }
 /*  sendUser(): void {
    // send message to subscribers via observable subject
    console.log(this.loggedinuser.username+ 'gghfh')
    this.us.sendMessage(this.loggedinuser.username);
}

clearMessage(): void {
    // clear message
    this.us.clearUser();
} */

newMessage(msg : string) {
  this.data1.changeMessage(msg)
}

}
