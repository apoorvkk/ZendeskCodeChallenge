import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TicketService} from '../shared/ticket.service';
import {isUndefined} from 'util';

declare var $: any;

@Component({
  selector: 'app-ticket-listings',
  templateUrl: './ticket-listings.component.html',
  styleUrls: ['./ticket-listings.component.css']
})
export class TicketListingsComponent implements OnInit, OnDestroy {

  loading: boolean;
  ticketsRetrieverSub: any;

  constructor(private ticketsService: TicketService) { }

  ngOnInit() {
    if (!this.ticketsService.currentPage) { // Running for the first time.
      this.listTickets(1);
    }
  }

  public listTickets(pageNum: number) {
    this.loading = true;
    this.ticketsRetrieverSub = this.ticketsService.listTickets(pageNum).subscribe(
      result => {
        const data = result.json();
        this.ticketsService.tickets = data['tickets'];
        this.ticketsService.totalTickets = data['count'];
        this.ticketsService.currentPage = pageNum;
        this.loading = false;
      },
      error => {
        console.log(error); // DO EXCEPTION HANDLING.
      }
    );
  }

  ngOnDestroy(): void {
    if (this.ticketsRetrieverSub) {
      this.ticketsRetrieverSub.unsubscribe();
    }
  }


}
