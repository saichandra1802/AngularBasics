import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private apiurl = "http://jsonplaceholder.typicode.co.in/u1sers";

constructor(private http: HttpClient) {



 }
 getData() {
  return this.http.get(this.apiurl);

  //sd
}
}
