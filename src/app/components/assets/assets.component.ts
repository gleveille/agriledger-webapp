import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AssetsService} from "../../services/assets.service";
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";
import {AssetsPoolService} from "../../services/assets-pool.service";
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/user.interface";
import {concatMap} from 'rxjs/operator/concatMap'

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

    @Input() selectedFilter:string=null;
    @Input() canSelected:boolean=false;
    @Input() showPoolButton:boolean=false;
    @Input() showNonPooledAssetOnly:boolean=false;
    @Output() onPoolSelect:EventEmitter<any> = new EventEmitter();
    stat={favouriteAssetCount:0,allAssetCount:0,pooledAssetCount:0,availableAssetCount:0}
    assetsRequestStatus='resolved';
  categoryHttpReequestStatus='resolved';
  filters=[{name:'By Category',value:'category'},
      {name:'Reset Filter',value:'reset'}];
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
                private userService:UserService,
                private toastService:ToastService,private router:Router) {

    }



  ngOnInit() {
      this.assetsService.loadStat();
      this.assetsService.loadAllAssets();
      this.assetsService.loadAvailableAssets();

      this.assetsService.assets.subscribe((assets:any)=>{
          console.log('.....................')
          console.log(assets)
          if(this.showNonPooledAssetOnly){
              this.assets=assets.availableAssets||[];
          }
          else{
              this.assets=assets.allAssets||[];
          }
      });
      this.assetsService.stat.subscribe((stat:any)=>{
          this.stat=stat;
          console.log('stat from subs')
          console.log(stat)
      });


      this.userService.user.subscribe((user:Iuser)=>{
          this.assetsService.loadFavouriteAssets(user.id);
      });


    this.getCategories(0);
  }


    putInPool(){

        let filterdAssets=this.assets.filter((asset)=>{
            return asset.isSelected;
        });

        if(!filterdAssets.length){
            return this.toastService.error('pool','please select at least one asset of same category');
        }
        let isAllAssetSame:boolean=true;
        console.log(filterdAssets)

        if(filterdAssets.length>1){
            for(let i=1;i<filterdAssets.length;i++){
                if(filterdAssets[i].categoryId!==filterdAssets[i-1].categoryId){
                    isAllAssetSame=false;
                    break;
                }
            }
        }


        if(!isAllAssetSame){
            this.toastService.error('Pool','Please select the asset of same category');
            return;
        }

        /*   if(!this.deepestCategorySelected){
               this.toastService.error('Pool','Please choose the category');
               return;
           }*/



        this.onPoolSelect.emit(filterdAssets);
    }
    filterChange(value:string){
        if(value==='reset'){
            this.reset();
            return;
        }
        this.selectedFilter=value;

    }
    onAssetCategoryLevelChange(category:any, level:number,index:number) {
        console.log(category)


        this.deepestCategorySelected = false;



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


        if (!category.hasChildren) {
            this.deepestCategorySelected = true;
            this.lastCategoryId = category.id;
            if(this.showNonPooledAssetOnly)
            this.getAssetsByCategoryId(this.lastCategoryId,false);
            else
                this.getAssetsByCategoryId(this.lastCategoryId,true);

            return;
        }
        else{
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
                    console.log(level,index,this.selectedIndexOnLevelThree)


                }, (err) => {
                    this.toastService.error('Category', 'Something went wrong');
                })
        }






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

    reset(){
        this.deepestCategorySelected=false;
        this.selectedIndexOnLevelOne=null;
        this.selectedIndexOnLevelTwo=null;
        this.selectedIndexOnLevelThree=null;
        this.selectedIndexOnLevelFour=null;
        this.selectedIndexOnLevelFive=null;
        this.assetCategoriesLevelTwo = [];
        this.assetCategoriesLevelThree = [];
        this.assetCategoriesLevelFour = [];
        this.assetCategoriesLevelFive = [];
        this.currentLevel=null;
        this.lastCategoryId=null;
        this.selectedFilter=null;
        this.assetsService.loadStat();
        this.assetsService.loadAllAssets();
        this.assetsService.loadAvailableAssets();
    }


  createPool(){
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

    getAssetsByCategoryId(categoryId:string,isPutOnBlockchain:boolean){
        console.log(categoryId);

        this.assetsRequestStatus='pending';
        this.assetsService.getAssetsByCategoryId(categoryId,isPutOnBlockchain).subscribe((assets:any[])=>{
            this.assetsRequestStatus='resolved';

            console.log(assets)
            this.assets=assets;
        },(err)=>{
            this.assetsRequestStatus='rejected';

            console.log( err);
        })
    }



  getColorForStatus(status:string){
        switch (status){
            case 'pending':
                return 'black';
            case 'verified':
                return 'blue';
            case 'rejected':
                return '#ff8b4c';
            case 'pooled':
                return 'green';
            default:
                return 'black';
        }
    }
    getColorForPoolStatus(status:boolean){
        switch (status){
            case true:
                return 'blue';
            case false:
                return 'black';
            default:
                return 'black';
        }
    }
}
