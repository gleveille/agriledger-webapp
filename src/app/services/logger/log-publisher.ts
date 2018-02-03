import {LogEntry} from "./log-entry";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {LogApi} from "../../api.config";
import {LogLevel} from "./log-level.enum";

export abstract class LogPublisher {

    location='';
    level:LogLevel=LogLevel.All;
    abstract log(record:LogEntry):void;
    abstract clear():void;

    shouldLog(level:LogLevel):boolean{

        if(level!== LogLevel.Off && level >=this.level){
            return true;
        }

        return false;
    }

}


export class LogConsole extends LogPublisher{

    constructor(level:LogLevel){
        super();

        this.level=level||LogLevel.All;
    }
    log(record:LogEntry){

        if(!this.shouldLog(record.level)){
            return;
        }

        if(record.level===LogLevel.Error || record.level===LogLevel.Fatal){
            console.error(record.buildLogEntry())
        }
        else {
            console.log(record.buildLogEntry())
        }
    }

    clear(){
        console.clear();
    }

}

export class LogLocalStorage extends LogPublisher{

    constructor(level:LogLevel){

        super();

        this.location='localstoragelog';
        this.level=level||LogLevel.All;

    }

    log(record:LogEntry){
        if(!this.shouldLog(record.level)){
            return;
        }
        let entry:LogEntry[]=[];
        entry=JSON.parse(localStorage.getItem(this.location))||[];
        entry.push(record);
        localStorage.setItem(this.location,JSON.stringify(entry));
    }

    clear(){
        localStorage.clear();
    }

}


export class LogWebApiStorage extends LogPublisher{

    constructor(level:LogLevel,private http:HttpClient){

        super();

        this.location=LogApi.restUrl.url();
        this.level=level||LogLevel.All;

    }

    log(record:LogEntry){
        if(!this.shouldLog(record.level)){
            return;
        }
        this.http.post(this.location,record).subscribe((val)=>{

        },(err)=>{

        })
    }

    clear(){
    }

}