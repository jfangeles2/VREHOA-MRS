import { Timestamp } from "@firebase/firestore";

export type Income = {
  id: string
  description: string
  amount: number
  receiptImageURL: string
  verified: boolean
  category: string
  dateCreated: Timestamp
}