import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TicketService {
  private tickets;
  private totalRecords: Number;

  constructor(private http: Http) {
  }

  public setTickets(tickets) {
    this.tickets = tickets;
  }

  public getTickets() {
    return this.tickets;
  }

  public listTickets(pageNum: number) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('http://' + window.location.hostname + ':8000/api/v1/tickets.json?page_num=' + pageNum.toString(), headers);
  }

}
