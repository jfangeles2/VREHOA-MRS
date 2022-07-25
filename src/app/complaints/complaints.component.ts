import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComplaintService } from '../_shared/services/complaint.service';
import { Complaint } from '../_shared/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit, OnDestroy {

  complaints: Complaint[] = []
  complaintsSubscription: Subscription = new Subscription()

  constructor(private complaintService: ComplaintService) { }

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

  addComplaint(): void {
    this.complaintService.AddComplaint()
  }
}
