import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/_models/brand';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';
import { BrandService } from 'src/app/_services/brand.service';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  constructor(
    public productService: ProductService,
    http: HttpClient,
    public categoryService: CategoryService,
    public brandService: BrandService
  ) {}

  newProduct: Product = {
    id: '',
    name: '',
    price: 0,
    imgPath: '',
    modelNumber: '',
    manufacture: '',
    details: '',
    count: 0,
    brandId: 0,
    categoryId: 0,
  };
  products: Product[] = [];
  categories: Category[] = [];
  brands: Brand[] = [];
  dummyId: number = 0;
  dummyId2: number = 0;
  //ids: number = 0;
  save(id: any) {
    this.categoryService.getCategoryById(this.dummyId).subscribe((a) => {
      this.dummyId = a['id'];
      console.log(this.dummyId);
      this.productService
        .GetProductPerCategory(this.dummyId)
        .subscribe((prod) => {
          this.products = prod;
          console.log(this.products);
        });
    });
  }
  change(id: any) {
    //id = dummyId2;
    this.brandService.getBrandById(this.dummyId2).subscribe((res) => {
      this.dummyId2 = res['id'];
      console.log(this.dummyId2);
      this.productService.GetProductByBrand(this.dummyId2).subscribe((prod) => {
        this.products = prod;
        console.log(this.products);
      });
    });

    this.brandService.GetAll().subscribe((a) => {
      console.log(a);
    });
  }
  ngOnInit() {
    this.productService.GetAllPerPage().subscribe((a) => {
      this.products = a;
    });
    this.categoryService.GetAll().subscribe((c) => {
      this.categories = c;
      console.log(this.categories);
    });
    this.brandService.GetAll().subscribe((a) => {
      this.brands = a;
    });
  }
}