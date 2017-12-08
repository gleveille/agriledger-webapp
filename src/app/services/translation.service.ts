import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class TranslationService {

  constructor(private translate: TranslateService) {

      this.translate.setDefaultLang('en');

      // the lang to use, if the lang isn't available, it will use the current loader to get them

      this.translate.use('en');
  }


  changeLanguage(language:string){
      this.translate.use(language);

  }
}
