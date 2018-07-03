import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response} from "@angular/http";
import { Sectioncount } from './sectioncount';

@Injectable()
export class TotalusageService {

  constructor(private http: Http) { }

  getCount(): Observable<Sectioncount[]> {
   const totalcounturl = 'http://localhost:8080/totalusagecount';
    return this.http
        .get(totalcounturl)
        .map((response: Response) => {
            return <Sectioncount[]>response.json();
        })
        .catch(this.handleError);
}

private handleError(error: Response) {
    return Observable.throw(error.statusText);
}

}
