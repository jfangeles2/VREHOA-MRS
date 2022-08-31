import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComplaintService } from 'src/app/_shared/services';
import { Complaint, InitComplaint } from 'src/app/_shared/models';
import { Timestamp } from '@angular/fire/firestore'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-complaint-modal',
  templateUrl: './add-complaint-modal.component.html',
  styleUrls: ['./add-complaint-modal.component.scss']
})
export class AddComplaintModalComponent implements OnInit {

  @Output() addComplaintEvent: EventEmitter<Complaint> = new EventEmitter<Complaint>()

  complaint: Complaint = InitComplaint();
  isLoading: boolean = false;
  
  constructor(private complaintService: ComplaintService, private modalService: NgbModal) { }

  ngOnInit(): void { }

  addComplaint(): void {
    // method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
    const currentDateSeconds = Date.now()
    // Timestamp needs seconds. Not milliseconds
    this.complaint.dateCreated = new Timestamp(currentDateSeconds / 1000, 0)
    console.table(this.complaint)
    // TODO user id After user auth
    // The ID will be set in the complaintsService
    this.complaintService.addComplaint(this.complaint)
    this.modalService.dismissAll()
  }
}
