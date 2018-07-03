import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response} from "@angular/http";
import { Sectioncount } from './sectioncount';

@Injectable()
export class CountpastsixService {

  constructor( private http: Http) { }

  getCount(keyword : string): Observable<Sectioncount[]> {

    const countpastsixurl = 'http://localhost:8080/count6months/' + keyword;

    return this.http
        .get(countpastsixurl)
        .map((response: Response) => {
            return <Sectioncount[]>response.json();
        })
        .catch(this.handleError);
}

private handleError(error: Response) {
    return Observable.throw(error.statusText);
}

}
