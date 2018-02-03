import {LogLevel} from "./log-level.enum";

export class LogEntry {
    message='';
    level:LogLevel=LogLevel.All;
    extraInfo:any[]=[];
    logDate:Date;

    buildLogEntry():string{
        let value='';
        value=value+this.logDate+':';
        value=value+`type:${LogLevel[this.level]},`;
        value=value+`message:${JSON.stringify(this.message)},`;
        value+=`extra:${this.formatParams(this.extraInfo)}`;
        return value;
    }


    private formatParams(params:any[]):string{

        let ret:string=params.join(',');
        if(params.some(p=>typeof p==='object')){
            ret='';
            for(let item of params){
                ret+=JSON.stringify(item)+',';
            }
        }

        return ret;
    }

}
