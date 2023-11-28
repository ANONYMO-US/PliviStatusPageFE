import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatasharinghttpService } from '../common/services/datasharinghttp.service';
import { CompanyService } from '../common/_models/Service';
import { Incidents } from '../common/_models/Incidents';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.scss']
})
export class NewIncidentComponent {

  newIncidentDescrip: string="";
  newIncidentStatus: string="";
  serviceId : number = 0;
  constructor(private router: Router, private datasharingService: DatasharinghttpService){}

  addincident(){
    var newIncident = new Incidents(this.serviceId,0,this.newIncidentStatus,this.newIncidentDescrip);
    this.datasharingService.refreshServicefalse();
    this.datasharingService.postNewIncident(newIncident).subscribe((response)=>{  
      // this.datasharingService.refreshServicetrue();
      this.newIncidentDescrip = "";
      this.newIncidentStatus = "";
      this.serviceId = 0;
    },
    (error: any)=>{
      console.log(error);
    });
  }

  navtoservicelist(){
    this.router.navigate(['']);
  }
}
