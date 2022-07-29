import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { loginForm } from '../models/loginForm.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  isLoading: boolean = false
  isAuthenticated: boolean = false

  async login(loginForm: loginForm): Promise<void> {
    this.isLoading = true
    try {
      const loginResult = await this.auth.signInWithEmailAndPassword(loginForm.email, loginForm.password)
      console.log(loginResult.user)
      this.isAuthenticated = true
      this.isLoading = false
      this.router.navigate(["/app"])
    } catch {
      alert("User not found")
      this.isAuthenticated = false
      this.isLoading = false
    }
  }

  async logout(): Promise<void> {
    this.isLoading = true
    try {
      await this.auth.signOut()
      this.isAuthenticated = false
      this.router.navigate([""])
    } catch (err) {
      console.log(err)
      alert("Something went wrong")
      this.isLoading = false
    }
  }
}
