import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../metier/movie';

@Component({
  selector: 'movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnInit {

  @Input() movie: Movie;
  @Input() displayModal : boolean;
  @Output() displayModalChange : EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  hideModal(){
    this.displayModalChange.emit(false);
  }

}
