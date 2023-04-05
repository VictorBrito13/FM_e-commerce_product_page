import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public products!: IProduct[]
  public showCart = false

  constructor(
    private _productService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  showCartHandler(): void {
    this.showCart = !this.showCart
  }

  getProducts(){
    this.products = this._productService.getProducts()
  }

}
