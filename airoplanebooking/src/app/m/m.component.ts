import { Component } from '@angular/core';
import { FlaskService } from '../flask.service';
@Component({
  selector: 'app-m',
  templateUrl: './m.component.html',
  styleUrls: ['./m.component.css']
})
export class MComponent {
  stud:any={
    name1:'',
    pass:''
  }
  constructor(private auth:FlaskService){}
  submit(){
    console.log(this.stud)
    this.auth.send_req('/m',this.stud).subscribe()
  }
}
