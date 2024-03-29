import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {UserService} from "./services/user.service";
import {TranslationService} from "./services/translation.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private userService:UserService,private translationService:TranslationService){

   }
}
