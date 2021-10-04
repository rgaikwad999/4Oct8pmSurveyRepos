import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyQuestion1Component } from './survey-question1/survey-question1.component';
import { SurveyQuestion2Component } from './survey-question2/survey-question2.component';
import { SurveyQuestion3Component } from './survey-question3/survey-question3.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
import { SurveyHomeComponent } from './survey-home/survey-home.component';
import { SurveyQuestion4Component } from './survey-question4/survey-question4.component';
import { surveyapiService } from './shared/surveyapi.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SurveyQuestion1Component,
    SurveyQuestion2Component,
    SurveyQuestion3Component,
    SummaryComponent,
    SurveyHomeComponent,
    SurveyQuestion4Component,
    //FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    //RouterModule.forRoot(myroutes)
  ],
  providers: [surveyapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
