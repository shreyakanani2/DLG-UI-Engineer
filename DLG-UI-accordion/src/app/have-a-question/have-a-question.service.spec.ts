import { TestBed } from '@angular/core/testing';

import { HaveAQuestionService } from './have-a-question.service';

describe('HaveAQuestionService', () => {
  let service: HaveAQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaveAQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
