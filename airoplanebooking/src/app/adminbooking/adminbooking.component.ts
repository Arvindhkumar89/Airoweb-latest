import { Component } from '@angular/core';
import { FlaskService } from '../flask.service';
@Component({
  selector: 'app-adminbooking',
  templateUrl: './adminbooking.component.html',
  styleUrls: ['./adminbooking.component.css']
})
export class AdminbookingComponent {
  search:any ={
    num:'',
    time1:''
  }
  bookings:any[] =[]
  flight:string;
  message: string;
  constructor(private auth:FlaskService){}
  submit1(){
    this.auth.send_req('/adminbook', this.search).subscribe(
      (response: any) => {
        if (response) {
          this.bookings = response
        } else {
          console.log(response.message);
          this.message = response.message
          if (this.message ==='Added successfully'){
            console.log(this.message)
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
  

