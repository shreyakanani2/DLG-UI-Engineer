import { TestBed } from '@angular/core/testing';

import { HaveAQuestionService } from './have-a-question.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HaveAQuestionService', () => {
  let service: HaveAQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [HaveAQuestionService]
    }).compileComponents();;
    service = TestBed.inject(HaveAQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getJSON function', () => {
    const service: HaveAQuestionService = TestBed.get(HaveAQuestionService);
    expect(service.getJSON).toBeTruthy();
  });
});
