import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Complaint, InitComplaint } from '../../_shared/models';
import { ComplaintService } from 'src/app/_shared/services';

@Component({
  selector: 'app-view-complaint-modal',
  templateUrl: './view-complaint-modal.component.html',
  styleUrls: ['./view-complaint-modal.component.scss']
})
export class ViewComplaintModalComponent implements OnInit {
  complaint: Complaint = InitComplaint()
  constructor(private modalService: NgbModal, private complaintsService: ComplaintService) { }

  ngOnInit(): void {
  }

  changeStatus(status: string) {
    if (status != this.complaint.status) {
      this.complaintsService.changeStatus(this.complaint.id, status)
      alert("Complaint marked as " + status)
      this.modalService.dismissAll()
    }
  }

}
