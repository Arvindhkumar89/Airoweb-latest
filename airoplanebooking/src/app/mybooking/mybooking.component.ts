import { Component } from '@angular/core';
import { FlaskService } from '../flask.service';
@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent {
  message:string;
  text:string
  mybookings:any[] =[]
  constructor(private auth:FlaskService){}
  ngOnInit():void{
    this.auth.send_req('/mybook',this.text).subscribe(
      (response: any) => {
        if (response) {
          console.log(response);
          this.mybookings = response
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
}