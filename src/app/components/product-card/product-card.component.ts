import { ApisService } from './../../shared/services/apis.service';
import { CartService } from './../../shared/services/cart.service';
// import { products } from './../products.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Products } from '../products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  // @Input() product: Products;
  constructor(private _rout :ActivatedRoute , private _api :ApisService) { 
  }

  ngOnInit(): void {
    this._rout.queryParams.subscribe((data) => {
      console.log(data)
      this.getProduct(data['id']);
    })
  }

  getProduct(id:string)
  {
    this._api.GET(`products/${id}`).subscribe((product)=>{
      console.log(product); 
    })
  }

}
