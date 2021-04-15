import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
// import { CurrencyDto } from '@proxy/core';
// import { StoreDto } from '@proxy/stores';
import { SettingsConstants } from '../constants/settings-constants';
import { UtilityService } from './utility.service';


@Injectable({
    providedIn: 'root',
})
export class SettingService {
    constructor(
        private utility: UtilityService
    ) { }

    private getSetting(name: string) {
        return this.utility.config.getSetting(name);
    }

    public getSettings() {
        return this.utility.config.getAll().setting;
    }

    public get dateFormat() {
        return this.getSetting(SettingsConstants.dateFormat);
    }

    public get longDateFormat() {
        return this.getSetting(SettingsConstants.longDateFormat);
    }

    public get shortDateFormat() {
        return this.getSetting(SettingsConstants.shortDateFormat);
    }

    public get timeZone() {
        return this.getSetting(SettingsConstants.timezone);
    }
    public get defaultLanguage() {
        return this.getSetting(SettingsConstants.defaultLanguage);
    }
    
    // public get defaultCurrency(): CurrencyDto {
    //     var currencyString = this.getSetting(SettingsConstants.Currency);
    //     if (!currencyString) {
    //         return null;
    //     }
    //     return JSON.parse(currencyString) as CurrencyDto;
    // }

    public get invoiceWelcomeMessage() {
        return this.getSetting(SettingsConstants.invoiceWelcomeMessage);
    }
    public get companyName() {
        return this.getSetting(SettingsConstants.companyName);
    }
    public get Industry() {
        return this.getSetting(SettingsConstants.Industry);
    }
    public get Country() {
        return this.getSetting(SettingsConstants.Country);
    }


    public get maxFileSize() {
        const stringValue = this.getSetting(SettingsConstants.maxFileSize);
        const numberValue = Number.parseFloat(stringValue);
        return isNaN(numberValue) ? 5120 : numberValue;
    }

    // public get defaultStore(): StoreDto {
    //     var storeString = this.getSetting(SettingsConstants.defaultStore);
    //     if (!storeString) {
    //         return null;
    //     }
    //     return JSON.parse(storeString) as StoreDto;
    // }

    // public getDataLanguages() {
    //     return this.defaultStore.languages
    // }

    // get dataLanguages(): string[] {
    //     return this.getDataLanguages();
    // }

    // get dataLanguage1(): string {
    //     return this.dataLanguages[0] ? this.utility.getLanguageDisplayName(this.dataLanguages[0]) : null
    // }
    // get dataLanguage2(): string {
    //     return this.dataLanguages[1] ? this.utility.getLanguageDisplayName(this.dataLanguages[1]) : null
    // }
    // get dataLanguage3(): string {
    //     return this.dataLanguages[2] ? this.utility.getLanguageDisplayName(this.dataLanguages[2]) : null
    // }
}
