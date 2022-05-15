import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  layoutMode ='grid' ;
@ViewChild('searchText') searchbyText! : ElementRef<any>;

  constructor(public productService:ProductServiceService) { }

  ngOnInit(): void {
    this.layoutMode = localStorage.getItem('viewMode')!;
  }

  setLayout(viewmode:string){
    localStorage.setItem("viewMode",viewmode);
    this.layoutMode = viewmode;
    this.productService.setProductDisplayLayout(viewmode);
  }

  // searchFilter(val:any){
  //     console.log(val.key);
  // }

  searchFilter(){
    this.productService.setFilter(this.searchbyText.nativeElement.value);
    // console.log(this.searchbyText.nativeElement.value);
  }

}
