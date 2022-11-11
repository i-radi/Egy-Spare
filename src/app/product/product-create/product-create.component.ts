import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Models/brand';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { BrandService } from 'src/app/services/brand.service';
import { CetegoryService } from 'src/app/services/cetegory.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  npro: Product = {
    id: '',
    name: '',
    brandId: 0,
    categoryId: 0,
    imgPath: '',
    price: 0,
    manufacture: '',
    modelNumber: '',
    details: '',
    count: 0,
  };

  nbrand: Brand[] = [];
  ncat: Category[] = [];

  constructor(
    public catser: CetegoryService,
    public brandser: BrandService,
    public proser: ProductService,
    public router: Router
  ) {}

  save() {
    this.proser.addproduct(this.npro).subscribe((a) => {
      console.log(a), this.router.navigateByUrl('/admin/product/list');
    });
  }

  back() {
    this.router.navigateByUrl('/admin/product/list');
  }

  onselectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.npro.imgPath = event.target.result;
      };
    }
  }

  ngOnInit() {
    this.brandser.GetAll().subscribe((b) => {
      (this.nbrand = b),
        this.catser.GetAll().subscribe((c) => {
          this.ncat = c;
        });
    });
  }
}
