import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { ModalModule} from 'ngx-bootstrap';

import { HomeComponent } from './home.component';
import { NavTopComponent } from './../../share/nav-top/nav-top.component';
import { NavMenuComponent } from './../../share/nav-menu/nav-menu.component';
import { FooterComponent } from './../../share/footer/footer.component';
import { MessagesComponent } from './../../share/messages/messages.component';

import { MainComponent } from './../../pages/main/main.component';
import { SupplierComponent } from './../../pages/supplier/supplier.component';
import { ProductsComponent } from './../../pages/products/products.component';

import { SupplierModalComponent } from './../../pages/supplier/supplier-modal/supplier-modal.component';


import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
    declarations: [ 
    	HomeComponent,
    	NavTopComponent,
    	NavMenuComponent,
    	FooterComponent,
    	MessagesComponent,
    	MainComponent,
    	SupplierComponent,
    	ProductsComponent,
        SupplierModalComponent
    ],
    imports: [ 
    	RouterModule, 
    	CommonModule,
        ModalModule.forRoot(),
    	FormsModule,
    	ReactiveFormsModule,
    	HomeRoutingModule,
    	ToastModule, 
   		ButtonModule,
   		TableModule,
   		AutoCompleteModule,
   		InputTextModule
    ]

})

export class HomeModule {}
