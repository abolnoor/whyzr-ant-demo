import { Injector } from '@angular/core';
import { SettingService } from '../services/setting.service';
import { UtilityService } from '../services/utility.service';

export abstract class BaseComponent {
    //#region variables
    utility: UtilityService;
    settings: SettingService;
    public get isRtl(): boolean {
        return this.utility.isRtl;
    }
    //#endregion

    constructor(injector: Injector) {
        this.utility = injector.get(UtilityService);
        this.settings = injector.get(SettingService);
    }

    // public get dataLanguage1(): string {
    //     return this.settings.dataLanguage1;
    // }

    // public get dataLanguage2(): string {
    //     return this.settings.dataLanguage2;
    // }

    // public get dataLanguage3(): string {
    //     return this.settings.dataLanguage3;
    // }

    // public get hasLanguage1(): boolean {
    //     return this.settings.dataLanguage1 != null;
    // }

    // public get hasLanguage2(): boolean {
    //     return this.settings.dataLanguage2 != null;
    // }

    // public get hasLanguage3(): boolean {
    //     return this.settings.dataLanguage3 != null;
    // }
}
