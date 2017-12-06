import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  tokens:any[]=[];
  tokenHttpRequestStatus='resolved';
  constructor(private tokenService:TokenService,private userService:UserService,private toastService:ToastService) { }

  ngOnInit() {
    this.getTokens();
  }


  getTokens(){
    this.tokenHttpRequestStatus='pending';
    this.tokenService.getTokens().subscribe((tokens:any[])=>{
      this.tokens=tokens;
      this.tokenHttpRequestStatus='resolved';
      console.log(this.tokens)
    },(err)=>{
      this.tokenHttpRequestStatus='rejected';
      console.log(err)
        this.toastService.error('Tokens',err.message);
    });
  }
}
