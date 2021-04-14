import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ar_EG } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ar from '@angular/common/locales/ar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from './icons-provider.module';

import { AppNgZorroAntdModule } from './app-ng-zorro-antd.module';
import { MainComponent } from './shared/components/main/main.component';

registerLocaleData(ar);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    NgxsModule.forRoot(),
    ThemeBasicModule.forRoot(),
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    AppNgZorroAntdModule
  ],
  declarations: [AppComponent, MainComponent],
  providers: [APP_ROUTE_PROVIDER, { provide: NZ_I18N, useValue: ar_EG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
