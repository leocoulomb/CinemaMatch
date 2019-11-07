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
    this.sessionService.preconnect().then(() => {
      console.log("preconnected");
    }).catch(() => {
        console.log("Failed to preconnect, try to connect...");
        this.sessionService.connect("thomas@gmail.com", "password").then(() => {
          console.log("Connecté");
      }).catch(() => {
          console.log("Pas de connexion");
      });
    });    
  }
}
