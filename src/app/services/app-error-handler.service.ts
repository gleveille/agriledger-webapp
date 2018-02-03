import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {LogService} from "./logger/log.service";

@Injectable()
export class AppErrorHandlerService implements ErrorHandler{


  constructor(private injector:Injector) { }
  handleError(error:any){
      const logService = this.injector.get(LogService);
    logService.fatal((<Error>error).message,(<Error>error).stack);
    }
}
