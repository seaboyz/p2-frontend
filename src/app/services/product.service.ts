import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  viewAllProducts(): Observable<any> {
    console.log("made it to product service view all products");
    return this.http.get<object>(this.baseUrl + "/all", { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  errorHandler(e: any): any {
    console.log("Error handler invoked...");
    let errorMessage = '';
    if (e.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = e.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${e.status}\nMessage: ${e.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}

export class Product {
  category: String;
  description: String;
  inventory: number;
  name: String;
  price: number;
  productId: number;

  constructor(_category: String, _description: String, _inventory: number, _name: String, _price: number, _productId: number) {
    this.category = _category;
    this.description = _description;
    this.inventory = _inventory;
    this.name = _name;
    this.price = _price;
    this.productId = _productId;
  }
}
