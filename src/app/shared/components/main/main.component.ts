import { Component, Injector, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {
  isCollapsed = false;
  @ViewChild('drawerTemplate', { static: false }) drawerTemplate?: TemplateRef<{
    $implicit: {};
    drawerRef: NzDrawerRef<string>;
  }>;
  
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

  inputValue?: string;
  options: string[] = [];

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options = value ? [value, value + value, value + value + value] : [];
  }

  openTemplate(){
    this.utility.openTemplate({
      nzContent: this.drawerTemplate,
      nzBodyStyle: {
        padding: '0',
        background: '#001529'
      },
      nzDirection: this.isRtl ? 'right' : 'left'
    });
  }

  changelang() {
    if (this.utility.currentCulture.cultureName == 'ar') {
      this.utility.setLanguage('en');
    } else {
      this.utility.setLanguage('ar');
    }
  }
}
