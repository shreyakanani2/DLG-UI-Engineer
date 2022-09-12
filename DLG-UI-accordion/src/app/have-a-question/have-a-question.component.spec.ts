import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveAQuestionComponent } from './have-a-question.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HaveAQuestionComponent', () => {
  let component: HaveAQuestionComponent;
  let fixture: ComponentFixture<HaveAQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaveAQuestionComponent ],
      imports: [HttpClientTestingModule, HttpClientModule]
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
