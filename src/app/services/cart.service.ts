import { Injectable } from '@angular/core';
import { Product } from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class CartService
{
  cartItems: { item: Product, quantity: number }[] = []

  constructor() { }

  addItem(itemToAdd: Product)
  {
    const existItem = this.cartItems
      .find(({ item }) => item.productId === itemToAdd.productId)

    if (existItem) {
      existItem.quantity++;
    } else {
      this.cartItems.push({ item: itemToAdd, quantity: 1 })
    }
    console.log(this.cartItems)
  }
}
