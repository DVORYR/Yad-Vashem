import { Component, Input, OnInit } from '@angular/core';
import { visitTime } from 'src/app/visitTime';
import { YadVashemService } from 'src/app/yad-vashem.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-show-hours',
  templateUrl: './show-hours.component.html',
  styleUrls: ['./show-hours.component.scss']
})
export class ShowHoursComponent implements OnInit {
  startTime!: string;
  @Input() listVisitHouers!: visitTime[];

  constructor(private servis: YadVashemService) { }
  list: visitTime[] = [];
  morinig: visitTime[] = [];
  afternoon: visitTime[] = [];
  remaining: visitTime[] = [];
  visitorCount!: number;

  ngOnInit(): void {
    this.list = this.listVisitHouers
    this.visitorCount = this.servis.visitorCountCurrent;
  }
  
  onButtonClick(startTime: string) {
    this.servis.startTimeCurrent = startTime;
    this.servis.isAbleTime = true;
    console.log(startTime);
  }
}

