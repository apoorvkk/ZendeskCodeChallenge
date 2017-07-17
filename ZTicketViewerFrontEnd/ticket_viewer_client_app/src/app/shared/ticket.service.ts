import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class TicketService {

  private _totalTickets: number;
  private _currentPage: number;
  private _tickets: {}[];

  get totalTickets(): number {
    return this._totalTickets;
  }

  set totalTickets(value: number) {
    this._totalTickets = value;
  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(value: number) {
    this._currentPage = value;
  }

  get tickets() {
    return this._tickets;
  }

  set tickets(value) {
    this._tickets = value;
  }


  constructor(private http: Http) {
  }

  public listTickets(pageNum: number) {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get('http://' + window.location.hostname + ':8080/api/v1/tickets.json?page=' + pageNum.toString(), options);
  }

  public showTicket(ticketId: number) {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get('http://' + window.location.hostname + ':8080/api/v1/tickets/' + ticketId.toString() + '.json', options);
  }

}
