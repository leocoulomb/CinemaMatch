import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-smart-films',
  templateUrl: './smart-films.component.html',
  styleUrls: ['./smart-films.component.scss']
})
export class SmartFilmsComponent implements OnInit {
  parentSubject: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  onClick(status) {
    this.parentSubject.next(status);
  }
}
