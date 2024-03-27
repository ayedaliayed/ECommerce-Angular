import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class APIProductsServiceService {

  constructor(private _httpClient:HttpClient) { }

  getAllProfucts():Observable<Iproduct[]>
  {
    return this._httpClient.get<Iproduct[]>("http://localhost:3000/product");
  }

  getProductByID(id:number):Observable<Iproduct>
  {
    return this._httpClient.get<Iproduct>(`http://localhost:3000/product/${id}`);
  }

  getProductByCategoryID(cadID:number=0):Observable<Iproduct[]>
  {
    if(cadID !=null)
    return this._httpClient.get<Iproduct[]>(`http://localhost:3000/product?CaID=${cadID}`);
    return this._httpClient.get<Iproduct[]>(`http://localhost:3000/product/{id}`);
    console.log(cadID)
  }
  addNewProduct(newProduct:Iproduct):Observable<Iproduct>
  {
    return this._httpClient.post<Iproduct>("http://localhost:3000/product",JSON.stringify(newProduct));
  }

  updateProduct(upProduct:Iproduct):Observable<Iproduct>
  {
    const url = `http://localhost:3000/product/${upProduct.id}`; 
    return this._httpClient.patch<Iproduct>(url, upProduct);
  }

  deleteProduct(id:number):Observable<Iproduct>
  {
    //return this._httpClient.delete<Iproduct>(`http://localhost:3000/product/${id}`);
    return this._httpClient.delete<Iproduct>(`http://localhost:3000/product/${id}`);
  }

  products: Iproduct[] =[]
  mapProductsToids(): number[] {
    let arr: number[] = [];
    this._httpClient.get<Iproduct[]>("http://localhost:3000/product").subscribe(
      (pro: Iproduct[]) => {
        this.products = pro;
        for (let p of this.products) {
          arr.push(p.id);
        }
        //arr=this.products.map((pred)=>pred.id);
        console.log('Product IDs:', arr);
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  
    return arr; 
  }
  












}
