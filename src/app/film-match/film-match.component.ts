import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
//import * as kf from '../smart-films/keyframes';
import { Subject } from 'rxjs';

export interface Film {
  id: number;
  poster: string;
  title: string;
  genre: string;
}

@Component({
  selector: 'app-film-match',
  templateUrl: './film-match.component.html',
  styleUrls: ['./film-match.component.scss'],
  //animations: [
  //  trigger('cardAnimator', [
  //    transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
  //    transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
  //  ])
  //]
})
export class FilmMatchComponent implements OnInit {
  public films: Film[] = [
    {
      "id": 0,
      "poster": "https://placehold.it/350x349",
      "title": "Film1",
      "genre": "lol"
    },
    {
        "id": 1,
        "poster": "https://placehold.it/350x349",
        "title": "Film2",
        "genre": "pas lol"
    },
    {
        "id": 2,
        "poster": "https://placehold.it/350x349",
        "title": "Film3",
        "genre": "cafépeur"
    }
];
  public index = 0;
  @Input()
  parentSubject: Subject<any>;

  animationState: string;

  constructor() { }

  ngOnInit() {
    this.parentSubject.subscribe(status => {
      this.index++
      if(this.index >= this.films.length) this.index = 0
    });
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }
}
