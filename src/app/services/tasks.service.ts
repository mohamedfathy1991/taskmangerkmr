import { Injectable } from '@angular/core';
import { Task } from '../inteerfaces/task';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:Array<Task>=[

    {title :"1",
    description:"the first task"}
  ]//حددت نوع المصفوفه من نوع تاسك فعملت انترفاس اسمه تاسك وحدته عباره عن ايه

  
  constructor( private route:Router) {

    let datasaved=localStorage.getItem('tasks')
    if(datasaved) {
      this.tasks= JSON.parse(datasaved)

    }else{
      this.tasks=[]
    }
 

   }

  delettask(i:number){
    this.tasks.splice(i,1)
    this.savedall()

  }

  savetask(title:string,description:string){
    this.tasks.push({title:title,
    description:description})
    this.route.navigate(['/home'])
    this.savedall()


  }
  edititem(id:number,task:Task){
    this.tasks[id]=task
    this.route.navigate(['/home'])
   this.savedall()

  }


  savedall(){

  localStorage.setItem('tasks',JSON.stringify(this.tasks))

  
  }
}
