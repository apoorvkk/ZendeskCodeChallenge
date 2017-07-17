import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';


import { AppRoutingModule } from './app.routing';

import { TicketListingsComponent } from './ticket-listings/ticket-listings.component';
import { TicketService } from './shared/ticket.service';
import {HttpModule} from '@angular/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { CommentListingsComponent } from './ticket-detail/comment-listings/comment-listings.component';
import {CommentService} from "./ticket-detail/comment-listings/comment.service";
import { ReadMoreComponent } from './shared/read-more/read-more.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
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
