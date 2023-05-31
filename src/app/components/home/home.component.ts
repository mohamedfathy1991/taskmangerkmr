import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/inteerfaces/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit   {
 tasks:Array<Task>=[]
 
   
  constructor( private taskserv:TasksService){
    // this.tasks=this.taskserv.tasks

  }

  delettask(i:number){
    this.taskserv.delettask(i)

  }

  ngOnInit() {
     this.tasks=this.taskserv.tasks
    
  }
 


}
