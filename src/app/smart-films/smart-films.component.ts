import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { MoviesService } from '../movies.service';
import { Movie } from '../metier/movie';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-films',
  templateUrl: './smart-films.component.html',
  styleUrls: ['./smart-films.component.scss']
})
export class SmartFilmsComponent implements OnInit {

  movies : Array<Movie>;
  isLiked: boolean;
  isViewed: boolean;
  showVar: boolean = false;
  selectedMovie: Movie;

  constructor(private router : Router, private session : SessionService, private moviesService : MoviesService) { }


  ngOnInit() {

    this.moviesService.generateMovieList() 
    .then((value) => {
      this.movies = this.moviesService.avgRating(value['movies']);
    });
  }

  showModal(movie) {
    this.isLiked = false;
    this.isViewed = false;

    this.moviesService.getIsLikedMovie(movie._id)
      .then((value) => {
        this.isLiked = value['liked'];
        this.isViewed = value['viewed'];
        this.showVar = true;
        this.selectedMovie = movie;
      })
      .catch((error) => {
      })
  }
}
