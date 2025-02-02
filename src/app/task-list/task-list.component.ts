import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasharinghttpService } from '../common/services/datasharinghttp.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  listoftasks: any=[{title: "Default1"},{title: "Default2"}];
  id : number=0;
  enableEdit : boolean=false;
  updatednewtask: string ="";

  constructor(private router: Router, private datasharingService : DatasharinghttpService){}

  ngOnInit(): void {
    this.datasharingService?.refreshlistoftweets$.subscribe((flag: boolean) => {
      if(flag == true)this.fetchtasklist();
    });
    this.fetchtasklist();
  }

  fetchtasklist(){
    // call service to fetch list of task and update list on html
    this.datasharingService?.getListofTasks().pipe(take(1)).subscribe((response: any) => {
      this.listoftasks= response;
    },
      (error: any)=>{
        console.log(error);
      })
  }

  DeleteTask(id: number){
    this.datasharingService.deleteTask(id).subscribe((response)=>{
      this.fetchtasklist();
    },
    (error: any)=>{
      console.log(error);
    });
    
  }

  UpdateTask(id: number){
    const v = document.getElementById('updatedtask');
    this.updatednewtask= (<HTMLInputElement>document.getElementById('updatedtask')).value;
    this.enableEdit=false;
    this.datasharingService.putTask(id,this.updatednewtask).subscribe((response)=>{
      this.fetchtasklist();
    },
    (error: any)=>{
      console.log(error);
    });

  }

  EnableEdit(){
    this.enableEdit=true;
  }

  navigatetonewtask( ){
    this.router.navigate(['/addnewservice']);
  }
}
