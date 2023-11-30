import { Component, HostListener, OnInit, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
//import { visitTime } from 'src/app/visitTime';
import { YadVashemService } from 'src/app/yad-vashem.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myNumber: number = 0;
  valueInput!: number;
  valueService!: number
  shouldRenderVisitingHour: boolean = true;

  constructor(private servis: YadVashemService, private myRouter: Router,private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
  }

  saveVisitorsCount() {
    if (this.valueInput !== 0) {
      this.servis.visitorCountCurrent = this.valueInput;
      this.valueService = this.servis.visitorCountCurrent;
    }
    this.shouldRenderVisitingHour = !this.shouldRenderVisitingHour;
    console.log("current value", this.valueInput);
  }
  onEditFieldTouched() {
    this.servis.flagValue = true;
    this.cdr.detectChanges();

  }

  // @Output() valueChange = new EventEmitter<number>();

  // increment() {
  //   this.valueInput++;
  //   this.emitValueChange();
  // }

  // decrement() {
  //   this.valueInput--;
  //   this.emitValueChange();
  // }

  // private emitValueChange() {
  //   this.valueChange.emit(this.valueInput);

  // }
}
