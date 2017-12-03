import { Component, OnInit } from '@angular/core';
import {AssetsPoolService} from "../../services/assets-pool.service";
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-asset-pool-create',
  templateUrl: './asset-pool-create.component.html',
  styleUrls: ['./asset-pool-create.component.css']
})
export class AssetPoolCreateComponent implements OnInit {

  selectedStepperNumber=1;
  category={one:null,two:null,three:null,four:null,five:null};
  selectedAssetsForPool:any[]=[];
    assetCategoriesLevelOne = [];
    assetPool={
        category:null,
        name: null,
        currency: null,
        estimatedPrice: null,
        estimatedUnit: null,
        unlockCondition: null,
        excerciseStandard: null,
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
              private assetsService:AssetsService) { }

  ngOnInit() {

    this.selectedAssetsForPool=this.assetPoolService.getSelectedAssetsForPool();
      if(this.selectedAssetsForPool.length) {
          this.assetPool.category = this.selectedAssetsForPool[0].category;
      }
    console.log(this.selectedAssetsForPool);

    this.getCategories();

  }

    stepperSelected(index:number){
    this.selectedStepperNumber=index;
    }

    getCategories(){
        this.assetsService.getCategories().subscribe((categories:any[])=>{

            this.assetCategoriesLevelOne=categories;
            if(this.selectedAssetsForPool.length){
              const categoryId=this.selectedAssetsForPool[0].category;
              const arr=categoryId.split('-');
              if(arr[0]){
                  this.category.one=this.assetCategoriesLevelOne[arr[0]].name;
              }
                if(arr[1]){
                    this.category.two=this.assetCategoriesLevelOne[arr[0]]
                        .subCategories[arr[1]].name;
                }

                if(arr[2]){
                    this.category.three=this.assetCategoriesLevelOne[arr[0]]
                        .subCategories[arr[1]]
                        .subCategories[arr[2]].name;                }

                if(arr[3]){
                    this.category.four=this.assetCategoriesLevelOne[arr[0]]
                        .subCategories[arr[1]]
                        .subCategories[arr[2]]
                        .subCategories[arr[3]].name;
                }

                if(arr[4]){
                    this.category.five=this.assetCategoriesLevelOne[arr[0]]
                        .subCategories[arr[1]]
                        .subCategories[arr[2]]
                        .subCategories[arr[3]]
                        .subCategories[arr[4]].name;
                }

            }



        },(err)=>{

          this.toastService.error('Pool',err.message);
            console.log( err);
        });
    }

    gotoStepperSection(index:number){
      this.selectedStepperNumber=index;

    }
}
