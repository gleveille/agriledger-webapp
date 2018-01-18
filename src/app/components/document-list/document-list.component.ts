import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServerUrl} from '../../api.config'

import {DocumentType} from '../../enum/document_enum'

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  private serverUrl=ServerUrl;
  private _documents:any[];
  private documentStatus=['pending','approved','rejected'];

    @Output() onStatusChange:EventEmitter<any> = new EventEmitter();

    @Input()documentType='';

  @Input('documents')
    set documents(value:any[]) {
    if(!value || value.constructor!==Array){
      this._documents=[];
    }
    else {
      this._documents=value;
    }
  }



  constructor() {
  }

  ngOnInit() {
  }

  onChange(status,document){
    console.log(status)
      document.status=status;
      this.onStatusChange.emit({documentType:this.documentType});
  }

}
