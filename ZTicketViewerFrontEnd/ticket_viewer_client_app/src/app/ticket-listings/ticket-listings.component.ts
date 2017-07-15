import { Component, OnInit } from '@angular/core';
import {TicketService} from "../shared/ticket.service";

declare var $: any;

@Component({
  selector: 'app-ticket-listings',
  templateUrl: './ticket-listings.component.html',
  styleUrls: ['./ticket-listings.component.css']
})
export class TicketListingsComponent implements OnInit {
  private rowsOnPage: Number = 25;
  private activePage: Number = 1;
  private tickets = this.ticketService.getTickets();
  private totalRecords;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    // $(document).ready(function() {
    //   var table = $('#tickets_table').DataTable({
    //     scrollY: 300,
    //     scrollCollapse: true,
    //     paging: true,
    //     pageLength: 1,
    //     bLengthChange: false,
    //     searching: false,
    //     ordering: true,
    //     info: true
    //   });
    // } );


  }


  public onPageChange(event) {
    this.rowsOnPage = event.rowsOnPage;
    this.activePage = event.activePage;
    this.listTickets(this.activePage);
  }

  // public onSortOrder(event) {
  //   this.loadData();
  // }

  public listTickets(pageNum: Number) {
    this.ticketService.listTickets(pageNum).subscribe(
      result => {
        const data = result.json();
        this.totalRecords = data['count'];
        this.ticketService.setTickets(data['tickets']);
      },
      error => {
        console.log(error); // DO EXCEPTION HANDLING.
      }
    );
  }

}
