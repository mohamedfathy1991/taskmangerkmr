import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  constructor(private taskserv:TasksService){

  }
  savetask(title:string,describetion:string){
    this.taskserv.savetask(title,describetion)
    


  }

}
