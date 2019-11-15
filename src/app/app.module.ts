import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ButtonMat } from './utils/button/button.component';
import { MentionsLegalesComponent } from './utils/mentions-legales/mentions-legales.component'

import { AppComponent } from './app.component';
import { ReceptionComponent } from './reception/reception.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	{ path: '', component: ReceptionComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'mentions', component: MentionsLegalesComponent }
];

@NgModule({
  declarations: [
	AppComponent,
	ReceptionComponent,
	RegisterComponent,
	LoginComponent,
	ButtonMat,
	MentionsLegalesComponent,
	HomeComponent

  ],
  exports: [
	  RouterModule
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes),
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
