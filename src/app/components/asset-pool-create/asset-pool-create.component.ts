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

      if(!this.selectedAssetsForPool.length){
          this.router.navigate(['/dashboard/assets']);

      }
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
