import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplaintModalComponent } from './view-complaint-modal.component';

describe('ViewComplaintModalComponent', () => {
  let component: ViewComplaintModalComponent;
  let fixture: ComponentFixture<ViewComplaintModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComplaintModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComplaintModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
