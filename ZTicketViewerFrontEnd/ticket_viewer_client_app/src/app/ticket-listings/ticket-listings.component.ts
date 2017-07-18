import { Component, OnDestroy, OnInit } from '@angular/core';
import { TicketService } from '../shared/ticket.service';

declare var $: any;

/*
 Used to fetch and display tickets and their details.
 */
@Component({
  selector: 'app-ticket-listings',
  templateUrl: './ticket-listings.component.html',
  styleUrls: ['./ticket-listings.component.css']
})
export class TicketListingsComponent implements OnInit, OnDestroy {

  loading: boolean;
  ticketsRetrieverSub: any;
  totalTickets: number;
  currentPage: number;

  constructor(private ticketsService: TicketService) { }

  ngOnInit() {
    if (!this.currentPage) {
      this.listTickets(1);
    }
  }

  listTickets(pageNum: number) {
    this.loading = true;
    this.ticketsRetrieverSub = this.ticketsService.listTickets(pageNum).subscribe(
      result => {
        const data = result.json();
        this.ticketsService.tickets = data['tickets'];
        this.totalTickets = data['count'];
        this.currentPage = pageNum;
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
