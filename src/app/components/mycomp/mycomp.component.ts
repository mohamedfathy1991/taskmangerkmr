import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent {
  @Input() titles:any


  num = 5 ;
  val= "hello"

  constructor(){

   

    
  }
numb(){
  return 4

 }
// keyup(){
//   console.log(this.val)
// }

keyup(e:any){
  console.log(e.value)
}


}
