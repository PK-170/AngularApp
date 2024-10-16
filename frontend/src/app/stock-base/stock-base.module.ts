import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StockListComponent
  ],
  exports: [
    StockListComponent
  ]
})
export class StockBaseModule { }
