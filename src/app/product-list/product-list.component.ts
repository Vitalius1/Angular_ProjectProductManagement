import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private _productService: ProductService, private _router: Router) {
    this._productService.productObserver.subscribe((products) => {
      this.products = products;
    })
   }

  delete(idx){
    this._productService.deleteProduct(idx);
    this._router.navigate(['/products'])
  }

  ngOnInit() {
  }

}
