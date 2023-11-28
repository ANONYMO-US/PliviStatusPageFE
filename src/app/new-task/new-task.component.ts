import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatasharinghttpService } from '../common/services/datasharinghttp.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  newtask: string="";
  constructor(private router: Router, private datasharingService: DatasharinghttpService){}

  // addtaskandnavtotasklist(){
  //   this.datasharingService.refreshServicefalse();
  //   this.datasharingService.postNewTask(this.newtask).subscribe((response)=>{  
  //     this.datasharingService.refreshServicetrue();
  //     this.router.navigate(['']);
  //   },
  //   (error: any)=>{
  //     console.log(error);
  //   });
  // }
}
