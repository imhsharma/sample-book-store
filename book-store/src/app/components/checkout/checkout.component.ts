import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  checkoutFormGroup!:FormGroup;
  totalQuantity: number = 0;

  constructor(private _cartService: CartService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cartDetails();
    this.checkoutFormGroup = this.formBuilder.group({
          customer: this.formBuilder.group({
                    firstName: [''],
                    lastName: [''],
                    email: ['']
                  }),
          shippingAddress: this.formBuilder.group({
                    street: [''],
                    city: [''],
                    state: [''],
                    country: [''],
                    zipcode: ['']
                  }),
          billingAddress: this.formBuilder.group({
                    street: [''],
                    city: [''],
                    state: [''],
                    country: [''],
                    zipcode: ['']
                  }),
          creditCard: this.formBuilder.group({
                    cardType: [''],
                    nameOnCard: [''],
                    cardNumber: [''],
                    cvv: [''],
                    expirationMonth: [''],
                    expirationYear: ['']
                  }),
                })
            
  const startMonth: number = new Date().getMonth() + 1;
  console.log("startMonth: " + startMonth);
            
             
        }

  cartDetails(){
    this.cartItem = this._cartService.cartItems;

    this._cartService.totalPrice.subscribe(data => this.totalPrice = data)

    this._cartService.totalQuantity.subscribe(data => this.totalQuantity = data)
    this._cartService.calculateTotalPrice();

  }

  onSubmit() {
    console.log('Purchase the books');
    // console.log(this.checkoutFormGroup.get('customer').value);
    // console.log("Emial is", this.checkoutFormGroup.get('customer').value.email);
  }

  copyShippingAddressToBillingAddress(event:any) {

    if (event.target.checked) {
      this.checkoutFormGroup.controls.billingAddress
        .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
    }else {
      this.checkoutFormGroup.controls.billingAddress.reset();
    }
    
  }
  

}
