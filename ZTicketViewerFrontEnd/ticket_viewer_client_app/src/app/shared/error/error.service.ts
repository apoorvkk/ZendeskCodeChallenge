import { Injectable } from '@angular/core';

/*
Used to store any error related messages so that when the error component is displayed,
the message here is used.
 */
@Injectable()
export class ErrorService {

  private _message: string;

  constructor() { }

  get message(): any {
    return this._message;
  }

  set message(value: any) {
    this._message = value;
  }

  reset() {
    this._message = null;
  }
}
