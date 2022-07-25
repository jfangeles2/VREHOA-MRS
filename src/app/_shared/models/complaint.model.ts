import { Timestamp } from "@firebase/firestore";

export type Complaint = {
  id: string
  uid: string
  shortDescription: string
  description: string
  status: string
  dateCreated: Timestamp
}