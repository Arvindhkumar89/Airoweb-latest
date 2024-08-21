import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { FlightsComponent } from './flights/flights.component';
import { BookingComponent } from './booking/booking.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { AddandremoveComponent } from './addandremove/addandremove.component';
import { AdminbookingComponent } from './adminbooking/adminbooking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { MComponent } from './m/m.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'', component:MainhomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'admin', component:AdminloginComponent},
  {path:'search', component:SearchpageComponent},
  {path:'flight', component:FlightsComponent},
  {path:'book', component:BookingComponent},
  {path:'mybook', component:MybookingComponent},
  {path:'add',component:AddandremoveComponent},
  {path:'adminbook', component:AdminbookingComponent},
  {path:'home',component:HomepageComponent},
  {path:'stud', component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
