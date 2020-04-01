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

  @Output() readonly formSubmit: EventEmitter<any> = new EventEmitter<any>();

  activeStepIndex: number;
  currentFormContent: Array<any>;
  formData: any;
  formFields: Array<Array<string>>;
  masterFormFields: Array<string>;
  stepItems: Array<any>;
  masterForm: Array<FormGroup>;
  progress: string;
  checkboxCount: number;
  cmValue: number;
  hitCount: HitCount;
  question: Question;
  surveyResponse: SurveyResponse;

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
    this.currentFormContent = [];
    this.formFields = [];
    this.stepItems = this.formContent;
    this.checkboxCount = 0;
    this.cmValue = 1;
    this.surveyResponse = null;

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
    console.log(this.hitCount);

    this.activeStepIndex = step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;
    this.progress = Math.ceil(( this.activeStepIndex / this.stepItems.length ) * 100) + '%';
    this.setFormPreview(this.activeStepIndex);
  }

  setFormPreview(activeStepIndex: number): void {

    console.log(this.masterForm[activeStepIndex].controls);
    console.log('Object Key = ' + Object.keys(this.masterForm[activeStepIndex].controls));
    let controlName = Object.keys(this.masterForm[activeStepIndex].controls)[0];
    if(controlName === 'Cm') {
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
    this.formSubmit.emit(this.formData);
    this._questionService.postSurveyData(this.question as Question).subscribe(res => {
      console.log(res);
      this.surveyResponse = res;
    });
  }

  trackByFn(index: number): number {
    return index;
  }

  getSelectedCheckboxes(e) {
    console.log(e);
    this.checkboxCount = e.target.checked ? this.checkboxCount + 1 : this.checkboxCount - 1;
    if(this.checkboxCount > 2) this.cmValue = 4;
    else if (this.checkboxCount === 2) this.cmValue = 3;
    else if (this.checkboxCount === 1) this.cmValue = 2;
    else this.cmValue = 1;
  }
}
