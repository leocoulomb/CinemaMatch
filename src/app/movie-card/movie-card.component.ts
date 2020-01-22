import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../metier/movie';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  
  @Input() movie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
