
// This  file contains list of all the api this angular application uses.
// This file also documenting how to use the api

import {environment} from '../environments/environment';
export const ServerUrl=environment.apiURL+':'+environment.apiPORT;



export const ProfileApi= {
    getProfileByPasscode:()=>ServerUrl +'/api/profiles/findOne?filter[where][passcode]',
    getProfileById:()=>ServerUrl +'/api/profiles',
    createProfile:()=>ServerUrl +'/api/profiles' ,
    listProfile: ()=>ServerUrl +'/api/profiles',
    updateProfile:()=>ServerUrl +'/api/profiles'
};

export const ContainerApi={
    ProfileUpload:{url:()=>ServerUrl+'/api/containers/profiles/upload'},
    AssetEvidencesUpload:{url:()=>ServerUrl+ '/api/containers/evidences/upload'},
    AssetDocuementsUpload:{url:()=>ServerUrl+ '/api/containers/asset_documents/upload'},
    profileDocumentsUpload:{url:()=>ServerUrl+ '/api/containers/profile_documents/upload'}
};

export const AddressApi={
    getCountry:{
        url:()=>ServerUrl+'/api/countries',
        method:'GET',
        queryParams:[]
    },
    getProvince:{
        url:()=>ServerUrl+'/api/provinces',
        method:'GET',
        queryParams:['country']
    },
    getCity:{
        url:()=>ServerUrl+'/api/cities',
        method:'GET',
        queryParams:['province']
    },
    getDistrict:{
        url:()=>ServerUrl+'/api/districts',
        method:'GET',
        queryParams:['city']
    },
};


export const UserApi={
    login:{
        url:()=>ServerUrl+'/api/users/login',
        method:'POST'

    },
    register:{
        url:()=>ServerUrl+'/api/users',
        method:'POST'

    },
    changePassword:{
        url:()=>ServerUrl+'/api/users/change-password',
        method:'POST'

    },
    resetPassword: {
        url: ()=>ServerUrl + '/api/users/reset-password',
        method: 'POST'

    },
    sendResetPasswordToken: {
        url: ()=>ServerUrl + '/api/users/reset',
        method: 'GET'
    },
    logout:{
        url:()=>ServerUrl+'/api/users/logout',
        method:'POST'

    },
    findById:{
        url:()=>ServerUrl+'/api/users',
        method:'POST'

    },
    getProfile:{
        url:()=>ServerUrl+'/api/users',
        method:'POST'
    },
    updateProfile:{
        url:()=>ServerUrl+'/api/users',
        method:'POST'
    },
    list:{
        url:()=>ServerUrl+'/api/users',
        method:'GET'

    }
}

export const AssetApi={
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

export const FavouriteAssetApi={
    getAssets:{
        url:()=>ServerUrl+'/api/favouriteAssets',
        method:'GET',
        params:[]
    },
    addToFavourite:{
        url:()=>ServerUrl+'/api/favouriteAssets',
        method:'POST',
        params:['assetId','userId']
    },
    removeFromFavourite:{
        url:()=>ServerUrl+'/api/favouriteAssets',
        method:'DELETE',
        params:['assetId']
    },
};


/*

ALL EXPRESS RELATING ROUTING API GOES HERE
*/


export const WalletApi={
    getAccount:{
        url:()=>ServerUrl+'/api/blockchain/wallet/account',
        method:'GET',
        params:'address'
    },
    getTransaction:{
        url:()=>ServerUrl+'/api/blockchain/wallet/transactions',
        method:'GET',
        params:['senderPublicKey','recipientId']
    },

    sendTransaction:{
        url:()=>ServerUrl+'/api/blockchain/wallet/send',
        method:'POST',
        params:['senderPublicKey','recipientId']
    }
}



export const OnboardingApi={
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

export const TokenApi={
    getTokens:{
        url:()=>ServerUrl+'/api/tokens',
        method:'GET',

    },
    getAllTokensFromBlockchain:{
        url:()=>ServerUrl+'/api/blockchain/token/getAllTokens',
        method:'GET'
    },
    getTokensByAddressFromBlockchain:{
        url:()=>ServerUrl+'/api/blockchain/token/getTokensByAddress',
        method:'GET',
        query:['address']
    },
};




export const AssetPoolApi={
    createAssetpool:{
        url:()=>ServerUrl+'/api/blockchain/assetpool/create',
        method:'POST'
    },
    getAssetpool:{
        url:()=>ServerUrl+'/api/assetpools',
        method:'POST'
    },
    issueToken:{
        url:()=>ServerUrl+'/api/blockchain/assetpool/issueToken',
        method:'POST',
        body:['amount','exchangeRate','precision','currency']

    },
    getAssetpoolInfoFromBlockchain:{
        url:()=>ServerUrl+'/api/blockchain/assetpool/getinfo',
        method:'GET',
        params:['assetName']
    }
};



