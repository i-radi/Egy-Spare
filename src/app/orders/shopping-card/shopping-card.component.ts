import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ShoppingCardService } from 'src/app/services/shopping-card.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
})
export class ShoppingCardComponent implements OnInit {
  img: string = 'assets/Img/1.webp';
  //products: Product[] = [];
  thetotal: number = 0;
  public products: any[] = [];
  dummyId: string = '';
  No: number = 0;
  product: Product = {
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
  constructor(public Cartservice: ShoppingCardService) {}

  GetCartItem() {
    this.Cartservice.getProduct().subscribe((res) => {
      console.log(res);
      this.products = res;
      this.getcarttotal('+');
    });
  }

  DeleteItem(id: string) {
    if (confirm('Are You Sure') == true) {
      this.Cartservice.removeproduct(id).subscribe((Delete) => {
        this.GetCartItem();
      });
    }
  }

  Mins(id: string) {
    console.log(id);
    this.Cartservice.DeincremrntNo(id).subscribe((m) => {
      this.GetCartItem();
      this.getcarttotal('-');
    });
  }

  plus(id: string) {
    console.log(id);
    this.Cartservice.incremrntNo(id).subscribe((P) => {
      this.GetCartItem();
      this.getcarttotal('+');
    });
  }

  getcarttotal(operator: string) {
    this.thetotal = 0;
    this.products.forEach((element) => {
      if (operator == '-') this.thetotal -= element.price * element.count;
      else this.thetotal += element.price * element.count;
    });
  }

  ngOnInit() {
    this.GetCartItem();
  }
}
