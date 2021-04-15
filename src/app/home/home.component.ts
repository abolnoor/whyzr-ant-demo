import { AuthService } from '@abp/ng.core';
import { Component, Injector } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { BaseComponent } from '../shared/components/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent {

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  login() {
    this.utility.oAuthService.initLoginFlow();
  }

  
}
