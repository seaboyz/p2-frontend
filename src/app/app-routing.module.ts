import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewsComponent } from './pages/product-views/product-views.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserViewComponent } from './pages/user-view/user-view.component';

const routes: Routes = [
  {
    path: 'product-views',
    component: ProductViewsComponent
  },
  {
    path: 'user-view',
    component: UserViewComponent
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
