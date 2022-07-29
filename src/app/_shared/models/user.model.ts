import { Timestamp } from "@angular/fire/firestore";

export type User = {
  id: string
  name: string
  role: string
  verified: boolean
  username: string
  idImageUrl: string
  dateCreated: Timestamp
}