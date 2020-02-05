import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  readonly KW_errorMsg = 'errorMsg';

  constructor(private httpClient: HttpClient) { }

  /**
   * Factorization function for post api request.
   * @param url 
   * @param header 
   * @param body 
   */
  public post(url, header, body) {
    const httpHeader = new HttpHeaders(header);
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, body, { headers: httpHeader }).subscribe(
        (response) => {
          if (response.hasOwnProperty(this.KW_errorMsg)) {
            reject(response[this.KW_errorMsg]);
          } else {
            resolve(response);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  /**
   * Factorization function for get api request.
   * @param url 
   * @param header 
   */
  public get(url, header) {
    const httpHeader = new HttpHeaders(header);
    return new Promise((resolve, reject) => {
      this.httpClient.get(url, { headers: httpHeader }).subscribe(
        (response) => {
          if (response.hasOwnProperty(this.KW_errorMsg)) {
            reject(response[this.KW_errorMsg]);
          } else {
            resolve(response);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  /**
   * Factorization function for delete api request.
   * @param url 
   * @param header 
   */
  public delete(url, header) {
    const httpHeader = new HttpHeaders(header);
    return new Promise((resolve, reject) => {
      this.httpClient.delete(url, { headers: httpHeader }).subscribe(
        (response) => {
          if (response.hasOwnProperty(this.KW_errorMsg)) {
            reject(response[this.KW_errorMsg]);
          } else {
            resolve(response);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
