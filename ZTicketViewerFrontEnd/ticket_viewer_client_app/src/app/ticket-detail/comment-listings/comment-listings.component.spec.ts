import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListingsComponent } from './comment-listings.component';

describe('CommentListingsComponent', () => {
  let component: CommentListingsComponent;
  let fixture: ComponentFixture<CommentListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
