import { Component } from '@angular/core';
import { FlaskService } from '../flask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  login: any = {
    email: '', 
    password: '',
   };
   emessage:string;
   message:string;
   constructor(private auth: FlaskService,private router:Router) {} 
 
   submit() {
     console.log('submitted');
     console.log(this.login);
     this.auth.send_req('/admin',this.login).subscribe(
       (response: any) => {
         if (response.error) {
           this.emessage =response.error
           console.log(response.error);
         } else {
           this.message = response.message
           if (this.message ==='login successfully'){
             this.router.navigate(['/add']);
           }
         }
       },
       (error) => {
         console.log(error);
       }
     );
   }
 }

