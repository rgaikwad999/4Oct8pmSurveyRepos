import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { mapTo, delay, tap, catchError } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class surveyapiService {
  
  surveyModel: Survey = new Survey;
  private list: Survey[] =[];
  readonly rootUrl = "http://localhost:54307/api";

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  putSurveyData(surveyModel: any) {
    return this.http.put(this.rootUrl + "/Survey", surveyModel).pipe(tap(x=>this.toastr.success("Survey Data sent suceessfully!", "ok"))).pipe(delay(5000))
    .pipe(catchError(r=>{this.toastr.error("Survey already submitted");
      return of();
  }
    ));
  }
}