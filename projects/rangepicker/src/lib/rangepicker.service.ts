import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Moment } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class RangepickerService {

  private save = new Subject<boolean>();
  constructor() { }

  getSave() {
    return this.save.asObservable();
  }

  setSave() {
    this.save.next(true);
  }
}
