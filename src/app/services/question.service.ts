import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HitCount } from '../models/HitCount';
import { Question } from '../models/Question';
import { SurveyResponse } from '../models/SurveyResponse';

import { Observable } from 'rxjs';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Vary', 'Origin');

const options = {
  headers
};

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  backendHitCountUrl: string = 'https://bqpixjrvk9.execute-api.ap-south-1.amazonaws.com/dev/getHitCount';
  backendSurveyPostUrl: string = 'https://0n7a56p8dk.execute-api.ap-south-1.amazonaws.com/v1/submitsurveydata';

  hitCount: HitCount;
  question: Question;

  constructor(private _http: HttpClient) {}

  getHitCount():Observable<HitCount> {
    return this._http.get<HitCount>(this.backendHitCountUrl);
  }

  postSurveyData(question: Question): Observable<SurveyResponse>{
    return this._http.post<SurveyResponse>(this.backendSurveyPostUrl, question, options);
  }
}
