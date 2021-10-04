import { asNativeElements, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Survey } from '../shared/survey.model';
import { surveyapiService } from '../shared/surveyapi.service';

@Component({
  selector: 'app-survey-question3',
  templateUrl: './survey-question3.component.html',
  styleUrls: ['./survey-question3.component.css']
})
export class SurveyQuestion3Component {
    form: FormGroup;

    constructor(private router: Router, private fb: FormBuilder, public surveyApiService: surveyapiService) { 
      this.form = this.fb.group({
        checkboxArray: this.fb.array([], [Validators.required])
      })
    }
 
    public SelectedAnswers: string[] = [];

    public onClick() : void {
      this.setSelectedAnsersToSurveyModel();
    }

      onCheckboxChange(e: any) {
          if (e.target.checked) {
            this.SelectedAnswers.push(e.target.value);
          } else {    
            for(let i = 0; i <= this.SelectedAnswers.length; i++){
                if(this.SelectedAnswers[i] == e.target.value) {
                  this.SelectedAnswers.splice(i,1);
                }
            }
          }
      }

      onRadiobtnChange(a: any) {
        if(this.SelectedAnswers.length> 0){
          for(let i = 0; i <= this.SelectedAnswers.length; i++){
            this.SelectedAnswers.forEach((element,index)=>{
              this.SelectedAnswers.splice(index,1);
            }); 
          }
          if(a.target.value !=""){
            if(a.target.checked){

            }
          }
         
        }
      }
      
  setSelectedAnsersToSurveyModel() {
    this.surveyApiService.surveyModel.surveySubQuestionData=[{
      id: this.surveyApiService.surveyModel.surveySubQuestionData[0]["id"],
      question: this.surveyApiService.surveyModel.surveySubQuestionData[0]["question"],
      selectedAnswers: this.SelectedAnswers
    }];
  }
}
