import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../metier/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnInit {

  @Input() movie: Movie;
  @Input() displayModal: boolean;
  @Input() isLiked: boolean;
  @Input() isViewed: boolean;
  @Output() displayModalChange: EventEmitter<any> = new EventEmitter();
  movieViewed: Array<Movie>;


  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    // this.movieService.getViewedMovies()
    //   .then((value) => {
    //     console.log(value);
    //     this.movieViewed = value['moviesViewed'];
    //   })
    //   .catch((error) => {
    //   })
  }

  hideModal() {
    this.displayModalChange.emit(false);
  }

  toggleView(movie_id) {
    // this.movieService.swapView(movie_id)
    // .then((value) => {
    //   console.log(value);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    this.isViewed = !this.isViewed;

  }

  toggleLike(movie_id) {
    // this.movieService.swapLike(movie_id)
    //   .then((value) => {
    //       console.log(value);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    this.isLiked = !this.isLiked;
  }

}
