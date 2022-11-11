import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductsComponent } from './view-products/view-products.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ViewProductsComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [ViewProductsComponent],
})
export class FilterModule {}
