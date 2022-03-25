import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  constructor() { }
@Input()product=[]

col(q){
  if(q==0){
    return {'background-color':'#ff0000','color':'#FFFFFF'}
  }
  else if(q>0 && q<50){
    return {'background-color':'#ffA500','color':'#FFFFFF'}
  }
  else if(q>50){
    return {'background-color':'#228b22','color':'#FFFFFF'}
  }
}
}
