import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { BookListService } from './service/booklist.service';
import { CartstatusComponent } from './components/cartstatus/cartstatus.component';
import { UpdateLibraryComponent } from './components/update-library/update-library.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooklistComponent,
    BookComponent,
    CartComponent,
    CartstatusComponent,
    UpdateLibraryComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
