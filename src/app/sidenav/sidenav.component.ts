import { Component, OnInit } from '@angular/core';
import { Route } from '../_shared/models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  routes: Route[] = [
    {
      icon: "",
      link: "",
      pageName: "Dashboard"
    },
    {
      icon: "",
      link: "/complaints",
      pageName: "Complaints"
    },
    {
      icon: "",
      link: "",
      pageName: "Expenses"
    },
    {
      icon: "",
      link: "",
      pageName: "Income"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
