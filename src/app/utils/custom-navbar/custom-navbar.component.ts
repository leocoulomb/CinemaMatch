import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.scss']
})
export class CustomNavbarComponent implements OnInit {

  constructor(private session: SessionService, private router : Router) { }

  ngOnInit() {
  }

  onDisconnect() {
    this.session.disconnect();
    this.router.navigateByUrl('/');
  }
}
