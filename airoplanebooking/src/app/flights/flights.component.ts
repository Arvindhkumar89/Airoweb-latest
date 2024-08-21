import { Component } from '@angular/core';
import { FlaskService } from '../flask.service';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {
  text='hi'
  message:string;
  selectkey:string;
  flight: any = {};
  constructor(private auth: FlaskService) {} 
  flightKeys() {
    return Object.keys(this.flight);
  }
  isFlightEmpty(): boolean {
    return Object.keys(this.flight).length === 0;
  }
  showKey(key:string){
    this.selectkey = key;
    this.auth.send_req('/selectedkey', { selectkey: this.selectkey }).subscribe(
      (response: any) => {
        if (response) {
          console.log(response.selectkey);
        } else {
          console.log(response.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  ngOnInit():void{
    console.log(this.text)
    this.auth.send_req('/flight',{ selectkey: this.selectkey }).subscribe(
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
  


}