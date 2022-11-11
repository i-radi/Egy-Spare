import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/Models/brand';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { BrandService } from 'src/app/services/brand.service';
import { CetegoryService } from 'src/app/services/cetegory.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public frontImg: string =
    'assets/car/close-up-beautiful-rim-dark-blue-background-3d-illustration.jpg';
  brand: Brand[] = [];
  Products: Product[] = [];
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
  Cetegories: Category[] = [];

  constructor(
    public http: HttpClient,
    public brandService: BrandService,
    public ProductSerivces: ProductService,
    public ActiveRouter: ActivatedRoute,
    public categorySerivces: CetegoryService
  ) {}

  addProduct(prod: Product) {
    this.ProductSerivces.AddProduct().subscribe((p) => {
      console.log(prod);
      console.log(p);
    });
  }
  ngOnInit() {
    this.brandService.GetAll().subscribe((a) => {
      this.brand = a;
      console.log(this.brand);
    });
    this.categorySerivces.GetAll().subscribe((a) => {
      this.Cetegories = a;
      console.log(this.Cetegories);
    });

    return this.ProductSerivces.GetAllPerPage().subscribe((a) => {
      this.Products = a;
      console.log(this.Products);
    });
  }
}
