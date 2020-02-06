import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';



export enum KEY_CODE {
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  RIGHT_ARROW = 39
}

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})



export class QuizzComponent implements OnInit {

  parentSubject: Subject<string> = new Subject();
  film: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(status) {
    this.parentSubject.next(status);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.onClick("like");
    }

    if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.onClick("unseen");
    }
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.onClick("dislike");
    }

  }
}
