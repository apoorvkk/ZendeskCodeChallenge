import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '../error.service';

/*
Used to display any http related errors when communicating with the REST api.
It displays a friendly message and then an error trace returned by the server.
 */
@Component({
  selector: 'app-error',
  templateUrl: './http-error.component.html'
})
export class HttpErrorComponent implements OnInit, OnDestroy {

  wantErrorTrace = false;
  errorTracePrompt = 'See Error Trace';


  constructor(private errorService: ErrorService, private router: Router) { }

  ngOnInit() {
    if (!this.errorService.message) {
      this.router.navigate(['/404']); // No error so do not show this component at all.
    }
  }

  toggleErrorTraceVisibility() {
    this.wantErrorTrace = !this.wantErrorTrace;

    if (this.wantErrorTrace) {
      this.errorTracePrompt = 'Hide Error Trace';
    } else {
      this.errorTracePrompt = 'See Error Trace';
    }
  }

  ngOnDestroy(): void {
    /*
     Once the component has been displayed, we remove the error related message from HttpErrorService. Essentially,
     we want to show the error component only when there is an error and only show it once. If there is no error message,
     we redirect the user to not found page.
     */
    this.errorService.reset();
  }


}
