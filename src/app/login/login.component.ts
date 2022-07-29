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
  isLoading: boolean = false

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.isLoading = this.authservice.isLoading
  }

  login(): void {
    this.authservice.login(this.loginForm)
  }

  isAuthenticated(): boolean {
    return this.authservice.isAuthenticated
  }
}
