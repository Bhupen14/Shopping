import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuToggle = true;
  cartItems:number=0;

  constructor(private productService:ProductServiceService) { }
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit(): void {

    this.productService.addtoCartemmiter.subscribe((myList:Product[]) =>
    {
      // this.cartItems
      this.cartItems =0;
            for(var i=0;i<myList.length;i++){
        this.cartItems += myList[i].qty; 
      }
      console.log(myList);
      console.log(this.cartItems);
    }
    )
  }

}
