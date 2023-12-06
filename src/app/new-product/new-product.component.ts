import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public formGroup!: FormGroup

  constructor(private fb: FormBuilder, private productService: ProductService) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      price: this.fb.control(0),
      checked: this.fb.control(false),
    });
  }

  saveProduct() {

    let product: Product = this.formGroup.value;

    this.productService.saveProduct(product).subscribe(
      {
        next: data => {
            alert(JSON.stringify(data));
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }
}
