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
  placeholder = [];
  cartItems = new BehaviorSubject<CartItem[]>([]);

  constructor()
  {
    const storage: CartItem[] = JSON.parse(localStorage.getItem("cart")!);
    if (storage) {
      this.cartItems.next(storage);
    } else {
      localStorage.setItem("cart", JSON.stringify([]))
    }

  }

  addItem(itemToAdd: Product)
  {

    const cartItemsFromLocalStorage: CartItem[] = JSON.parse(localStorage.getItem("cart")!);

    let exitItem: CartItem | undefined = cartItemsFromLocalStorage.find(cartItem => cartItem.productId === itemToAdd.productId);

    if (exitItem) {
      exitItem.quantity++;
      this.cartItems.next([...cartItemsFromLocalStorage])
      // localStorage.setItem("cart", JSON.stringify([...cartItemsFromLocalStorage, exitItem]))
      this.setLocalstorage([...cartItemsFromLocalStorage])
    } else {
      this.cartItems.next([...cartItemsFromLocalStorage, { ...itemToAdd, quantity: 1 }]);
      this.setLocalstorage([...cartItemsFromLocalStorage, { ...itemToAdd, quantity: 1 }]);
    }
  }

  setLocalstorage(data: CartItem[])
  {
    localStorage.setItem("cart", JSON.stringify(data))
  }
}
