import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private session : SessionService, private router : Router) { }

  ngOnInit() {
    this.loadScript('../assets/js/slick.min.js');
    this.loadScript('../assets/js/slider.js');
    
    this.session.preconnect()
    .then((response) => {
      
    })
    .catch((error) => {
      console.log('try to access home but could not preconnect');
      this.router.navigateByUrl('/');  
    });
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
