import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListingsComponent } from './ticket-listings.component';

describe('TicketListingsComponent', () => {
  let component: TicketListingsComponent;
  let fixture: ComponentFixture<TicketListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
