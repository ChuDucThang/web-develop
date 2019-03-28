import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  providers:[MessageService]
})
export class NavMenuComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

}
