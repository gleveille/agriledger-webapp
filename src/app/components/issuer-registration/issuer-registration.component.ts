import {Component, OnDestroy, OnInit} from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {ToastData, ToastOptions, ToastyService} from "ng2-toasty";
import 'rxjs/add/observable/interval';
import {Subscription} from "rxjs/Subscription";
import {IserviceError} from "../../interface/serviceError.interface";
import {Router} from "@angular/router";
@Component({
  selector: 'app-issuer-registration',
  templateUrl: './issuer-registration.component.html',
  styleUrls: ['./issuer-registration.component.css']
})
export class IssuerRegistrationComponent implements OnInit,OnDestroy {

    account={} as any;
    issuer={name:null,description:null};
    toast={} as ToastData;
    timer:any=null;
    subscription:Subscription;
    issuerRequestStatus='resolved';
    constructor(private userService:UserService,private router:Router,private toastyService:ToastyService) { }

    ngOnInit() {
        this.showToast('wait','Wallet Balance','wait',false,500000);
        this.getBlockchainAccount();


    }



    getBlockchainAccount(){

        console.log('polling server ')
        this.subscription=this.userService.getBlockchainAccountDuringOnboarding().subscribe((account:any)=>{
            this.account=account;
            console.log(this.account);

            if(this.account.balance){
                this.account.balance= parseInt(this.account.balance) / Math.pow(10, 6);

                console.log('balance found stop polling');
                clearInterval(this.timer);
                this.clearToast();
                const msg=`${this.account.balance} ACC transferred`
                this.showToast('success','Wallet Balance',msg,true,500000);

                this.subscription.unsubscribe();

            }
            else{
                this.clearToast();
                this.showToast('wait','Wallet Balance','Hold on! We have initialsed the tranfer',false,500000);

            }

        },(err)=>{
            console.log(err);
        });
    }




    showToast(type:string,title:string,message:string,showClose:boolean=false,timeout:number=5000){
        const toastOptions: ToastOptions = {
            title: title,
            msg:message,
            showClose:showClose,
            timeout:timeout,
            onAdd: (toast: ToastData) => {
                this.toast=toast;
                console.log('Toast ' + toast.id + ' has been added!');

            },
            onRemove: function(toast: ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };

        switch (type){
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            default:
                this.toastyService.wait(toastOptions);
                break;


        }

    }

    clearToast(){
        if(this.toast && this.toast.id){
            this.toastyService.clear(this.toast.id);

        }


    }

    registerAsIssuer(){
        this.clearToast();

        if(!this.account.balance)
            return false;
        console.log('creating');

        const reg = /^[A-Z]{1,16}$/;
        if(!reg.test(this.issuer.name)){
            const msg='Issuer name invalid.Name should be in all capital and 1-16 character long';
            return this.showToast('error','Issuer',msg,true,5000);

        }

        if(!this.issuer.description){
            const msg='Issuer description required';
            return this.showToast('error','Issuer',msg,true,5000);
        }


        this.issuerRequestStatus='pending';
        this.userService.resgisterAsIssuer(this.issuer).subscribe((user:Iuser)=>{
            console.log('succcesss');
            this.issuerRequestStatus='resolved';
            this.router.navigate(['/dashboard']);
        },(err:IserviceError)=>{
            console.log(err);
            this.issuerRequestStatus='rejected';
            return this.showToast('error','Issuer',err.message,true,5000);

        });


    }

    ngOnDestroy(){

        if(this.subscription)
            this.subscription.unsubscribe();
        this.clearToast();

    }

}
