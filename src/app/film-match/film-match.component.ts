import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import { Subject } from 'rxjs';
import { MoviesService } from '../movies.service';

export interface Film {
  id: number;
  poster: string;
  title: string;
  genre: string;
}

@Component({
  selector: 'app-film-match',
  templateUrl: './film-match.component.html',
  styleUrls: ['./film-match.component.scss']
})
export class FilmMatchComponent implements OnInit {
  public films: Film[] = [
    {
      "id": 0,
      "poster": "https://www.benefsnet.com/images/cms/film.gif",
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

  private votes: { [id: string] : string; } = {};

  constructor(private moviesService : MoviesService) { }

  ngOnInit() {
    this.votes = {}
    this.parentSubject.subscribe(status => {
      this.votes[this.films[this.index].id] = status
      this.index++
      if(this.index >= this.films.length) {
        this.index = 0
        this.saveInformation() 
      }
    });
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }

  saveInformation() {
    console.log(this.votes)
    for(let [id, status] of Object.entries(this.votes)) {
      if (status === 'like') {
        this.moviesService.swapView(id);
        this.moviesService.swapLike(id);
      } else if (status === 'dislike') {
        this.moviesService.swapView(id);
      } else if (status === 'unseen') {
        
      }
    }
    this.votes = {}
  }
}
