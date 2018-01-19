import {Component, Input, OnInit} from '@angular/core';
import {Iuser} from "../../interface/user.interface";

@Component({
  selector: 'app-user-detail-card',
  templateUrl: './user-detail-card.component.html',
  styleUrls: ['./user-detail-card.component.scss']
})
export class UserDetailCardComponent implements OnInit {

  @Input() user={profiles:{}};
  constructor() { }

  ngOnInit() {
  }

}
