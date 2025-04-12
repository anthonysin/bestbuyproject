import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-allproducts',
  standalone: false,
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.scss'
})
export class AllProdComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadExcelData();
  }

  loadExcelData(): void {
    this.http.get('assets/data/products.xlsx', { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        this.products = jsonData.map((item: any) => ({
          Id: Number(item['Id']),
          Name: item['Name'],
          Description: item['Description'],
          Price: Number(item['Price']),
          Photo: item['Photo'],
          Category: item['Category']
        })) as Product[];

        console.log(this.products);
      });
  }
}
