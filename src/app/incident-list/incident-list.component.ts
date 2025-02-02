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
  }

  fetchincidentlist(){
    // call service to fetch list of Services and update list on html
    this.datasharingService?.getListofIncidents().pipe(take(1)).subscribe((response: any) => {
      this.listofincidents = response;
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

  Updateincident(incidentId: number){

    this.updatedincidentdesc= (<HTMLInputElement>document.getElementById('updatedincidentdesc')).value;
    this.updatedincidentstatus= (<HTMLInputElement>document.getElementById('updatedincidentstatus')).value;
    this.enableEdit=false;
    var updatedincident = new Incidents(0,incidentId,this.updatedincidentstatus,this.updatedincidentdesc);
    this.datasharingService.putIncident(updatedincident).subscribe((response)=>{
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
}
