import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { UserLog } from '../Models/user-log';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  AddUser(ur: User) {
    return this.http.post('https://localhost:7029/api/Users/register', ur);
  }
  login(ur: UserLog) {
    return this.http.post('https://localhost:7029/api/Users/login', ur);
  }

  //   getallusers(){
  //     let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQG1haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFsaSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiOTk5MjM4ZGMtMTM5My00ZDY3LWFlNGYtMDhkYWMxZDU1ZWEzIiwiZXhwIjoxNjcxOTg4OTc1LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.IFgqwY_5EEpqN32sJ-9EPixCNFtUzqEA9Sf7IgCysAo"
  //     let headers_object = new HttpHeaders().set("Authorization","Bearer "+token);
  //     return this.http.get<Users[]>(this.baseurl,{headers:headers_object})
  //   }

  //   getusersbyrole(role:any){
  //     return this.http.get<Users[]>(this.baseurl+role)
  //   }

  //  adduser(user:Users){
  //   return this.http.post(this.baseurl,user)
  //  }

  //  updateusers(user:Users){
  //   return this.http.put<Users>(this.baseurl+user.name,user)
  //  }
}
