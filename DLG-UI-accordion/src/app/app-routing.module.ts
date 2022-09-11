import { HaveAQuestionService } from './have-a-question/have-a-question.service';
import { HaveAQuestionComponent } from './have-a-question/have-a-question.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
    component: HaveAQuestionComponent,
    path: 'have-a-question'
  },
  {
    path: '',
    redirectTo: '/have-a-question',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [HaveAQuestionService]
})
export class AppRoutingModule { }
