import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Validates if localstorage token exists
    if (!!localStorage.getItem('token')) {
      this.router.navigate(['auth'])
    }
  }
  login(): void {
    this.authService.authorize();
  }
}
