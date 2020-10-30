import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BlessService {

  constructor(private httpclient: HttpClient) { }

   urlp = 'http://localhost:3000/enroll';
   urlg = "/assets/data.json";
  enroll(user: User) {
    return this.httpclient.post<any>(this.urlp, user);
  }

  getblessings() {
    return this.httpclient.get<any>(this.urlg)
  }
}
