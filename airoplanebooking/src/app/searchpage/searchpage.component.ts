import { Component } from '@angular/core';
import { FlaskService } from '../flask.service'; 
@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent {
  search: any = {
    from:'',
    to:'',
    month1:'',
    selectcheck:'',
    time1:''
  };
  message:string;
  constructor(private auth: FlaskService) {} 
  submit(){
    console.log(this.search)
    this.auth.send_req('/search',this.search).subscribe(
      (response: any) => {
        if (response.error) {
          console.log(response.error);
        } else {
          this.message = response.message
          if (this.message ==='search successfully'){
            console.log("ddd")
          }
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
