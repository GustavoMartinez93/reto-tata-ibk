import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'tasks', component: PrincipalComponent},

    ]),
    FormsModule,
  ],
  providers: [
    NgForOf
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
