import { Component, OnInit } from '@angular/core';
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";
import {AssetsPoolService} from "../../services/assets-pool.service";

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assetsRequestStatus='resolved';
  categoryHttpReequestStatus='resolved';
  assets:any[]=[];
    chosenLang = 1;
    selectedIndexOnLevelOne=null;
    selectedIndexOnLevelTwo=null;
    selectedIndexOnLevelThree=null;
    selectedIndexOnLevelFour=null;
    selectedIndexOnLevelFive=null;

    assetCategoriesLevelOne = [];
  assetCategoriesLevelTwo = [];
  assetCategoriesLevelThree = [];
  assetCategoriesLevelFour = [];
  assetCategoriesLevelFive = [];
  deepestCategorySelected = false;
  currentLevel=null;
    lastCategoryId=null;


    constructor(private assetsService:AssetsService,private assetPoolService:AssetsPoolService,
                private toastService:ToastService,private router:Router) { }

  ngOnInit() {

   // this.getAssets(null,null);
    this.getCategories(0);
  }

    onAssetCategoryLevelChange(category:any, level:number,index:number) {
        console.log(category)
        console.log(level)

        if (!category.hasChildren) {
            this.deepestCategorySelected = true;
            this.lastCategoryId = category.id;
            this.getAssets(this.lastCategoryId);
            return;
        }
        this.deepestCategorySelected = false;


        this.assets=[];

        this.currentLevel=level;
        if(level===0){
            this.selectedIndexOnLevelOne=index;
            this.selectedIndexOnLevelTwo=null;
            this.selectedIndexOnLevelThree=null;
            this.selectedIndexOnLevelFour=null;
            this.selectedIndexOnLevelFive=null;
        }
        else if(level===1){
            this.selectedIndexOnLevelTwo=index;
            this.selectedIndexOnLevelThree=null;
            this.selectedIndexOnLevelFour=null;
            this.selectedIndexOnLevelFive=null;
        }
        else if(level===2){
            this.selectedIndexOnLevelThree=index;
            this.selectedIndexOnLevelFour=null;
            this.selectedIndexOnLevelFive=null;
        }
        else if(level===3){
            this.selectedIndexOnLevelFour=index;
            this.selectedIndexOnLevelFive=null;

        }
        else if(level===4){
            this.selectedIndexOnLevelFive=index;

        }


        this.assetsService.getCategories(category.id)
            .subscribe((assetCategory: Array<any>) => {
                console.log(assetCategory)
                if (level === 0) {
                    this.assetCategoriesLevelTwo = assetCategory;
                    this.assetCategoriesLevelThree=[];
                    this.assetCategoriesLevelFour=[];
                    this.assetCategoriesLevelFive=[];

                }
                if (level === 1) {
                    this.assetCategoriesLevelThree = assetCategory;
                    this.assetCategoriesLevelFour=[];
                    this.assetCategoriesLevelFive=[];

                }
                if (level === 2) {
                    this.assetCategoriesLevelFour = assetCategory;
                    this.assetCategoriesLevelFive=[];

                }

                if (level === 3) {
                    this.assetCategoriesLevelFive = assetCategory;
                }


            }, (err) => {
                this.toastService.error('Category', 'Something went wrong');
            })




    }

    getLevelbyWord(){
        let nextLevel;
        switch (this.currentLevel){
            case 0:
                nextLevel='second';
                break;
            case 1:
                nextLevel='third';
                break;
            case 2:
                nextLevel='fourth';
                break;
            case 3:
                nextLevel='fifth';
                break;
            default:
                nextLevel='first';
        }
        return nextLevel;
    }



  goToCreateAssetPoolPage(){
        if(!this.deepestCategorySelected){
            const nextLevel=this.getLevelbyWord();
            this.toastService.error('Asset',`Please select ${nextLevel} category`);

            return false;
        }

        if(!this.assets.length){
            this.toastService.error('Asset','No asset available under this category');
            return false;
        }
        const selectedAsset=this.assets.filter((asset)=>{
            return asset.isSelected;
        });

      console.log(selectedAsset)
      if(!selectedAsset.length){
            this.toastService.error('Asset','Please select atleast one asset');
            return false;
      }
      this.assetPoolService.addAssetInPool(selectedAsset);
      this.router.navigate(['/dashboard/assets-pool-create']);
  }

  getCategories(level:number){
      this.categoryHttpReequestStatus='pending';
      return this.assetsService.getCategories(level)
          .subscribe((assetCategory: Array<any>) => {

          this.assetCategoriesLevelOne=assetCategory;
          this.categoryHttpReequestStatus='resolved';
          }, (err) => {
          this.categoryHttpReequestStatus='rejected';
              this.toastService.error('Category', err.message);
          });
  }

  getAssets(categoryId:string){
        console.log(categoryId);

        this.assetsRequestStatus='pending';
        this.assetsService.getAssets(categoryId).subscribe((assets:any[])=>{
            this.assetsRequestStatus='resolved';

            console.log(assets)
            this.assets=assets;
        },(err)=>{
            this.assetsRequestStatus='rejected';

            console.log( err);
        })
    }

  getColor(status:string){
        switch (status){
            case 'pending':
                return 'black';
            case 'verified':
                return 'green';
            case 'rejected':
                return '#ff8b4c';
            case 'pooled':
                return 'blue';
            default:
                return 'black';
        }
    }
}
