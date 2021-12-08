import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { CartComponent } from './components/cart/cart.component';
import { CartstatusComponent } from './components/cartstatus/cartstatus.component';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'booklist', component: BooklistComponent },
  { path: 'cart', component: CartComponent },
  {path:'bookcount',component: CartstatusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
