import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '../error.service';


/*
 Used to display any client related errors locally. For instance, the component would be used if the user might
 provided an invalid ticket id.
 */
@Component({
  selector: 'app-error',
  templateUrl: './client-error.component.html'
})
export class ClientErrorComponent implements OnInit, OnDestroy {

  constructor(private errorService: ErrorService, private router: Router) { }

  ngOnInit() {
    if (!this.errorService.message) { // No error so do not show this component at all.
      this.router.navigate(['/404']);
    }
  }

  ngOnDestroy(): void {
    /*
     Once the component has been displayed and about to be destroyed, we remove the error related message from
     ErrorService. Essentially, we want to show the error component only when there is an error and only show it
     once. If there is no error message, we redirect the user to not found page.
     */
    this.errorService.reset();
  }


}
