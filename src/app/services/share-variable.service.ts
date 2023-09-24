import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareVariableService {
  sharedData: any;

  constructor() { }

  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData() {
    return this.sharedData;
  }
}