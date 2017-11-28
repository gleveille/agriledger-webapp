import {Component, OnDestroy, OnInit} from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {ToastData, ToastOptions, ToastyService} from "ng2-toasty";
import 'rxjs/add/observable/interval';
import {Subscription} from "rxjs/Subscription";
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
    constructor(private userService:UserService,private toastyService:ToastyService) { }

    ngOnInit() {
        this.showToast('wait','Checking',false);
        this.getBlockchainAccount();


    }



    getBlockchainAccount(){

        console.log('polling server ')
        this.subscription=this.userService.getBlockchainAccount().subscribe((account:any)=>{
            this.account=account;
            console.log(this.account);

            if(this.account.balance){
                this.account.balance= parseInt(this.account.balance) / Math.pow(10, 6);

                console.log('balance found stop polling');
                clearInterval(this.timer);
                this.clearToast();
                const msg=`${this.account.balance} ACC transferred`
                this.showToast('success',msg,true);

                this.subscription.unsubscribe();

            }
            else{
                this.clearToast();
                this.showToast('wait','Hold on! We have initialsed the tranfer',true);

            }

        },(err)=>{
            console.log(err);
        });
    }




    showToast(type:string,message:string,showClose:boolean=false){
        const toastOptions: ToastOptions = {
            title: 'Wallet Balance',
            msg:message,
            showClose:showClose,
            timeout:500000,
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
        console.log('creating');
    /*    this.userService.createAccountOnBlockchain().subscribe((user:Iuser)=>{
            console.log('succcesss')
        },(err)=>{
            console.log(err);
        });
*/
    }

    ngOnDestroy(){

        if(this.subscription)
            this.subscription.unsubscribe();
        this.clearToast();

    }

}
