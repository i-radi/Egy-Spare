import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Models/brand';
import { Product } from 'src/app/Models/product';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pro: Product[] = [];
  brand: Brand[] = [];

  constructor(
    public proser: ProductService,
    public router: Router,
    public brandser: BrandService
  ) {}

  ngOnInit() {
    this.proser.getAllProducts().subscribe((a) => {
      (this.pro = a),
        console.log(this.pro),
        this.brandser.GetAll().subscribe((b) => {
          this.brand = b;
        });
    });
  }
}
