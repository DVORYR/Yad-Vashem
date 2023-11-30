import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VisitingHourComponent } from './component/visiting-hour/visiting-hour.component';
import { ShowHoursComponent } from './component/show-hours/show-hours.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { YadVashemService } from './yad-vashem.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NumberInputComponent } from './component/home/NumberInputComponent';
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitingHourComponent,
    ShowHoursComponent,
    // NumberInputComponent
  ],
  imports: [
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonToggleModule,
  ],
  providers: [YadVashemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

