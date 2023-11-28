export class ICompanyService{
    serviceId : number = 0
    serviceName : string = ""
    serviceStatus : string =""
    teamId : number = 0
}

export class CompanyService implements ICompanyService{
    serviceId : number = 0
    serviceName : string = ""
    serviceStatus : string =""
    teamId : number = 0

    constructor(Serviceid : number,Servicename : string,Servicestatus : string,TeamId:number ){
        this.serviceId = Serviceid
        this.serviceName = Servicename
        this.serviceStatus = Servicestatus
        this.teamId = TeamId
    }
}