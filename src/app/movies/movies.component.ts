import { Component, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import { Movie } from '../metier/movie';
import { SessionService } from '../session.service';

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
  range: number;
  gender: string;

  @Output() movie: Movie;

  constructor(private route: ActivatedRoute, private session: SessionService, private router: Router, private moviesService: MoviesService) {
    route.params.subscribe(val => {
      this.route.snapshot.paramMap.get('gender') == 'all' ? this.gender = null : this.gender = this.route.snapshot.paramMap.get('gender')
      this.loadMovie(150, this.gender);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(val => {
      this.route.snapshot.paramMap.get('gender') == 'all' ? this.gender = null : this.gender = this.route.snapshot.paramMap.get('gender')
      this.loadMovie(150, this.gender);
    });
    this.range = 5;


  }

  loadMovie(nb = 15, gender) {
    this.moviesService.getMovies(10, nb, gender).subscribe(value => this.movies = this.moviesService.avgRating(value['movies']));
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

  searchMovie(query) {
    if (query.length < 4) {
      this.loadMovie(150, null);
      return;
    }
    this.moviesService.getMovieByTitle(query).subscribe((value) => {
      this.movies = this.moviesService.avgRating(value['movies']);
    })
  }


  slide(event) {
    let slideValue = event.target.value;
    //Traitement lors du slide
  }
}