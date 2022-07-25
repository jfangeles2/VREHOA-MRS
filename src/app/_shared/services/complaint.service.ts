import { Injectable } from '@angular/core';
import { Complaint } from '../models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirebaseApp } from '@angular/fire/compat';
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

  AddComplaint(): void {
    // CODE TEMPLATE FOR ADDING COMPLAINT. TESTED
    // // This creates a new document reference
    // var newDocRef = this.firestore.collection<Complaint>("Complaints").doc()
    // // This puts the object in the reference. newDocRef.ref.id gets the id in firestore
    // newDocRef.set({
    //   description: "Description 1",
    //   dateCreated: new Timestamp(Math.floor(Date.now() / 1000), 0),
    //   id: newDocRef.ref.id,
    //   shortDescription: "Short Desc 1",
    //   status: "Status 1",
    //   uid: "Any"
    // })
  }
}
