import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ProductService {
  products: Product[] = [];
  productObserver = new BehaviorSubject(this.products)

  createProduct(product) {
    this.products.push(product);
    this.productObserver.next(this.products);
  }
  getOneProduct(id, callback) {
    callback(this.products[id]);
  }
  updateProduct(product, idx) {
    this.products[idx] = product;
  }
  deleteProduct(idx) {
    if (idx > -1) {
      this.products.splice(idx, 1);
    }
  }
  constructor() { }
}
