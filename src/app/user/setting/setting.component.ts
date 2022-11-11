import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  set: any = {} as Setting;
  constructor(public ser: UserService) {}

  ngOnInit(): void {}
  change() {
    this.ser.changeSetting(this.set).subscribe();
  }
}
