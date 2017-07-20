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
import { ErrorService } from './shared/error/error.service';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

import { ReadMoreComponent } from './shared/read-more.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';

import { NgxPaginationModule } from 'ngx-pagination';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpErrorComponent } from './shared/error/http-error/http-error.component';
import { ClientErrorComponent } from './shared/error/client-error/client-error.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    HttpModule,
    NgxPaginationModule,
    PrettyJsonModule
  ],
  declarations: [
    AppComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    TicketListingsComponent,
    TicketDetailComponent,
    CommentListingsComponent,
    ReadMoreComponent,
    NotFoundPageComponent,
    HttpErrorComponent,
    ClientErrorComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  TicketService,
  CommentService,
  ErrorService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
