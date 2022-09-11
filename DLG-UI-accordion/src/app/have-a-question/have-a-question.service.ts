import { questionData } from './question.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HaveAQuestionService {

  /**
   *
   * @param http : HttpClient
   */
  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data: questionData[]) => {
    });
  }

  // Get Data From Json File
  public getJSON(): Observable<questionData[]> {
    return this.http.get<questionData[]>("./assets/._faqs.json");
  }
}
