import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ListingComponent } from './product/listing/listing.component';



@NgModule({
  declarations: [ProductComponent, ListingComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductComponent,ListingComponent]
})
export class ProductModule { }
