import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from "src/app/shared/interface/cartItem";

@Component({
  selector: 'app-checkout-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit
{

  @Input() cartItem: CartItem | any;


  constructor() { }

  ngOnInit(): void
  {
  }

}
