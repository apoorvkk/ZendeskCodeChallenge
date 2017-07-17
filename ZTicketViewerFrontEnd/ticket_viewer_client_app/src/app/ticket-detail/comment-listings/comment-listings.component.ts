import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommentService} from "./comment.service";

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
  constructor(private commentService: CommentService) { }

  ngOnInit() {
      this.listComments(1);
  }

  public listComments(pageNum: number) {
    this.loading = true;
    this.commentsRetrieverSub = this.commentService.listComments(pageNum, this.ticketId).subscribe(
      result => {
        const data = result.json();
        this.comments = data['comments'];
        console.log(this.comments);
        this.totalComments = +data['count'];
        this.currentPage = pageNum;
        this.loading = false;
      },
      error => {
        console.log(error); // DO EXCEPTION HANDLING.
      }
    );
  }

  ngOnDestroy(): void {
    if (this.commentsRetrieverSub) {
      this.commentsRetrieverSub.unsubscribe();
    }
  }

}
