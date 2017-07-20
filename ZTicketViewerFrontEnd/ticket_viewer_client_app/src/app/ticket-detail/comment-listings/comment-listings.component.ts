import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ErrorService } from '../../shared/error/error.service';
import { Router } from '@angular/router';

/*
 Used to fetch and display comments for a particular ticket.
 */
@Component({
  selector: 'app-comment-listings',
  templateUrl: './comment-listings.component.html',
  styleUrls: ['./comment-listings.component.css']
})
export class CommentListingsComponent implements OnInit, OnDestroy {

  comments: {}[];
  totalComments: number;
  currentPage: number;

  commentsRetrieverSub: any;
  loading: boolean;

  @Input() ticketId: number;
  constructor(private commentService: CommentService, private router: Router, private errorService: ErrorService) { }

  ngOnInit() {
      this.listComments(1);
  }

  listComments(pageNum: number) {
    if (pageNum <= 0) {
      this.errorService.message = 'Please supply a page number that is greater than 0.';
      this.router.navigate(['/client-error']);
    }

    if (this.ticketId === null || Number.isNaN(this.ticketId) || this.ticketId <= 0 || typeof this.ticketId !== 'number') {
      this.errorService.message = 'Please supply a valid ticket id (must be numerical and greater than 0).';
      this.router.navigate(['/client-error']);
    }

    this.loading = true;
    this.commentsRetrieverSub = this.commentService.listComments(pageNum, this.ticketId).subscribe(
      result => {
        const data = result.json();
        this.comments = data['comments'];
        this.totalComments = +data['count'];
        this.currentPage = pageNum;
        this.loading = false;
      },
      error => {
        if (error.headers.get('content-type', '') === 'application/json') {
          this.errorService.message = error.json();
        } else if (error.headers.get('content-type', '') === 'text/plain') {
          this.errorService.message = error._body;
        }
        this.router.navigate(['/http-error']);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.commentsRetrieverSub) {
      this.commentsRetrieverSub.unsubscribe();
    }
  }

}
