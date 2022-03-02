import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  n :string=''
  constructor() { }

  ngOnInit() {
  }
  
 data(data){
   for (let i = 0; i < data.length; i++) {
    this.n=data[1];
    console.log(this.n);
   }
   this.n=data;
   console.log(this.n);
   
 } 
  
}
