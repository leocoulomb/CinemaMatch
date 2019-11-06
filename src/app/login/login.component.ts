import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private sessionService : SessionService) {}

  ngOnInit() {

  }

  onSubmit(form : NgForm) {
    this.sessionService.disconnect();
    this.sessionService.connect("thomas@gmail.com", "password").then(() => {
        //console.log(this.sessionService.getUsername());
        //console.log(this.sessionService.getEmail());
        console.log("Connecté");

        this.sessionService.preconnect().then(() => {
          console.log("preconnexion");
        }).catch(() => {
          console.log("echec preconnexion");
        });
    }).catch(() => {
        console.log("Pas de connexion");
    });
  }
}
