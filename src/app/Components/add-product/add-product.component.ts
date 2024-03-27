import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { APIProductsServiceService } from '../../Service/apiproducts-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  categories:ICategory[];
  newProduct:Iproduct={}as Iproduct;
  

constructor(private _APIProductsServiceService: APIProductsServiceService,private _Router:Router){
  this.categories=[
    {Id:1,name:"labtop"},{Id:2,name:"Mobile"},{Id:3,name:"Tab"}
  ]
}


addNewProduct()
{
 this._APIProductsServiceService.addNewProduct(this.newProduct).subscribe({
  next:(res)=>{
    this._Router.navigateByUrl('/products')
  },
  error:(re)=>{
    alert("Try Agin")
  }

 })
}

}
