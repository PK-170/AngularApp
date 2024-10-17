import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { UserServiceService } from '../services/user-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StockListComponent,
    StockDetailComponent,
    HttpClientModule
  ],
  exports: [
    StockListComponent,
    StockDetailComponent
  ],
  providers: [
    UserServiceService
  ]
})
export class StockBaseModule { }
