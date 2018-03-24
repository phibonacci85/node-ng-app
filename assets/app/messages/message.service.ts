import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class MessageService {
  private messages: Message[] = [];
  messageIsEdit = new EventEmitter<Message>();

  constructor(private http: Http, private errorService: ErrorService) {
  }

  addMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.post('https://node-ng-deployment.herokuapp.com/message' + token, body, {headers: headers})
      .map(
        (response: Response) => {
          const result = response.json();
          const message = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
          this.messages.push(message);
          return message;
        }
      )
      .catch(
        (error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error);
        }
      );
  }

  getMessages() {
    return this.http.get('https://node-ng-deployment.herokuapp.com/message')
      .map(
        (response: Response) => {
          const messages = response.json().obj;
          let transformedMessages: Message[] = [];
          for(let message of messages) {
            transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
          }
          this.messages = transformedMessages;
          return transformedMessages;
        }
      )
      .catch(
        (error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error);
        }
      );
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  updateMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.patch('https://node-ng-deployment.herokuapp.com/message/' + message.messageId + token, body, {headers: headers})
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

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.delete('https://node-ng-deployment.herokuapp.com/message/' + message.messageId + token)
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
}