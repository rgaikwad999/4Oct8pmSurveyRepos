import { TestBed } from '@angular/core/testing';

import { surveyapiService } from './surveyapi.service';

describe('SurveyapiService', () => {
  let service: surveyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(surveyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
