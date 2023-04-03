import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {
  @Input() products!: IProduct[]
  @Input() showCart!: boolean

  constructor() {}

  ngOnInit(): void {
  }

  deleteProduct(index:number): void {
    this.products.splice(index, 1);
  }

}
