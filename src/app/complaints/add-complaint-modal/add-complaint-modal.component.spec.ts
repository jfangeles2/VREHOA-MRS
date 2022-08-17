import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplaintModalComponent } from './add-complaint-modal.component';

describe('AddComplaintModalComponent', () => {
  let component: AddComplaintModalComponent;
  let fixture: ComponentFixture<AddComplaintModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComplaintModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComplaintModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
