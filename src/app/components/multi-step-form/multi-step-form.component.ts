import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../../services/question.service';
import { HitCount } from 'src/app/models/HitCount';
import { Question } from 'src/app/models/Question';
import { SurveyResponse } from 'src/app/models/SurveyResponse';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent implements OnInit {
  @Input() formContent: any;
  @Input() firstPage: any;
  @Output() readonly formSubmit: EventEmitter<any> = new EventEmitter<any>();

  activeStepIndex: number;
  currentFormContent: Array<any>;
  checkValue: Array<any>;
  formData: any;
  position: any;
  formFields: Array<Array<string>>;
  masterFormFields: Array<string>;
  stepItems: Array<any>;
  cmDetails: any;
  masterForm: Array<FormGroup>;
  progress: string;
  checkboxCount: number;
  cmValue: number;
  hitCount: HitCount;
  question: Question;
  surveyResponse: SurveyResponse;
  riskFactor: string;
  riskColor: string;
  showSpeedometer: boolean;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _questionService: QuestionService
  ) {}

  ngOnInit() {
    this._questionService.getHitCount().subscribe(hitCount => {
      this.hitCount = {
        visits: hitCount.visits,
        surveys: hitCount.surveys
      }
    });

    this.activeStepIndex = 0;
    this.progress = '0%';
    this.masterForm = [];
    this.cmDetails = {};
    this.currentFormContent = [];
    this.formFields = [];
    this.stepItems = this.formContent;
    this.checkboxCount = 0;
    this.cmValue = 1;
    this.surveyResponse = null;
    this.riskFactor = null;
    this.riskColor = null;
    this.showSpeedometer = false;

    this.stepItems.forEach((data, i) => {
      this.currentFormContent.push(this.stepItems[i]['data']); // holds name, validators, placeholder of all steps
      this.formFields.push(Object.keys(this.currentFormContent[i])); // holds string values for each field of all steps
      this.masterForm.push(this.buildForm(this.currentFormContent[i])); // holds all form groups
    });
  }

  // build separate FormGroups for each form
  buildForm(currentFormContent: any): FormGroup {
    const formDetails = Object.keys(currentFormContent).reduce(
      (obj, key) => {
        obj[key] = ['', this.getValidators(currentFormContent[key])];
        return obj;
      },
      {}
    );
    return this._formBuilder.group(formDetails);
  }

  // get validator(s) for each field, if any
  getValidators(formField: any): Validators {
    const fieldValidators = Object.keys(formField.validations).map(validator => {
      if (validator === 'required') {
        return Validators[validator];
      } else {
        return Validators[validator](formField.validations[validator]);
      }
    });

    return fieldValidators;
  }

  // get validation error messages per error, per field
  getValidationMessage(formIndex: number, formFieldName: string): string {
    const formErrors = this.masterForm[formIndex].get(formFieldName).errors;
    const errorMessages = this.currentFormContent[formIndex][formFieldName]
      .errors;
    const validationError = errorMessages[Object.keys(formErrors)[0]];

    return validationError;
  }

  goToStep(step: string): void {
    this.activeStepIndex = step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;
    this.progress = Math.ceil(( this.activeStepIndex / this.stepItems.length ) * 100) + '%';
    this.setFormPreview(this.activeStepIndex);
  }

  setFormPreview(activeStepIndex: number): void {
    let controlName = false;
    if(this.activeStepIndex === this.stepItems.length-2){
      let controlName = Object.keys(this.masterForm[activeStepIndex].controls)[0];
    } else {
      
    }
    if(controlName && controlName === 'Cm') {
      this.masterForm[activeStepIndex].controls['Cm'].setValue(false);
      this.cmValue = 1;
      this.checkboxCount = 0;
    }

    this.formData = this.masterForm.reduce(
      (masterForm, currentForm) => ({ ...masterForm, ...currentForm.value }),
      {}
    );

    this.formData['Cm'] = this.cmValue;
    console.log(JSON.stringify(this.formData));

    this.masterFormFields = Object.keys(this.formData);
  }

  onFormSubmit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        //return position;
        console.log(position);
        this.formData['position'] = {latitude:position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy};
        this.formData['cmDetails'] = this.cmDetails;
        this.formSubmit.emit(this.formData);
        this._questionService.postSurveyData(this.formData as Question).subscribe(res => {
          this.surveyResponse = res;
          if(this.surveyResponse.risk >= 7){
            this.riskFactor = 'High';
            this.riskColor = 'red';            
          } else if (this.surveyResponse.risk >= 4.2 && this.surveyResponse.risk < 7){
            this.riskFactor = 'Moderate';
            this.riskColor = 'yellow';            
          } else if (this.surveyResponse.risk >= 2.5 && this.surveyResponse.risk < 4.2){
            this.riskFactor = 'Low';
            this.riskColor = 'green';
          }
          this.showSpeedometer = true;
        });
      }, err => {
        this.formData['position'] = {};
        this.formData['cmDetails'] = this.cmDetails;
        this.formSubmit.emit(this.formData);
        this._questionService.postSurveyData(this.formData as Question).subscribe(res => {
          this.surveyResponse = res;
          if(this.surveyResponse.risk >= 7){
            this.riskFactor = 'High';
            this.riskColor = 'red';            
          } else if (this.surveyResponse.risk >= 4.2 && this.surveyResponse.risk < 7){
            this.riskFactor = 'Moderate';
            this.riskColor = 'yellow';            
          } else if (this.surveyResponse.risk >= 2.5 && this.surveyResponse.risk < 4.2){
            this.riskFactor = 'Low';
            this.riskColor = 'green';
          }
          this.showSpeedometer = true;
        });
      });
    }
    
  }

  trackByFn(index: number): number {
    return index;
  }

  getSelectedCheckboxes(e, code) {
    this.checkboxCount = e.target.checked ? this.checkboxCount + 1 : this.checkboxCount - 1;
    if(this.checkboxCount > 2) this.cmValue = 4;
    else if (this.checkboxCount === 2) this.cmValue = 3;
    else if (this.checkboxCount === 1) this.cmValue = 2;
    else this.cmValue = 1;
    if(e.target.checked){
      this.cmDetails[code] = true;
    } else {
      this.cmDetails[code] = false;
    }
    if(code == 'None'){
      for(var key in this.cmDetails){
        if(key !== 'None'){
          this.cmDetails[key] = false;
        }
      }
    }
    console.log(this.cmDetails);
  }

  onDivClick(i, field, code) {
    this.masterForm[i].controls[field].setValue(code);
  }
}
