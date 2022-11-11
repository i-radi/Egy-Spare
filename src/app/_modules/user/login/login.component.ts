import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'src/app/_models/login-dto';
import { TokenDto } from 'src/app/_models/token';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: LoginDto = {
    email: '',
    password: '',
  };

  constructor(public service: AuthenticationService) {}

  login() {
    this.service.login(this.user)
    .subscribe((response: TokenDto) => {
      console.log(response);
      localStorage.setItem('token', response.token);
    });
  }

  ngOnInit(): void {}
}
