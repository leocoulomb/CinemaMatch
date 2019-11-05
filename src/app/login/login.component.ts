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
    this.sessionService.connect("noe.barbosa@gmail.com", "password");
    console.log("done");
    //this.sessionService.connect(form.controls['username'].value, form.controls['password'].value);
  }
}
