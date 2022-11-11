import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/category';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  constructor(public http: HttpClient) {}
  baseurl: string = 'https://localhost:7029/api/Products/';
  CategoryId: number = 0;
  brandId: number = 0;
  baseUrl: string =
    'https://localhost:7029/api/Products/withPagination?pageNumber=1&productsPerPage=10';

  // UrlWithCategory: string =
  //   'https://localhost:7029/api/Products/withCategory?categoryId=' +
  //   this.CategoryId +
  //   '&pageNumber=2&productsPerPage=10';

  GetProductPerCategory(id: number) {
    return this.http.get<Product[]>(
      'https://localhost:7029/api/Products/withCategory?categoryId=' +
        id +
        '&pageNumber=2&productsPerPage=10'
    );
  }

  GetProductbyBrand(id: number) {
    return this.http.get<Product[]>(
      'https://localhost:7029/api/Products/withBrand?brandId=' +
        id +
        '&pageNumber=1&productsPerPage=10'
    );
  }

  GetAllPerPage() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  AddProduct() {
    return this.http.post<Product>(this.baseurl, this.products);
  }

  GetProductbyId(id: string) {
    return this.http.get<Product>(this.baseurl + id);
  }

  addproduct(cat: Product) {
    return this.http.post(this.baseurl, cat);
  }
  deleteproductbyid(id: number) {
    return this.http.delete(this.baseurl + id);
  }
  deleteproductbyname(name: string) {
    return this.http.delete(this.baseurl + name);
  }

  updategategory(pro: Product) {
    return this.http.put<Product>(this.baseurl + pro.id, pro);
  }
  updategategorybyname(pro: Product) {
    return this.http.put<Product>(this.baseurl + pro.name, pro);
  }

  getproductbyname(name: string) {
    return this.http.get<Product>(this.baseurl + name);
  }

  getAllProducts() {
    return this.http.get<Product[]>(this.baseurl);
  }
}
