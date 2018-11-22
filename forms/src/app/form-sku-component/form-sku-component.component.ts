import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-sku-component',
  templateUrl: './form-sku-component.component.html',
  styleUrls: ['./form-sku-component.component.css']
})
export class FormSkuComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);

  }
}
