import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { NewIncidentComponent } from './new-incident/new-incident.component';

const routes: Routes = [
  {path:'servicelist', component: ServiceListComponent},
  {path:'addnewservice', component: NewServiceComponent},
  {path:'addnewincident', component: NewIncidentComponent},
  {path:'' ,redirectTo: '/servicelist', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
