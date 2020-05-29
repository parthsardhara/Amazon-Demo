import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private mainOrder: Subject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  public triggerObservable(): Observable<any> {
    return this.mainOrder.asObservable();
  }

  public nextTriggerObservable(value) {
    this.mainOrder.next(value);
  }
  
}
