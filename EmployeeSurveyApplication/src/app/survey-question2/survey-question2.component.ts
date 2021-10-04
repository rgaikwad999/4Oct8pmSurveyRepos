import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Survey } from '../shared/survey.model';
import { surveyapiService } from '../shared/surveyapi.service';

@Component({
  selector: 'app-survey-question2',
  templateUrl: './survey-question2.component.html',
  styleUrls: ['./survey-question2.component.css']
})
export class SurveyQuestion2Component {
  public question2Data: string[] = [];
    constructor(private router: Router, public surveyApiService: surveyapiService) {
    }

    public onClick() : void {}
  }