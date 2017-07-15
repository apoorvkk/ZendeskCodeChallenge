import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketListingsComponent} from "./ticket-listings/ticket-listings.component";


export const routes: Routes = [
  {
    path: '', component: TicketListingsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
