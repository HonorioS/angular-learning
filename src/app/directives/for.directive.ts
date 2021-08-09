import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit {

  //@Input('appForEm') numbers: number[]
  //@Input('appForUsando') texto: string

  constructor() {

  }

  ngOnInit(): void {

    //console.log(this.numbers)

  }
}
