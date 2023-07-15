import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  increaseCount(arg0: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  // baseURL:string = environment.baseURL;
  baseURL:string = 'https://fakestoreapi.com/';

  GET(url: string) {
    return this.http.get(this.baseURL+url, {
      headers:{
        'accept-language':'en',
        authorization: 'TOKEN',
      }
    });
  }

  post(url: string, data: any){
    return this.http.post(this.baseURL + url, data);
  }

  DELETE(url: string, data: any){
    return this.http.delete(this.baseURL + url, data);
  }

  PUT(url: string, data: any){
    return this.http.put(this.baseURL + url, data);
  }
}
