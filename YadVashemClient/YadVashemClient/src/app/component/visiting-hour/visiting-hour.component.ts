import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { visitTime } from 'src/app/visitTime';
import { YadVashemService } from 'src/app/yad-vashem.service';


@Component({
  selector: 'app-visiting-hour',
  templateUrl: './visiting-hour.component.html',
  styleUrls: ['./visiting-hour.component.scss']
})
export class VisitingHourComponent implements OnInit {


  constructor(private servis: YadVashemService,
    private myRouter: Router,

  ) { }
  listVisitTime: visitTime[] = [];
  morningList: visitTime[] = [];
  afternoonList: visitTime[] = [];
  remainingList: visitTime[] = [];
  flag: boolean = false;
  countAvailablePlaces!:number
  today: Date = new Date();

  

  ngOnInit(): void {
    this.GetVisitsTime();
  }
  GetVisitsTime() {
    this.servis.GetVisitsTime().subscribe((data: visitTime[]) => {
      this.listVisitTime = data;
      // this.morningList = data;
      this.servis.list = data;
      this.flag = true;
      console.log(data);
      console.log(this.listVisitTime);
      this.divideListIntoTimeRanges()
    }
    )
  }
  divideListIntoTimeRanges() {
    this.morningList = this.listVisitTime.filter(visitTime => {
      const startTimeMillis = Date.parse(`2000-01-01 ${visitTime.startTime}`);
      const morningStartMillis = Date.parse("2000-01-01 08:00");
      const morningEndMillis = Date.parse("2000-01-01 12:00");
      return startTimeMillis >= morningStartMillis && startTimeMillis < morningEndMillis;
    });


    this.afternoonList = this.listVisitTime.filter(visitTime => {

      const startTimeMillis = Date.parse(`2000-01-01 ${visitTime.startTime}`);
      const morningStartMillis = Date.parse("2000-01-01 12:00");
      const morningEndMillis = Date.parse("2000-01-01 15:00");
      return startTimeMillis >= morningStartMillis && startTimeMillis < morningEndMillis;
    });

    this.remainingList = this.listVisitTime.filter(visitTime => {

      const startTimeMillis = Date.parse(`2000-01-01 ${visitTime.startTime}`);
      const morningStartMillis = Date.parse("2000-01-01 15:00");
      const morningEndMillis = Date.parse("2000-01-01 17:00");
      return startTimeMillis >= morningStartMillis && startTimeMillis < morningEndMillis;
    });

    console.log('Morning List:', this.morningList);
    console.log('Afternoon List:', this.afternoonList);
    console.log('Remaining List:', this.remainingList);
  }
//  this.countAvailablePlaces= calculateTotalAvailablePlaces(): number {
//     return this.listVisitTime.reduce((total, slot) => total + slot.availablePlaces, 0);
  


  continueOrder() {
    this.servis.UpdateVisitTime().subscribe(data => {
      this.servis.list = data;
      console.log(data);
      this.GetVisitsTime();
      this.servis.flagValue=false;
      alert(`ההזמנה ל ${this.servis.visitorCountCurrent} לשעה ${this.servis.startTimeCurrent} התבצעה בהצלחה`);
      this.myRouter.navigate(['/']);
    },
    )

  }

}
