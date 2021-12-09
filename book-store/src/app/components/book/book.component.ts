import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { Book } from 'src/app/common/book'
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: Book = new Book();

  constructor( private _cartService: CartService) { }

  ngOnInit(): void {
  }

  @Input() 
  bookObj :any;
  
  addToCart(){
    const cartItem = new CartItem(this.book)
    this._cartService.addToCart(cartItem);

  }


}
