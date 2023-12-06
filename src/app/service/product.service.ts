import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Array<Product>>("http://localhost:8089/products");
  }

  getProductsUsingPagination(page =1, size =5): Observable<Product[]> {
    return this.http.get<Array<Product>>(`http://localhost:8089/products?_page=${page}&_limit=${size}`);
  }

  checkProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`http://localhost:8089/products/${product.id}`,
      {checked: !product.checked});
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`http://localhost:8089/products/${product.id}`);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8089/products`,
      product);
  }

  searchProduct(keyword: string) {
    return this.http.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}`);
  }
}
