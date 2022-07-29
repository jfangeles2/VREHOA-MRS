import { Component, OnInit } from '@angular/core';
import { Route } from '../_shared/models';
import { AuthService } from '../_shared/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  routes: Route[] = [
    {
      icon: "",
      link: "/app",
      pageName: "Dashboard"
    },
    {
      icon: "",
      link: "/app/complaints",
      pageName: "Complaints"
    },
    {
      icon: "",
      link: "/app/expenses",
      pageName: "Expenses"
    },
    {
      icon: "",
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
