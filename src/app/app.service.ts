import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'https://chatapi.edwisor.com';

  constructor(public http: HttpClient, public cookie : CookieService) {

  }// end constructor

  public getUserInfoFromLocalStorage = () => {

    return JSON.parse(localStorage.getItem('user Info'));
  }// end getUserInfoFromLocalstorage

  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('user Info', JSON.stringify(data))
  }// end setUserInLocalstorage


  public signupFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('moblie', data.mobile)
      .set('email', data.email)
      .set('password', data.password)
      .set('apiKey', data.apiKey);

    return this.http.post(`${this.url}/api/v1/users/signup`, params);

  }// end of signupFunction function.

  public signinFunction(data): Observable<any> {

    const params = new HttpParams()

      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/login`, params)

  }// end of signinFunction function.

  public logout(): Observable <any>{
    const params = new HttpParams()
    .set('authToken',this.cookie.get('authtoken'))
    return this.http.post(`${this.url}/api/v1/users/logout`,params);
  }// end logout function



  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

}


