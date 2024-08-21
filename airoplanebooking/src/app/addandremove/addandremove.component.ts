import { Component } from '@angular/core';
import { FlaskService } from '../flask.service';
@Component({
  selector: 'app-addandremove',
  templateUrl: './addandremove.component.html',
  styleUrls: ['./addandremove.component.css']
})
export class AddandremoveComponent {
  search: any = {
    from:'',
    to:'',
    month1:'',
    selectcheck:'',
    time1:''
  };
  addd:any ={
    fn:'',
    an:'',
    fro:'',
    to1:'',
    datee:'',
    dtimee:'',
    atimee:'',
    du:'',
    pri:'',
    fcode:'',
    tocode:'',
    avai:''
  };
  message:string;
  flight: any ={}
  selectkey:string;
  constructor(private auth: FlaskService) {} 
  flightKeys() {
    return Object.keys(this.flight);
  }
  submit(){
    console.log(this.addd)
    console.log(this.search)
    this.auth.send_req('/search1',this.search).subscribe(
      (response: any) => {
        if (response) {
          console.log(response);
          
        } else {
          this.message = response.message
          if (this.message ==='search successfully'){
            // this.router.navigate(['/home']);
            console.log("ddd")
          }
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
    this.auth.send_req('/flight1',{ selectkey: this.selectkey }).subscribe(
      (response: any) => {
        if (response) {
          console.log(response);
          this.flight = response
        } else {
          this.message = response.message
          if (this.message ==='search successfully'){
            // this.router.navigate(['/home']);
            console.log("ddd")
          }
        }
      },
      (error) => {
        console.log('Error:', error);
      }
      
    ); 
    
  }
  showKey(key:string){
    this.selectkey = key;
    this.auth.send_req('/selectedkey1', { selectkey: this.selectkey }).subscribe(
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
    this.auth.send_req('/remove', { selectkey: this.selectkey }).subscribe(
      (response: any) => {
        if (response) {
          this.flight = response
        } else {
          console.log(response.message);
          this.message = response.message
          if (this.message ==='Removed successfully'){
            console.log(this.message)
            this.submit()
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );

  }  
  submit1(){
    this.auth.send_req('/addd', this.addd).subscribe(
      (response: any) => {
        if (response) {
          this.flight = response
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

