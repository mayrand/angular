import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-price',
  template: `
 <div class="price-display">\${{ price }}</div>
 `

})
export class ProductPriceComponent {
  @Input() price: number;
}
