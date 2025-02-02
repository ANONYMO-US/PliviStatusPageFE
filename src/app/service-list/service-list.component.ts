import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasharinghttpService } from '../common/services/datasharinghttp.service';
import { take } from 'rxjs';
import { CompanyService } from '../common/_models/Service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent {

  listofservices: any=[{title: "Default1"},{title: "Default2"}];
  id : number=0;
  enableEdit : boolean=false;
  updatedservicename: string ="";
  updatedservicestatus: string ="";

  constructor(private router: Router, private datasharingService : DatasharinghttpService){}

  ngOnInit(): void {
    this.datasharingService?.refreshlistofService$.subscribe((flag: boolean) => {
      if(flag == true)this.fetchservicelist();
    });
    this.fetchservicelist();
  }

  fetchservicelist(){
    // call service to fetch list of Services and update list on html
    this.datasharingService?.getListofServices().pipe(take(1)).subscribe((response: any) => {
      this.listofservices = response;
    },
      (error: any)=>{
        console.log(error);
      })
  }

  DeleteService(id: number){
    this.datasharingService.deleteService(id).subscribe((response)=>{
      this.fetchservicelist();
    },
    (error: any)=>{
      console.log(error);
    });
    
  }

  UpdateService(service: any){

    // this.updatedservicename= (<HTMLInputElement>document.getElementById('updatedservicename')).value;
    // this.updatedservicestatus= (<HTMLInputElement>document.getElementById('updatedservicestatus')).value;
    this.enableEdit=false;
    var updatedservice = new CompanyService(service.serviceId,service.userServiceName,service.userServiceStatus,0);
    this.datasharingService.putService(updatedservice).subscribe((response)=>{
      this.fetchservicelist();
    },
    (error: any)=>{
      console.log(error);
    });

  }

  EnableEdit(){
    this.enableEdit=true;
  }

  navigatetonewService( ){
    this.router.navigate(['/addnewservice']);
  }

  navigatetonewincident( ){
    this.router.navigate(['/addnewincident']);
  }

  navigatetoincidentlist( ){
    this.router.navigate(['/incidentlist']);
  }

}
