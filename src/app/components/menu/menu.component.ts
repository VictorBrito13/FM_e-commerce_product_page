import { Component, OnInit } from '@angular/core';
import { CART_PRODUCTS } from 'src/app/products/products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public products = CART_PRODUCTS
  public showCart = false

  constructor() {
  }

  ngOnInit(): void {
  }

  showCartHandler(): void {
    this.showCart = !this.showCart
    console.log(this.showCart)
  }

}
