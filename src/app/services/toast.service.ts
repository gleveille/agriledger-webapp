import { Injectable } from '@angular/core';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Injectable()
export class ToastService {

    constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig) {
        // Assign the selected theme name to the `theme` property of the instance of ToastyConfig.
        // Possible values: default, bootstrap, material
        this.toastyConfig.theme = 'material';
    }

    success(title:string,msg:string,timeout:number=5000) {
        const toastOptions:ToastOptions = {
            title: title ? title : 'Success',
            msg: msg,
            showClose: true,
            timeout: timeout,
            onAdd: (toast:ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast:ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.success(toastOptions);

    }


    info(title:string,msg:string,timeout:number=5000) {
        const toastOptions:ToastOptions = {
            title: title ? title : 'Info',
            msg: msg,
            showClose: true,
            timeout:timeout,
            onAdd: (toast:ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast:ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.info(toastOptions);
    }



    error(title:string,msg:string,timeout:number=5000) {
        const toastOptions:ToastOptions = {
            title: title ? title : 'Error',
            msg: msg,
            showClose: true,
            timeout: timeout,
            onAdd: (toast:ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast:ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        this.toastyService.error(toastOptions);
    }
}
