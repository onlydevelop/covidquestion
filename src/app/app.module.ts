import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { FormatTitlePipe } from './pipes/format-title.pipe';
import { QuestionService } from './services/question.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, MultiStepFormComponent, FormatTitlePipe ],
  providers:    [ QuestionService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
