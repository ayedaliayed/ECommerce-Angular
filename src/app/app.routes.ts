import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { combineLatest } from 'rxjs';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { VisionComponent } from './Components/vision/vision.component';
import { VlauesComponent } from './Components/vlaues/vlaues.component';
import { DetialsComponent } from './Components/detials/detials.component';
import { OrderComponent } from './Components/order/order.component';
import { AddProductComponent } from './Components/add-product/add-product.component';

export const routes: Routes = [
    {path:"",redirectTo:"\home",pathMatch:'full'},
    {path:"order",component:OrderComponent},
    {path:"home",component:HomeComponent},
    {path:"addProduct",component:AddProductComponent},
    {path:"about",component:AboutComponent,
    children:[
        {path:"",redirectTo:"/about/vision",pathMatch:'full'},  //go to vision page by defuallt
        {path:"vision",component:VisionComponent},
        {path:'values',component:VlauesComponent}
    ]},
    {path:"products",component:ProductsComponent},
    {path:'details/:id',component:DetialsComponent},
    {path:"**",component:NotFoundComponent} , //not found page
    


];
