import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";

@Injectable()
export class CommentService {

  constructor(private http: Http) { }

  public listComments(pageNum: number, ticketId: number) {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get('http://' + window.location.hostname + ':8080/api/v1/tickets/' + ticketId.toString() + '/comments.json?page=' + pageNum.toString(), options);
  }
}
