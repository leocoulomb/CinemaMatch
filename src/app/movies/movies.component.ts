import { Component, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { Movie } from '../metier/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Array<Movie>;
  p: number = 1;
  displaymodal: boolean;
  showVar: boolean = false;
  selectedMovie: Movie;
  movieViewed: Array<Movie>;
  isLiked: boolean;
  isViewed: boolean;

  @Output() movie: Movie;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getRandomMovie(50) //.getMovies(10, 15)
      .then((value) => {
        this.movies = this.moviesService.avgRating(value);
      });
   
  }

  showModal(movie) {
    this.isLiked = false;
    this.isViewed = false;

    this.moviesService.getIsLikedMovie(movie._id)
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
      })
    // this.movieViewed.forEach(element => {
    //   if (movie._id == element._id)
    //     this.isViewed = true;
    // });
    // this.showVar = true;
    // this.selectedMovie = movie;
  }

}