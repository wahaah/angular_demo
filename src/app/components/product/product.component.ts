import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor(
  ) { }

  ngOnInit() {
    this.products = [
        new Product(1, 'yi', 150.99, 3.5,  'hahah', ['tianping', 'lingshi']),
        new Product(2, 'yi', 28.99, 1.5, 'hahah', ['tianping', 'lingshi']),
        new Product(3, 'yi', 110.99, 4.5, 'hahah', ['tianping', 'lingshi']),
        new Product(4, 'yi', 8.99, 2, 'hahah', ['tianping', 'lingshi']),
        new Product(5, 'yi', 33.99, 1, 'hahah', ['tianping', 'lingshi']),
    ]
  }

}

export class Product {
    constructor(
      public id: number,
      public title: string,
      public price: number,
      public rating: number,
      public desc: string,
      public cate: Array<string>,
    ) {

    }
}
