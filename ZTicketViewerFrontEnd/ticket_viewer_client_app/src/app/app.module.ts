import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { CommentListingsComponent } from './ticket-detail/comment-listings/comment-listings.component';
import { TicketListingsComponent } from './ticket-listings/ticket-listings.component';
import { CommentService } from './ticket-detail/comment-listings/comment.service';
import { TicketService } from './shared/ticket.service';

import { ReadMoreComponent } from './shared/read-more.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';

import { NgxPaginationModule } from 'ngx-pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    HttpModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    TicketListingsComponent,
    TicketDetailComponent,
    CommentListingsComponent,
    ReadMoreComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  TicketService,
  CommentService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
