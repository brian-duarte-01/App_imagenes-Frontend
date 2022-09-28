import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiImgService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get('http://localhost:8080/api/img');
  }

  create(img: any) {
    return this.http.post('http://localhost:8080/api/img', img);
  }

  update(href: string, img: any) {
    return this.http.put(href, img);
  }

  delete(href: string){
    return this.http.delete(href);
  }
}
