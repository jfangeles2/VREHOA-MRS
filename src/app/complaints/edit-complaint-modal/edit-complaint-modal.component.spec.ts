import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComplaintModalComponent } from './edit-complaint-modal.component';

describe('EditComplaintModalComponent', () => {
  let component: EditComplaintModalComponent;
  let fixture: ComponentFixture<EditComplaintModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComplaintModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComplaintModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
