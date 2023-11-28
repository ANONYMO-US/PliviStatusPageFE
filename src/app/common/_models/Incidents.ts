export class IIncidents{
    serviceId : number = 0
    incidentId : number = 0
    incidentStatus : string = ""
    incidentDescription : string = ""
}

export class Incidents implements IIncidents{
    serviceId : number = 0
    incidentId : number = 0
    incidentDescription : string = ""
    incidentStatus : string = ""

    constructor(Serviceid : number,IncidentId : number,IncidentStatus : string,IncidentDescription : string){
        this.serviceId = Serviceid
        this.incidentId = IncidentId
        this.incidentStatus = IncidentStatus
        this.incidentDescription = IncidentDescription
    }
}