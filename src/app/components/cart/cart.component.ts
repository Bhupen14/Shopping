import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @Input() product!: Product;

  myCart:Product[]=[];
  
  constructor(private productService:ProductServiceService) { 

  }


  ngOnInit(): void {
    this.myCart = this.productService.getmycartList();
    // this.productService.myCartListEmmiter.subscribe(cartItem => {
    //   this.myCart = cartItem;
      console.log(this.myCart);
    // })

  }
  addQty(item:any)
  {
    if(item.qty < 11){
      
      console.log(item);
  }
  }

  subQty(item:any){
    if(item.qty > 1 ){
console.log(item)
    }
  }

}
