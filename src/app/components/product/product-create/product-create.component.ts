import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  propLegal ="teste" // criando binding de atributo
  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo(): void {  // criando binding de evento
    console.log("teste fazendo algo ... ")
  }

}
