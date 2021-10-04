import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Survey } from '../shared/survey.model';
import { surveyapiService } from '../shared/surveyapi.service';

@Component({
  selector: 'app-survey-home',
  templateUrl: './survey-home.component.html',
  styleUrls: ['./survey-home.component.css']
})
export class SurveyHomeComponent implements OnInit {
  constructor(public surveyApiService: surveyapiService) {}
  ngOnInit(): void { }

  public onClick() : void {
    
    }
}