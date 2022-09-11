import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveAQuestionComponent } from './have-a-question.component';

describe('HaveAQuestionComponent', () => {
  let component: HaveAQuestionComponent;
  let fixture: ComponentFixture<HaveAQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaveAQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaveAQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
