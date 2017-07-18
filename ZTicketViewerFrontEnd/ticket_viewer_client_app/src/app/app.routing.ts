import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListingsComponent } from './ticket-listings/ticket-listings.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';


export const routes: Routes = [
  {
    path: '', redirectTo: 'ticket-list', pathMatch: 'full'
  },
  {
    path: 'ticket-list', component: TicketListingsComponent
  },
  {
    path: 'ticket-detail', component: TicketDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
