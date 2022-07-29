import { Component, OnInit } from '@angular/core';
import { loginForm } from '../_shared/models/loginForm.model';
import { AuthService } from '../_shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: loginForm = {
    email: "",
    password: ""
  }

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authservice.login(this.loginForm)
  }

  isLoading(): boolean {
    return this.authservice.isLoading
  }

  isAuthenticated(): boolean {
    return this.authservice.isAuthenticated
  }
}
