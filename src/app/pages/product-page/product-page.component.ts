import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public product!: IProduct
  public currentImg = ""
  public showLightbox = false

  constructor(
    private _productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    this.product = this._productService.getProduct()
    this.currentImg = this.product.imgs[0].replace('-thumbnail', '')
  }

  changeImage(index: number): void {
    this.currentImg = this.product.imgs[index].replace('-thumbnail', '')
  }

  addProduct(): void | null {
    const CART_PRODUCT = this._productService.getCartProduct(this.product.title)
    if(this.product.cuantity === 0) return null
    if(!CART_PRODUCT){
      this._productService.addCartProduct(structuredClone(this.product))
      console.log(CART_PRODUCT)
    } else {
      alert("This product is already in the cart")
    }
  }

  cuantityProductHandler(operation: string): void {
    if(operation === "plus") this.product.cuantity += 1
    else {
      this.product.cuantity -= 1
      if(this.product.cuantity < 0) this.product.cuantity = 0
    }
  }

  showLightboxHandler($event: boolean): void {
    this.showLightbox = $event
  }

}
