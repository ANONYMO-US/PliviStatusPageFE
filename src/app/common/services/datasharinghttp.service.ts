import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { APIUrls } from '../constants';
import { AppComponent } from '../../app.component';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CompanyService, ICompanyService } from '../_models/Service';
import { IIncidents, Incidents } from '../_models/Incidents';

@Injectable({
  providedIn: 'root'
})
export class DatasharinghttpService {
  
  refreshlistofService$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  //Services Apis
  getListofServices(){
    return this.http.get(APIUrls.BASE_URL+APIUrls.GET_LIST_OF_SERVICES);
  }

  postNewService(newService: ICompanyService){
    return this.http.post<any>(APIUrls.BASE_URL+ APIUrls.POST_NEW_SERVICE, newService);
  }

  deleteService(serviceid: number){
    return this.http.delete(APIUrls.BASE_URL+APIUrls.DELETE_SERVICE+`${serviceid}`);
  }

  putService(updatedcompanyservice : CompanyService){
    return this.http.put(APIUrls.BASE_URL+APIUrls.UPDATE_SERVICE, updatedcompanyservice);
  }

  refreshServicefalse(){
    this.refreshlistofService$?.next(false);
  }

  refreshServicetrue(){
    this.refreshlistofService$?.next(true);
  }

  //Incident Apis
  postNewIncident(newIncident: IIncidents){
    return this.http.post<any>(APIUrls.BASE_URL+ APIUrls.POST_NEW_INCIDENT, newIncident);
  }

  getListofIncidents(){
    return this.http.get(APIUrls.BASE_URL+APIUrls.GET_LIST_OF_INCIDENTS);
  }

  ResolveIncident(incidentid: number){
    return this.http.post(APIUrls.BASE_URL+APIUrls.RESOLVE_INCIDENT, incidentid);
  }

  putIncident(updatedincident : Incidents){
    return this.http.put(APIUrls.BASE_URL+APIUrls.UPDATE_INCIDENT, updatedincident);
  }

  associateIncidentwithService(incidentId : number,serviceId : number){
    return this.http.put(APIUrls.BASE_URL+APIUrls.ASSOCIATE_INCIDENT_WITH_SERVICE+`${incidentId}`, serviceId);
  }
}
