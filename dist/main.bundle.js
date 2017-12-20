webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ServerUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OnboardingApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WalletApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AssetPoolApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TokenApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
// This  file contains list of all the api this angular application uses.
// This file also documenting how to use the api

var ServerUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL + ':' + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiPORT;
var ProfileApi = {
    getProfileByPasscode: function () { return ServerUrl + '/api/profiles/findOne?filter[where][passcode]'; },
    getProfileById: function () { return ServerUrl + '/api/profiles'; },
    createProfile: function () { return ServerUrl + '/api/profiles'; },
    listProfile: function () { return ServerUrl + '/api/profiles'; },
    updateProfile: function () { return ServerUrl + '/api/profiles'; }
};
var ContainerApi = {
    ProfileUploadUrl: function () { return ServerUrl + '/api/containers/profiles/upload'; },
    FieldUploadUrl: function () { return ServerUrl + '/api/containers/fields/upload'; }
};
var UserApi = {
    login: {
        url: function () { return ServerUrl + '/api/users/login'; },
        method: 'POST'
    },
    register: {
        url: function () { return ServerUrl + '/api/users'; },
        method: 'POST'
    },
    logout: {
        url: function () { return ServerUrl + '/api/users/logout'; },
        method: 'POST'
    },
    changePassword: {
        url: function () { return ServerUrl + '/api/users/change-password'; },
        method: 'POST'
    },
    findById: {
        url: function () { return ServerUrl + '/api/users'; },
        method: 'POST'
    },
    list: {
        url: function () { return ServerUrl + '/api/users'; },
        method: 'GET'
    }
};
var AssetApi = {
    getAssets: {
        url: function () { return ServerUrl + '/api/assets'; },
        method: 'GET',
        params: ['filterType', 'filterName']
    },
    getCategories: {
        url: function () { return ServerUrl + '/api/blockchain/asset/category'; },
        method: 'GET',
        params: ['level']
    }
};
/*

ALL EXPRESS RELATING ROUTING API GOES HERE
*/
var WalletApi = {
    getAccount: {
        url: function () { return ServerUrl + '/api/blockchain/wallet/account'; },
        method: 'GET',
        params: 'address'
    },
    getTransaction: {
        url: function () { return ServerUrl + '/api/blockchain/wallet/transactions'; },
        method: 'GET',
        params: ['senderPublicKey', 'recipientId']
    },
    sendTransaction: {
        url: function () { return ServerUrl + '/api/blockchain/wallet/send'; },
        method: 'POST',
        params: ['senderPublicKey', 'recipientId']
    }
};
var OnboardingApi = {
    createAccount: {
        url: function () { return ServerUrl + '/api/blockchain/onboarding/account'; },
        method: 'POST'
    },
    getAccount: {
        url: function () { return WalletApi.getAccount.url(); },
        method: 'GET',
        params: 'address'
    },
    resgisterIssuer: {
        url: function () { return ServerUrl + '/api/blockchain/onboarding/issuer'; },
        method: 'POST',
        params: 'address'
    }
};
var TokenApi = {
    getTokens: {
        url: function () { return ServerUrl + '/api/tokens'; },
        method: 'GET',
    },
    getAllTokensFromBlockchain: {
        url: function () { return ServerUrl + '/api/blockchain/token/getAllTokens'; },
        method: 'GET'
    },
    getTokensByAddressFromBlockchain: {
        url: function () { return ServerUrl + '/api/blockchain/token/getTokensByAddress'; },
        method: 'GET',
        query: ['address']
    },
};
var AssetPoolApi = {
    createAssetpool: {
        url: function () { return ServerUrl + '/api/blockchain/assetpool/create'; },
        method: 'POST'
    },
    getAssetpool: {
        url: function () { return ServerUrl + '/api/assetpools'; },
        method: 'POST'
    },
    issueToken: {
        url: function () { return ServerUrl + '/api/blockchain/assetpool/issueToken'; },
        method: 'POST',
        body: ['amount', 'exchangeRate', 'precision', 'currency']
    },
    getAssetpoolInfoFromBlockchain: {
        url: function () { return ServerUrl + '/api/blockchain/assetpool/getinfo'; },
        method: 'GET',
        params: ['assetName']
    }
};



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\n<ng2-toasty [position]=\"'bottom-right'\"></ng2-toasty>\n\n<div class=\"wrapper\">\n\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_translation_service__ = __webpack_require__("../../../../../src/app/services/translation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(userService, translationService) {
        this.userService = userService;
        this.translationService = translationService;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_translation_service__["a" /* TranslationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_account_account_component__ = __webpack_require__("../../../../../src/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_password_change_password_change_component__ = __webpack_require__("../../../../../src/app/components/password-change/password-change.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_password_reset_password_reset_component__ = __webpack_require__("../../../../../src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_account_activation_account_activation_component__ = __webpack_require__("../../../../../src/app/components/account-activation/account-activation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_authentication_guard__ = __webpack_require__("../../../../../src/app/guards/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_dashboardAuthorization_guard__ = __webpack_require__("../../../../../src/app/guards/dashboardAuthorization.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_already_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/already-authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_interceptor_service__ = __webpack_require__("../../../../../src/app/services/interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_onboarding_onboarding_component__ = __webpack_require__("../../../../../src/app/components/onboarding/onboarding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_page403_page403_component__ = __webpack_require__("../../../../../src/app/shared/page403/page403.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_issuer_registration_issuer_registration_component__ = __webpack_require__("../../../../../src/app/components/issuer-registration/issuer-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_onboarding_guard_already_reset_password_guard__ = __webpack_require__("../../../../../src/app/guards/onboarding-guard/already-reset-password.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_onboarding_guard_already_registered_on_blockchain_guard__ = __webpack_require__("../../../../../src/app/guards/onboarding-guard/already-registered-on-blockchain.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__guards_onboarding_guard_already_an_issuer_guard__ = __webpack_require__("../../../../../src/app/guards/onboarding-guard/already-an-issuer.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_assets_assets_component__ = __webpack_require__("../../../../../src/app/components/assets/assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_wallet_wallet_component__ = __webpack_require__("../../../../../src/app/components/wallet/wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_farmers_farmers_component__ = __webpack_require__("../../../../../src/app/components/farmers/farmers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_error_handler_service__ = __webpack_require__("../../../../../src/app/services/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_farmer_service__ = __webpack_require__("../../../../../src/app/services/farmer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_spinner_spinner_component__ = __webpack_require__("../../../../../src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_error_show_error_show_component__ = __webpack_require__("../../../../../src/app/shared/error-show/error-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_assets_service__ = __webpack_require__("../../../../../src/app/services/assets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_assets_pool_service__ = __webpack_require__("../../../../../src/app/services/assets-pool.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_asset_view_asset_view_component__ = __webpack_require__("../../../../../src/app/components/asset-view/asset-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_asset_pool_view_asset_pool_view_component__ = __webpack_require__("../../../../../src/app/components/asset-pool-view/asset-pool-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_asset_pool_list_asset_pool_list_component__ = __webpack_require__("../../../../../src/app/components/asset-pool-list/asset-pool-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_asset_pool_create_asset_pool_create_component__ = __webpack_require__("../../../../../src/app/components/asset-pool-create/asset-pool-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_tokens_tokens_component__ = __webpack_require__("../../../../../src/app/components/tokens/tokens.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_transfer_transfer_component__ = __webpack_require__("../../../../../src/app/components/transfer/transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__services_translation_service__ = __webpack_require__("../../../../../src/app/services/translation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_user_create_user_create_component__ = __webpack_require__("../../../../../src/app/components/user-create/user-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_user_update_user_update_component__ = __webpack_require__("../../../../../src/app/components/user-update/user-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/components/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__image_popup_image_popup_component__ = __webpack_require__("../../../../../src/app/image-popup/image-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























































function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_49__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/translations/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardSponserComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_password_change_password_change_component__["a" /* PasswordChangeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_account_activation_account_activation_component__["a" /* AccountActivationComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_onboarding_onboarding_component__["a" /* OnboardingComponent */],
                __WEBPACK_IMPORTED_MODULE_24__shared_page403_page403_component__["a" /* Page403Component */],
                __WEBPACK_IMPORTED_MODULE_25__components_issuer_registration_issuer_registration_component__["a" /* IssuerRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_assets_assets_component__["a" /* AssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_wallet_wallet_component__["a" /* WalletComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_farmers_farmers_component__["a" /* FarmersComponent */],
                __WEBPACK_IMPORTED_MODULE_34__shared_spinner_spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shared_error_show_error_show_component__["a" /* ErrorShowComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_asset_view_asset_view_component__["a" /* AssetViewComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_asset_pool_view_asset_pool_view_component__["a" /* AssetPoolViewComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_asset_pool_list_asset_pool_list_component__["a" /* AssetPoolListComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_asset_pool_create_asset_pool_create_component__["a" /* AssetPoolCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_tokens_tokens_component__["a" /* TokensComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_transfer_transfer_component__["a" /* TransferComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_user_create_user_create_component__["a" /* UserCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_user_update_user_update_component__["a" /* UserUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_54__image_popup_image_popup_component__["a" /* ImagePopupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_toasty__["b" /* ToastyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_40_ngx_progressbar__["b" /* NgProgressModule */],
                __WEBPACK_IMPORTED_MODULE_44_ngx_bootstrap__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_44_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_44_ngx_bootstrap__["c" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_44_ngx_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_48__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_48__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_21__services_interceptor_service__["a" /* InterceptorService */],
                    multi: true
                },
                { provide: __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_40_ngx_progressbar__["a" /* NgProgressInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_32__services_error_handler_service__["a" /* ErrorHandlerService */],
                __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_16__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_33__services_farmer_service__["a" /* FarmerService */],
                __WEBPACK_IMPORTED_MODULE_36__services_assets_service__["a" /* AssetsService */],
                __WEBPACK_IMPORTED_MODULE_37__services_assets_pool_service__["a" /* AssetsPoolService */],
                __WEBPACK_IMPORTED_MODULE_38__services_wallet_service__["a" /* WalletService */],
                __WEBPACK_IMPORTED_MODULE_46__services_token_service__["a" /* TokenService */],
                __WEBPACK_IMPORTED_MODULE_50__services_translation_service__["a" /* TranslationService */],
                __WEBPACK_IMPORTED_MODULE_17__guards_authentication_guard__["a" /* AuthenticationGuard */],
                __WEBPACK_IMPORTED_MODULE_18__guards_dashboardAuthorization_guard__["a" /* DashboardAuthorizationGuard */],
                __WEBPACK_IMPORTED_MODULE_19__guards_already_authenticated_guard__["a" /* AlreadyAuthenticatedGuard */],
                __WEBPACK_IMPORTED_MODULE_26__guards_onboarding_guard_already_reset_password_guard__["a" /* AlreadyResetPasswordGuard */],
                __WEBPACK_IMPORTED_MODULE_27__guards_onboarding_guard_already_registered_on_blockchain_guard__["a" /* AlreadyRegisteredOnBlockchainGuard */],
                __WEBPACK_IMPORTED_MODULE_28__guards_onboarding_guard_already_an_issuer_guard__["a" /* AlreadyAnIssuerGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_account_account_component__ = __webpack_require__("../../../../../src/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_password_change_password_change_component__ = __webpack_require__("../../../../../src/app/components/password-change/password-change.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_account_activation_account_activation_component__ = __webpack_require__("../../../../../src/app/components/account-activation/account-activation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_authentication_guard__ = __webpack_require__("../../../../../src/app/guards/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_dashboardAuthorization_guard__ = __webpack_require__("../../../../../src/app/guards/dashboardAuthorization.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_already_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/already-authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_onboarding_onboarding_component__ = __webpack_require__("../../../../../src/app/components/onboarding/onboarding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_page403_page403_component__ = __webpack_require__("../../../../../src/app/shared/page403/page403.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_issuer_registration_issuer_registration_component__ = __webpack_require__("../../../../../src/app/components/issuer-registration/issuer-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_onboarding_guard_already_reset_password_guard__ = __webpack_require__("../../../../../src/app/guards/onboarding-guard/already-reset-password.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_onboarding_guard_already_registered_on_blockchain_guard__ = __webpack_require__("../../../../../src/app/guards/onboarding-guard/already-registered-on-blockchain.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_onboarding_guard_already_an_issuer_guard__ = __webpack_require__("../../../../../src/app/guards/onboarding-guard/already-an-issuer.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_assets_assets_component__ = __webpack_require__("../../../../../src/app/components/assets/assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_wallet_wallet_component__ = __webpack_require__("../../../../../src/app/components/wallet/wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_farmers_farmers_component__ = __webpack_require__("../../../../../src/app/components/farmers/farmers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/shared/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_contact_contact_component__ = __webpack_require__("../../../../../src/app/shared/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_privacy_privacy_component__ = __webpack_require__("../../../../../src/app/shared/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_terms_terms_component__ = __webpack_require__("../../../../../src/app/shared/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_asset_view_asset_view_component__ = __webpack_require__("../../../../../src/app/components/asset-view/asset-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_asset_pool_create_asset_pool_create_component__ = __webpack_require__("../../../../../src/app/components/asset-pool-create/asset-pool-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_asset_pool_view_asset_pool_view_component__ = __webpack_require__("../../../../../src/app/components/asset-pool-view/asset-pool-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_asset_pool_list_asset_pool_list_component__ = __webpack_require__("../../../../../src/app/components/asset-pool-list/asset-pool-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_tokens_tokens_component__ = __webpack_require__("../../../../../src/app/components/tokens/tokens.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_transfer_transfer_component__ = __webpack_require__("../../../../../src/app/components/transfer/transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_password_reset_password_reset_component__ = __webpack_require__("../../../../../src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_user_create_user_create_component__ = __webpack_require__("../../../../../src/app/components/user-create/user-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/components/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_user_update_user_update_component__ = __webpack_require__("../../../../../src/app/components/user-update/user-update.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_already_authenticated_guard__["a" /* AlreadyAuthenticatedGuard */]],
    },
    {
        path: 'unauthorised',
        component: __WEBPACK_IMPORTED_MODULE_13__shared_page403_page403_component__["a" /* Page403Component */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_authentication_guard__["a" /* AuthenticationGuard */]],
    },
    {
        path: 'about-us',
        component: __WEBPACK_IMPORTED_MODULE_21__shared_about_us_about_us_component__["a" /* AboutUsComponent */],
    },
    {
        path: 'contact-us',
        component: __WEBPACK_IMPORTED_MODULE_22__shared_contact_contact_component__["a" /* ContactComponent */],
    },
    {
        path: 'privacy',
        component: __WEBPACK_IMPORTED_MODULE_23__shared_privacy_privacy_component__["a" /* PrivacyComponent */],
    },
    {
        path: 'terms',
        component: __WEBPACK_IMPORTED_MODULE_24__shared_terms_terms_component__["a" /* TermsComponent */],
    },
    {
        path: 'onboarding',
        component: __WEBPACK_IMPORTED_MODULE_12__components_onboarding_onboarding_component__["a" /* OnboardingComponent */],
        children: [
            { path: '', redirectTo: 'password-reset', pathMatch: 'full' },
            {
                path: 'password-reset',
                component: __WEBPACK_IMPORTED_MODULE_31__components_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_authentication_guard__["a" /* AuthenticationGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_onboarding_guard_already_reset_password_guard__["a" /* AlreadyResetPasswordGuard */]],
                data: {
                    expectedRole: ['sponsor', 'ops']
                },
            },
            {
                path: 'account-activation',
                component: __WEBPACK_IMPORTED_MODULE_6__components_account_activation_account_activation_component__["a" /* AccountActivationComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_authentication_guard__["a" /* AuthenticationGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_onboarding_guard_already_registered_on_blockchain_guard__["a" /* AlreadyRegisteredOnBlockchainGuard */]],
                data: {
                    expectedRole: ['sponsor', 'ops']
                }
            },
            {
                path: 'issuer-registration',
                component: __WEBPACK_IMPORTED_MODULE_14__components_issuer_registration_issuer_registration_component__["a" /* IssuerRegistrationComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_authentication_guard__["a" /* AuthenticationGuard */], __WEBPACK_IMPORTED_MODULE_17__guards_onboarding_guard_already_an_issuer_guard__["a" /* AlreadyAnIssuerGuard */]],
                data: {
                    expectedRole: ['sponsor']
                }
            }
        ]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardSponserComponent */],
        data: {
            expectedRole: ['sponsor', 'ops']
        },
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_authentication_guard__["a" /* AuthenticationGuard */], __WEBPACK_IMPORTED_MODULE_10__guards_dashboardAuthorization_guard__["a" /* DashboardAuthorizationGuard */]],
        children: [
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'account', component: __WEBPACK_IMPORTED_MODULE_4__components_account_account_component__["a" /* AccountComponent */] },
            { path: 'farmers', component: __WEBPACK_IMPORTED_MODULE_20__components_farmers_farmers_component__["a" /* FarmersComponent */] },
            { path: 'assets', component: __WEBPACK_IMPORTED_MODULE_18__components_assets_assets_component__["a" /* AssetsComponent */] },
            { path: 'assets/:assetId', component: __WEBPACK_IMPORTED_MODULE_25__components_asset_view_asset_view_component__["a" /* AssetViewComponent */] },
            { path: 'assets-pool-list', component: __WEBPACK_IMPORTED_MODULE_28__components_asset_pool_list_asset_pool_list_component__["a" /* AssetPoolListComponent */] },
            { path: 'assets-pool-view/:assetPoolId', component: __WEBPACK_IMPORTED_MODULE_27__components_asset_pool_view_asset_pool_view_component__["a" /* AssetPoolViewComponent */] },
            { path: 'assets-pool-create', component: __WEBPACK_IMPORTED_MODULE_26__components_asset_pool_create_asset_pool_create_component__["a" /* AssetPoolCreateComponent */] },
            { path: 'account', component: __WEBPACK_IMPORTED_MODULE_4__components_account_account_component__["a" /* AccountComponent */] },
            { path: 'wallet', component: __WEBPACK_IMPORTED_MODULE_19__components_wallet_wallet_component__["a" /* WalletComponent */] },
            { path: 'transfer', component: __WEBPACK_IMPORTED_MODULE_30__components_transfer_transfer_component__["a" /* TransferComponent */] },
            { path: 'tokens', component: __WEBPACK_IMPORTED_MODULE_29__components_tokens_tokens_component__["a" /* TokensComponent */] },
            { path: 'tokens/:assetPoolId', component: __WEBPACK_IMPORTED_MODULE_29__components_tokens_tokens_component__["a" /* TokensComponent */] },
            { path: 'password-change', component: __WEBPACK_IMPORTED_MODULE_5__components_password_change_password_change_component__["a" /* PasswordChangeComponent */] },
            { path: 'user-create', component: __WEBPACK_IMPORTED_MODULE_32__components_user_create_user_create_component__["a" /* UserCreateComponent */] },
            { path: 'user-list', component: __WEBPACK_IMPORTED_MODULE_33__components_user_list_user_list_component__["a" /* UserListComponent */] },
            { path: 'user-update', component: __WEBPACK_IMPORTED_MODULE_34__components_user_update_user_update_component__["a" /* UserUpdateComponent */] },
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/account-activation/account-activation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card .card-header {\n    margin: 0;\n    border-radius: 3px;\n    padding: 15px;\n}\n\n.card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n\n.navbar.navbar-primary {\n    background-color: #6ab187;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account-activation/account-activation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"title\">{{'ACCOUNT_CREATE'|translate}}</h4>\n            <p class=\"category\">{{'REGISTER_ON_BLOCKCHAIN'|translate}}</p>\n          </div>\n          <div class=\"card-content\">\n            <form>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">{{'SPONSOR_NAME'|translate}}</label>\n                    <input [disabled]=\"true\" [(ngModel)]=\"user.name\"  name=\"name\" type=\"text\" class=\"form-control\" >\n                  </div>\n                </div>\n              </div>\n\n\n              <button [disabled]=\"accountRequestStatus==='pending'\"\n                      (click)=\"createBlockchainAccount()\"\n                      type=\"submit\"\n                      class=\"btn btn-danger pull-right\">\n                {{'Create'|translate}}\n              </button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/account-activation/account-activation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountActivationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountActivationComponent = (function () {
    function AccountActivationComponent(userService, router, toastService) {
        this.userService = userService;
        this.router = router;
        this.toastService = toastService;
        this.user = {};
        this.accountRequestStatus = 'resolved';
    }
    AccountActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            _this.user = user;
        }, function (err) {
            console.log(err);
        });
    };
    AccountActivationComponent.prototype.createBlockchainAccount = function () {
        var _this = this;
        if (this.accountRequestStatus === 'pending') {
            return false;
        }
        this.accountRequestStatus = 'pending';
        this.userService.createAccountOnBlockchain().subscribe(function (user) {
            _this.accountRequestStatus = 'resolved';
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            _this.accountRequestStatus = 'rejected';
            console.log(err);
            _this.toastService.error('Account', err.message);
        });
    };
    AccountActivationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account-activation',
            template: __webpack_require__("../../../../../src/app/components/account-activation/account-activation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account-activation/account-activation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], AccountActivationComponent);
    return AccountActivationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n\n.navbar.navbar-primary {\n    background-color: #6ab187;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 col-lg-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"green\">\n                        <h4 class=\"title\">My Account</h4>\n                    </div>\n                    <div class=\"card-content\" style=\"margin-top: 30px;\">\n                        <div class=\" card-profile\">\n                            <div class=\"card-avatar\" style=\"width: 60px;height: 60px;\">\n                                <a href=\"javascipt:void(0)\">\n                                    <img class=\"img\" src=\"../assets/img/default-avatar.png\"/>\n                                </a>\n                            </div>\n\n                            <div class=\"content\" style=\"padding-left: 20px;padding-right: 20px;\">\n                                <h4 class=\"card-title\" style=\"text-transform: capitalize\">{{user?.name}} </h4>\n                                <p class=\"text-gray\">\n                                    <span>{{user?.email}}</span>\n                                    &nbsp;\n                                    <span style=\"border:0.5px solid  #999999;\"></span>\n                                    &nbsp;\n                                    <span>{{user?.phone||'Mobile unavailable'}}</span>&nbsp;\n\n                                    <span style=\"border:0.5px solid  #999999;\"></span>\n                                    &nbsp;\n                                    <span>member since {{user?.createdAt|moment:true}}</span>&nbsp;\n\n                                </p>\n\n\n                                <p class=\"text-gray\">\n                                    <b>Issuer Name: {{user?.issuerName}}</b>\n\n                                </p>\n                                <p class=\"text-gray\">\n                                    <b>Wallet Address: {{user?.walletAddress}}</b>\n\n                                </p>\n                                <div class=\" card-content\">\n                              <!--      <div class=\"col-md-6 \">\n                                        <div class=\"form-group label-floating has-success\">\n                                            <label class=\"control-label\">Blockchain Account</label>\n                                            <input [disabled]=\"true\" type=\"text\" value=\"Registered\" class=\"form-control\"/>\n                                                <span class=\"form-control-feedback\">\n                                    <i class=\"material-icons\">done</i>\n                                </span>\n                                        </div>\n\n\n\n                                    </div>\n\n\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group label-floating has-success\">\n                                            <label class=\"control-label\">Issuer Account</label>\n                                            <input [disabled]=\"true\" type=\"text\" value=\"Active\" class=\"form-control\"/>\n                                                <span class=\"form-control-feedback\">\n                                    <i class=\"material-icons\">done</i>\n                                </span>\n                                        </div>\n\n\n                                    </div>-->\n\n\n                                </div>\n\n                                <hr>\n                                <p>\n                                    <i class=\"material-icons\">info_outline</i>\n                                    <span style=\"position: relative;bottom: 7px;\" class=\"text-gray\">To change any information please contact us at\n                                        help@agriledger.co</span>\n                                </p>\n\n                                <!--\n                                                    <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>\n                                -->\n                            </div>\n\n\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = (function () {
    function AccountComponent(userService) {
        this.userService = userService;
        this.user = {};
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            _this.user = user;
        }, function (err) {
            console.log(err);
        });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/components/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/asset-pool-create/asset-pool-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stepper {\r\n    background-color: #fff;\r\n    margin-bottom: 90px;\r\n    border-radius: 3px;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.stepper-steps {\r\n    height: 72px;\r\n    background-color: #fff;\r\n    border-radius: 3px;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.stepper-steps-isOffset {\r\n    position: relative;\r\n    top: -30px;\r\n    margin: 0 15px -30px 15px;\r\n}\r\n\r\n.stepper-content {\r\n    padding: 24px;\r\n}\r\n\r\n.stepper-step {\r\n    float: left;\r\n    width: 25%;\r\n    padding: 24px;\r\n    cursor: pointer;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n.stepper-step:not(.stepper-step-isDisabled):hover, .stepper-step:not(.stepper-step-isDisabled):hover .stepper-stepContent {\r\n    background-color: #F5F5F5;\r\n}\r\n.stepper-step:first-child {\r\n    text-align: left;\r\n}\r\n.stepper-step:last-child {\r\n    text-align: right;\r\n}\r\n\r\n.stepper-step::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 36px;\r\n    left: 0;\r\n    right: 0;\r\n    height: 1px;\r\n    background: #BDBDBD;\r\n}\r\n.stepper-step:first-child::after {\r\n    left: 24px;\r\n}\r\n.stepper-step:last-child::after {\r\n    right: 24px;\r\n}\r\n\r\n.stepper-step-isActive {\r\n    font-weight: 600;\r\n}\r\n\r\n.stepper-step-isValid {\r\n    font-weight: 600;\r\n}\r\n\r\n.stepper-step-isDisabled {\r\n    color: rgba(0, 0, 0, 0.38);\r\n    cursor: default;\r\n}\r\n\r\n.stepper-stepMarker {\r\n    display: inline-block;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin-right: 8px;\r\n    text-align: center;\r\n    color: white;\r\n    line-height: 24px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    border-radius: 24px;\r\n    font-weight: 100;\r\n    font-size: 12px;\r\n}\r\n\r\n.stepper-step-isActive .stepper-stepMarker {\r\n    background-color: #2196F3;\r\n}\r\n\r\n.stepper-step-isValid .stepper-stepMarker {\r\n    text-indent: -10000px;\r\n    background: url('data:image/svg+xml;charset=utf8,<svg fill=\"#FFFFFF\" height=\"20\" viewBox=\"0 0 24 24\" width=\"19\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/> <path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\"/></svg>') no-repeat #2196F3;\r\n    background-position: 2px 1px;\r\n    background-color: #2196F3;\r\n}\r\n\r\n.stepper-stepContent {\r\n    display: inline-block;\r\n    position: relative;\r\n    z-index: 2;\r\n    padding: 0 8px;\r\n    background-color: #fff;\r\n}\r\n\r\n\r\n\r\nimg {\r\n    max-width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/asset-pool-create/asset-pool-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n\n    <div class=\"row\">\n<!--\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\" >\n              <div class=\"card-header\" data-background-color=\"green\">\n                <i class=\"material-icons\">store</i>\n              </div>\n              <div class=\"card-content\">\n                <p class=\"category\">Revenue</p>\n                <h3 class=\"title\">$34,245</h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">date_range</i> Last 24 Hours\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>-->\n\n\n\n      <div class=\"col-md-12\" >\n        <div class=\"stepper\" style=\"margin-top: 50px\">\n          <div class=\"stepper-steps stepper-steps-isOffset\">\n            <div class=\"stepper-step\"\n                 [ngClass]=\"{'stepper-step-isActive':selectedStepperNumber===1}\"\n                 (click)=\"stepperSelected(1)\">\n              <div class=\"stepper-stepContent\">\n                <span class=\"stepper-stepMarker\">1</span>Asset Category\n              </div>\n            </div>\n\n            <div class=\"stepper-step \"\n                 [ngClass]=\"{'stepper-step-isActive':selectedStepperNumber===2}\"\n                 (click)=\"stepperSelected(2)\">\n              <div class=\"stepper-stepContent\">\n                <span class=\"stepper-stepMarker\">2</span>Asset Info\n              </div>\n            </div>\n            <div  class=\"stepper-step\"\n                  [ngClass]=\"{'stepper-step-isActive':selectedStepperNumber===3}\"\n                  (click)=\"stepperSelected(3)\">\n              <div class=\"stepper-stepContent\">\n                <span class=\"stepper-stepMarker\">3</span>Product Info\n              </div>\n            </div>\n            <div class=\"stepper-step\"\n                 [ngClass]=\"{'stepper-step-isActive':selectedStepperNumber===4}\"\n                 (click)=\"stepperSelected(4)\">\n              <div class=\"stepper-stepContent\">\n                <span class=\"stepper-stepMarker\">4</span>Register\n              </div>\n            </div>\n          </div>\n          <div class=\"stepper-content\">\n\n            <section class=\"step-1\" *ngIf=\"selectedStepperNumber===1\">\n                <div class=\"card-content\">\n               <!--   <div class=\"col-md-12\">\n                    <div class=\"row\">\n                      <div class=\" col-md-6 col-md-offset-3\">\n                        <div class=\"card card-stats\" style=\"background-color: #00bfa5\">\n                          <div class=\"card-header\" data-background-color=\"green\">\n                            <i class=\"material-icons\">store</i>\n                          </div>\n                          <div class=\"card-content\">\n                            <p class=\"category\">Total Assets in Pool</p>\n                            <h3 class=\"title\">{{selectedAssetsForPool.length}}</h3>\n                          </div>\n\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>-->\n\n                  <form>\n                      <div class=\"row\">\n                        <div class=\"col-md-4\">\n                          <div class=\"form-group form-black  \">\n                            <label class=\"control-label\">Category 1</label>\n                            <input [disabled]=\"true\" type=\"text\" [(ngModel)]=\"assetPool.category.level1\"  name=\"category1\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                          <div class=\"form-group form-black  \">\n                            <label class=\"control-label\">Category 2</label>\n                            <input [disabled]=\"true\" type=\"text\"  [(ngModel)]=\"assetPool.category.level2\"  name=\"category2\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                          <div class=\"form-group form-black  \">\n                            <label class=\"control-label\">Category 3</label>\n                            <input [disabled]=\"true\" type=\"text\" [(ngModel)]=\"assetPool.category.level3\"   name=\"category3\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                          <div class=\"form-group form-black  \">\n                            <label class=\"control-label\">Category 4</label>\n                            <input [disabled]=\"true\" type=\"text\" [(ngModel)]=\"assetPool.category.level4\"   name=\"category4\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                          <div class=\"form-group form-black  \">\n                            <label class=\"control-label\">Category 5</label>\n                            <input [disabled]=\"true\" type=\"text\"  [(ngModel)]=\"assetPool.category.level5\"  name=\"category5\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                      </div>\n\n                  </form>\n\n                  <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                      <button (click)=\"gotoStepperSection(2)\" class=\" btn btn-success pull-right\">Continue</button>\n                    </div>\n                  </div>\n\n\n                </div>\n            </section>\n\n            <section class=\"step-2\" *ngIf=\"selectedStepperNumber===2\">\n              <div class=\"card-content\">\n\n\n\n                <form>\n                  <div class=\"row\">\n\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Asset currency</label>\n                        <input  [(ngModel)]=\"assetPool.currency\" style=\"text-transform: capitalize\" type=\"text\"  name=\"currency\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Estimate price</label>\n                        <input  [(ngModel)]=\"assetPool.estimatePrice\" type=\"number\"  name=\"estimatePrice\" class=\"form-control\" >\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Estimate unit</label>\n                        <select class=\"form-control \" [(ngModel)]=\"assetPool.estimateUnit\" name=\"estimateUnit\">\n                          <option value=\"USD\">USD</option>\n                          <option value=\"RMB\">RMB</option>\n\n                        </select>\n\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Unlock condition</label>\n                        <select class=\"form-control \" [(ngModel)]=\"assetPool.unlockCondition\" name=\"status\">\n                          <option value=\"0\">Community vote unlock</option>\n                          <option value=\"1\">ICO contract unlock</option>\n\n                        </select>\n\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Exercise unit</label>\n                        <input  [(ngModel)]=\"assetPool.exerciseUnit\" type=\"number\"  name=\"excerciseStandard\" class=\"form-control\" >\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Chain or not</label>\n                        <select class=\"form-control \" [(ngModel)]=\"assetPool.chainOrNot\" name=\"status\">\n                          <option value=\"true\">Yes</option>\n                          <option value=\"false\">No</option>\n\n                        </select>\n\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Description</label>\n                        <input  [(ngModel)]=\"assetPool.desc\" type=\"text\"  name=\"description\" class=\"form-control\" >\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                      <button (click)=\"gotoStepperSection(3)\" class=\" btn btn-success pull-right\">Continue</button>\n\n                      <button (click)=\"gotoStepperSection(1)\" class=\" btn pull-right\">Back</button>\n\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </section>\n\n\n            <section class=\"step-3\" *ngIf=\"selectedStepperNumber===3\">\n              <div class=\"card-content\">\n                <form>\n                  <b>Product brand</b>\n                  <div class=\"row\">\n\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Name</label>\n                        <input type=\"text\" [(ngModel)]=\"assetPool.extra.productBrand.value\"  name=\"productBrandValue\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Remark</label>\n                        <input [(ngModel)]=\"assetPool.extra.productBrand.remark\" style=\"text-transform: capitalize\" type=\"text\"  name=\"productBrandRemark\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Link</label>\n                        <input [(ngModel)]=\"assetPool.extra.productBrand.link\" type=\"text\"  name=\"productBrandLink\" class=\"form-control\" >\n                      </div>\n                    </div>\n\n                  </div>\n                  <b>Packing standard</b>\n\n                  <div class=\"row\">\n\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Name</label>\n                        <input [(ngModel)]=\"assetPool.extra.productStandard.value\" type=\"text\"  name=\"productStandardValue\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Remark</label>\n                        <input [(ngModel)]=\"assetPool.extra.productStandard.remark\" style=\"text-transform: capitalize\" type=\"text\"  name=\"productStandardRemark\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Link</label>\n                        <input [(ngModel)]=\"assetPool.extra.productStandard.link\" type=\"text\"  name=\"productStandardLink\" class=\"form-control\" >\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                  <b>Product index</b>\n\n                  <div class=\"row\">\n\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Name</label>\n                        <input [(ngModel)]=\"assetPool.extra.productIndex.value\" type=\"text\"  name=\"productIndexValue\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Remark</label>\n                        <input [(ngModel)]=\"assetPool.extra.productIndex.remark\" style=\"text-transform: capitalize\" type=\"text\"  name=\"productIndexRemark\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Link</label>\n                        <input [(ngModel)]=\"assetPool.extra.productIndex.link\" type=\"text\"  name=\"productIndexLink\" class=\"form-control\" >\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <b>Production detail</b>\n                  <div class=\"row\">\n\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Name</label>\n                        <input [(ngModel)]=\"assetPool.extra.productInfo.value\" type=\"text\"  name=\"productInfoValue\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Remark</label>\n                        <input [(ngModel)]=\"assetPool.extra.productInfo.remark\" style=\"text-transform: capitalize\" type=\"text\"  name=\"productInfoRemark\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Link</label>\n                        <input [(ngModel)]=\"assetPool.extra.productInfo.link\" type=\"text\"  name=\"productInfoLink\" class=\"form-control\" >\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                      <button (click)=\"gotoStepperSection(4)\" class=\" btn btn-success pull-right\">Continue</button>\n\n                      <button (click)=\"gotoStepperSection(2)\" class=\" btn pull-right\">Back</button>\n\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </section>\n\n\n            <section class=\"step-4\" *ngIf=\"selectedStepperNumber===4\">\n              <div class=\"card-content\">\n                <form>\n                  <div class=\"row\">\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Published number</label>\n                        <input type=\"number\"  [(ngModel)]=\"assetPool.maximum\" name=\"maximum\" class=\"form-control\">\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black  \">\n                        <label class=\"control-label\">Accuracy</label>\n                        <input type=\"number\" [(ngModel)]=\"assetPool.precision\"  name=\"precision\" class=\"form-control\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                      <button *ngIf=\"selectedAssetsForPool.length\" class=\" btn btn-success pull-right\" (click)=\"createAssetPool()\">REGISTER</button>\n\n                      <button (click)=\"gotoStepperSection(3)\" class=\" btn pull-right\">Back</button>\n\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </section>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/asset-pool-create/asset-pool-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetPoolCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_assets_pool_service__ = __webpack_require__("../../../../../src/app/services/assets-pool.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_assets_service__ = __webpack_require__("../../../../../src/app/services/assets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssetPoolCreateComponent = (function () {
    function AssetPoolCreateComponent(assetPoolService, toastService, router, assetsService) {
        this.assetPoolService = assetPoolService;
        this.toastService = toastService;
        this.router = router;
        this.assetsService = assetsService;
        this.selectedStepperNumber = 1;
        this.category = { one: null, two: null, three: null, four: null, five: null };
        this.selectedAssetsForPool = [];
        this.assetPool = {
            assetsId: [],
            category: {
                level1: null,
                level2: null,
                level3: null,
                level4: null,
                level5: null,
            },
            categoryId: null,
            currency: null,
            estimatePrice: null,
            estimateUnit: null,
            unlockCondition: null,
            exerciseUnit: null,
            chainOrNot: false,
            desc: null,
            maximum: null,
            precision: null,
            extra: {
                productBrand: { value: null, remark: null, link: null },
                productStandard: { value: null, remark: null, link: null },
                productInfo: { value: null, remark: null, link: null },
                productIndex: { value: null, remark: null, link: null },
                otherInfo: { value: null, remark: null, link: null },
                moreDetails: null
            }
        };
    }
    AssetPoolCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedAssetsForPool = this.assetPoolService.getSelectedAssetsForPool();
        if (this.selectedAssetsForPool.length) {
            this.selectedAssetsForPool.forEach(function (asset) {
                _this.assetPool.assetsId.push(asset.id);
            });
            this.assetPool.categoryId = this.selectedAssetsForPool[0].categoryId;
            this.assetPool.category.level1 = this.selectedAssetsForPool[0].category.level1;
            this.assetPool.category.level2 = this.selectedAssetsForPool[0].category.level2;
            this.assetPool.category.level3 = this.selectedAssetsForPool[0].category.level3;
            this.assetPool.category.level4 = this.selectedAssetsForPool[0].category.level4;
            this.assetPool.category.level5 = this.selectedAssetsForPool[0].category.level5;
        }
        if (!this.selectedAssetsForPool.length) {
            this.router.navigate(['/dashboard/assets']);
        }
        console.log(this.selectedAssetsForPool);
    };
    AssetPoolCreateComponent.prototype.stepperSelected = function (index) {
        this.selectedStepperNumber = index;
    };
    AssetPoolCreateComponent.prototype.gotoStepperSection = function (index) {
        this.selectedStepperNumber = index;
    };
    AssetPoolCreateComponent.prototype.createAssetPool = function () {
        var _this = this;
        if (!this.selectedAssetsForPool.length) {
            return false;
        }
        if (!this.assetPool.currency) {
            return this.toastService.error('AssetPool', 'Asset currency required');
        }
        else {
            var reg = /^[A-Z0-9][A-Z0-9]{2,9}$/;
            if (!reg.test(this.assetPool.currency)) {
                return this.toastService.error('AssetPool', 'Asset currency invalid. If it is chainLevel then BTC,ETH');
            }
        }
        if (!this.assetPool.estimatePrice) {
            return this.toastService.error('AssetPool', 'Estimate price is required');
        }
        else {
            var reg = /^(([1-9]|[1-9]\d{0,8})|(([1-9]|[1-9]\d{0,8})\.[0-9][0-9]{0,1})|(0\.(0[1-9]|[1-9][0-9]{0,1})))$/g;
            if (!reg.test(this.assetPool.estimatePrice)) {
                return this.toastService.error('AssetPool', 'Estimate price is invalid');
            }
        }
        if (!this.assetPool.estimateUnit) {
            return this.toastService.error('AssetPool', 'Estimate unit is required');
        }
        if (!this.assetPool.unlockCondition) {
            return this.toastService.error('AssetPool', 'Unlock condition is required');
        }
        if (!this.assetPool.exerciseUnit) {
            return this.toastService.error('AssetPool', 'Excercise unit is required');
        }
        if (!this.assetPool.desc) {
            return this.toastService.error('AssetPool', 'Asset description is required');
        }
        else {
            var strLen = this.assetPool.desc.replace(/[^\x00-\xff]/g, "**").length;
            if (strLen > 4096) {
                return this.toastService.error('AssetPool', 'Asset description should not be more than 4096 in length');
            }
        }
        if (!this.assetPool.maximum) {
            return this.toastService.error('AssetPool', 'Publisher number is required');
        }
        if (!parseInt(this.assetPool.maximum)) {
            return this.toastService.error('AssetPool', 'Invalid Publisher number');
        }
        if (!/^[0-6]$/.test(this.assetPool.precision)) {
            return this.toastService.error('AssetPool', 'Accuracy should me maximum 6 in length');
        }
        this.assetPoolService.createAssetPool(this.assetPool).subscribe(function (data) {
            _this.toastService.success('AssetPool', 'Successfully created');
            _this.resetState();
            _this.router.navigate(['/dashboard/assets-pool-list']);
        }, function (err) {
            _this.toastService.error('AssetPool', err.message);
        });
    };
    AssetPoolCreateComponent.prototype.resetState = function () {
        this.selectedAssetsForPool = [];
        this.assetPoolService.removeAllAssetFromPool();
        this.assetPool = {
            assetsId: [],
            category: {
                level1: null,
                level2: null,
                level3: null,
                level4: null,
                level5: null,
            },
            categoryId: null,
            currency: null,
            estimatePrice: null,
            estimateUnit: null,
            unlockCondition: null,
            exerciseUnit: null,
            chainOrNot: false,
            desc: null,
            maximum: null,
            precision: null,
            extra: {
                productBrand: { value: null, remark: null, link: null },
                productStandard: { value: null, remark: null, link: null },
                productInfo: { value: null, remark: null, link: null },
                productIndex: { value: null, remark: null, link: null },
                otherInfo: { value: null, remark: null, link: null },
                moreDetails: null
            }
        };
    };
    AssetPoolCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-asset-pool-create',
            template: __webpack_require__("../../../../../src/app/components/asset-pool-create/asset-pool-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/asset-pool-create/asset-pool-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_assets_pool_service__["a" /* AssetsPoolService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_assets_service__["a" /* AssetsService */]])
    ], AssetPoolCreateComponent);
    return AssetPoolCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/asset-pool-list/asset-pool-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card [data-background-color=\"green\"] {\r\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\r\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/asset-pool-list/asset-pool-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <ul class=\"nav nav-pills nav-pills-info\">\n            <li  class=\"active\"><a href=\"javascript:void(0)\" (click)=\"getMyPools()\"  data-toggle=\"tab\">Mine</a></li>\n            <li><a (click)=\"getOtherPools();\" href=\"javascript:void(0)\" data-toggle=\"tab\">ALL</a></li>\n        </ul>\n            <div class=\"card\" style=\"margin-top: 50px;\">\n                <div class=\"card-header\" data-background-color=\"green\">\n                    <h4 class=\"title\">Assets pool</h4>\n\n                </div>\n\n                <div class=\"card-content table-responsive\" >\n\n                    <section *ngIf=\"assetPoolHttpSstatus==='pending' || assetPoolHttpSstatus==='rejected' \">\n                        <app-spinner [type]=\"'bounce'\" *ngIf=\"assetPoolHttpSstatus==='pending'\"></app-spinner>\n\n                        <app-error-show *ngIf=\"assetPoolHttpSstatus==='rejected'\" [error]=\"'Assets pool could not be fetched.Try again!'\">\n\n                        </app-error-show>\n                    </section>\n\n\n\n                    <section *ngIf=\"assetPoolHttpSstatus==='resolved'\">\n                        <div class=\"row\" *ngIf=\"!pools.length\">\n                            <div class=\"col-xs-12 text-center\">\n                                <h3 class=\"text-gray\">\n                                    No Asset pool found!\n                                </h3>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div style=\"cursor: pointer\" class=\"col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let pool of pools\">\n                                <div class=\"card card-stats\" style=\"border: 1px solid #c4c4c4\" >\n\n                                    <div class=\"card-content\" style=\"text-align: left\" >\n\n                                        <div *ngIf=\"blockchainHttpStatus==='pending'\"\n                                                    style=\"position: absolute;\n                                                left: 0;right: 0;\n                                                top: 45%;\n                                                margin: 0 auto\">\n                                        <app-spinner></app-spinner>\n\n                                    </div>\n\n                                        <div *ngIf=\"blockchainHttpStatus==='rejected'\"\n                                             style=\"position: absolute;\n                                                top: 45%;\n                                                left:45%;\n                                                margin: 0 auto\">\n                                            <i class=\"material-icons\">error</i>\n                                        </div>\n\n\n                                        <div [routerLink]=\"['../assets-pool-view',pool.id]\">\n                                            <p class=\"category\">Currency Name</p>\n                                            <h5 class=\"title\">{{pool.issuerName}}.{{pool.currency}}</h5>\n\n                                            <hr>\n\n                                            <div class=\"row\" style=\"text-align: left\">\n\n                                                <div class=\"col-xs-6 text-left\">\n                                                    Maximum\n                                                </div>\n                                                <div class=\"col-xs-6 text-right\">\n                                                    <b>{{pool.maximum}}</b>\n                                                </div>\n                                            </div>\n                                            <hr>\n\n                                            <div class=\"row\" style=\"text-align: left\">\n\n                                                <div class=\"col-xs-6 text-left\">\n                                                    Issued Quantity\n                                                </div>\n                                                <div class=\"col-xs-6 text-right\">\n                                                    <b>{{pool?.blockchain?.quantity|truncateBalance:pool?.blockchain?.precision}}</b>\n                                                </div>\n                                            </div>\n\n                                            <hr>\n\n                                            <div class=\"row\" style=\"text-align: left\" >\n\n                                                <div class=\"col-xs-6 text-left\">\n                                                    Left quantity\n                                                </div>\n                                                <div class=\"col-xs-6 text-right\">\n                                                    <b>{{(pool?.blockchain?.maximum-pool?.blockchain?.quantity)|truncateBalance:pool?.blockchain?.precision}}</b>\n                                                </div>\n                                            </div>\n                                            <hr>\n\n                                            <div class=\"row\" style=\"text-align: left\" >\n\n                                                <div class=\"col-xs-6 text-left\">\n                                                    Status\n                                                </div>\n                                                <div class=\"col-xs-6 text-right\" *ngIf=\"pool.blockchain\">\n                                                    <b [style.color]=\"getColor(pool.blockchain?.approved)\">\n                                                        {{pool.blockchain?.approved===0?'Pending':'Approved'}}</b>\n                                                </div>\n                                            </div>\n                                            <hr>\n\n                                        </div>\n\n\n                                        <div class=\"row\" style=\"text-align: center\">\n\n                                            <div class=\"col-xs-12\">\n                                                <button  [disabled]=\"!pool.blockchain || pool.blockchain.approved===0\" class=\"btn btn-info \" (click)=\"openModal(template,pool)\">ISSUE</button>\n                                                <button  [disabled]=\"!pool.blockchain || pool.blockchain.approved===0\" class=\"btn btn-success \" [routerLink]=\"['/dashboard','tokens',pool?.id]\">ISSUED</button>\n\n                                            </div>\n\n\n                                        </div>\n                                    </div>\n\n                                    <div class=\"card-footer\">\n                                        <div class=\"stats\">\n                                            <i class=\"material-icons text-danger\">update</i>\n                                            <a href=\"javascript:void(0)\">{{pool.created|moment}}</a>\n                                        </div>\n                                    </div>\n\n\n                                </div>\n                            </div>\n                        </div>\n\n\n                    </section>\n\n\n                </div>\n\n            </div>\n\n\n\n\n\n       <!-- <section >\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"green\">\n                    <h4 class=\"title\">Others's asset pool</h4>\n\n                </div>\n\n\n\n                <div class=\"card-content table-responsive\" >\n\n                    <section *ngIf=\"otherAssetPoolHttpSstatus==='pending' || otherAssetPoolHttpSstatus==='rejected'\">\n                        <app-spinner [type]=\"'bounce'\" *ngIf=\"otherAssetPoolHttpSstatus==='pending'\"></app-spinner>\n\n                        <app-error-show *ngIf=\"otherAssetPoolHttpSstatus==='rejected'\" [error]=\"'Others Assets pool could not be fetched.Try again!'\">\n\n                        </app-error-show>\n                    </section>\n\n                    <section *ngIf=\"otherAssetPoolHttpSstatus==='resolved'\">\n\n                        <div class=\"row\" *ngIf=\"!otherPools.length\">\n                            <div class=\"col-xs-12 text-center\">\n                                <h3 class=\"text-gray\">\n                                    No Asset found\n                                </h3>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div style=\"cursor: pointer\" class=\"col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let pool of otherPools\">\n                                <div class=\"card card-stats\"  >\n\n                                    <div class=\"card-content\" style=\"text-align: left\" >\n                                        <p class=\"category\">Currency Name</p>\n                                        <h5 class=\"title\">{{pool.issuerName}}.{{pool.currency}}</h5>\n\n                                        <hr>\n\n                                        <div class=\"row\" style=\"text-align: left\" [routerLink]=\"['../assets-pool-view',pool.id]\">\n\n                                            <div class=\"col-xs-6 text-left\">\n                                                Maximum\n                                            </div>\n                                            <div class=\"col-xs-6 text-right\">\n                                                <b>{{pool.maximum}}</b>\n                                            </div>\n                                        </div>\n                                        <hr>\n\n                                        <div class=\"row\" style=\"text-align: left\" [routerLink]=\"['../assets-pool-view',pool.id]\">\n\n                                            <div class=\"col-xs-6 text-left\">\n                                                Issued Quantity\n                                            </div>\n                                            <div class=\"col-xs-6 text-right\">\n                                                <b>{{pool?.blockchain?.quantity|truncateBalance:pool?.blockchain?.precision}}</b>\n                                            </div>\n                                        </div>\n\n                                        <hr>\n\n                                        <div class=\"row\" style=\"text-align: left\" [routerLink]=\"['../assets-pool-view',pool.id]\">\n\n                                            <div class=\"col-xs-6 text-left\">\n                                                Left quantity\n                                            </div>\n                                            <div class=\"col-xs-6 text-right\">\n                                                <b>{{(pool?.blockchain?.maximum-pool?.blockchain?.quantity)|truncateBalance:pool?.blockchain?.precision}}</b>\n                                            </div>\n                                        </div>\n                                        <hr>\n\n                                        <div class=\"row\" style=\"text-align: left\" >\n\n                                            <div class=\"col-xs-6 text-left\">\n                                                Status\n                                            </div>\n                                            <div class=\"col-xs-6 text-right\" *ngIf=\"pool?.blockchain\">\n                                                <b [style.color]=\"getColor(pool?.blockchain?.approved)\">{{pool?.blockchain?.approved===0?'Pending':'Approved'}}</b>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\" style=\"text-align: center\">\n\n                                            <div class=\"col-xs-12\">\n                                                <button [disabled]=\"!pool.blockchain || !pool.blockchain.approved\" class=\"btn btn-danger\" (click)=\"openModal(template,pool)\">ISSUE</button>\n                                            </div>\n\n\n                                        </div>\n                                    </div>\n\n\n\n\n                                </div>\n                            </div>\n                        </div>\n\n\n                    </section>\n\n\n                </div>\n\n            </div>\n\n\n\n        </section>-->\n        <ng-template #template>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">ISSUE TOKEN</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form name=\"loginForm\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" style=\"font-size: 14px;\">Maximum</label>\n                                <input [disabled]=\"true\" type=\"text\" [(ngModel)]=\"selectedPool.maximum\" name=\"maximum\" class=\"form-control\" >\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" style=\"font-size: 14px;\">Currency</label>\n                                <input [disabled]=\"true\" type=\"text\" [(ngModel)]=\"selectedPool.blockchain.currency\" name=\"currency\" class=\"form-control\" >\n                            </div>\n                        </div>\n\n                    </div>\n\n\n\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" style=\"font-size: 14px;\">Issue Number</label>\n                                <input type=\"text\"  [(ngModel)]=\"token.amount\"  name=\"amount\" class=\"form-control\" >\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" style=\"font-size: 14px;\">Exchange rate</label>\n                                <input type=\"text\"  [(ngModel)]=\"token.exchangeRate\"  name=\"exchangeRate\" class=\"form-control\" >\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                    <button\n                            [disabled]=\"issueTokenHttpStatus==='pending'\"\n                            type=\"submit\"\n                            (click)=\"issueToken(selectedPool)\"\n                            class=\"btn btn-danger pull-right\">SUBMIT</button>\n                    <div class=\"clearfix\"></div>\n                </form>\n\n            </div>\n        </ng-template>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/asset-pool-list/asset-pool-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetPoolListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_assets_pool_service__ = __webpack_require__("../../../../../src/app/services/assets-pool.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AssetPoolListComponent = (function () {
    function AssetPoolListComponent(assetPoolService, router, modalService, toastService, userService) {
        this.assetPoolService = assetPoolService;
        this.router = router;
        this.modalService = modalService;
        this.toastService = toastService;
        this.userService = userService;
        this.pools = [];
        this.assetPoolHttpSstatus = 'resolved';
        this.blockchainHttpStatus = 'resolved';
        this.issueTokenHttpStatus = 'resolved';
        this.token = { amount: null, exchangeRate: null };
        this.selectedPool = { maximum: null, precision: null, blockchain: { currency: null }, id: null };
    }
    AssetPoolListComponent.prototype.ngOnInit = function () {
        this.getMyPools();
    };
    AssetPoolListComponent.prototype.openModal = function (template, selectedPool) {
        this.selectedPool = selectedPool;
        console.log(this.selectedPool);
        this.modalRef = this.modalService.show(template);
    };
    AssetPoolListComponent.prototype.issueToken = function () {
        var _this = this;
        if (!this.token.amount) {
            this.toastService.error('Issue', 'Invalid amount');
            return;
        }
        if (!this.token.exchangeRate) {
            this.toastService.error('Issue', 'Invalid exchangeRate');
            return;
        }
        this.issueTokenHttpStatus = 'pending';
        this.assetPoolService.issueToken(this.selectedPool.id, this.token.amount, this.token.exchangeRate, this.selectedPool.precision, this.selectedPool.blockchain.currency)
            .subscribe(function (data) {
            console.log(data);
            _this.issueTokenHttpStatus = 'resolved';
            _this.token.amount = null;
            _this.token.exchangeRate = null;
            _this.toastService.success('Issue', 'Issued successfully');
        }, function (err) {
            _this.issueTokenHttpStatus = 'rejected';
            _this.toastService.error('Issue', err.message);
            console.log(err);
        });
    };
    AssetPoolListComponent.prototype.getMyPools = function () {
        var _this = this;
        this.assetPoolHttpSstatus = 'pending';
        this.assetPoolService.getPoolsByIssuerName().subscribe(function (pools) {
            _this.pools = pools;
            console.log(pools);
            _this.assetPoolHttpSstatus = 'resolved';
            _this.getPoolInfoFromBlockchain(pools);
        }, function (err) {
            console.log(err);
            _this.assetPoolHttpSstatus = 'rejected';
        });
    };
    AssetPoolListComponent.prototype.getOtherPools = function () {
        var _this = this;
        this.assetPoolHttpSstatus = 'pending';
        this.assetPoolService.getPools().subscribe(function (pools) {
            _this.pools = pools;
            console.log(pools);
            _this.assetPoolHttpSstatus = 'resolved';
            _this.getPoolInfoFromBlockchain(pools);
        }, function (err) {
            console.log(err);
            _this.assetPoolHttpSstatus = 'rejected';
        });
    };
    AssetPoolListComponent.prototype.getPoolInfoFromBlockchain = function (pools) {
        var _this = this;
        var arr = [];
        pools.forEach(function (pool) {
            var name = pool.issuerName + '.' + pool.currency;
            arr.push(_this.assetPoolService.getAssetPoolInfoFromBlockchain(name));
        });
        console.log(arr.length);
        this.blockchainHttpStatus = 'pending';
        Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin__["a" /* forkJoin */])(arr).subscribe(function (results) {
            var length = pools.length;
            for (var i = 0; i < length; i++) {
                if (results[i].constructor === Object && Object.keys(results[i]).length > 0)
                    _this.pools[i].blockchain = results[i];
            }
            _this.blockchainHttpStatus = 'resolved';
        }, function (err) {
            _this.blockchainHttpStatus = 'rejected';
        });
    };
    AssetPoolListComponent.prototype.getColor = function (status) {
        status = String(status);
        switch (status) {
            case '1':
                return 'green';
            case '0':
                return '#ff8b4c';
            default:
                return 'black';
        }
    };
    AssetPoolListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-asset-pool-list',
            template: __webpack_require__("../../../../../src/app/components/asset-pool-list/asset-pool-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/asset-pool-list/asset-pool-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_assets_pool_service__["a" /* AssetsPoolService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], AssetPoolListComponent);
    return AssetPoolListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/asset-pool-view/asset-pool-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/asset-pool-view/asset-pool-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n    <button class=\"btn btn-simple\" (click)=\"goBack()\">\n      <i class=\"material-icons\">keyboard_return</i>Back\n    </button>\n    <div class=\"row\">\n      <div style=\"cursor: pointer\" class=\"col-lg-12\" >\n        <div class=\"card card-stats\" >\n          <div class=\"card-header\" data-background-color=\"green\">\n            <i class=\"material-icons\">store</i>\n          </div>\n          <div class=\"card-content\">\n            <p class=\"category\">Currency Name</p>\n            <h5 class=\"title\">{{pool?.issuerName}}.{{pool?.currency}}</h5>\n\n\n            <div class=\"row\">\n              <div class=\"col-xs-12\" style=\"margin-top: 40px;\">\n\n                <ol class=\"breadcrumb text-left\">\n                  <li><a href=\"javascript:void (0)\">{{pool?.category?.level1}}</a></li>\n                  <li><a href=\"javascript:void (0)\">{{pool?.category?.level2}}</a></li>\n                  <li> <a href=\"javascript:void (0)\">{{pool?.category?.level3}}</a></li>\n                  <li> <a href=\"javascript:void (0)\">{{pool?.category?.level4}}</a></li>\n                  <li> <a href=\"javascript:void (0)\">{{pool?.category?.level5}}</a></li>\n\n                </ol>\n              </div>\n            </div>\n\n\n\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n\n\n                <div class=\"row\" style=\"text-align: left\">\n                  <hr>\n\n                  <div class=\"col-xs-6 text-left\">\n                    <b>Status</b>\n                  </div>\n                  <div class=\"col-xs-6 text-right\" *ngIf=\"pool?.blockchain\">\n                    <b [style.color]=\"getColor(pool?.blockchain?.approved)\">{{pool?.blockchain?.approved===0?'Pending':'Approved'}}</b>\n                  </div>\n                </div>\n                <div class=\"row\" style=\"text-align: left\">\n                  <hr>\n\n                  <div class=\"col-xs-6 text-left\">\n                    <b>Maximum</b>\n\n\n                  </div>\n                  <div class=\"col-xs-6 text-right\">\n                    <span class=\"text-gray\">{{pool?.maximum}}</span>\n                  </div>\n                </div>\n\n                <div class=\"row\" style=\"text-align: left\">\n                  <hr>\n\n                  <div class=\"col-xs-6 text-left\">\n                    <b>EstimateUnit</b>\n\n\n                  </div>\n                  <div class=\"col-xs-6 text-right\">\n                    <span class=\"text-gray\">{{pool?.estimateUnit}}</span>\n                  </div>\n                </div>\n\n\n                <div class=\"row\" style=\"text-align: left\">\n                  <hr>\n\n                  <div class=\"col-xs-6 text-left\">\n                    <b>Unlock condition</b>\n\n\n                  </div>\n                  <div class=\"col-xs-6 text-right\" >\n                    <span class=\"text-gray\">{{pool?.blockchain?.unlockCondition}}</span>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"col-lg-6\" >\n\n\n\n                <div class=\"row\" style=\"text-align: left\">\n                  <hr>\n\n                  <div class=\"col-xs-6 text-left\">\n                    <b>EstimatePrice</b>\n\n\n                  </div>\n                  <div class=\"col-xs-6 text-right\">\n                    <span class=\"text-gray\">{{pool?.estimatePrice}}</span>\n                  </div>\n                </div>\n\n\n\n\n\n\n                <div class=\"row\" style=\"text-align: left\">\n                <hr>\n\n                <div class=\"col-xs-6 text-left\">\n                  <b>Chain Asset?</b>\n\n\n                </div>\n                <div class=\"col-xs-6 text-right\" >\n                  <span class=\"text-gray\">{{pool?.chainOrNot===true?'Yes':'No'}}</span>\n                </div>\n              </div>\n\n\n                <div class=\"row\" style=\"text-align: left\">\n                  <hr>\n\n                  <div class=\"col-xs-6 text-left\">\n                    <b>Number of assets</b>\n\n\n                  </div>\n                  <div class=\"col-xs-6 text-right\" >\n                    <span class=\"text-gray\">{{pool?.assetsId?.length}}</span>\n                  </div>\n\n                </div>\n\n\n                <div class=\"row\" style=\"text-align: left\">\n                  <hr>\n\n                  <div class=\"col-xs-6 text-left\">\n                    <b>Estimate Price</b>\n\n\n                  </div>\n                  <div class=\"col-xs-6 text-right\" >\n                    <span class=\"text-gray\">{{pool?.estimatePrice}}</span>\n                  </div>\n\n                </div>\n\n\n              </div>\n\n            </div>\n\n            <div class=\"row\" style=\"text-align: left\">\n              <hr>\n\n              <div class=\"col-xs-12 text-center\">\n                <h5><b>Description</b></h5>\n                <p class=\"text-gray\">{{pool?.desc}}</p>\n\n              </div>\n\n\n            </div>\n\n            <div class=\"row\" style=\"text-align: center\">\n\n              <div class=\"col-xs-12\">\n\n                <button [disabled]=\"!pool.blockchain || pool.blockchain?.approved===0 \" class=\"btn \">ISSUE TOKENS</button>\n                <button [disabled]=\"!pool.blockchain || pool.blockchain?.approved===0 \"  class=\"btn btn-success\" [routerLink]=\"['/dashboard','tokens',pool?.id]\">ISSUED TOKENS</button>\n\n              </div>\n\n            </div>\n\n            <div class=\"row\" style=\"text-align: center\">\n\n              <div class=\"col-xs-12\">\n\n                <h3>Assets Evidences</h3>\n                <hr>\n\n                <section *ngIf=\"assetEvidenceHttpStatus==='pending' || assetPoolHttpSstatus==='rejected' \">\n                  <app-spinner [type]=\"'bounce'\" *ngIf=\"assetEvidenceHttpStatus==='pending'\"></app-spinner>\n\n                  <app-error-show *ngIf=\"assetEvidenceHttpStatus==='rejected'\" [error]=\"'Assets evidences could not be fetched.Try again!'\">\n\n                  </app-error-show>\n                </section>\n\n                  <div class=\"row\" *ngIf=\"assetEvidenceHttpStatus==='resolved'\">\n                    <div class=\"col-xs-12 col-md-6\" *ngFor=\"let asset of pool.assets;let i=index\" >\n                      <h4 class=\"text-gray text-center\">Asset {{i+1}}</h4>\n                      <h4 class=\"text-center\" *ngIf=\"asset.evidences && !asset.evidences.length\">No evidences found</h4>\n                      <carousel *ngIf=\"asset.evidences && asset.evidences.length\">\n                        <slide *ngFor=\"let evidence of asset.evidences\" style=\"height:350px;\">\n                          <img [src]=\"evidence.url\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n                          <div class=\"carousel-caption d-none d-md-block\">\n                            <h3>{{asset?.name}}</h3>\n                            <p>{{asset?.user?.name}}</p>\n                            <p>{{evidence?.date|moment}}</p>\n                            <p>{{evidence?.hash}}</p>\n\n                            <button class=\"btn btn-primary\" *ngIf=\"evidence && evidence.status==='rejected'\">Rejected</button>\n\n                            <button class=\"btn btn-primary\" *ngIf=\"evidence && evidence.status==='approved'\">Approved</button>\n\n                            <button class=\"btn btn-primary\" *ngIf=\"evidence && evidence.status==='pending'\">Pending</button>\n                          </div>\n                        </slide>\n\n                      </carousel>\n                    </div>\n                  </div>\n\n\n\n\n              </div>\n\n\n            </div>\n\n\n\n          </div>\n\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">ISSUE TOKEN</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form name=\"loginForm\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"control-label\" style=\"font-size: 14px;\">Maximum</label>\n              <input [disabled]=\"true\" type=\"text\" [(ngModel)]=\"selectedPool.maximum\" name=\"maximum\" class=\"form-control\" >\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"control-label\" style=\"font-size: 14px;\">Currency</label>\n              <input [disabled]=\"true\" type=\"text\" [(ngModel)]=\"selectedPool.blockchain.currency\" name=\"currency\" class=\"form-control\" >\n            </div>\n          </div>\n\n        </div>\n\n\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"control-label\" style=\"font-size: 14px;\">Issue Number</label>\n              <input type=\"text\"  [(ngModel)]=\"token.amount\"  name=\"amount\" class=\"form-control\" >\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"control-label\" style=\"font-size: 14px;\">Exchange rate</label>\n              <input type=\"text\"  [(ngModel)]=\"token.exchangeRate\"  name=\"exchangeRate\" class=\"form-control\" >\n            </div>\n          </div>\n\n        </div>\n\n\n        <button\n                [disabled]=\"issueTokenHttpStatus==='pending'\"\n                type=\"submit\"\n                (click)=\"issueToken(selectedPool)\"\n                class=\"btn btn-danger pull-right\">SUBMIT</button>\n        <div class=\"clearfix\"></div>\n      </form>\n\n    </div>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/asset-pool-view/asset-pool-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetPoolViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_assets_service__ = __webpack_require__("../../../../../src/app/services/assets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_assets_pool_service__ = __webpack_require__("../../../../../src/app/services/assets-pool.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AssetPoolViewComponent = (function () {
    function AssetPoolViewComponent(location, modalService, activatedRoute, assetService, assetPoolService, toastService) {
        this.location = location;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.assetService = assetService;
        this.assetPoolService = assetPoolService;
        this.toastService = toastService;
        this.assetEvidenceHttpStatus = 'resolved';
        this.pool = { blockchain: null, assetsId: [], assets: [] };
    }
    AssetPoolViewComponent.prototype.openModal = function (template, selectedPool) {
        this.modalRef = this.modalService.show(template);
    };
    AssetPoolViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    AssetPoolViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.concatMap(function (param) {
            console.log(param);
            return _this.assetPoolService.getPoolById(param.assetPoolId);
        }).do(function (pool) {
            _this.pool = pool;
            _this.pool.assets = [];
            _this.getAssetsById();
            console.log(pool);
        }).concatMap(function (pool) {
            var name = pool.issuerName + '.' + pool.currency;
            return _this.assetPoolService.getAssetPoolInfoFromBlockchain(name);
        }).subscribe(function (data) {
            console.log(data);
            _this.pool.blockchain = data;
        }, function (err) {
            console.log(err);
        });
    };
    AssetPoolViewComponent.prototype.getAssetsById = function () {
        var _this = this;
        this.assetEvidenceHttpStatus = 'pending';
        var arr = [];
        this.pool.assetsId.forEach(function (id) {
            arr.push(_this.assetService.getAssetByid(id));
        });
        Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_forkJoin__["a" /* forkJoin */])(arr).subscribe(function (results) {
            for (var i = 0; i < results.length; i++) {
                if (results[i].evidences)
                    results[i].evidences.forEach(function (evidence) {
                        evidence.url = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiURL + ':' + __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiPORT + evidence.url;
                    });
                _this.pool.assets.push(results[i]);
            }
            console.log('pool after getiinbg theor assets');
            console.log(_this.pool);
            _this.assetEvidenceHttpStatus = 'resolved';
        }, function (err) {
            _this.assetEvidenceHttpStatus = 'rejected';
        });
    };
    AssetPoolViewComponent.prototype.getColor = function (status) {
        status = String(status);
        switch (status) {
            case '1':
                return 'green';
            case '0':
                return '#ff8b4c';
            default:
                return 'black';
        }
    };
    AssetPoolViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-asset-pool-view',
            template: __webpack_require__("../../../../../src/app/components/asset-pool-view/asset-pool-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/asset-pool-view/asset-pool-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_assets_service__["a" /* AssetsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_assets_pool_service__["a" /* AssetsPoolService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], AssetPoolViewComponent);
    return AssetPoolViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/asset-view/asset-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/asset-view/asset-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"title\">Farmer's Asset</h4>\n          </div>\n          <div class=\"card-content\">\n            <form>\n              <fieldset disabled>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group form-black\">\n                      <label class=\"control-label\">Name</label>\n                      <input type=\"text\" [(ngModel)]=\"asset.name\" name=\"name\" class=\"form-control\" disabled>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\"  *ngIf=\"asset.category.level1\">\n                    <div class=\"form-group form-black  \">\n                      <label class=\"control-label\">Category 1</label>\n                      <input style=\"text-transform: capitalize\" type=\"text\" [(ngModel)]=\"asset.category.level1\" name=\"category1\" class=\"form-control\" disabled>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\" *ngIf=\"asset.category.level2\">\n                    <div class=\"form-group form-black  \">\n                      <label class=\"control-label\">Category 2</label>\n                      <input style=\"text-transform: capitalize\" type=\"text\" [(ngModel)]=\"asset.category.level2\" name=\"category2\" class=\"form-control\" disabled>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\" *ngIf=\"asset.category.level3\">\n                    <div class=\"form-group form-black  \">\n                      <label class=\"control-label\">Category 3</label>\n                      <input style=\"text-transform: capitalize\" type=\"text\" [(ngModel)]=\"asset.category.level3\" name=\"category3\" class=\"form-control\" disabled>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\" *ngIf=\"asset.category.level4\">\n                    <div class=\"form-group form-black  \">\n                      <label class=\"control-label\">Category 4</label>\n                      <input style=\"text-transform: capitalize\" type=\"text\" [(ngModel)]=\"asset.category.level4\" name=\"category4\" class=\"form-control\" disabled>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\" *ngIf=\"asset.category.level5\">\n                    <div class=\"form-group form-black  \">\n                      <label class=\"control-label\">Category 5</label>\n                      <input style=\"text-transform: capitalize\" type=\"text\" [(ngModel)]=\"asset.category.level5\" name=\"category5\" class=\"form-control\" disabled>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group form-black  \">\n                      <label class=\"control-label\">Description</label>\n                      <input type=\"text\" [(ngModel)]=\"asset.description\" name=\"description\" class=\"form-control\" >\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group form-black  \">\n                      <label class=\"control-label\">Quantity</label>\n                      <input type=\"text\" [(ngModel)]=\"asset.quantity\" name=\"quantity\" class=\"form-control\" >\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group form-black  \">\n                      <label class=\"control-label\">Status</label>\n                      <input type=\"text\" [(ngModel)]=\"asset.status\" name=\"status\" class=\"form-control\" >\n                    </div>\n                  </div>\n\n                </div>\n              </fieldset>\n\n            </form>\n          </div>\n\n          <div class=\"padding\" style=\"padding: 15px;\">\n            <div class=\"dropdown\">\n              <a  href=\"javascript:void(0)\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\">\n                Change status <span style=\"font-weight: bolder\" [hidden]=\"!asset.status\">({{asset.status}})</span>\n                <b class=\"caret\"></b>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"javascript:void(0)\" (click)=\"changeStatus('pending')\">Pending</a></li>\n                <li><a href=\"javascript:void(0)\" (click)=\"changeStatus('verified')\">Available</a></li>\n                <li><a href=\"javascript:void(0)\" (click)=\"changeStatus('pooled')\">Pooled</a></li>\n\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-header\" data-background-color=\"green\">\n                <h4 class=\"title\">About Farmer</h4>\n              </div>\n              <div class=\"card-content\" style=\"margin-top: 30px;\">\n                <div class=\" card-profile\">\n                  <div class=\"card-avatar\" style=\"width: 50px;height: 50px;\">\n                    <a href=\"javascipt:void(0)\">\n                      <img width=\"50\" height=\"50\" class=\"img\" src=\"../assets/img/default-avatar.png\"/>\n                    </a>\n                  </div>\n\n                    <h4 class=\"card-title\" style=\"text-transform: capitalize\">{{asset?.user?.name}} </h4>\n                  <fieldset disabled>\n                    <div class=\"form-group label-floating has-success\" *ngIf=\"asset?.user?.phone\">\n                      <label class=\"control-label\">Mobile</label>\n                      <input [disabled]=\"true\" type=\"text\" value=\"null\" [ngModel]=\"asset.user.phone\" name=\"phone\" class=\"form-control\"/>\n                      <span class=\"form-control-feedback\">\n                      <i class=\"material-icons\">done</i>\n                    </span>\n                    </div>\n\n                    <div class=\"form-group label-floating has-success\"  *ngIf=\"asset?.user?.email\">\n                      <label class=\"control-label\">Email</label>\n                      <input [disabled]=\"true\" type=\"text\" value=\"null\" [ngModel]=\"asset.user.email\" name=\"email\"  class=\"form-control\"/>\n                      <span class=\"form-control-feedback\">\n                      <i class=\"material-icons\">done</i>\n                    </span>\n                    </div>\n\n                    <div class=\"form-group label-floating has-success\"  *ngIf=\"asset?.user?.walletAddress\">\n                      <label class=\"control-label\">Address</label>\n                      <textarea [disabled]=\"true\"  value=\"null\" [ngModel]=\"asset.user.walletAddress\" name=\"walletAddress\"\n                                class=\"form-control\">\n                      </textarea>\n\n                      <span class=\"form-control-feedback\">\n                      <i class=\"material-icons\">done</i>\n                    </span>\n                    </div>\n\n\n                  </fieldset>\n\n\n                </div>\n\n              </div>\n            </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/asset-view/asset-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_assets_service__ = __webpack_require__("../../../../../src/app/services/assets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssetViewComponent = (function () {
    function AssetViewComponent(activatedRoute, assetService, toastService) {
        this.activatedRoute = activatedRoute;
        this.assetService = assetService;
        this.toastService = toastService;
        this.asset = { user: {}, status: null };
    }
    AssetViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.concatMap(function (param) {
            console.log(param);
            return _this.assetService.getAssetByid(param.assetId);
        }).subscribe(function (asset) {
            _this.asset = asset;
            console.log(asset);
        }, function (err) {
            console.log(err);
        });
    };
    AssetViewComponent.prototype.changeStatus = function (status) {
        var _this = this;
        this.asset.status = status;
        console.log(this.asset);
        this.assetService.updateAsset(this.asset).subscribe(function (asset) {
            _this.asset = asset;
            var msg = "changed to " + status;
            _this.toastService.success('Status', msg);
            console.log(asset);
        }, function (err) {
            _this.toastService.error('Status', err.message);
        });
    };
    AssetViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-asset-view',
            template: __webpack_require__("../../../../../src/app/components/asset-view/asset-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/asset-view/asset-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_assets_service__["a" /* AssetsService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]])
    ], AssetViewComponent);
    return AssetViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/assets/assets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The container */\n.container {\n    display: block;\n    position: absolute;\n    cursor: pointer;\n    margin-left: -20px;\n    margin-top: 3px;\n\n}\n\n/* Hide the browser's default checkbox */\n.container input {\n    position: absolute;\n    opacity: 0;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 15px;\n    width: 15px;\n    background-color: #eee;\n}\n\n/* On mouse-over, add a grey background color */\n.container:hover input ~ .checkmark {\n    background-color: #ccc;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n    background-color: #2196F3;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n    display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n    left: 4px;\n    top: 1px;\n    width: 6px;\n    height: 11px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\n.card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.boldfont{\n    font-weight: 400;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/assets/assets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n              <h4 class=\"title\">Assets</h4>\n              <p class=\"category\">\n                <button class=\"btn btn-danger\"  (click)=\"goToCreateAssetPoolPage()\" >Create Asset Pool</button>\n\n              </p>\n\n\n\n          </div>\n\n          <section *ngIf=\"categoryHttpReequestStatus==='rejected' || categoryHttpReequestStatus==='pending'\">\n\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <div class=\"card-content table-responsive\">\n                  <app-error-show *ngIf=\"categoryHttpReequestStatus==='rejected'\" [error]=\"'Category could not be fetched.Try again!'\">\n\n                  </app-error-show>\n\n                  <app-spinner *ngIf=\"categoryHttpReequestStatus==='pending'\" [type]=\"'bounce'\"></app-spinner>\n                </div>\n              </div>\n            </div>\n\n          </section>\n\n          <section *ngIf=\"categoryHttpReequestStatus==='resolved'\">\n            <div class=\"row\" style=\"padding: 15px;\">\n              <div class=\"col-xs-12\">\n                <div class=\"dropdown\" style=\"float: left\">\n                  <a  href=\"javascript:void(0)\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                    Category 1\n                    <span style=\"font-weight: bolder\" *ngIf=\"assetCategoriesLevelOne[selectedIndexOnLevelOne]?.attrs[chosenLang]\">\n                  ({{assetCategoriesLevelOne[selectedIndexOnLevelOne]?.attrs[chosenLang]}})\n                </span>\n                    <b class=\"caret\"></b>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                    <li *ngFor=\"let c of assetCategoriesLevelOne;let i=index\">\n                      <a style=\"text-transform: capitalize\" href=\"javascript:void(0)\" (click)=\"onAssetCategoryLevelChange(c,0,i)\">\n                        {{c.attrs[chosenLang]}}\n                      </a>\n                    </li>\n\n\n\n\n                  </ul>\n                </div>\n\n\n                <div class=\"dropdown\" style=\"float: left\" >\n                  <a  href=\"javascript:void(0)\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                    Category 2\n                    <span style=\"font-weight: bolder\" *ngIf=\"assetCategoriesLevelTwo[selectedIndexOnLevelTwo]?.attrs[chosenLang]\">\n                  ({{assetCategoriesLevelTwo[selectedIndexOnLevelTwo]?.attrs[chosenLang]}})\n                </span>\n                    <b class=\"caret\"></b>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                    <li *ngFor=\"let c of assetCategoriesLevelTwo;let i=index\">\n                      <a style=\"text-transform: capitalize\" href=\"javascript:void(0)\" (click)=\"onAssetCategoryLevelChange(c,1,i)\">\n                        {{c.attrs[chosenLang]}}\n                      </a>\n                    </li>\n\n\n                  </ul>\n                </div>\n\n                <div class=\"dropdown\" style=\"float: left\" >\n                  <a  href=\"javascript:void(0)\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                    Category 3\n                    <span style=\"font-weight: bolder\" *ngIf=\"assetCategoriesLevelThree[selectedIndexOnLevelThree]?.attrs[chosenLang]\">\n\n                  ({{assetCategoriesLevelThree[selectedIndexOnLevelThree]?.attrs[chosenLang]}})\n                  </span>\n                    <b class=\"caret\"></b>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                    <li *ngFor=\"let c of assetCategoriesLevelThree;let i=index\">\n                      <a style=\"text-transform: capitalize\" href=\"javascript:void(0)\" (click)=\"onAssetCategoryLevelChange(c,2,i)\">\n                        {{c.attrs[chosenLang]}}\n                      </a>\n                    </li>\n\n\n                  </ul>\n                </div>\n\n\n                <div class=\"dropdown\" style=\"float: left\" >\n                  <a  href=\"javascript:void(0)\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                    Category 4\n                    <span style=\"font-weight: bolder\" *ngIf=\"assetCategoriesLevelFour[selectedIndexOnLevelFour]?.attrs[chosenLang]\">\n                    ({{assetCategoriesLevelFour[selectedIndexOnLevelFour]?.attrs[chosenLang]}})\n\n                  </span>\n                    <b class=\"caret\"></b>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                    <li *ngFor=\"let c of assetCategoriesLevelFour;let i=index\">\n                      <a style=\"text-transform: capitalize\" href=\"javascript:void(0)\" (click)=\"onAssetCategoryLevelChange(c,3,i)\">\n                        {{c.attrs[chosenLang]}}\n                      </a>\n                    </li>\n\n\n                  </ul>\n                </div>\n\n\n                <div class=\"dropdown\" style=\"float: left\">\n                  <a  href=\"javascript:void(0)\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                    Category 5\n                    <span style=\"font-weight: bolder\" *ngIf=\"assetCategoriesLevelFive[selectedIndexOnLevelFive]?.attrs[chosenLang]\">\n                   ({{assetCategoriesLevelFive[selectedIndexOnLevelFive]?.attrs[chosenLang]}})\n                  </span>\n                    <b class=\"caret\"></b>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                    <li *ngFor=\"let c of assetCategoriesLevelFive;let i=index\">\n                      <a style=\"text-transform: capitalize\" href=\"javascript:void(0)\" (click)=\"onAssetCategoryLevelChange(c,4,i)\">\n                        {{c.attrs[chosenLang]}}\n                      </a>\n                    </li>\n\n\n                  </ul>\n                </div>\n\n                <!--\n                              <button class=\"btn btn-success\" *ngIf=\"deepestCategorySelected\"  (click)=\"getAssets(lastCategoryId)\" >SEARCH</button>\n                -->\n\n\n                <!--\n                              <div class=\"dropdown\" style=\"float: left\">\n                                <a  href=\"javascript:void(0)\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                                  Filter by Status <span style=\"font-weight: bolder\" [hidden]=\"!chosenStatus\">({{chosenStatus}})</span>\n                                  <b class=\"caret\"></b>\n                                </a>\n                                <ul class=\"dropdown-menu\">\n                                  <li><a href=\"javascript:void(0)\" (click)=\"getAssets('status','pending')\">Pending</a></li>\n                                  <li><a href=\"javascript:void(0)\" (click)=\"getAssets('status','verified')\">Available</a></li>\n                                  <li><a href=\"javascript:void(0)\" (click)=\"getAssets('status','pooled')\">Pooled</a></li>\n\n                                </ul>\n                              </div>-->\n\n\n              </div>\n\n            </div>\n\n\n            <div class=\"card-content table-responsive\">\n\n\n              <h3 class=\"text-center text-gray\" *ngIf=\"!deepestCategorySelected \">\n                Select {{getLevelbyWord()}} category\n\n              </h3>\n\n              <h3 class=\"text-center text-gray\" *ngIf=\"assetsRequestStatus==='resolved' && !assets.length && deepestCategorySelected \">\n                No Assets Available with the selected category!\n\n              </h3>\n\n              <app-error-show *ngIf=\"assetsRequestStatus==='rejected'\" [error]=\"'Assets could not be fetched.Try again!'\">\n\n              </app-error-show>\n\n              <app-spinner *ngIf=\"assetsRequestStatus==='pending'\" [type]=\"'bounce'\"></app-spinner>\n\n\n              <table class=\"table\" *ngIf=\"assetsRequestStatus==='resolved' && assets.length \">\n                <thead  >\n                <tr >\n                  <th class=\"boldfont\">Asset Name</th>\n                  <th class=\"boldfont\">Farmer Name</th>\n\n                  <th class=\"boldfont\">Description</th>\n                  <th class=\"boldfont\">Quantity</th>\n                  <th class=\"boldfont\">Status</th>\n\n                </tr>\n                </thead>\n                <tbody>\n\n\n\n                <tr *ngFor=\"let asset of assets\"  >\n                  <td><span>\n                  <input type=\"checkbox\" [(ngModel)]=\"asset.isSelected\">\n                </span>\n                    <span style=\"position:relative;top:-3px;\">{{asset?.name}}</span></td>\n                  <td style=\"cursor: pointer\" [routerLink]=\"['../assets',asset.id]\">{{asset?.user?.name}}</td>\n                  <td style=\"cursor: pointer\" [routerLink]=\"['../assets',asset.id]\">{{asset?.description}}</td>\n\n                  <td style=\"cursor: pointer\" [routerLink]=\"['../assets',asset.id]\">{{asset?.quantity}}</td>\n                  <td [style.color]=\"getColor(asset.status)\"\n                      style=\"text-transform: capitalize;font-weight: bold;\n                    cursor: pointer\"\n                      [routerLink]=\"['../assets',asset.id]\">{{asset?.status}}</td>\n\n                </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </section>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/assets/assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_assets_service__ = __webpack_require__("../../../../../src/app/services/assets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_assets_pool_service__ = __webpack_require__("../../../../../src/app/services/assets-pool.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssetsComponent = (function () {
    function AssetsComponent(assetsService, assetPoolService, toastService, router) {
        this.assetsService = assetsService;
        this.assetPoolService = assetPoolService;
        this.toastService = toastService;
        this.router = router;
        this.assetsRequestStatus = 'resolved';
        this.categoryHttpReequestStatus = 'resolved';
        this.assets = [];
        this.chosenLang = 1;
        this.selectedIndexOnLevelOne = null;
        this.selectedIndexOnLevelTwo = null;
        this.selectedIndexOnLevelThree = null;
        this.selectedIndexOnLevelFour = null;
        this.selectedIndexOnLevelFive = null;
        this.assetCategoriesLevelOne = [];
        this.assetCategoriesLevelTwo = [];
        this.assetCategoriesLevelThree = [];
        this.assetCategoriesLevelFour = [];
        this.assetCategoriesLevelFive = [];
        this.deepestCategorySelected = false;
        this.currentLevel = null;
        this.lastCategoryId = null;
    }
    AssetsComponent.prototype.ngOnInit = function () {
        // this.getAssets(null,null);
        this.getCategories(0);
    };
    AssetsComponent.prototype.onAssetCategoryLevelChange = function (category, level, index) {
        var _this = this;
        console.log(category);
        console.log(level);
        if (!category.hasChildren) {
            this.deepestCategorySelected = true;
            this.lastCategoryId = category.id;
            this.getAssets(this.lastCategoryId);
            return;
        }
        this.deepestCategorySelected = false;
        this.assets = [];
        this.currentLevel = level;
        if (level === 0) {
            this.selectedIndexOnLevelOne = index;
            this.selectedIndexOnLevelTwo = null;
            this.selectedIndexOnLevelThree = null;
            this.selectedIndexOnLevelFour = null;
            this.selectedIndexOnLevelFive = null;
        }
        else if (level === 1) {
            this.selectedIndexOnLevelTwo = index;
            this.selectedIndexOnLevelThree = null;
            this.selectedIndexOnLevelFour = null;
            this.selectedIndexOnLevelFive = null;
        }
        else if (level === 2) {
            this.selectedIndexOnLevelThree = index;
            this.selectedIndexOnLevelFour = null;
            this.selectedIndexOnLevelFive = null;
        }
        else if (level === 3) {
            this.selectedIndexOnLevelFour = index;
            this.selectedIndexOnLevelFive = null;
        }
        else if (level === 4) {
            this.selectedIndexOnLevelFive = index;
        }
        this.assetsService.getCategories(category.id)
            .subscribe(function (assetCategory) {
            console.log(assetCategory);
            if (level === 0) {
                _this.assetCategoriesLevelTwo = assetCategory;
                _this.assetCategoriesLevelThree = [];
                _this.assetCategoriesLevelFour = [];
                _this.assetCategoriesLevelFive = [];
            }
            if (level === 1) {
                _this.assetCategoriesLevelThree = assetCategory;
                _this.assetCategoriesLevelFour = [];
                _this.assetCategoriesLevelFive = [];
            }
            if (level === 2) {
                _this.assetCategoriesLevelFour = assetCategory;
                _this.assetCategoriesLevelFive = [];
            }
            if (level === 3) {
                _this.assetCategoriesLevelFive = assetCategory;
            }
        }, function (err) {
            _this.toastService.error('Category', 'Something went wrong');
        });
    };
    AssetsComponent.prototype.getLevelbyWord = function () {
        var nextLevel;
        switch (this.currentLevel) {
            case 0:
                nextLevel = 'second';
                break;
            case 1:
                nextLevel = 'third';
                break;
            case 2:
                nextLevel = 'fourth';
                break;
            case 3:
                nextLevel = 'fifth';
                break;
            default:
                nextLevel = 'first';
        }
        return nextLevel;
    };
    AssetsComponent.prototype.goToCreateAssetPoolPage = function () {
        if (!this.deepestCategorySelected) {
            var nextLevel = this.getLevelbyWord();
            this.toastService.error('Asset', "Please select " + nextLevel + " category");
            return false;
        }
        if (!this.assets.length) {
            this.toastService.error('Asset', 'No asset available under this category');
            return false;
        }
        var selectedAsset = this.assets.filter(function (asset) {
            return asset.isSelected;
        });
        console.log(selectedAsset);
        if (!selectedAsset.length) {
            this.toastService.error('Asset', 'Please select atleast one asset');
            return false;
        }
        this.assetPoolService.addAssetInPool(selectedAsset);
        this.router.navigate(['/dashboard/assets-pool-create']);
    };
    AssetsComponent.prototype.getCategories = function (level) {
        var _this = this;
        this.categoryHttpReequestStatus = 'pending';
        return this.assetsService.getCategories(level)
            .subscribe(function (assetCategory) {
            _this.assetCategoriesLevelOne = assetCategory;
            _this.categoryHttpReequestStatus = 'resolved';
        }, function (err) {
            _this.categoryHttpReequestStatus = 'rejected';
            _this.toastService.error('Category', err.message);
        });
    };
    AssetsComponent.prototype.getAssets = function (categoryId) {
        var _this = this;
        console.log(categoryId);
        this.assetsRequestStatus = 'pending';
        this.assetsService.getAssets(categoryId).subscribe(function (assets) {
            _this.assetsRequestStatus = 'resolved';
            console.log(assets);
            _this.assets = assets;
        }, function (err) {
            _this.assetsRequestStatus = 'rejected';
            console.log(err);
        });
    };
    AssetsComponent.prototype.getColor = function (status) {
        switch (status) {
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
    };
    AssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-assets',
            template: __webpack_require__("../../../../../src/app/components/assets/assets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/assets/assets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_assets_service__["a" /* AssetsService */], __WEBPACK_IMPORTED_MODULE_4__services_assets_pool_service__["a" /* AssetsPoolService */],
            __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AssetsComponent);
    return AssetsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n\n.navbar.navbar-primary {\n    background-color: #6ab187;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color='green' data-image=\"\">\n  <app-sidebar></app-sidebar>\n  <div class=\"sidebar-background\" style=\"background-color: #00bfa5\"></div>\n</div>\n<div class=\"main-panel\">\n  <app-navbar ></app-navbar>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSponserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardSponserComponent = (function () {
    function DashboardSponserComponent(location, router, walletService) {
        this.location = location;
        this.router = router;
        this.walletService = walletService;
    }
    DashboardSponserComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.init();
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */])
    ], DashboardSponserComponent.prototype, "navbar", void 0);
    DashboardSponserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard-sponsor',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_wallet_service__["a" /* WalletService */]])
    ], DashboardSponserComponent);
    return DashboardSponserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/farmers/farmers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n\n.navbar.navbar-primary {\n    background-color: #6ab187;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/farmers/farmers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"title\">Farmers</h4>\n            <p class=\"category\">List of all farmers</p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <div *ngIf=\"farmerResolvedStatus==='pending'\" style=\"margin-top: 200px;\">\n              <app-spinner></app-spinner>\n            </div>\n\n            <h5 class=\"text-center text-gray\" *ngIf=\"farmerResolvedStatus==='resolved' && !farmers.length\">\n              No Farmer onboarded yet\n            </h5>\n\n            <table class=\"table\" *ngIf=\"farmerResolvedStatus==='resolved' && farmers.length\">\n              <thead  >\n              <tr>\n                <th>Name</th>\n                <th>Phone</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let farmer of farmers\">\n                <td>{{farmer?.name}}</td>\n                <td>{{farmer?.phone}}</td>\n              </tr>\n              </tbody>\n            </table>\n\n\n            <app-error-show [error]=\"'We could not fetch farmers.Try again'\" *ngIf=\"farmerResolvedStatus==='rejected'\"></app-error-show>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/farmers/farmers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_farmer_service__ = __webpack_require__("../../../../../src/app/services/farmer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FarmersComponent = (function () {
    function FarmersComponent(farmerService, userService, router, toastService) {
        this.farmerService = farmerService;
        this.userService = userService;
        this.router = router;
        this.toastService = toastService;
        this.farmers = [];
        this.farmerResolvedStatus = 'resolved';
        this.errorMessage = null;
    }
    FarmersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.farmerResolvedStatus = 'pending';
        this.userService.getUsersByRole('farmer').subscribe(function (farmers) {
            _this.farmerResolvedStatus = 'resolved';
            console.log(farmers);
            _this.farmers = farmers;
        }, function (err) {
            console.log(err);
            _this.farmerResolvedStatus = 'rejected';
            _this.errorMessage = err.message;
            _this.toastService.error('Farmer', err.message);
        });
    };
    FarmersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-farmers',
            template: __webpack_require__("../../../../../src/app/components/farmers/farmers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/farmers/farmers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_farmer_service__["a" /* FarmerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], FarmersComponent);
    return FarmersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/issuer-registration/issuer-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n\n.navbar.navbar-primary {\n    background-color: #6ab187;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/issuer-registration/issuer-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [balance]=\"account.balance\"></app-header>\n\n\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"title\">Activate your Account</h4>\n            <p class=\"category\">to register yourself as an Issuer on Blockchain </p>\n          </div>\n          <div class=\"card-content\">\n            <form>\n              <div class=\"row\">\n\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Issuer Name</label>\n                    <input  [(ngModel)]=\"issuer.name\"  name=\"issuerName\" type=\"text\" class=\"form-control\" >\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Description</label>\n                    <input [(ngModel)]=\"issuer.description\"  name=\"description\" type=\"text\" class=\"form-control\" >\n                  </div>\n                </div>\n\n\n              </div>\n\n\n              <button\n                      [disabled]=\"!account?.balance || issuerRequestStatus==='pending'\"\n                      (click)=\"registerAsIssuer()\"\n                      type=\"submit\"\n                      class=\"btn btn-danger pull-right\">Activate</button>\n              <div class=\"clearfix\"></div>\n\n              <div *ngIf=\"!account?.balance\">\n                <label>\n                  <b>Hold on:</b> We have initialised the transfer of ACC.once transfered you can click on the button\n                </label>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/issuer-registration/issuer-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuerRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IssuerRegistrationComponent = (function () {
    function IssuerRegistrationComponent(userService, router, toastyService) {
        this.userService = userService;
        this.router = router;
        this.toastyService = toastyService;
        this.account = {};
        this.issuer = { name: null, description: null };
        this.toast = {};
        this.timer = null;
        this.issuerRequestStatus = 'resolved';
    }
    IssuerRegistrationComponent.prototype.ngOnInit = function () {
        this.showToast('wait', 'Wallet Balance', 'wait', false, 500000);
        this.getBlockchainAccount();
    };
    IssuerRegistrationComponent.prototype.getBlockchainAccount = function () {
        var _this = this;
        console.log('polling server ');
        this.subscription = this.userService.getBlockchainAccountDuringOnboarding().subscribe(function (account) {
            _this.account = account;
            console.log(_this.account);
            if (_this.account.balance) {
                _this.account.balance = parseInt(_this.account.balance) / Math.pow(10, 6);
                console.log('balance found stop polling');
                clearInterval(_this.timer);
                _this.clearToast();
                var msg = _this.account.balance + " ACC transferred";
                _this.showToast('success', 'Wallet Balance', msg, true, 500000);
                _this.subscription.unsubscribe();
            }
            else {
                _this.clearToast();
                _this.showToast('wait', 'Wallet Balance', 'Hold on! We are topping up your wallet', false, 500000);
            }
        }, function (err) {
            console.log(err);
        });
    };
    IssuerRegistrationComponent.prototype.showToast = function (type, title, message, showClose, timeout) {
        var _this = this;
        if (showClose === void 0) { showClose = false; }
        if (timeout === void 0) { timeout = 5000; }
        var toastOptions = {
            title: title,
            msg: message,
            showClose: showClose,
            timeout: timeout,
            onAdd: function (toast) {
                _this.toast = toast;
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        switch (type) {
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            default:
                this.toastyService.wait(toastOptions);
                break;
        }
    };
    IssuerRegistrationComponent.prototype.clearToast = function () {
        if (this.toast && this.toast.id) {
            this.toastyService.clear(this.toast.id);
        }
    };
    IssuerRegistrationComponent.prototype.registerAsIssuer = function () {
        var _this = this;
        this.clearToast();
        if (!this.account.balance)
            return false;
        console.log('creating');
        var reg = /^[A-Z]{1,16}$/;
        if (!reg.test(this.issuer.name)) {
            var msg = 'Issuer name invalid.Name should be in all capital and 1-16 character long';
            return this.showToast('error', 'Issuer', msg, true, 5000);
        }
        if (!this.issuer.description) {
            var msg = 'Issuer description required';
            return this.showToast('error', 'Issuer', msg, true, 5000);
        }
        this.issuerRequestStatus = 'pending';
        this.userService.resgisterAsIssuer(this.issuer).subscribe(function (user) {
            console.log('succcesss');
            _this.issuerRequestStatus = 'resolved';
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log(err);
            _this.issuerRequestStatus = 'rejected';
            return _this.showToast('error', 'Issuer', err.message, true, 5000);
        });
    };
    IssuerRegistrationComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
        this.clearToast();
    };
    IssuerRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-issuer-registration',
            template: __webpack_require__("../../../../../src/app/components/issuer-registration/issuer-registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/issuer-registration/issuer-registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ng2_toasty__["c" /* ToastyService */]])
    ], IssuerRegistrationComponent);
    return IssuerRegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing-page {\r\n    height: 100vh;\r\n}\r\n\r\n.card [data-background-color=\"green\"] {\r\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\r\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\r\n}\r\n\r\n.navbar.navbar-primary {\r\n    background-color: #6ab187;\r\n    color: #ffffff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <div>\n        <nav class=\"navbar  navbar-primary\">\n            <div class=\"container\">\n                <!-- Brand and toggle get grouped for better mobile display -->\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n                            data-target=\"#navigation-example\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"javascript:void (0)\"><b style=\"letter-spacing: 5px\">Agriledger</b></a>\n                </div>\n\n                <div class=\"collapse navbar-collapse\" id=\"navigation-example\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <!--<li>\n                          <a [routerLink]=\"['/login-ops']\" class=\"btn btn-danger\" href=\"../components-documentation.html\">\n                            Ops Login\n                          </a>\n                        </li>\n                        <li>\n                          <a  [routerLink]=\"['/login-sponsor']\" class=\"btn btn-danger\" href=\"../components-documentation.html\">\n                            Sponser Login\n                          </a>\n                        </li>-->\n                        <!--  <li>\n                            <a href=\"https://twitter.com/CreativeTim\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\n                              <i class=\"fa fa-twitter\"></i>\n                            </a>\n                          </li>\n                          <li>\n                            <a href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\n                              <i class=\"fa fa-facebook-square\"></i>\n                            </a>\n                          </li>-->\n\n                    </ul>\n                </div>\n            </div>\n        </nav>\n\n    </div>\n\n    <div class=\"container text-center\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <h1 class=\"title\">Blockchain platform for Farmers</h1>\n                <h4>Agriledger, Revolutionising the Supply Chain.</h4>\n                <h4>Creating opportunities across the value chain.</h4>\n                <h4>Guaranteeing Authenticity and Quantity.</h4>\n                <h4>Creating Transparency and Traceability.</h4>\n                <br/>\n            </div>\n        </div>\n        <a style=\"width: 160px;\" [routerLink]=\"['/login']\" class=\"btn btn-danger\" href=\"javascipt:void(0)\">\n            SIGN IN\n        </a>\n    </div>\n\n    <!--<footer class=\"footer\" style=\"bottom: 0px;\n    width: 100%;\n    position: absolute;\n    text-align: center;\n    background-color: lightgrey;\">\n        <div class=\"container\">\n            <nav class=\"\">\n                <ul>\n                    <li>\n                        <a [routerLink]=\"['/about-us']\" href=\"javascript:void(0)\">\n                            About us\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/privacy']\" href=\"javascript:void(0)\">\n                            Privacy Policy\n                        </a>\n                    </li>\n\n                    <li>\n                        <a [routerLink]=\"['/terms']\" href=\"javascript:void(0)\">\n                            Terms & Conditions\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/contact-us']\" href=\"javascript:void(0)\">\n                            Contact us\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n    </footer>-->\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-wrapper{\r\n    height: 100vh;\r\n\r\n}\r\n.card [data-background-color=\"green\"] {\r\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\r\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\r\n}\r\n\r\n.navbar.navbar-primary {\r\n    background-color: #6ab187;\r\n    color: #ffffff;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <app-header></app-header>\n    <div class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-md-offset-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header\" data-background-color=\"green\">\n                            <h4 class=\"title\">{{'SIGNIN'|translate}}</h4>\n                            <p class=\"category\">{{'SIGNIN_DESCRIPTION'|translate}}</p>\n                        </div>\n                        <div class=\"card-content\">\n                            <form name=\"loginForm\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\" style=\"font-size: 14px;\">{{'Email'|translate}}</label>\n                                            <input style=\"text-transform: lowercase\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" >\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\" style=\"font-size: 14px;\">{{'Password'|translate}}</label>\n                                            <input style=\"text-transform: lowercase\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\" >\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <button\n                                        type=\"submit\"\n                                        [disabled]=\"!user.email || !user.password || loginRequestStatus==='pending'\"\n                                        (click)=\"login()\"\n                                        class=\"btn btn-danger pull-right\">\n                                    {{'SIGNIN'|translate}}\n                                </button>\n                                <div class=\"clearfix\"></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, toastService, router) {
        this.userService = userService;
        this.toastService = toastService;
        this.router = router;
        this.user = {};
        this.loginRequestStatus = 'resolved';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginRequestStatus = 'pending';
        this.userService.login(this.user).subscribe(function (data) {
            _this.loginRequestStatus = 'resolved';
            var user = data.user;
            if (user.role === 'ops' || user.role === 'sponsor') {
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.toastService.error('Role', 'You do not have valid role to proceed');
            }
        }, function (res) {
            _this.loginRequestStatus = 'rejected';
            console.log(res);
            if (res.status === 401) {
                console.log('Login failed');
                _this.toastService.error('Login', 'Wrong email/password');
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-sponsor',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/onboarding/onboarding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.navbar.navbar-primary {\n    background-color: #6ab187;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/onboarding/onboarding.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/onboarding/onboarding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnboardingComponent = (function () {
    function OnboardingComponent() {
    }
    OnboardingComponent.prototype.ngOnInit = function () {
    };
    OnboardingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-onboarding',
            template: __webpack_require__("../../../../../src/app/components/onboarding/onboarding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/onboarding/onboarding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OnboardingComponent);
    return OnboardingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/password-change/password-change.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n\n.navbar.navbar-primary {\n    background-color: #6ab187;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/password-change/password-change.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-2\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"title\">Change Password</h4>\n          </div>\n          <div class=\"card-content\">\n            <form>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Old Password</label>\n                    <input type=\"text\" [(ngModel)]=\"credential.oldPassword\" name=\"oldPassword\" class=\"form-control\" >\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">New Password</label>\n                    <input type=\"text\" [(ngModel)]=\"credential.newPassword\" name=\"newPassword\" class=\"form-control\" >\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Re-Type Password</label>\n                    <input type=\"text\" [(ngModel)]=\"credential.rePassword\" name=\"rePassword\" class=\"form-control\" >\n                  </div>\n                </div>\n              </div>\n\n              <button\n                      [disabled]=\"passwordChangeRequestStatus==='pending'\"\n                      type=\"submit\"\n                      (click)=\"changePassword()\"\n                      class=\"btn btn-danger pull-right\">CHANGE</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/password-change/password-change.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordChangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordChangeComponent = (function () {
    function PasswordChangeComponent(toastService, userService, router) {
        this.toastService = toastService;
        this.userService = userService;
        this.router = router;
        this.credential = { oldPassword: null, newPassword: null, rePassword: null };
        this.passwordChangeRequestStatus = 'resolved';
    }
    PasswordChangeComponent.prototype.ngOnInit = function () {
    };
    PasswordChangeComponent.prototype.changePassword = function () {
        var _this = this;
        if (!this.credential.oldPassword) {
            this.toastService.error('Password', 'Old password is required');
            return;
        }
        else if (!this.credential.newPassword) {
            this.toastService.error('Password', 'New password is required');
            return;
        }
        else if (!this.credential.rePassword) {
            this.toastService.error('Password', 'Please type your new password again');
            return;
        }
        if (this.credential.newPassword !== this.credential.rePassword) {
            this.toastService.error('Password', 'Password does not match');
            return;
        }
        this.passwordChangeRequestStatus = 'pending';
        this.userService.changePassword(this.credential.oldPassword, this.credential.newPassword)
            .subscribe(function (data) {
            _this.passwordChangeRequestStatus = 'resolved';
            _this.credential.oldPassword = null;
            _this.credential.newPassword = null;
            _this.credential.rePassword = null;
            _this.toastService.success('Password', 'Changed Sucessfully');
        }, function (err) {
            _this.passwordChangeRequestStatus = 'rejected';
            _this.toastService.error('Password', err.message);
        });
    };
    PasswordChangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password-change',
            template: __webpack_require__("../../../../../src/app/components/password-change/password-change.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/password-change/password-change.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], PasswordChangeComponent);
    return PasswordChangeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/password-reset/password-reset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.navbar.navbar-primary {\n    background-color: #6ab187;\n    color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/password-reset/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"title\">Change Password</h4>\n            <p class=\"category\">for security purpose please change your initial password</p>\n          </div>\n          <div class=\"card-content\">\n            <form>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Old Password</label>\n                    <input type=\"password\" [(ngModel)]=\"credential.oldPassword\" name=\"oldPassword\" class=\"form-control\" >\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">New Password</label>\n                    <input type=\"password\" [(ngModel)]=\"credential.newPassword\" name=\"newPassword\" class=\"form-control\" >\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Re-Type Password</label>\n                    <input type=\"password\" [(ngModel)]=\"credential.rePassword\" name=\"rePassword\" class=\"form-control\" >\n                  </div>\n                </div>\n              </div>\n\n              <button\n                      [disabled]=\"passwordChangeRequestStatus==='pending'\"\n                      type=\"submit\"\n                      (click)=\"changePassword()\"\n                      class=\"btn btn-danger pull-right\">Save</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/password-reset/password-reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordResetComponent = (function () {
    function PasswordResetComponent(toastService, userService, router) {
        this.toastService = toastService;
        this.userService = userService;
        this.router = router;
        this.credential = { oldPassword: null, newPassword: null, rePassword: null };
        this.passwordChangeRequestStatus = 'resolved';
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
    };
    PasswordResetComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.credential.newPassword !== this.credential.rePassword) {
            this.toastService.error('Password', 'Password does not match');
            return;
        }
        this.passwordChangeRequestStatus = 'pending';
        this.userService.resetPassword(this.credential.oldPassword, this.credential.newPassword)
            .subscribe(function (data) {
            _this.passwordChangeRequestStatus = 'resolved';
            _this.toastService.success('Password', 'Changed Sucessfully');
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            _this.passwordChangeRequestStatus = 'rejected';
            _this.toastService.error('Password', err.message);
        });
    };
    PasswordResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password-reset',
            template: __webpack_require__("../../../../../src/app/components/password-reset/password-reset.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/password-reset/password-reset.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tokens/tokens.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card [data-background-color=\"green\"] {\r\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\r\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tokens/tokens.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n    <div class=\"card\" style=\"margin-top: 50px;\">\n      <div class=\"card-header\" data-background-color=\"green\">\n        <h4 class=\"title\">Issued Tokens</h4>\n\n      </div>\n\n      <div class=\"card-content table-responsive\" >\n\n        <section *ngIf=\"tokenHttpRequestStatus==='pending' || tokenHttpRequestStatus==='rejected' \">\n          <app-error-show *ngIf=\"tokenHttpRequestStatus==='rejected'\" [error]=\"'Tokens could not be fetched.Try again!'\">\n\n          </app-error-show>\n\n          <app-spinner *ngIf=\"tokenHttpRequestStatus==='pending'\" [type]=\"'bounce'\"></app-spinner>\n        </section>\n\n\n\n        <section *ngIf=\"tokenHttpRequestStatus==='resolved'\">\n          <div class=\"row\" *ngIf=\"!tokens.length\">\n            <div class=\"col-xs-12 text-center\">\n              <h3 class=\"text-center text-gray\" *ngIf=\"tokenHttpRequestStatus==='resolved' && !tokens.length \">\n                No Token has been issued yet!\n\n              </h3>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div style=\"cursor: pointer\" class=\"col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let token of tokens\">\n              <div class=\"card card-stats\" style=\"border: 1px solid #c4c4c4\" >\n\n                <div class=\"card-content \">\n                  <p class=\"category text-left\">Currency Name</p>\n                  <h5 class=\"title text-left\">{{token?.issuerName}}.{{token?.assetpool?.currency}}</h5>\n\n                  <hr>\n\n                  <div class=\"row\" style=\"text-align: left\">\n\n                    <div class=\"col-xs-6 text-left\">\n                      Balance\n                    </div>\n                    <div class=\"col-xs-6 text-right\">\n                      <b>{{token?.amount}}</b>\n                    </div>\n                  </div>\n                  <hr>\n\n                  <div class=\"row\" style=\"text-align: left\">\n\n                    <div class=\"col-xs-6 text-left\">\n                      Exchange Rate\n                    </div>\n                    <div class=\"col-xs-6 text-right\">\n                      <b>{{token?.exchangeRate}}</b>\n                    </div>\n                  </div>\n                  <hr>\n\n\n                  <div class=\"row\" style=\"text-align: left\">\n\n                    <div class=\"col-xs-6 text-left\">\n                      Status\n                    </div>\n                    <div class=\"col-xs-6 text-right\">\n                      <b [style.color]=\"getColor(token?.status)\">\n                        {{token?.status!==undefined ? (token?.status===0?'Pending':'Approved') : 'Checking'}}</b>\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons text-danger\">update</i> <a href=\"javascript:void(0)\">{{token?.created|date:'medium'}}</a>\n                  </div>\n                </div>\n\n\n\n              </div>\n            </div>\n          </div>\n\n\n        </section>\n\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tokens/tokens.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokensComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_assets_pool_service__ = __webpack_require__("../../../../../src/app/services/assets-pool.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TokensComponent = (function () {
    function TokensComponent(tokenService, activatedRoute, assetPoolService, userService, toastService) {
        this.tokenService = tokenService;
        this.activatedRoute = activatedRoute;
        this.assetPoolService = assetPoolService;
        this.userService = userService;
        this.toastService = toastService;
        this.tokens = [];
        this.tokensFromBlockchain = [];
        this.tokenHttpRequestStatus = 'resolved';
    }
    TokensComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            console.log(param);
            if (param && param.assetPoolId) {
                _this.getTokensByAssetPoolId(param.assetPoolId);
            }
            else {
                _this.getTokens();
            }
        }, function (err) {
            console.log(err);
        });
    };
    TokensComponent.prototype.getTokensByAssetPoolId = function (assetPoolId) {
        var _this = this;
        this.tokenHttpRequestStatus = 'pending';
        this.assetPoolService.getTokensByAssetPoolId(assetPoolId).subscribe(function (tokens) {
            console.log(tokens);
            _this.tokens = tokens;
            _this.tokenHttpRequestStatus = 'resolved';
            console.log(_this.tokens);
            _this.getAllTokensFromBlockchain();
        }, function (err) {
            _this.tokenHttpRequestStatus = 'rejected';
            console.log(err);
            _this.toastService.error('Tokens', err.message);
        });
    };
    TokensComponent.prototype.getTokens = function () {
        var _this = this;
        this.tokenHttpRequestStatus = 'pending';
        this.tokenService.getTokens().subscribe(function (tokens) {
            _this.tokens = tokens;
            _this.tokenHttpRequestStatus = 'resolved';
            console.log(_this.tokens);
            _this.getAllTokensFromBlockchain();
        }, function (err) {
            _this.tokenHttpRequestStatus = 'rejected';
            console.log(err);
            _this.toastService.error('Tokens', err.message);
        });
    };
    TokensComponent.prototype.getAllTokensFromBlockchain = function () {
        var _this = this;
        this.tokenService.getAllTokensFromBlockchain().subscribe(function (tokens) {
            _this.tokensFromBlockchain = tokens;
            // this fucntion can be improved but for smaller list this is fine as O(n2) wont hurt
            _this.tokens.forEach(function (token) {
                _this.tokensFromBlockchain.forEach(function (token2) {
                    if (token.transactionId === token2.transactionId) {
                        console.log('save txn');
                        token.status = token2.approved;
                    }
                });
            });
            console.log(_this.tokensFromBlockchain);
            console.log(_this.tokens);
        }, function (err) {
            console.log(err);
            _this.toastService.error('Tokens', err.message);
        });
    };
    TokensComponent.prototype.getColor = function (status) {
        status = String(status);
        switch (status) {
            case '1':
                return 'green';
            case '0':
                return '#ff8b4c';
            default:
                return 'grey';
        }
    };
    TokensComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tokens',
            template: __webpack_require__("../../../../../src/app/components/tokens/tokens.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tokens/tokens.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_token_service__["a" /* TokenService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__services_assets_pool_service__["a" /* AssetsPoolService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], TokensComponent);
    return TokensComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/transfer/transfer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card [data-background-color=\"green\"] {\r\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\r\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/transfer/transfer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"title\">Transfer</h4>\n          </div>\n          <div class=\"card-content\">\n            <app-error-show *ngIf=\"!user.walletAddress\" [error]=\"'You are not registered on Blockchain!'\">\n            </app-error-show>\n\n            <form name=\"loginForm\" *ngIf=\"user.walletAddress\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" style=\"font-size: 14px;\">Sender Address</label>\n                    <input type=\"text\" [(ngModel)]=\"user.walletAddress\" disabled name=\"walletAddress\" class=\"form-control\" >\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" style=\"font-size: 14px;\">Recipient Address (Underwriter at the e-commerce marketplace)</label>\n                    <input type=\"text\" [(ngModel)]=\"transaction.toAddress\" name=\"toAddress\" class=\"form-control\" >\n                  </div>\n                </div>\n              </div>\n\n\n\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" style=\"font-size: 14px;\">Token</label>\n                    <select class=\"form-control \"  name=\"currency\" [(ngModel)]=\"transaction.currency\">\n\n                      <option *ngFor=\"let token of tokenRange\" [value]=\"token.currency\">\n                        {{token.currency}}\n                      </option>\n\n\n                    </select>\n\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" style=\"font-size: 14px;\">Number</label>\n                    <input type=\"text\" [(ngModel)]=\"transaction.amount\" name=\"amount\" class=\"form-control\" >\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"row\">\n\n\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" style=\"font-size: 14px;\">Fee</label>\n                    <input type=\"text\" [(ngModel)]=\"transaction.fee\" name=\"fee\" class=\"form-control\" >\n                  </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" style=\"font-size: 14px;\">Message</label>\n                    <input type=\"text\" [(ngModel)]=\"user.remark\" name=\"remark\" class=\"form-control\" >\n                  </div>\n                </div>\n              </div>\n\n\n\n              <button\n                      type=\"submit\"\n                      [disabled]=\"transferHttpRequestStatus==='pending'\"\n                      (click)=\"transfer()\"\n                      class=\"btn btn-danger pull-right\">Transfer</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/transfer/transfer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable__ = __webpack_require__("../../../../rxjs/observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransferComponent = (function () {
    function TransferComponent(walletService, tokenService, userService, toastService) {
        this.walletService = walletService;
        this.tokenService = tokenService;
        this.userService = userService;
        this.toastService = toastService;
        this.user = {};
        this.transferHttpRequestStatus = 'resolved';
        this.transaction = { currency: 'ACC', precision: 6, fee: '0.01', toAddress: '', amount: '', remark: '' };
        this.tokenRange = [];
    }
    TransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().concatMap(function (user) {
            _this.user = user;
            if (!_this.user.walletAddress) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_observable__["Observable"].throw({ meessage: 'User does not have wallet address' });
            }
            return _this.tokenService.getAllTokensByAddressFromBlockchain();
        }).subscribe(function (assets) {
            console.log(assets);
            _this.tokenRange = assets;
            _this.tokenRange.unshift({
                currency: "ACC",
                precision: 6
            });
        }, function (err) {
            console.log(err);
        });
    };
    TransferComponent.prototype.getPrecision = function (currency) {
        for (var i = 0; i < this.tokenRange.length; i++) {
            if (this.tokenRange[i].currency == currency) {
                return this.tokenRange[i].precision;
            }
        }
    };
    TransferComponent.prototype.transfer = function () {
        var _this = this;
        var isAddress = /^[0-9]{1,21}$/g;
        var currency;
        var precision = 6;
        precision = this.transaction.currency === 'ACC' ? 6 : this.getPrecision(this.transaction.currency);
        console.log(precision);
        if (!this.user.walletAddress) {
            this.toastService.error('Transfer', 'You dont have wallet address.Please register yourself on the blockchain first');
            return false;
        }
        if (!this.transaction.toAddress) {
            this.toastService.error('Transfer', 'Please enter recipient address');
            return false;
        }
        if (this.transaction.currency === undefined) {
            this.toastService.error('Transfer', 'Invalid Amount');
        }
        else {
            currency = this.transaction.currency === 'ACC' ? null : this.transaction.currency;
        }
        if (this.transaction.toAddress === this.user.walletAddress) {
            this.toastService.error('Transfer', 'Please choose different address other than yours');
            return false;
        }
        if (!this.transaction.amount || Number(this.transaction.amount) <= 0) {
            this.toastService.error('Transfer', 'Invalid Amount');
            return false;
        }
        var amount = parseFloat((this.transaction.amount * Math.pow(10, precision)).toFixed(0));
        var payload = { toAddress: this.transaction.toAddress, amount: amount, currency: currency, remark: this.transaction.remark };
        this.transferHttpRequestStatus = 'pending';
        this.walletService.sendTransactions(payload).subscribe(function (result) {
            _this.transaction.amount = null;
            _this.transaction.remark = null;
            _this.transaction.currency = null;
            _this.transferHttpRequestStatus = 'resolved';
            _this.toastService.success('Transfer', 'Successfully Tranferred');
        }, function (err) {
            console.log(err);
            _this.transferHttpRequestStatus = 'rejected';
            _this.toastService.error('Transfer', err.message);
        });
        //transaction = agrichainJS.transaction.createTransaction(String(this.transaction.toAddress),
        // amount.toString(), currency, this.transaction.remark,this.profile.privateKey, this.profile.secondPublicKey);
    };
    TransferComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transfer',
            template: __webpack_require__("../../../../../src/app/components/transfer/transfer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/transfer/transfer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */], __WEBPACK_IMPORTED_MODULE_3__services_token_service__["a" /* TokenService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], TransferComponent);
    return TransferComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-create/user-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"title\">Create User</h4>\n          </div>\n          <div class=\"card-content\">\n            <form name=\"loginForm\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label required\" style=\"font-size: 14px;\">Name</label>\n                    <input type=\"text\" [(ngModel)]=\"user.name\"  name=\"name\" class=\"form-control\" >\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label required\" style=\"font-size: 14px;\">Email</label>\n                    <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" >\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" style=\"font-size: 14px;\">Phone</label>\n                    <input type=\"text\" [(ngModel)]=\"user.phone\"  name=\"phone\" class=\"form-control\" >\n                  </div>\n                </div>\n\n              </div>\n\n              <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label required\" style=\"font-size: 14px;\">Password</label>\n                    <input type=\"text\" [(ngModel)]=\"user.password\" name=\"passsword\" class=\"form-control\" >\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label required\" style=\"font-size: 14px;\">Retype Password</label>\n                    <input type=\"text\" [(ngModel)]=\"passwordRetyped\" name=\"passwordRetyped\" class=\"form-control\" >\n                  </div>\n                </div>\n\n\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label required\" style=\"font-size: 14px;\">Role</label>\n                    <select class=\"form-control \"  name=\"roke\" [(ngModel)]=\"user.role\">\n\n                      <option *ngFor=\"let role of roles\" [value]=\"role\">\n                        {{role}}\n                      </option>\n\n\n                    </select>\n\n                  </div>\n                </div>\n              </div>\n\n\n\n\n\n\n              <button\n                      type=\"submit\"\n                      [disabled]=\"createRequestStatus==='pending'\"\n                      (click)=\"register()\"\n                      class=\"btn btn-danger pull-right\">CREATE</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user-create/user-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".required:after {\n  content: \"*\";\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-create/user-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserCreateComponent = (function () {
    function UserCreateComponent(userService, toastService, router) {
        this.userService = userService;
        this.toastService = toastService;
        this.router = router;
        this.user = { password: 'agriledger', role: 'farmer' };
        this.passwordRetyped = 'agriledger';
        this.roles = ['ops', 'sponsor', 'farmer'];
        this.createRequestStatus = 'resolved';
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent.prototype.register = function () {
        var _this = this;
        if (!this.user.name) {
            return this.toastService.error('User', 'Name is required');
        }
        if (!this.user.email) {
            return this.toastService.error('User', 'Email is required');
        }
        if (!this.user.password) {
            return this.toastService.error('User', 'Password is required');
        }
        if (!this.passwordRetyped) {
            return this.toastService.error('User', 'Please enter the password again');
        }
        if (this.user.password !== this.passwordRetyped) {
            return this.toastService.error('User', 'Password does not match');
        }
        this.createRequestStatus = 'pending';
        this.userService.register(this.user).subscribe(function (data) {
            _this.createRequestStatus = 'resolved';
            _this.toastService.success('User', 'created successfully');
            _this.user.name = null;
            _this.user.email = null;
        }, function (err) {
            _this.createRequestStatus = 'rejected';
            if (err.showError) {
                _this.toastService.error('User', err.message);
            }
        });
    };
    UserCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-create',
            template: __webpack_require__("../../../../../src/app/components/user-create/user-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-create/user-create.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n    <div class=\"dropdown\" style=\"float: left\">\n      <a  href=\"javascript:void(0)\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n        Filter by role\n        <b class=\"caret\"></b>\n      </a>\n      <ul class=\"dropdown-menu\">\n        <li *ngFor=\"let filter of roleFilters\">\n          <a style=\"text-transform: capitalize\" href=\"javascript:void(0)\" (click)=\"getByFilter(filter.type,filter.value)\">\n            {{filter.name}}\n          </a>\n        </li>\n\n      </ul>\n    </div>\n\n\n    <div class=\"dropdown\" style=\"float: left\">\n      <a  href=\"javascript:void(0)\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n        Filter by Onboarding status\n        <b class=\"caret\"></b>\n      </a>\n      <ul class=\"dropdown-menu\">\n        <li *ngFor=\"let filter of onboardingFilters\">\n          <a style=\"text-transform: capitalize\" href=\"javascript:void(0)\" (click)=\"getByFilter(filter.type,filter.value,filter.sortOrder)\">\n            {{filter.name}}\n          </a>\n        </li>\n\n      </ul>\n    </div>\n\n    <div class=\"card\" style=\"margin-top: 50px;\">\n      <div class=\"card-header\" data-background-color=\"green\">\n        <h4 class=\"title\">Users list</h4>\n\n      </div>\n\n      <div class=\"card-content\">\n        <div class=\"card-content table-responsive\">\n          <app-spinner [type]=\"'bounce'\" *ngIf=\"usersHttpSstatus==='pending'\"></app-spinner>\n\n          <app-error-show *ngIf=\"usersHttpSstatus==='rejected'\" [error]=\"'Users list could not be fetched.Try again!'\">\n\n          </app-error-show>\n          <table class=\"table\" *ngIf=\"users.length\">\n            <thead  >\n            <tr>\n              <th class=\"boldfont\">Name</th>\n              <th class=\"boldfont\">Email</th>\n\n              <th class=\"boldfont\">Phone</th>\n\n              <th class=\"boldfont\">Wallet Address</th>\n              <th class=\"boldfont\">Role</th>\n              <th class=\"boldfont\">Joined on</th>\n\n              <th class=\"boldfont\">Onboarding Status</th>\n\n            </tr>\n            </thead>\n            <tbody>\n\n\n            <tr *ngFor=\"let user of users;let i=index\">\n\n              <td><span>{{i+1}}.</span> {{user?.name}}</td>\n\n              <td >\n\n                {{user?.email}}\n\n              </td>\n              <td >\n\n                {{user?.phone}}\n\n\n              </td>\n\n              <td data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{user?.walletAddress}}\">\n\n                {{user.walletAddress ?(user.walletAddress|slice:0:10 )+'...' :'' }}\n\n\n              </td>\n              <td>\n                {{user?.role}}\n              </td>\n              <td *ngIf=\"user.createdAt\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{user?.createdAt|date:'medium'}}\" >\n                {{user?.createdAt|moment}}</td>\n              <td>\n                {{user|onboardingStatus}}\n              </td>\n\n            </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n\n\n    </div>\n\n\n\n\n\n    <!-- <section >\n         <div class=\"card\">\n             <div class=\"card-header\" data-background-color=\"green\">\n                 <h4 class=\"title\">Others's asset pool</h4>\n\n             </div>\n\n\n\n             <div class=\"card-content table-responsive\" >\n\n                 <section *ngIf=\"otherAssetPoolHttpSstatus==='pending' || otherAssetPoolHttpSstatus==='rejected'\">\n                     <app-spinner [type]=\"'bounce'\" *ngIf=\"otherAssetPoolHttpSstatus==='pending'\"></app-spinner>\n\n                     <app-error-show *ngIf=\"otherAssetPoolHttpSstatus==='rejected'\" [error]=\"'Others Assets pool could not be fetched.Try again!'\">\n\n                     </app-error-show>\n                 </section>\n\n                 <section *ngIf=\"otherAssetPoolHttpSstatus==='resolved'\">\n\n                     <div class=\"row\" *ngIf=\"!otherPools.length\">\n                         <div class=\"col-xs-12 text-center\">\n                             <h3 class=\"text-gray\">\n                                 No Asset found\n                             </h3>\n                         </div>\n                     </div>\n\n                     <div class=\"row\">\n                         <div style=\"cursor: pointer\" class=\"col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let pool of otherPools\">\n                             <div class=\"card card-stats\"  >\n\n                                 <div class=\"card-content\" style=\"text-align: left\" >\n                                     <p class=\"category\">Currency Name</p>\n                                     <h5 class=\"title\">{{pool.issuerName}}.{{pool.currency}}</h5>\n\n                                     <hr>\n\n                                     <div class=\"row\" style=\"text-align: left\" [routerLink]=\"['../assets-pool-view',pool.id]\">\n\n                                         <div class=\"col-xs-6 text-left\">\n                                             Maximum\n                                         </div>\n                                         <div class=\"col-xs-6 text-right\">\n                                             <b>{{pool.maximum}}</b>\n                                         </div>\n                                     </div>\n                                     <hr>\n\n                                     <div class=\"row\" style=\"text-align: left\" [routerLink]=\"['../assets-pool-view',pool.id]\">\n\n                                         <div class=\"col-xs-6 text-left\">\n                                             Issued Quantity\n                                         </div>\n                                         <div class=\"col-xs-6 text-right\">\n                                             <b>{{pool?.blockchain?.quantity|truncateBalance:pool?.blockchain?.precision}}</b>\n                                         </div>\n                                     </div>\n\n                                     <hr>\n\n                                     <div class=\"row\" style=\"text-align: left\" [routerLink]=\"['../assets-pool-view',pool.id]\">\n\n                                         <div class=\"col-xs-6 text-left\">\n                                             Left quantity\n                                         </div>\n                                         <div class=\"col-xs-6 text-right\">\n                                             <b>{{(pool?.blockchain?.maximum-pool?.blockchain?.quantity)|truncateBalance:pool?.blockchain?.precision}}</b>\n                                         </div>\n                                     </div>\n                                     <hr>\n\n                                     <div class=\"row\" style=\"text-align: left\" >\n\n                                         <div class=\"col-xs-6 text-left\">\n                                             Status\n                                         </div>\n                                         <div class=\"col-xs-6 text-right\" *ngIf=\"pool?.blockchain\">\n                                             <b [style.color]=\"getColor(pool?.blockchain?.approved)\">{{pool?.blockchain?.approved===0?'Pending':'Approved'}}</b>\n                                         </div>\n                                     </div>\n\n                                     <div class=\"row\" style=\"text-align: center\">\n\n                                         <div class=\"col-xs-12\">\n                                             <button [disabled]=\"!pool.blockchain || !pool.blockchain.approved\" class=\"btn btn-danger\" (click)=\"openModal(template,pool)\">ISSUE</button>\n                                         </div>\n\n\n                                     </div>\n                                 </div>\n\n\n\n\n                             </div>\n                         </div>\n                     </div>\n\n\n                 </section>\n\n\n             </div>\n\n         </div>\n\n\n\n     </section>-->\n    <ng-template #template>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">ISSUE TOKEN</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form name=\"loginForm\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\" style=\"font-size: 14px;\">Maximum</label>\n                <input [disabled]=\"true\" type=\"text\" [(ngModel)]=\"selectedPool.maximum\" name=\"maximum\" class=\"form-control\" >\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\" style=\"font-size: 14px;\">Currency</label>\n                <input [disabled]=\"true\" type=\"text\" [(ngModel)]=\"selectedPool.blockchain.currency\" name=\"currency\" class=\"form-control\" >\n              </div>\n            </div>\n\n          </div>\n\n\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\" style=\"font-size: 14px;\">Issue Number</label>\n                <input type=\"text\"  [(ngModel)]=\"token.amount\"  name=\"amount\" class=\"form-control\" >\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\" style=\"font-size: 14px;\">Exchange rate</label>\n                <input type=\"text\"  [(ngModel)]=\"token.exchangeRate\"  name=\"exchangeRate\" class=\"form-control\" >\n              </div>\n            </div>\n\n          </div>\n\n\n          <button\n                  [disabled]=\"issueTokenHttpStatus==='pending'\"\n                  type=\"submit\"\n                  (click)=\"issueToken(selectedPool)\"\n                  class=\"btn btn-danger pull-right\">SUBMIT</button>\n          <div class=\"clearfix\"></div>\n        </form>\n\n      </div>\n    </ng-template>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user-list/user-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(userService, toastService) {
        this.userService = userService;
        this.toastService = toastService;
        this.users = [];
        this.roleFilters = [
            { name: 'Farmer', value: 'farmer', type: 'role' },
            { name: 'Sponsor', value: 'sponsor', type: 'role' },
            { name: 'Sponsor', value: 'ops', type: 'role' },
            { name: 'All', value: 'all', type: 'role' }
        ];
        this.dateFilters = [
            { name: 'Recent to last', value: 'createdAt', type: 'date', sortOrder: 'DESC' },
            { name: 'Last to recent', value: 'createdAt', type: 'date', sortOrder: 'ASC' }
        ];
        this.onboardingFilters = [
            { name: 'password changed', value: 'isPasswordChanged', type: 'onboarding', sortOrder: 'ASC' },
            { name: 'Account created', value: 'isRegisteredOnBlockchain', type: 'onboarding', sortOrder: 'ASC' },
            { name: 'Onboarding completed', value: 'isIssuerOnBlockchain', type: 'onboarding', sortOrder: 'DESC' },
            { name: 'ALL', value: 'all', type: 'onboarding', sortOrder: 'DESC' },
        ];
        this.usersHttpSstatus = 'resolved';
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    UserListComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.usersHttpSstatus = 'pending';
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
            _this.usersHttpSstatus = 'resolved';
        }, function (err) {
            _this.usersHttpSstatus = 'rejected';
            if (err.showError)
                _this.toastService.error('Users', err.message);
        });
    };
    UserListComponent.prototype.getUsersByRole = function (role) {
        var _this = this;
        this.usersHttpSstatus = 'pending';
        this.userService.getUsersByRole(role).subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
            _this.usersHttpSstatus = 'resolved';
        }, function (err) {
            _this.usersHttpSstatus = 'rejected';
            if (err.showError)
                _this.toastService.error('Users', err.message);
        });
    };
    UserListComponent.prototype.getUsersByOnboardingStatus = function (status) {
        var _this = this;
        this.usersHttpSstatus = 'pending';
        this.userService.getUsersByOnboardingStatus(status).subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
            _this.usersHttpSstatus = 'resolved';
        }, function (err) {
            _this.usersHttpSstatus = 'rejected';
            if (err.showError)
                _this.toastService.error('Users', err.message);
        });
    };
    UserListComponent.prototype.getByFilter = function (type, value, sortOrder) {
        console.log(type, value, sortOrder);
        if (type === 'role') {
            if (value === 'all')
                this.getAllUsers();
            else
                this.getUsersByRole(value);
        }
        else if (type === 'date') {
            // this.getUsersByOnboardingStatus(value);
        }
        else if (type === 'onboarding') {
            if (value === 'all')
                this.getAllUsers();
            else
                this.getUsersByOnboardingStatus(value);
        }
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("../../../../../src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-update/user-update.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-update works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/user-update/user-update.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-update/user-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserUpdateComponent = (function () {
    function UserUpdateComponent() {
    }
    UserUpdateComponent.prototype.ngOnInit = function () {
    };
    UserUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-update',
            template: __webpack_require__("../../../../../src/app/components/user-update/user-update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-update/user-update.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserUpdateComponent);
    return UserUpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/wallet/wallet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\n    padding-bottom: 7px;\n    margin: 0px 0 0 0;\n}\n\n.form-group label.control-label {\n    font-size: 14px;\n    line-height: 1.07143;\n    color: #AAAAAA;\n    font-weight: 400;\n    margin: 16px 0 0 0;\n}\n\n.card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #aebd38);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.boldfont{\n    font-weight: 400;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/wallet/wallet.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"main-content\">\n\n\n\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"green\">\n                        <h4 class=\"title\">Transaction History</h4>\n\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-content table-responsive\">\n                            <app-error-show *ngIf=\"!user.walletAddress\" [error]=\"'You are not registered on Blockchain!'\">\n                            </app-error-show>\n\n\n                            <app-spinner [type]=\"'bounce'\" *ngIf=\"txnRequestStatus==='pending'\"></app-spinner>\n\n                            <app-error-show *ngIf=\"txnRequestStatus==='rejected'\" [error]=\"'Transactions could not be fetched.Try again!'\">\n\n                            </app-error-show>\n                            <table class=\"table\" *ngIf=\"transactions.length\">\n                                <thead  >\n                                <tr>\n                                    <th class=\"boldfont\">Amount</th>\n                                    <th class=\"boldfont\">Fee</th>\n\n                                    <th class=\"boldfont\">Sender Address</th>\n\n                                    <th class=\"boldfont\">Recipient Address</th>\n                                    <th class=\"boldfont\">Type</th>\n                                    <th class=\"boldfont\">Date</th>\n\n                                    <th class=\"boldfont\">Remark</th>\n\n                                </tr>\n                                </thead>\n                                <tbody>\n\n\n                                <tr *ngFor=\"let txn of transactions\">\n\n                                    <td>{{txn?.amountShow}}</td>\n                                    <td>{{txn?.fee|xas}}</td>\n\n                                    <td data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{txn?.senderId}}\">\n\n                                        {{txn?.senderId}}\n                                        <span style=\"color: green;font-weight: 600\">{{txn?.senderId===user?.walletAddress ? '(Me)':''}}</span>\n\n                                    </td>\n                                    <td data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{txn?.recipientId}}\">\n\n                                        {{txn?.recipientId}}\n                                        <span style=\"color: green;font-weight: 600\">{{txn?.recipientId===user?.walletAddress ? '(Me)':''}}</span>\n\n\n                                    </td>\n                                    <td data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{txn?.blockId}}\">\n                                        {{txn?.type|txnType}}\n                                    </td>\n                                    <td >{{txn?.timestamp|moment}}</td>\n\n                                    <td >{{txn?.message}}</td>\n\n                                </tr>\n                                </tbody>\n                            </table>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/wallet/wallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WalletComponent = (function () {
    function WalletComponent(walletService, userService, router, toastService) {
        this.walletService = walletService;
        this.userService = userService;
        this.router = router;
        this.toastService = toastService;
        this.account = {};
        this.user = {};
        this.transactions = [];
        this.txnRequestStatus = 'resolved';
        this.accountRequestStatus = 'resolved';
    }
    WalletComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    WalletComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            _this.user = user;
            if (user && user.publicKey && user.walletAddress) {
                _this.getAccount();
                _this.getTransactions(user.publicKey, user.walletAddress);
            }
        }, function (err) {
        });
    };
    WalletComponent.prototype.getTransactions = function (senderPublicKey, recipientId) {
        var _this = this;
        if (!senderPublicKey || !recipientId) {
            return;
        }
        this.txnRequestStatus = 'pending';
        this.walletService.getTransactions(senderPublicKey, recipientId).subscribe(function (txn) {
            _this.txnRequestStatus = 'resolved';
            console.log(txn);
            _this.transactions = txn;
        }, function (err) {
            _this.txnRequestStatus = 'rejected';
            console.log(err);
        });
    };
    WalletComponent.prototype.getAccount = function () {
        var _this = this;
        this.accountRequestStatus = 'pending';
        this.walletService.getBlockchainAccount().subscribe(function (account) {
            _this.accountRequestStatus = 'resolved';
            _this.account = account;
            console.log(account);
        }, function (err) {
            _this.accountRequestStatus = 'rejected';
            console.log(err);
        });
    };
    WalletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wallet',
            template: __webpack_require__("../../../../../src/app/components/wallet/wallet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/wallet/wallet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/already-authenticated.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlreadyAuthenticatedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlreadyAuthenticatedGuard = (function () {
    function AlreadyAuthenticatedGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AlreadyAuthenticatedGuard.prototype.canActivate = function (next, state) {
        if (this.userService.isAuthenticated()) {
            console.log('navigating to dashboard');
            this.router.navigate(['/dashboard']);
            return false;
        }
        return true;
    };
    AlreadyAuthenticatedGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AlreadyAuthenticatedGuard);
    return AlreadyAuthenticatedGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/authentication.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationGuard = (function () {
    function AuthenticationGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (!this.userService.isAuthenticated()) {
            console.log('navigating to login');
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthenticationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/dashboardAuthorization.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardAuthorizationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardAuthorizationGuard = (function () {
    function DashboardAuthorizationGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    DashboardAuthorizationGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var expectedRole = route.data.expectedRole;
        console.log('inside dashboard authorization guard');
        console.log('expected role for this dashboard is ', expectedRole);
        return this.userService.getUser()
            .map(function (user) {
            console.log(user);
            console.log('found role is ' + user.role);
            if (user && expectedRole.includes(user.role)) {
                _this.userService.setUserFromGuard(user);
                if (user && !user.isPasswordChanged) {
                    _this.router.navigate(['/onboarding/password-reset']);
                    return false;
                }
                if (user && !user.isRegisteredOnBlockchain) {
                    _this.router.navigate(['/onboarding/account-activation']);
                    return false;
                }
                if (user && user.role === 'sponsor' && !user.isIssuerOnBlockchain) {
                    _this.router.navigate(['/onboarding/issuer-registration']);
                    return false;
                }
                return true;
            }
            else {
                _this.router.navigate(['/unauthorised']);
                return false;
            }
        })
            .catch(function (res) {
            console.log(res);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(false);
        });
    };
    DashboardAuthorizationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DashboardAuthorizationGuard);
    return DashboardAuthorizationGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/onboarding-guard/already-an-issuer.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlreadyAnIssuerGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlreadyAnIssuerGuard = (function () {
    function AlreadyAnIssuerGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AlreadyAnIssuerGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var expectedRole = route.data.expectedRole;
        return this.userService.getUser()
            .map(function (user) {
            console.log(user);
            console.log('found role is ' + user.role);
            if (user && expectedRole.includes(user.role)) {
                _this.userService.setUserFromGuard(user);
                if (user && !user.isPasswordChanged) {
                    _this.router.navigate(['/onboarding/password-change']);
                    return false;
                }
                if (user && !user.isRegisteredOnBlockchain) {
                    _this.router.navigate(['/onboarding/account-activation']);
                    return false;
                }
                if (user && user.isIssuerOnBlockchain) {
                    _this.router.navigate(['/dashboard']);
                    return false;
                }
                return true;
            }
            else {
                _this.router.navigate(['/unauthorised']);
                return false;
            }
        })
            .catch(function (res) {
            console.log(res);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(false);
        });
    };
    AlreadyAnIssuerGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AlreadyAnIssuerGuard);
    return AlreadyAnIssuerGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/onboarding-guard/already-registered-on-blockchain.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlreadyRegisteredOnBlockchainGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlreadyRegisteredOnBlockchainGuard = (function () {
    function AlreadyRegisteredOnBlockchainGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AlreadyRegisteredOnBlockchainGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var expectedRole = route.data.expectedRole;
        return this.userService.getUser()
            .map(function (user) {
            console.log(user);
            console.log('found role is ' + user.role);
            if (user && expectedRole.includes(user.role)) {
                _this.userService.setUserFromGuard(user);
                if (user && !user.isPasswordChanged) {
                    _this.router.navigate(['/onboarding/password-change']);
                    return false;
                }
                if (user && user.isRegisteredOnBlockchain) {
                    _this.router.navigate(['/onboarding/issuer-registration']);
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                _this.router.navigate(['/unauthorised']);
                return false;
            }
        })
            .catch(function (res) {
            console.log(res);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(false);
        });
    };
    AlreadyRegisteredOnBlockchainGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AlreadyRegisteredOnBlockchainGuard);
    return AlreadyRegisteredOnBlockchainGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/onboarding-guard/already-reset-password.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlreadyResetPasswordGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlreadyResetPasswordGuard = (function () {
    function AlreadyResetPasswordGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AlreadyResetPasswordGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var expectedRole = route.data.expectedRole;
        return this.userService.getUser()
            .map(function (user) {
            console.log(user);
            console.log('found role is ' + user.role);
            if (user && expectedRole.includes(user.role)) {
                _this.userService.setUserFromGuard(user);
                if (user && user.isPasswordChanged) {
                    _this.router.navigate(['/onboarding/account-activation']);
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                _this.router.navigate(['/unauthorised']);
                return false;
            }
        })
            .catch(function (res) {
            console.log(res);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(false);
        });
    };
    AlreadyResetPasswordGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AlreadyResetPasswordGuard);
    return AlreadyResetPasswordGuard;
}());



/***/ }),

/***/ "../../../../../src/app/image-popup/image-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagePopupComponent = (function () {
    function ImagePopupComponent(element) {
        this.element = element;
        this.opened = false;
        this.loading = false;
        this.showRepeat = false;
        this.cancelEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this._element = this.element.nativeElement;
    }
    ImagePopupComponent.prototype.ngOnInit = function () {
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showRepeat = false;
            this.openGallery(this.imagePointer);
        }
        else {
            this.showRepeat = true;
        }
    };
    ImagePopupComponent.prototype.closeGallery = function () {
        this.opened = false;
        this.cancelEvent.emit(null);
    };
    ImagePopupComponent.prototype.prevImage = function () {
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    };
    ImagePopupComponent.prototype.nextImage = function () {
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    };
    ImagePopupComponent.prototype.openGallery = function (index) {
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.opened = true;
        for (var i = 0; i < this.modalImages.length; i++) {
            if (i === this.currentImageIndex) {
                this.imgSrc = this.modalImages[i].img;
                this.loading = false;
                break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('modalImages'),
        __metadata("design:type", Object)
    ], ImagePopupComponent.prototype, "modalImages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('imagePointer'),
        __metadata("design:type", Number)
    ], ImagePopupComponent.prototype, "imagePointer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('cancelEvent'),
        __metadata("design:type", Object)
    ], ImagePopupComponent.prototype, "cancelEvent", void 0);
    ImagePopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-image-popup',
            template: "\n   <div class=\"ng-gallery\" *ngIf=\"showRepeat\"> \n     <div *ngFor =\"let i of modalImages; let index = index\">\n       <img src=\"{{ i.thumb }}\" class=\"ng-thumb\" (click)=\"openGallery(index)\" alt=\"Image {{ index + 1 }}\" />\n      </div>\n   </div>\n   <div class=\"ng-overlay\" *ngIf=\"opened\">\n    <div class=\"ng-gallery-content\" >\n    <div class=\"uil-ring-css\" *ngIf=\"loading\"><div></div></div>         \n    <a class=\"close-popup\" (click)=\"closeGallery()\"><i class=\"fa fa-close\"></i></a>\n     <a class=\"nav-left\" *ngIf=\"modalImages.length >1\" (click)=\"prevImage()\"><i class=\"fa fa-angle-left\"></i></a>\n     <img *ngIf=\"!loading\" src=\"{{imgSrc}}\" (click)=\"nextImage()\" class=\"effect\" />\n     <a class=\"nav-right\" *ngIf=\"modalImages.length >1\" (click)=\"nextImage()\"><i class=\"fa fa-angle-right\"></i></a>\n     <span class=\"info-text\">{{ currentImageIndex + 1 }}/{{ modalImages.length }} - Image {{currentImageIndex+1}}</span>\n   </div>\n   </div>\n       "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ImagePopupComponent);
    return ImagePopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/moment.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, args) {
        if (value) {
            if (args && args === true)
                return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow(true);
            else
                return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
        }
        else {
            return '';
        }
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'moment'
        })
    ], MomentPipe);
    return MomentPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/onboarding-status.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingStatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OnboardingStatusPipe = (function () {
    function OnboardingStatusPipe() {
    }
    OnboardingStatusPipe.prototype.transform = function (user, args) {
        if (!user || !user.role) {
            return '';
        }
        switch (user.role) {
            case 'ops': {
                if (user.isIssuerOnBlockchain) {
                    return 'Completed';
                }
                else if (user.isRegisteredOnBlockchain) {
                    return 'Account created';
                }
                else if (user.isPasswordChanged) {
                    return 'Password changed';
                }
                else {
                    return 'Pending';
                }
            }
            case 'sponsor': {
                if (user.isIssuerOnBlockchain) {
                    return 'Completed';
                }
                else if (user.isRegisteredOnBlockchain) {
                    return 'Account created';
                }
                else if (user.isPasswordChanged) {
                    return 'Password changed';
                }
                else {
                    return 'Pending';
                }
            }
            case 'farmer': {
                if (user.isPasswordChanged) {
                    return 'Completed';
                }
                else {
                    return 'Pending';
                }
            }
            default: {
                return '';
            }
        }
    };
    OnboardingStatusPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'onboardingStatus'
        })
    ], OnboardingStatusPipe);
    return OnboardingStatusPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/truncate-balance.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateBalancePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncateBalancePipe = (function () {
    function TruncateBalancePipe() {
    }
    TruncateBalancePipe.prototype.transform = function (val) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var amount;
        if (val) {
            try {
                amount = parseInt(val, 10);
                amount = amount / Math.pow(10, args[0]);
                return amount;
            }
            catch (err) {
                return null;
            }
        }
        else
            return null;
    };
    TruncateBalancePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'truncateBalance',
        })
    ], TruncateBalancePipe);
    return TruncateBalancePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/txn-type.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TxnTypePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TxnTypePipe = (function () {
    function TxnTypePipe() {
        this.transactionType = {
            0: 'SEND',
            1: 'SIGNATURE',
            2: 'DELEGATE',
            3: 'VOTE',
            4: 'MULTI',
            5: 'DAPP',
            6: 'IN_TRANSFER',
            7: 'OUT_TRANSFER',
            8: 'APPROVAL',
            9: 'UIA_ISSUER',
            10: 'UIA_ASSET',
            11: 'UIA_ISSUE',
            12: 'UIA_EXERCISE'
        };
    }
    TxnTypePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.transactionType[value] || 'Unknown';
    };
    TxnTypePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'txnType',
        })
    ], TxnTypePipe);
    return TxnTypePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/xas.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XasPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var XasPipe = (function () {
    function XasPipe() {
    }
    XasPipe.prototype.transform = function (fee) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!fee) {
            return 0;
        }
        fee = fee.toString();
        while (fee.length < 7) {
            fee = '0'.concat(fee);
        }
        fee = fee.slice(0, -6).concat('.', fee.slice(-6));
        var clearView = false;
        while (!clearView) {
            if (fee[fee.length - 1] == '0') {
                fee = fee.slice(0, fee.length - 1);
            }
            else {
                clearView = true;
            }
        }
        if (fee[fee.length - 1] == '.') {
            fee = fee.slice(0, fee.length - 1);
        }
        return fee;
    };
    XasPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'xas',
        })
    ], XasPipe);
    return XasPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/assets-pool.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetsPoolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_config__ = __webpack_require__("../../../../../src/app/api.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__error_handler_service__ = __webpack_require__("../../../../../src/app/services/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AssetsPoolService = (function () {
    function AssetsPoolService(http, userService, errorHandler) {
        this.http = http;
        this.userService = userService;
        this.errorHandler = errorHandler;
        this.selectedAssetsForPool = [];
    }
    AssetsPoolService.prototype.addAssetInPool = function (assets) {
        this.selectedAssetsForPool = assets;
    };
    AssetsPoolService.prototype.getSelectedAssetsForPool = function () {
        return this.selectedAssetsForPool;
    };
    AssetsPoolService.prototype.createAssetPool = function (assetPool) {
        var _this = this;
        console.log(assetPool);
        var url = "" + __WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* AssetPoolApi */].createAssetpool.url();
        return this.http.post("" + url, assetPool)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    AssetsPoolService.prototype.removeAllAssetFromPool = function () {
        this.selectedAssetsForPool = [];
    };
    AssetsPoolService.prototype.getPoolById = function (poolId) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* AssetPoolApi */].getAssetpool.url() + "/" + poolId;
        return this.http.get("" + url)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    AssetsPoolService.prototype.getPools = function () {
        var _this = this;
        var url = "" + __WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* AssetPoolApi */].getAssetpool.url();
        return this.http.get("" + url)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    AssetsPoolService.prototype.getPoolsByIssuerName = function () {
        var _this = this;
        return this.userService.getUser().concatMap(function (user) {
            var url = __WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* AssetPoolApi */].getAssetpool.url() + "?filter[where][issuerName]=" + user.issuerName;
            return _this.http.get("" + url);
        }).catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    AssetsPoolService.prototype.issueToken = function (assetPoolId, amount, exchangeRate, precision, currency) {
        var _this = this;
        var url = "" + __WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* AssetPoolApi */].issueToken.url();
        return this.http.post("" + url, { assetPoolId: assetPoolId, amount: amount, precision: precision, exchangeRate: exchangeRate, currency: currency })
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    AssetsPoolService.prototype.getAssetPoolInfoFromBlockchain = function (assetName) {
        var url = __WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* AssetPoolApi */].getAssetpoolInfoFromBlockchain.url() + "?assetName=" + assetName;
        return this.http.get("" + url)
            .catch(function (res) {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of({});
            //return this.errorHandler.handle(res);
        });
    };
    AssetsPoolService.prototype.getTokensByAssetPoolId = function (assetPoolId) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* AssetPoolApi */].getAssetpool.url() + "/" + assetPoolId + "/tokens?filter[include]=assetpool";
        return this.http.get("" + url)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    AssetsPoolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_11__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__error_handler_service__["a" /* ErrorHandlerService */]])
    ], AssetsPoolService);
    return AssetsPoolService;
}());



/***/ }),

/***/ "../../../../../src/app/services/assets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_config__ = __webpack_require__("../../../../../src/app/api.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error_handler_service__ = __webpack_require__("../../../../../src/app/services/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AssetsService = (function () {
    function AssetsService(http, errorHandler, userService) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.userService = userService;
        this.categories = [];
        this.assets = [];
    }
    AssetsService.prototype.getAssets = function (categoryId) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* AssetApi */].getAssets.url() + "?filter[where][categoryId]=" + categoryId + "&filter[where][isPutOnBlockchain]=" + false + "&filter[include]=user";
        return this.http.get("" + url)
            .retry(3)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    AssetsService.prototype.getAssetByid = function (assetId) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* AssetApi */].getAssets.url() + "/" + assetId + "?filter[include]=user";
        return this.http.get("" + url)
            .retry(3)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    AssetsService.prototype.updateAsset = function (asset) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* AssetApi */].getAssets.url() + "/" + asset.id;
        return this.http.put("" + url, asset)
            .retry(3)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    AssetsService.prototype.getCategories = function (level) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* AssetApi */].getCategories.url() + "?level=" + level;
        return this.http.get("" + url).do(function (categories) {
            _this.categories = categories;
        })
            .retry(3)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    AssetsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_9__error_handler_service__["a" /* ErrorHandlerService */], __WEBPACK_IMPORTED_MODULE_10__user_service__["a" /* UserService */]])
    ], AssetsService);
    return AssetsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorHandlerService = (function () {
    function ErrorHandlerService() {
    }
    ErrorHandlerService.prototype.handle = function (res) {
        console.log(res);
        var msg = '';
        if (res.error) {
            try {
                var data = JSON.parse(res.error);
                console.log(data);
                if (data && data.error && data.error.message) {
                    msg = data.error.message;
                }
                else {
                    if (data && data.message) {
                        msg = data.message;
                    }
                }
            }
            catch (err) {
            }
        }
        else {
            msg = res.statusText || 'Server error.Try again';
        }
        msg = msg ? msg : 'Something went wrong';
        console.log(msg);
        var showError = true;
        if (res.status === 401 || res.status === 403) {
            // because for these two cases we are showing the error in http service;
            showError = false;
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw({ message: msg, status: res.status, showError: showError });
    };
    ErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/farmer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_handler_service__ = __webpack_require__("../../../../../src/app/services/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FarmerService = (function () {
    function FarmerService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.user = {};
        this.farmers = [];
    }
    FarmerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__error_handler_service__["a" /* ErrorHandlerService */]])
    ], FarmerService);
    return FarmerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InterceptorService = (function () {
    function InterceptorService(router, toastService) {
        this.router = router;
        this.toastService = toastService;
    }
    InterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        request = request.clone({
            setHeaders: {
                'X-Access-Token': "" + localStorage.getItem('accessToken')
            }
        });
        return next.handle(request).do(function (event) {
            console.log('interceptor');
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('userId');
                    _this.router.navigate(['/login']);
                }
                if (err.status === 403) {
                    _this.toastService.error('Unauthorised', 'You are not authorised to perform this action');
                }
            }
        });
    };
    InterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__toast_service__["a" /* ToastService */]])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "../../../../../src/app/services/toast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(toastyService, toastyConfig) {
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        // Assign the selected theme name to the `theme` property of the instance of ToastyConfig.
        // Possible values: default, bootstrap, material
        this.toastyConfig.theme = 'material';
    }
    ToastService.prototype.success = function (title, msg) {
        var toastOptions = {
            title: title ? title : 'Success',
            msg: msg,
            showClose: true,
            timeout: 5000,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.success(toastOptions);
    };
    ToastService.prototype.info = function (title, msg) {
        var toastOptions = {
            title: title ? title : 'Info',
            msg: msg,
            showClose: true,
            timeout: 5000,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.info(toastOptions);
    };
    ToastService.prototype.error = function (title, msg) {
        var toastOptions = {
            title: title ? title : 'Error',
            msg: msg,
            showClose: true,
            timeout: 5000,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        this.toastyService.error(toastOptions);
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["c" /* ToastyService */], __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["a" /* ToastyConfig */]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "../../../../../src/app/services/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_config__ = __webpack_require__("../../../../../src/app/api.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error_handler_service__ = __webpack_require__("../../../../../src/app/services/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TokenService = (function () {
    function TokenService(http, errorHandler, userService) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.userService = userService;
    }
    TokenService.prototype.getTokens = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__api_config__["d" /* TokenApi */].getTokens.url() + "?filter[include]=assetpool";
        return this.http.get("" + url)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    TokenService.prototype.getAllTokensByAddressFromBlockchain = function () {
        var _this = this;
        var url = "" + __WEBPACK_IMPORTED_MODULE_1__api_config__["d" /* TokenApi */].getTokensByAddressFromBlockchain.url();
        return this.userService.getUser()
            .concatMap(function (user) {
            return _this.http.get(url + "?address=" + user.walletAddress);
        })
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    TokenService.prototype.getAllTokensFromBlockchain = function () {
        var _this = this;
        var url = "" + __WEBPACK_IMPORTED_MODULE_1__api_config__["d" /* TokenApi */].getAllTokensFromBlockchain.url();
        return this.http.get("" + url)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    TokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_9__error_handler_service__["a" /* ErrorHandlerService */], __WEBPACK_IMPORTED_MODULE_10__user_service__["a" /* UserService */]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "../../../../../src/app/services/translation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslationService = (function () {
    function TranslationService(translate) {
        this.translate = translate;
        this.translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');
    }
    TranslationService.prototype.changeLanguage = function (language) {
        this.translate.use(language);
    };
    TranslationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], TranslationService);
    return TranslationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_config__ = __webpack_require__("../../../../../src/app/api.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__error_handler_service__ = __webpack_require__("../../../../../src/app/services/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var UserService = (function () {
    function UserService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.user = {};
        console.log('access token is', localStorage.getItem('accessToken'), 'userId is ', localStorage.getItem('userId'));
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].login.url() + "?include=User", user)
            .do(function (res) {
            _this.saveAccessToken(res.id);
            _this.saveUserId(res.user.id);
            _this.user = res.user;
            console.log('inside do');
            console.log(res);
        }).catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    UserService.prototype.register = function (user) {
        var _this = this;
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].register.url(), user)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    UserService.prototype.saveAccessToken = function (accessToken) {
        localStorage.setItem('accessToken', accessToken);
    };
    UserService.prototype.getAccessToken = function () {
        return localStorage.getItem('accessToken');
    };
    UserService.prototype.saveUserId = function (userId) {
        localStorage.setItem('userId', userId);
    };
    UserService.prototype.getUserId = function () {
        return localStorage.getItem('userId');
    };
    UserService.prototype.isAuthenticated = function () {
        if (this.getUserId() && this.getAccessToken()) {
            return true;
        }
        return false;
    };
    UserService.prototype.getUser = function () {
        // first time ,this method will be called from authorization guard
        console.log(this.user);
        if (this.user && this.user.id) {
            console.log('from cache');
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(this.user);
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].findById.url() + "/" + this.getUserId());
    };
    ;
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].list.url())
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    ;
    UserService.prototype.setUserFromGuard = function (user) {
        this.user = user;
    };
    UserService.prototype.resetPassword = function (oldPassword, newPassword) {
        var _this = this;
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].changePassword.url(), { oldPassword: oldPassword, newPassword: newPassword }).do(function (data) {
            _this.user.isPasswordChanged = true;
        }).catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    ;
    UserService.prototype.changePassword = function (oldPassword, newPassword) {
        var _this = this;
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].changePassword.url(), { oldPassword: oldPassword, newPassword: newPassword }).do(function (data) {
        }).catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    ;
    UserService.prototype.logout = function () {
        var _this = this;
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].logout.url(), {}).do(function (data) {
            _this.resetState();
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userId');
        });
    };
    UserService.prototype.resetState = function () {
        this.user = {};
    };
    UserService.prototype.createAccountOnBlockchain = function () {
        var _this = this;
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__api_config__["c" /* OnboardingApi */].createAccount.url(), { userId: this.user.id })
            .do(function (data) {
            _this.user.isRegisteredOnBlockchain = true;
            _this.user.walletAddress = data.walletAddress;
            _this.user.publicKey = data.publicKey;
        })
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    UserService.prototype.getUsersByRole = function (role) {
        var _this = this;
        if (!role) {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw('Role is not found');
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].list.url() + "?filter[where][role]=" + role)
            .do(function (farmers) {
            console.log(farmers);
        })
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    UserService.prototype.getUsersByOnboardingStatus = function (status) {
        var _this = this;
        if (!status) {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw('status is not found');
        }
        var url;
        if (status === 'isPasswordChanged') {
            url = __WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].list.url() + "?filter[where][isPasswordChanged]=true&filter[where][isRegisteredOnBlockchain]=false";
        }
        if (status === 'isRegisteredOnBlockchain') {
            url = __WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].list.url() + "?filter[where][isRegisteredOnBlockchain]=true&filter[where][isIssuerOnBlockchain]=false";
        }
        if (status === 'isIssuerOnBlockchain') {
            url = __WEBPACK_IMPORTED_MODULE_1__api_config__["e" /* UserApi */].list.url() + "?filter[where][isIssuerOnBlockchain]=true";
        }
        return this.http.get("" + url)
            .do(function (farmers) {
            console.log(farmers);
        })
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    UserService.prototype.getBlockchainAccountDuringOnboarding = function () {
        var _this = this;
        console.log('user is');
        console.log(this.user);
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].interval(1000)
            .concatMap(function (val) {
            console.log(val);
            return _this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_config__["c" /* OnboardingApi */].getAccount.url() + "?address=" + _this.user.walletAddress);
        })
            .retry(3)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    UserService.prototype.resgisterAsIssuer = function (issuer) {
        var _this = this;
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__api_config__["c" /* OnboardingApi */].resgisterIssuer.url(), issuer).do(function (data) {
            console.log(data);
            _this.user.isIssuerOnBlockchain = true;
            _this.user.issuerName = name;
        }).catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__error_handler_service__["a" /* ErrorHandlerService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/wallet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_config__ = __webpack_require__("../../../../../src/app/api.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error_handler_service__ = __webpack_require__("../../../../../src/app/services/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var WalletService = (function () {
    function WalletService(http, errorHandler, userService) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.userService = userService;
    }
    WalletService.prototype.getBlockchainAccount = function () {
        var _this = this;
        return this.userService.getUser()
            .concatMap(function (user) {
            return _this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_config__["f" /* WalletApi */].getAccount.url() + "?address=" + user.walletAddress);
        })
            .retry(3)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    WalletService.prototype.getTransactions = function (senderPublicKey, recipientId) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__api_config__["f" /* WalletApi */].getTransaction.url() + "?senderPublicKey=" + senderPublicKey + "&recipientId=" + recipientId)
            .retry(3)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    WalletService.prototype.sendTransactions = function (txn) {
        var _this = this;
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__api_config__["f" /* WalletApi */].sendTransaction.url(), txn)
            .catch(function (res) {
            return _this.errorHandler.handle(res);
        });
    };
    WalletService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_9__error_handler_service__["a" /* ErrorHandlerService */], __WEBPACK_IMPORTED_MODULE_10__user_service__["a" /* UserService */]])
    ], WalletService);
    return WalletService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/shared/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/shared/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/error-show/error-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/error-show/error-show.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<alert type=\"danger\">\n  <p class=\"text-center\">\n    <strong>{{error}}</strong>\n\n  </p>\n</alert>"

/***/ }),

/***/ "../../../../../src/app/shared/error-show/error-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorShowComponent = (function () {
    function ErrorShowComponent() {
        this.error = null;
    }
    ErrorShowComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ErrorShowComponent.prototype, "error", void 0);
    ErrorShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-show',
            template: __webpack_require__("../../../../../src/app/shared/error-show/error-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/error-show/error-show.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorShowComponent);
    return ErrorShowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n    border-top: 1px solid #e7e7e7;\n   /* clear: both;\n    background-color: white;\n    padding: 0;\n    text-align: center;\n    vertical-align: middle;\n    line-height: normal;\n    margin: 0;\n    position: fixed;\n    bottom: 0px;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a [routerLink]=\"['./about-us']\" href=\"javascript:void(0)\">\n                        About us\n                    </a>\n                </li>\n                <li>\n                    <a  href=\"javascript:void(0)\">\n                        Privacy\n                    </a>\n                </li>\n\n                <li>\n                    <a  href=\"javascript:void(0)\">\n                        Terms\n                    </a>\n                </li>\n                <li>\n                    <a  href=\"javascript:void(0)\">\n                        Contact\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"\">Agriledger Team</a>\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar.navbar-primary {\n    background-color: #6ab187;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar  navbar-primary\">\n        <div class=\"container\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n\n                <a class=\"navbar-brand\" [routerLink]=\"['/landing']\" href=\"javascript:void (0)\"><b style=\"letter-spacing: 5px\">AgriLedger</b></a>\n            </div>\n\n            <div class=\"collapse navbar-collapse\" id=\"navigation-example\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li *ngIf=\"isAuthenticated\">\n\n                        <a href=\"javascript:void(0)\">\n                            <b >Balance ({{balance}} ACC)</b>\n                        </a>\n                    </li>\n\n\n                    <li class=\"dropdown\" >\n                        <a  href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"material-icons\">translate</i>\n                            <span>Langauge</span>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a (click)=\"appLanguageChange('en')\" href=\"javascript:void (0)\">English (default)</a></li>\n                            <li><a (click)=\"appLanguageChange('ch')\" href=\"javascript:void (0)\">中文</a></li>\n\n                        </ul>\n                    </li>\n\n\n                    <li class=\"dropdown\" *ngIf=\"isAuthenticated\">\n                        <a  href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"material-icons\">person</i>\n                            <p class=\"hidden-lg hidden-md\">Profile</p>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a (click)=\"logout()\" href=\"javascript:void (0)\">Logout</a></li>\n                        </ul>\n                    </li>\n\n                    <!--<li>\n                      <a [routerLink]=\"['/login-ops']\" class=\"btn btn-danger\" href=\"../components-documentation.html\">\n                        Ops Login\n                      </a>\n                    </li>\n                    <li>\n                      <a  [routerLink]=\"['/login-sponsor']\" class=\"btn btn-danger\" href=\"../components-documentation.html\">\n                        Sponser Login\n                      </a>\n                    </li>-->\n                    <!--  <li>\n                        <a href=\"https://twitter.com/CreativeTim\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\n                          <i class=\"fa fa-twitter\"></i>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\" class=\"btn btn-simple btn-white btn-just-icon\">\n                          <i class=\"fa fa-facebook-square\"></i>\n                        </a>\n                      </li>-->\n\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_translation_service__ = __webpack_require__("../../../../../src/app/services/translation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(userService, router, translationService, toastService) {
        this.userService = userService;
        this.router = router;
        this.translationService = translationService;
        this.toastService = toastService;
        this.balance = 0;
        this.isAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isAuthenticated = this.userService.isAuthenticated();
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            _this.toastService.error('Logout', 'Could not be logged out.Try again');
        });
    };
    HeaderComponent.prototype.appLanguageChange = function (language) {
        this.translationService.changeLanguage(language);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "balance", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_translation_service__["a" /* TranslationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar.navbar-transparent {\n    background-color: white;\n    box-shadow: none;\n    border-bottom: 0;\n}\n\n.navbar.navbar-primary {\n    background-color: #6ab187;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-absolute\" style=\"background: linear-gradient(90deg, #ffffff, #b7b8b6) !important;\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header \">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\" style=\"text-transform: capitalize\"><b style=\"letter-spacing: 3px\">{{getTitle()}}</b></a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n\n                    <a href=\"javascript:void(0)\">\n                        <b >Balance ({{account?.balance|xas}} ACC)</b>\n                    </a>\n                </li>\n                <!--<li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>-->\n         <!--       <li class=\"dropdown\">\n                    <a  href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">3</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a  href=\"javascript:void(0)\">You have 5 new tasks</a></li>\n                        <li><a  href=\"javascript:void(0)\">Another Notification</a></li>\n                        <li><a  href=\"javascript:void(0)\">Another One</a></li>\n                    </ul>\n                </li>-->\n\n                <li class=\"dropdown\">\n                    <a  href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">person</i>\n                        <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <!--<li><a  href=\"javascript:void(0)\">Wallet</a></li>\n                        <li><a  href=\"javascript:void(0)\">Setting</a></li>-->\n                        <li><a  [routerLink]=\"['/dashboard/password-change']\" href=\"javascript:void (0)\">Change Paasword</a></li>\n\n                        <li><a (click)=\"logout()\" href=\"javascript:void (0)\">Logout</a></li>\n                    </ul>\n                </li>\n\n            </ul>\n\n           <!-- <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>-->\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = (function () {
    function NavbarComponent(location, element, walletService, userService, router, toastService) {
        this.element = element;
        this.walletService = walletService;
        this.userService = userService;
        this.router = router;
        this.toastService = toastService;
        this.user = {};
        this.account = {};
        this.listTitles = [{ path: 'account', title: 'Account' }];
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAccount();
        this.userService.getUser().subscribe(function (user) {
            _this.user = user;
            if (user.role === 'sponsor') {
                _this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["b" /* MenuItemsForSponsor */].filter(function (listTitle) { return listTitle; });
            }
            if (user.role === 'ops') {
                _this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* MenuItemsForOps */].filter(function (listTitle) { return listTitle; });
            }
        }, function (err) {
            console.log(err);
        });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return titlee;
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            _this.toastService.error('Logout', 'Could not be logged out.Try again');
        });
    };
    NavbarComponent.prototype.getAccount = function () {
        var _this = this;
        this.walletService.getBlockchainAccount().subscribe(function (account) {
            _this.account = account;
            console.log(account);
        }, function (err) {
            console.log(err);
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_6__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/page403/page403.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/page403/page403.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-6 col-md-offset-3\" style=\"text-align: center;\">\n        <div class=\"card\" style=\"height: 30vh;margin-top: 100px;\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"title\">Access denied</h4>\n          </div>\n\n          <h3>You don't have permission to view this page</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/page403/page403.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page403Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page403Component = (function () {
    function Page403Component() {
    }
    Page403Component.prototype.ngOnInit = function () {
    };
    Page403Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page403',
            template: __webpack_require__("../../../../../src/app/shared/page403/page403.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/page403/page403.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page403Component);
    return Page403Component;
}());



/***/ }),

/***/ "../../../../../src/app/shared/privacy/privacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  privacy works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-privacy',
            template: __webpack_require__("../../../../../src/app/shared/privacy/privacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/shared/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/shared/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__terms_terms_component__ = __webpack_require__("../../../../../src/app/shared/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("../../../../../src/app/shared/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_xas_pipe__ = __webpack_require__("../../../../../src/app/pipes/xas.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_txn_type_pipe__ = __webpack_require__("../../../../../src/app/pipes/txn-type.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_truncate_balance_pipe__ = __webpack_require__("../../../../../src/app/pipes/truncate-balance.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_moment_pipe__ = __webpack_require__("../../../../../src/app/pipes/moment.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_onboarding_status_pipe__ = __webpack_require__("../../../../../src/app/pipes/onboarding-status.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["c" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_xas_pipe__["a" /* XasPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_txn_type_pipe__["a" /* TxnTypePipe */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_moment_pipe__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_onboarding_status_pipe__["a" /* OnboardingStatusPipe */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_truncate_balance_pipe__["a" /* TruncateBalancePipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["c" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_xas_pipe__["a" /* XasPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_txn_type_pipe__["a" /* TxnTypePipe */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_moment_pipe__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_onboarding_status_pipe__["a" /* OnboardingStatusPipe */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_truncate_balance_pipe__["a" /* TruncateBalancePipe */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar[data-color=\"green\"] .nav li.active a, .off-canvas-sidebar[data-color=\"green\"] .nav li.active a {\n     background-color: #6ab187;\n     box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n }\n\n.sidebar .sidebar-wrapper,\n.off-canvas-sidebar .sidebar-wrapper {\n    position: relative;\n    height: calc(100vh - 75px);\n    overflow: auto;\n    width: 260px;\n    z-index: 4;\n    background-color: beige;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\" style=\"background-color: ghostwhite\">\n    <a href=\"javascript:void(0)\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/logo.png\"/>\n        </div>\n        Agriledger\n    </a>\n</div>\n<div class=\"sidebar-wrapper\" style=\"background-color: beige\">\n\n\n\n    <div class=\"nav-container\">\n        <ul class=\"nav\" *ngIf=\"user.role==='sponsor'\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItemsForSponsor\" class=\"{{menuItem.class}}\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n\n\n            <li  class=\"hidden-lg hidden-md\"><a (click)=\"logout()\" href=\"javascript:void (0)\">\n                <i class=\"material-icons\">clear_all</i>\n                <p class=\"hidden-lg hidden-md\">Logout</p>\n            </a>\n            </li>\n\n        </ul>\n\n        <ul class=\"nav\" *ngIf=\"user.role==='ops'\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItemsForOps\" class=\"{{menuItem.class}}\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n\n\n            <li  class=\"hidden-lg hidden-md\"><a (click)=\"logout()\" href=\"javascript:void (0)\">\n                <i class=\"material-icons\">clear_all</i>\n                <p class=\"hidden-lg hidden-md\">Logout</p>\n            </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuItemsForSponsor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemsForOps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuItemsForSponsor = [
    { path: 'account', title: 'Account', icon: 'account_circle', class: '' },
    { path: 'assets', title: 'Assets', icon: 'account_balance_wallet', class: '' },
    { path: 'assets-pool-list', title: 'Asset Pool', icon: 'donut_large', class: '' },
    { path: 'tokens', title: 'Issued Tokens', icon: 'grade', class: '' },
    { path: 'transfer', title: 'Transfer Tokens', icon: 'send', class: '' },
    { path: 'wallet', title: 'Transactions', icon: 'description', class: '' },
    { path: '/dashboard/password-change', title: 'Change Password', icon: 'lock', class: 'hidden-lg hidden-md' }
];
var MenuItemsForOps = [
    { path: 'account', title: 'Account', icon: 'account_circle', class: '' },
    { path: 'assets-pool-list', title: 'Asset Pool', icon: 'store', class: '' },
    { path: 'tokens', title: 'Issued Tokens', icon: 'stars', class: '' },
    { path: 'transfer', title: 'Transfer Tokens', icon: 'send', class: '' },
    { path: 'wallet', title: 'Transactions', icon: 'history', class: '' },
    { path: 'user-create', title: 'Create Users', icon: 'person_add', class: '' },
    { path: 'user-list', title: 'List Users', icon: 'people', class: '' },
    { path: '/dashboard/password-change', title: 'Change Password', icon: 'lock', class: 'hidden-lg hidden-md' }
];
var SidebarComponent = (function () {
    function SidebarComponent(userService, toastService, router) {
        this.userService = userService;
        this.toastService = toastService;
        this.router = router;
        this.menuItemsForSponsor = MenuItemsForSponsor;
        this.menuItemsForOps = MenuItemsForOps;
        this.user = {};
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            console.log('from sidebar');
            console.log(user);
            _this.user = user;
        }, function (err) {
            _this.router.navigate(['/login']);
        });
    };
    SidebarComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            _this.toastService.error('Logout', 'Could not be logged out.Try again');
        });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-cube-grid {\r\n    width: 40px;\r\n    height: 40px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-left: -14px;\r\n    margin-right: -14px;\r\n}\r\n\r\n.sk-cube-grid .sk-cube {\r\n    width: 33%;\r\n    height: 33%;\r\n    background-color: #03b6b3;\r\n    float: left;\r\n    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\r\n    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\r\n}\r\n.sk-cube-grid .sk-cube1 {\r\n    -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s; }\r\n.sk-cube-grid .sk-cube2 {\r\n    -webkit-animation-delay: 0.3s;\r\n    animation-delay: 0.3s; }\r\n.sk-cube-grid .sk-cube3 {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s; }\r\n.sk-cube-grid .sk-cube4 {\r\n    -webkit-animation-delay: 0.1s;\r\n    animation-delay: 0.1s; }\r\n.sk-cube-grid .sk-cube5 {\r\n    -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s; }\r\n.sk-cube-grid .sk-cube6 {\r\n    -webkit-animation-delay: 0.3s;\r\n    animation-delay: 0.3s; }\r\n.sk-cube-grid .sk-cube7 {\r\n    -webkit-animation-delay: 0s;\r\n    animation-delay: 0s; }\r\n.sk-cube-grid .sk-cube8 {\r\n    -webkit-animation-delay: 0.1s;\r\n    animation-delay: 0.1s; }\r\n.sk-cube-grid .sk-cube9 {\r\n    -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s; }\r\n\r\n@-webkit-keyframes sk-cubeGridScaleDelay {\r\n    0%, 70%, 100% {\r\n        -webkit-transform: scale3D(1, 1, 1);\r\n        transform: scale3D(1, 1, 1);\r\n    } 35% {\r\n          -webkit-transform: scale3D(0, 0, 1);\r\n          transform: scale3D(0, 0, 1);\r\n      }\r\n}\r\n\r\n@keyframes sk-cubeGridScaleDelay {\r\n    0%, 70%, 100% {\r\n        -webkit-transform: scale3D(1, 1, 1);\r\n        transform: scale3D(1, 1, 1);\r\n    } 35% {\r\n          -webkit-transform: scale3D(0, 0, 1);\r\n          transform: scale3D(0, 0, 1);\r\n      }\r\n}\r\n\r\n\r\n.spinner {\r\n    width: 70px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-left: -14px;\r\n    margin-right: -14px;\r\n}\r\n\r\n.spinner > div {\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: #333;\r\n\r\n    border-radius: 100%;\r\n    display: inline-block;\r\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n}\r\n\r\n.spinner .bounce1 {\r\n    -webkit-animation-delay: -0.32s;\r\n    animation-delay: -0.32s;\r\n}\r\n\r\n.spinner .bounce2 {\r\n    -webkit-animation-delay: -0.16s;\r\n    animation-delay: -0.16s;\r\n}\r\n\r\n@-webkit-keyframes sk-bouncedelay {\r\n    0%, 80%, 100% { -webkit-transform: scale(0) }\r\n    40% { -webkit-transform: scale(0.5) }\r\n}\r\n\r\n@keyframes sk-bouncedelay {\r\n    0%, 80%, 100% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    } 40% {\r\n          -webkit-transform: scale(0.5);\r\n          transform: scale(0.5);\r\n      }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sk-cube-grid\" *ngIf=\"type==='cube'\">\n  <div class=\"sk-cube sk-cube1\"></div>\n  <div class=\"sk-cube sk-cube2\"></div>\n  <div class=\"sk-cube sk-cube3\"></div>\n  <div class=\"sk-cube sk-cube4\"></div>\n  <div class=\"sk-cube sk-cube5\"></div>\n  <div class=\"sk-cube sk-cube6\"></div>\n  <div class=\"sk-cube sk-cube7\"></div>\n  <div class=\"sk-cube sk-cube8\"></div>\n  <div class=\"sk-cube sk-cube9\"></div>\n</div>\n\n\n<div class=\"spinner\" *ngIf=\"type==='bounce'\">\n  <div class=\"bounce1\"></div>\n  <div class=\"bounce2\"></div>\n  <div class=\"bounce3\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.type = 'bounce';
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "type", void 0);
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-spinner',
            template: __webpack_require__("../../../../../src/app/shared/spinner/spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/terms/terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  terms works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-terms',
            template: __webpack_require__("../../../../../src/app/shared/terms/terms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiURL: 'http://139.59.243.90',
    apiPORT: '8080'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
    window.console.log = function () { };
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map