import {Component, Input, OnInit} from '@angular/core';
import {ServerUrl} from '../../api.config'

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  serverUrl=ServerUrl;
  private _documents:any[]=[];

  @Input('documents')
    set documents(value:any[]) {
    if(!value || value.constructor!==Array){
      this._documents=[];
    }
    else {
      this._documents=value;
    }
  }
  @Input() documentType:string='';
  constructor() { }

  ngOnInit() {
  }

}
