import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaveAQuestionComponent } from './have-a-question/have-a-question.component';
import { HaveAQuestionService } from './have-a-question/have-a-question.service';
import { AccordionComponent } from './have-a-question/shared/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    HaveAQuestionComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HaveAQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
