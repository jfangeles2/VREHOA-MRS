import { Injectable } from '@angular/core';
import { Complaint } from '../models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Timestamp } from '@firebase/firestore';

@Injectable({
  // Line below means service is available for whole app
  providedIn: 'root'
})
export class ComplaintService {
  constructor(private firestore: AngularFirestore) { }

  getComplaints(): Observable<Complaint[]> {
    return this.firestore.collection<Complaint>("Complaints").valueChanges()
  }

  addComplaint(complaint: Complaint): void {
    // CODE TEMPLATE FOR ADDING COMPLAINT. TESTED
    // This creates a new document reference to get a UID in firebase
    var newDocRef = this.firestore.collection<Complaint>("Complaints").doc()
    // This assigns the UID in firebase to the ID field of the complaint
    complaint.id = newDocRef.ref.id
    newDocRef.set(complaint)
  }

  changeStatus(complaintId: string, desiredStatus: string): void {
  this.firestore
    .collection('Complaints')
    .doc(complaintId)
    .update({status: desiredStatus})
    .then(() => {
      console.log('done');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
  }

  deleteComplaint(complaintId: string): void {
    this.firestore
      .collection('Complaints')
      .doc(complaintId)
      .delete()
      .then(() => {
        console.log("Complaint with ID " + complaintId + " is deleted.")
        alert("Complaint with ID " + complaintId + " is deleted.")
      })
      .catch((error) => {
        console.error("Error deleting document: ", error)
        alert("Something went wrong.")
      })
  }
}
