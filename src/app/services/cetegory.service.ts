import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root',
})
export class CetegoryService {
  private Categories: Category[] = [];

  baseUrl: string = 'https://localhost:7029/api/Categories';
  constructor(public http: HttpClient) {}

  GetAll() {
    return this.http.get<Category[]>(this.baseUrl);
  }

  CategoryIdUrl: string = 'https://localhost:7029/api/Categories/';

  GetCaetgoryId(id: number) {
    return this.http.get<Category>(this.CategoryIdUrl + id);
  }

  addcategory(cat: Category) {
    return this.http.post(this.baseUrl, cat);
  }

  //  deletecategorybyname(name:string){
  //   return this.http.delete(this.baseurl+name)
  //  }
  deletecategorybyid(id: number) {
    return this.http.delete(this.baseUrl + id);
  }

  updategategory(cat: Category) {
    return this.http.put<Category>(this.baseUrl + cat.id, cat);
  }
}
