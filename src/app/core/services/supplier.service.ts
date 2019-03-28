import { Injector, Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
	providedIn:'root'
})

export class SupplierService extends ApiService{

	constructor(public injector:Injector){
		super(injector);
		this.setBaseUrl('');
	}
	getSupplierData(){
		return this.get('/supplier');
	}

	createSupplier(obj){
		return this.post('/supplier', obj);
	}

	showupdateSupllier(id) {
    	return this.get('/supplier/' + id);
 	}

 	updateSupllier(id, data) {
    	return this.put('/supplier/' + id, data);
 	}

	deleteSupplier(id){
		return this.delete('/supplier/' + id);
	}
}