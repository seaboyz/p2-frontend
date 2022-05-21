import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit
{

  constructor() { }

  username: string = "";
  password: string = "";
  fName: string = "";
  lName: string = "";
  email: string = "";
  phone: string = "";
  address: string = "";
  zipCode: string = "";
  city: string = "";
  country: string = "";
  cardNumber: string = "";
  exp:string="";
  cvv:string="";


  onClickPlaceOrder() { }

  ngOnInit(): void
  {

  }
}
