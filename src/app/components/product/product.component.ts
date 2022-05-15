import { Component, DoCheck, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ProductServiceService } from '../../services/product-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public displayLayout = 'grid';
allProducts!:Product[];
public _searchByText = '';



  constructor(public productService:ProductServiceService) { }

  ngOnInit(): void {

    localStorage.setItem("viewMode",this.displayLayout);

    this.allProducts =  this.productService.getallProduct();

    this.displayLayout = localStorage.getItem('viewMode')!;
        this.productService.layoutModeEmitter.subscribe((layoutVal:string) => {
      this.displayLayout = layoutVal;
    }) 
    this._searchByText = this.productService.getFilter();
    this.productService.searchBtTextEmmiter.subscribe((serchByVal:string) =>
    {
      this._searchByText = serchByVal;
    })
  }


  selectedproduct(product:Product){

    console.log(product.id);
  }

}
