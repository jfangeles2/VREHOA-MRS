import { Component, OnInit } from '@angular/core';
import { faHome, faFistRaised, faBriefcase, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Route } from '../_shared/models';
import { AuthService } from '../_shared/services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  routes: Route[] = [
    {
      icon: faHome,
      link: "/app",
      pageName: "Dashboard"
    },
    {
      icon: faFistRaised,
      link: "/app/complaints",
      pageName: "Complaints"
    },
    {
      icon: faBriefcase,
      link: "/app/expenses",
      pageName: "Expenses"
    },
    {
      icon: faMoneyBill,
      link: "/app/income",
      pageName: "Income"
    },
  ]
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authservice.logout()
  }
}
