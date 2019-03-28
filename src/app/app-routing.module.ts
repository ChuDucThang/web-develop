import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutingModule } from './layouts/home/home-routing.module';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/admin/main',
    pathMatch:'full'
  },
  {
    path:'',
    children:[
      {
        path:'login',
        loadChildren:'./auth/login/login.module#LoginModule'
      },
      {
        path:'register',
        loadChildren:'./auth/register/register.module#RegisterModule'
      }
    ]
  }
];

@NgModule({
  imports: [
  	HomeRoutingModule,
  	RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [
  	RouterModule,
  	HomeRoutingModule
  ]
})
export class AppRoutingModule { }
