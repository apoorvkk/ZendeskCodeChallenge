import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

/*
Used to communicate with REST api server which allows us to get the necessary ticket data (listing and specific ones).
 */
@Injectable()
export class TicketService {
  private _tickets: {}[];

  get tickets() {
    return this._tickets;
  }

  set tickets(value) {
    this._tickets = value;
  }

  constructor(private http: Http) {
  }

  listTickets(pageNum: number) {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get('http://' + window.location.hostname + ':8080/api/v1/tickets.json?page=' + pageNum.toString(), options);
  }

  showTicket(ticketId: number) {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get('http://' + window.location.hostname + ':8080/api/v1/tickets/' + ticketId.toString() + '.json', options);
  }

}
