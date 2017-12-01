import { Component, OnInit } from '@angular/core';
import {AssetsPoolService} from "../services/assets-pool.service";

@Component({
  selector: 'app-asset-pool-create',
  templateUrl: './asset-pool-create.component.html',
  styleUrls: ['./asset-pool-create.component.css']
})
export class AssetPoolCreateComponent implements OnInit {

  selectedStepperNumber=1;
  constructor(private assetPoolService:AssetsPoolService) { }

  ngOnInit() {
  }

    stepperSelected(index:number){
    this.selectedStepperNumber=index;
    }
}
