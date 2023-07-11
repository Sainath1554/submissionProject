import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SubmissionComponent } from './submission/submission.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { SubmissionEditComponent } from './submission/submission-edit/submission-edit.component';
import { NewSubmissionComponent } from './submission/new-submission/new-submission.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'submission',
        component: SubmissionComponent,
      },
      {
        path: 'edit/:id',
        component: SubmissionEditComponent,
      },
      {
        path: 'newSubmission',
        component: NewSubmissionComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
