import { Component, OnInit } from '@angular/core';
import { surveyapiService } from '../shared/surveyapi.service';
import { Form, NgForm } from '@angular/forms';
import { Survey } from '../shared/survey.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  constructor(public surveyApiService: surveyapiService) {}
  ngOnInit(): void {
    this.onLoad(this.surveyApiService.surveyModel);
  }

  onLoad(surveyModel: Survey) {
  } 
  public onClearAllData() : void {}

  onSubmit(surveyModel: Survey) {
    this.surveyApiService.putSurveyData(surveyModel).subscribe((res)=>{
     window.location.href="https://www.metrixlab.com/";
    });
  }
}
