import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SurveyQuestion1Component } from './survey-question1/survey-question1.component';
import { SurveyQuestion2Component } from './survey-question2/survey-question2.component';
import { SurveyQuestion3Component } from './survey-question3/survey-question3.component';
import { SurveyQuestion4Component } from './survey-question4/survey-question4.component';
import { SummaryComponent } from './summary/summary.component';
import { SurveyHomeComponent } from './survey-home/survey-home.component';

const routes: Routes = [
    {path:'', component: SurveyHomeComponent},
    {path: 'Home', component: SurveyHomeComponent},
    {path: 'survey-question1', component: SurveyQuestion1Component},
    {path: 'survey-question2', component: SurveyQuestion2Component},
    {path: 'survey-question3', component: SurveyQuestion3Component},
    {path: 'survey-question4', component: SurveyQuestion4Component},
    {path: 'summary', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
