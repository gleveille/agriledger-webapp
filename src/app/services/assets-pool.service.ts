import { Injectable } from '@angular/core';

@Injectable()
export class AssetsPoolService {

  selectedAssetsForPool:any[]=[];
  constructor() { }


  addAssetInPool(assets:any[]){
    this.selectedAssetsForPool=assets;
  }

  getSelectedAssetsForPool(){

    return this.selectedAssetsForPool;
  }
}
