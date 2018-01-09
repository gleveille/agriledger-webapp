import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-password-new',
  templateUrl: './password-new.component.html',
  styleUrls: ['./password-new.component.scss']
})
export class PasswordNewComponent implements OnInit {
    credential={accessToken:null,newPassword:null,rePassword:null};
    passwordChangeRequestStatus='resolved';
    passwordFormatText='Minimum eight characters, must include atleast one number and one special character';

  constructor(private userService:UserService,private router:Router,
              private activatedRoute:ActivatedRoute,
              private toastService:ToastService) { }

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        console.log(params)
          this.credential.accessToken = params['accessToken'];
          console.log('access token is.........')
          console.log(this.credential.accessToken);
      });
  }

  resetPassword(){
        const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

        if(!pattern.test(this.credential.newPassword)){
            this.toastService.error('Password',this.passwordFormatText);
            return;
        }

        else if(this.credential.newPassword!==this.credential.rePassword){
            this.toastService.error('Password','Password does not match');
            return;
        }

        this.passwordChangeRequestStatus='pending';
        this.userService.resetPassword(this.credential.accessToken,this.credential.newPassword)
            .subscribe((data:any)=>{
                this.passwordChangeRequestStatus='resolved';

                this.toastService.success('Password','Set Sucessfully.please login');
                this.router.navigate(['/login']);

            },(err)=>{
                this.passwordChangeRequestStatus='rejected';

                this.toastService.error('Password',err.message);
            });
    }


}
