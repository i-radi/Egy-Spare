import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCardService {
  public products: any[] = [];
  baseUrl: string = 'https://localhost:7029/api/ShoppingCarts/';
  constructor(public http: HttpClient) {}

  // getProduct() {
  //   return this.http.get<any[]>(this.baseUrl);
  // }

  GetProductbyId(id: string) {
    return this.http.get<Product>(this.baseUrl + id);
  }

  // removeproduct(id: string) {
  //   return this.http.delete(this.baseUrl + id);
  // }

  getProduct() {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDbGllbnQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJjbGllbnQxQG1haWwuY29tICIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJtYWhhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI4NTUxYTA3Yi1lZDA5LTQzYmQtYWU1Mi0wOGRhYzFkNTVlYTMiLCJleHAiOjE2NzE5ODA2NDMsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.RzuxY8q5Ni39hD3IjYDYd7w8GbmA5PdUqjj5YSfVA9c';
    let headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get<any[]>(this.baseUrl, { headers: headers_object });
  }

  removeproduct(id: string) {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDbGllbnQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJjbGllbnQxQG1haWwuY29tICIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJtYWhhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI4NTUxYTA3Yi1lZDA5LTQzYmQtYWU1Mi0wOGRhYzFkNTVlYTMiLCJleHAiOjE2NzE5NjQwMDYsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.nhX-hudcn_KYFTkQVD5yYh0rjdk5wTu1mJ3jocNtCe4';
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.delete<any[]>(
      'https://localhost:7029/api/ShoppingCarts/' + id,
      { headers: headers_object }
    );
  }

  DeincremrntNo(id: string) {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDbGllbnQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJjbGllbnQxQG1haWwuY29tICIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJtYWhhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI4NTUxYTA3Yi1lZDA5LTQzYmQtYWU1Mi0wOGRhYzFkNTVlYTMiLCJleHAiOjE2NzE5NjQwMDYsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.nhX-hudcn_KYFTkQVD5yYh0rjdk5wTu1mJ3jocNtCe4';
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.put<any>(
      'https://localhost:7029/api/ShoppingCarts/DecrementCount/' + id,
      null,
      { headers: headers_object }
    );
  }

  incremrntNo(id: string) {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDbGllbnQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJjbGllbnQxQG1haWwuY29tICIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJtYWhhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI4NTUxYTA3Yi1lZDA5LTQzYmQtYWU1Mi0wOGRhYzFkNTVlYTMiLCJleHAiOjE2NzE5NjQwMDYsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.nhX-hudcn_KYFTkQVD5yYh0rjdk5wTu1mJ3jocNtCe4';
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.put<any>(
      'https://localhost:7029/api/ShoppingCarts/IncrementCount/' + id,
      null,
      { headers: headers_object }
    );
  }
}
