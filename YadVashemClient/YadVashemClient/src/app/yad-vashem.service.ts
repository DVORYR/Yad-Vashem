import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { visitTime } from './visitTime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YadVashemService {
  visitorCountCurrent!: number;
  startTimeCurrent!: string;
  isAbleVisitorsCount:boolean = false;
  isAbleTime:boolean = false;
  list: visitTime[] = [];
 flagValue:boolean=false;

  constructor(private http: HttpClient) {
  }
  API: string = 'https://localhost:7243/';
  GetVisitsTime(): Observable<visitTime[]> {
    return this.http.get<visitTime[]>(`${this.API}GetVisitsTime`)
  }

  UpdateVisitTime
    (): Observable<any> {
    return this.http.put<any>(`${this.API}UpdateVisitTime/${this.startTimeCurrent}`, this.visitorCountCurrent);
  }
  //  checkVisitTimeStatus(listVisitTime:visitTime[]) {
  //   for (const visitTime of listVisitTime) {
  //     if (visitTime.availablePlaces == 0) {
  //       return "אזלו";
  //     } else if (visitTime.isClosed) {
  //       return "סגור";
  //     } else {
  //       this.flag = true;
  //       return `${visitTime.availablePlaces}`;
  //     }
  //   }
  //   return "null"

  // }
  // getFlag() {
  //   return this.flag;
  // }

  // getResultMessage() {
  //   return this.resultMessage;
  // }
}


//לעשות פונקציית עידכון שתואמת לבק
