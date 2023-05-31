import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycompComponent } from './components/mycomp/mycomp.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

  {path:"my",
  component:MycompComponent
 
},
{path:"home",
component:HomeComponent

},

{path:"profile/:id",
component:ProfileComponent

},
{path:"signup",
component:SignupComponent

},
{path:"add-task",
component:AddtaskComponent

},
{path:"task/:id",
component:TaskComponent

},

{path:"**",
component:NotfoundComponent

},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule {

 }
