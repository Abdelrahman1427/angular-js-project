import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _cartService: CartService) { }

  counter: number ;

  ngOnInit(): void {
  this._cartService.currentCount.subscribe((value) =>{
    this.counter =  value;
    console.log(value)
  })
  }

}
