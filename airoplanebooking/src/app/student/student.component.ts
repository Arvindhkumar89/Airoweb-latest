import { Component } from '@angular/core';
import { FlaskService } from '../flask.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  constructor(private auth:FlaskService){}
  detail:any ={
    name1:'',
    class1:''
  }
  message: any;
  submit(){
    console.log(this.detail)
    this.auth.send_req('/stud',this.detail).subscribe(
      (response:any)=>{
        this.message = response  
      }
    )
  }
}
