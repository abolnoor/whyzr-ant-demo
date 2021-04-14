import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {
  gridStyle = {
    width: '23%',
    textAlign: 'center',
    margin: '1%'
  };
  constructor() { }

  ngOnInit(): void {
  }



}
