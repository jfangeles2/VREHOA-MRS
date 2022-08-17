import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/_shared/services';
import { Complaint } from 'src/app/_shared/models';
import { Timestamp } from '@angular/fire/firestore'

@Component({
  selector: 'app-add-complaint-modal',
  templateUrl: './add-complaint-modal.component.html',
  styleUrls: ['./add-complaint-modal.component.scss']
})
export class AddComplaintModalComponent implements OnInit {

  fc: Complaint = {
    dateCreated: new Timestamp(0, 0),
    description: "",
    id: "",
    shortDescription: "",
    status: "Ongoing",
    uid: ""
  }
  isLoading: boolean = false;
  
  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
  }

  addComplaint(complaint: Complaint): void {
    this.complaintService.AddComplaint(complaint)
  }

  fm(): void {
    const currentDateSeconds = Date.now()
    this.fc.dateCreated = new Timestamp(currentDateSeconds /1000, 0)
  }

}
