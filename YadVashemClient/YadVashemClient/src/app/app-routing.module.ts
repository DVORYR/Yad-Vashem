import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { VisitingHourComponent } from './component/visiting-hour/visiting-hour.component';
import { ShowHoursComponent } from './component/show-hours/show-hours.component';

const routes: Routes = [
  { path: "", component: HomeComponent,
  children: [
    { path: "VisitingHour", component: VisitingHourComponent},
    { path: 'ShowHours', component: ShowHoursComponent }
]},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



