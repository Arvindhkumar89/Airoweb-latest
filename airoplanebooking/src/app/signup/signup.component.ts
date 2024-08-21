import { Component } from '@angular/core';
import { FlaskService } from '../flask.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'frontend';
  signup: any = {
    username: '',
    email: '',
    password: '',
  };
  message:string
  em:string;
  constructor(private auth: FlaskService,private router:Router) {} 
  submit() {
    console.log('submitted');
    console.log(this.signup);
    this.auth.send_req('/',this.signup).subscribe(
      (response: any) => {
        if (response.error) {
          this.em =response.error
          console.log(response.error);
        } else {
          this.message = response.message
          if (this.message ==='signup successfully'){
            this.router.navigate(['/home']);
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

