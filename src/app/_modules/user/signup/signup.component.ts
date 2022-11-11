import { Component, OnInit } from '@angular/core';
import { RegisterDto } from 'src/app/_models/register-dto';
import { TokenDto } from 'src/app/_models/token';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: RegisterDto = {
    userName: '',
    email: '',
    name: '',
    password: '',
    phoneNumber: '',
    role: '',
  };

  constructor(public service: AuthenticationService) {}

  createAccount() {
    this.service.register(this.user).subscribe((response: TokenDto) => {
      console.log(response);
      localStorage.setItem('token', response.token);
    });
  }

  ngOnInit(): void {}
}
