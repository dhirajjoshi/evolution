import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  constructor() { }
@Input()product!:{name:'',quan:'',color:'',lot:'',desc:'',rate:''}

}
