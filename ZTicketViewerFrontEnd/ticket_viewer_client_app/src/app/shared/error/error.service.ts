import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  private _message: any;
  private _status: number;

  constructor() { }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }
  get message(): any {
    return this._message;
  }

  set message(value: any) {
    this._message = value;
  }

  reset() {
    this._message = null;
    this._status = null;
  }
}
