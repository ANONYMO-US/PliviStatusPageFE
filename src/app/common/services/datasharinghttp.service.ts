import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { APIUrls } from '../constants';
import { AppComponent } from 'src/app/app.component';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasharinghttpService {
  
  refreshlistoftweets$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getListofTasks(){
    return this.http.get(APIUrls.BASE_URL+APIUrls.GET_LIST_OF_TASKS);
  }

  postNewTask(newtask: string){
    return this.http.post<any>(APIUrls.BASE_URL+ APIUrls.POST_NEW_TASK, newtask);
  }

  deleteTask(id: number){
    return this.http.delete(APIUrls.BASE_URL+APIUrls.DELETE_TASK+`${id}`);
  }

  putTask(id:number, updatednewtask: string){
    return this.http.put(APIUrls.BASE_URL+APIUrls.UPDATE_TASK+`${id}`, updatednewtask);
  }

  refreshTweetsfalse(){
    this.refreshlistoftweets$?.next(false);
  }

  refreshTweetstrue(){
    this.refreshlistoftweets$?.next(true);
  }
}
