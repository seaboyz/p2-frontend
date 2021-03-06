import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

import { AuthService } from './services/auth.service';
import { ProductViewsComponent } from './pages/product-views/product-views.component';
import { SearchBoxComponent } from './component/search-box/search-box.component';
import { HeaderComponent } from "./component/header/header.component";
import { ProductComponent } from './component/product/product.component';
import { ProductsComponent } from './component/products/products.component';
import { AddToCartBtn } from "./component/add-to-cart-btn/add-to-cart-btn.component";
import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { PlaceOrderBtnComponent } from './component/place-order-btn/place-order-btn.component';
import { CheckoutBtnComponent } from './component/checkout-btn/checkout-btn.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartIconComponent } from './component/cart-icon/cart-icon.component';
import { ContentComponent } from "./component/content/content.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserViewComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    ContentComponent,
    ProductViewsComponent,
    SearchBoxComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    AddToCartBtn,
    CartComponent,
    CartItemComponent,
    PlaceOrderBtnComponent,
    CheckoutBtnComponent,
    CheckoutComponent,
    CartIconComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
