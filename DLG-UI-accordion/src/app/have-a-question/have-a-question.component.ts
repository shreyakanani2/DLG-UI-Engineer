//External Imports
import { Component, OnInit } from '@angular/core';

//Internal Imports
import { Subscription } from 'rxjs';
import { HaveAQuestionService } from './have-a-question.service';
import { questionData } from './question.model';

@Component({
  selector: 'app-have-a-question',
  templateUrl: './have-a-question.component.html',
  styleUrls: ['./have-a-question.component.scss']
})

export class HaveAQuestionComponent implements OnInit {

  // Holds questions data
  public questions: questionData[];

  // To Unsubscribe the subscription
  private subscription: Subscription;

  /**
   *
   * @param _HaveAQuestionService
   */
  constructor(private _HaveAQuestionService: HaveAQuestionService) { }

  /**
   * ng On Init
   */
  ngOnInit() {
    this.subscription = this._HaveAQuestionService.getJSON().subscribe((data: questionData[]) => {
      this.questions = data;
    });
  }


  /**
   * ng On Distroy
   */
  ngOnDistroy() {
    this.subscription.unsubscribe()
  }
}
