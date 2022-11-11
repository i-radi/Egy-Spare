import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [LoginComponent, SingupComponent, SettingComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [LoginComponent, SingupComponent],
})
export class UserModule {}
