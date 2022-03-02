import { Component, ElementRef, ViewChild} from '@angular/core';
// interface Product{
//   name:string,
//   quan:number,
//   color:string,
//   lot:number,
//   desc:string,
//   rate:number}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  // public name: string;
  // public quan: number;
  // public color: string;
  // public lot: number;
  // public desc: string;
  // public rate: number;

  @ViewChild('rate',{
    static:false
  })productRate!:ElementRef

  @ViewChild('name',{
    static:false
  })productName!:ElementRef

  @ViewChild('quan',{
    static:false
  })productQuantity!:ElementRef
  
  @ViewChild('color',{
    static:false
  })productColor!:ElementRef

  @ViewChild('lot',{
    static:false
  })productLot!:ElementRef

  @ViewChild('desc',{
    static:false
  })productDescription!:ElementRef
product=[]
temp={}
color(q){
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
  data(){
    // this.name=this.productName.nativeElement.value
    // this.quan=this.productQuantity.nativeElement.value
    // this.color=this.productColor.nativeElement.value
    // this.lot=this.productLot.nativeElement.value
    // this.desc=this.productDescription.nativeElement.value
    // this.rate=this.productRate.nativeElement.value
    
    //this.product.lot=this.productLot.nativeElement.value
    
    // this.product.name=this.productName.nativeElement.value
    // this.product.quan=this.productQuantity.nativeElement.value
    // this.product.color=this.productColor.nativeElement.value
    // this.product.desc=this.productDescription.nativeElement.value
    // this.product.rate=this.productRate.nativeElement.value

    this.temp={
      'name':this.productName.nativeElement.value,
      'quan':this.productQuantity.nativeElement.value,
      'color':this.productColor.nativeElement.value,
      'desc':this.productDescription.nativeElement.value,
      'rate':this.productRate.nativeElement.value
    }
    this.product.push(this.temp)
  }
  
}
