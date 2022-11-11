import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, SettingComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [LoginComponent, SignupComponent],
})
export class UserModule {}
