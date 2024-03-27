
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges,SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../Models/iproduct';
import { IProductDTO } from '../../Models/iproduct-dto';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnChanges  {
 
  @Input() pro!:IProductDTO;
  
  buyProduct: IProductDTO[] = [];


  Tprice: number = 0;

  ngOnChanges(): void {
      this.Tprice =  this.Tprice+this.pro.price;
      this.buyProduct.push(this.pro);
  }
  
Remove(pro: IProductDTO) {
  this.Tprice =  this.Tprice-pro.price;
  this.buyProduct = this.buyProduct.filter(product => product.id !== pro.id);
}

}
