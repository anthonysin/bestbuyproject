import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-prod',
  templateUrl: './all-prod.component.html',
  styleUrls: ['./all-prod.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AllProdComponent implements OnInit {
  products: Product[] = [];
  router: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.as_getAllProducts();
    console.log(this.products);
  }

  viewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }
}
