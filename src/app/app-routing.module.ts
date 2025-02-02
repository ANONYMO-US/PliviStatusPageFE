import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  {path:'servicelist', component: TaskListComponent},
  {path:'addnewservice', component: NewTaskComponent},
  {path:'' ,redirectTo: '/servicelist', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
