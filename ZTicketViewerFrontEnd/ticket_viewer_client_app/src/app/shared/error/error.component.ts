import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit, OnDestroy {

  generalMessage: string;
  wantErrorTrace = false;
  errorTracePrompt = 'See Error Trace';


  constructor(private errorService: ErrorService, private router: Router) { }

  ngOnInit() {
    if (!this.errorService.message) {
      this.router.navigate(['/404']);
    }

    this.generalMessage = 'We seem to be having internal server issues. Please try again later.';
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
    this.errorService.reset();
  }


}
