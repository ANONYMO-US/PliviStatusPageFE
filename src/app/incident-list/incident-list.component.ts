import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasharinghttpService } from '../common/services/datasharinghttp.service';
import { take } from 'rxjs';
import { CompanyService } from '../common/_models/Service';
import { Incidents } from '../common/_models/Incidents';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent {

  listofincidents: any=[{title: "Default1"},{title: "Default2"}];
  listofservices : any;
  selectedOptionId : number = 0 // Stores the selected value
  id : number=0;
  enableEdit : boolean=false;
  updatedincidentdesc: string ="";
  updatedincidentstatus: string ="";

  constructor(private router: Router, private datasharingService : DatasharinghttpService){}

  ngOnInit(): void {
    this.datasharingService?.refreshlistofService$.subscribe((flag: boolean) => {
      if(flag == true)this.fetchincidentlist();
    });
    this.fetchincidentlist();
    this.fetchservicelist();
  }

  fetchincidentlist(){
    // call service to fetch list of Services and update list on html
    this.datasharingService?.getListofIncidents().pipe(take(1)).subscribe((response: any) => {
      this.listofincidents = response;
      this.fetchservicelist();
    },
      (error: any)=>{
        console.log(error);
      })
  }

  fetchservicelist(){
    // call service to fetch list of Services and update list on html
    this.datasharingService?.getListofServices().pipe(take(1)).subscribe((response: any) => {
      this.listofservices = response;
      this.bindServiceNamewithIncident();
    },
      (error: any)=>{
        console.log(error);
      })
  }

  Deleteincident(Incidentid: number){
    this.datasharingService.ResolveIncident(Incidentid).subscribe((response)=>{
      this.fetchincidentlist();
    },
    (error: any)=>{
      console.log(error);
    });
    
  }

  Updateincident(incident: any){

    this.updatedincidentdesc= (<HTMLInputElement>document.getElementById('updatedincidentdesc')).value;
    this.updatedincidentstatus= (<HTMLInputElement>document.getElementById('updatedincidentstatus')).value;
    this.enableEdit=false;
    var updatedincident = new Incidents(incident.serviceId,incident.incidentId,incident.userStatus,incident.userDesc);
    this.datasharingService.putIncident(updatedincident).subscribe((response)=>{
      this.fetchincidentlist();
    },
    (error: any)=>{
      console.log(error);
    });

  }

  AssociateincidentwithService(incident: any){
    this.enableEdit=false;
    this.selectedOptionId
    this.datasharingService.associateIncidentwithService(incident.incidentId,Number(incident.selectedOptionId)).subscribe((response)=>{
      this.fetchincidentlist();
    },
    (error: any)=>{
      console.log(error);
    });

  }

  EnableEdit(){
    this.enableEdit=true;
  }

  navigatetoServicelist( ){
    this.router.navigate(['']);
  }

  bindServiceNamewithIncident()
  {
    for (var incident of this.listofincidents) {
      var isnamefound = false;
      for (var service of this.listofservices) {
        if(incident.serviceId == service.serviceId)
        {
          incident.serviceName = service.serviceName;
          isnamefound = true;
          break;
        }
      }
      if(!isnamefound)
      { incident.serviceName = "None"; }
  }
  }
}
