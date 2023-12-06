import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Array<Product> = [];
  public keyword: string = "";

  // products$!: Observable<Array<Product>>;
  constructor(private productService: ProductService) {
  }

  handleChecked(product: Product) {

    this.productService.checkProduct(product).subscribe({
      next: updatedProduct => {
        console.log(updatedProduct);
        product.checked = updatedProduct.checked;
      }
    })
  }

  ngOnInit(): void {
    //this.productService.getProducts().subscribe({
      this.productService.getProductsUsingPagination(1,2).subscribe({
      next: data => {
        this.products = data
      },
      error: err => {
        console.log(err);
      }
    })
    // this.products$ = this.productService.getProducts();
  }

  handleDelete(product: Product) {
    this.productService.deleteProduct(product).subscribe(
      {
        next: data => {
          this.products = this.products.filter(p => p.id != product.id);
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }

  searchProduct() {
    this.productService.searchProduct(this.keyword).subscribe(
      {
        next: value => this.products = value,
        error: err => console.log(err)
      }
    )
  }
}
