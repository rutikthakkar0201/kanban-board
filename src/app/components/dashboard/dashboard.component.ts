import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  newAddedData!: string;
  isAddNewModalShown!: string;
  iconBoxList: any = [];
  pendingList: any = [];
  wipList: any = [];
  reviewList: any = [];
  doneList: any = [];
  ngUnsubscribe = new Subject();
  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.getIceBoxList();
    this.getPendingList();
    this.getWipList();
    this.getReviewList();
    this.getDoneList();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getIceBoxList() {
    this.commonService
      .getIceBoxList()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.iconBoxList = res;
      });
  }

  getPendingList() {
    this.commonService
      .getPendingList()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.pendingList = res;
      });
  }

  getWipList() {
    this.commonService
      .getWipList()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.wipList = res;
      });
  }

  getReviewList() {
    this.commonService
      .getReviewList()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.reviewList = res;
      });
  }

  getDoneList() {
    this.commonService
      .getDoneList()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.doneList = res;
      });
  }

  insertCard(value: string) {
    this.isAddNewModalShown = '';
    switch (true) {
      case value === 'iceBox': {
        const data = { name: this.newAddedData };
        this.iconBoxList.push(data);
        break;
      }
      case value === 'pending': {
        const data = { name: this.newAddedData };
        this.pendingList.push(data);
        break;
      }
      case value === 'wip': {
        const data = { name: this.newAddedData };
        this.wipList.push(data);
        break;
      }
      case value === 'review': {
        const data = { name: this.newAddedData };
        this.reviewList.push(data);
        break;
      }
      case value === 'done': {
        const data = { name: this.newAddedData };
        this.doneList.push(data);
        break;
      }
    }
  }

  public addTaskDetail(data: string) {
    this.isAddNewModalShown = data;
  }

  cancelData() {
    this.newAddedData = '';
    this.isAddNewModalShown = '';
  }
}
