import { Injectable } from '@angular/core';
import {LogConsole, LogLocalStorage, LogPublisher, LogWebApiStorage} from "./log-publisher";
import {HttpClient} from "@angular/common/http";
import {LogLevel} from "./log-level.enum";

import {environment} from 'environments/environment';

@Injectable()
export class LogPublisherService {

  private publishers:LogPublisher[]=[];
  constructor(private http:HttpClient) {
    this.buildPublishers();
  }


  buildPublishers(){
    this.publishers.push(new LogConsole(environment.production ? LogLevel.Off: LogLevel.All));
    //this.publishers.push(new LogLocalStorage(LogLevel.Error));
    this.publishers.push(new LogWebApiStorage(LogLevel.Error,this.http));

  }

  getPublishers(){
    return this.publishers;
  }

}
