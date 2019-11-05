import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient : HttpClient) { 
    
  }

  preconnect() {
    let token = localStorage.getItem('token');
    if(token !== null) {
      const url = "http://34.77.176.92/users/preconnect";
      const header = new HttpHeaders();
      header.set('Authorization', "Bearer " + token);
      header.set
      this.httpClient.post(url, null, {headers: header}).subscribe(
        (response) => {
          if(response['auth'] === true) {
            console.log("Successfully preconnected");
            let username = response['user']['name'];
            let email = response['user']['email'];
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
          } else {
            console.log("Failed to preconnect (non existent token");
            localStorage.removeItem('token');
          }
        },
        (error) => {
          console.log("Failed to preconnect (bad request)");
        }
      );
    } else {
      console.log("No token in localstorage");
    }
  }

  connect(email, password) {
    password = Md5.hashStr(password);

    const url = "http://34.77.176.92/users/connect";
    const body = {
      "email": email,
      "password": password
    }

    this.httpClient.post(url, body).subscribe(
      (response) => {
        let token = response['token'];
        let username = response['userName'];
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  disconnect() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  }

  register(username, email, password) {
    var hashPassword = Md5.hashStr(password);

    const url = "http://34.77.176.92/users/add";
    const parameters = {
      "name": username,
      "email": email,
      "password": hashPassword
    }

    this.httpClient.post(url, parameters).subscribe(
      (response) => {
        console.log(response);
        let token = response['token'];
        if(token !== null) {
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
          localStorage.setItem('email', email);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUsername() : string {
    let username = localStorage.getItem('username');
    return (username !== null) ? username : null;
  }
  getEmail() : string {
    let email = localStorage.getItem('email');
    return (email !== null) ? email : null;
  }
  isConnected() : boolean {
    return (localStorage.getItem('token') !== null);
  }
}
