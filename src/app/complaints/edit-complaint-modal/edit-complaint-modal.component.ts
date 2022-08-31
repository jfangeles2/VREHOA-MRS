import { Component, OnInit } from '@angular/core';
import { Complaint, InitComplaint } from 'src/app/_shared/models';
import { ComplaintService } from 'src/app/_shared/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-complaint-modal',
  templateUrl: './edit-complaint-modal.component.html',
  styleUrls: ['./edit-complaint-modal.component.scss']
})
export class EditComplaintModalComponent implements OnInit {

  shortDescription: string = "";
  description: string = "";
  complaint: Complaint = InitComplaint();
  constructor(private complaintService: ComplaintService, private modalSerice: NgbModal) { }

  ngOnInit(): void {
    this.shortDescription = this.complaint.shortDescription;
    this.description = this.complaint.description;
  }

  saveComplaint(): void {
    if (this.shortDescription != this.complaint.shortDescription || this.description != this.complaint.description) {
      this.complaint.shortDescription = this.shortDescription
      this.complaint.description = this.description
      this.complaintService.editComplaint(this.complaint)
      alert("Changes to Complaint are saved")
      this.modalSerice.dismissAll();
    }
  }

}
