import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Survey } from '../shared/survey.model';
import { surveyapiService } from '../shared/surveyapi.service';

@Component({
  selector: 'app-survey-question4',
  templateUrl: './survey-question4.component.html',
  styleUrls: ['./survey-question4.component.css']
})
export class SurveyQuestion4Component {
  constructor(private router: Router, public surveyApiService: surveyapiService) {
  }

  public onClick() : void {}
  public onClear() : void {}
}
