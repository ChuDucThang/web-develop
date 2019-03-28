import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.router.navigate(['/login']);
  }

}

