import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from "src/app/shared/interface/cartItem";

@Component({
  selector: 'app-checkout',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit
{
  @Input() cartItems: CartItem[] = [];

  totalPrice = 0;

  constructor() { }

  ngOnInit(): void
  {
  }

}
