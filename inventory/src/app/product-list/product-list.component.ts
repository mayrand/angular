import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Product } from '../product/product.model';
/**
* @ProductsList: A component for rendering all ProductRows and
* storing the currently selected Product
*/
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  constructor() {
    this.ProductSelected = new EventEmitter();
  }

  /**
  * @input productList - the Product[] passed to us
  */
  @Input() productList: Product[];
  /**
  * @output onProductSelected - outputs the current
  *
  Product whenever a new Product is selected
  */
  @Output() ProductSelected: EventEmitter<Product>;
}
