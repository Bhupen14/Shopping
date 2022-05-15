import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/products';
import { ProductServiceService } from '../../../services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product!:any;
  constructor(private productService:ProductServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']);
    // const myProd = 
    this.product = this.productService.getProductById(this.route.snapshot.params['id']);
    // console.log(myProd);
  }
addToCart(){
  this.productService.addToCart(this.product, 1);

}
}
