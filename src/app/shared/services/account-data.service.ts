import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  // Step 1:
  accountName = 'Arun';

  // Step 2: Create BehaviourSubject with default value 
  // for subscribing first
  private myAccount = new BehaviorSubject<any>(this.accountName);

  // Step 3: Create Observable for the BehaviourSubject..
  // so any component can subscribe to it.
  latestAccountName: Observable<any> = this.myAccount.asObservable();
  // latestAccountName is subscribabale

  constructor() { }

  // sending next value over the private variable
  // so components that are subscribing will be getting new value
  updateAccountName( updateableAccountName ) {
    console.log(updateableAccountName);
    this.myAccount.next(updateableAccountName);
  }
}
