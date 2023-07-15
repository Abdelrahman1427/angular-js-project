import { ApisService } from './../../shared/services/apis.service';
import { Products } from './../products.model';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  constructor(private _cartService: CartService, private _apis: ApisService) { }
  ngOnInit(): void {
this.getProductList();
  }
  
  products: any =[];
  getProductList(){
    this._apis.GET(`products`).subscribe((data)=>{
      console.log(data);
      this.products =data
    });
  }
  count: number =0 ;

  addToCart(){
    this._cartService.increaseCount(++this.count)
    
  }
  
}


  


