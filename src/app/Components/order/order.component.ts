import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../Models/icategory';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductsComponent,CartComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit {

  selectCatID:number=0;
  totalprice:number=0;
  categories:ICategory[];

  @ViewChild("username") ele!:ElementRef;
  @ViewChild("h22")h2!:ElementRef;

  @ViewChild(ProductsComponent)product!:ProductsComponent

  constructor()
  {
    this.categories=[
      {Id:1,name:"labtop"},{Id:2,name:"Mobile"},{Id:3,name:"Tab"}
    ]
  }

  ngAfterViewInit(): void {
    this.ele.nativeElement.value="Test ViewChild ";
    this.h2.nativeElement.innerHTML="Welcome from TS File";  //error
    console.log(this.product.proudtcs);
  }

  changeTotalPrice(rec:number)
  {
    this.totalprice=rec;
    

  }
}
