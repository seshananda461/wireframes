import { Component, OnInit } from '@angular/core';
import {MultipleorderserviceService} from './../multipleorderservice.service';
import {SingleorderserviceService} from './../singleorderservice.service';

export interface MultipleOrderJsonData{
  
}

@Component({
  selector: 'app-multipul-order',
  templateUrl: './multipul-order.component.html',
  styleUrls: ['./multipul-order.component.css']
})
export class MultipulOrderComponent implements OnInit {
  showTable: boolean = false;
multiplrorderjson: MultipleOrderJsonData;

  constructor(
    private multipleService :MultipleorderserviceService, private singleOrd : SingleorderserviceService
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    
    this.multipleService.getData().subscribe(
      (y)=>{
        this.showTable = true;
        this.multiplrorderjson=y;
        console.log(this.multiplrorderjson);
      }
    );
    this.singleOrd.getData();
  }
//   MultipleOrderJson =


//     {
//       "multipleOrderList": [{
//         "itemName": "Mobile Phone",
//         "itemDescription": "Samsung J7",
//         "itemPrice": "Rs30000",
//         "itemWithDiscount": "20% Discount",
//         "rating": "3.5 Rating"
//       },
//       {
//         "itemName": "Laptop",
//         "itemDescription": "Lenovo 12",
//         "itemPrice": "Rs 75000",
//         "itemWithDiscount": "10% Discount",
//         "rating": "4 Rating"
//       },
//       {
//         "itemName": "iPad",
//         "itemDescription": "Ipad 06zz Series",
//         "itemPrice": "100000",
//         "itemWithDiscount": "5% Discount",
//         "rating": "4.5 Rating"
//       },
//       {
//         "itemName": "Television",
//         "itemDescription": "Micromax 50 inch HD",
//         "itemPrice": "50000",
//         "itemWithDiscount": "10% Discount",
//         "rating": "4 Rating"
//       },
//       {
//         "itemName": "Bluetooth Speaker ",
//         "itemDescription": "Mi MDZ-28 Speaker",
//         "itemPrice": "Rs 1000",
//         "itemWithDiscount": "10% Discount",
//         "rating": "4.3 Rating"
//       }
//       ]
//     }

 }
