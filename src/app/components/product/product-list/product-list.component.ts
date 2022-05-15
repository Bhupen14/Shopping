import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/products';
import { ProductServiceService } from '../../../services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() product!: Product;
  qtyerrMsg: boolean = false;
  qty: number = 1;
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

  addtoCart(product: Product) {
    if (this.qty < 1) { this.qtyerrMsg = true; return; }
    this.productService.addToCart(product, this.qty);
    this.qtyerrMsg = false;
  }
  addQty() {
    this.qty++;
  }
  subQty() {
    if (this.qty < 1) {
      this.qtyerrMsg = true;
      return;
    }
    this.qty--;
    this.qtyerrMsg = false;
  }
}
