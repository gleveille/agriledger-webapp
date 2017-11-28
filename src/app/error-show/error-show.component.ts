import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-show',
  templateUrl: './error-show.component.html',
  styleUrls: ['./error-show.component.css']
})
export class ErrorShowComponent implements OnInit {

  @Input()error:string=null;
  constructor() { }

  ngOnInit() {
  }

}
