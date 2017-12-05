
// This  file contains list of all the api this angular application uses.
// This file also documenting how to use the api

import {environment} from '../environments/environment';
export const ServerUrl=environment.apiURL+':'+environment.apiPORT;
export const BlockChainServerUrl=environment.blockchainURL;



const ProfileApi= {
    getProfileByPasscode:()=>ServerUrl +'/api/profiles/findOne?filter[where][passcode]',
    getProfileById:()=>ServerUrl +'/api/profiles',
    createProfile:()=>ServerUrl +'/api/profiles' ,
    listProfile: ()=>ServerUrl +'/api/profiles',
    updateProfile:()=>ServerUrl +'/api/profiles'
};

const ContainerApi={
    ProfileUploadUrl:()=>ServerUrl+'/api/containers/profiles/upload',
    FieldUploadUrl:()=>ServerUrl+'/api/containers/fields/upload'

};


const UserApi={
    login:{
        url:()=>ServerUrl+'/api/users/login',
        method:'POST'

    },
    logout:{
        url:()=>ServerUrl+'/api/users/logout',
        method:'POST'

    },
    changePassword:{
        url:()=>ServerUrl+'/api/users/change-password',
        method:'POST'

    },
    findById:{
        url:()=>ServerUrl+'/api/users',
        method:'POST'

    },
    list:{
        url:()=>ServerUrl+'/api/users',
        method:'GET'

    }
}

const AssetApi={
    getAssets:{
        url:()=>ServerUrl+'/api/assets',
        method:'GET',
        params:['filterType','filterName']
    },
    getCategories:{
        url:()=>ServerUrl+'/api/blockchain/asset/category',
        method:'GET',
        params:['level']
    }

};




/*

ALL EXPRESS RELATING ROUTING API GOES HERE
*/


const WalletApi={
    getAccount:{
        url:()=>ServerUrl+'/api/blockchain/wallet/account',
        method:'GET',
        params:'address'
    },
    getTransaction:{
        url:()=>ServerUrl+'/api/blockchain/wallet/transactions',
        method:'GET',
        params:['senderPublicKey','recipientId']
    }
}



const OnboardingApi={
    createAccount:{
        url:()=>ServerUrl+'/api/blockchain/onboarding/account',
        method:'POST'
    },
    getAccount:{
        url:()=>WalletApi.getAccount.url(),
        method:'GET',
        params:'address'
    },
    resgisterIssuer:{
        url:()=>ServerUrl+'/api/blockchain/onboarding/issuer',
        method:'POST',
        params:'address'
    }
}



const AssetPoolApi={
    createAssetpool:{
        url:()=>ServerUrl+'/api/blockchain/assetpool/create',
        method:'POST'
    },
    getAssetpool:{
        url:()=>ServerUrl+'/api/assetpools',
        method:'POST'
    },
    getAssetpoolInfoFromBlockchain:{
        url:()=>ServerUrl+'/api/blockchain/assetpool/getinfo',
        method:'GET',
        params:['assetName']
    }
};



export {UserApi,OnboardingApi,WalletApi,AssetApi,AssetPoolApi}
