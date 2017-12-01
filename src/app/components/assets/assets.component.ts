import { Component, OnInit } from '@angular/core';
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assetsRequestStatus:string='resolved';
  assets:any[]=[];
  assetCategoriesLevelOne = [];
  assetCategoriesLevelTwo = [];
  assetCategoriesLevelThree = [];
  assetCategoriesLevelFour = [];
  assetCategoriesLevelFive = [];

  selectedIndexOnLevelOne=null;
  selectedIndexOnLevelTwo=null;
  selectedIndexOnLevelThree=null;
  selectedIndexOnLevelFour=null;
  selectedIndexOnLevelFive=null;
  isDeepestLevelSelected=false;

  selectedId=null;

    constructor(private assetsService:AssetsService,private toastService:ToastService,private router:Router) { }

  ngOnInit() {

   // this.getAssets(null,null);
    this.getCategories();
  }

  selectCategory(index:number,level:number,id:string){

        this.selectedId=id;

        if(level===1){
            this.selectedIndexOnLevelOne=index;
            this.selectedIndexOnLevelTwo=null;
            this.selectedIndexOnLevelThree=null;
            this.selectedIndexOnLevelFour=null;
            this.selectedIndexOnLevelFive=null;

            if(this.assetCategoriesLevelOne[index].hasChildren){
                this.assetCategoriesLevelTwo=this.assetCategoriesLevelOne[index].subCategories;
                this.assetCategoriesLevelThree=[];
                this.assetCategoriesLevelFour=[];
                this.assetCategoriesLevelFive=[];
                this.isDeepestLevelSelected=false;

            }
            else{
                this.isDeepestLevelSelected=true;
                this.assetCategoriesLevelTwo=[];
                this.assetCategoriesLevelThree=[];
                this.assetCategoriesLevelFour=[];
                this.assetCategoriesLevelFive=[];
            }

        }

      if(level===2){
          this.selectedIndexOnLevelTwo=index;
          this.selectedIndexOnLevelThree=null;
          this.selectedIndexOnLevelFour=null;
          this.selectedIndexOnLevelFive=null;

          if(this.assetCategoriesLevelTwo[index].hasChildren){
              this.assetCategoriesLevelThree=this.assetCategoriesLevelTwo[index].subCategories;
              this.assetCategoriesLevelFour=[];
              this.assetCategoriesLevelFive=[];
              this.isDeepestLevelSelected=false;

          }
          else{
              this.isDeepestLevelSelected=true;

              this.assetCategoriesLevelThree=[];
              this.assetCategoriesLevelFour=[];
              this.assetCategoriesLevelFive=[];
          }

      }


      if(level===3){
          this.selectedIndexOnLevelThree=index;
          this.selectedIndexOnLevelFour=null;
          this.selectedIndexOnLevelFive=null;
          if(this.assetCategoriesLevelThree[index].hasChildren){
              this.assetCategoriesLevelFour=this.assetCategoriesLevelThree[index].subCategories;
              this.assetCategoriesLevelFive=[];
              this.isDeepestLevelSelected=false;


          }
          else{
              this.isDeepestLevelSelected=true;
              this.assetCategoriesLevelFour=[];
              this.assetCategoriesLevelFive=[];
          }

      }


      if(level===4){
          this.selectedIndexOnLevelFour=index;
          this.selectedIndexOnLevelFive=null;
          if(this.assetCategoriesLevelFour[index].hasChildren){
              this.assetCategoriesLevelFive=this.assetCategoriesLevelFour[index].subCategories;
              this.isDeepestLevelSelected=false;
          }
          else{
              this.assetCategoriesLevelFive=[];
              this.isDeepestLevelSelected=true;

          }

      }


      if(level===5){
          this.selectedIndexOnLevelFive=index;
          this.isDeepestLevelSelected=true;
      }


  }


  goToCreateAssetPoolPage(){

      if(!this.selectedId){
          this.toastService.error('Asset','Please choose the category');
          return false;
      }

      if(!this.isDeepestLevelSelected){
          this.toastService.error('Asset','Please choose the subcategory');
          return false;
      }
      const selectedAssets:any[]=this.assets.filter((asset)=>{
          return asset.isSelected;
      });

      console.log(selectedAssets);

      if(!selectedAssets.length){
          this.toastService.error('Asset','Select atleast one asset');
          return;
      }

      let firstId=selectedAssets[0].category;
      let isAllIdSame=true;
      selectedAssets.forEach((asset)=>{
          if(asset.category!==firstId){
              isAllIdSame=false;
          }
      });
      if(!isAllIdSame){
          this.toastService.error('Asset','All the selected item needs to be the same category');
          return false;
      }

      this.assetsService.addAssetInPool(selectedAssets);
      this.router.navigate(['/dashboard/assets-pool-create']);
  }

  getCategories(){
      this.assetsService.getCategories().subscribe((categories:any[])=>{

          console.log(categories)
          this.assetCategoriesLevelOne=categories;
      },(err)=>{

          console.log( err);
      })
  }
    getAssets(categoryId:string){
        console.log(categoryId);
        if(!categoryId){
            this.toastService.error('Asset','Please choose the category');
            return false;
        }


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
