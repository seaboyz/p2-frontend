import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-views',
  templateUrl: './product-views.component.html',
  styleUrls: ['./product-views.component.css']
})
export class ProductViewsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public productList: any = [this.viewProducts()]

  viewProducts() {
    return this.productService.viewAllProducts().subscribe((data: any) => { console.log("returned data: ", data) })
  }

  ngOnInit(): void {

  }

}
