import { Component, inject, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   public product:any=[]
   public grandTotal:number=0;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartservice.getTotalPrice();
    })
  }

  removeItem(item:any){
    if(confirm('Are you sure to delete ?'))
      this.cartservice.removeCartItem(item);
      alert("Item deleted successfully");
  }
  emptycart(){
    this.cartservice.removeAllCart();
  }
  inc(){}
  dec(){}
}
