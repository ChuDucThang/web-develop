import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './../../pages/main/main.component';
import { SupplierComponent } from './../../pages/supplier/supplier.component';
import { ProductsComponent } from './../../pages/products/products.component';

export const HomeRoutes: Routes = [
	{
        path: 'admin',
        component:HomeComponent,
        children:[
        	{
        		path:'main',
        		component:MainComponent
        	},
        	{
        		path:'supplier',
    			component:SupplierComponent
        	},
        	{
        		path:'products',
    			component:ProductsComponent
        	}
        ]
    }
]

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

