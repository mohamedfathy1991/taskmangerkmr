import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Task } from 'src/app/inteerfaces/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  
 
})

export class TaskComponent implements OnInit {


  taskid :any;
  tasks: any
  
  constructor(private route: ActivatedRoute,private title:Title
     ,private taskserv:TasksService){
    //   this.route.paramMap.subscribe(param=>{
    //      this.taskid = param.get('id') 
    //   })
      this.taskid= this.route.snapshot.paramMap.get('id')
     this.title.setTitle('tasks show')



  }
  ngOnInit() {

    setTimeout(()=>{
      this.tasks=this.taskserv.tasks[this.taskid]


    },1000)
    
  }
  delettaskitem(){
    this.taskserv.delettask(this.taskid)

  }
  editsave(){
    console.log(this.tasks)
    this.taskserv.edititem(this.taskid,this.tasks)
  }

}
