import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  iceboxList = [
    { id: 1, name: 't1' },
    { id: 2, name: 't2' },
    { id: 3, name: 't3' },
  ];

  pendingList = [
    { id: 1, name: 'p1' },
    { id: 2, name: 'p2' },
    { id: 3, name: 'p3' },
  ];

  wipList = [
    { id: 1, name: 'w1' },
    { id: 2, name: 'w2' },
    { id: 3, name: 'w3' },
  ];

  reviewList = [
    { id: 1, name: 'r1' },
    { id: 2, name: 'r2' },
    { id: 3, name: 'r3' },
  ];

  doneList = [
    { id: 1, name: 'd1' },
    { id: 2, name: 'd2' },
    { id: 3, name: 'd3' },
  ];

  getIceBoxList() {
    return of(this.iceboxList);
  }

  getPendingList() {
    return of(this.pendingList);
  }

  getWipList() {
    return of(this.wipList);
  }

  getReviewList() {
    return of(this.reviewList);
  }

  getDoneList() {
    return of(this.doneList);
  }
}
