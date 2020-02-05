import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  readonly KW_token = 'token';
  readonly KW_url = "http://34.77.176.92/users/";
  readonly KW_url_preconnect = this.KW_url + "preconnect";
  readonly KW_url_connect = this.KW_url + "connect";
  readonly KW_url_disconnect = this.KW_url + "disconnect";
  readonly KW_url_register = this.KW_url + "add";
  readonly KW_url_delete = this.KW_url + "";
  readonly KW_url_update = this.KW_url + "";
  readonly KW_username = 'username';
  readonly KW_email = 'email';
  readonly KW_password = 'password';

  constructor(private communication : CommunicationService) { 
    
  }

  /**
   * Helper function
   */
  public buildAuthentificationHeader() {
    return {
      'Authorization': "bearer " + this.getToken()
    };
  }

  /**
   * Try to connect a user based on the previously saved token.
   * Important to keep coherency between pages.
   */
  public preconnect() {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem(this.KW_token);
      if(token !== null) {
        const header = this.buildAuthentificationHeader();
        this.communication.post(this.KW_url_preconnect, null, header)
        .then((response) => {
          this.setUsername(response['user']['name']);
          this.setEmail(response['user']['email']);
          resolve(null);
        })
        .catch((error) => {
          reject(error);
        });
      } else {
        reject("No token stored");
      }
    });
  }

  /**
   * Connect one user
   * @param email 
   * @param password 
   */
  public connect(email, password) {
    const body = {
      'email': email,
      'password': Md5.hashStr(password)
    }

    return new Promise((resolve, reject) => {
      this.communication.post(this.KW_url_connect, null, body)
      .then((response) => {
        this.setUsername(response['userName']);
        this.setEmail(response['email']);
        this.setToken(response['token']);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Create new user
   * @param username 
   * @param email 
   * @param password 
   */
  public register(username, email, password) {

    const body = {
      'name': username,
      'email': email,
      'password': Md5.hashStr(password)
    }

    return new Promise((resolve, reject) => {
      this.communication.post(this.KW_url_register, null, body)
      .then((response) => {
        this.setUsername(response['username']);
        this.setEmail(response['email']);
        this.setToken(response['token']);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Delete current user
   */
  public delete() {
    const header = this.buildAuthentificationHeader();
    return new Promise((resolve, reject) => {
      this.communication.delete(this.KW_url_delete, header)
      .then((response) => {
        this.disconnect();
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Update current user name
   * @param newName 
   */
  public updateName(newName) {
    return this.update('name', newName, 'name', (value) => {
      this.setUsername(value);
    });
  }
  /**
   * Update current user email
   * @param newEmail 
   */
  public updateEmail(newEmail) {
    return this.update('email', newEmail, 'email', (value) => {
      this.setEmail(value);
    });
  }
  /**
   * Update current user password
   * @param newPassword 
   */
  public updatePassword(newPassword) {
    return this.update('password', Md5.hashStr(newPassword), 'password', (value) => {
      // Le mot de passe n'est pas stocké en local, inutile de le changer
    });
  }

  /**
   * Update server side user information
   * @param param 
   * @param value 
   * @param paramName 
   * @param call 
   */
  private update(param, value, paramName, call) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem(this.KW_token);
      if(token !== null) {
        const header = this.buildAuthentificationHeader();
        let body = {};
        body[param] = value;

        this.communication.post(this.KW_url_update, header, body)
        .then((response) => {
          if(response.hasOwnProperty('userPatched') && response.hasOwnProperty('token')) {
            this.setToken(response['token']);

            call(response['userPatched'][paramName]);
            //Password is returned but it is useless
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
      } else {
        reject("No token stored");
      }
    });
  }

  /**
   * Remove the token and user informations for local storage
   */
  public disconnect() {
    localStorage.removeItem(this.KW_token);
    localStorage.removeItem(this.KW_username);
    localStorage.removeItem(this.KW_email);
  }

  /**
   * Current user getter
   */
  public getUsername() : string {
    let username = localStorage.getItem(this.KW_username);
    return (username !== null) ? username : null;
  }
  /**
   * Current username setter, may be useless
   * @param username 
   */
  private setUsername(username) {
    localStorage.setItem(this.KW_username, username);
  }
  /**
   * Current email getter
   */
  public getEmail() : string {
    let email = localStorage.getItem(this.KW_email);
    return (email !== null) ? email : null;
  }
  /**
   * Current email setter, may be useless
   * @param email 
   */
  private setEmail(email) {
    localStorage.setItem(this.KW_email, email);
  }
  /**
   * Get the token, might be useless
   */
  public getToken() : string {
    let token = localStorage.getItem(this.KW_token);
    return (token !== null) ? token : null;
  }
  /**
   * Set the token, might be useless
   * @param token 
   */
  public setToken(token) {
    localStorage.setItem(this.KW_token, token);
  }
  /**
   * True if a user is connected
   */
  public isConnected() : boolean {
    return (localStorage.getItem(this.KW_token) !== null);
  }
}
