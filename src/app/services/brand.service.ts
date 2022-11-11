import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../Models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private Brands: Brand[] = [];
  baseUrl: string = 'https://localhost:7029/api/Brands/';
  constructor(public http: HttpClient) {}

  GetAll() {
    return this.http.get<Brand[]>(this.baseUrl);
  }

  getBrandById(id: number) {
    return this.http.get<Brand>(this.baseUrl + id);
  }

  addbrand(brand: Brand) {
    return this.http.post(this.baseUrl, brand);
  }

  //  deletecategorybyname(name:string){
  //   return this.http.delete(this.baseurl+name)
  //  }
  deletebrandbyid(id: number) {
    return this.http.delete(this.baseUrl + id);
  }

  updatebrand(brand: Brand) {
    return this.http.put<Brand>(this.baseUrl + brand.id, brand);
  }
}
