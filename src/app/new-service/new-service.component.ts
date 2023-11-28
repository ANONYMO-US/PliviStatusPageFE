import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatasharinghttpService } from '../common/services/datasharinghttp.service';
import { CompanyService } from '../common/_models/Service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent {

  newtask: string="";
  newServiceName: string="";
  newServiceStatus: string="";
  newTeamId : number = 0;
  constructor(private router: Router, private datasharingService: DatasharinghttpService){}

  addservice(){
    var newService = new CompanyService(0,this.newServiceName,this.newServiceStatus,0);
    this.datasharingService.refreshServicefalse();
    this.datasharingService.postNewService(newService).subscribe((response)=>{  
      this.datasharingService.refreshServicetrue();
      this.newServiceName = "";
      this.newServiceStatus = "";

    },
    (error: any)=>{
      console.log(error);
    });
  }

  navtotasklist(){
    this.router.navigate(['']);
  }
}
