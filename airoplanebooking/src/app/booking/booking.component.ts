import { Component } from '@angular/core';
import { FlaskService } from '../flask.service'; 
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  text: string = '';
  // confirm : string = 'c';
  confirm : any ={
    confirm1:'c',
    name1:'',
    mobile:'',
    email:''
  }
  flight:any = {}
  message:string
  constructor(private auth: FlaskService) {} 
  ngOnInit(): void{
    console.log(this.text)
    this.auth.send_req('/book',this.text).subscribe(
      (response: any) => {
        if (response) {
          console.log(response);
          this.flight = response
        } else {
          this.message = response.message
          if (this.message ==='search successfully'){
           
          }
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
  submit(){
    this.auth.send_req('/confirm', this.confirm).subscribe(
      (response: any) => {
        if (response) {
          console.log(response);
        } else {
          this.message = response.message
          if (this.message ==='search successfully'){
            
          }
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}