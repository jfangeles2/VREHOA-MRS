import { Component, OnInit } from '@angular/core';
import { Expense } from '../_shared/models';
import { Timestamp } from '@firebase/firestore';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  texpense: Expense = {
    description: "DepEd Laptop",
    amount: 65000,
    category: "Technology",
    dateCreated: new Timestamp(0, 0),
    id: "JS83JD71LD80",
    receiptImageURL: "asdf",
    verified: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  placeholder(): void {
    console.log("works")
  }

}
