import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../Models/brand';
import { Category } from '../Models/category';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  public category: any[] = [];
  public brand: any[] = [];
  public product: Product[] = [];
  CategoryUrl: string = 'https://localhost:7029/api/Categories';
  BrandUrl: string = 'https://localhost:7029/api/Brands';
  PostProductUrl: string = 'https://localhost:7029/api/Products';
  constructor(public http: HttpClient) {}

  getAllCategory() {
    return this.http.get<any[]>(this.CategoryUrl);
  }

  getAllBrand() {
    return this.http.get<any[]>(this.BrandUrl);
  }

  AddProduct(product: Product) {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJWZW5kb3IiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ2ZW5kb3IxQG1haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Im1vbmEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijg0YjRmMTYwLTRjMmMtNDNlNy1hZTUwLTA4ZGFjMWQ1NWVhMyIsImV4cCI6MTY3MTk4Mzk3NiwiaXNzIjoiU2VjdXJlQXBpIiwiYXVkIjoiU2VjdXJlQXBpVXNlciJ9.WDIZBp9JBnjMuMVyouNeZKIPmqw0ZR9O4ZFmwj8H2uw';
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post<Product>(this.PostProductUrl, product, {
      headers: headers_object,
    });
  }
}
