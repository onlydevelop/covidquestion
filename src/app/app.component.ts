import { Component, OnInit } from '@angular/core';

import { STEP_ITEMS } from './constants/multi-step-form';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  formContent: any;
  formData: any;
  activeStepIndex: number;
  firstPage: boolean;

  ngOnInit(): void {
    this.formContent = STEP_ITEMS;
    this.formData = {};
    this.firstPage = true;
  }

  onFormSubmit(formData: any): void {
    this.formData = formData;

    // post form data here
    // alert(JSON.stringify(this.formData));
  }
   
  toSurvey(): void {
    this.firstPage = false;
  }
  
}
