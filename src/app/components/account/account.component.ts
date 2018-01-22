import {Component, OnInit, TemplateRef} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ToastService} from "../../services/toast.service";
import { FileUploader } from 'ng2-file-upload';
import {ContainerApi} from '../../../../src/app/api.config'
import {ServerUrl} from '../../../../src/app/api.config'
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    modalRef: BsModalRef;
    serverUrl=ServerUrl;
    uploader:FileUploader;
    URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

    user={} as Iuser;
  constructor(private userService:UserService,
              private toastService:ToastService,
              private modalService: BsModalService
  ) { }

  ngOnInit() {

    this.userService.user.subscribe((user:Iuser)=>{
        this.user=user;
        this.initUpload();

    })
  }

  initUpload(){
      this.uploader= new FileUploader({url: ContainerApi.ProfileUpload.url(),
          headers:[{name:'x-id',value:this.user.profiles.id}]});

      this.uploader.onAfterAddingFile=(item:any)=>{
          this.uploader.queue=[];
          this.uploader.queue.push(item)
      };
      this.uploader.onSuccessItem = (item:any, response:any, status:any, headers:any) => {
          let data;
          try{
              data = JSON.parse(response);
              let obj={url:null,lat:null,long:null,hash:null};
              if(data.result.files && data.result.files.file[0].data) {
                  obj=data.result.files.file[0].data
              }
              this.userService.profilePicChanged(obj);
              this.toastService.success('Upload','Profile image changed')
          }
          catch (err){
              console.log(err);

          }
      };

      this.uploader.onErrorItem= (item:any, response:any, status:any, headers:any) => {
          this.toastService.error('Upload','Profile image could not be changed')
      };
  }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);

    }
    openModalForUpload(template: TemplateRef<any>){
        this.modalRef = this.modalService.show(template);

    }
    onProfileUpdate(){
        this.modalRef.hide();
    }
}
