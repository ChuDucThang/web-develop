import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from './../../../core/services/supplier.service';
import { SupplierModel } from './../../../core/models/supplier.model';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'supplier-modal',
  templateUrl: './supplier-modal.component.html',
  styleUrls: ['./supplier-modal.component.scss']
})
export class SupplierModalComponent implements OnInit {
  @ViewChild('addModal') modal:ModalDirective;

  public form:FormGroup;
  public type:string;
  public selectData:SupplierModel;
  public submitted:boolean = false;
  public supplier;
  id:number;

  constructor(
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private supplierService:SupplierService,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      id:[''],
      username:[null,Validators.required],
      address:[null,Validators.required],
      phone:['',Validators.required],
      level:['',Validators.required],
      status:['',Validators.required]
    })
  }

  get f(){
    return this.form.controls
  }

  open(type?,id?){
  	this.type = type;
    if(type === 'update'){
      this.supplierService.showupdateSupllier(id).subscribe(res => {
        this.supplier = res.data;
        this.form.patchValue({
          id:this.supplier.id,
          username:this.supplier.username,
          address:this.supplier.address,
          phone:this.supplier.phone,
          level:this.supplier.level,
          status:this.supplier.status
        })
      })
    }
  	this.modal.show();
  }

  onSubmit(){ 
    // console.log(this.form.controls);

    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    let obj = this.form.value;
    console.log(obj);
    if (this.type === 'add') {
         this.supplierService.createSupplier(obj).subscribe(res => {
            this.reset();
            this.toastrService.success("Supplier Message .","Done !");
        }, err => {
            this.toastrService.error("False .");
        });
      } 
     else{
       this.supplierService.updateSupllier(obj.id, obj).subscribe(res => {
            this.modal.hide();
            this.toastrService.success("Update Supplier .","Done !");
        });
     } 
  }

  reset() {
    this.form.reset();
  }

}
