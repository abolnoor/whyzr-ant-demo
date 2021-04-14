import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    AppNgZorroAntdModule

  ]
})
export class CategoriesModule { }
