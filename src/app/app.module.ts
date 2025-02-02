import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServiceListComponent } from './service-list/service-list.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { NewIncidentComponent } from './new-incident/new-incident.component';
import { IncidentListComponent } from './incident-list/incident-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    NewServiceComponent,
    NewIncidentComponent,
    IncidentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
