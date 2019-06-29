import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ReportsserviceService {

  constructor() { }
  getData(){
    console.log("Reportservice")
  }
}
