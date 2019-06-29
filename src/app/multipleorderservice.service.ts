import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MultipleorderserviceService {

  constructor(private http:HttpClient) { }

  configUrl = 'assets/data/MultipleOrder.json';
 
  getData(){
    return this.http.get(this.configUrl)
    //console.log("Multipleservice")
  }
}
