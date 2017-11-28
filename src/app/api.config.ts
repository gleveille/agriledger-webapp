
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


const OnboardingApi={
    createAccount:{
        url:()=>ServerUrl+'/api/blockchain/account',
        method:'POST'
    }
}



const marketApi={
    //Get all trading area
    "getTradingArea":{
        "url":()=>ServerUrl+"/api/markets/getTransactionInfoOfCurrency",
        "method":"POST"
    },

    //Recommended exercise
    "recommededExcercise":{
        "url":()=>ServerUrl+"/api/markets/web/homeexercise",
        "method":"POST"
    },
    "login":{
        "url":()=>ServerUrl+"/api/markets/login",
        "method":"POST"
    },
    "getUserInfo":{
        "url":()=>ServerUrl+"/api/markets/getUserInfo",
        "method":"POST"
    }
}



 const BlockChainApi={
    "loginApi": {
        "url":()=> BlockChainServerUrl+"/api/accounts/open2"
    },
    //	余额账单Apiget /api/accounts?address=4205898691220223329L
    "accountApi": {
        "url":()=> BlockChainServerUrl+"/api/accounts"
    },
    "transactionsApi": {
        "url":()=> BlockChainServerUrl+"/api/transactions"
    },
    // 获取受托人接口
    "delegatesApi": {
        "mock": "/data/vote/delegates.json",
        "url":()=> BlockChainServerUrl+"/api/delegates"
    },
    // 获取我的投票列表借口
    "myvotesApi": {
        "mock": "/data/vote/delegates.json",
        "url":()=> BlockChainServerUrl+"/api/accounts/delegates"
    },
    // 获取我的投票列表借口
    "blocksApi": {
        "mock": "/data/blockchain/blocks.json",
        "url":()=> BlockChainServerUrl+"/api/blocks"
    },
    //受托人的基本信息
    "blockforgingApi": {
        "mock": "/data/blockforging/delegates.json",
        "url":()=> BlockChainServerUrl+"/api/delegates/get"
    },
    //详情基本信息
    "blocksDetailApi": {
        "mock": "/data/blockDetail/getblocks.json",
        "url":()=> BlockChainServerUrl+"/api/blocks/get"
    },
    //账户基本信息
    "accountdetailApi": {
        "mock": "/data/accountdetail/accounts.json",
        "url":()=> BlockChainServerUrl+"/api/accounts"
    },
    //谁投我的票接口
    "votetomeApi": {
        "mock": "/data/vote/voter.json",
        "url":()=> BlockChainServerUrl+"/api/delegates/voters"
    },
    //节点列表
    "peerApi": {
        "mock": "/data/peer/peers.json",
        "url":()=> BlockChainServerUrl+"/api/peers"
    },
    "postApi": {
        "mock": "/data/vote/delegates.json",
        "url":()=> BlockChainServerUrl+"/peer/transactions"
    },
    "appListApi": {
        "mock": "/data/application/applist.json",
        "url":()=> BlockChainServerUrl+"/api/dapps"
    },
    "appInstalledApi": {
        "mock": "/data/application/applist.json",
        "url":()=> BlockChainServerUrl+"/api/dapps/installed"
    },
    "forgingStatusApi": {
        "mock": "/data/blockforging/status.json",
        "url":()=> BlockChainServerUrl+"/api/delegates/forging/status"
    },
    ///api/uia/balances/:address
    "myBalancesApi": {
        "mock": "/data/assets/my-balances.json",
        "url":()=> BlockChainServerUrl+"/api/uia/balances"
    },
    //api/uia/issuers/:address
    "issuerApi": {
        "mock": "/data/assets/issuer.json",
        "url":()=> BlockChainServerUrl+"/api/uia/issuers"
    },
    // /api/uia/issuers/:name/assets
    "myAssetsApi": {
        "mock": "/data/assets/my-assets.json",
        "url":()=> BlockChainServerUrl+"/api/uia/issuers"
    },
    // 获取资产活动记录
    "myTransactionsApi": {
        "mock": "/data/assets/my-transactions.json",
        "url":()=> BlockChainServerUrl+"/api/uia/transactions/:address"
    },
    // 获取资产访问控制列表
    "assetAclApi": {
        "mock": "/data/assets/acl.json",
        "url":()=> BlockChainServerUrl+"/api/uia/assets/:name/acl/:flag"
    },
    //added 2017/04/29
    //获取资产评估-待审核列表
    "assetPendingApi": {
        "mock": "/data/assetevaluation/assetPending.json",
        "url":()=> BlockChainServerUrl+"/api/uia/assets/applying"
    },
    //获取资产评估-发行待审核列表
    "publishpendingApi": {
        "mock": "/data/assetevaluation/publishPending.json",
        "url":()=> BlockChainServerUrl+"/api/uia/issues/applying"
    },
    //获取资产评估-发行资产投票详情
    "publishvoterApi": {
        "mock": "/data/assetevaluation/publishvoter.json",
        "url":()=> BlockChainServerUrl+"/api/uia/issues/:id/voters"
    },
    //获取资产评估-已通过列表
    "assetApprovedApi": {
        "mock": "/data/assetevaluation/assetApproved.json",
        "url":()=> BlockChainServerUrl+"/api/uia/assets/approved"
    },
    //获取资产评估-注册待审核及已通过资产投票详情
    "assetvoterApi": {
        "mock": "/data/assetevaluation/assetvoter.json",
        "url":()=> BlockChainServerUrl+"/api/uia/assets/:currency/voters"
    },
    //获取资产评估-资产详情
    "assetdetailApi": {
        "mock": "/data/assetdetail/assetdetail.json",
        "url":()=> BlockChainServerUrl+"/api/uia/assets/:currency"
    },
    //注册资产-获取资产类别
    "assetcategoryApi":{
        "mock": "/data/assets/category.json",
        "url":()=> BlockChainServerUrl+"/api/uia/categories/0"
    },
    //
    //api/uia/categories/:id
    "assetcategorynextApi":{
        "url":()=> BlockChainServerUrl+"/api/uia/categories"
    },
    //Home-获取具体交易信息
    "transactiondetailApi":{
        "url":()=> BlockChainServerUrl+"/api/transactions/get"
    }
}


export {UserApi,ProfileApi,BlockChainApi,OnboardingApi}
