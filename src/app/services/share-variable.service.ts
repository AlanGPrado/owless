import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShareVariableService {
  sharedData: any;
  private showImageSubject = new BehaviorSubject<boolean>(true);
  showImage$ = this.showImageSubject.asObservable();

  constructor() { }

  // SHARE VARIABLES
  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData() {
    return this.sharedData;
  }

  // SHARE STATES
  toggleImage() {
    this.showImageSubject.next(!this.showImageSubject.value);
  }
}
