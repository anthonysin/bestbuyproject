import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private as_products: Product[] = [
    {
      Id: 1,
      Name: `Bosch 30" 3.7 Cu. Ft. True Convection 5-Burner Stove`,
      Description: `Experience the best of both worlds with the Bosch 800 Series gas range. This industrial-style range features a spacious 5-burner gas cooktop...`,
      Price: 3000,
      Photo: 'stove.jpeg',
      Category: 'Appliances'
    },
    {
      Id: 2,
      Name: `Bosch 36" 21 Cu. Ft. Counter-Depth Refrigerator`,
      Description: `Keep your food fresh and close at hand with this 4-door Bosch refrigerator...`,
      Price: 1500,
      Photo: 'fridge.jpeg',
      Category: 'Appliances'
    },
    {
      Id: 3,
      Name: `Apple MacBook Air 13.3" w/ Touch ID`,
      Description: `Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip...`,
      Price: 1299,
      Photo: 'macbook.jpeg',
      Category: 'Computers'
    },
    {
      Id: 4,
      Name: `Lenovo IdeaPad Flex 5 Chromebook`,
      Description: `Step into the modern age of ultra-fast computing with the Lenovo IdeaPad Flex 5...`,
      Price: 499,
      Photo: 'tablet.jpeg',
      Category: 'Computers'
    },
    {
      Id: 5,
      Name: `LG 50" 4K UHD HDR LED Smart TV`,
      Description: `The LG 55" smart TV offers a game-changing entertainment experience...`,
      Price: 699,
      Photo: 'lgtv.jpeg',
      Category: 'TVs'
    },
    {
      Id: 6,
      Name: `Amazon Fire TV Stick 4K Max`,
      Description: `Dive into 4K Ultra HD cinematic entertainment with the Amazon Fire TV Stick...`,
      Price: 59.99,
      Photo: 'firestick.jpeg',
      Category: 'TVs'
    }
  ];

  constructor() {}

  as_getAllProducts(): Product[] {
    return this.as_products;
  }

  as_getProductById(id: number): Product | undefined {
    return this.as_products.find(p => p.Id === id);
  }

  as_getProductsByCategory(category: string): Product[] {
    return this.as_products.filter(p => p.Category.toLowerCase() === category.toLowerCase());
  }
}
