import { Component, Input, OnInit } from '@angular/core';
import { Product } from "src/app/services/product.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit
{
  @Input() product?: Product;

  constructor() { }

  ngOnInit(): void
  {
  }

  url(url: string | undefined): string
  {
    return url ? `url(${url})` : 'url(assets/no-image.png)';
  }

}
