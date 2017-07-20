import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../shared/ticket.service';
import { ErrorService } from '../shared/error/error.service';

declare var $: any;

/*
Used to locate the specified ticket and then display its details.
 */
@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit, OnDestroy {
  ticket: any;
  loading: boolean;
  ticketRetrieverSub: any;

  constructor(private ticketService: TicketService, private activatedRoute: ActivatedRoute, private router: Router,
              private errorService: ErrorService) { }

  ngOnInit() {
    this.loading = true;
    let ticketId = 0;
    this.activatedRoute.queryParams.subscribe((params) => {
      ticketId = params['id'] ? Number(params['id']) : null;
    });

    if (ticketId === null || Number.isNaN(ticketId) || ticketId <= 0 || typeof ticketId !== 'number') {
      this.errorService.message = 'Please supply a valid ticket id (must be numerical and greater than 0).';
      this.router.navigate(['/client-error']);
    }

    // Look for the ticket locally from the current page of tickets.
    let localTicketFound = false;
    if (this.ticketService.tickets) {
      for (const ticket of this.ticketService.tickets){
        if (+ticket['id'] == ticketId) {
          this.ticket = ticket;
          localTicketFound = true;
          this.loading = false;
        }
      }
    }

    // Fallback and make request for the specific ticket.
    if (!localTicketFound || !this.ticketService.tickets) {
      this.ticketRetrieverSub = this.ticketService.showTicket(ticketId).subscribe(
        result => {
          this.ticket = result.json();
          this.loading = false;
        },
        error => {
          if (error.headers.get('content-type', '') === 'application/json') {
            this.errorService.message = error.json();
          } else if (error.headers.get('content-type', '') === 'text/plain') {
            this.errorService.message = error._body;
          }
          this.router.navigate(['/http-error']);
        }
      );
    }
  }

  ngOnDestroy(): void {
    if (this.ticketRetrieverSub) {
      this.ticketRetrieverSub.unsubscribe();
    }
  }

}
