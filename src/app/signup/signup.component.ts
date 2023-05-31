import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder, Form} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // sinupform =new FormGroup({
  //   name: new FormControl(null,Validators.compose([Validators.required,Validators.minLength(3)]))
  // })
  sinupform:any
  constructor(private fs:FormBuilder){

    this.sinupform=this.fs.group({name:["",Validators.compose([
      Validators.required,
       Validators.email
    ])]})


  }
  omar(name:string){
    console.log(name)
  }

}
