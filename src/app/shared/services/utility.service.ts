import {
  RestService,
  AbpTenantService,
  ConfigStateService,
  SessionStateService,
  LocalizationService,
  ApplicationConfigurationService,
  LanguageInfo,
  CurrentCultureDto,
  PermissionService,
} from '@abp/ng.core';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { DOCUMENT } from '@angular/common';
import { NzDrawerService } from 'ng-zorro-antd/drawer';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {

  //#region variables
  completeRegistration: boolean;
  tempPassword: string;
  tempEmail: string;
  tempName: string;
  breakpoints = {
    xs: 0,
    sm: 575,
    md: 768,
    lg: 992,
    xl: 1200,
  };
  defaultItemPictureUrl = 'assets/image_default.png';
  private sidebarOpen: boolean = true; //this should be set default to true because the init state of sidebar is open
  private get basePageTitle(): string {
    return this.translate('::AppName');
  }

  public get width(): number {
    return window.innerWidth;
  }
  menuItems: any[] = [];
  menuBottomItems: any[] = [];
  //#endregion

  //#region services
  public route: Router;
  public rest: RestService;
  public tenantService: AbpTenantService;
  public config: ConfigStateService;
  public sessionState: SessionStateService;
  public localization: LocalizationService;
  public appConfigService: ApplicationConfigurationService;
  public oAuthService: OAuthService;
  public permissionService: PermissionService;
  public drawerService: NzDrawerService;
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
  private document: Document;
  //#endregion

  constructor(injector: Injector) {
    this.document = injector.get(DOCUMENT);
    this.rest = injector.get(RestService);
    this.config = injector.get(ConfigStateService);
    this.sessionState = injector.get(SessionStateService);
    this.localization = injector.get(LocalizationService);
    this.oAuthService = injector.get(OAuthService);
    this.tenantService = injector.get(AbpTenantService);
    this.appConfigService = injector.get(ApplicationConfigurationService);
    this.route = injector.get(Router);
    this.permissionService = injector.get(PermissionService);
    this.drawerService=  injector.get(NzDrawerService);
  }

  public get currentCulture(): CurrentCultureDto {
    return this.config.getDeep('localization.currentCulture');
  }

  public get language(): string {
    return this.sessionState.getLanguage();
  }

  public get selectedLanguageInfo(): LanguageInfo {
    return this.languages.find(Language => Language['cultureName'] == this.language);
  }

  public get languages(): LanguageInfo[] {
    return this.config.getDeep('localization.languages');
  }

  public getLanguageDisplayName(cultureName) {
    return this.languages.find(el => el.cultureName === cultureName).displayName;
  }

  public setLanguage(lang: string) {
    this.sessionState.setLanguage(lang);
  }

  translate(key: string): string {
    return this.localization.instant(key);
  }

  async refreshConfig() {
    const config = await this.appConfigService.getConfiguration().toPromise();
    this.config.setState(config);
  }

  public navigate(url: string) {
    this.route.navigate([url]);
  }

  public userPermission(item): boolean {
    return this.permissionService.getGrantedPolicy(`Whyzr.${item}`);
  }

  public setSidebarState(state: boolean) {
    this.sidebarOpen = state;
  }

  public get getSidebarState() {
    return this.sidebarOpen;
  }

  public convertFromByteToMb(valueInByte: number): number {
    return valueInByte / 1048576;
  }

  public convertFromKbToMb(valueInKb: number): number {
    return valueInKb / 1024;
  }

  public converToSlug(str: string): string {
    str = str
      ?.trim()
      .replace(/([A-Z])([A-Z])/g, '$1-$2')
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
    return str;
  }

  toggleSidebar() {
    // TODO:
  }

  setTenantHost() {
    this.sessionState.setTenant({
      id: null,
      name: null,
      isAvailable: false,
    });
  }

  populateMenuItems() {
    this.menuItems = [
      {
        title: this.localization.instant('::Menu:Home'),
        link: '/',
        icon: 'home',
      },
      {
        title: this.localization.instant('::Menu:Sales'),
        group: true,
        hidden: !this.userPermission("Categories")
      },
      {
        title: this.localization.instant('::Menu:Categories'),
        icon: 'layers-outline',
        link: 'categories',
        hidden: !this.userPermission("Categories")
      },
      {
        title: this.localization.instant('::Menu:Industries'),
        icon: 'briefcase-outline',
        link: 'industries',
        hidden: !this.userPermission("Industries")
      },
      {
        title: this.localization.instant('::Menu:Countries'),
        icon: 'flag-outline',
        link: 'countries',
        hidden: !this.userPermission("Countries")
      },
      {
        title: this.localization.instant('::Menu:Currencies'),
        icon: 'credit-card-outline',
        link: 'currencies',
        hidden: !this.userPermission("Currencies")
      },
    ]
  }

  populateMenuBottomItems() {
    this.menuBottomItems = [
      {
        title: this.localization.instant('::Menu:Settings'),
        link: 'settings',
        icon: 'settings',
      }
    ];
  }

  populateAllMenuItems() {
    this.populateMenuItems();
    this.populateMenuBottomItems();
  }

  init() {
    this.populateAllMenuItems();
    this.populatePageTitle();
  }

  populatePageTitle() {
    this.document.title = this.basePageTitle;
  }

  public get isRtl(): boolean {
    return this.currentCulture.isRightToLeft;
  }

  updatePageTitle(key?: string) {
    if (key) {
      this.document.title = `${this.basePageTitle} | ${this.translate(key)}`;
    } else {
      this.populatePageTitle();
    }
  }

  openTemplate(nzDrawerOptions): void {
    const drawerRef = this.drawerService.create(nzDrawerOptions);

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Template) open');
    });

    drawerRef.afterClose.subscribe(() => {
      console.log('Drawer(Template) close');
    });
  }
}
