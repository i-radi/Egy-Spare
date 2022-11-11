import { Component, OnInit } from '@angular/core';
import { UserLog } from 'src/app/Models/user-log';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  uslg: UserLog = new UserLog('', '');
  constructor(public ser: UserService) {}

  login() {
    this.ser
      .login(new UserLog(this.uslg.email, this.uslg.password))
      .subscribe();
  }

  ngOnInit(): void {}
}
