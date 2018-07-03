import { Injectable } from '@angular/core';
import { ArticleSectionCount } from './article-section-count';
import {Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response} from "@angular/http";
import { Sectioncount } from './sectioncount';
@Injectable()
export class ArticlesectioncountService {
  temp : ArticleSectionCount [ ];
  private counturl = 'http://localhost:8080/totalcountallsections/';
  constructor( private http: Http) { }

 /*  // getcount() : 
  // {
  //   //this.temp = ArticleSectionCount [ ];
  //   // return this.http.get<ArticleSectionCount []>(this.counturl);

  // } */
  getCount(keyword : string ): Observable<Sectioncount[]> {
    return this.http
        .get(this.counturl + keyword)
        .map((response: Response) => {
            return <Sectioncount[]>response.json();
        })
        .catch(this.handleError);
}

private handleError(error: Response) {
    return Observable.throw(error.statusText);
}
}
