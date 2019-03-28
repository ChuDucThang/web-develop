import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent{
  title = 'web-develop';
  brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];

  filteredBrands: any[];

  brand: any;
  day: any;

  constructor(
  	private _messageService:MessageService
  	){}


  filterBrands(event) {
        this.filteredBrands = [];
        for(let i = 0; i < this.brands.length; i++) {
            let brand = this.brands[i];
            if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    }

  showSuccess() {
        this._messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
    }

    showInfo() {
        this._messageService.add({severity:'info', summary: 'Info Message', detail:'PrimeNG rocks'});
    }

    showWarn() {
        this._messageService.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes'});
    }

    showError() {
        this._messageService.add({severity:'error', summary: 'Error Message', detail:'Validation failed'});
    }

}
