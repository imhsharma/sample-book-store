import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cartstatus',
  templateUrl: './cartstatus.component.html',
  styleUrls: ['./cartstatus.component.scss']
})
export class CartstatusComponent implements OnInit {

  totalQuantity: number = 0;
  constructor(private _cartService:CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    //subscribe to the events
    this._cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )
  }


}
