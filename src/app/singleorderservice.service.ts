import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SingleorderserviceService {

  constructor(private http:HttpClient ) {
    
   }

   configUrl = 'assets/data/data.json';

   getData(){

    return this.http.get(this.configUrl);
    
    //console.log("service")
  }
}
