import { Component, OnInit, ViewChild } from '@angular/core';
import { SupplierService } from './../../core/services/supplier.service';
import { ModalDirective } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SupplierModel } from './../../core/models/supplier.model';

declare var $:any;

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  @ViewChild('deleteModal') deleteModal:ModalDirective;
  @ViewChild('addModal') addModal;

  supplier;

  a = Array(8,6,1,5,9,3,2,4);


  constructor(
    // private messageService:MessageService,
    private toastrService:ToastrService,
    private supplierService:SupplierService
   ) { }

  ngOnInit() {
    this.getSupplierData();
    console.log(this.a);
    // this.test();
    this.noibot();
    this.noibot2();
  }

  // test(){
  //   function compareNumbers(a,b){
  //     return a - b;
  //   }

  //    function compareNumbers2(a,b){
  //     return b - a;
  //   }

  //   console.log(this.a.sort(compareNumbers));
  //   console.log(this.a.sort(compareNumbers2));
  // }

  noibot(){
      for (var i = 0 ; i < ((this.a.length) - 1); i++) {
        for (var j = i +1 ; j < this.a.length; j++) {
          if (this.a[i] < this.a[j]) {
            var tmp = this.a[j];
            this.a[j] = this.a[i];
            this.a[i] = tmp
          }
        }
      }

      console.log(this.a)
    }
     noibot2(){
      for (var i = 0 ; i < ((this.a.length) - 1); i++) {
        for (var j = i +1 ; j < this.a.length; j++) {
          if (this.a[i] > this.a[j]) {
            var tmp = this.a[j];
            this.a[j] = this.a[i];
            this.a[i] = tmp
          }
        }
      }

      console.log(this.a)
    }

  getSupplierData(){
    this.supplierService.getSupplierData().subscribe(res =>{
        this.supplier = res.data;
        console.log(this.supplier);
      })
  }

  onSubmit(){
    this.toastrService.success('Success Message .');
  }

  deleteshowModal(){
     this.deleteModal.show();
  }


  onDelete(){
    this.supplierService.deleteSupplier(this.supplier.id).subscribe(res =>{
      this.deleteModal.hide();
      this.toastrService.success('Deleted !');
      this.getSupplierData();
    }, err => {
      this.toastrService.error('False !');
    });
  }
}
