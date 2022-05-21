import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit
{

  constructor() { }

  username: String = "";
  password: String = "";
  fName: String = "";
  lName: String = "";
  email: String = "";
  phone: String = "";

  onClickPlaceOrder(username: String, password: String, fName: String, lName: String, email: String)
  {

  }

  ngOnInit(): void
  {
  }

}
