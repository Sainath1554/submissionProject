import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SubmissionComponent } from './submission/submission.component';
import { HomeComponent } from './home/home.component';
import { SubmissionEditComponent } from './submission/submission-edit/submission-edit.component';
import { NewSubmissionComponent } from './submission/new-submission/new-submission.component';

@NgModule({
  declarations: [				
    AppComponent,
      HeaderComponent,
      LoginComponent,
      SubmissionComponent,
      HomeComponent,
      SubmissionEditComponent,
      NewSubmissionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
