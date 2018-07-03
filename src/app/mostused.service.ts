import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response} from "@angular/http";
import {Firstarticle} from './firstarticle'
@Injectable()
export class MostusedService {

  constructor(private http: Http) { }

  getmostuse (keyword : string) : Observable<Firstarticle[] >
  {
    const firsturl = 'http://localhost:8080/mostused/' + keyword;

    return this.http
    .get(firsturl)
    .map((response: Response) => {
        return (Array.of(<Firstarticle []>response.json()));
        
    })
    .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
}

}
