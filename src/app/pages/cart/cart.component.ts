import { Component, Input, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import { CartItem } from "src/app/shared/interface/cartItem";

@Component({
  selector: 'app-checkout',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit
{
  cartItems: CartItem[] = [];

  totalPrice = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void
  {
    this.cartService.cartItems.subscribe(cartItems => this.cartItems = cartItems)

    this.cartService.cartItems.subscribe(cartItems => this.totalPrice = this.cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0))

  }

}
