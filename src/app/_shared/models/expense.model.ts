import { Timestamp } from "@firebase/firestore";

export type Expense = {
  id: string
  description: string
  amount: number
  receiptImageURL: string
  verified: boolean
  category: string
  dateCreated: Timestamp
}