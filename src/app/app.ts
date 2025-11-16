import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private router = inject(Router);
  protected title = 'enquiry_app_angular20';
  protected isLoggedIn = false;
  protected username = '';

  ngOnInit() {
    this.checkLogin();
  }

  constructor() {
    this.checkLogin();
    window.addEventListener('storage', () => this.checkLogin());
  }

  protected checkLogin() {
    const user = localStorage.getItem('enquiryApp');
    if (user) {
      this.isLoggedIn = true;
      this.username = user;
    } else {
      this.isLoggedIn = false;
      this.username = '';
    }
  }

  protected logout() {
    localStorage.removeItem('enquiryApp');
    this.isLoggedIn = false;
    this.username = '';
    this.router.navigate(['/login']);
  }
}
