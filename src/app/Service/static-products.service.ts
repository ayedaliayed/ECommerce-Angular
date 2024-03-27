import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  proudtcs:Iproduct[];
  constructor() { 
    this.proudtcs=[

      {id:1,name:"Dell",quantity:3,price:33000,img: "assets\\download.jpeg",CaID:1},
      {id:2,name:"Hp",quantity:0,price:22000,img:"assets\\download (1).jpeg",CaID:1},

      {id:3,name:"Samsung",quantity:3,price:20000,img:"assets\\download (2).jpeg",CaID:2},
      {id:4,name:"Oppo",quantity:1,price:33000,img:"assets\\download (3).jpeg",CaID:2},
      {id:5,name:"Samsung",quantity:3,price:20000,img:"assets\\download (4).jpeg",CaID:2},
      {id:6,name:"Oppo",quantity:1,price:33000,img:"assets\\download (5).jpeg",CaID:2},

      {id:7,name:"Tab Oppo",quantity:3,price:33000,img:"assets\\61Yj0rzrpeL._AC_UF1000,1000_QL80_.jpg",CaID:3},
      {id:8,name:"Tab Samsung",quantity:0,price:33000,img:"assets\\61Yj0rzrpeL._AC_UF1000,1000_QL80_.jpg",CaID:3},

      {id:9,name:"Dell WorkSation",quantity:3,price:33000,img: "assets\\download.jpeg",CaID:1},
      {id:10,name:"Hp",quantity:5,price:22000,img:"assets\\download (1).jpeg",CaID:1},

      {id:11,name:"Tab Oppo",quantity:3,price:33000,img:"assets\\61Yj0rzrpeL._AC_UF1000,1000_QL80_.jpg",CaID:3},
      {id:12,name:"Tab Samsung",quantity:5,price:33000,img:"assets\\61Yj0rzrpeL._AC_UF1000,1000_QL80_.jpg",CaID:3},
      

    ]
   
  }

getAllProduct():Iproduct[]
{
  return this.proudtcs;
}

getproducByID(id:number):Iproduct|null
{
  let fp=this.proudtcs.find((prd)=>prd.id==id)
  return fp?fp:null
}

getAllProductByCategory(cat:number):Iproduct[]
{
  if(cat==0)
    return this.proudtcs;
  
  return  this.proudtcs.filter((prd)=>prd.CaID==cat)
   
}

mapProductsToids():number[]
{
  return this.proudtcs.map((pred)=>pred.id);
}

}
