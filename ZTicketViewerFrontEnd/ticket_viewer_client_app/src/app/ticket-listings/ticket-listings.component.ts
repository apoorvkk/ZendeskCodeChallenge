import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-ticket-listings',
  templateUrl: './ticket-listings.component.html',
  styleUrls: ['./ticket-listings.component.css']
})
export class TicketListingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      var table = $('#tickets_table').DataTable({
        scrollY: 300,
        scrollCollapse: true,
        paging: true,
        pageLength: 1,
        bLengthChange: false,
        searching: false,
        ordering: true,
        info: true
      });

      //new $.fn.dataTable.FixedHeader( table );
    } );
  }

}
