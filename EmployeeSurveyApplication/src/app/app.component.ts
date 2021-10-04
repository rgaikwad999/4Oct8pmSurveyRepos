import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { surveyapiService } from './shared/surveyapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private location: LocationStrategy) {
    // preventing back button in browser  
      history.pushState(null, "", window.location.href);  
      this.location.onPopState(() => {
      history.pushState(null, "", window.location.href);
    });  
   }
  title = 'Survey Application';
}
