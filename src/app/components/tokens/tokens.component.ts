import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/concatMap';
import {AssetsPoolService} from "../../services/assets-pool.service";

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  tokens:any[]=[];
  tokensFromBlockchain:any[]=[];
  tokenHttpRequestStatus='resolved';
  constructor(private tokenService:TokenService,
              private activatedRoute:ActivatedRoute,
              private assetPoolService:AssetsPoolService,
              private userService:UserService,private toastService:ToastService) { }
    ngOnInit() {
        this.activatedRoute.params.subscribe((param:any)=>{
            console.log(param)

            if(param && param.assetPoolId){
                this.getTokensByAssetPoolId(param.assetPoolId);
            }
            else
            {
                this.getTokens();
            }
        },(err)=>{
            console.log(err);
        })
    }



    getTokensByAssetPoolId(assetPoolId:string){
      this.tokenHttpRequestStatus='pending';
      this.assetPoolService.getTokensByAssetPoolId(assetPoolId).subscribe((tokens:any[])=>{
          console.log(tokens)
          this.tokens=tokens;
          this.tokenHttpRequestStatus='resolved';
          console.log(this.tokens)
          this.getAllTokensFromBlockchain();

      },(err)=>{
          this.tokenHttpRequestStatus='rejected';
          console.log(err)
          this.toastService.error('Tokens',err.message);
      });
  }
  getTokens(){
    this.tokenHttpRequestStatus='pending';
    this.tokenService.getTokens().subscribe((tokens:any[])=>{
      this.tokens=tokens;
      this.tokenHttpRequestStatus='resolved';
      console.log(this.tokens)
        this.getAllTokensFromBlockchain();

    },(err)=>{
      this.tokenHttpRequestStatus='rejected';
      console.log(err)
        this.toastService.error('Tokens',err.message);
    });
  }

    getAllTokensFromBlockchain(){
        this.tokenService.getAllTokensFromBlockchain().subscribe((tokens:any[])=>{
            this.tokensFromBlockchain=tokens;

            // this fucntion can be improved but for smaller list this is fine as O(n2) wont hurt
            this.tokens.forEach((token)=>{
              this.tokensFromBlockchain.forEach((token2)=>{
                if(token.transactionId===token2.transactionId){
                  console.log('save txn')
                    token.status=token2.approved;
                }
              })
            });
            console.log(this.tokensFromBlockchain)
            console.log(this.tokens)
        },(err)=>{
            console.log(err)
            this.toastService.error('Tokens',err.message);
        });
    }


    getColor(status:string){
        status=String(status);
        switch (status){
            case '1':
                return 'green';
            case '0':
                return '#ff8b4c';
            default:
                return 'grey';
        }
    }
}
