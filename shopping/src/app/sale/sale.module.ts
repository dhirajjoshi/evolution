import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoldComponent } from './sold/sold.component';



@NgModule({
  declarations: [SoldComponent],
  imports: [
    CommonModule
  ],
  exports:[SoldComponent]
})
export class SaleModule { }
