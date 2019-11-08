import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component'
import { ConnexionComponent } from './connexion/connexion.component'
import { InscriptionComponent } from './inscription/inscription.component'
import { Routes, RouterModule } from '@angular/router';
import { ButtonMat } from './utils/button/button.component';
import { MentionsLegalesComponent } from './utils/mentions-legales/mentions-legales.component'
import { ReactiveFormsModule } from '@angular/forms'

const appRoutes: Routes = [
	//{ path: 'acceuil', component: AcceuilComponent },
	{ path: 'connexion', component: ConnexionComponent },
	{ path: 'inscription', component: InscriptionComponent },
	{ path: '', component: AcceuilComponent },
	{ path: 'mentions', component: MentionsLegalesComponent}
];

@NgModule({
  declarations: [
	AppComponent,
	AcceuilComponent,
	InscriptionComponent,
	ConnexionComponent,
	ButtonMat,
	MentionsLegalesComponent

  ],
  exports: [
	  RouterModule
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes),
	ReactiveFormsModule
	
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
