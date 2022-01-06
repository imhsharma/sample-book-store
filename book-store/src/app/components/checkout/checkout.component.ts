import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItem:CartItem[]=[];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.cartDetails();
  }

  cartDetails(){
    this.cartItem = this._cartService.cartItems;

    this._cartService.totalPrice.subscribe(data => this.totalPrice = data)

    this._cartService.totalQuantity.subscribe(data => this.totalQuantity = data)
    this._cartService.calculateTotalPrice();

  }

}
