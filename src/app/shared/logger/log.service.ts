import { Injectable } from '@angular/core';
import {LogLevel} from "./log-level.enum";

import {LogEntry} from './log-entry'
import {LogPublisherService} from "./log-publisher.service";
import {LogPublisher} from "./log-publisher";


@Injectable()
export class LogService {

  publishers:LogPublisher[]=[];
  logWithDate=true;
  constructor(private logPublisherService:LogPublisherService) {

    this.publishers=this.logPublisherService.getPublishers();
  }


  log(message:string,...optionalParams:any[]){
    this.writeToLog(message,LogLevel.All,optionalParams);
  }

  debug(message:string,...optionalParams:any[]){
        this.writeToLog(message,LogLevel.Debug,optionalParams);
    }
    info(message:string,...optionalParams:any[]){
        this.writeToLog(message,LogLevel.Info,optionalParams);
    }

    error(message:string,...optionalParams:any[]){
        this.writeToLog(message,LogLevel.Error,optionalParams);
    }

    warning(message:string,...optionalParams:any[]){
        this.writeToLog(message,LogLevel.Error,optionalParams);
    }

    fatal(message:string,...optionalParams:any[]){
        this.writeToLog(message,LogLevel.Fatal,optionalParams);
    }




  private writeToLog(message:string,level:LogLevel,params:any[]){

      const entry:LogEntry=new LogEntry();
      entry.level=level;
      entry.message=message;
      entry.extraInfo=params;
      entry.logWithDate=this.logWithDate;

      this.publishers.forEach((publisher:LogPublisher)=>{
        publisher.log(entry);
      })

    }


}
