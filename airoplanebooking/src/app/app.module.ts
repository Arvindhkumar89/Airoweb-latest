import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FlaskService } from './flask.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { FlightsComponent } from './flights/flights.component';
import { BookingComponent } from './booking/booking.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { AddandremoveComponent } from './addandremove/addandremove.component';
import { AdminbookingComponent } from './adminbooking/adminbooking.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { MComponent } from './m/m.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AdminloginComponent,
    HomepageComponent,
    SearchpageComponent,
    FlightsComponent,
    BookingComponent,
    MybookingComponent,
    AddandremoveComponent,
    AdminbookingComponent,
    MainhomeComponent,
    MComponent,
    StudentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FlaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
