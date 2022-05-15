import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../../../models/products';
import { ProductServiceService } from '../../../services/product-service.service';


@Component({
  selector: 'app-product-column',
  templateUrl: './product-column.component.html',
  styleUrls: ['./product-column.component.css']
})


export class ProductColumnComponent implements OnInit {
  @Input() product!: Product;
  qtyerrMsg:boolean = false;
  constructor(private productService: ProductServiceService) { }
  o_qty: number = 1;
  ngOnInit(): void {
    // console.log(this.product);
  }

  addtoCart(product: Product) {
    if (this.o_qty < 1) { this.qtyerrMsg=true;return;}
      this.productService.addToCart(product, this.o_qty);
      this.qtyerrMsg=false;
      // console.log(product);
    
  }

  addQty() {
    if (this.o_qty < 99) {
      this.o_qty++;
    }
  }

  subQty() {
    if (this.o_qty > 0) {
      this.o_qty--;
      this.qtyerrMsg=false;
    }
    else{this.qtyerrMsg=true;}
  }


}
