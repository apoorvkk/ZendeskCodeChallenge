import { Component, Input, ElementRef, OnChanges } from '@angular/core';

/*
Used to cut down on long texts into manageable length and attaching "Read more" links.
 */
@Component({
  selector: 'read-more',
  template: `
    <div [innerHTML]="currentText">
    </div>
    <a *ngIf="!hideToggle" style="color:#22a8d8" (click)="toggleView()">Read {{isCollapsed? 'more':'less'}}</a>
  `
})
export class ReadMoreComponent implements OnChanges {
  @Input() text: string;
  @Input() maxLength = 100;
  currentText: string;

  hideToggle = true;
  isCollapsed = true;

  constructor(private elementRef: ElementRef) {}

  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }

  determineView() {

    // If text is clearly less than the max allowed, we must not show the "Read more/less" link.
    if (this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      this.hideToggle = true;
      return;
    }

    this.hideToggle = false;

    // If we need to collapse the text, make sure to shorten text and attach "...".
    if (this.isCollapsed) {
      this.currentText = this.text.substring(0, this.maxLength) + '...';
    } else {
      this.currentText = this.text;
    }

  }

  ngOnChanges() {
    this.determineView();
  }

}
