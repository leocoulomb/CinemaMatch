import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  	selector: 'app-connexion',
  	templateUrl: './connexion.component.html',
  	styleUrls: ['./connexion.component.scss'],

})
export class ConnexionComponent implements OnInit {
  	angForm: FormGroup;
  	constructor(private fb: FormBuilder) {
  	  	this.createForm();
  	}
  	createForm() {
  	   this.angForm = this.fb.group({
  	    	email: ['', Validators.required],
  	    	password: ['', Validators.required]
  	   })
  	}
  	@Input() route : string = "/";
  	ngOnInit() {}
  	verifConnection(){
  	  //if (user exists) {
  	    //this.route = "/acceuilApresConnexion";
  	  //} else {
  	    //this.route = "/connexion";
  	    //alert("Mot de passe ou adresse mail incorrecte");
  	  //}
  	  	console.log(this.angForm.value)
  	}

}
