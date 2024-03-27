import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StaticProductsService } from '../../Service/static-products.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
import { APIProductsServiceService } from '../../Service/apiproducts-service.service';

@Component({
  selector: 'app-detials',
  standalone: true,
  imports: [],
  templateUrl: './detials.component.html',
  styleUrl: './detials.component.css'
})
export class DetialsComponent implements OnInit {

  product: Iproduct | null = null;
  cureentid: number = 0;
  productIDs: number[] = [];
  previousID: number = 0;


  constructor(private _ActivatedRoute: ActivatedRoute, 
    private _APIProductsServiceService: APIProductsServiceService,
    //private _StaticProductsService: StaticProductsService,
    private location: Location,
    private _Route: Router) {
    //this.productIDs = _StaticProductsService.mapProductsToids();
   // this.productIDs=_APIProductsServiceService.mapProductsToids(); 
    
  }

  ngOnInit(): void {
    // this.cureentid=Number(this._ActivatedRoute.snapshot.paramMap.get('id')); //work for one time 

    this._ActivatedRoute.paramMap.subscribe((pram) => {
      this.cureentid = Number(pram.get('id'));

      this._APIProductsServiceService.getProductByID(this.cureentid).subscribe({
        next: (res) => { this.product = res },
        error: (err) => { console.log(err) }
      })
      //this.product=this._StaticProductsService.getproducByID(this.cureentid);//change cureentid 
       this.productIDs=this._APIProductsServiceService.mapProductsToids(); 
    })


  }

  Back() {
    this.location.back();
  }

  Next() {

    this.previousID = this.productIDs.findIndex((id) => id == this.cureentid);

    if (this.previousID < this.productIDs.length - 1) {

      this._Route.navigate(['details', this.productIDs[this.previousID + 1]])
      //this._Route.navigateByUrl(`/details/{this.productIDs[previousID-1]}`);


    }

  }

  Previous() {

    this.previousID = this.productIDs.findIndex((id) => id == this.cureentid);
    if (this.previousID > 0) {

      this._Route.navigate(['details', this.productIDs[this.previousID - 1]])
      //this._Route.navigateByUrl(`/details/{this.productIDs[previousID-1]}`);


    }

  }

}
