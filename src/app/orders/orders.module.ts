import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { VendorComponent } from './vendor/vendor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingCardComponent, VendorComponent],
  imports: [CommonModule, FormsModule],
  exports: [ShoppingCardComponent, VendorComponent],
})
export class OrdersModule {}
