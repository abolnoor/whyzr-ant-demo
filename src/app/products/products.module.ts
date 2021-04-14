import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { ProductsFormComponent } from './products-form/products-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductsFormComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppNgZorroAntdModule,    FormsModule, ReactiveFormsModule 
  ]
})
export class ProductsModule { }
