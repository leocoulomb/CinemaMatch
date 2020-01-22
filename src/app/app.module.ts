import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReceptionComponent } from './reception/reception.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './utils/footer/footer.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesComponent } from './movies/movies.component';
import { CineteamComponent } from './cineteam/cineteam.component';
import { LegalMentionComponent } from './legal-mention/legal-mention.component';
import { SmartFilmsComponent } from './smart-films/smart-films.component';
import { FilmMatchComponent } from './film-match/film-match.component';
import { FilmCardComponent } from './film-card/film-card.component';

const appRoutes: Routes = [
  { path: '', component: ReceptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cineteam', component: CineteamComponent },
  { path: 'legal-mention', component: LegalMentionComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'smart-movies', component: SmartFilmsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ReceptionComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    MovieCardComponent,
    MoviesComponent,
    CineteamComponent,
    LegalMentionComponent,
    SmartFilmsComponent,
    FilmMatchComponent,
    FilmCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
