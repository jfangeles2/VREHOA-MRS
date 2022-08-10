import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Complaint } from '../../_shared/models';
import { Timestamp } from "@firebase/firestore";
import { ComplaintService } from 'src/app/_shared/services';

@Component({
  selector: 'app-view-complaint-modal',
  templateUrl: './view-complaint-modal.component.html',
  styleUrls: ['./view-complaint-modal.component.scss']
})
export class ViewComplaintModalComponent implements OnInit {
  @Input() complaint: Complaint = {
    id: "",
    dateCreated: new Timestamp(0, 0),
    description: "",
    shortDescription: "",
    status: "",
    uid: ""
  }
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
