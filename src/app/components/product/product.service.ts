import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products" 
  constructor(private snackBar: MatSnackBar, private http : HttpClient) { }

  showOnConsole(msg: string): void {
    console.log(msg)
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'close', {

      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })

  }
  // metodo para criar produto e salvar o produto no backend product db.json
  create(product: Product): Observable<Product>{

    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{

    return this.http.get<Product[]>(this.baseUrl)

  }


}
