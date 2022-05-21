import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from "src/app/shared/interface/cartItem";

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent implements OnInit
{

  @Input() cartItem: CartItem | any;


  constructor() { }

  ngOnInit(): void
  {
  }

}
