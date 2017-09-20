import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product = new Product();
  index: number;
  constructor(private _productService: ProductService, private _route: ActivatedRoute, private _router: Router) {
    this._route.paramMap
      .subscribe((params) => {
        this._productService.getOneProduct(params.get('id'), (product) => {
          this.product = product;
          this.index = parseInt(params.get('id'));
        });
      })
  }
  onSubmit(form) {
    this._productService.updateProduct(this.product, this.index);
    this._router.navigate(['/products']);
  }
  delete(idx) {
    this._productService.deleteProduct(idx)
    this._router.navigate(['/products']);
  }
  ngOnInit() {
  }

}
