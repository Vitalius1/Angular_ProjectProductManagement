import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  product: Product = new Product();
  
  constructor(private _productService: ProductService, private _router: Router) { }

  onSubmit(form){
    this._productService.createProduct(this.product);
    this._router.navigate(['/products']);
  }
  
  ngOnInit() {
  }

}
