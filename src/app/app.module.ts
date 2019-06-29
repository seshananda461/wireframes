import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleOrderComponent } from './single-order/single-order.component';
import { MultipulOrderComponent } from './multipul-order/multipul-order.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { ReportsComponent } from './reports/reports.component';
import { SingleorderserviceService } from './singleorderservice.service';
import {MultipleorderserviceService} from './multipleorderservice.service';
import {ReportsserviceService} from './reportsservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SingleOrderComponent,
    MultipulOrderComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    NgDatepickerModule,    
    HttpClientModule
  ],
  providers: [SingleorderserviceService,
    MultipleorderserviceService,
    ReportsserviceService
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
