import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from "src/app/shared/interface/cartItem";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit
{
  @Input() cartItems: CartItem[] = [];

  totalPrice = 0;

  constructor() { }

  ngOnInit(): void
  {
  }

}
