import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  CART_PRODUCTS: IProduct[] = [
    // {
    //   imgs: ["./assets/images/image-product-1-thumbnail.jpg"],
    //   title: "Fall Limited Edition Sneakers",
    //   description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer",
    //   price: 125,
    //   cuantity: 3,
    //   discount: 50
    // },
    // {
    //   imgs: ["./assets/images/image-product-1-thumbnail.jpg"],
    //   title: "Fall Limited Edition Sneakers",
    //   description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer",
    //   price: 125,
    //   cuantity: 3,
    //   discount: 50
    // },
    // {
    //   imgs: ["./assets/images/image-product-1-thumbnail.jpg"],
    //   title: "Fall Limited Edition Sneakers",
    //   description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer",
    //   price: 125,
    //   cuantity: 3,
    //   discount: 50
    // }
  ]

  product: IProduct = {
    imgs: ["image-product-1-thumbnail.jpg", "image-product-2-thumbnail.jpg", "image-product-3-thumbnail.jpg", "image-product-4-thumbnail.jpg"],
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer",
    price: 125,
    cuantity: 0,
    discount: 50
  }

  constructor() { }

  getProducts(): IProduct[] {
    return this.CART_PRODUCTS
  }

  getCartProduct(title: string): IProduct | undefined {
    return this.CART_PRODUCTS.filter(product => product.title === title)[0]
  }

  getProduct(): IProduct {
    return this.product
  }

  addCartProduct(newProduct: IProduct): void {
    this.CART_PRODUCTS.push(newProduct)
    console.log(this.CART_PRODUCTS)
  }

}
