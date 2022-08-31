import { Timestamp } from "@firebase/firestore";

export type Complaint = {
  id: string
  uid: string
  shortDescription: string
  description: string
  status: string
  dateCreated: Timestamp
}

export function InitComplaint(): Complaint {
  var complaint: Complaint = {
    id: "",
    uid: "TODO",
    shortDescription: "",
    description: "",
    status: "Ongoing",
    dateCreated: new Timestamp(0, 0)
  }
  return complaint;
}