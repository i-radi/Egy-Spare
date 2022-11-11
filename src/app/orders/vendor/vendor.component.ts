import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/Models/brand';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
})
export class VendorComponent implements OnInit {
  url = './assets/';

  MyImage: string = 'assets/Img/2773355.png';
  MyImage1: string = 'assets/Img/1.webp';
  Catg: Category[] = [];
  Brands: Brand[] = [];
  product: Product[] = [];
  message: boolean = false;
  @Output() NewPro: any = [];

  constructor(public VendorService: VendorService, public http: HttpClient) {}

  OnProductCreate(product: Product) {
    console.log(product);
    this.VendorService.AddProduct(product).subscribe((result) => {
      console.log(result);
      this.message = true;
    });
  }

  GetAllCategory() {
    this.VendorService.getAllCategory().subscribe((res) => {
      console.log(res);
      this.Catg = res;
    });
  }

  GetAllBrand() {
    this.VendorService.getAllBrand().subscribe((res) => {
      console.log(res);
      this.Brands = res;
    });
  }

  ngOnInit() {}
}
