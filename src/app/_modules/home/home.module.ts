import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterModule } from '../filter/filter.module';
import { BrandListComponent } from './brand-list/brand-list.component';
import { ProductComponent } from './product/product.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewProductsComponent } from '../filter/view-products/view-products.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ProductComponent,
    BrandListComponent,
    CategoryListComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FilterModule,
    RouterModule,
  ],
  exports: [HomePageComponent, ViewProductsComponent, RouterModule],
})
export class HomeModule {}
