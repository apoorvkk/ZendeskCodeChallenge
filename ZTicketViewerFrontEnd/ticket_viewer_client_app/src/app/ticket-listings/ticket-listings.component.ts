import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../shared/ticket.service';
import { ErrorService } from '../shared/error/error.service';

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

  constructor(private ticketsService: TicketService, private router: Router, private errorService: ErrorService) { }

  ngOnInit() {
    if (this.ticketsService.currentPage === 0) {
      this.listTickets(1);
    }
  }

  listTickets(pageNum: number) {
    if (pageNum <= 0) {
      this.errorService.message = 'Please supply a page number that is greater than 0.';
      this.router.navigate(['/client-error']);
    }
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
        if (error.headers.get('content-type', '') === 'application/json') {
          this.errorService.message = error.json();
        } else if (error.headers.get('content-type', '') === 'text/plain') {
          this.errorService.message = error._body.replace(/\n/g, '<br />').replace(/\t/g, '&nbsp;&nbsp;&nbsp;');
        }
        this.router.navigate(['/http-error']);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.ticketsRetrieverSub) {
      this.ticketsRetrieverSub.unsubscribe();
    }
  }


}
