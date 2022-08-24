import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComplaintService } from '../_shared/services/complaint.service';
import { Complaint } from '../_shared/models';
import { Subscription } from 'rxjs';
import { faPenAlt, faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewComplaintModalComponent } from './view-complaint-modal/view-complaint-modal.component';
import { AddComplaintModalComponent } from './add-complaint-modal/add-complaint-modal.component'

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit, OnDestroy {

  pencilIcon = faPenAlt
  trashIcon = faTrash
  complaints: Complaint[] = []
  complaintsSubscription: Subscription = new Subscription()

  constructor(private complaintService: ComplaintService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.complaintsSubscription = this.complaintService.getComplaints().subscribe((complaints: Complaint[]) => {
      this.complaints = complaints
      console.log(this.complaints[0].dateCreated)
      console.log(typeof(this.complaints[0].dateCreated))
    })
  }

  ngOnDestroy(): void {
    this.complaintsSubscription.unsubscribe()
  }

  viewComplaint(complaint: Complaint) {
    const modalRef = this.modalService.open(ViewComplaintModalComponent, { ariaLabelledBy: 'modal-basic-title' })

    modalRef.componentInstance.complaint = complaint
    //   .result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  openAddComplaintModal(): void {
    const modalRef = this.modalService.open(AddComplaintModalComponent, { ariaLabelledBy: 'modal-basic-title' })
  }

  fm(): void {
    alert("fm")
  }

  deleteComplaint(complaintId: string): void {
    this.complaintService.deleteComplaint(complaintId)
  }
}
