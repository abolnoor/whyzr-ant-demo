import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { GeneralSettingsComponent } from './general-settings.component';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';


@NgModule({
  declarations: [GeneralSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    AppNgZorroAntdModule
  ]
})
export class SettingsModule { }
