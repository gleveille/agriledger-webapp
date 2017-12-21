import { Component, OnInit } from '@angular/core';
import {AssetsPoolService} from "../../services/assets-pool.service";
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-asset-pool-create',
  templateUrl: './asset-pool-create.component.html',
  styleUrls: ['./asset-pool-create.component.css']
})
export class AssetPoolCreateComponent implements OnInit {

  selectedStepperNumber=1;
  category={one:null,two:null,three:null,four:null,five:null};
  selectedAssetsForPool:any[]=[];
  assetPool={
      assetsId:[],
      category:{
          level1:null,
          level2:null,
          level3:null,
          level4:null,
          level5:null,
      },
      categoryId:null,
      currency: null,
      estimatePrice: null,
      estimateUnit: null,
      unlockCondition: null,
      exerciseUnit: null,
      chainOrNot: false,
      desc: null,
      maximum: null,
      precision: null,
      extra:{
          productBrand:{value:null,remark:null,link:null},
          productStandard:{value:null,remark:null,link:null},
          productInfo:{value:null,remark:null,link:null},
          productIndex:{value:null,remark:null,link:null},
          otherInfo:{value:null,remark:null,link:null},
          moreDetails:null
      }
  };
  constructor(private assetPoolService:AssetsPoolService,
              private toastService:ToastService,
              private router:Router,
              private assetsService:AssetsService) { }

  ngOnInit() {

    this.selectedAssetsForPool=this.assetPoolService.getSelectedAssetsForPool();
      if(this.selectedAssetsForPool.length) {
          this.selectedAssetsForPool.forEach((asset)=>{
              this.assetPool.assetsId.push(asset.id);
          })
          this.assetPool.categoryId = this.selectedAssetsForPool[0].categoryId;
          this.assetPool.category.level1=this.selectedAssetsForPool[0].category.level1;
          this.assetPool.category.level2=this.selectedAssetsForPool[0].category.level2;
          this.assetPool.category.level3=this.selectedAssetsForPool[0].category.level3;
          this.assetPool.category.level4=this.selectedAssetsForPool[0].category.level4;
          this.assetPool.category.level5=this.selectedAssetsForPool[0].category.level5;

      }

     /* if(!this.selectedAssetsForPool.length){
          this.router.navigate(['/dashboard/assets']);

      }*/
    console.log(this.selectedAssetsForPool);


  }

    stepperSelected(index:number){
    this.selectedStepperNumber=index;
    }


    gotoStepperSection(index:number){
      this.selectedStepperNumber=index;

    }


    createAssetPool(){
        if(!this.selectedAssetsForPool.length){
            return false;
        }


        if (!this.assetPool.currency) {
            return this.toastService.error('AssetPool','Asset currency required');
        } else {
            const reg = /^[A-Z0-9][A-Z0-9]{2,9}$/;
            if (!reg.test(this.assetPool.currency)){
                return this.toastService.error('AssetPool','Asset currency invalid. If it is chainLevel then BTC,ETH');
            }
        }
        if (!this.assetPool.estimatePrice) {
            return this.toastService.error('AssetPool','Estimate price is required');
        } else {
            const reg = /^(([1-9]|[1-9]\d{0,8})|(([1-9]|[1-9]\d{0,8})\.[0-9][0-9]{0,1})|(0\.(0[1-9]|[1-9][0-9]{0,1})))$/g;
            if (!reg.test(this.assetPool.estimatePrice)) {
                return this.toastService.error('AssetPool','Estimate price is invalid');
            }
        }




        if (!this.assetPool.estimateUnit) {
            return this.toastService.error('AssetPool','Estimate unit is required');
        }

        if (!this.assetPool.unlockCondition) {
            return this.toastService.error('AssetPool','Unlock condition is required');
        }
        if (!this.assetPool.exerciseUnit) {
            return this.toastService.error('AssetPool','Excercise unit is required');
        }


        if (!this.assetPool.desc) {
            return this.toastService.error('AssetPool','Asset description is required');
        } else {
            const strLen = this.assetPool.desc.replace(/[^\x00-\xff]/g, "**").length;
            if (strLen > 4096) {
                return this.toastService.error('AssetPool','Asset description should not be more than 4096 in length');
            }
        }
        if (!this.assetPool.maximum) {
            return this.toastService.error('AssetPool','Publisher number is required');
        }

        if (!parseInt(this.assetPool.maximum)) {
            return this.toastService.error('AssetPool','Invalid Publisher number');
        }
        if (!/^[0-6]$/.test(this.assetPool.precision)) {
            return this.toastService.error('AssetPool','Accuracy should me maximum 6 in length');
        }





        this.assetPoolService.createAssetPool(this.assetPool).subscribe((data)=>{
            this.toastService.success('AssetPool','Successfully created');
            this.resetState();

            this.router.navigate(['/dashboard/assets-pool-list']);
        },(err)=>{
            this.toastService.error('AssetPool',err.message);
        })
    }

    resetState(){
        this.selectedAssetsForPool=[];
        this.assetPoolService.removeAllAssetFromPool();
        this.assetPool={
            assetsId:[],
            category:{
                level1:null,
                level2:null,
                level3:null,
                level4:null,
                level5:null,
            },
            categoryId:null,
            currency: null,
            estimatePrice: null,
            estimateUnit: null,
            unlockCondition: null,
            exerciseUnit: null,
            chainOrNot: false,
            desc: null,
            maximum: null,
            precision: null,
            extra:{
                productBrand:{value:null,remark:null,link:null},
                productStandard:{value:null,remark:null,link:null},
                productInfo:{value:null,remark:null,link:null},
                productIndex:{value:null,remark:null,link:null},
                otherInfo:{value:null,remark:null,link:null},
                moreDetails:null
            }
        };
    }
}
