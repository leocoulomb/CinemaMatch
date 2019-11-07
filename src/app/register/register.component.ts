import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private sessionService : SessionService) { }

  ngOnInit() {
  }

  onSubmit(f) {
    //this.sessionService.register("thomas", "thomas@gmail.com", "password");
    //this.sessionService.connect("thomas@gmail.com", "password");
    this.sessionService.preconnect();
  }
}
