import {Component, OnInit, TemplateRef} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ToastService} from "../../services/toast.service";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    modalRef: BsModalRef;


  user={} as Iuser;
  constructor(private userService:UserService,
              private toastService:ToastService,
              private modalService: BsModalService
  ) { }

  ngOnInit() {

    this.userService.user.subscribe((user:Iuser)=>{
        this.user=user;
    })
  }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);

    }

    updateProfile(){
    this.userService.updateProfile(this.user).subscribe(()=>{
      this.toastService.success('Profile','Updated!')
    },(err)=>{
        this.toastService.error('Profile',err.message || 'Could not be updated.Try again')
    })
    }
}
