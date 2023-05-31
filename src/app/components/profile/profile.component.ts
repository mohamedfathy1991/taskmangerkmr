import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';//TO get id  params  from link

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private route:ActivatedRoute , private re:Router){

    console.log(this.route.snapshot.paramMap.get('id'))
    

    //  and get save params 
    this.route.paramMap.subscribe(params=>{
      console.log(params.get('id'))
    })

  }
  home(){
    this.re.navigate(['/my'])
  }

}
