import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Survey } from '../shared/survey.model';
import { surveyapiService } from '../shared/surveyapi.service';

@Component({
  selector: 'app-survey-question1',
  templateUrl: './survey-question1.component.html',
  styleUrls: ['./survey-question1.component.css']
})
export class SurveyQuestion1Component {
  constructor(private router: Router, public surveyApiService: surveyapiService) { }
  public onClick() : void {
  }
}