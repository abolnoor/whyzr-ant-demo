import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppNgZorroAntdModule
  ]
})
export class ProductsModule { }
