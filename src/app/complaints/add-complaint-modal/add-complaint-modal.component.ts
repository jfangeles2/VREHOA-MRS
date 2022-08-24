import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComplaintService } from 'src/app/_shared/services';
import { Complaint } from 'src/app/_shared/models';
import { Timestamp } from '@angular/fire/firestore'

@Component({
  selector: 'app-add-complaint-modal',
  templateUrl: './add-complaint-modal.component.html',
  styleUrls: ['./add-complaint-modal.component.scss']
})
export class AddComplaintModalComponent implements OnInit {

  @Output() addComplaintEvent: EventEmitter<Complaint> = new EventEmitter<Complaint>()

  complaint: Complaint;
  isLoading: boolean;
  
  constructor(private complaintService: ComplaintService) {
    this.complaint = {
      dateCreated: new Timestamp(0, 0),
      shortDescription: "",
      description: "",
      id: "",
      status: "Ongoing",
      uid: "TODO"
    }
    this.isLoading = false;
   }

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
  }
}
