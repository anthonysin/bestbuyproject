import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProdComponent } from './components/all-prod/all-prod.component';
import { InCategoryComponent } from './components/in-category/in-category.component';
import { InProductComponent } from './components/in-product/in-product.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-prod', component: AllProdComponent },
  { path: 'in-category/:category', component: InCategoryComponent },
  { path: 'in-product/:id', component: InProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
