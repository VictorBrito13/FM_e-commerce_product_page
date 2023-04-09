import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('menu') menu!: ElementRef

  constructor(
    private _productService: ProductsService,
    private _renderer2: Renderer2
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

  openMenu(): void {
    console.log(this.menu)
    this._renderer2.addClass(this.menu.nativeElement, 'menu-opened')
  }

  closeMenu(): void {
    this._renderer2.removeClass(this.menu.nativeElement, 'menu-opened')
  }

}
