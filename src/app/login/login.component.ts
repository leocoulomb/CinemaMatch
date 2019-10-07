import { Component, OnInit, Output, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = 'Connexion';
  login: string = '';
  pwd: string = '';

  getVisiteurByLogin(): void {


  }
  submitLoginForm(): void {
    this.getVisiteurByLogin();
  }

}
