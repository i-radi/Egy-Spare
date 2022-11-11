import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterModule } from '../filter/filter.module';
import { ViewProductsComponent } from '../filter/view-products/view-products.component';
import { HomePageComponent } from './home-page/home-page.component';
@NgModule({
  declarations: [
    ProductListComponent,
    BrandListComponent,
    CategoryListComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, FilterModule],
  exports: [HomePageComponent, ViewProductsComponent],
})
export class HomeModule {}
