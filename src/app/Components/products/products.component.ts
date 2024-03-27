import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, input, output, viewChild } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { SquarePipe } from '../../pipes/square.pipe';
import { EgyptianNationalIdPipePipe } from '../../pipes/egyptian-national-id-pipe.pipe';
import { CreditCardFormatPipePipe } from '../../pipes/credit-card-format-pipe.pipe';
import { CartComponent } from '../cart/cart.component';
import { IProductDTO } from '../../Models/iproduct-dto';
import { StaticProductsService } from '../../Service/static-products.service';
import { Route, Router, RouterLink } from '@angular/router';
import { APIProductsServiceService } from '../../Service/apiproducts-service.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, SquarePipe, EgyptianNationalIdPipePipe, CreditCardFormatPipePipe, CartComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges, OnInit {

  num: number = 6;

  @Input() parentSelectCatID: number = 0;  //from parent
  @Output() onTotalPricechange: EventEmitter<number>;  // Defined enevt  for send data to parent

  todate: Date = new Date();

  totalprice: number = 0;
  proudtcs: Iproduct[]=[];
  filterproducts: Iproduct[] = [];

  _count: number = 0;
  p = 0;
  pro: IProductDTO = { name: "", price: 0, quantity: 0, id: 0, }

  constructor(private _APIProductsServiceService: APIProductsServiceService, private _router: Router,) {

    this.onTotalPricechange = new EventEmitter<number>(); // Initialaztion event
    //  this.proudtcs=_StaticProductsService.getAllProduct();
    //  this.filterproducts=_StaticProductsService.getAllProduct();
    

  }

  ngOnInit(): void {
    this._APIProductsServiceService.getAllProfucts().subscribe({
      next: (res) => {
        this.proudtcs = res;
        this.filterproducts=res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnChanges(): void {
    // this.filterproducts=this._StaticProductsService.getAllProductByCategory(this.parentSelectCatID);
    this._APIProductsServiceService.getProductByCategoryID(this.parentSelectCatID).subscribe({
      next: (res) => { this.filterproducts = res
      this.proudtcs=res },
      error: (err) => { console.log(err) }
    })
  }


  Buy(price: number, quantity: string, id: number) {
    this._count += 1;

    // Calculate total price
    this.totalprice += price * +quantity;

    this.onTotalPricechange.emit(this.totalprice);  // fiare Event

    // Decrease quantity of the product being purchased
    this.proudtcs[id - 1].quantity -= +quantity;

    this.pro = {
      name: this.proudtcs[id - 1].name,
      price: this.proudtcs[id - 1].price * +quantity,
      quantity: +quantity,
      id: this._count
    };



  }


  GoDetailspage(id: number) {
    // this._router.navigateByUrl(`/details/{id}`);
    this._router.navigate(['details', id])

  }
  
}
