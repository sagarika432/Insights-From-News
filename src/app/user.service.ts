import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response} from "@angular/http";
import { User1 } from './user1';
import {Loggedinuser} from './loggedinuser';

import { Headers, RequestOptions } from '@angular/http';
import { Small } from './small'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
 loggedinuser :  any;
 private subject = new Subject<any>();
  constructor(private http:Http) { }


  addUser(temp:User1): Observable<User1> {
   const   url = 'http://localhost:8080/useradd'
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, temp, options)
               .map(this.extractData)
               .catch(this.handleErrorObservable);
}
extractData(res: Response) {
  let body = res.json();
  return body || {};
}
handleErrorObservable (error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.message || error);
} 




// Logged in user code starts from here 

checkloginuser(temp : Loggedinuser ): Observable<Small> {
  const url = 'http://localhost:8080/checklogin';
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post(url,temp , options)
             .map(this.extractData)
             .catch(this.handleErrorObservable);
} 

 /*  sendUser ( temp :  any) :void
  {
    /* console.log(temp.username+ 'mmm');
    
      this.loggedinuser = temp;
      console.log(this.loggedinuser.username+ 'mmmfgh'); 
      
      this.subject.next({ text : temp });
  } 
  
 /* clearUser ()
 {
   this.loggedinuser =null;
 }
 getUser() : Observable <any>
 {
   console.log(this.loggedinuser.username);
    return this.loggedinuser.asObservable();
 } */
 sendMessage(message: string) {
   console.log(message + 'xxx');
  this.subject.next({ text: message });
}


 clearUser() {
  this.subject.next();
}

getUser(): Observable<any> {
  return this.subject.asObservable();
}



// for userprofile 

getPosts(temp :string): Observable<User1[]> {
  const url = 'http://localhost:8080/finduser/' + temp;
  return this.http
      .get(url)
      .map((response: Response) => {
          return Array.of(<User1[]>response.json());
      })
      .catch(this.handleError);
}

private handleError(error: Response) {
  return Observable.throw(error.statusText);
}


}
