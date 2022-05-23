import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Product } from "./product.service";

interface CartItem extends Product
{
  quantity: number
}

@Injectable({
  providedIn: 'root'
})


export class CartService
{
  cartItems: CartItem[] = []

  numberOfItemsInCart = new BehaviorSubject(this.cartItems);

  constructor() { }

  addItem(itemToAdd: Product)
  {
    const existItem = this.cartItems.find(cartitem => cartitem.productId === itemToAdd.productId)
    if (existItem) {
      existItem.quantity++;
    } else {
      this.cartItems.push({ ...itemToAdd, quantity: 1 })
    }
    this.numberOfItemsInCart.next(this.cartItems)

  }
}
