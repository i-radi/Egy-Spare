import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  user: User = new User('', '', '', '', '', '', '');

  constructor(public ser: UserService) {}

  add() {
    this.ser
      .AddUser(
        new User(
          this.user.Name,
          this.user.UserName,
          this.user.Email,
          this.user.Password,
          this.user.ConfirmPassword,
          this.user.PhoneNumber,
          this.user.role
        )
      )
      .subscribe();
  }

  ngOnInit(): void {}
}
