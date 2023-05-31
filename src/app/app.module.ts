import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompComponent } from './components/mycomp/mycomp.component';
 import{FormGroup, FormsModule, ReactiveFormsModule}from'@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './components/home/home.component';
import { GreenDirective } from './directive/green.directive';
import { SignupComponent } from './signup/signup.component'
import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    NotfoundComponent,
    ProfileComponent,
    AddtaskComponent,
    TaskComponent,
    HomeComponent,
    GreenDirective,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//for save variable from input in html to varialble in ts
    ReactiveFormsModule // to activate form validate

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
