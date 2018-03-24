import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class AuthService {
  constructor(private http: Http, private errorService: ErrorService) {
  }

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://node-ng-deployment.herokuapp.com/user', body, {headers: headers})
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error);
        }
      );
  }

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://node-ng-deployment.herokuapp.com/user/signin', body, {headers: headers})
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error);
        }
      );
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}