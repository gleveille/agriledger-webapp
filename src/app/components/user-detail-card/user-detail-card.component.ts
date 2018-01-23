import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Iuser} from "../../interface/user.interface";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-user-detail-card',
  templateUrl: './user-detail-card.component.html',
  styleUrls: ['./user-detail-card.component.scss']
})
export class UserDetailCardComponent implements OnInit {
    modalRef: BsModalRef;


    private _user:Iuser;

    @Input('user')
    set user(user:any) {
        console.log(user)
        if (user !== null && typeof user === 'object') {
            if (!user.profiles) {
                user.profiles = {}
            }
            if (!user.profiles.farmDetails) {
                user.profiles.farmDetails=[];
            }
            if (!user.profiles.address) {
                user.profiles.address={}
            }

            this._user=user;
        }

        else {
            this._user = {profiles:{farmDetails:[],address:{}}};
        }

    }

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);

    }

    onProfileUpdate(){
        this.modalRef.hide();
    }
}
