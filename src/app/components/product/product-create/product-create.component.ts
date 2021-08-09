import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Maquina Cientifica',
    price: 12.56
  }
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    //this.productService.showOnConsole('services works!')
    //  this.productService.showMessage('operação executado com sucesso')
  }
  createProduct(): void {

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado')
      this.router.navigate(['/products'])

    });

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }



}
