(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/rodman-core/fesm2015/rodman-core.js":
/*!**************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/dist/rodman-core/fesm2015/rodman-core.js ***!
  \**************************************************************************/
/*! exports provided: AdsModule, ContentsModule, DEFAULT_IMAGE, DirectorySectionModule, HeapsModule, HomeModule, IMAGE_DOMAIN, RodmanCoreComponent, RodmanCoreModule, RodmanCoreService, SitesModule, TaxonomiesModule, UsersModule, apiURL, httpOptions, magazineIds, magazineNameDetails, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵbr, ɵbs, ɵbt, ɵbu, ɵbv, ɵbw, ɵbx, ɵby, ɵbz, ɵc, ɵca, ɵcb, ɵcc, ɵcd, ɵce, ɵcf, ɵcg, ɵch, ɵci, ɵcj, ɵck, ɵcl, ɵcm, ɵcn, ɵco, ɵcp, ɵcq, ɵcr, ɵcs, ɵct, ɵcu, ɵcv, ɵcw, ɵcx, ɵcy, ɵcz, ɵd, ɵda, ɵdb, ɵdc, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsModule", function() { return AdsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsModule", function() { return ContentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_IMAGE", function() { return DEFAULT_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectorySectionModule", function() { return DirectorySectionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeapsModule", function() { return HeapsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_DOMAIN", function() { return IMAGE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodmanCoreComponent", function() { return RodmanCoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodmanCoreModule", function() { return RodmanCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodmanCoreService", function() { return RodmanCoreService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesModule", function() { return SitesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomiesModule", function() { return TaxonomiesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiURL", function() { return apiURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magazineIds", function() { return magazineIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magazineNameDetails", function() { return magazineNameDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NavService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return ContentViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return ContentViewService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return ContentBoxTabsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return ContentDynamicViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return ContentInfographicsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return ContentSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return ContentSearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return ContentRelatedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return ContentRelatedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return ContentSuggestSlideShowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return ContentBoxTabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return ContentDefaultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return ContentJobsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbn", function() { return ContentFeatureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbo", function() { return ContentVideoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbp", function() { return ContentWebinarsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbq", function() { return ContentFormularyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbr", function() { return ContentBuyerGuideBasicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbs", function() { return ContentBuyerGuideMicroSiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbt", function() { return ContentSlideShowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbu", function() { return ContentStaticContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbv", function() { return ContentWhitePaperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbw", function() { return ContentNewsReleaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbx", function() { return ContentCompanyRelatedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵby", function() { return ContentCompanyRelatedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbz", function() { return ContentRelatedContentListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AuthenticationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵca", function() { return ContentRelatedSearchesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcb", function() { return ContentGlossaryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcc", function() { return ContentIssueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcd", function() { return ContentIssueService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵce", function() { return ContentIssueSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcf", function() { return ContentRssFeedsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcg", function() { return ContentRssFeedsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵch", function() { return ContentListsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵci", function() { return ContentsWebinarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcj", function() { return ContentMagazineIssueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵck", function() { return ContentsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcl", function() { return UsersVerifyEmailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcm", function() { return UsersVerifyEmailService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcn", function() { return UserProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵco", function() { return CompanyContentAuthenticateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcp", function() { return UsersRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcq", function() { return ListTaxonomiesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcr", function() { return ListTaxonomiesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcs", function() { return TaxonomiesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵct", function() { return DirectoryHomePageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcu", function() { return DirectoryHomePageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcv", function() { return DirectorySearchBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcw", function() { return DirectoryBasicCompanyListingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcx", function() { return DirectorySectionRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcy", function() { return TopCompanyHomePageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcz", function() { return TopCompanyHomePageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return AuthenticationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵda", function() { return TopCompanyHomePageSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵdb", function() { return TopCompanyHomePageSliderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵdc", function() { return HeapsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return FootersliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return FootersliderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NotFoundComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return SitesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return AdsDisplayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return AdsOverlayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return AdsFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return AdsDoubleClickComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return AdsHomeWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return AdsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return FeaturedContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return FeatureContentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return HomeSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return HomeSliderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return HomeRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return ListContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return ListContentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return StaticContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return StaticContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../../node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "../../node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "../../node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_dfp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-dfp */ "../../node_modules/ngx-dfp/fesm2015/ngx-dfp.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-font-awesome */ "../../node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var rodman_orm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rodman-orm */ "../../dist/rodman-orm/fesm2015/rodman-orm.js");
/* harmony import */ var ng2_device_detector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-device-detector */ "../../node_modules/ng2-device-detector/index.js");

















/**
 * @fileoverview added by tsickle
 * Generated from: lib/rodman-core.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
/** @type {?} */
const apiURL = 'http://3.85.159.45:8042/';
/** @type {?} */
const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'Basic YWRtaW46YWRtaW5AMTIz' }) };
/** @type {?} */
const magazineNameDetails = {
    'NUT': { id: '1', name: 'Nutraceuticals world' },
    'CW': { id: '5', name: 'Coating World' },
    'MPO': { id: '6', name: 'Medical Product Outsourcing' },
    'CP': { id: '7', name: 'Contract Pharma' },
    'BP': { id: '8', name: 'Beauty Packaging' },
    'HAP': { id: '9', name: 'Happi' },
    'INK': { id: '10', name: 'Ink World' },
    'LNW': { id: '11', name: 'Label & Narrow Web' },
    'NON': { id: '13', name: 'Nonwovens Industry' },
    'ODT': { id: '14', name: 'Orthopedic Design & Technology' },
    'PEN': { id: '15', name: 'Printed Electronics Now' },
};
/** @type {?} */
const magazineIds = {
    '1': { id: 'NUT', name: 'Nutraceuticals world' },
    '5': { id: 'CW', name: 'Coating World' },
    '6': { id: 'MPO', name: 'Medical Product Outsourcing' },
    '7': { id: 'CP', name: 'Contract Pharma' },
    '8': { id: 'BP', name: 'Beauty Packaging' },
    '9': { id: 'HAP', name: 'Happi' },
    '10': { id: 'INK', name: 'Ink World' },
    '11': { id: 'LNW', name: 'Label & Narrow Web' },
    '13': { id: 'NON', name: 'Nonwovens Industry' },
    '14': { id: 'ODT', name: 'Orthopedic Design & Technology' },
    '15': { id: 'PEN', name: 'Printed Electronics Now' },
};
/** @type {?} */
const IMAGE_DOMAIN = "http://dev.rodpub.com/images/";
/** @type {?} */
const DEFAULT_IMAGE = "http://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif";
class RodmanCoreService {
    /**
     * @param {?} HttpClient
     * @param {?} sanitizer
     * @param {?} Router
     */
    constructor(HttpClient, sanitizer, Router) {
        this.HttpClient = HttpClient;
        this.sanitizer = sanitizer;
        this.Router = Router;
        this.collectoionAds = [];
        this.finalArray = [];
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        }));
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    displayImageUrl(imageId) {
        imageId = imageId.toString();
        /** @type {?} */
        let folderName = imageId.substring(0, 3);
        /** @type {?} */
        let imageName = imageId.substring(3);
        return (imageId != '0') ? IMAGE_DOMAIN + folderName + "/" + imageName + '_main.jpg' : DEFAULT_IMAGE;
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    displayImageThumbURL(imageId) {
        imageId = imageId.toString();
        /** @type {?} */
        let folderName = imageId.substring(0, 3);
        /** @type {?} */
        let imageName = imageId.substring(3);
        return (imageId != '0') ? IMAGE_DOMAIN + folderName + "/" + imageName + '_thumb.jpg' : DEFAULT_IMAGE;
    }
    /**
     * @return {?}
     */
    returnUrl() {
        return this.currentURL;
    }
    /**
     * @param {?} magazineId
     * @return {?}
     */
    getAllAdst(magazineId) {
        return this.HttpClient.post(apiURL + 'adsController/getAds', { magazineId: magazineId, pageUrl: this.currentURL }, httpOptions);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    getAdcode(str) {
        str = str.replace(/\'/g, '');
        str = str.replace(/\\/g, '');
        /** @type {?} */
        var firstIndex = str.indexOf("script") + 10;
        /** @type {?} */
        var lastIndex = str.indexOf("/script>");
        str = str.substring(firstIndex, lastIndex);
        if (str.indexOf('defineSlot') < 0)
            return false;
        /** @type {?} */
        var slot = str.substring(str.indexOf("defineSlot(") + 11, str.indexOf(").addService"));
        /** @type {?} */
        var slotvalue = slot.split(',')[0];
        /** @type {?} */
        var code = {
            slot: slotvalue,
            sizes: str.substring(str.lastIndexOf("[[") + 1, str.lastIndexOf("]]") + 1),
            key: str.substring(str.lastIndexOf('setTargeting("') + 14, str.lastIndexOf('",')),
            value: str.substring(str.lastIndexOf('",[') + 4, str.lastIndexOf('])'))
        };
        return code;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        return this.sanitizer.bypassSecurityTrustHtml(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtmlReplace(data) {
        return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "").replace('&amp;', '&').replace("\'", "'");
    }
    /**
     * @param {?} data
     * @return {?}
     */
    bodyCharacterLength(data) {
        return data.substring(0, 150);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    extractNameFromJson(obj) {
        if (/^[\],:{}\s]*$/.test(obj.replace(/\\["\\\/bfnrtu]/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            obj = JSON.parse(obj);
            return (obj.name) ? 'By ' + obj.name + ' ' + obj.title + ' .' : '';
        }
        else {
            return (obj) ? "By " + obj : '  ';
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        this.errorData = {
            errorTitle: 'Oops! Request for document failed',
            errorDesc: 'Something bad happened. Please try again later.'
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.errorData);
    }
}
RodmanCoreService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RodmanCoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
/** @nocollapse */ RodmanCoreService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function RodmanCoreService_Factory() { return new RodmanCoreService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); }, token: RodmanCoreService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/rodman-core.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RodmanCoreComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RodmanCoreComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-RodmanCore',
                template: `
    <p>
      rodman-core works!
    </p>
  `
            }] }
];
/** @nocollapse */
RodmanCoreComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/rodman-core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RodmanCoreModule {
}
RodmanCoreModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [RodmanCoreComponent],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    // AngularFontAwesomeModule,
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"].forRoot(),
                    // Ng2DeviceDetectorModule.forRoot(),
                    ngx_dfp__WEBPACK_IMPORTED_MODULE_10__["DfpModule"].forRoot({
                        idleLoad: true,
                        enableVideoAds: true,
                        personalizedAds: true,
                        // Request personalized ads by default
                        singleRequestMode: true,
                        // Only applies to initial refresh
                        onSameNavigation: 'refresh',
                        globalTargeting: {
                        // food: ['NUT', 'HOME']
                        }
                    })
                ],
                exports: [RodmanCoreComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"]],
                providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"] }, { provide: RodmanCoreService }, { provide: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sites/sites-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [];
class SitesRoutingModule {
}
SitesRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sites/components/nav/nav.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @param {?} menuId
     * @return {?}
     */
    getHeaderMenu(magazineId, menuId) {
        return this.HttpClient.post(apiURL + 'menuscontroller/displayMenu', { magazineId: magazineId, id: menuId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} magazineId
     * @return {?}
     */
    currentIssue(magazineId) {
        return this.HttpClient.post(apiURL + 'issuescontroller/latestIssueURL', { magazineId: magazineId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
NavService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NavService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ NavService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NavService_Factory() { return new NavService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: NavService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sites/components/nav/nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavComponent {
    /**
     * @param {?} NavService
     */
    constructor(NavService) {
        this.NavService = NavService;
        this.hoverIndex = -1;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onHover(i) {
        this.hoverIndex = i;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onHoverOut(i) {
        this.hoverIndex = -1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Header Main And Submenu api Call 
        this.NavService.getHeaderMenu(this.magazineId, this.menuId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.articles = data['data'];
        }));
        // this.currentIssue();
    }
    /**
     * @return {?}
     */
    currentIssue() {
        this.NavService.currentIssue(this.magazineId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.issueUrl = data.issueUrl;
        }));
    }
    /**
     * @param {?} str
     * @return {?}
     */
    validateUrl(str) {
        /** @type {?} */
        var tarea = str;
        if (tarea.indexOf("http://") == 0 || tarea.indexOf("https://") == 0) {
            return true;
        }
        return false;
    }
}
NavComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-nav',
                inputs: ['magazineId', 'menuId'],
                template: "<div class =\"primary_menu\">\n  <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngFor=\"let navItem of articles; let i = index\">\n        <span id=\"{{i}}\" (mouseenter) =\"onHover(i)\" (click)=\"onHoverOut(i)\">\n          <a class=\"nav-link\" *ngIf=\"(!validateUrl(navItem.url))\"   [routerLink]=\"[navItem.url.replace('?nav=top_nav', '')]\">{{navItem.title}}</a>\n          <a class=\"nav-link\" *ngIf=\"(validateUrl(navItem.url))\"   href=\"{{navItem.url}}\" target=\"_blank\">{{navItem.title}}</a>\n        </span>\n        <div class=\"submenu\">\n          <div *ngIf = \"i == hoverIndex\" (mouseleave) =\"onHoverOut(i)\"  >\n            <div *ngFor=\"let childNavItem of navItem.child; let j = index\" class=\"col-md-3 col-sm-3 list_item\" [routerLinkActive]=\"['active']\" >                 \n                <a class=\"nav-link text-color\" *ngIf=\"(!validateUrl(childNavItem.url)) && (navItem.title != childNavItem.title ) \"  [routerLink]=\"[childNavItem.url]\" (click)=\"onHoverOut(i)\" >{{childNavItem.title}}</a>                \n                <a class=\"nav-link text-color\" *ngIf=\"(validateUrl(childNavItem.url)) && (navItem.title != childNavItem.title )\" href=\"{{childNavItem.url}}\" target=\"_blank\" (click)=\"onHoverOut(i)\" >{{childNavItem.title}}</a>\n            </div>\n          </div>  \n        </div> \n      </li>   \n  </ul>\n</div>\n",
                styles: [".submenu{position:absolute;background:#f1f1f1;z-index:9999;color:#222;width:100%;top:50px;right:0}.list_item a{vertical-align:middle!important;z-index:-99999}.list_item{float:left;line-height:2rem;position:relative;font-size:14px}.primary_menu{position:relative}.text-color{color:#000!important}"]
            }] }
];
/** @nocollapse */
NavComponent.ctorParameters = () => [
    { type: NavService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sites/components/header/header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent {
    /**
     * @param {?} CookieService
     * @param {?} Router
     * @param {?} RodmanCoreService
     */
    constructor(CookieService, Router, RodmanCoreService) {
        this.CookieService = CookieService;
        this.Router = Router;
        this.RodmanCoreService = RodmanCoreService;
        this.isCollapsed = true;
        this.overlayCookie = false;
        this.Url = apiURL;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.isOverlayCookie = this.CookieService.get('overlay_'+this.magazineId);
        // if(this.isOverlayCookie===''){
        //   const dateNow = new Date();
        //   dateNow.setMinutes(dateNow.getMinutes() + 30);
        //   this.CookieService.set('overlay_'+this.magazineId, 'Overlay' ,dateNow,'/',"");
        //   this.overlayCookie = true;   
        // }else{
        //   // console.log('Cookie Set_'+this.magazineId)
        // }
    }
    /**
     * @return {?}
     */
    search() {
        if (this.searchContent) {
            this.Router.navigateByUrl('/contents/searchcontent/all/' + this.searchContent);
        }
    }
}
HeaderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-header',
                inputs: ['magazineId', 'magazineName', 'menuId', 'groupId', 'fieldId', 'formId'],
                template: "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary header-fixed\" >\n  <a class=\"navbar-brand\" href=\"#\">\n    <img class=\"header-logo\" src=\"{{Url}}{{magazineName+'_logo.png'}}\">\n  </a>\n    <button type=\"button\" class=\"navbar-toggler btn btn-primary \" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  <div class=\"navbar-collapse collapse\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\" > \n    <div class=\"col-sm-9 col-md-9\" >\n        <CoreLib-nav  magazineId={{magazineId}}  menuId={{menuId}}></CoreLib-nav>\n    </div>\n    <div class=\"col-sm-3 col-md-3\" style=\"float: right!important\">\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" id=\"searchContent\" (input)=\"searchContent=$event.target.value\" type=\"text\" placeholder=\"Search\">\n        <button class=\"btn btn-primary my-2 my-sm-0\" (click)=search() type=\"submit\">Search</button>\n      </form>  \n    </div>\n  </div>\n</nav>\n\n\n\n\n\n\n\n\n",
                styles: [".header-logo{max-height:40px}"]
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: RodmanCoreService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sites/components/footer/footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterComponent {
    /**
     * @param {?} Router
     * @param {?} httpService
     * @param {?} RodmanCoreService
     */
    constructor(Router, httpService, RodmanCoreService) {
        this.Router = Router;
        this.httpService = httpService;
        this.RodmanCoreService = RodmanCoreService;
        this.footerSocialLink = [
            { '15': {
                    'facebook': 'https://www.facebook.com/pages/Printed-Electronics-Now/135384279809061',
                    'linkedin': 'http://www.linkedin.com/groups/Printed-Electronics-Now-2079630/about',
                    'rss': '/rssfeeds/',
                }
            },
            { '14': { 'facebook': 'http://www.facebook.com/pages/Orthopedic-Design-Technology/132780940069550',
                    'linkedin': 'http://www.linkedin.com/groups?about=&amp;gid=2079574&amp;trk=anet_ug_grppro',
                    'twitter': 'https://twitter.com/odtmagazine',
                }
            },
            { '13': { 'facebook': 'http://www.facebook.com/pages/Nonwovens-Industry-Magazine/129247883774669',
                    'linkedin': 'http://www.linkedin.com/groups?about=&amp;gid=1775410&amp;trk=anet_ug_grppro',
                    'twitter': 'http://twitter.com/NonwovensMag',
                    'rss': '/rssfeeds/'
                },
            },
            { '11': { 'facebook': 'http://www.facebook.com/pages/Label-And-Narrow-Web/124971914208037',
                    'linkedin': 'http://www.linkedin.com/groups?gid=2079407&amp;about=',
                    'twitter': 'http://www.twitter.com/labelandnarrow',
                    'pinterest': 'https://www.pinterest.com/lnwmagazine/',
                    'rss': '/rssfeeds/'
                }
            },
            { '10': { 'facebook': 'https://www.facebook.com/pages/Ink-World/101479703238099',
                    'linkedin': 'http://www.linkedin.com/groups?gid=2079359',
                    'twitter': 'http://twitter.com/inkworldmag',
                    'rss': '/rssfeeds/',
                    'google': 'https://plus.google.com/+Inkworldmagazine1/posts',
                    'instagram': 'https://www.instagram.com/inkworldmag/'
                }
            },
            { '9': { 'facebook': 'https://www.facebook.com/HappiMagazine/',
                    'linkedin': 'https://www.linkedin.com/groups/2079173/profile',
                    'twitter': 'https://twitter.com/happimagazine',
                    'instagram': 'https://www.instagram.com/happimagazine/',
                    'pinterest': 'https://www.pinterest.com/happimagazine/',
                    'rss': '/rssfeeds/'
                }
            },
            { '8': { 'facebook': 'https://www.facebook.com/pages/Beauty-Packaging/124945340875475',
                    'linkedin': 'https://www.linkedin.com/groups?about=&amp;gid=1775357',
                    'twitter': 'https://twitter.com/beautypackaging',
                    'pinterest': 'https://www.pinterest.com/beautypackaging/',
                    'rss': '/rssfeeds/'
                }
            },
            { '7': { 'facebook': 'http://www.facebook.com/contractpharma',
                    'linkedin': 'http://www.linkedin.com/groups?about=&amp;gid=1775433&amp;trk=anet_ug_grppro',
                    'twitter': 'http://twitter.com/contractpharma',
                    'rss': '/rssfeeds/'
                }
            },
            { '6': { 'facebook': 'https://www.facebook.com/pages/Medical-Product-Outsourcing/105425076171700',
                    'linkedin': 'http://www.linkedin.com/groups?gid=2079433&amp;trk=myg_ugrp_ovr',
                    'twitter': 'https://twitter.com/mpomagazine',
                    'rss': '/rssfeeds/'
                }
            },
            { '5': { 'facebook': 'http://www.facebook.com/pages/Coatings-World/111797362200467',
                    'linkedin': 'http://www.linkedin.com/groups?gid=2079298&amp;about=e',
                    'twitter': 'http://www.twitter.com/coatingsworld',
                    'rss': '/rssfeeds/'
                }
            },
            { '1': { 'facebook': 'https://www.facebook.com/pages/Nutraceuticals-World/135318976481526',
                    'linkedin': 'https://www.linkedin.com/groups/Nutraceuticals-World-2079225/about',
                    'twitter': 'https://twitter.com/nutworld',
                    'instagram': 'https://instagram.com/nutraceuticalsworld/',
                    'pinterest': 'https://www.pinterest.com/nutraworld/',
                    'rss': '/rssfeeds/'
                }
            },
        ];
        this.Url = apiURL;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentYear = new Date().getFullYear();
    }
}
FooterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-footer',
                inputs: ['magazineId'],
                template: "<div class=\"container-fluid inner_cont\">\n  <div class=\"container\">\n    <div id=\"footer-show-content\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class='row'>\n        <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n              <p><a  [routerLink]=\"['/about-us']\"><h4>ABOUT US</h4></a></p>         \n              <p><a  [routerLink]=\"['/privacy-policy']\"><h4>PRIVACY POLICY</h4></a></p>         \n              <p><a  [routerLink]=\"['/terms-and-conditions']\"><h4>TERMS AND CONDTIONS</h4></a></p>         \n              <p><a [routerLink]=\"['/contact-us']\"><h4>CONTACT US</h4></a></p> \n\n        </div>\n        <div class=\"col-xs-12 col-sm-2 col-md-3 col-lg-3\">\n              <h4 style=\"color: white;\">FOLLOW US</h4>\n              <span *ngFor=\"let social of footerSocialLink\">\n                <p *ngIf=\"social.hasOwnProperty(magazineId)\">\n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].facebook\" href=\"{{social[magazineId].facebook}}\">\n                     <img src=\"{{Url+'facebook.png'}}\"></a> \n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].google\" href=\"{{social[magazineId].google}}\">\n                     <img src=\"{{Url+'google.png'}}\"></a>\n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].linkedin\" href=\"{{social[magazineId].linkedin}}\">\n                     <img src=\"{{Url+'linkedin.png'}}\"></a>\n\n                   <a [routerLink]=\"['/rssfeeds']\" class=\"social\" *ngIf=\"social[magazineId].rss\" [routerLink]=\"[social[magazineId].rss]\">\n                     <img src=\"{{Url+'rss.png'}}\"></a>\n\n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].twitter\" href=\"{{social[magazineId].twitter}}\">\n                     <img src=\"{{Url+'twitter.png'}}\"></a>\n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].instagram\" href=\"{{social[magazineId].instagram}}\">\n                     <img src=\"{{Url+'Instagram.png'}}\"></a>\n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].pinterest\" href=\"{{social[magazineId].pinterest}}\">\n                     <img src=\"{{Url+'pinrest.png'}}\"></a>\n                </p>\n             </span>  \n                     \n        </div>\n        <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">                                            \n            <CoreLib-footerslider></CoreLib-footerslider>  \n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n</div>\n<div class=\"container-fluid\">\n\n      <div class='row'>\n        <div id=\"bottom-footer\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <p class=\"text-center\">Copyright \u00A9 {{currentYear}} Rodman Media. All rights reserved. Use of this constitutes acceptance of our privacy policy \n                        The material on this site may not be reproduced, distributed, transmitted, or otherwise used, except with the prior written permission of Rodman Media.</p>       \n        </div>\n      </div> \n  \n</div>",
                styles: ["#bottom-footer{background-color:#000;color:#fff}.inner_cont{background:#464646}#footer-show-content{padding:20px!important}.text-center{max-width:80%;margin:0 auto}h4 a,p a{color:#fff!important}.font-colors{margin:2px}.social{width:20px;margin:5px}"]
            }] }
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sites/components/footerslider/footerslider.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FootersliderService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @return {?}
     */
    getFooterData(magazineId) {
        return this.HttpClient.post(apiURL + 'SitesController/footerSlider', { magazineId: magazineId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
FootersliderService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FootersliderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ FootersliderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function FootersliderService_Factory() { return new FootersliderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: FootersliderService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sites/components/footerslider/footerslider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FootersliderComponent {
    /**
     * @param {?} FootersliderService
     * @param {?} config
     */
    constructor(FootersliderService, config) {
        this.FootersliderService = FootersliderService;
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        config.interval = 2000;
        config.showNavigationArrows = false;
        config.showNavigationIndicators = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Footer Slider Api Call 
        this.FootersliderService.getFooterData(this.magazineId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.sliderData = data['data'];
        }));
    }
}
FootersliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                inputs: ['magazineId'],
                selector: 'CoreLib-footerslider',
                template: "<ngb-carousel>\n    <ng-template ngbSlide *ngFor=\"let sliderData of sliderData; let i =index\">\n    <div class=\"sliderdata\">\n      <div class=\"picsum-img-wrapper\">\n        <img [src]=\"sliderData.image\" class=\"img-responsive\" alt=\"{{sliderData.name}}\">\n      </div>\n      <!--   <a class=\"nav-link\"  [routerLink]=\"[navItem.url.replace('?nav=top_nav', '')]\">{{navItem.title}}</a> -->\n      <div class=\"carousel_text\">\n        <h5>Latest Breaking News From {{sliderData.name}}</h5>\n        <p *ngFor=\"let textData of sliderData.child; let j = index\"><a target=\"_blank\" [routerLink]=\"[textData.viewUrl]\">{{textData.title}}</a></p>\n      </div>\n    </div>\n    </ng-template>\n</ngb-carousel>",
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
                styles: [".picsum-img-wrapper img{margin:5px;height:60px!important;min-height:50px!important;max-width:250px!important;background:0 0!important}.carousel_text{position:none!important;text-align:left!important;right:15%;bottom:20px;left:15%;z-index:10;padding-top:5px;padding-bottom:20px;color:#fff}.carousel_text p{margin:0;font-size:14px!important}.sliderdata{padding:0 35px!important;background:#8f8d8e!important}.carousel,.slide{padding:0 10px}"]
            }] }
];
/** @nocollapse */
FootersliderComponent.ctorParameters = () => [
    { type: FootersliderService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/users/authentication/authentication.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthenticationService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    userSignUp(data) {
        //  Change Url For Register
        return this.HttpClient.post(apiURL + 'usersController/signUpNewsletter', data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    userLogin(data) {
        //  Change Url For Login
        return this.HttpClient.post(apiURL + 'usersController/userLogin', data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
AuthenticationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ AuthenticationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AuthenticationService_Factory() { return new AuthenticationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: AuthenticationService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/users/authentication/authentication.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthenticationComponent {
    /**
     * @param {?} modalService
     * @param {?} formBuilder
     * @param {?} AuthenticationService
     * @param {?} Router
     */
    constructor(modalService, formBuilder, AuthenticationService, Router) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.AuthenticationService = AuthenticationService;
        this.Router = Router;
        this.privacyPolicy = "/privacy-policy";
        this.termsConditions = "/terms-and-conditions/";
        this.profile = "/profile";
        this.modalOpen = true;
        this.showMsgRegistration = false;
        this.showMsgRegistrationFail = false;
        this.showMsgLoginSucess = false;
        this.showMsgLoginFail = false;
        this.loginMenuChange = false;
    }
    /**
     * @param {?} login
     * @return {?}
     */
    openLogin(login) {
        this.modalService.open(login, { centered: true });
    }
    /**
     * @param {?} register
     * @return {?}
     */
    openRegister(register) {
        this.modalService.open(register, { centered: true });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //Check Login User
        if (localStorage.getItem('authDetails' + this.magazineId)) {
            /** @type {?} */
            const data = JSON.parse(localStorage.getItem('authDetails' + this.magazineId));
            this.loginMenuChange = true;
        }
        else {
        }
        //Registor Form
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            weekly_enewsletter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            special_promotions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            group_id_company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            field_id_company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            form_id_company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            magazineId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            url: location.origin + '/user/verifyUser/',
        });
        // Login Form
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            magazineId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    //User Login  Function
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.AuthenticationService.userLogin(this.loginForm.value).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.status == "success" && data.message == "login successfully") {
                localStorage.setItem('authDetails' + this.magazineId, JSON.stringify(data.data));
                this.showMsgLoginSucess = true;
                this.loginMenuChange = true;
                this.modalService.dismissAll(this.loginForm.value);
                this.Router.navigateByUrl(this.profile);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.showMsgLoginSucess = false;
                }), 5000);
            }
            else {
                this.showMsgLoginFail = true;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.showMsgLoginFail = false;
                }), 5000);
            }
        }));
    }
    // Validation Check Both Form
    /**
     * @return {?}
     */
    get registerVal() {
        return this.registerForm.controls;
    }
    /**
     * @return {?}
     */
    get loginVal() {
        return this.loginForm.controls;
    }
    // Registration User 
    /**
     * @return {?}
     */
    signup() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.AuthenticationService.userSignUp(this.registerForm.value).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.status == "success" && data.message == "You are almost registered" && data.registerStatus == "success") {
                this.showMsgRegistration = true;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.showMsgRegistration = false;
                    this.modalService.dismissAll(this.registerForm.value);
                }), 5000);
            }
        }));
    }
    // Logout Session
    /**
     * @return {?}
     */
    logOut() {
        localStorage.clear();
        this.loginMenuChange = false;
        this.Router.navigateByUrl('');
    }
}
AuthenticationComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-authentication',
                template: "<!-- Login PopUp -->\n<ng-template #login let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Sign In</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n            <div class=\"modal-body\">\n                <div id=\"loginBoxDiv\" class=\"well\" style=\"\">\n                    <div class=\"row\"  *ngIf=\"showMsgLoginSucess; else errorMsg\">\n                        <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                            <p class=\"alert alert-success text-center\">  <strong>Thank you for logged in</strong> </p>\n                        </div>\n                    </div>\n    \n                    <ng-template #errorMsg >\n                        <div *ngIf=\"showMsgLoginFail\" class=\"alert alert-danger text-center\"> <h2>Wrong Login Details</h2></div>\n                    </ng-template>                     \n    \n                        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                                <h2>Already a member ?</h2>\n                                <input type=\"hidden\" formControlName=\"magazineId\" value=\"{{magazineId}}\" [ngModel]=\"magazineId\" > \n    \n                                <input type=\"text\" formControlName=\"email\" id=\"webUserName_loginform\" placeholder=\"Enter Your Email\" class=\"form-control required email\" [ngClass]=\"{ 'is-invalid': submitted && loginVal.email.errors }\">\n                                <div *ngIf=\"submitted && loginVal.email.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"loginVal.email.errors.required\">Email is required</div>\n                                        <div *ngIf=\"loginVal.email.errors.email\">Enter a valid email address</div>\n                                    </div>\n                                <br>\n                                <input type=\"password\" formControlName=\"password\" id=\"webPassword_loginform\" placeholder=\"Enter Password\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && loginVal.password.errors }\">\n                                <div *ngIf=\"submitted && loginVal.password.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"loginVal.password.errors.required\">Password is required</div>\n                                </div>\n    \n    \n                                <div class=\"clearfix\"></div><br>\n                                <a href=\"#\" class=\"pull-right\" >Forgot Password?</a>\n                                    <br>\n                                <button class=\"btn btn-primary form-control\" type=\"submit\">SIGN IN</button>\n                        </form> \n                        <div class=\"clearfix\"></div><br>\n                        <div class=\"clearfix\"></div><br>\n                        <hr>\n                        <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 popup-btn pull-right\">\n                            <h5>Don't have an account? \n                                <button class=\"btn btn-primary\" (click)=\"[openRegister(register),modal.dismiss('Cross click')]\"> Sign Up FREE</button> \n                                OR  \n                                <button class=\"btn btn-default\" type=\"button\">Connect with linkedin</button>\n                            </h5>                \n                        </div>\n                    <div class=\"spacer5\"></div>\n                </div> \n            </div>\n    </ng-template>\n    <!-- Login PopUp  End -->\n    \n    \n    <!-- Register PopUp -->\n        <ng-template #register let-modal>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Join New </h4>\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                    <div name=\"SignUpNewsLetter_form_result\" id=\"SignUpNewsLetter_form_result\" class=\"well\">\n                        <div class=\"clearfix\"></div><br>\n                        <div class=\"row\"  *ngIf=\"showMsgRegistration\">\n                                <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                    <p class=\"alert alert-success text-center\">  <strong>You Are Almost Register!</strong> Please verfy Your Email !.</p>\n                                </div>\n                        </div>\n    \n                            <form [formGroup]=\"registerForm\" (ngSubmit)=\"signup();\">\n                                    <div class=\"formbox\">\n                                            \n                                            <input type=\"hidden\" formControlName=\"magazineId\" value=\"{{magazineId}}\" [ngModel]=\"magazineId\" >\n                                            <input type=\"hidden\" formControlName=\"group_id_company_name\" value=\"{{groupId}}\" [ngModel]=\"groupId\" >\n                                            <input type=\"hidden\" formControlName=\"form_id_company_name\"  value=\"{{formId}}\" [ngModel]=\"formId\">\n                                            <input type=\"hidden\" formControlName=\"field_id_company_name\" value=\"{{fieldId}}\" [ngModel]=\"fieldId\">\n    \n                                        \n                                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" [ngClass]=\"{ 'is-invalid': submitted && registerVal.email.errors }\" />\n                                            <div *ngIf=\"submitted && registerVal.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"registerVal.email.errors.required\">Email is required</div>\n                                                <div *ngIf=\"registerVal.email.errors.email\">Enter a valid email address</div>\n                                            </div>\n                                            <br>  \n    \n                                        \n                                            <input type=\"email\" formControlName=\"company_name\" class=\"form-control\" placeholder=\"Company Name\" [ngClass]=\"{ 'is-invalid': submitted && registerVal.company_name.errors }\" />\n                                            <div *ngIf=\"submitted && registerVal.company_name.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"registerVal.company_name.errors.required\">Company Name is required</div>\n                                            </div>\n                                            <br>\n    \n                                            <div class=\"clearfix\"></div><br>\n                                            <div style=\"text-align:left\">                                           \n                                                <input type=\"checkbox\" formControlName=\"weekly_enewsletter\"  >                                        \n                                                <span style=\"vertical-align: top;\">Yes, Please subscribe me to your weekly eNewsletters and Alerts</span>\n                                                <!-- <div *ngIf=\"submitted && registerVal.company_name.errors\" class=\"invalid-feedback\">\n                                                        <div *ngIf=\"registerVal.company_name.errors.required\">Option is required</div>\n                                                    </div> -->\n                                            </div>\n                \n                                            <div class=\"clearfix\"></div>\n                                            <div style=\"text-align:left\">                                         \n                                                <input type=\"checkbox\" formControlName=\"special_promotions\" >                                          \n                                                <span style=\"vertical-align: top;\">Yes, I wish to receive special promotions and offers from your affiliates.</span>\n                                                <!-- <div *ngIf=\"registerVal.special_promotions.errors.required\"  class=\"invalid-feedback\"> \n                                                        Please Check Option\n                                                    </div>\t -->\n                                            </div>\n                \n                                            <div class=\"clearfix\"></div>\n                                            <div style=\"text-align:left\" [routerLinkActive]=\"['active']\">\n                                                <p>By creating an account, I agree to the \n                                                    <a [routerLink]=\"[termsConditions]\" class=\"mag-color\">Terms of Use</a> and acknowledge that I have read the <a [routerLink]=\"[privacyPolicy]\" class=\"mag-color\">Privacy Policy.</a>\n                                                </p>\n                                            </div>\n                \n                                            <div class=\"clearfix\"></div>\n                                        <div class=\"clearfix\"></div>\n    \n                                        <button class=\"btn btn-primary form-control\"  id=\"\" type=\"submit\">Sign Up</button>\n                                      </div>\n                                  </form>\n                            <hr>\n                            <h5>Already a member?\n                                <button class=\"btn btn-primary\" (click)=\"[openLogin(login),modal.dismiss('Cross click')] \"> Sign In</button> \n                                OR \n                                <button class=\"btn btn-default\" type=\"button\"  >Connect with linkedin</button>\n                            </h5> \n                            <div class=\"clearfix\"></div>                          \n                    </div>\n            </div>\n        </ng-template>\n    <!-- Register PopUp -->\n    \n    \n    <!--  User signIn ANd Join POpup -->\n    <div class=\"navbar\" id=\"userDiv\" >\n        <div class=\"row\"> \n            <div class=\"dropdown\">\n                <p class=\"dropbtn ml-2 mr-3\">User</p>\n                <div class=\"dropdown-content\">  \n                    <div *ngIf=\"loginMenuChange; else showLoginRequestMessage\">\n                            <button class=\"btn mb-2 mr-2 col-md-12 col-sm-12\" [routerLink]=\"[profile]\">Profile</button>\n                            <button class=\"btn mb-2 mr-2 col-md-12 col-sm-12\" (click)=logOut()>Logout</button>                  \n                    </div> \n                     <ng-template #showLoginRequestMessage>\n                            <button class=\"btn mb-2 mr-2 col-md-12 col-sm-12\" (click)=\"openLogin(login)\">Login</button>\n                            <button class=\"btn mb-2 mr-2 col-md-12 col-sm-12\" (click)=\"openRegister(register)\">Join</button>\n                    </ng-template>\n                </div>\n            </div>\n         </div>\n    </div>\n    \n    \n    ",
                inputs: ['magazineId', 'groupId', 'fieldId', 'formId'],
                styles: [".dropbtn{color:#fff;margin-right:10px;border:none}.dropdown{position:relative;display:inline-block}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown-content button{color:#000;padding:12px 16px;text-decoration:none;display:block}.dropdown-content button:hover{background-color:#ddd}.dropdown:hover .dropdown-content{display:block}"]
            }] }
];
/** @nocollapse */
AuthenticationComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sites/components/not-found/not-found.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotFoundComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NotFoundComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-not-found',
                template: "<!-- <p> Core not-found works!</p> -->\n\n\n<div class=\"text-center\">\n    <h3> Under Development... </h3>\n\n   <p> Oops! <br>\n    This is awkward <br>\n    You are looking for something that doesn't actually exist\n   </p>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
NotFoundComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ads/ads-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes$1 = [];
class AdsRoutingModule {
}
AdsRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$1)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ads/ads-display/ads-display.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdsDisplayComponent {
    /**
     * @param {?} CookieService
     * @param {?} RodmanCoreService
     * @param {?} deviceService
     */
    constructor(CookieService, RodmanCoreService, deviceService) {
        this.CookieService = CookieService;
        this.RodmanCoreService = RodmanCoreService;
        this.deviceService = deviceService;
        this.location = 'HOME';
        this.deviceInfo = null;
        // @Input() magazineId: any;
        this.collectoionAds = [];
        this.overlayShow = true;
        this.showFooterAds = false;
        this.screenDetect();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataArray = this.getAdsFilter(this.ads);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getAdsFilter(data) {
        for (let filterData of data['data']) {
            // if(filterData.type == 'doubleclick'){ 
            this.isOverlayCookie = this.CookieService.get('overlay_' + filterData.id);
            if (this.isOverlayCookie) {
                this.overlayShow = false;
            }
            else if ((!(this.isOverlayCookie)) && (filterData.type == 'overlay')) {
                /** @type {?} */
                const dateNow = new Date();
                dateNow.setMinutes(dateNow.getMinutes() + 30);
                this.CookieService.set('overlay_' + filterData.id, 'Overlay', dateNow, '/', "");
            }
            this.collectoionAds[filterData.location.replace('-', "_").replace('-', "_")] =
                {
                    id: filterData.id,
                    code: this.getAdcode(filterData.code),
                    type: filterData.type,
                    ad_type: filterData.location.replace('-', "_").replace('-', "_").replace('-', "_")
                };
            if (filterData.type == 'overlay') {
                this.overlayAdsData = {
                    id: filterData.id,
                    code: this.getAdcode(filterData.code),
                    type: filterData.type,
                    ad_type: filterData.location.replace('-', "_").replace('-', "_").replace('-', "_")
                };
            }
            if ((filterData.type == 'doubleclick') && ('footer_1' == filterData.location.replace('-', "_").replace('-', "_").replace('-', "_"))) {
                this.footerAds = {
                    id: filterData.id,
                    code: this.getAdcode(filterData.code),
                    type: filterData.type,
                    ad_type: filterData.location.replace('-', "_").replace('-', "_").replace('-', "_")
                };
            }
            // }        
        }
        // this.finalSlots =  this.arrayConvet(this.collectoionAds[this.location].code.sizes);   
        // this.arrayCheck=1;
        // this.collectoionAds[this.location].code.value = ((this.collectoionAds[this.location].code.value=='') && (this.collectoionAds[this.location].code.value=='ome')) ? 'HOME' : this.collectoionAds[this.location].code.value ;
        return this.collectoionAds[this.location];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    arrayConvet(data) {
        /** @type {?} */
        var sizes = data.split(']');
        /** @type {?} */
        var finalsize = [];
        for (let size in sizes) {
            if (sizes[size].indexOf('[') >= 0) {
                /** @type {?} */
                var singleSize = sizes[size].substring(sizes[size].indexOf('[') + 1).split(',');
                finalsize.push({ width: (singleSize[0].replace(/\s/g, "")).toString(), height: (singleSize[1].replace(/\s/g, "")).toString() });
            }
        }
        return finalsize;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    getAdcode(str) {
        str = str.replace(/\'/g, '');
        str = str.replace(/\\/g, '');
        /** @type {?} */
        var firstIndex = str.indexOf("script") + 10;
        /** @type {?} */
        var lastIndex = str.indexOf("/script>");
        str = str.substring(firstIndex, lastIndex);
        if (str.indexOf('defineSlot') < 0)
            return false;
        /** @type {?} */
        var slot = str.substring(str.indexOf("defineSlot(") + 11, str.indexOf(").addService"));
        /** @type {?} */
        var slotvalue = slot.split(',')[0];
        /** @type {?} */
        var code = {
            slot: slotvalue,
            // sizes: str.substring( str.lastIndexOf("[[")+1,  str.lastIndexOf("]]")+1 ),
            key: str.substring(str.lastIndexOf('setTargeting("') + 14, str.lastIndexOf('",')),
            value: str.substring(str.lastIndexOf('",[') + 4, str.lastIndexOf('])'))
        };
        return code;
    }
    /**
     * @return {?}
     */
    screenDetect() {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        // console.log(this.deviceInfo);
    }
}
AdsDisplayComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-ads-display',
                template: "<!-- <ng-template></ng-template> -->\n           <!-- <ng-template *ngFor=\"let size of finalSlots\">\n                <dfp-size width=\"{{size.width}}\"  height=\"{{size.height}}\"></dfp-size>\n            </ng-template> -->\n<!-- <div class=\"col-md-12 col-sm-12\" *ngIf=\"(collectoionAds[location].type != 'overlay') && (collectoionAds[location].ad_type != 'footer_1')\" > -->\n<div class=\"\" id=\"ads\" *ngIf=\"(collectoionAds[location].type != 'overlay')\" >    \n    <dfp-ad adUnit={{collectoionAds[location].code.slot}} responsive>\n    <div [ngSwitch]=\"location\">\n        <div *ngSwitchCase=\"'header_1'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"468\" [height]=\"60\"></dfp-size>\n            <dfp-size [width]=\"623\" [height]=\"108\"></dfp-size>\n            <dfp-size [width]=\"620\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"742\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"720\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"728\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"728\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"780\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"798\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"900\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"79\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"150\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"119\"></dfp-size>\n            <dfp-size [width]=\"970\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"1000\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"103\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"136\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"102\"></dfp-size>\n            <dfp-size [width]=\"700\" [height]=\"90\"></dfp-size>\n        </div>\n        <div *ngSwitchCase=\"'header_0'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"728\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"60\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"970\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"1000\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"90\"></dfp-size>\n        </div>  \n        <div *ngSwitchCase=\"'content_right_1'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"266\" [height]=\"195\"></dfp-size>\n            <dfp-size [width]=\"166\" [height]=\"600\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"244\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"248\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"300\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"400\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"500\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"600\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"700\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"800\"></dfp-size>\n        </div>         \n\n        <div *ngSwitchCase=\"'content_right_2'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"266\" [height]=\"195\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"248\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"300\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"400\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"500\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"600\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"700\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"800\"></dfp-size>\n        </div>          \n\n        <div *ngSwitchCase=\"'content_right_3'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"266\" [height]=\"195\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"248\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"300\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"400\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"500\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"600\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"700\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"800\"></dfp-size>\n        </div>  \n\n\n        <div *ngSwitchCase=\"'right_site_ad'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"910\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"903\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"800\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"900\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"980\"></dfp-size>\n            <dfp-size [width]=\"160\" [height]=\"800\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1000\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1075\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1080\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1090\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1020\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1105\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1100\"></dfp-size>\n        </div>\n\n        <div *ngSwitchCase=\"'left_site_ad'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"910\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"903\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"800\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"900\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"980\"></dfp-size>\n            <dfp-size [width]=\"160\" [height]=\"800\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1000\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1075\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1080\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1090\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1020\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1105\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1100\"></dfp-size>\n        </div>\n\n        <div *ngSwitchCase=\"'footer_1'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"728\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"60\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"102\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1000\" [height]=\"90\"></dfp-size>\n        </div>  \n\n        <div *ngSwitchDefault >\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"45\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"25\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"37\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"28\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"50\"></dfp-size>\n            <dfp-size [width]=\"250\"  [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"300\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"400\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"500\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"600\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"700\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"800\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"24\"></dfp-size>\n            <dfp-size [width]=\"728\"  [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"960\"  [height]=\"60\"></dfp-size>\n            <dfp-size [width]=\"960\"  [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"102\"></dfp-size>\n            <dfp-size [width]=\"728\"  [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"90\"></dfp-size>\n        </div>\n    </div>\n         \n    <!-- <dfp-size *ngFor=\"let size of finalSlots\"  width=\"{{size.width}}\"    height=\"{{size.height}}\"></dfp-size> -->\n    <dfp-targeting key={{collectoionAds[location].code.key}} value=\"{{collectoionAds[location].code.value !='' ? collectoionAds[location].code.value : 'HOME' }}\" >\n    <!-- <dfp-targeting key={{collectoionAds[location].code.key}} value=\"valueReplace(collectoionAds[location].code.value)\" > -->\n    </dfp-targeting>\n    </dfp-ad>\n</div>\n\n\n<div id=\"overlayAds\" *ngIf=\"((overlayShow) && (overlayAdsData) )\">\n   <CoreLib-ads-overlay [ads]=\"overlayAdsData\" [magazineName]=\"collectoionAds['footer_1'].code.key\" [location]=\"'footer_1'\"></CoreLib-ads-overlay>\n</div>\n\n\n<div id=\"footerAds\" *ngIf=\"(footerAds) && (footerAds.ad_type == 'footer_1') && (footerAds.type == 'doubleclick') && (footerData)\">    \n    <CoreLib-ads-footer [ads]=\"footerAds\" [magazineName]=\"collectoionAds['footer_1'].code.key\"></CoreLib-ads-footer>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AdsDisplayComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] },
    { type: RodmanCoreService },
    { type: ng2_device_detector__WEBPACK_IMPORTED_MODULE_15__["Ng2DeviceService"] }
];
AdsDisplayComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ads/ads-overlay/ads-overlay.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdsOverlayComponent {
    /**
     * @param {?} BsModalService
     * @param {?} sanitizer
     * @param {?} CookieService
     */
    constructor(BsModalService, sanitizer, CookieService) {
        this.BsModalService = BsModalService;
        this.sanitizer = sanitizer;
        this.CookieService = CookieService;
        this.isModalShown = false;
        this.magazine = {
            'NUT': { id: '1', name: 'Nutraceuticals world' },
            'CW': { id: '5', name: 'Coating World' },
            'MPO': { id: '6', name: 'Medical Product Outsourcing' },
            'CP': { id: '7', name: 'Contract Pharma' },
            'BP': { id: '8', name: 'Beauty Packaging' },
            'HAP': { id: '9', name: 'Happi' },
            'INK': { id: '10', name: 'Ink World' },
            'LNW': { id: '11', name: 'Label & Narrow Web' },
            'NON': { id: '13', name: 'Nonwovens Industry' },
            'ODT': { id: '14', name: 'Orthopedic Design & Technology' },
            'PEN': { id: '15', name: 'Printed Electronics Now' },
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isModalShown = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
        }), 15000);
    }
    /**
     * @return {?}
     */
    showModal() {
        this.isModalShown = true;
    }
    /**
     * @return {?}
     */
    hideModal() {
        this.autoShownModal.hide();
    }
    /**
     * @return {?}
     */
    onHidden() {
        this.isModalShown = false;
    }
}
AdsOverlayComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-ads-overlay',
                template: "<!-- <div *ngIf=\"isModalShown && userData\"  [config]=\"{backdrop: 'static',  keyboard: false,show: true }\"  (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\"  class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-auto-name\"> -->\n<!-- <div id=\"overlayAds\"> -->\n    <div (onHidden)=\"onHidden()\"   [config]=\"{backdrop: 'static',  keyboard: false,show: true }\" bsModal #autoShownModal=\"bs-modal\"  class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-auto-name\"  *ngIf=\"ads && isModalShown\">\n        <div class=\"modal-dialog modal-md\">\n            <div class=\"modal-content popup_alert\">\n                <div class=\"popup-btn-box\">\n                    <button type=\"button\" class=\"close popup_close_btn\" aria-label=\"Close\" (click)=\"hideModal()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div> \n\n                <div class=\"\">\n                    <button type=\"button\" class=\"popup_contain close\" aria-label=\"Close\" (click)=\"hideModal()\">\n                        Continue To {{this.magazine[this.magazineName].name}}\n                    </button>\n                </div> \n                <div class=\"modal-body col-sm-12 col-md-12\" >\n                    <dfp-ad adUnit={{ads.code.slot}} responsive>\n                        <dfp-size [width]=\"600\" [height]=\"315\"></dfp-size>\n                        <dfp-size [width]=\"600\" [height]=\"400\"></dfp-size>\n                        <dfp-size [width]=\"640\" [height]=\"480\"></dfp-size>\n                        <dfp-targeting key={{ads.code.key}} value=\"{{ads.code.value != '' ? ads.code.value: 'HOME' }}\"> </dfp-targeting>\n                    </dfp-ad>\n                </div>\n            </div>\n        </div>\n    </div>\n<!-- </div>-->\n",
                styles: [".modal-dialog{max-width:630px!important}.close{font-size:1 rem!important}.popup_contain{padding:15px!important;margin-right:15px}.popup_alert{position:relative!important}.popup_close_btn{border:2px solid #060606!important;border-radius:50%;position:absolute;right:-21px;top:-15px;background-color:#fcf6f6!important}.popup_close_btn span{padding:5px}"]
            }] }
];
/** @nocollapse */
AdsOverlayComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
AdsOverlayComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    magazineName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoShownModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['autoShownModal', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ads/ads-footer/ads-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdsFooterComponent {
    /**
     * @param {?} RodmanCoreService
     * @param {?} Router
     * @param {?} CookieService
     */
    constructor(RodmanCoreService, Router, CookieService) {
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.CookieService = CookieService;
        this.showAds = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AdsFooterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-ads-footer',
                template: "<!-- <div class=\"container\" *ngIf=\"showAds\"> -->\n<div class=\"container\" *ngIf=\"ads\">    \n    <div class=\"text-center middle\">\n        <div class=\"col-md-12 col-sm-12\"  >\n            <dfp-ad adUnit={{ads.code.slot}} responsive>\n                <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n                <dfp-size [width]=\"728\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"960\" [height]=\"60\"></dfp-size>\n                <dfp-size [width]=\"960\" [height]=\"90\"></dfp-size>\n\n                <dfp-size [width]=\"1080\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"1080\" [height]=\"102\"></dfp-size>\n                <dfp-size [width]=\"1100\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"1000\" [height]=\"90\"></dfp-size>\n\n                <dfp-targeting key={{ads.code.key}} value=\"{{ads.code.value != '' ? (ads.code.value=='ome' ? 'HOME' : ads.code.value ) : 'HOME' }}\"> </dfp-targeting>\n            </dfp-ad>\n        </div>\n    </div>    \n </div>\n ",
                styles: [".middle{Width:50%;Height:50px;position:fixed;Bottom:45px;z-index:10000}"]
            }] }
];
/** @nocollapse */
AdsFooterComponent.ctorParameters = () => [
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
AdsFooterComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    magazineName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ads/ads-double-click/ads-double-click.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdsDoubleClickComponent {
    /**
     * @param {?} RodmanCoreService
     * @param {?} Router
     */
    constructor(RodmanCoreService, Router) {
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        // Optinal 
        this.device = 'website';
        this.loading = false;
        // target;
        this.target = 'HOME';
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.name = magazineIds[this.magazineId].id;
        // this.target = this.currentURL.toString().split('/').join(',');
        if (this.currentURL != '') {
            this.target = this.location.toString().split('/').join(',');
        }
        this.loading = true;
    }
}
AdsDoubleClickComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-ads-double-click',
                template: "<div class=\"\" id=\"doubleClick-{{no}}\" *ngIf=\"loading\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_main-content-{{no}}\" responsive>\n        <div [ngSwitch]=\"device\">\n            <div *ngSwitchCase=\"device=='mobile'\">\n                <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"45\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"37\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"58\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"64\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"38\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"25\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"27\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"24\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"47\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"28\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"50\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"45\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"37\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"58\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"64\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"38\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"25\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"27\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"24\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"47\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"28\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"50\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"250\"></dfp-size>\n            </div>\n\n            <div *ngSwitchDefault >\n                <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n                <dfp-size [width]=\"740\" [height]=\"150\"></dfp-size>\n                <dfp-size [width]=\"740\" [height]=\"200\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"60\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"100\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"120\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"60\"></dfp-size>            \n            </div> \n        </div>      \n            \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n\n<div class=\"col-md-12 col-sm-12\" id=\"relatedcontentbox1\" *ngIf=\"(location == 'relatedcontentbox1') && (loading)\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_related-content-box-1\" responsive>\n        <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"150\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"80\"></dfp-size>                   \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n<div class=\"col-md-12 col-sm-12\" id=\"insidecontentbox1\" *ngIf=\"(location == 'insidecontentbox1') && (loading)\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_inside-content-box-1\" responsive>\n        <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n        <dfp-size [width]=\"265\" [height]=\"221\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"80\"></dfp-size>     \n        <dfp-size [width]=\"225\" [height]=\"150\"></dfp-size>  \n        <dfp-size [width]=\"250\" [height]=\"150\"></dfp-size>                \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AdsDoubleClickComponent.ctorParameters = () => [
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AdsDoubleClickComponent.propDecorators = {
    magazineId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    no: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    screenSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ads/ads-home-widget/ads-home-widget.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdsHomeWidgetComponent {
    /**
     * @param {?} RodmanCoreService
     * @param {?} Router
     */
    constructor(RodmanCoreService, Router) {
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.device = 'website';
        this.loading = false;
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.name = magazineIds[this.magazineId].id;
        // this.target = this.currentURL.toString().split('/').join(',');
        if (this.currentURL != '') {
            // this.target = this.location.toString().split('/').join(',');
        }
        this.loading = true;
    }
}
AdsHomeWidgetComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-ads-home-widget',
                template: "<div  id=\"doubleClick-{{no}}\" *ngIf=\"loading\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_main-content-{{no}}\" responsive>\n        <div [ngSwitch]=\"device\">\n            <div *ngSwitchCase=\"'mobile'\">\n                <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"45\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"37\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"58\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"64\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"38\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"25\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"27\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"24\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"47\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"28\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"50\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n            </div>\n\n            <div *ngSwitchDefault >\n                <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n                <dfp-size [width]=\"740\" [height]=\"150\"></dfp-size>\n                <dfp-size [width]=\"740\" [height]=\"200\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"60\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"100\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"120\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"60\"></dfp-size>            \n            </div> \n        </div>      \n            \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n\n<div class=\"col-md-12 col-sm-12\" id=\"relatedcontentbox1\" *ngIf=\"(location == 'relatedcontentbox1') && (loading)\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_related-content-box-1\" responsive>\n        <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"150\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"80\"></dfp-size>                   \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n<div class=\"col-md-12 col-sm-12\" id=\"insidecontentbox1\" *ngIf=\"(location == 'insidecontentbox1') && (loading)\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_inside-content-box-1\" responsive>\n        <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n        <dfp-size [width]=\"265\" [height]=\"221\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"80\"></dfp-size>     \n        <dfp-size [width]=\"225\" [height]=\"150\"></dfp-size>  \n        <dfp-size [width]=\"250\" [height]=\"150\"></dfp-size>                \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AdsHomeWidgetComponent.ctorParameters = () => [
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AdsHomeWidgetComponent.propDecorators = {
    magazineId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    no: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ads/ads.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdsModule {
}
AdsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [AdsDisplayComponent, AdsOverlayComponent, AdsFooterComponent, AdsDoubleClickComponent, AdsHomeWidgetComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                    rodman_orm__WEBPACK_IMPORTED_MODULE_14__["RodmanORMModule"],
                    AdsRoutingModule,
                    ng2_device_detector__WEBPACK_IMPORTED_MODULE_15__["Ng2DeviceDetectorModule"].forRoot(),
                    ngx_dfp__WEBPACK_IMPORTED_MODULE_10__["DfpModule"].forRoot({
                        idleLoad: true,
                        enableVideoAds: true,
                        personalizedAds: true,
                        // Request personalized ads by default
                        singleRequestMode: true,
                        // Only applies to initial refresh
                        onSameNavigation: 'refresh',
                        globalTargeting: {
                        // food: ['NUT', 'HOME']
                        }
                    }),
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
                exports: [AdsDisplayComponent, AdsOverlayComponent, AdsFooterComponent, AdsDoubleClickComponent, AdsHomeWidgetComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sites/components/slider/slider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SliderComponent {
    /**
     * @param {?} config
     * @param {?} RodmanCoreService
     */
    constructor(config, RodmanCoreService) {
        this.RodmanCoreService = RodmanCoreService;
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        config.interval = 2000;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtmlReplace(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
}
SliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-slider',
                template: "<div class=\"border\">\n    <ngb-carousel>\n    <ng-template ngbSlide *ngFor=\"let sliderData of data[0] | slice:0:5; let i =index\">\n        <div class=\"picsum-img-wrapper\">\n            <a [routerLink]=\"[sliderData.viewUrl]\" >\n                <img class=\"slider-img\" [src]=\"getImage(sliderData.primary_image)\" alt=\"No Image\"></a>\n        </div>\n        <div class=\"carousel-caption\">\n            <h3  [innerHTML]=\"safeHtmlReplace(sliderData.title)\"></h3>\n        </div>\n    </ng-template>\n    </ngb-carousel>\n</div>\n",
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
                styles: [".slider-img{width:100%;max-height:450px!important}"]
            }] }
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"] },
    { type: RodmanCoreService }
];
SliderComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sites/sites.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SitesModule {
}
SitesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [NavComponent, AuthenticationComponent, HeaderComponent, FooterComponent, FootersliderComponent, NotFoundComponent, SliderComponent],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    // HttpClient,    
                    SitesRoutingModule,
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__["AngularFontAwesomeModule"],
                    rodman_orm__WEBPACK_IMPORTED_MODULE_14__["RodmanORMModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                    AdsModule
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
                exports: [NavComponent, HeaderComponent, FooterComponent, NotFoundComponent, AuthenticationComponent, SliderComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/home/home-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes$2 = [];
class HomeRoutingModule {
}
HomeRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$2)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/home/components/featured-content/feature-content.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureContentService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @param {?} id
     * @return {?}
     */
    getfetureData(magazineId, id) {
        return this.HttpClient.post(apiURL + 'contentscontroller/getBoxContent', { magazineId: magazineId, id: id }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
FeatureContentService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FeatureContentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ FeatureContentService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function FeatureContentService_Factory() { return new FeatureContentService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: FeatureContentService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/home/components/featured-content/featured-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeaturedContentComponent {
    /**
     * @param {?} FeatureContentService
     * @param {?} RodmanCoreService
     */
    constructor(FeatureContentService, RodmanCoreService) {
        this.FeatureContentService = FeatureContentService;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.FeatureContentService.getfetureData(this.magazineId, this.featured_content_section).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.featuredContentData = data['data'];
            this.featuredContentHeading = data['contentType'];
            this.viewAdRender = 1;
        }));
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    extractNameFromJson(data) {
        return this.RodmanCoreService.extractNameFromJson(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtmlReplace(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
}
FeaturedContentComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                inputs: ['magazineId', 'featured_content_section'],
                selector: 'CoreLib-featured-content',
                template: "<div class=\"d-flex justify-content-center loader-height mt-5 mb-5\" *ngIf= \"featuredContentHeading == null || featuredContentHeading.length === 0\">\n    <div class=\"spinner-border abc\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n<div class=\"container container_box my-5\" *ngIf=\"featuredContentHeading && featuredContentHeading[0]\">\n\n    <div class=\"row content\">    \n        <div class=\"col-sm-12 heading-border\"> \n             <h3 *ngIf=\"featuredContentHeading && featuredContentHeading[0].slug\">{{featuredContentHeading[0].slug.replace('-', ' ')  | uppercase }}</h3>            \n        </div>\n    </div>            \n           \n    <br>\n\n    <div class=\"row content vdivide\">\n        <div class=\"col-sm-8\">\n            <figure>\n                <div class=\"img-hover-zoom img-hover-zoom--slowmo\">\n                    <a [routerLink]=\"[featuredContentData[0].viewUrl]\">\n                        <img class=\"border\" *ngIf=\"featuredContentData && featuredContentData[0]\" [src]=\"getImage(featuredContentData[0].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                    </a>\n                </div>\n                <br>\n                <h4 class=\"text-center pt-2\" *ngIf=\"featuredContentData && featuredContentData[0]\"><a [routerLink]=\"[featuredContentData[0].viewUrl]\">{{safeHtmlReplace(featuredContentData[0].title)}}</a></h4>\n                <p class=\"text-center\"><small *ngIf=\"featuredContentData && featuredContentData[0].author_name\"> <b>\n                    {{extractNameFromJson(featuredContentData[0].author_name)}} </b></small></p>\n            </figure>\n        </div>\n        \n        <div class=\"col-sm-4\">      \n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <figure>\n                        <a [routerLink]=\"[featuredContentData[1].viewUrl]\">\n                            <img class=\"img-responsive\" *ngIf=\"featuredContentData && featuredContentData[1]\" [src]=\"getImage(featuredContentData[1].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                        </a>\n                        <div class=\"ml-3 pt-1\">\n                            <h4 *ngIf=\"featuredContentData && featuredContentData[1]\"><a [routerLink]=\"[featuredContentData[1].viewUrl]\">{{safeHtmlReplace(featuredContentData[1].title)}}</a></h4>\n                            <small *ngIf=\"featuredContentData && featuredContentData[1].author_name\"> <b>{{extractNameFromJson(featuredContentData[1].author_name)}} </b></small>\n                        </div>\n                    </figure>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <figure>\n                        <a [routerLink]=\"[featuredContentData[2].viewUrl]\">\n                           <img class=\"img-responsive\" *ngIf=\"featuredContentData && featuredContentData[2]\" [src]=\"getImage(featuredContentData[2].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\">  \n                        </a> \n                        <div class=\"ml-3 pt-1\"> \n                            <h4 *ngIf=\"featuredContentData && featuredContentData[2]\" ><a [routerLink]=\"[featuredContentData[2].viewUrl]\">{{safeHtmlReplace(featuredContentData[2].title)}}</a></h4>\n                            <small  *ngIf=\"featuredContentData && featuredContentData[2].author_name\"> <b>{{extractNameFromJson(featuredContentData[2].author_name)}} </b></small>\n                        </div>\n                    </figure>\n                </div>        \n            </div>      \n        </div>\n    </div>  \n\n    <br><hr>\n    <div class=\"row\"> \n        <div class=\"col-sm-8 col-md-8\" >\n            <div class=\"row content\">\n                <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-md-3 col-xs-3 image-container\">\n                            <a [routerLink]=\"[featuredContentData[3].viewUrl]\">\n                                <img class=\"img-res\" *ngIf=\"featuredContentData && featuredContentData[3]\" [src]=\"getImage(featuredContentData[3].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                            </a>    \n                        </div>\n                        <div class=\"col-sm-9 col-md-9 col-xs-9\">     \n                            <h6 *ngIf=\"featuredContentData && featuredContentData[3]\" ><a [routerLink]=\"[featuredContentData[3].viewUrl]\">{{safeHtmlReplace(featuredContentData[3].title)}}</a></h6>\n                            <p class=\"feature-summary\" *ngIf=\"featuredContentData && featuredContentData[3]\" >{{safeHtmlReplace(featuredContentData[3].summary)}}</p>\n                            <small *ngIf=\"featuredContentData && featuredContentData[3].author_name\"> <b>{{extractNameFromJson(featuredContentData[3].author_name)}} </b></small>\n                        </div>\n                    </div>\n                </div>            \n                <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4 col-md-4 col-xs-4 image-container\">\n                            <a [routerLink]=\"[featuredContentData[4].viewUrl]\">\n                                <img class=\"img-res\" *ngIf=\"featuredContentData && featuredContentData[4]\" [src]=\"getImage(featuredContentData[4].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                            </a>    \n                        </div>\n                        <div class=\"col-sm-8 col-md-8 col-xs-8 \"> \n                            <h6 *ngIf=\"featuredContentData && featuredContentData[4]\"><a [routerLink]=\"[featuredContentData[4].viewUrl]\">{{safeHtmlReplace(featuredContentData[4].title)}}</a></h6>\n                            <p *ngIf=\"featuredContentData && featuredContentData[4]\" class=\"feature-summary\">{{safeHtmlReplace(featuredContentData[4].summary)}}</p>\n                            <small  *ngIf=\"featuredContentData && featuredContentData[4].author_name\"> <b>{{extractNameFromJson(featuredContentData[4].author_name)}} </b></small>\n                        </div>\n                    </div>\n                </div>\n            </div>  \n\n            <br>\n\n            <div class=\"row content\">\n                <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-md-3 col-xs-3 image-container\">\n                            <a [routerLink]=\"[featuredContentData[5].viewUrl]\">    \n                                <img class=\"img-res\" *ngIf=\"featuredContentData && featuredContentData[5]\" [src]=\"getImage(featuredContentData[5].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                            </a>    \n                        </div>\n                        <div class=\"col-sm-9 col-md-9 col-xs-9\">     \n                            <h6 *ngIf=\"featuredContentData && featuredContentData[5]\"><a [routerLink]=\"[featuredContentData[5].viewUrl]\">{{safeHtmlReplace(featuredContentData[5].title)}}</a></h6>\n                            <p *ngIf=\"featuredContentData && featuredContentData[5]\" class=\"feature-summary\">{{safeHtmlReplace(featuredContentData[5].summary)}}</p>\n                            <small *ngIf=\"featuredContentData && featuredContentData[5].author_name\"> <b>{{extractNameFromJson(featuredContentData[5].author_name)}} </b></small>\n                        </div>\n                    </div>\n                </div>                   \n            \n                <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4 col-md-4 col-xs-4 image-container\">\n                            <a [routerLink]=\"[featuredContentData[6].viewUrl]\">\n                                <img class=\"img-res\" *ngIf=\"featuredContentData && featuredContentData[6]\" [src]=\"getImage(featuredContentData[6].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                            </a>    \n                        </div>\n                        <div class=\"col-sm-8 col-md-8 col-xs-8 \"> \n                            <h6 *ngIf=\"featuredContentData && featuredContentData[6]\"><a [routerLink]=\"[featuredContentData[6].viewUrl]\">{{safeHtmlReplace(featuredContentData[6].title)}}</a></h6>\n                            <p *ngIf=\"featuredContentData && featuredContentData[6]\" class=\"feature-summary\">{{safeHtmlReplace(featuredContentData[6].summary)}}</p>\n                            <small  *ngIf=\"featuredContentData && featuredContentData[6].author_name\"> <b>{{extractNameFromJson(featuredContentData[6].author_name)}} </b></small>\n                        </div>\n                    </div>\n                </div>     \n            </div>   \n\n        </div>   \n        <div class=\"col-sm-4 col-md-4\" >\n                <div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"(viewAdRender == 1) && (getAllAd)\" >\n                    <CoreLib-ads-display [ads]=\"getAllAd\" location=\"{{location}}\"></CoreLib-ads-display>\n                    <!-- {{location}} -->\n                </div>\n        </div> \n    </div>\n\n\n</div>\n<!-- end show Data -->\n",
                styles: [".loader-height{min-height:450px}.container_box{width:100%!important;max-width:90%!important}.heading-border{border-bottom:1px solid;border-top:4px solid}.heading-border h3{padding:10px!important}.row.vdivide [class*=col-]:not(:last-child):after{background:#e0e0e0;width:1px;content:\"\";display:block;position:absolute;top:0;bottom:0;right:0;min-height:70px}.img-hover-zoom{height:100%;width:100%;overflow:hidden}.img-hover-zoom--slowmo img{-webkit-transform-origin:50% 65%;transform-origin:50% 65%;-webkit-transition:-webkit-transform 5s,-webkit-filter 3s ease-in-out;transition:transform 5s,filter 3s ease-in-out,-webkit-transform 5s,-webkit-filter 3s ease-in-out}.img-hover-zoom--slowmo:hover img{-webkit-filter:brightness(100%);filter:brightness(100%);-webkit-transform:scale(2);transform:scale(2)}.feature-summary{font-size:10px;color:#03225c}"]
            }] }
];
/** @nocollapse */
FeaturedContentComponent.ctorParameters = () => [
    { type: FeatureContentService },
    { type: RodmanCoreService }
];
FeaturedContentComponent.propDecorators = {
    getAllAd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/home/components/home-slider/home-slider.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HomeSliderService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @param {?} id
     * @return {?}
     */
    getHomeSlider(magazineId, id) {
        return this.HttpClient.post(apiURL + 'contentsController/getHomeSliderContent', { magazineId: magazineId, id: id }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
HomeSliderService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HomeSliderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ HomeSliderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function HomeSliderService_Factory() { return new HomeSliderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: HomeSliderService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/home/components/home-slider/home-slider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HomeSliderComponent {
    /**
     * @param {?} HomeSliderService
     * @param {?} config
     * @param {?} RodmanCoreService
     */
    constructor(HomeSliderService, config, RodmanCoreService) {
        this.HomeSliderService = HomeSliderService;
        this.RodmanCoreService = RodmanCoreService;
        this.loading = true;
        config.interval = 3000;
        // config.showNavigationArrows = false;
        // config.showNavigationIndicators = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.HomeSliderService.getHomeSlider(this.magazineId, this.homeBoxId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.homeSliderData = data['data'];
            this.loading = false;
        }));
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtmlReplace(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
}
HomeSliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                inputs: ['magazineId', 'homeBoxId'],
                selector: 'CoreLib-home-slider',
                template: "<div class=\"d-flex justify-content-center mt-5 mb-5 loader-height\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n<div class=\"border slider-arrow\">\n    <ngb-carousel>\n        <ng-template ngbSlide *ngFor=\"let sliderData of homeSliderData; let i =index\">\n            <div class=\"picsum-img-wrapper\">\n                <a [routerLink]=\"[sliderData.viewUrl]\" >\n                    <!-- <img [src]=\"sliderData.primary_image_main\" alt=\"No Image\"> -->\n                    <img  [src]=\"getImage(sliderData.primary_image)\" alt=\"No Image\">\n                </a>\n            </div>\n            <div class=\"carousel-caption\">\n                <h3>{{safeHtmlReplace(sliderData.title)}}</h3>\n            </div>\n        </ng-template>\n    </ngb-carousel>\n</div>     \n\n\n       \n",
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
                styles: [".picsum-img-wrapper img{width:100%!important}.carousel-caption h3{color:#000}.carousel-control-next-icon,.carousel-control-prev-icon{color:#000!important}.carousel-control-next-icon:after{content:'>';font-size:55px;color:#000!important}.carousel-control-prev-icon:after{content:'<';font-size:55px;color:#000!important}.loader-height{min-height:100px}"]
            }] }
];
/** @nocollapse */
HomeSliderComponent.ctorParameters = () => [
    { type: HomeSliderService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"] },
    { type: RodmanCoreService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/home/home.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HomeModule {
}
HomeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [FeaturedContentComponent, HomeSliderComponent],
                imports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    AdsModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__["AngularFontAwesomeModule"],
                    HomeRoutingModule,
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                ],
                exports: [FeaturedContentComponent, HomeSliderComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/contents-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes$3 = [];
class ContentsRoutingModule {
}
ContentsRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$3)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/list-content/list-content.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListContentService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} slug
     * @param {?} magazineId
     * @param {?} limit
     * @param {?} page
     * @param {?} contentType
     * @return {?}
     */
    getContent(slug, magazineId, limit, page, contentType) {
        return this.HttpClient.post(apiURL + 'taxonomysController/getContentTypeContent', { pageUrl: slug, magazineId: magazineId, limit: limit, page: page, contentType: contentType }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} slug
     * @param {?} magazineId
     * @return {?}
     */
    getContentTopTaxonomy(slug, magazineId) {
        return this.HttpClient.post(apiURL + 'taxonomysController/getContentTypeTopTaxonomy', { pageUrl: slug, magazineId: magazineId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
ListContentService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ListContentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ ListContentService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ListContentService_Factory() { return new ListContentService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: ListContentService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/list-content/list-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListContentComponent {
    /**
     * @param {?} Router
     * @param {?} ListContentService
     * @param {?} RodmanCoreService
     */
    constructor(Router, ListContentService, RodmanCoreService) {
        this.Router = Router;
        this.ListContentService = ListContentService;
        this.RodmanCoreService = RodmanCoreService;
        this.listContentData = [];
        this.limit = 10;
        this.page = 0;
        this.contentType = '';
        this.loading = true;
        this.staticUrl = '/';
        this.sliderData = [];
        this.counterAd = 1;
        this.all = [];
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.getContentData();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if ((this.magazineId == 1) || (this.magazineId == 5)) {
            this.staticUrl = '/knowledge-center/';
        }
        this.loading = true;
        this.page = 0;
        this.slugHeading;
        this.all = [];
        this.sliderData = [];
        this.listContentData = [];
        this.contentTaxonomy = [];
        this.getContentData();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
    /**
     * @return {?}
     */
    getContentData() {
        this.taxonomyUrl = this.routeUrl.split('/');
        this.taxonomyUrl = (this.taxonomyUrl[this.taxonomyUrl.length - 1]);
        /** @type {?} */
        let url = this.taxonomyUrl.split('_');
        this.taxonomyUrlTo = url[1];
        if (this.page == 0) {
            this.ListContentService.getContentTopTaxonomy(this.routeUrl, this.magazineId).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                // this.slugHeading = data['contentTypeName'];
                this.contentTaxonomy = data['CONTENT_TAXONOMYS'];
                this.all = data['all'];
            }));
        }
        this.ListContentService.getContent(this.routeUrl, this.magazineId, this.limit, this.page, this.contentType).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.contentData = data['data'];
            if (this.page == 0) {
                this.slugHeading = data['contentTypeName'];
                // this.contentTaxonomy = data['CONTENT_TAXONOMYS'];
                this.sliderData.push(this.contentData);
            }
            this.page = data['page'] + 1;
            for (let content of this.contentData) {
                this.listContentData.push(content);
            }
            this.loading = false;
        }));
    }
    /**
     * @return {?}
     */
    loadMoreData() {
        this.loading = true;
        this.getContentData();
    }
    /**
     * @return {?}
     */
    removeContentType() {
        this.contentType = '';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    extractNameFromJson(data) {
        return this.RodmanCoreService.extractNameFromJson(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    bodyCharacterLength(data) {
        return this.RodmanCoreService.bodyCharacterLength(data);
    }
}
ListContentComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-lists-contents',
                inputs: ['routeUrl', 'magazineId', 'contentType'],
                template: "<div class=\"container mt-5\" *ngIf=\"slugHeading  && (contentType!='2542') && (routeUrl != '/contents/list_industry-events')  && (routeUrl != '/contents/list_ebook')\">\n    <div class=\"row\" >\n        <div class=\"col-md-12 col-sm-12\" >\n            <CoreLib-slider [data]=\"sliderData\"></CoreLib-slider>\n        </div>\n    </div>\n    <!-- Page Heading -->\n    <div class=\"mb-2\" id=\"url\"><h2>{{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>\n     <!--Top Taxonomy  -->\n        <span *ngIf=\"all.tag\">\n            <span class=\"taxonomy-text\" ><a  [routerLink]=\"['/'+all.url]\">{{all.tag}}</a></span> \n        </span>    \n        <span  *ngFor=\"let taxonomyTitle of contentTaxonomy;let k = index;\" class=\"taxonomy-text\" >\n            <a  [routerLink]=\"[staticUrl+taxonomyTitle.slug+'/view_'+taxonomyUrlTo]\">{{taxonomyTitle.tag}}</a>      \n        </span>    \n    <div class=\"heading-border\"></div>\n    <!-- List Data -->\n    <div *ngIf=\"listContentData?.length > 0\"  >\n        <div  *ngFor=\"let Data of listContentData; let i =index; let k = index\" >        \n            <div class=\"col-md-12 col-sm-12\">\n                <div class=\"row\">         \n                    <div class=\"col-md-12 col-sm-12\">\n                        <span *ngFor=\"let taxonomy of Data.taggedTaxonomy.KNOWLEDGE_CENTER_TAXONOMY | slice:0:5; let j =index\">\n                            <span *ngIf=\"j\"> | </span> \n                            <a  [routerLink]=\"[staticUrl+taxonomy.url]\"  > {{taxonomy.tag}}</a>         \n                        </span>        \n                    </div> \n                    \n                    <div class=\"col-md-9 col-sm-9\">\n                       \n                        <h4 class=\"mt-2\"><a [routerLink]=\"[Data.viewUrl]\">\n                            <b><div [innerHTML]=\"safeHtml(Data.title)\"> </div></b>\n                        </a></h4> \n                        <h6 class=\"mt-3\" *ngIf=\"Data.summary\" [innerHTML]=\"safeHtml(Data.summary)\"></h6>\n                        <h6 class=\"mt-3\" *ngIf=\"((!Data.summary) && (Data.body))\" [innerHTML]=\"bodyCharacterLength(Data.body)\"></h6>\n                        <div class=\"mt-2\">                             \n                            <span *ngIf=\"Data.author_name\"> {{extractNameFromJson(Data.author_name)}} </span>\n                            <span *ngIf=\"Data.companyDetail\">  <small  *ngIf=\"Data.companyDetail.title\"> <b> {{Data.companyDetail.title}}</b> . </small> </span> \n                            <small *ngIf=\"Data.publish_date\"> {{ Data.publish_date| date : \"MMM dd , yyyy\"}} . </small>\n                        </div>    \n                    </div>\n                    <div class=\"col-md-3 col-sm-3\" *ngIf=\"Data.primary_image\">\n                             <img class=\"img-scale\" [src]=\"getImage(Data.primary_image)\" alt=\"\"> \n                    </div>\n                </div>\n            </div>  \n\n            <div id=\"ads\" *ngIf=\"(k % 3 == 0) && (k > 2)\" ><hr>\n                <div class=\"col-md-12 col-sm-12\">\n                    <div class=\"row\" > \n                        <CoreLib-ads-double-click magazineId={{magazineId}} no=\"1\" location={{currentURL}}></CoreLib-ads-double-click>\n                    </div>\n                </div>\n            </div><hr>         \n        </div>   \n    </div>         \n</div>\n    \n    <!-- Webinars , ebook -->\n<div class=\"container mt-5\" *ngIf=\"(!loading)  && ((contentType=='2542' && (routeUrl == '')) || (routeUrl == '/contents/list_ebook') )\">   \n    <div class=\"heading-border mb-2\" id=\"webinars\"><h2>{{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>\n    \n    <div class=\"border-bottom\" *ngFor=\"let Data of listContentData; let i =index\" >\n        <div class=\"row\">\n            <div class=\"col-sm-2 col-md-2\"><img class=\"img-responsive Webinars\"  [src]=\"getImage(Data.primary_image)\" alt=\"No Image\"> </div>\n            <div class=\"col-sm-10 col-md-10\">\n                <h1><div [innerHTML]=\"safeHtml(Data.title)\"> </div></h1>\n                <div [innerHTML]=\"Data.body\"></div>\n            </div>\n        </div>   \n    </div>\n</div> \n\n    <!-- Industry events -->\n<div class=\"container mt-5\"*ngIf=\"(!loading)  && (routeUrl == '/contents/list_industry-events')\">   \n    <div class=\"mb-2\"><h2>{{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>   \n    <div class=\"heading-border\"></div>\n    <div *ngIf=\"listContentData?.length > 0\" >\n        <div  *ngFor=\"let Data of listContentData; let i =index\" >\n            <div class=\"col-md-12 col-sm-12\">                \n                <div><h4 class=\"mt-2\"><b><div [innerHTML]=\"safeHtml(Data.title)\"> </div></b></h4> <br></div>\n                <div><h5>{{ Data.start_date| date : \"MMM dd , yyyy\"}}</h5></div>\n                <div><b>Location: </b>{{Data.location}}</div>\n                <div><b>Contact:</b> {{Data.contact}}</div>\n                <div><b>Phone: </b> {{Data.phone}}</div>       \n                <div><b>Website:</b> {{Data.website}}</div>\n                <div><b>Email:</b>{{Data.email}}</div>\n            </div>   \n            <hr> \n        </div>   \n    </div> \n</div> \n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n<div class=\"container mt-5 mb-3\" *ngIf=\"listContentData?.length > 0  && contentType!='2542' && (routeUrl != '/contents/list_industry-events') && (routeUrl != '/contents/list_ebook')\">\n    <div class=\"row\" *ngIf=\"contentData?.length > 9 \"> \n        <div class=\"col-md-4 col-sm-4\"></div>\n            <div class=\"col-md-4 col-sm-4\">    <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button></div>\n        <div class=\"col-md-4 col-sm-4\"></div>\n    </div>   \n</div>",
                styles: [".img-scale{max-width:150px}.heading-border{border-bottom:1px solid #000;color:#000}.taxonomy-text{font-size:15px;background-color:#f2f2f2;font-weight:501;text-transform:uppercase;margin-right:15px;margin-bottom:10px;display:inline-block;letter-spacing:1px}.loader-height{min-height:800px}.Webinars{max-width:100%;min-width:100px}#ads,.taxonomy-text a{padding:10px}"]
            }] }
];
/** @nocollapse */
ListContentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ListContentService },
    { type: RodmanCoreService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/static-content/static-content.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StaticContentService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} slug
     * @param {?} magazineId
     * @param {?} limit
     * @param {?} page
     * @param {?} contentType
     * @return {?}
     */
    getStaticContent(slug, magazineId, limit, page, contentType) {
        /** @type {?} */
        let slugs = slug.replace('/', '');
        return this.HttpClient.post(apiURL + 'taxonomysController/getContentTaxonomys', { pageUrl: slugs, magazineId: magazineId, limit: limit, page: page, contentType: contentType }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
StaticContentService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
StaticContentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ StaticContentService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function StaticContentService_Factory() { return new StaticContentService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: StaticContentService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/static-content/static-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StaticContentComponent {
    /**
     * @param {?} StaticContentService
     * @param {?} Router
     * @param {?} ActivatedRoute
     * @param {?} RodmanCoreService
     */
    constructor(StaticContentService, Router, ActivatedRoute, RodmanCoreService) {
        this.StaticContentService = StaticContentService;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.RodmanCoreService = RodmanCoreService;
        this.limit = 30;
        this.page = 0;
        this.contentType = '';
        this.getAllAd = [];
        this.loading = true;
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.routeUrl = event.url;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ActivatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.magazineId = data.magazineId;
        }));
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        })));
        this.getStatic();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // this.getStatic();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        return this.RodmanCoreService.safeHtml(data);
    }
    /**
     * @return {?}
     */
    getStatic() {
        this.StaticContentService.getStaticContent(this.routeUrl, this.magazineId, this.limit, this.page, this.contentType).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.staticContentData = data['data'];
            this.loading = false;
        }));
    }
}
StaticContentComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-static-content',
                template: "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5\">\n            <div class=\"row\">\n                <div class=\"col-md-8\"  *ngIf=\"staticContentData\">\n                    <h1 *ngIf=\"staticContentData[0]\">{{staticContentData[0].title}}</h1>\n                    <hr>    \n                    <div *ngIf=\"staticContentData[0]\" [innerHTML]=\"safeHtml(staticContentData[0].body)\"> </div>   \n                                              \n                    <!-- <div *ngIf=\"staticContentData[0]\" [innerHTML]=\"staticContentData[0].body\"> </div> -->\n                    <!-- <div *ngIf=\"staticContentData[0]\">{{staticContentData[0].body}}</div> -->\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n        \n            ",
                styles: [""]
            }] }
];
/** @nocollapse */
StaticContentComponent.ctorParameters = () => [
    { type: StaticContentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: RodmanCoreService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-view/content-view.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentViewService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @param {?} contentUrl
     * @return {?}
     */
    getContentDetails(magazineId, contentUrl) {
        // contentUrl ='/issues/2019-03-01/view_features/the-conductive-ink-and-materials-market-42752';
        return this.HttpClient.post(apiURL + 'taxonomysController/getViewContent', { magazineId: magazineId, contentUrl: contentUrl }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
ContentViewService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ContentViewService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ ContentViewService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ContentViewService_Factory() { return new ContentViewService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: ContentViewService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-box-tabs/content-box-tabs.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentBoxTabsService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @param {?} id
     * @return {?}
     */
    getTopRightWidget(magazineId, id) {
        return this.HttpClient.post(apiURL + 'contentscontroller/getBoxContent', { magazineId: magazineId, id: id }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
ContentBoxTabsService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ContentBoxTabsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ ContentBoxTabsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ContentBoxTabsService_Factory() { return new ContentBoxTabsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: ContentBoxTabsService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-view/content-view.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = [];
/** @type {?} */
const contentDataView = [
    { status: 'Fail', data: ɵ0, message: '', video: [], magazine_id: '' },
];
class ContentViewComponent {
    /**
     * @param {?} ViewContentService
     * @param {?} config
     * @param {?} ContentBoxTabService
     * @param {?} RodmanCoreService
     * @param {?} Router
     */
    constructor(ViewContentService, config, ContentBoxTabService, RodmanCoreService, Router) {
        this.ViewContentService = ViewContentService;
        this.ContentBoxTabService = ContentBoxTabService;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.getAllAd = [];
        this.dataFetch = false;
        this.displayDefault = 0;
        this.contentDataView = contentDataView;
        this.selectedContentView = contentDataView[0];
        this.loading = true;
        this.dataFetch = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.viewData();s
    }
    /**
     * @param {?} contentDataView
     * @return {?}
     */
    selectView(contentDataView) {
        this.selectedContentView = contentDataView;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.getads();
        this.viewData();
    }
    /**
     * @return {?}
     */
    viewData() {
        // if((this.dataFetch)==false){ 
        this.ViewContentService.getContentDetails(this.magazineId, this.contentPageUrl).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.dataFetch = true;
            this.contentData = data['data'];
            this.contentDataView[0] = data['data'];
            this.page = data['data'].slug;
            this.displayDefault = 1;
            this.loading = false;
        }));
        // }
    }
    /**
     * @return {?}
     */
    check() {
        this.dataFetch = false;
    }
    /**
     * @return {?}
     */
    getads() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.getAllAd = data;
        })));
    }
}
ContentViewComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-view',
                inputs: ['magazineId', 'contentPageUrl'],
                template: "            <div [ngSwitch]=\"page\">\n                <div *ngSwitchCase=\"'jobs'\">\n                        <CoreLib-content-jobs [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-jobs> \n                </div>\n                <div *ngSwitchCase=\"'features'\">\n                        <CoreLib-content-feature [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-feature>\n                </div>\n                <div *ngSwitchCase=\"'videos'\">\n                        <CoreLib-content-video [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-video>\n                </div>      \n                <div *ngSwitchCase=\"'webinars'\">\n                        <CoreLib-content-webinars  [ads]=\"getAllAd\"          \n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-webinars>\n                </div> \n                <div *ngSwitchCase=\"'formulary'\">\n                        <CoreLib-content-formulary [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-formulary>\n                </div>     \n                <div *ngSwitchCase=\"'infographics'\">\n                        <CoreLib-content-infographics [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-infographics>\n                </div> \n                <div *ngSwitchCase=\"'buyers-guide-companies'\">\n                        <CoreLib-content-buyer-guide-basic  [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-buyer-guide-basic> \n                </div> \n                <div *ngSwitchCase=\"'slideshows'\">\n                        <CoreLib-content-slide-show [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-slide-show>\n                </div> \n                <div *ngSwitchCase=\"'static-content'\">\n                        <CoreLib-content-static-content [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-static-content>\n                </div> \n                <div *ngSwitchCase=\"'white-papers-tech-papers'\">\n                        <CoreLib-content-white-paper  \n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-white-paper>\n                </div> \n                <div *ngSwitchCase=\"'news-releases'\">\n                        <CoreLib-content-news-release \n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-news-release>\n                </div> \n         \n                <div *ngSwitchDefault>\n                    <div *ngIf=\"displayDefault\">\n                            <CoreLib-content-default [ads]=\"getAllAd\"\n                            [ContentInterface]=\"contentDataView\" \n                            (select)=\"selectView($event)\">></CoreLib-content-default>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"check()\"></div>\n\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n            \n<!-- \n          <ng-template #Default>\n                <ng-container> \n                    <div>\n                         hello\n                    </div>\n                </ng-container> \n           </ng-template>\n\n    -->\n   ",
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
                styles: [".content-color{color:#fff!important;text-align:center}.hide{display:none!important}.line{border-top:1px solid}"]
            }] }
];
/** @nocollapse */
ContentViewComponent.ctorParameters = () => [
    { type: ContentViewService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"] },
    { type: ContentBoxTabsService },
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-dynamic-view.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentDynamicViewComponent {
    /**
     * @param {?} sanitizer
     * @param {?} RodmanCoreService
     * @param {?} Router
     */
    constructor(sanitizer, RodmanCoreService, Router) {
        this.sanitizer = sanitizer;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.ContentInterface = [];
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getAllAd = [];
        // super(sanitizer,RodmanCoreService,Router);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} ContentInterface
     * @param {?} ContentAdsInterface
     * @return {?}
     */
    selectView(ContentInterface, ContentAdsInterface) {
        this.select.emit(ContentInterface);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    extractNameFromJson(obj) {
        return this.RodmanCoreService.extractNameFromJson(obj);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    videoURL(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        return this.RodmanCoreService.safeHtml(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtmlReplace(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
}
ContentDynamicViewComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-dynamic-view',
                template: ``,
                styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
            }] }
];
/** @nocollapse */
ContentDynamicViewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ContentDynamicViewComponent.propDecorators = {
    ContentInterface: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ContentAdsInterface: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-infographics.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentInfographicsComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentInfographicsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-infographics',
                template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n    \n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div *ngIf=\"ContentInterface\">\n                <div class=\"container mb-3 mt-4\" id=\"infographics\"  *ngFor=\"let contentData of ContentInterface\">\n                    <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                    <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                    <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                    <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1\">\n                        <b>{{ extractNameFromJson(contentData.author_name) }} {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-12 body-min-height\" [innerHtml]=\"safeHtml(contentData.body)\"></div>\n                    <div class=\"col-sm-12 col-md-12\" >\n                        <img  [src]=\"contentData.primary_image_main\" alt=\"No Image\" class=\"img-scale mb-2\">\n                    </div>\n                    <div class=\"col-sm-12 col-md-12\" >\n                        <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n                        <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n                    </div>\n\n                </div>                   \n            </div> \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n",
                styles: [`
    .line{
      border-top: 1px solid;
    }
  `]
            }] }
];
ContentInfographicsComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-search/content-search.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentSearchService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @return {?}
     */
    refineContentList(magazineId) {
        return this.HttpClient.post(apiURL + 'contentsController/getContentType', { magazineId: magazineId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} search
     * @param {?} page
     * @param {?} limit
     * @param {?} magazineId
     * @param {?} searchDateFrom
     * @param {?} searchDateTo
     * @param {?} contentTypeId
     * @return {?}
     */
    SearchContent(search, page, limit, magazineId, searchDateFrom, searchDateTo, contentTypeId) {
        return this.HttpClient.post(apiURL + 'contentsController/getSearchContent', { search: search, page: page, limit: limit, magazineId: magazineId, searchDateFrom: searchDateFrom, searchDateTo: searchDateTo, contentTypeId: contentTypeId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} search
     * @param {?} page
     * @param {?} limit
     * @param {?} magazineId
     * @param {?} searchDateFrom
     * @param {?} searchDateTo
     * @param {?} contentTypeId
     * @return {?}
     */
    SearchCompany(search, page, limit, magazineId, searchDateFrom, searchDateTo, contentTypeId) {
        return this.HttpClient.post(apiURL + 'contentsController/getSearchBgCompanies', { search: search, page: page, limit: limit, magazineId: magazineId, searchDateFrom: searchDateFrom, searchDateTo: searchDateTo, contentTypeId: contentTypeId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
ContentSearchService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ContentSearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ ContentSearchService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ContentSearchService_Factory() { return new ContentSearchService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: ContentSearchService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-search/content-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentSearchComponent {
    /**
     * @param {?} calendar
     * @param {?} RodmanCoreService
     * @param {?} Router
     * @param {?} ContentSearchService
     * @param {?} ActivatedRoute
     */
    constructor(calendar, RodmanCoreService, Router, ContentSearchService, ActivatedRoute) {
        this.calendar = calendar;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.ContentSearchService = ContentSearchService;
        this.ActivatedRoute = ActivatedRoute;
        this.page = 0;
        this.limit = 10;
        this.anySlug = '';
        this.slugCheck = false;
        this.contentList = [];
        this.getAllAd = [];
        this.loading1 = true;
        this.loading2 = true;
        this.loadMoreCheck = true;
        this.searchFiled = 'all';
        this.selectedProduct = 'all';
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.routeUrl = event.url;
                this.contentList = [];
                this.ActivatedRoute.params.subscribe((/**
                 * @param {?} params
                 * @return {?}
                 */
                params => {
                    this.page = 0;
                    this.anySlug = params['any'];
                    this.searchSlug = params['slug'];
                }));
                this.getSearchData();
            }
        }));
        this.ActivatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.magazineId = data.magazineId;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.magazineId == 1) {
            this.staticUrl = 'knowledge-center/';
        }
        this.getRefineData();
        this.getPageAds();
        //   this.ActivatedRoute.params.subscribe(params => {
        //     this.page=0;
        //     this.anySlug = params['any'];
        //     this.searchSlug = params['slug'];   
        //  });
        //  this.getSearchData();
        //  this.getRefineData();  
    }
    /**
     * @return {?}
     */
    selectData() {
        if (this.refineContentList) {
            this.getRefineData();
        }
    }
    /**
     * @return {?}
     */
    getRefineData() {
        this.ContentSearchService.refineContentList(this.magazineId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.refineContentList = data['country'];
        }));
    }
    /**
     * @return {?}
     */
    searchSelectFilter() {
        // this.searchFiled=(this.searchSlug!='') ? this.searchSlug : 'all' ;
        // if(this.searchFiled==='undefined' || this.searchFiled==''){
        //   this.searchFiled=this.searchSlug;
        // }
        this.page = 0;
        if ((this.selectedProduct === 'undefined' || this.selectedProduct == '')) {
            this.selectedProduct = "all";
        }
        this.Router.navigateByUrl('/contents/searchcontent/' + this.selectedProduct + '/' + this.searchFiled);
        // this.getSearchData();
    }
    /**
     * @return {?}
     */
    searchDateFilter() {
        this.page = 0;
        this.getSearchData();
    }
    /**
     * @return {?}
     */
    searchTextFilter() {
        this.page = 0;
        if (this.searchFiled === 'undefined' || this.searchFiled == '') {
            this.searchFiled = this.searchSlug;
            this.anySlug = 'all';
        }
        this.Router.navigateByUrl('/contents/searchcontent/' + this.anySlug + '/' + this.searchFiled);
    }
    /**
     * @return {?}
     */
    getSearchData() {
        if (this.loadMoreCheck) {
            this.ContentSearchService.SearchCompany(this.searchSlug, this.page, this.limit, this.magazineId, this.dateFrom, this.dateTo, this.selectedProduct).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.companyDataList = data['bgTopCompanies'];
                this.comapnyCategory = data['bgCategories'];
                this.micrositeCompany = this.companyDataList.filter((/**
                 * @param {?} map
                 * @return {?}
                 */
                function (map) {
                    return map.has_featured_mircosite_listing == 1;
                }));
                this.featuredComapny = this.companyDataList.filter((/**
                 * @param {?} map
                 * @return {?}
                 */
                function (map) {
                    return map.has_featured_mircosite_listing == 0;
                }));
            }));
            this.loading2 = false;
        }
        this.selectedProduct = (this.selectedProduct == 'all') ? "" : this.selectedProduct;
        this.ContentSearchService.SearchContent(this.searchSlug, this.page, this.limit, this.magazineId, this.dateFrom, this.dateTo, this.selectedProduct).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.putContentList = data['data'];
            for (let content of this.putContentList) {
                this.contentList.push(content);
            }
            this.page = data['page'] + 1;
        }));
        // setTimeout(function(){
        //   this.loading1 = false;
        // },6000);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.loading1 = false;
        }), 10000);
    }
    /**
     * @return {?}
     */
    spinnerHide() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    bodyCharacterLength(data) {
        return this.RodmanCoreService.bodyCharacterLength(data);
    }
    /**
     * @return {?}
     */
    loadMoreData() {
        this.loading1 = true;
        this.loadMoreCheck = false;
        this.getSearchData();
    }
    /**
     * @return {?}
     */
    getPageAds() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        })));
    }
    // Date Option
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isInside(date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isRange(date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    }
}
ContentSearchComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-search',
                template: "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8 mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Search For:</b></h6> </div>\n                                <div class=\"col-md-6 col-sm-6 text-left \"> \n                                    <input class=\"form-cotrol\" id=\"searchFiled\" (input)=\"searchFiled=$event.target.value\" type=\"text\" value=\"{{searchSlug}}\" >\n                                    <!-- <input #searchTextFiled type=\"text\" value=\"{{searchSlug}}\" /> -->\n                                </div>\n                                <div class=\"col-md-2 col-sm-2 \"> \n                                    <button (click)=searchTextFilter()>Search</button>\n                                    <!-- <button (click)=\"searchTextFiled(searchTextFiled.value)\" >Search</button> -->\n                \n                                    </div>\n                            </div><br>  \n                \n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Refine by Dates:</b></h6> </div>\n                                <div class=\"col-md-6 col-sm-6 text-left\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6 col-md-6\">\n                                            From : <br> \n                                            <input type=\"date\" class=\"form-control\"  id=\"dateFrom\" (input)=\"dateFrom=$event.target.value\">\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6\">\n                                            To : <br> \n                                            <input type=\"date\" class=\"form-control\"  id=\"dateTo\" (input)=\"dateTo=$event.target.value\">\n                                        </div>\n                                    </div>     \n                                </div>\n                                <div class=\"col-md-2 col-sm-2 \"> \n                                    <button (click)=searchDateFilter()>Search</button> \n                                </div>\n                            </div><br>\n                \n                            <div class=\"row mb-2 border-bottom\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Refine By Content:</b></h6> </div>\n                                <div class=\"col-md-8 col-sm-8 text-left \"> \n                                    <select class=\"form-cotrol\"  (input)=\"selectedProduct=$event.target.value\" (click)=\"selectData()\" (change)=searchSelectFilter()>\n                                            <option [value]=\"\">All</option>\n                                            <option *ngFor=\"let SelectOption of refineContentList;let i=index\" [value]=\"SelectOption.id\" [selected]=\"SelectOption.id==anySlug\">\n                                                {{SelectOption.tag.replace('_', ' ') | titlecase}}</option>\n                \n                                    </select>\n                                </div><br>\n                            </div><br>\n                \n                \n                            <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading2\">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                                        <!-- Buyer Guide -->\n                            <div class=\" mb-3 mt-4 border-bottom\" *ngIf=\"micrositeCompany?.length > 0 \" >\n                                <div class=\"mb-3\"><h2>Buyers Guide Companies</h2></div>                \n                                <div *ngIf=\"micrositeCompany?.length > 0\">\n                                    <div class=\"\"><h3>Microsite Companies</h3></div> \n                                    <div *ngFor=\"let microsite of micrositeCompany|slice:0:5;let i = index\">\n                                        <a [routerLink]=\"[microsite.viewUrl]\">{{microsite.title}}</a>\n                                    </div>\n                                </div>            \n                                <div *ngIf=\"featuredComapny?.length > 0\">\n                                    <div class=\"\"><h3>Featured Companies</h3></div> \n                                    <div *ngFor=\"let featured of featuredComapny|slice:0:5; let i = index\">\n                                        <a [routerLink]=\"[featured.viewUrl]\">{{featured.title}}</a>\n                                    </div>\n                                </div>        \n                            </div>\n                    \n                            <!-- Buyer Guide Categories -->\n                            <div class=\"container mb-3 mt-4 border-bottom\"  *ngIf=\"comapnyCategory?.length > 0\">                    \n                                <div><h3>Buyers Guide Categories</h3></div> \n                \n                                <div *ngFor=\"let category of comapnyCategory;let i = index\">\n                                    <!-- <a [routerLink]=\"[category.viewUrl]\">{{category.tag}}</a> -->\n                                    <p>{{category.tag}}</p>\n                                </div>\n                            </div>\n                \n                \n                            <!-- Content List-->\n                            <div class=\"container mb-3 mt-4\"  *ngIf=\"contentList?.length > 0\">\n                                <div class=\"border-bottom\" *ngFor=\"let content of contentList;let i = index\">                \n                                    <div class=\"col-md-12 col-sm-12 mt-1\">\n                                        <span *ngFor=\"let taxonomy of content.taggedTaxonomy.KNOWLEDGE_CENTER_TAXONOMY; let j =index\" >\n                                            <span *ngIf=\"j\"> | </span>\n                                            <a *ngIf=\"magazineId != 1\" [routerLink]=\"['/'+taxonomy.url]\"  > {{taxonomy.tag}}   </a> \n                                            <a *ngIf=\"magazineId == 1\" [routerLink]=\"['/'+staticUrl+taxonomy.url]\"  > {{taxonomy.tag}}</a>\n                                        </span>\n                                    </div> \n                                    <div class=\"col-md-12 col-sm-12\">\n                                       \n                                        <h4 class=\"mt-2\"><a  [routerLink]=\"[content.viewUrl]\"><b>{{safeHtml(content.title)}}</b></a></h4> \n                                        <!-- <h6 class=\"mt-3\">{{content.summary}}</h6> -->\n                                        <h6 class=\"mt-3\" *ngIf=\"content.summary\" [innerHTML]=\"safeHtml(content.summary)\"></h6>\n                                        <h6 class=\"mt-3\" *ngIf=\"((!content.summary) && (content.body))\" [innerHTML]=\"bodyCharacterLength(content.body)\"></h6>\n                                        <small>{{ content.publish_date| date : \"MMM dd , yyyy\"}}</small>\n                                    </div>\n                                </div>\n                            </div>\n                \n                            <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading1\">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                \n                            <div class=\"container mt-5 mb-3\"  *ngIf=\"contentList?.length > 0\">\n                                <div class=\"row\" *ngIf=\"contentList?.length > 9\"> \n                                    <div class=\"col-md-4 col-sm-4\"></div>\n                                        <div class=\"col-md-4 col-sm-4\">    <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button></div>\n                                    <div class=\"col-md-4 col-sm-4\"></div>\n                                </div>   \n                            </div>\n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>",
                styles: [".border-bottom{border-bottom:1px solid #000!important}.border-top{border-top:1px solid #000!important}.form-group.hidden{width:0;margin:0;border:none;padding:0}.custom-day{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}.custom-day.focused{background-color:#e6e6e6}.custom-day.range,.custom-day:hover{background-color:#0275d8;color:#fff}.custom-day.faded{background-color:rgba(2,117,216,.5)}"]
            }] }
];
/** @nocollapse */
ContentSearchComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"] },
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ContentSearchService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-related/content-related.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentRelatedService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @param {?} contentId
     * @return {?}
     */
    getRelatedContent(magazineId, contentId) {
        return this.HttpClient.post(apiURL + 'taxonomysController/getReleatedContent', { magazineId: magazineId, contentId: contentId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
ContentRelatedService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ContentRelatedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ ContentRelatedService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ContentRelatedService_Factory() { return new ContentRelatedService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: ContentRelatedService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-related/content-related.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentRelatedComponent {
    /**
     * @param {?} ContentRelatedService
     * @param {?} RodmanCoreService
     */
    constructor(ContentRelatedService, RodmanCoreService) {
        this.ContentRelatedService = ContentRelatedService;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ContentRelatedService.getRelatedContent(this.magazineId, this.contentId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.relatedContentData = data['data'];
            this.relatedContentData = this.relatedContentData.slice(0, 5);
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtmlReplace(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
}
ContentRelatedComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-related',
                inputs: ['magazineId', 'contentId'],
                template: "<div class=\"container\">\n    <div class=\"bg-primary border-primary align-center \" *ngIf=\"relatedContentData?.length > 0\">\n        <p class=\"content-color\" *ngIf=\"!(heading)\">RELATED CONTENT</p>\n        <p class=\"content-color\" *ngIf=\"(heading)\">{{heading}}</p>\n    </div> \n    <ul class=\"change-style\" *ngIf=\"relatedContentData?.length > 0\">\n        <li *ngFor=\"let content of relatedContentData\"><a [routerLink]=\"[content.viewUrl]\">{{safeHtmlReplace(content.title)}} </a></li>            \n    </ul>\n</div>",
                styles: [".content-color{color:#fff!important;text-align:center;margin-bottom:.5rem;font-family:Montserrat,-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-weight:501;padding:5px}.change-style li a{font-weight:400;font-size:14px}.change-style{border:1px solid;background:#f6f6f6}.border-primary{border:1px solid}"]
            }] }
];
/** @nocollapse */
ContentRelatedComponent.ctorParameters = () => [
    { type: ContentRelatedService },
    { type: RodmanCoreService }
];
ContentRelatedComponent.propDecorators = {
    heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-suggest-slide-show/content-suggest-slide-show.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentSuggestSlideShowComponent {
    /**
     * @param {?} RodmanCoreService
     * @param {?} Router
     * @param {?} config
     * @param {?} ContentRelatedService
     */
    constructor(RodmanCoreService, Router, config, ContentRelatedService) {
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.ContentRelatedService = ContentRelatedService;
        this.showNavigationArrows = false;
        this.showNavigationIndicators = true;
        this.loading = true;
        config.interval = 3000;
        config.showNavigationArrows = false;
        config.showNavigationIndicators = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ContentRelatedService.getRelatedContent(this.magazineId, this.contentId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.SlideShowData = data['data'];
            this.loading = false;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtmlReplace(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImageUrl(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
}
ContentSuggestSlideShowComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-suggest-slide-show',
                inputs: ['magazineId', 'contentId'],
                template: "<!--  a[index] !== void 0 -->\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<ngb-carousel *ngIf=\"(SlideShowData?.length > 0)  && (!loading)\"> \n \n        <ng-template ngbSlide *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(0)\">\n            <div class=\"row\">\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData.hasOwnProperty(0)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[0].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[0].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[0].title)}}</p>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && (SlideShowData.hasOwnProperty(1))\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[1].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[1].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[1].title)}}</p>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && (SlideShowData.hasOwnProperty(2))\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[2].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[2].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[2].title)}}</p>\n                        </div>\n                    </a>\n                </div>       \n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(3)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[3].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[3].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[3].title)}}</p>\n                        </div>\n                    </a>\n                </div>                \n            </div>\n        </ng-template>\n\n\n\n        <ng-template ngbSlide *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(4)\">\n            <div class=\"row\">\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(4)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[4].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[4].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[4].title)}}</p>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(5)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[5].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[5].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[5].title)}}</p>\n                        </div>\n                    </a>\n                </div>   \n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(6)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[6].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[6].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[6].title)}}</p>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(7)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[7].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[7].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[7].title)}}</p>\n                        </div>\n                    </a>\n                </div>                    \n            </div>\n        </ng-template>\n\n        <ng-template ngbSlide *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(8)\">\n            <div class=\"row\">\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(8)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[8].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[8].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[8].title)}}</p>\n                        </div>\n                    </a>\n                </div>   \n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(9)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[9].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[9].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[9].title)}}</p>\n                        </div>\n                    </a>\n                </div>  \n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(10)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[10].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[10].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[10].title)}}</p>\n                        </div>\n                    </a>\n                </div>  \n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(11)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[11].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[11].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[11].title)}}</p>\n                        </div>\n                    </a>\n                </div>                      \n            </div>\n        </ng-template>\n\n</ngb-carousel>  ",
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
                styles: ["img{max-height:250px}"]
            }] }
];
/** @nocollapse */
ContentSuggestSlideShowComponent.ctorParameters = () => [
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"] },
    { type: ContentRelatedService }
];
ContentSuggestSlideShowComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-box-tabs/content-box-tabs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentBoxTabsComponent {
    /**
     * @param {?} ContentBoxTabsService
     * @param {?} Router
     * @param {?} RodmanCoreService
     */
    constructor(ContentBoxTabsService, Router, RodmanCoreService) {
        this.ContentBoxTabsService = ContentBoxTabsService;
        this.Router = Router;
        this.RodmanCoreService = RodmanCoreService;
        this.currentJustify = 'justified';
        this.loading = true;
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ContentBoxTabsService.getTopRightWidget(this.magazineId, this.TabOne).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.contentBoxTabOne = data['data'];
            this.tabOneHeading = data['contentType'];
        }));
        this.ContentBoxTabsService.getTopRightWidget(this.magazineId, this.TabTwo).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.contentBoxTabTwo = data['data'];
            this.tabTwoheading = data['contentType'];
            this.loading = false;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    extractNameFromJson(data) {
        return this.RodmanCoreService.extractNameFromJson(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtmlReplace(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
}
ContentBoxTabsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-box-tabs',
                inputs: ['magazineId', 'TabOne', 'TabTwo'],
                template: "<div class=\"d-flex justify-content-center mt-5 mb-5 loader-height\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n    <ngb-tabset [justify]=\"currentJustify\" *ngIf=\"!loading\">\n        <ngb-tab  *ngIf=\"tabOneHeading && tabOneHeading[0]\" title=\"{{tabOneHeading[0].slug.replace('-', ' ')  | uppercase }}\">\n            <ng-template ngbTabContent>\n                \n                <div *ngFor=\"let tabOne of contentBoxTabOne\">\n                    <div class=\"row allign border-bottom\" >\n                        <h6><a [routerLink]=\"[tabOne.viewUrl]\">  <div [innerHTML]=\"safeHtmlReplace(tabOne.title)\"> </div> </a></h6><br>\n                        <!-- <p *ngIf=\"tabOne.firstName\"><small>By <b>{{tabOne.firstName}} {{tabOne.lastName}}</b></small></p> -->\n                        <p> \n                            <small *ngIf=\"tabOne.author_name\"> {{extractNameFromJson(tabOne.author_name)}} </small>\n                            <small> <b>{{tabOne.publish_date | date : \"MMM dd , yyyy \"}} </b></small>\n                        </p>\n                    </div>                      \n                </div>\n                <!-- If You Want Main Content-1 Ads -->\n                <!-- <div *ngIf=\"showAds == 'yes'\">\n                    <CoreLib-ads-home-widget  magazineId={{magazineId}} no=\"1\" location={{currentURL}} target='breaking-news'></CoreLib-ads-home-widget>\n                </div> -->\n\n            </ng-template>\n        </ngb-tab>\n\n    \n        <ngb-tab>\n            <ng-template ngbTabTitle *ngIf=\"tabTwoheading && tabTwoheading[0]\">{{tabTwoheading[0].slug.replace('-', ' ')  | uppercase }}</ng-template>\n            <ng-template ngbTabContent>\n\n                <div *ngFor=\"let tabTwo of contentBoxTabTwo\">\n                    <div class=\"row allign border-bottom\">\n                        <h6><a [routerLink]=\"[tabTwo.viewUrl]\"><div [innerHTML]=\"safeHtmlReplace(tabTwo.title)\"></div></a></h6> <br>\n                        <!-- <p *ngIf=\"tabTwo.firstName\"> <small>By <b>{{tabTwo.firstName}} {{tabTwo.lastName}}</b></small></p> -->\n                        <p>\n                            <small *ngIf=\"tabTwo.author_name\"> {{extractNameFromJson(tabTwo.author_name)}} </small>\n                            <small> <b>{{tabTwo.publish_date | date : \"MMM dd , yyyy \"}} </b></small>\n                        </p>\n                    </div>                     \n                </div> \n                <!-- If You Want Main Content-1 Ads --> \n                <!-- <div *ngIf=\"showAds == 'yes'\">\n                    <CoreLib-ads-home-widget  magazineId={{magazineId}} no=\"1\" location={{currentURL}} target='feature'></CoreLib-ads-home-widget>\n                </div> -->\n\n            </ng-template>\n        </ngb-tab>\n    </ngb-tabset> \n",
                styles: [".allign{margin:10px!important;min-height:45px}.alignName{margin-left:10px!important}.loader-height{min-height:100px}.allign h6{margin-bottom:0!important;width:100%}"]
            }] }
];
/** @nocollapse */
ContentBoxTabsComponent.ctorParameters = () => [
    { type: ContentBoxTabsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: RodmanCoreService }
];
ContentBoxTabsComponent.propDecorators = {
    showAds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/users/users-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes$4 = [];
class UsersRoutingModule {
}
UsersRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$4)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/users/users-verify-email/users-verify-email.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UsersVerifyEmailService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} userData
     * @return {?}
     */
    UserDeatils(userData) {
        /** @type {?} */
        var data = {
            magazineId: userData.magazineId,
            id: userData.id,
            firstName: userData.firstName,
            lastName: userData.lastName,
            password: userData.password,
            formData: '',
            maling_list: ''
        };
        return this.HttpClient.post(apiURL + 'usersController/usersRegistration', data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} magazineId
     * @param {?} passKey
     * @param {?} webUserName
     * @return {?}
     */
    verifyUser(magazineId, passKey, webUserName) {
        return this.HttpClient.post(apiURL + 'usersController/verification', { magazineId: magazineId, passKey: passKey, webUserName: webUserName }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
UsersVerifyEmailService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UsersVerifyEmailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ UsersVerifyEmailService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function UsersVerifyEmailService_Factory() { return new UsersVerifyEmailService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: UsersVerifyEmailService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/users/users-verify-email/users-verify-email.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UsersVerifyEmailComponent {
    /**
     * @param {?} formBuilder
     * @param {?} UserVerifyEmailService
     * @param {?} Router
     */
    constructor(formBuilder, UserVerifyEmailService, Router) {
        this.formBuilder = formBuilder;
        this.UserVerifyEmailService = UserVerifyEmailService;
        this.Router = Router;
        this.isModalShown = true;
        this.object = {};
        this.message = false;
        this.showMsgRegistration = false;
        this.cnfPasswordMessage = false;
        this.newsLetterMessage = true;
        this.newsLetterFormArray = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.UserVerifyEmailService.verifyUser(this.magazineId, this.passKey, this.email).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.status == "success" && data.message == "Verification successfully" && data.registerStatus == "success") {
                this.userData = data['data'];
                this.formData = data['formData'];
                this.mailing_list = data['SUBSCRIBE_MAILING_LIST'];
                this.isModalShown = true;
                this.id = data['data'].id;
            }
            else if (data.registerStatus == "IL") {
                this.message = true;
                // this.isModalShown = true;
                // this.userData = 'data ';
            }
        }));
        this.verifyForm = this.formBuilder.group({
            magazineId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            // id:111,
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cnfpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            formData: this.object,
            maling_list: this.formBuilder.array([], this.minSelectedCheckboxes(1)),
        }, { validator: this.checkIfMatchingPasswords('password', 'cnfpassword') });
    }
    /**
     * @return {?}
     */
    get verifyVal() {
        return this.verifyForm.controls;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    createObjectOverView(key, value) {
        if (value) {
            this.object[key] = value;
        }
        else {
            delete this.object[key];
        }
    }
    /**
     * @return {?}
     */
    showModal() {
        this.isModalShown = true;
    }
    /**
     * @return {?}
     */
    hideModal() {
        this.autoShownModal.hide();
    }
    /**
     * @return {?}
     */
    onHidden() {
        this.isModalShown = false;
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitted = true;
        if (this.verifyForm.invalid) {
            return;
        }
        this.UserVerifyEmailService.UserDeatils(this.verifyForm.value).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.status == "success" && data.message == "Data updated successfully") {
                this.showMsgRegistration = true;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.Router.navigate(['/']);
                }), 5000);
            }
        }));
    }
    // CheckBox Mapping For Newsletter
    /**
     * @param {?} email
     * @param {?} isChecked
     * @return {?}
     */
    onChangeNewsLetter(email, isChecked) {
        /** @type {?} */
        const newsLetterFormArray = (/** @type {?} */ (this.verifyForm.controls.maling_list));
        if (isChecked) {
            newsLetterFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](email));
            this.newsLetterMessage = false;
        }
        else {
            /** @type {?} */
            let index = newsLetterFormArray.controls.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            x => x.value == email));
            newsLetterFormArray.removeAt(index);
            if (newsLetterFormArray.length) {
                this.newsLetterMessage = false;
            }
            else {
                this.newsLetterMessage = true;
            }
        }
    }
    // Confirm Password Function 
    /**
     * @param {?} passwordKey
     * @param {?} passwordConfirmationKey
     * @return {?}
     */
    checkIfMatchingPasswords(passwordKey, passwordConfirmationKey) {
        return (/**
         * @param {?} group
         * @return {?}
         */
        (group) => {
            /** @type {?} */
            let passwordInput = group.controls[passwordKey];
            /** @type {?} */
            let passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        });
    }
    //  Check Box Minimum One Select Validation
    /**
     * @param {?=} min
     * @return {?}
     */
    minSelectedCheckboxes(min = 1) {
        /** @type {?} */
        const validator = (/**
         * @param {?} formArray
         * @return {?}
         */
        (formArray) => {
            /** @type {?} */
            const totalSelected = formArray.controls
                .map((/**
             * @param {?} control
             * @return {?}
             */
            control => control.value))
                .reduce((/**
             * @param {?} prev
             * @param {?} next
             * @return {?}
             */
            (prev, next) => next ? prev + next : prev), 0);
            return totalSelected >= min ? null : { required: true };
        });
        return validator;
    }
}
UsersVerifyEmailComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-users-verify-email',
                inputs: ['magazineId', 'passKey', 'email'],
                template: "<div class=\"container\">\n        <div class=\"row description\">\n         \n        <div *ngIf=\"message\"> \n                 <div class=\"text-center\"><h1>Invalid Link For Process</h1></div>\n        </div>   \n    \n            <div *ngIf=\"isModalShown && userData\"  [config]=\"{backdrop: 'static',  keyboard: false,show: true }\"  (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\"\n            class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-auto-name\">\n              <div class=\"modal-dialog modal-lg modal-md\">\n                <div class=\"modal-content\">\n                   <!-- <div class=\"modal-header\">\n                     <h4 id=\"dialog-auto-name\" class=\"modal-title pull-left\"></h4>\n                      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                  </div>  -->\n                  <div class=\"modal-body\">\n                      <h2>Please enter your details below to create your log-in credentials. You will only need to register once.</h2>\n    \n                      <div class=\"clearfix\"></div><br>\n    \n                      <div class=\"row\"  *ngIf=\"showMsgRegistration\">\n                              <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                      <p class=\"alert alert-success text-center\">You Have Update Details Please Login </p>\n                              </div>\n                      </div>\n    \n                      <form [formGroup]=\"verifyForm\" (ngSubmit)=\"onSubmit()\"> \n                          <input type=\"hidden\" formControlName=\"magazineId\"  value=\"{{magazineId}}\" [ngModel]=\"magazineId\"> \n                          <input type=\"hidden\" formControlName=\"id\"  value=\"{{id}}\" [ngModel]=\"id\"> \n                            <!-- First And Last Name -->\n                            <br><br>\n                           <div class=\"row\">\n                              <div class=\"col-sm-6 col-md-6\">\n                                  <input type=\"text\" formControlName=\"firstName\" id=\"firstName\" placeholder=\"Enter First Name\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && verifyVal.firstName.errors}\" > \n                                   <div *ngIf=\"submitted && verifyVal.firstName.errors\" class=\"invalid-feedback\">\n                                          <div *ngIf=\"verifyVal.firstName.errors.required\">Field is required</div>\n                                  </div> \n                               </div> \n                              \n                                <div class=\"col-sm-6 col-md-6\"> \n                                    <input type=\"text\" formControlName=\"lastName\" id=\"lastName\" placeholder=\"Enter Last Name\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && verifyVal.lastName.errors}\">\n                                    <div *ngIf=\"submitted && verifyVal.lastName.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"verifyVal.lastName.errors.required\">Field is required</div>\n                                    </div> \n                                </div> \n                              \n                          </div>   \n                          <br> \n                          \n                            <!-- Password and Confirm Password -->\n                           <div class=\"row\">\n                              <div class=\"col-sm-6 col-md-6\">\n                                  <input type=\"password\" formControlName=\"password\" id=\"password\" placeholder=\"Enter Password\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && verifyVal.password.errors}\">\n                                  <div *ngIf=\"submitted && verifyVal.password.errors\" class=\"invalid-feedback\">\n                                          <div *ngIf=\"verifyVal.password.errors.required\">Field is required</div>\n                                  </div>\n                              </div> \n                              <div class=\"col-sm-6 col-md-6\">\n                                  <input type=\"password\" formControlName=\"cnfpassword\" id=\"cnfpassword\" placeholder=\"Enter Confirm Password\"  class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && verifyVal.cnfpassword.errors}\">\n                                  <div *ngIf=\"submitted && verifyVal.cnfpassword.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"verifyVal.cnfpassword.errors.required\">Field is required</div>\n                                  </div>\n                              </div>                                                \n                          </div>  \n                          <br> \n                           \n                          <!-- Newsletter  -->\n                          <div class=\"row\">\n                              <input type=\"hidden\" formControlName=\"maling_list\" value=\"1\" [ngModel]=\"1\">\n                                <label class=\"col-md-12 col-sm -12\">\n                                  <h4><b>Newsletter</b></h4>\n                                </label>\n                              \n                                <div class=\"col-sm-12 col-md-12\" id=\"newsLetterMessage\" *ngIf=\"newsLetterMessage\"> \n                                  <b>At Least One Option Must Be Selected :</b>\n                                </div><br>\n    \n                                <div class=\"col-sm-6 col-md-6\" *ngFor=\"let newsbox of mailing_list;let n = index \">\n                                  <label> {{newsbox.short_tag}} \n                                      <input type=\"checkbox\"   (change)=\"onChangeNewsLetter(newsbox.id,$event.target.checked)\"> \n                                  </label>                             \n                                </div>\n                          </div> \n    \n    \n                           <!-- Professional OverView  -->\n                          <div class=\"row\">\n                              <input type=\"hidden\" formControlName=\"formData\">\n                              <div  class=\"col-sm-6 col-md-6\" *ngFor='let category of formData'>\n                                <div *ngIf=\"category.group_fields_title != 'Company Name' && category.group_fields_title != 'Summary' \">\n                                  <label><b>{{category.group_fields_title}} </b></label>\n                                  <select id={{category.group_fields_title}} class=\"form-control required\" (change)=\"createObjectOverView(category.group_fields_title,$event.target.value)\" required >\n                                    <option value=\"\">Select {{category.group_fields_title}}</option>\n                                    <option *ngFor=\"let subCategory of (category.option_data.split('$|$'))\" value=\"{{subCategory}}\">{{ subCategory }}</option>\n                                  </select>\n                                </div>\n                              </div> \n                          </div> \n    \n                          <br>\n                          \n                           <button class=\"btn btn-primary form-control\" type=\"submit\">Submit</button>\n                      </form>                   \n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n    </div>\n    \n    \n    \n    \n    \n    \n    ",
                styles: [".description{min-height:500px}"]
            }] }
];
/** @nocollapse */
UsersVerifyEmailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: UsersVerifyEmailService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UsersVerifyEmailComponent.propDecorators = {
    autoShownModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['autoShownModal', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/users/Components/user-profile/user-profile.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserProfileComponent {
    /**
     * @param {?} ActivatedRoute
     */
    constructor(ActivatedRoute) {
        this.ActivatedRoute = ActivatedRoute;
        this.message = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ActivatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.magazineId = data.magazineId;
        }));
        if (localStorage.getItem('authDetails' + this.magazineId)) {
            /** @type {?} */
            const data = JSON.parse(localStorage.getItem('authDetails' + this.magazineId));
            this.message = true;
        }
        else {
        }
    }
}
UserProfileComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-user-profile',
                template: "<!-- \n<div class=\"text-center\"><p> Core user-profile works!</p>\n    <h3>Users Profile</h3>\n</div>     -->\n\n\n\n\n<div class=\"text-center\" *ngIf=\"message; else showLoginRequestMessage\">\n    <h2>Hello You Are Login</h2>\n</div> \n    <ng-template #showLoginRequestMessage>\n        <div class=\"text-center\" > <h2>Hello, please login to access the User app</h2></div>\n    </ng-template>",
                styles: [""]
            }] }
];
/** @nocollapse */
UserProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/users/Components/company-content-authenticate/company-content-authenticate.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompanyContentAuthenticateComponent {
    /**
     * @param {?} Router
     * @param {?} RodmanCoreService
     */
    constructor(Router, RodmanCoreService) {
        this.Router = Router;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} filePath
     * @return {?}
     */
    downloadFile(filePath) {
        /** @type {?} */
        var newWindow = window.open(filePath);
    }
}
CompanyContentAuthenticateComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-company-content-authenticate',
                template: "<div class=\"container\">\n    <div class=\"border mt-5 mb-5\" >\n            \n        <p class=\"text-center mt-3\">This content is sponsored by:</p>\n            <div  class=\"text-center\">\n                <img  class=\"img-responsive\" name=\"companyLogo\" style=\"max-width: 350px;\" [src]=\"sendParentMessage.primary_image_main\">\n            </div>\n            <p class=\"text-center\" >\n                <a [routerLink]=\"['/contents/viewwebsite/'+sendParentMessage.id]\">Visit the website</a>\n            </p><br><br>\n            <p class=\"text-center\" >{{ sendParentMessage.title }}</p><br><br>\n            <hr>\n            <div class=\"mt-3 text-center\">\n                <h5 class=\"text-center\">Download today and learn more</h5>\n            </div>\n            \n            <div class=\"col-sm-12 col-md-12\">\n                <div class=\"col-sm-4 col-md-4\"></div>\n                <div class=\"col-sm-8 col-md-8\">\n                    <b>Email :</b> <br>\n                    <input type=\"text\" class=\" text-center form-control\">\n                </div>  \n            </div>\n\n            <div class=\"text-center  mt-3 mb-3\">               \n\n                <ng-container *ngIf=\"link;else default\">\n                    <button *ngIf=\"link\" class=\"download\" (click)=\"downloadFile(link)\"> Download Now</button>\n                </ng-container>\n                <ng-template #default>\n                    <ng-container>\n                        <button *ngIf=\"link\" class=\"download\">Request Info </button>\n                    </ng-container>\n                </ng-template>\n                <!-- <button>Request Info</button> -->\n            </div>\n    </div>    \n\n</div>\n\n",
                styles: [".download{background-color:#d9534f!important;border-color:#d43f3a;color:#fff;padding:2px}h5,p{font-weight:700}"]
            }] }
];
/** @nocollapse */
CompanyContentAuthenticateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: RodmanCoreService }
];
CompanyContentAuthenticateComponent.propDecorators = {
    sendParentMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    link: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/users/users.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { AuthenticationComponent } from './authentication/authentication.component';
class UsersModule {
}
UsersModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [UsersVerifyEmailComponent, UserProfileComponent, CompanyContentAuthenticateComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    UsersRoutingModule,
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                    rodman_orm__WEBPACK_IMPORTED_MODULE_14__["RodmanORMModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
                exports: [UsersVerifyEmailComponent, UserProfileComponent, CompanyContentAuthenticateComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-default.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentDefaultComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentDefaultComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-default',
                template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"default\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                            <!-- <ngb-carousel *ngIf=\"contentData.content_type_id != 2653\">\n                                <ng-template ngbSlide>\n                                    <div class=\"picsum-img-wrapper\">\n                                        <img  [src]=\"contentData.primary_image_main\" alt=\"No Image\" class=\"img-scale full-Size mb-2\">\n                                    </div>\n                                    <div class=\"carousel-caption\"> </div>\n                                </ng-template>\n                        \n                                <ng-template ngbSlide  *ngFor=\"let slideImage of contentData.slider_image;\">\n                                    <div class=\"picsum-img-wrapper\">\n                                        <img  [src]=\"slideImage\" alt=\"No Image\" class=\"img-scale  full-Size mb-2\">\n                                    </div>\n                                    <div class=\"carousel-caption\"> </div>\n                                </ng-template>\n                            </ngb-carousel> -->\n                        \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                    <b> {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>                                \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>     \n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n<div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>  \n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n\n\n",
                styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
            }] }
];
ContentDefaultComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-jobs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentJobsComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentJobsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-jobs',
                template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n       \n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"default\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n\n                        \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-4\">\n                                    <b> {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n                            <!-- <div class=\"row\">\n                                <div class=\"col-md-7\" [innerHtml]=\"safeHtml(contentData.body)\"></div>                                \n                                <div class=\"col-md-5\">\n                                    <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                                </div>                            \n                            </div> -->\n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>    \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n\n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n\n\n\n\n<!-- \n\n    <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n        <div class=\"col-md-2 col-sm-2\"></div>\n        <div class=\"col-md-6 col-sm-offset-6\" >\n            <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n        </div>\n        <div class=\"col-md-4 col-sm-4\"></div>\n    </div> -->\n    \n    \n    \n    <div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">\n        <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n        <div >\n            <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n        </div>\n        <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n    </div>   \n        \n        <!-- Related Content -->\n    <!-- <div class=\"row\" *ngFor=\"let contentData of ContentInterface\" >\n        <div class=\"col-sm-2 col-md-2\" ></div>\n        <div class=\"col-sm-6 col-md-6\" >\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n        </div>\n        <div class=\"col-sm-4 col-md-4\" ></div>    \n    </div>   -->\n\n\n \n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>",
                styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
            }] }
];
ContentJobsComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-feature.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentFeatureComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentFeatureComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-feature',
                template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"feature\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                        \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                    <b> \n                                        {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n                            <div class=\"releted_nws\">\n                                    <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                                </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>  \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n<!-- Slider Show -->\n<div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n    \n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>",
                styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
            }] }
];
ContentFeatureComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-video.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentVideoComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        // if(this.ContentInterface[0].video[0].link_title == 'YouTube'){
        // }else
        switch (this.ContentInterface[0].video[0].link_title) {
            case 'YouTube':
                this.videoPath = 'https://www.youtube.com/embed/' + this.ContentInterface[0].video[0].link;
                break;
            case 'Vimeo':
                this.videoPath = 'https://player.vimeo.com/video/' + this.ContentInterface[0].video[0].link;
                break;
            case 'BrightCove':
                this.videoPath = '//players.brightcove.net/1160438696001/SJaEAUSpl_default/index.html?videoId=' + this.ContentInterface[0].video[0].link;
                break;
            default:
                this.videoPath = 'https://www.youtube.com/embed/' + this.ContentInterface[0].video[0].link;
                break;
        }
        this.videoPath = this.videoURL(this.videoPath);
    }
}
ContentVideoComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-video',
                template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>    \n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n                <div class=\"col-md-8\">\n                    <div class=\"container mb-3 mt-4\" id=\"video\"  *ngFor=\"let contentData of ContentInterface\">\n                        <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                        <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                        <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5> \n                        <div class=\"row\">\n                            <iframe width=\"800\" height=\"420\" [src]=\"videoPath\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                        </div>                    \n                        <div class=\"row\">\n                            <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                <b>{{ extractNameFromJson(contentData.author_name) }} {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                            </div>\n                        </div> \n                        <div class=\"row\" >\n                            <div class=\"col-md-12 col-sm-12 body-min-height\" [innerHtml]=\"safeHtml(contentData.body)\"></div>   \n                            <div class=\"col-md-12 col-sm-12\">\n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>  \n                            </div>     \n                        </div>\n                    </div> \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"col-md-12 col-sm-12 mb-2\">\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                        <CoreLib-content-box-tabs *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>\n                    </div>\n                </div>\n            </div>    \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n    \n<div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div>\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n        \n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>\n",
                styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
            }] }
];
ContentVideoComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-webinars.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentWebinarsComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentWebinarsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-webinars',
                template: "\n    <div class=\"col-md-12 col-sm-12 text-center\" >\n            <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n        </div>\n        \n    <div class=\"row\">\n        <div class=\"col-md-2 col-sm-2\"> </div>\n        <div class=\"col-md-6 col-sm-6\">\n    \n            <div *ngIf=\"ContentInterface\">\n                <div class=\"container mb-3 mt-4\" id=\"webinars\"  *ngFor=\"let contentData of ContentInterface\">\n                    <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                    <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                    <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                \n                    <div class=\"row\">\n                        <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                            <b>{{ extractNameFromJson(contentData.author_name) }} {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                        </div>\n                    </div> \n\n                    <div class=\"releted_nws\">\n                        <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                    </div> \n                    <div class=\"row_contian\">                            \n                        <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>  \n                    </div>\n                </div>                   \n            </div>  \n    \n        </div>\n       \n        <!-- Tabbing Right Side -->\n        <div class=\"col-md-4 col-sm-4 mt-4\" *ngFor=\"let contentData of ContentInterface\">\n            <div class=\"col-md-12 col-sm-12\">\n            <div class=\"col-md-10 col-sm-10\">\n                <div class=\"col-md-12 col-sm-12 mb-2\">\n                    <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                </div>\n                    <CoreLib-content-box-tabs magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                <div class=\"col-md-12 col-sm-12 mb-2\" >\n                    <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>\n                </div>\n                <div class=\"col-md-12 col-sm-12 mb-2\" >\n                    <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>\n                </div>\n            </div>\n            <div class=\"col-md-2 col-sm-2\"></div>\n            </div> \n        </div>     \n    </div>  \n    \n    \n    \n<div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div>\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n\n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>\n    ",
                styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
            }] }
];
ContentWebinarsComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-formulary.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentFormularyComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentFormularyComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-formulary',
                template: "\n<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n               <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"default\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                         \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                    <b> {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n\n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' heading='Related Formulary' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>    \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n   \n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n\n<!-- Slider Show -->\n<div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n    \n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>",
                styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
            }] }
];
ContentFormularyComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-buyer-guide-basic.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentBuyerGuideBasicComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentBuyerGuideBasicComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-buyer-guide-basic',
                template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n        <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n    </div>\n    \n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"bgbasic\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                        \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                    <b> {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n\n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>                                \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>     \n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n\n<!-- Slider Show -->\n<div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n       \n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-6 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>"
            }] }
];
ContentBuyerGuideBasicComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-buyer-guide-micro-site.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentBuyerGuideMicroSiteComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentBuyerGuideMicroSiteComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-buyer-guide-micro-site',
                template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n        <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n    </div>\n    \n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"bgmicrosite\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                        \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                    <b> {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n \n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>                                \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>     \n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n\n<!-- Slider Show -->\n<div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n    \n    <!-- Related Content -->\n<!-- <div class=\"row\" *ngFor=\"let contentData of ContentInterface\" >\n    <div class=\"col-sm-2 col-md-2\" ></div>\n    <div class=\"col-sm-6 col-md-6\" >\n        <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n    </div>\n    <div class=\"col-sm-4 col-md-4\" ></div>    \n</div>       -->\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>"
            }] }
];
ContentBuyerGuideMicroSiteComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-slide-show.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentSlideShowComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentSlideShowComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-slide-show',
                template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n        <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n    </div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface\">\n                        <div class=\"container mb-3 mt-4\" id=\"slideShow\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-4\">\n                                    <b>{{ extractNameFromJson(contentData.author_name) }} {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n                            <div class=\"row\">\n                                <div class=\"col-md-12 col-sm-12 body-min-height\" [innerHtml]=\"safeHtml(contentData.body)\"></div>\n                                <div class=\"col-md-12 col-sm-12\" >   <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches></div>\n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>\n\n        \n        </div>\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n<div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div>\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>",
                styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
            }] }
];
ContentSlideShowComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-static-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentStaticContentComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentStaticContentComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-static-content',
                template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n                <div class=\"col-md-8\">\n                    <div class=\"container mb-3 mt-4\" id=\"staticContent\"  *ngFor=\"let contentData of ContentInterface\">\n                        <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                        <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                        <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                    \n                        <div class=\"row\">\n                            <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                <b>{{ extractNameFromJson(contentData.author_name) }} {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                            </div>\n                        </div> \n\n                        <div class=\"releted_nws\">\n                            <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                        </div> \n                        <div class=\"row_contian\">                                \n                            <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>      \n                            <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n                        </div>\n                    </div> \n\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div>\n            </div>  \n        </div>\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n\n\n\n\n\n\n<!-- \n    <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n        <div class=\"col-md-2 col-sm-2\"></div>\n        <div class=\"col-md-6 col-sm-offset-6\" >\n            \n        </div>\n        <div class=\"col-md-4 col-sm-4\"></div>\n    </div>\n     -->\n    \n    \n    <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n        <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n        <div >\n            <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n        </div>\n        <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n    </div>   \n        \n        <!-- Related Content -->\n    <!-- <div class=\"row\" *ngFor=\"let contentData of ContentInterface\" >\n        <div class=\"col-sm-2 col-md-2\" ></div>\n        <div class=\"col-sm-6 col-md-6\" >\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n        </div>\n        <div class=\"col-sm-4 col-md-4\" ></div>    \n    </div>   -->\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>",
                styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
            }] }
];
ContentStaticContentComponent.propDecorators = {
    ads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-white-paper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentWhitePaperComponent extends ContentDynamicViewComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        // alert('sfdsf')
    }
}
ContentWhitePaperComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-white-paper',
                template: "    <div class=\"row mb-3\">\n        <div class=\"col-md-2 col-sm-2\"> </div>\n        <div class=\"col-md-5 col-sm-5\">\n    \n            <div *ngIf=\"ContentInterface\">\n                <div class=\"container mb-3 mt-4\" id=\"whitepaper\"  *ngFor=\"let contentData of ContentInterface\">\n                    <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                    <!-- <h1 id=\"default\">{{contentData.title}}</h1> -->\n                    <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                    <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n               \n                    <div class=\"row border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\" >\n                        <!-- <div class=\"col-sm-12 col-md-12\"> -->\n                            <div class=\"col-sm-4 col-md-4\" *ngIf=\"contentData.companyDetail.title\">\n                               <b> Released by </b> {{contentData.companyDetail.title}} \n                            </div> \n                            <div class=\"col-sm-6 col-md-6\">\n                                <b>{{ extractNameFromJson(contentData.author_name) }}</b>\n                            </div>\n                            <div class=\"col-sm-2 col-md-2\" *ngIf=\"contentData.publish_date\">\n                                {{contentData.publish_date | date : \"MMM dd , yyyy\"}}\n                            </div> \n                        <!-- </div> -->\n                    </div> \n                    <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12\" [innerHtml]=\"safeHtml(contentData.body)\"></div>\n                \n                    </div>\n                </div>                   \n            </div>  \n    \n        </div>\n       \n        <!-- Tabbing Right Side -->\n        <div class=\"col-md-3 col-sm-3 mt-4\" *ngFor=\"let contentData of ContentInterface\">\n            <CoreLib-company-content-authenticate [link]=\"contentData.link\" [sendParentMessage]=\"contentData.companyDetail\"></CoreLib-company-content-authenticate>\n        </div>     \n        <div class=\"col-md-2 col-sm-2\"></div>\n    </div>  \n    \n    <hr>\n\n<div class=\"row mb-3\">\n    <div class=\"col-md-2 col-sm-2\"> </div>\n    <div class=\"col-md-5 col-sm-5\">\n        <div *ngIf=\"ContentInterface\">\n            <!-- <div class=\"container mb-3 mt-4\" *ngFor=\"let contentData of ContentInterface\">  -->\n            <div class=\"container mb-3 mt-4\" *ngFor=\"let contentData of ContentInterface\"> \n                <div class=\"row\" *ngIf=\"(contentData.companyDetail.id && contentData.content_type_id)\">\n                    <div class=\"col-md-12 col-sm-12\">\n                        <h3 class=\"back-color\">\n                            More White Papers / Tech Papers by {{contentData.companyDetail.title}}\n                        </h3>\n                    </div>                \n                    <div class=\"col-md-12 col-sm-12\">\n                        <CoreLib-content-company-related [magazineId]=\"contentData.magazine_id\" [companyId]=\"contentData.companyDetail.id\" [contentType]=\"contentData.content_type_id\" ></CoreLib-content-company-related>\n                    </div>      \n                </div>\n                <div class=\"row\" *ngIf=\"contentData.companyDetail.id\">\n                    <div class=\"col-md-12 col-sm-12\">\n                        <h3 class=\"back-color\">\n                            Related Content {{contentData.companyDetail.title}}\n                        </h3>\n                    </div>                \n                    <div class=\"col-md-12 col-sm-12\">\n                        <CoreLib-content-company-related [magazineId]=\"contentData.magazine_id\" [companyId]=\"contentData.companyDetail.id\" [contentType]=\"\" ></CoreLib-content-company-related>\n                    </div>      \n                </div>\n            </div>                   \n        </div>      \n    </div>\n    <div class=\"col-md-3 col-sm-3 mt-4\"></div>     \n    <div class=\"col-md-2 col-sm-2\"></div>\n</div>     \n\n\n  \n",
                styles: [`h2{ background-color:#ccc; } .back-color{background-color: #ccc;}`]
            }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-dynamic-view/content-news-release.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentNewsReleaseComponent extends ContentDynamicViewComponent {
    constructor() {
        super(...arguments);
        this.data = 1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentNewsReleaseComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-news-release',
                template: "    <div class=\"row mb-3\">\n        <div class=\"col-md-2 col-sm-2\"> </div>\n        <div class=\"col-md-5 col-sm-5\">\n    \n            <div *ngIf=\"ContentInterface\">\n                <div class=\"container mb-3 mt-4\" id=\"whitepaper\"  *ngFor=\"let contentData of ContentInterface\">\n                    <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                    <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                    <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                \n                    <div class=\"row border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\" >\n                            <!-- <div class=\"col-sm-12 col-md-12\"> -->\n                                <div class=\"col-sm-4 col-md-4\" *ngIf=\"contentData.companyDetail.title\">\n                                    <b> Released by </b> {{contentData.companyDetail.title}} \n                                </div> \n                                <!-- <div class=\"col-sm-6 col-md-6\">\n                                    <b>{{ extractNameFromJson(contentData.author_name) }}</b>\n                                </div> -->\n                                <div class=\"col-sm-2 col-md-2\" *ngIf=\"contentData.publish_date\">\n                                    {{contentData.publish_date | date : \"MMM dd , yyyy\"}}\n                                </div> \n                            <!-- </div> -->\n                        </div> \n                    <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 body-min-height\" [innerHtml]=\"safeHtml(contentData.body)\"></div>\n                \n                    </div>\n                </div>                   \n            </div>  \n    \n        </div>\n        \n        <!-- Tabbing Right Side -->\n        <div class=\"col-md-3 col-sm-3 mt-4\" *ngFor=\"let contentData of ContentInterface\">\n            <CoreLib-company-content-authenticate [link]=\"contentData.link\" [sendParentMessage]=\"contentData.companyDetail\"></CoreLib-company-content-authenticate>\n        </div>     \n        <div class=\"col-md-2 col-sm-2\"></div>\n    </div>  \n    \n    <hr>\n\n<div class=\"row mb-3\">\n    <div class=\"col-md-2 col-sm-2\"> </div>\n    <div class=\"col-md-5 col-sm-5\">\n        <div *ngIf=\"ContentInterface\">\n            <div class=\"container mb-3 mt-4\" *ngFor=\"let contentData of ContentInterface\"> \n                <div class=\"row\" *ngIf=\"(contentData.companyDetail.id && contentData.content_type_id)\">\n                    <div class=\"col-md-12 col-sm-12\">\n                        <h3 class=\"back-color\">\n                            More  News Releases by {{contentData.companyDetail.title}}\n                        </h3>\n                    </div>                \n                    <div class=\"col-md-12 col-sm-12\">\n                            <CoreLib-content-company-related [magazineId]=\"contentData.magazine_id\" [companyId]=\"contentData.companyDetail.id\" [contentType]=\"contentData.content_type_id\" ></CoreLib-content-company-related> \n                    </div>      \n                </div>\n            </div>                   \n        </div>      \n    </div>\n    <div class=\"col-md-3 col-sm-3 mt-4\"></div>     \n    <div class=\"col-md-2 col-sm-2\"></div>\n</div>     \n    \n    \n<div class=\"row mb-3\">\n    <div class=\"col-md-2 col-sm-2\"> </div>\n    <div class=\"col-md-5 col-sm-5\">\n        <div *ngIf=\"ContentInterface\">\n            <div class=\"container mb-3 mt-4\" *ngFor=\"let contentData of ContentInterface\"> \n                <div class=\"row\" *ngIf=\"contentData.companyDetail.id\">\n                    <div class=\"col-md-12 col-sm-12\">\n                        <h3 class=\"back-color\">\n                            Related Content {{contentData.companyDetail.title}}\n                        </h3>\n                    </div>                \n                    <div class=\"col-md-12 col-sm-12\">\n                        <CoreLib-content-company-related [magazineId]=\"contentData.magazine_id\" [companyId]=\"contentData.companyDetail.id\" [contentType]=\"\" ></CoreLib-content-company-related>\n                    </div>      \n                </div>\n            </div>                   \n        </div>      \n    </div>\n    <div class=\"col-md-3 col-sm-3 mt-4\"></div>     \n    <div class=\"col-md-2 col-sm-2\"></div>\n</div>         \n    ",
                styles: [` h2{ background-color:#ccc} .back-color{ background-color: #ccc;}`]
            }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-company-related/content-company-related.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentCompanyRelatedService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @param {?} limit
     * @param {?} page
     * @param {?} companyId
     * @param {?} contentType
     * @return {?}
     */
    getContentRelated(magazineId, limit, page, companyId, contentType) {
        return this.HttpClient.post(apiURL + 'taxonomysController/getContentReleated', { contentType: contentType, magazineId: magazineId, limit: limit, page: page, companyId: companyId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
ContentCompanyRelatedService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ContentCompanyRelatedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ ContentCompanyRelatedService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ContentCompanyRelatedService_Factory() { return new ContentCompanyRelatedService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: ContentCompanyRelatedService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-company-related/content-company-related.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentCompanyRelatedComponent {
    /**
     * @param {?} ContentCompanyRelatedService
     * @param {?} RodmanCoreService
     */
    constructor(ContentCompanyRelatedService, RodmanCoreService) {
        this.ContentCompanyRelatedService = ContentCompanyRelatedService;
        this.RodmanCoreService = RodmanCoreService;
        this.page = 0;
        this.limit = 10;
        this.loading = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getData();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // this.getData();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "")
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
    /**
     * @return {?}
     */
    getData() {
        this.ContentCompanyRelatedService.getContentRelated(this.magazineId, this.limit, this.page, this.companyId, this.contentType).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.relatedData = data['data'];
            this.loading = false;
        }));
    }
}
ContentCompanyRelatedComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-company-related',
                template: "<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n    \n\n<div *ngFor=\"let data of relatedData;let i =index\">     \n\n        <ng-container  *ngIf=\"contentType;else defaultView\">\n            <!-- <p><span class=\"bg-primary\">{{data.tag}}</span></p> -->\n            <p><span><b>{{data.tag}}</b></span></p>\n            <h4><a [routerLink]=\"['/'+data.viewUrl]\">\n            <div [innerHTML]=\"safeHtml(data.title)\"> </div>\n            </a></h4>\n            <div [innerHTML]=\"safeHtml(data.summary)\"></div>\n            <p>{{data.publish_date | date : \"MMM dd , yyyy\"}}</p>\n        </ng-container>\n\n    \n        <ng-template #defaultView>\n            <ng-container> \n                <h4><a [routerLink]=\"['/'+data.viewUrl]\">\n                    <div [innerHTML]=\"safeHtml(data.title)\"> </div>\n                </a></h4>\n                <div [innerHTML]=\"safeHtml(data.summary)\"></div>\n                <p> <span class=\"\"><b>{{data.tag}}</b></span>  Released on  {{data.publish_date | date : \"MMM dd , yyyy\"}}</p>\n            </ng-container> \n        </ng-template>\n\n    <hr>\n</div>\n\n\n\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ContentCompanyRelatedComponent.ctorParameters = () => [
    { type: ContentCompanyRelatedService },
    { type: RodmanCoreService }
];
ContentCompanyRelatedComponent.propDecorators = {
    magazineId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    companyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    contentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-related-content-list/content-related-content-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentRelatedContentListComponent {
    /**
     * @param {?} Router
     * @param {?} ListContentService
     * @param {?} RodmanCoreService
     */
    constructor(Router, ListContentService, RodmanCoreService) {
        this.Router = Router;
        this.ListContentService = ListContentService;
        this.RodmanCoreService = RodmanCoreService;
        this.listContentData = [];
        this.limit = 10;
        this.page = 0;
        this.contentType = '';
        this.loading = true;
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.getContentData();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.page = 0;
        this.slugHeading;
        this.listContentData = [];
        this.getContentData();
    }
    /**
     * @return {?}
     */
    getContentData() {
        this.taxonomyUrl = this.routeUrl.split('/');
        this.taxonomyUrl = (this.taxonomyUrl[this.taxonomyUrl.length - 1]);
        /** @type {?} */
        let url = this.taxonomyUrl.split('_');
        this.taxonomyUrlTo = url[1];
        this.ListContentService.getContent(this.routeUrl, this.magazineId, this.limit, this.page, this.contentType).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.contentData = data['data'];
            if (this.page == 0) {
                this.slugHeading = data['contentTypeName'];
                // this.contentTaxonomy = data['CONTENT_TAXONOMYS'];
            }
            this.page = data['page'] + 1;
            for (let content of this.contentData) {
                this.listContentData.push(content);
            }
            this.loading = false;
        }));
    }
    /**
     * @return {?}
     */
    loadMoreData() {
        this.loading = true;
        this.getContentData();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    bodyCharacterLength(data) {
        return this.RodmanCoreService.bodyCharacterLength(data);
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    extractNameFromJson(data) {
        return this.RodmanCoreService.extractNameFromJson(data);
    }
}
ContentRelatedContentListComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-related-content-list',
                inputs: ['routeUrl', 'magazineId', 'contentType'],
                template: "<!-- Every Page Bottom -->\n<div class=\"container mt-5\" id=\"content-related-content-list\" *ngIf=\"contentType!='2542'\">\n    <div class=\"mb-2\" *ngIf=\"slugHeading\"><h2>Related {{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>\n            <div class=\"heading-border\"></div>\n    <div *ngIf=\"listContentData?.length > 0\" >\n    <div  *ngFor=\"let Data of listContentData | slice:1; let i =index\" >    \n        <div class=\"col-md-12 col-sm-12\">\n            <div class=\"row\">                            \n                <div class=\"col-md-9 col-sm-9\">\n                    <h4 class=\"mt-2\">\n                        <a [routerLink]=\"[Data.viewUrl]\">\n                            <b> <div [innerHTML]=\"safeHtml(Data.title)\"> </div> </b>\n                        </a>\n                    </h4> \n                    <h6 class=\"mt-3\" *ngIf=\"Data.summary\">{{safeHtml(Data.summary)}}</h6>\n                    <h6 class=\"mt-3\" *ngIf=\"(!Data.summary) && (Data.body)\">{{bodyCharacterLength(Data.body)}}</h6>\n                    <div class=\"mt-2\"> \n                        <!-- <span *ngIf=\"Data.firstName\"> By <small> <b> {{Data.firstName}} {{Data.lastName}}</b> </small></span>  -->\n                        <span *ngIf=\"Data.author_name\"> {{extractNameFromJson(Data.author_name)}}  </span>\n                        <div *ngIf=\"slugHeading == 'Glossary'\" [innerHtml]=\"safeHtml(Data.body)\"> </div> \n                        <small *ngIf=\"Data.publish_date\">{{ Data.publish_date| date : \"MMM dd , yyyy\"}}</small>\n                    </div>    \n                </div>\n                <div class=\"col-md-3 col-sm-3\" *ngIf=\"(slugHeading != 'Glossary') && (Data.primary_image)\">\n                    <img class=\"img-scale\"  [src]=\"getImage(Data.primary_image)\">\n                </div>\n            </div>\n        </div>   \n\n        <div class=\"col-md-12 col-sm-12\" id=\"ads\" *ngIf=\"(i % 3 == 0) && (i > 2)\" ><hr>\n            <div class=\"row align-ads\"> \n                <CoreLib-ads-double-click magazineId={{magazineId}} no=\"1\" location={{currentURL}}></CoreLib-ads-double-click>\n            </div>\n        </div><hr>     \n    </div>   \n    </div>         \n</div>\n\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n       \n\n<div class=\"container mt-5 mb-3\" *ngIf=\"listContentData?.length > 0  && contentType!='2542'\">\n    <div class=\"row\" *ngIf=\"contentData?.length > 9 \"> \n        <div class=\"col-md-4 col-sm-4\"></div>\n            <div class=\"col-md-4 col-sm-4\">    <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button></div>\n        <div class=\"col-md-4 col-sm-4\"></div>\n    </div>   \n</div>",
                styles: [".img-scale{max-width:250px}.heading-border{border-bottom:1px solid #000;color:#000}.taxonomy-text{margin:5px;font-size:18px}.align-ads{margin-left:0!important}"]
            }] }
];
/** @nocollapse */
ContentRelatedContentListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ListContentService },
    { type: RodmanCoreService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-related-searches/content-related-searches.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentRelatedSearchesComponent {
    /**
     * @param {?} Router
     */
    constructor(Router) {
        this.Router = Router;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentRelatedSearchesComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-related-searches',
                template: "<div  *ngIf=\"dataArray\" class=\"mt-3 mb-3\">\n    <div *ngIf=\"dataArray[0]\"> <h3>Related Searches</h3></div>\n    <span class=\"taxonomy-text\" *ngFor=\"let search of dataArray | slice:0:5;let i=index\" >\n        <a [routerLink]=\"['/contents/searchcontent/all/'+search.tag]\"  > {{search.tag}}  </a>\n    </span>\n</div>\n",
                styles: [".taxonomy-text{font-size:15px;background-color:#f2f2f2;font-weight:501;text-transform:uppercase;margin-right:15px;margin-bottom:10px;display:inline-block;letter-spacing:1px}.taxonomy-text a{padding:10px}"]
            }] }
];
/** @nocollapse */
ContentRelatedSearchesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ContentRelatedSearchesComponent.propDecorators = {
    dataArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-glossary/content-glossary.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentGlossaryComponent {
    /**
     * @param {?} ActivatedRoute
     * @param {?} Router
     * @param {?} ListContentService
     * @param {?} RodmanCoreService
     */
    constructor(ActivatedRoute, Router, ListContentService, RodmanCoreService) {
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.ListContentService = ListContentService;
        this.RodmanCoreService = RodmanCoreService;
        this.glossaryData = [];
        this.loading = true;
        this.getAllAd = [];
        this.current_letter = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ActivatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.magazineId = data.magazineId;
        }));
        this.ListContentService.getContent('glossary', this.magazineId, 10, 0, '').subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.glossaryData = data['data'];
            this.getads();
            this.loading = false;
        }));
    }
    /**
     * @return {?}
     */
    getads() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        })));
    }
    /**
     * @param {?} current
     * @param {?} pre
     * @return {?}
     */
    matchCharacter(current, pre) {
        if (current.charAt(0) != pre) {
            this.current_letter = current.charAt(0);
            return true;
        }
        return false;
    }
}
ContentGlossaryComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-glossary',
                template: "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\"  >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<div class=\"row\" *ngIf=\"glossaryData?.length > 0\">\n    <div class=\"col-md-2 col-sm-2\"> </div>\n    <div class=\"col-md-8 col-sm-8 mt-5\">\n        <div class=\"row\">            \n            <!-- <div class=\"col-md-12 col-sm-12\" > -->\n                <div class=\"col-md-8 col-sm-8\" >\n                    <div class=\"col-md-6 col-sm-6\" *ngFor=\"let item of glossaryData; let i = index; let even = even;\">      \n                        <div class=\"col-md-12 col-sm-12 border-bottom mt-3\" id=\"{{current_letter}}\" *ngIf=\"matchCharacter(item.title,current_letter)\">\n                            <b><h4>{{current_letter}}</h4></b><br>\n                        </div>\n                        <!-- <div class=\"col-md-12 col-sm-12\" *ngIf=\"matchCharacter(item.title,current_letter)\">\n                            <br><hr>\n                        </div>     -->                              \n                            <a  [routerLink]=\"['/'+item.viewUrl]\">{{ item.title }} </a>                     \n                    </div>    \n                </div>\n                <div class=\"col-md-4 col-sm-4\" >\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>\n                    </div>\n                </div>\n            <!-- </div>          -->\n        </div>\n    </div>  \n</div>  ",
                styles: [".half-space{margin-right:10px}"]
            }] }
];
/** @nocollapse */
ContentGlossaryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ListContentService },
    { type: RodmanCoreService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-issue/content-issue.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentIssueService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @param {?} slug
     * @return {?}
     */
    getIssue(magazineId, slug) {
        return this.HttpClient.post(apiURL + 'issuescontroller/getIssues', { magazineId: magazineId, slug: slug }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
ContentIssueService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ContentIssueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ ContentIssueService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ContentIssueService_Factory() { return new ContentIssueService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: ContentIssueService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-issue/content-issue.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentIssueComponent {
    /**
     * @param {?} RodmanCoreService
     * @param {?} ActivatedRoute
     * @param {?} Router
     * @param {?} ContentIssueService
     */
    constructor(RodmanCoreService, ActivatedRoute, Router, ContentIssueService) {
        this.RodmanCoreService = RodmanCoreService;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.ContentIssueService = ContentIssueService;
        this.issueData = [];
        this.sliderData = [];
        this.loading = true;
        this.page = 0;
        this.ptintTittle = false;
        this.routeChange = true;
        this.getAllAd = [];
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                /** @type {?} */
                let data = event.url.split('/');
                this.checker = data[data.length - 1];
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ActivatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.magazineId = data.magazineId;
        }));
    }
}
ContentIssueComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-issue',
                template: "<CoreLib-content-magazine-issue url={{checker}} magazineId={{magazineId}}></CoreLib-content-magazine-issue>\n",
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
                styles: [""]
            }] }
];
/** @nocollapse */
ContentIssueComponent.ctorParameters = () => [
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ContentIssueService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-issue-slider/content-issue-slider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentIssueSliderComponent {
    /**
     * @param {?} config
     * @param {?} RodmanCoreService
     */
    constructor(config, RodmanCoreService) {
        this.RodmanCoreService = RodmanCoreService;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
        // config.interval = 3000;
        // config.showNavigationArrows = false;
        // config.showNavigationIndicators = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtmlReplace(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
}
ContentIssueSliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-issue-slider',
                template: "<ngb-carousel *ngIf=\"sliderData.length > 0 \" [interval]=\"false\">\n            <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(0)\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(0)\"> \n                        <a  [routerLink]=\"['/issues/'+sliderData[0].slug]\"  > \n                            <div class=\"picsum-img-wrapper ml-3\">\n                                <img [src]=\"getImage(sliderData[0].image)\" alt=\"No Image\">\n                            </div>\n                            <div class=\"carousel-caption\">\n                                <p>{{safeHtmlReplace(sliderData[0].issue_title)}}</p>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(1))\"> \n                        <a  [routerLink]=\"['/issues/'+sliderData[1].slug]\"  > \n                            <div class=\"picsum-img-wrapper\">\n                                <img [src]=\"getImage(sliderData[1].image)\" alt=\"No Image\">\n                            </div>\n                            <div class=\"carousel-caption\">\n                                <p>{{safeHtmlReplace(sliderData[1].issue_title)}}</p>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(2))\"> \n                        <a  [routerLink]=\"['/issues/'+sliderData[2].slug]\"  > \n                            <div class=\"picsum-img-wrapper\">\n                                <img [src]=\"getImage(sliderData[2].image)\" alt=\"No Image\">\n                            </div>\n                            <div class=\"carousel-caption\">\n                                <p>{{safeHtmlReplace(sliderData[2].issue_title)}}</p>\n                            </div>\n                        </a>\n                    </div>    \n                    <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(3))\"> \n                            <a  [routerLink]=\"['/issues/'+sliderData[3].slug]\"  > \n                                <div class=\"picsum-img-wrapper\">\n                                    <img [src]=\"getImage(sliderData[3].image)\" alt=\"No Image\">\n                                </div>\n                                <div class=\"carousel-caption\">\n                                    <p>{{safeHtmlReplace(sliderData[3].issue_title)}}</p>\n                                </div>\n                            </a>\n                        </div>                                          \n                </div>\n            </ng-template>\n\n            <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(4)\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(4)\"> \n                            <a  [routerLink]=\"['/issues/'+sliderData[4].slug]\"  > \n                                <div class=\"picsum-img-wrapper ml-3\">\n                                    <img [src]=\"getImage(sliderData[4].image)\" alt=\"No Image\">\n                                </div>\n                                <div class=\"carousel-caption\">\n                                    <p>{{safeHtmlReplace(sliderData[4].issue_title)}}</p>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(5))\"> \n                            <a  [routerLink]=\"['/issues/'+sliderData[5].slug]\"  > \n                                <div class=\"picsum-img-wrapper\">\n                                    <img [src]=\"getImage(sliderData[5].image)\" alt=\"No Image\">\n                                </div>\n                                <div class=\"carousel-caption\">\n                                    <p>{{safeHtmlReplace(sliderData[5].issue_title)}}</p>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(6))\"> \n                            <a  [routerLink]=\"['/issues/'+sliderData[6].slug]\"  > \n                                <div class=\"picsum-img-wrapper\">\n                                    <img [src]=\"getImage(sliderData[6].image)\" alt=\"No Image\">\n                                </div>\n                                <div class=\"carousel-caption\">\n                                    <p>{{safeHtmlReplace(sliderData[6].issue_title)}}</p>\n                                </div>\n                            </a>\n                        </div>    \n                        <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(7))\"> \n                                <a  [routerLink]=\"['/issues/'+sliderData[7].slug]\"  > \n                                    <div class=\"picsum-img-wrapper\">\n                                        <img [src]=\"getImage(sliderData[7].image)\" alt=\"No Image\">\n                                    </div>\n                                    <div class=\"carousel-caption\">\n                                        <p>{{safeHtmlReplace(sliderData[7].issue_title)}}</p>\n                                    </div>\n                                </a>\n                            </div>                                          \n                    </div>\n                </ng-template>\n\n\n                <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(8)\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(8)\"> \n                                <a  [routerLink]=\"['/issues/'+sliderData[8].slug]\"  > \n                                    <div class=\"picsum-img-wrapper ml-3\">\n                                        <img [src]=\"getImage(sliderData[8].image)\" alt=\"No Image\">\n                                    </div>\n                                    <div class=\"carousel-caption\">\n                                        <p>{{safeHtmlReplace(sliderData[8].issue_title)}}</p>\n                                    </div>\n                                </a>\n                            </div>\n                            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(9))\"> \n                                <a  [routerLink]=\"['/issues/'+sliderData[9].slug]\"  > \n                                    <div class=\"picsum-img-wrapper\">\n                                        <img [src]=\"getImage(sliderData[9].image)\" alt=\"No Image\">\n                                    </div>\n                                    <div class=\"carousel-caption\">\n                                        <p>{{safeHtmlReplace(sliderData[9].issue_title)}}</p>\n                                    </div>\n                                </a>\n                            </div>\n                            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(10))\"> \n                                <a  [routerLink]=\"['/issues/'+sliderData[10].slug]\"  > \n                                    <div class=\"picsum-img-wrapper\">\n                                        <img [src]=\"getImage(sliderData[10].image)\" alt=\"No Image\">\n                                    </div>\n                                    <div class=\"carousel-caption\">\n                                        <p>{{safeHtmlReplace(sliderData[10].issue_title)}}</p>\n                                    </div>\n                                </a>\n                            </div>    \n                            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(11))\"> \n                                    <a  [routerLink]=\"['/issues/'+sliderData[11].slug]\"  > \n                                        <div class=\"picsum-img-wrapper\">\n                                            <img [src]=\"getImage(sliderData[11].image)\" alt=\"No Image\">\n                                        </div>\n                                        <div class=\"carousel-caption\">\n                                            <p>{{safeHtmlReplace(sliderData[11].issue_title)}}</p>\n                                        </div>\n                                    </a>\n                                </div>                                          \n                        </div>\n                    </ng-template>        \n                    \n                    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(12)\">\n                            <div class=\"row\">\n                                <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(12)\"> \n                                    <a  [routerLink]=\"['/issues/'+sliderData[12].slug]\"  > \n                                        <div class=\"picsum-img-wrapper ml-3\">\n                                            <img [src]=\"getImage(sliderData[12].image)\" alt=\"No Image\">\n                                        </div>\n                                        <div class=\"carousel-caption\">\n                                            <p>{{safeHtmlReplace(sliderData[12].issue_title)}}</p>\n                                        </div>\n                                    </a>\n                                </div>\n                                <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(13))\"> \n                                    <a  [routerLink]=\"['/issues/'+sliderData[13].slug]\"  > \n                                        <div class=\"picsum-img-wrapper\">\n                                            <img [src]=\"getImage(sliderData[13].image)\" alt=\"No Image\">\n                                        </div>\n                                        <div class=\"carousel-caption\">\n                                            <p>{{safeHtmlReplace(sliderData[13].issue_title)}}</p>\n                                        </div>\n                                    </a>\n                                </div>\n                                <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(14))\"> \n                                    <a  [routerLink]=\"['/issues/'+sliderData[14].slug]\"  > \n                                        <div class=\"picsum-img-wrapper\">\n                                            <img [src]=\"getImage(sliderData[14].image)\" alt=\"No Image\">\n                                        </div>\n                                        <div class=\"carousel-caption\">\n                                            <p>{{safeHtmlReplace(sliderData[14].issue_title)}}</p>\n                                        </div>\n                                    </a>\n                                </div>    \n                                <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(15))\"> \n                                        <a  [routerLink]=\"['/issues/'+sliderData[15].slug]\"  > \n                                            <div class=\"picsum-img-wrapper\">\n                                                <img [src]=\"getImage(sliderData[15].image)\" alt=\"No Image\">\n                                            </div>\n                                            <div class=\"carousel-caption\">\n                                                <p>{{safeHtmlReplace(sliderData[15].issue_title)}}</p>\n                                            </div>\n                                        </a>\n                                    </div>                                          \n                            </div>\n                        </ng-template>             \n</ngb-carousel>",
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
                styles: ["img{max-width:150px}.img_class:hover img{background:#000;padding:5px}"]
            }] }
];
/** @nocollapse */
ContentIssueSliderComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"] },
    { type: RodmanCoreService }
];
ContentIssueSliderComponent.propDecorators = {
    sliderData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-rss-feeds/content-rss-feeds.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentRssFeedsService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @return {?}
     */
    rssFeeds(magazineId) {
        return this.HttpClient.post(apiURL + 'contentsController/getContentType', { magazineId: magazineId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
ContentRssFeedsService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ContentRssFeedsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ ContentRssFeedsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ContentRssFeedsService_Factory() { return new ContentRssFeedsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: ContentRssFeedsService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-rss-feeds/content-rss-feeds.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentRssFeedsComponent {
    /**
     * @param {?} ActivatedRoute
     * @param {?} Router
     * @param {?} RodmanCoreService
     * @param {?} ContentRssFeedsService
     */
    constructor(ActivatedRoute, Router, RodmanCoreService, ContentRssFeedsService) {
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.RodmanCoreService = RodmanCoreService;
        this.ContentRssFeedsService = ContentRssFeedsService;
        this.loading = true;
        this.getAllAd = [];
        this.baseUrl = apiURL;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ActivatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.magazineId = data.magazineId;
        }));
        this.rssDataMethod();
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        })));
    }
    /**
     * @return {?}
     */
    rssDataMethod() {
        this.ContentRssFeedsService.rssFeeds(this.magazineId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.rssData = data['country'];
            this.loading = false;
        }));
    }
}
ContentRssFeedsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-rss-feeds',
                template: "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <h2> RSS Feeds </h2><br><br>         \n                    <h4> Content Types </h4><br>    \n                    \n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n    \n                    <div class=\"mt-2 mb-2\" *ngIf=\"rssData\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6 p-2\" *ngFor=\"let contentType of rssData\">\n                                <a target=\"_blank\" href=\"{{baseUrl+'feedcreator/rss/'+contentType.id+'/'+magazineId}}\"> {{contentType.tag.replace('_',\" \").replace('_',\" \") | uppercase}}</a>\n                            </div>\n                        </div>\n                    </div>                                \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>                 \n                    <div class=\"col-md-12 col-sm-12 mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"col-md-12 col-sm-12 mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div>\n            </div>    \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>        ",
                styles: [""]
            }] }
];
/** @nocollapse */
ContentRssFeedsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: RodmanCoreService },
    { type: ContentRssFeedsService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-lists/content-lists.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$1 = [];
/** @type {?} */
const contentDataView$1 = [
    { status: 'Fail', data: ɵ0$1, message: '', video: [], magazine_id: '' },
];
class ContentListsComponent {
    /**
     * @param {?} ViewContentService
     * @param {?} config
     * @param {?} ContentBoxTabService
     * @param {?} RodmanCoreService
     * @param {?} Router
     */
    constructor(ViewContentService, config, ContentBoxTabService, RodmanCoreService, Router) {
        this.ViewContentService = ViewContentService;
        this.ContentBoxTabService = ContentBoxTabService;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.contentPageUrl = '/contents/view_breaking-news/2019-08-11/rye-may-stabilize-blood-sugar-levels-and-decrease-cardiovascular-disease-risk/';
        this.magazineId = 1;
        this.ads = [];
        this.dataFetch = false;
        this.displayDefault = 0;
        this.contentDataView = contentDataView$1;
        this.selectedContentView = contentDataView$1[0];
        this.loading = true;
        this.dataFetch = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.viewData();
    }
    /**
     * @param {?} contentDataView
     * @return {?}
     */
    selectView(contentDataView) {
        this.selectedContentView = contentDataView;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.getads();
        // this.viewData();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        return this.RodmanCoreService.safeHtml(data);
    }
    /**
     * @return {?}
     */
    viewData() {
        if ((this.dataFetch) == false) {
            this.ViewContentService.getContentDetails(this.magazineId, this.contentPageUrl).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.dataFetch = true;
                this.contentData = data['data'];
                this.contentDataView[0] = data['data'];
                this.page = data['data'].slug;
                this.displayDefault = 1;
                this.loading = false;
            }));
        }
    }
    /**
     * @return {?}
     */
    check() {
        this.dataFetch = false;
    }
    /**
     * @return {?}
     */
    getads() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.ads = data;
        })));
    }
}
ContentListsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-lists',
                template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display>\n            </div>\n        </div>\n        <div class=\"col-6 mt-5 \">\n            <div class=\"row\" *ngIf=\"contentDataView[0]\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"contentDataView[0]\">\n                        <div class=\"container mb-3 mt-4\" id=\"default\"  *ngFor=\"let contentData of contentDataView[0]\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\">{{contentData.title}}</h1>\n                            <h5>{{contentData.summary}}</h5>\n                          \n                            <div class=\"row\">\n                                <div class=\" col-sm-6 col-md-6 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-4\">\n                                    <b> <!-- {{ extractNameFromJson(contentData.author_name) }}  -->\n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n                            <div class=\"row\">\n                                <div class=\"col-md-7\" [innerHtml]=\"safeHtml(contentData.body)\"></div>                                \n                                <!-- Related Content  Box -->\n                                <div class=\"col-md-5\">\n                                    <CoreLib-content-related *ngIf=\"contentDataView[0]\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                                </div>                            \n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"contentDataView[0]\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of contentDataView[0]\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display>\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n\n\n\n\n<!-- Related Searches -->\n<!-- <div class=\"row\" *ngFor=\"let contentData of contentDataView[0]\">\n    <div class=\"col-md-2 col-sm-2\"></div>\n    <div class=\"col-md-6 col-sm-offset-6\" >\n        <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n    </div>\n    <div class=\"col-md-4 col-sm-4\"></div>\n</div> -->\n\n<!-- Slider Show -->\n<div class=\"row\" *ngFor=\"let contentData of contentDataView[0]\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n    \n    <!-- Related Content -->\n<div class=\"row\" *ngFor=\"let contentData of contentDataView[0]\" >\n    <div class=\"col-sm-2 col-md-2\" ></div>\n    <div class=\"col-sm-6 col-md-6\" >\n        <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n    </div>\n    <div class=\"col-sm-4 col-md-4\" ></div>    \n</div>  ",
                styles: [""]
            }] }
];
/** @nocollapse */
ContentListsComponent.ctorParameters = () => [
    { type: ContentViewService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"] },
    { type: ContentBoxTabsService },
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/contents-webinar/contents-webinar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentsWebinarComponent {
    /**
     * @param {?} ListContentService
     * @param {?} RodmanCoreService
     * @param {?} Router
     * @param {?} ActivatedRoute
     */
    constructor(ListContentService, RodmanCoreService, Router, ActivatedRoute) {
        this.ListContentService = ListContentService;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.limit = 10;
        this.page = 0;
        this.loading = true;
        this.getAllAd = [];
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.currentURL = event.url;
                if (this.currentURL == '/contents/list_webinars') {
                    this.currentURL = '';
                    this.contentType = '2542';
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ActivatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.magazineId = data.magazineId;
        }));
        this.getContentData();
        this.getads();
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:,]/g, "")
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
    /**
     * @return {?}
     */
    getContentData() {
        this.ListContentService.getContent(this.currentURL, this.magazineId, this.limit, this.page, this.contentType).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.listContentData = data['data'];
            if (this.page == 0) {
                this.slugHeading = data['contentTypeName'];
            }
            this.page = data['page'] + 1;
            this.loading = false;
        }));
    }
    /**
     * @return {?}
     */
    getads() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        })));
    }
}
ContentsWebinarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-contents-webinar',
                template: "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    \n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"(!loading)  && ((contentType=='2542' && (currentURL == '')) || (currentURL == '/contents/list_ebook') )\">     <div class=\"heading-border mb-2\" id=\"webinars\"><h2>{{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>    \n                    <div class=\"border-bottom\" *ngFor=\"let Data of listContentData; let i =index\" >\n                        <div class=\"row\">\n                            <div class=\"col-sm-2 col-md-2\"><img class=\"img-responsive Webinars\"  [src]=\"getImage(Data.primary_image)\" alt=\"No Image\"> </div>\n                            <div class=\"col-sm-10 col-md-10\">\n                                <h1><div [innerHTML]=\"safeHtml(Data.title)\"> </div></h1>\n                                <div [innerHTML]=\"Data.body\"></div>\n                            </div>\n                        </div>   \n                    </div>\n                </div>           \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n    ",
                styles: [".heading-border{border-bottom:1px solid #000;color:#000}.container{min-height:500px}.Webinars{max-width:100%;min-width:100px}"]
            }] }
];
/** @nocollapse */
ContentsWebinarComponent.ctorParameters = () => [
    { type: ListContentService },
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/content-magazine-issue/content-magazine-issue.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentMagazineIssueComponent {
    /**
     * @param {?} RodmanCoreService
     * @param {?} ActivatedRoute
     * @param {?} Router
     * @param {?} ContentIssueService
     */
    constructor(RodmanCoreService, ActivatedRoute, Router, ContentIssueService) {
        this.RodmanCoreService = RodmanCoreService;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.ContentIssueService = ContentIssueService;
        this.issueData = [];
        this.sliderData = [];
        this.loading = true;
        this.page = 0;
        this.ptintTittle = false;
        this.routeChange = true;
        this.getAllAd = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.name = magazineIds[this.magazineId].name;
        this.issueData = [];
        this.sliderData = [];
        this.getAllAd = [];
        this.viewAdRender = 0;
        this.getIssue(this.url);
        this.getads();
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getIssue(url) {
        this.ContentIssueService.getIssue(this.magazineId, url).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            /** @type {?} */
            let collectData = data['data'];
            // if(this.page==0)  {
            this.sliderData = data['issue'];
            this.page = 1;
            // }      
            this.nextIssue = data['nextIssue'];
            for (let data of collectData) {
                this.issueData.push(data);
            }
            this.loading = false;
        }));
    }
    /**
     * @return {?}
     */
    getads() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        })));
    }
    /**
     * @param {?} slug
     * @return {?}
     */
    loadMoreData(slug) {
        this.loading = true;
        this.issueData.push({ 'id': "", 'primary_image': "", 'title': "", 'summary': "", 'publish_date': "", 'viewUrl': "", 'issue_title': "", 'nextTag': this.nextIssue.issue_title });
        this.getIssue(slug);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
    /**
     * @param {?} title
     * @return {?}
     */
    titlePrint(title) {
        return (title == 1) ? true : false;
    }
}
ContentMagazineIssueComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-content-magazine-issue',
                template: "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"!(loading)\"><h3>{{name}} Magazine</h3></div>\n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                    <div class=\"mb-4 border p-2\" *ngIf=\"sliderData.length > 0\">                        \n                        <CoreLib-content-issue-slider [sliderData]=\"sliderData\"></CoreLib-content-issue-slider>\n                    </div>                    \n                    <div class=\"mt-3 mb-3 border-bottom\" *ngFor=\"let issue of issueData;let i=index\">\n                        <div class=\"col-md-12 col-sm-12 mt-3 mb-3\" *ngIf=\"i == 0\"><h2>{{issue.issue_title}}</h2> </div>                 \n                      \n                        <div>\n                            <h3 *ngIf=\"issue.viewUrl\"> \n                                <a [innerHTML]=\"safeHtml(issue.title)\" [routerLink]=\"['/'+issue.viewUrl]\"></a> \n                            </h3>\n                            <h3 class=\"mb-2\" *ngIf=\"issue.nextTag\"> \n                                {{issue.nextTag}}\n                            </h3>\n                        </div>    \n                        <div>    \n                            <h5 [innerHTML]=\"safeHtml(issue.summary)\" ></h5>\n                        </div>    \n                        <div *ngIf=\"issue.publish_date\" class=\"mb-1\"><small><b>{{issue.publish_date| date : \"MMM dd , yyyy\"}}</b></small></div>\n                    </div>\n                                        \n                    <div class=\"container mt-5 mb-3\" *ngIf=\"(nextIssue) && (sliderData.length > 0) && (!loading)\">                            \n                        <div class=\"row\" > \n                            <div class=\"col-md-4 col-sm-4\"></div>\n                                <div class=\"col-md-4 col-sm-4\">                                       \n                                    <button class=\"text-center button\"  (click)=\"loadMoreData(nextIssue.slug)\">Load More</button>\n                                </div>\n                            <div class=\"col-md-4 col-sm-4\"></div>\n                        </div>   \n                    </div>    \n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n        \n            \n\n\n",
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
                styles: [""]
            }] }
];
/** @nocollapse */
ContentMagazineIssueComponent.ctorParameters = () => [
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ContentIssueService }
];
ContentMagazineIssueComponent.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    magazineId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contents/contents.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentsModule {
}
ContentsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ListContentComponent, StaticContentComponent, ContentViewComponent, ContentDynamicViewComponent, ContentInfographicsComponent, ContentSearchComponent, ContentRelatedComponent, ContentSuggestSlideShowComponent, ContentBoxTabsComponent, ContentDefaultComponent, ContentJobsComponent, ContentFeatureComponent, ContentVideoComponent, ContentWebinarsComponent, ContentFormularyComponent, ContentBuyerGuideBasicComponent, ContentBuyerGuideMicroSiteComponent, ContentSlideShowComponent, ContentStaticContentComponent, ContentWhitePaperComponent, ContentNewsReleaseComponent, ContentCompanyRelatedComponent, ContentRelatedContentListComponent, ContentRelatedSearchesComponent, ContentGlossaryComponent, ContentIssueComponent, ContentIssueSliderComponent, ContentRssFeedsComponent, ContentListsComponent, ContentsWebinarComponent, ContentMagazineIssueComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    // FormsModule,
                    ContentsRoutingModule,
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"].forRoot(),
                    AdsModule,
                    SitesModule,
                    UsersModule,
                    ngx_dfp__WEBPACK_IMPORTED_MODULE_10__["DfpModule"].forRoot({
                        idleLoad: true,
                        enableVideoAds: true,
                        personalizedAds: true,
                        // Request personalized ads by default
                        singleRequestMode: true,
                        // Only applies to initial refresh
                        onSameNavigation: 'refresh',
                        globalTargeting: {
                        // food: ['NUT', 'HOME']
                        }
                    })
                ],
                exports: [ListContentComponent, StaticContentComponent, ContentViewComponent, ContentDynamicViewComponent, ContentInfographicsComponent, ContentSearchComponent, ContentRelatedComponent, ContentSuggestSlideShowComponent, ContentBoxTabsComponent, ContentDefaultComponent, ContentRelatedContentListComponent, ContentGlossaryComponent, ContentIssueComponent, ContentIssueSliderComponent, ContentRssFeedsComponent, ContentListsComponent, ContentWebinarsComponent, ContentMagazineIssueComponent],
                providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"] }],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/taxonomies/taxonomies-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes$5 = [];
class TaxonomiesRoutingModule {
}
TaxonomiesRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$5)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/taxonomies/list-taxonomies/list-taxonomies.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListTaxonomiesService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} slug
     * @param {?} magazineId
     * @param {?} limit
     * @param {?} page
     * @param {?} contentType
     * @return {?}
     */
    getContent(slug, magazineId, limit, page, contentType) {
        return this.HttpClient.post(apiURL + 'taxonomysController/getContentTaxonomys', { pageUrl: slug, magazineId: magazineId, limit: limit, page: page, contentType: contentType }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} slug
     * @param {?} magazineId
     * @return {?}
     */
    getContentTopTaxonomy(slug, magazineId) {
        return this.HttpClient.post(apiURL + 'taxonomysController/getTopTaxonomys', { pageUrl: slug, magazineId: magazineId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} contentId
     * @param {?} magazineId
     * @return {?}
     */
    getContentTaxonomy(contentId, magazineId) {
        return this.HttpClient.post(apiURL + 'taxonomysController/getContentTaxonomyTagged', { contentId: contentId, magazineId: magazineId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
ListTaxonomiesService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ListTaxonomiesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ ListTaxonomiesService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ListTaxonomiesService_Factory() { return new ListTaxonomiesService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: ListTaxonomiesService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/taxonomies/list-taxonomies/list-taxonomies.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListTaxonomiesComponent {
    /**
     * @param {?} Router
     * @param {?} RouterModule
     * @param {?} ListTaxonomiesService
     * @param {?} RodmanCoreService
     */
    constructor(Router, RouterModule, ListTaxonomiesService, RodmanCoreService) {
        this.Router = Router;
        this.RouterModule = RouterModule;
        this.ListTaxonomiesService = ListTaxonomiesService;
        this.RodmanCoreService = RodmanCoreService;
        this.taxonomyData = [];
        this.limit = 10;
        this.page = 0;
        this.contentType = '';
        this.loading = true;
        this.sliderData = [];
        this.staticUrl = '/';
        this.tagTaxonomy = [];
        this.all = [];
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.magazineId == 1) {
            this.staticUrl = '/knowledge-center/';
        }
        // this.getTaxonomyData();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.loading = true;
        this.page = 0;
        this.all = [];
        this.slugHeading;
        this.taxonomyData = [];
        this.sliderData = [];
        this.contentTaxonomy = [];
        this.getTaxonomyData();
    }
    /**
     * @return {?}
     */
    getTaxonomyData() {
        this.taxonomyUrl = this.routeUrl.split('/');
        this.taxonomyUrlTo = this.taxonomyUrl[1];
        /** @type {?} */
        let cleanUrl = this.routeUrl.replace('/', "");
        if (this.page == 0) {
            this.ListTaxonomiesService.getContentTopTaxonomy(cleanUrl, this.magazineId).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.contentTaxonomy = data['CONTENT_TAXONOMYS'];
                // this.slugHeading = data['contentTypeName'];
                this.all = data['all'];
            }));
        }
        this.ListTaxonomiesService.getContent(cleanUrl, this.magazineId, this.limit, this.page, this.contentType).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.listTaxonomyData = data['data'];
            if (this.page == 0) {
                this.slugHeading = data['contentTypeName'];
                // this.contentTaxonomy = data['CONTENT_TAXONOMYS'];
                this.sliderData.push(this.listTaxonomyData);
            }
            this.page = data['page'] + 1;
            for (let taxonomy of this.listTaxonomyData) {
                console.log(taxonomy);
                this.taxonomyData.push(taxonomy);
            }
            this.loading = false;
        }));
    }
    /**
     * @param {?} slug
     * @return {?}
     */
    routing(slug) {
        this.Router.navigateByUrl(this.taxonomyUrlTo + '/' + slug);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    bodyCharacterLength(data) {
        return this.RodmanCoreService.bodyCharacterLength(data);
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
    /**
     * @return {?}
     */
    loadMoreData() {
        this.loading = true;
        this.getTaxonomyData();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    extractNameFromJson(data) {
        return this.RodmanCoreService.extractNameFromJson(data);
    }
}
ListTaxonomiesComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-list-taxonomies',
                inputs: ['routeUrl', 'magazineId',],
                template: "<div class=\"container mt-5\"  >\n    <div class=\"row\" >\n        <div class=\"col-md-12 col-sm-12\" >\n            <CoreLib-slider [data]=\"sliderData\"></CoreLib-slider>\n        </div>\n    </div>\n    <div class=\"mb-2\" *ngIf=\"slugHeading\"><h2> {{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>\n    <span *ngIf=\"all.tag\">\n        <span class=\"taxonomy-text\" ><a  [routerLink]=\"['/'+all.url]\">{{all.tag}}</a></span> \n    </span>    \n    <span  *ngFor=\"let taxonomyTitle of contentTaxonomy;let k = index;\" class=\"taxonomy-text\">\n        <a *ngIf=\"(magazineId != 1)\" [routerLink]=\"['/'+taxonomyUrlTo+'/'+taxonomyTitle.slug]\"  > {{taxonomyTitle.tag}}  </a>\n        <a *ngIf=\"(magazineId == 1)\" [routerLink]=\"['/'+taxonomyUrlTo+'/'+taxonomyTitle.url]\"  > {{taxonomyTitle.tag}}  </a>\n    </span>\n    <div class=\"heading-border\"></div>\n    <div  *ngIf=\"taxonomyData?.length > 0\">\n        <div *ngFor=\"let Data of taxonomyData; let i =index\">\n            <div class=\"col-md-12 col-sm-12\">\n                <div class=\"row\">       \n                    <div class=\"col-md-12 col-sm-12\">\n                        <span *ngFor=\"let taxonomy of Data.taggedTaxonomy.KNOWLEDGE_CENTER_TAXONOMY | slice:0:5; let j =index\">\n                            <span *ngIf=\"j\"> | </span>\n                            <a  [routerLink]=\"[staticUrl+taxonomy.url]\"  > {{taxonomy.tag}}  </a>\n                        </span>                       \n                        <!-- <span *ngFor=\"let taxonomy of Data.taggedTaxonomy.NEWS_TAXONOMY; let z =index\">\n                            <a *ngIf=\"magazineId != 1\" [routerLink]=\"['/'+taxonomy.url]\"  > {{taxonomy.tag}}   </a> \n                            <a *ngIf=\"magazineId == 1\"  [routerLink]=\"['/'+staticUrl+taxonomy.url]\"  > {{taxonomy.tag}}  </a>  |\n                        </span> -->\n                    </div>                          \n                    <div class=\"col-md-9 col-sm-9\">\n                        \n                        <h4 class=\"mt-2\"><a [routerLink]=\"[Data.viewUrl]\"><b><div [innerHTML]=\"safeHtml(Data.title)\"> </div></b></a></h4>\n                         \n                        <h6 class=\"mt-3\" *ngIf=\"Data.summary\" [innerHTML]=\"safeHtml(Data.summary)\"></h6>\n                        <h6 class=\"mt-3\" *ngIf=\"((!Data.summary) && (Data.body))\" [innerHTML]=\"bodyCharacterLength(Data.body)\"></h6>\n\n                        <div class=\"mt-2\"> \n                            <span class=\"\" *ngIf=\"Data.tag\"> <b> {{Data.tag.replace('-', ' ').replace('_', ' ') | titlecase}} . </b> </span>                        \n                            <span *ngIf=\"Data.author_name\"> {{extractNameFromJson(Data.author_name)}} </span>\n                            <small *ngIf=\"Data.publish_date\"> {{ Data.publish_date| date : \"MMM dd , yyyy\"}}  </small>\n                        </div>    \n                    </div>\n                    <div class=\"col-md-3 col-sm-3\" *ngIf=\"Data.primary_image\">\n                        <img class=\"img-scale\" [src]=\"getImage(Data.primary_image)\" alt=\"\"> \n                    </div>\n                </div>\n            </div>   \n            <div id=\"ads\" *ngIf=\"(i % 3 == 0) && (i > 2)\" ><hr>\n                <div class=\"col-md-12 col-sm-12\">\n                    <div class=\"row\"> \n                        <CoreLib-ads-double-click magazineId={{magazineId}} no=\"1\" location={{currentURL}}></CoreLib-ads-double-click>\n                    </div>\n                </div>\n            </div><hr>  \n        </div>    \n    </div>\n</div>\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<div class=\"container mt-5 mb-3\" *ngIf=\"taxonomyData?.length > 0\">\n    <div class=\"row\" *ngIf=\"listTaxonomyData?.length > 9 \"> \n        <div class=\"col-md-4 col-sm-4\"></div>\n            <div class=\"col-md-4 col-sm-4\">    <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button></div>\n        <div class=\"col-md-4 col-sm-4\"></div>\n    </div>    \n</div>",
                styles: [".img-scale{max-width:150px}.heading-border{border-bottom:1px solid #000;color:#000}.search-results{overflow:scroll}.pointer:hover{cursor:pointer;text-decoration:underline}.loader-height{min-height:800px}.taxonomy-text{font-size:15px;background-color:#f2f2f2;font-weight:501;text-transform:uppercase;margin-right:15px;margin-bottom:10px;display:inline-block;letter-spacing:1px}#ads,.taxonomy-text a{padding:10px}"]
            }] }
];
/** @nocollapse */
ListTaxonomiesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"] },
    { type: ListTaxonomiesService },
    { type: RodmanCoreService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/taxonomies/taxonomies.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TaxonomiesModule {
}
TaxonomiesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ListTaxonomiesComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    AdsModule,
                    SitesModule,
                    TaxonomiesRoutingModule,
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ],
                exports: [ListTaxonomiesComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directory-section/directory-section-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes$6 = [];
class DirectorySectionRoutingModule {
}
DirectorySectionRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes$6, {
                        anchorScrolling: 'enabled',
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directory-section/directory-home-page/directory-home-page.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectoryHomePageService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} magazineId
     * @param {?} slug
     * @return {?}
     */
    buyerGuideCompany(magazineId, slug) {
        return this.HttpClient.post(apiURL + 'taxonomysController/buyersguideSearchDirectory', { magazineId: magazineId, slug: slug }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} magazineId
     * @param {?} slug
     * @return {?}
     */
    buyersguideCategory(magazineId, slug) {
        return this.HttpClient.post(apiURL + 'taxonomysController/buyersguideCategory', { magazineId: magazineId, slug: slug }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} magazineId
     * @param {?} slug
     * @return {?}
     */
    buyersguideCountry(magazineId, slug) {
        return this.HttpClient.post(apiURL + 'taxonomysController/buyersguideCountry', { magazineId: magazineId, slug: slug }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
DirectoryHomePageService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DirectoryHomePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ DirectoryHomePageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DirectoryHomePageService_Factory() { return new DirectoryHomePageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: DirectoryHomePageService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directory-section/directory-home-page/directory-home-page.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectoryHomePageComponent {
    /**
     * @param {?} ActivatedRoute
     * @param {?} DirectoryHomePageService
     * @param {?} RodmanCoreService
     * @param {?} Router
     */
    constructor(ActivatedRoute, DirectoryHomePageService, RodmanCoreService, Router) {
        this.ActivatedRoute = ActivatedRoute;
        this.DirectoryHomePageService = DirectoryHomePageService;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.getAllAd = [];
        this.alphabet = [];
        this.loading = true;
        this.current_letter = '';
        this.companiesTitleArray = {
            '1': { '0': 'Featured Supplier Showcase Companies', '1': 'Supplier Showcase Companies', '2': 'Featured Companies' },
            '5': { '0': 'Featured Company Capabilities Microsite', '1': 'Company Capabilities Microsite', '2': 'Featured Companies' },
            '6': { '0': 'Featured Company Profiles Microsite', '1': 'Company Profiles Microsite', '2': 'Featured Companies' },
            '7': { '0': 'Featured Microsite Companies', '1': 'Microsite Companies', '2': 'Featured Companies' },
            '8': { '0': 'Featured Company Profiles Microsite', '1': 'Company Profiles Microsite', '2': 'Featured Companies' },
            '9': { '0': 'Featured Corporate Profile Microsite', '1': 'Corporate Profile Microsite', '2': 'Featured Companies' },
            '10': { '0': 'Featured Technical Profile Microsite', '1': 'Technical Profile Microsite', '2': 'Featured Companies' },
            '11': { '0': 'Featured Microsite Companies', '1': 'Microsite Companies', '2': 'Featured Companies' },
            '12': { '0': 'Featured Microsite Companies', '1': 'Microsite Companies', '2': 'Featured Companies' },
            '13': { '0': 'Company Profile MicrositePLUS', '1': 'Company Profile Microsite', '2': 'Featured Companies' },
            '14': { '0': 'Featured Microsite Companies', '1': 'Microsite Companies', '2': 'Featured Companies' },
            '15': { '0': 'Featured Technical Profile Microsite', '1': 'Technical Profile Microsite', '2': 'Featured Companies' },
        };
        this.featuredmicrositeCompanies = [];
        this.micrositeCompanies = [];
        this.featuredBgCompanies = [];
        Router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ActivatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.magazineId = data.magazineId;
        }));
        this.getPageAd();
        this.buyersguideCategory();
        this.buyerGuideCompany();
        this.buyersguideCountry();
    }
    /**
     * @return {?}
     */
    getPageAd() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        })));
    }
    /**
     * @return {?}
     */
    buyerGuideCompany() {
        this.DirectoryHomePageService.buyerGuideCompany(this.magazineId, this.currentURL).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.data = data['data'];
            for (let compnayCheck of this.data) {
                if ((compnayCheck.has_microsite_listing == 1) && (compnayCheck.has_priority_listing == 1) && (compnayCheck.has_featured_mircosite_listing == 1)) {
                    this.featuredmicrositeCompanies.push(compnayCheck);
                }
                else if ((compnayCheck.has_microsite_listing == 1) && (compnayCheck.has_priority_listing == 1) && (compnayCheck.has_featured_mircosite_listing == 0)) {
                    this.micrositeCompanies.push(compnayCheck);
                }
                else if ((compnayCheck.has_microsite_listing == 0) && (compnayCheck.has_priority_listing == 1) && (compnayCheck.has_featured_mircosite_listing == 0)) {
                    this.featuredBgCompanies.push(compnayCheck);
                    // let checkCompanyTitle = compnayCheck.content_type_id;
                    // if(checkCompanyTitle != this.titleCheck ){}
                }
                if (compnayCheck.title.charAt(0).toUpperCase() != this.current_letter) {
                    this.current_letter = compnayCheck.title.charAt(0).toUpperCase();
                    this.alphabet.push(compnayCheck.title.charAt(0).toUpperCase());
                }
            }
            this.loading = false;
        }));
    }
    /**
     * @return {?}
     */
    buyersguideCategory() {
        this.DirectoryHomePageService.buyersguideCategory(this.magazineId, this.currentURL).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.buyersGuideCategoryData = data['data'];
        }));
    }
    /**
     * @return {?}
     */
    buyersguideCountry() {
        this.DirectoryHomePageService.buyersguideCountry(this.magazineId, this.currentURL).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.buyersguideCountryData = data['country'];
        }));
    }
    /**
     * @param {?} current
     * @param {?} pre
     * @return {?}
     */
    matchCharacter(current, pre) {
        if (current.charAt(0).toUpperCase() != pre) {
            this.current_letter = current.charAt(0);
            return true;
        }
        return false;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "")
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
}
DirectoryHomePageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-directory-home-page',
                template: "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n        <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n    </div>\n    <div class=\"container-fluid\">    \n        <div class=\"row\">\n            <div class=\"col\">\n                <div *ngIf=\"viewAdRender == 1\">\n                    <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n                </div>\n            </div>\n            <div class=\"col-8 mt-5 \">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-12\"><h3>All Companies</h3></div>\n                    <div class=\"col-sm-4 col-md-4\">\n                        <div class=\"border\">\n                            <!-- <CoreLib-directory-search-box [title]=\"\" [magazineId]=\"\" [data]=\"\"></CoreLib-directory-search-box> -->\n                            <div *ngIf=\"buyersGuideCategoryData?.length > 0 \">\n                                <div class=\"border\"> <h5>SEARCH BY...</h5> </div>\n                                <div class=\"back-color\" [innerHTML]=\"safeHtml(buyersGuideCategoryData[0][0].tag)\"></div>\n                                <div class=\"country\">\n                                    <div class=\"row ml-1\" *ngFor=\"let bgCatData of buyersGuideCategoryData[0][0].child\">\n\n                                        <div *ngIf=\"bgCatData.count != 0 \" class=\"col-sm-9 col-md-9\" [innerHTML]=\"safeHtml(bgCatData.tag)\"></div>\n                                        <div *ngIf=\"bgCatData.count != 0 \" class=\"col-sm-3 col-md-3\" >({{bgCatData.count}})</div>\n\n                                    </div> \n                                </div>    \n                            </div>\n                            <div *ngIf=\"buyersguideCountryData?.length > 0 \">\n                                <div class=\"back-color\" >Country</div>\n                                <div class=\"country\">\n                                    <div class=\"row ml-1\" *ngFor=\"let countryData of buyersguideCountryData\">\n                                        <div *ngIf=\"countryData.count != 0\" class=\"col-sm-9 col-md-9\" [innerHTML]=\"safeHtml(countryData.name)\"></div>\n                                        <div class=\"col-sm-3 col-md-3\" *ngIf=\"(countryData.child) && (countryData.count != 0)\">\n                                            ({{countryData.child ? countryData.child.length: '' }})  </div>\n                                    </div> \n                                </div>    \n                            </div>                          \n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">\n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>  \n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">\n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>\n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">                                \n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>\n                        </div>\n        \n                    </div>\n                    <div class=\"col-sm-8 col-md-8\">\n\n                        <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                        \n                        <!-- 1st -->\n                        <div *ngIf=\"featuredmicrositeCompanies?.length > 0 \"><h3>{{companiesTitleArray[magazineId][0]}}</h3></div>\n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let featuredmicrositeCompaniesData of featuredmicrositeCompanies;let i = index\">                        \n                            <div class=\"col-sm-3 col-md-3\">\n                                <img [src]=\"featuredmicrositeCompaniesData.primary_image_main\" width=\"100%\">\n                            </div>\n                            <div class=\"col-sm-6 col-md-6\">\n                                <a [routerLink]=\"['/'+featuredmicrositeCompaniesData.viewUrl]\">{{featuredmicrositeCompaniesData.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+featuredmicrositeCompaniesData.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>\n                        <!-- 2nd -->\n                        <div class=\"mt-2\" *ngIf=\"featuredmicrositeCompanies?.length > 0 \"><h3>{{companiesTitleArray[magazineId][1]}}</h3></div>\n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let micrositeCompanies of micrositeCompanies;let i = index\">                        \n                            <div class=\"col-sm-3 col-md-3\">\n                                <img [src]=\"micrositeCompanies.primary_image_main\" width=\"100%\">\n                            </div>\n                            <div class=\"col-sm-6 col-md-6\">\n                                <a [routerLink]=\"['/'+micrositeCompanies.viewUrl]\" >{{micrositeCompanies.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+micrositeCompanies.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>                        \n\n\n                        <!-- 3rd -->\n                        <div class=\"mt-2\" *ngIf=\"featuredBgCompanies?.length > 0 \">\n                            \n                            <ng-container *ngIf=\"(magazineId == 5 ) || (magazineId == 13);else defaultView\">\n                                <ng-container *ngIf=\"featuredBgCompanies[0].content_type_id == '2666'\">  \n                                    <h3>Deluxe Companies</h3>\n                                </ng-container>\n                                <ng-container *ngIf=\"featuredBgCompanies[0].content_type_id == '2543'\">  \n                                    <h3>{{companiesTitleArray[magazineId][2]}}</h3>\n                                </ng-container>\n                            </ng-container>                  \n                        \n                            <ng-template #defaultView>\n                                <ng-container > \n                                    <h3>{{companiesTitleArray[magazineId][2]}}</h3>\n                                </ng-container> \n                            </ng-template>\n\n\n\n\n                        </div>  \n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let featuredBgCompanies of featuredBgCompanies;let i = index\">                 <div class=\"col-sm-9 col-md-9\">\n                                <a [routerLink]=\"['/'+featuredBgCompanies.viewUrl]\">{{featuredBgCompanies.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+featuredBgCompanies.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>                            \n\n                        \n                        <!-- All -->\n                        <div class=\"mt-2\" *ngIf=\"data?.length > 0 \"><h3 id=\"allCompany\">All Companies</h3></div>\n                        <div class=\"mt-2 mb-2\" *ngIf=\"alphabet?.length > 0 \">\n                            <div class=\"row text-center back-color\" >\n                                <a *ngFor=\"let Character of alphabet\" class=\"mr-1\" [routerLink] [fragment]=\"Character\" [routerLinkActive]=\"'active'\"  [routerLinkActiveOptions]=\"{exact: true}\">  {{Character | titlecase}}  </a>\n                            </div>    \n                        </div>    \n\n                        <div class=\"row mt-3 mb-1\" *ngFor=\"let allCompanies of data;let i = index\">         \n                            <div class=\"col-md-12 col-sm-12 border-bottom mt-3\" id=\"{{current_letter}}\" *ngIf=\"matchCharacter(allCompanies.title,current_letter)\"> \n                                <div class=\"row\">\n                                    <div class=\"col-sm-9 col-md-9\">\n                                        <b><h4>{{current_letter}}</h4></b>\n                                    </div>\n                                    <div class=\"col-sm-3 col-md-3\">\n                                        <!-- <a [routerLink] [fragment]=\"'allCompany'\" [routerLinkActive]=\"'active'\"  [routerLinkActiveOptions]=\"{exact: true}\">  Return To Top    </a>  -->\n                                    </div>      <br> \n                                </div>\n                            </div>\n                                <a  [routerLink]=\"['/'+allCompanies.viewUrl]\">{{ allCompanies.title }} </a>         \n                        </div>    \n\n                    </div> \n                </div>      \n            </div>\n            <div class=\"col\">\n                <div *ngIf=\"viewAdRender == 1\">\n                    <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n                </div>\n            </div>\n        </div>   \n    </div>\n    \n    ",
                styles: [".back-color{background:#dcdcdc;padding:10px}.country{max-height:300px;overflow-y:scroll;overflow-x:hidden}"]
            }] }
];
/** @nocollapse */
DirectoryHomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: DirectoryHomePageService },
    { type: RodmanCoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directory-section/directory-search-box/directory-search-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectorySearchBoxComponent {
    /**
     * @param {?} RodmanCoreService
     */
    constructor(RodmanCoreService) {
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtml(data) {
        // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "")
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
}
DirectorySearchBoxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-directory-search-box',
                template: "<div class=\"back-color\" [innerHTML]=\"safeHtml(title)\"></div>\n<div class=\"country\">\n    <div class=\"row ml-1\" *ngFor=\"let bgCatData of data\">\n        <div class=\"col-sm-9 col-md-9\" [innerHTML]=\"safeHtml(bgCatData.tag)\"></div>\n        <div class=\"col-sm-3 col-md-3\" *ngIf=\"bgCatData.count\">({{bgCatData.count}})</div>\n    </div> \n</div>\n",
                styles: [".country{max-height:300px;overflow-y:scroll;overflow-x:hidden}.back-color{background:#dcdcdc;padding:10px}"]
            }] }
];
/** @nocollapse */
DirectorySearchBoxComponent.ctorParameters = () => [
    { type: RodmanCoreService }
];
DirectorySearchBoxComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    magazineId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boxNo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directory-section/directory-basic-company-listing/directory-basic-company-listing.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectoryBasicCompanyListingComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DirectoryBasicCompanyListingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-directory-basic-company-listing',
                template: "<p>directory-basic-company-listing works!</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DirectoryBasicCompanyListingComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directory-section/directory-section.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectorySectionModule {
}
DirectorySectionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [DirectoryHomePageComponent, DirectorySearchBoxComponent, DirectoryBasicCompanyListingComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    AdsModule,
                    ContentsModule,
                    DirectorySectionRoutingModule
                ],
                exports: [DirectoryHomePageComponent, DirectorySearchBoxComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/heaps/heaps-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes$7 = [];
class HeapsRoutingModule {
}
HeapsRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$7)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/heaps/top-company-home-page-slider/top-company-home-page-slider.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TopCompanyHomePageSliderService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} pageUrl
     * @param {?} magazineId
     * @return {?}
     */
    getTopCompinesSliderData(pageUrl, magazineId) {
        return this.HttpClient.post(apiURL + 'heapsController/getHeapContent', { pageUrl: pageUrl, magazineId: magazineId, pageNumber: 0, limit: 0, types: 'slider' }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
TopCompanyHomePageSliderService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TopCompanyHomePageSliderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ TopCompanyHomePageSliderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TopCompanyHomePageSliderService_Factory() { return new TopCompanyHomePageSliderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: TopCompanyHomePageSliderService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/heaps/top-company-home-page-slider/top-company-home-page-slider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TopCompanyHomePageSliderComponent {
    /**
     * @param {?} config
     * @param {?} RodmanCoreService
     * @param {?} TopCompanySliderService
     */
    constructor(config, RodmanCoreService, TopCompanySliderService) {
        this.RodmanCoreService = RodmanCoreService;
        this.TopCompanySliderService = TopCompanySliderService;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
        this.sliderData = [];
        // config.interval = 3000;
        // config.showNavigationArrows = false;
        // config.showNavigationIndicators = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getTopCompinesSliderData();
    }
    /**
     * @return {?}
     */
    getTopCompinesSliderData() {
        this.TopCompanySliderService.getTopCompinesSliderData(this.currentURL, this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.sliderData = data['data'];
        })));
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
}
TopCompanyHomePageSliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-top-company-home-page-slider',
                template: "<ngb-carousel *ngIf=\"sliderData.length > 0 \" [interval]=\"false\">\n    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(0)\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(0)\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/1/'+sliderData[0].id]\"  > \n                    <div class=\"picsum-img-wrapper ml-3\">\n                        <img [src]=\"getImage(sliderData[0].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[0].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(1))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/1/'+sliderData[1].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[1].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[1].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(2))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/1/'+sliderData[2].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[2].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[2].title}}</p>\n                    </div>\n                </a>\n            </div>    \n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(3))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/1/'+sliderData[3].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[3].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[3].title}}</p>\n                    </div>\n                </a>\n            </div>                                          \n        </div>\n    </ng-template>\n  \n    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(4)\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(4)\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/2/'+sliderData[4].id]\"  > \n                    <div class=\"picsum-img-wrapper ml-3\">\n                        <img [src]=\"getImage(sliderData[4].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[4].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(5))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/2/'+sliderData[5].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[5].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[5].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(6))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/2/'+sliderData[6].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[6].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[6].title}}</p>\n                    </div>\n                </a>\n            </div>    \n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(7))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/2/'+sliderData[7].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[7].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[7].title}}</p>\n                    </div>\n                </a>\n            </div>                                          \n        </div>\n    </ng-template>\n  \n    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(8)\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(8)\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/3/'+sliderData[8].id]\"  > \n                    <div class=\"picsum-img-wrapper ml-3\">\n                        <img [src]=\"getImage(sliderData[8].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[8].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(9))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/3/'+sliderData[9].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[9].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[9].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(10))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/3/'+sliderData[10].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[10].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[10].title}}</p>\n                    </div>\n                </a>\n            </div>    \n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(11))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/3/'+sliderData[11].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[11].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[11].title}}</p>\n                    </div>\n                </a>\n            </div>                                          \n        </div>\n    </ng-template>        \n            \n    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(12)\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(12)\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/4/'+sliderData[12].id]\"  > \n                    <div class=\"picsum-img-wrapper ml-3\">\n                        <img [src]=\"getImage(sliderData[12].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[12].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(13))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/4/'+sliderData[13].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[13].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[13].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(14))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/4/'+sliderData[14].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[14].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[14].title}}</p>\n                    </div>\n                </a>\n            </div>    \n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(15))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/4/'+sliderData[15].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[15].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[15].title}}</p>\n                    </div>\n                </a>\n            </div>                                          \n        </div>\n    </ng-template> \n  \n    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(16)\">\n      <div class=\"row\">\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(16)\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/5/'+sliderData[16].id]\"  > \n                  <div class=\"picsum-img-wrapper ml-3\">\n                      <img [src]=\"getImage(sliderData[16].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[16].title}}</p>\n                  </div>\n              </a>\n          </div>\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(17))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/5/'+sliderData[17].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[17].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[17].title}}</p>\n                  </div>\n              </a>\n          </div>\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(18))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/5/'+sliderData[18].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[18].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[18].title}}</p>\n                  </div>\n              </a>\n          </div>    \n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(19))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/5/'+sliderData[19].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[19].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[19].title}}</p>\n                  </div>\n              </a>\n          </div>                                          \n      </div>\n     </ng-template>    \n     \n     <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(20)\">\n      <div class=\"row\">\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(20)\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/6/'+sliderData[20].id]\"  > \n                  <div class=\"picsum-img-wrapper ml-3\">\n                      <img [src]=\"getImage(sliderData[20].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[20].title}}</p>\n                  </div>\n              </a>\n          </div>\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(21))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/6/'+sliderData[21].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[21].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[21].title}}</p>\n                  </div>\n              </a>\n          </div>\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(22))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/6/'+sliderData[22].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[22].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[22].title}}</p>\n                  </div>\n              </a>\n          </div>    \n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(23))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/6/'+sliderData[23].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[23].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[23].title}}</p>\n                  </div>\n              </a>\n          </div>                                          \n      </div>\n     </ng-template>    \n  \n  \n  </ngb-carousel>",
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
                styles: [".img_class:hover img{background:#000;padding:5px}.picsum-img-wrapper,img{width:170px;height:200px}"]
            }] }
];
/** @nocollapse */
TopCompanyHomePageSliderComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"] },
    { type: RodmanCoreService },
    { type: TopCompanyHomePageSliderService }
];
TopCompanyHomePageSliderComponent.propDecorators = {
    currentURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    magazineId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    urlId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/heaps/top-company-home-page/top-company-home-page.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TopCompanyHomePageService {
    /**
     * @param {?} HttpClient
     * @param {?} RodmanCoreService
     */
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    /**
     * @param {?} pageUrl
     * @param {?} magazineId
     * @return {?}
     */
    getTopCompinesTab(pageUrl, magazineId) {
        return this.HttpClient.post(apiURL + 'heapsController/heapScroller', { pageUrl: pageUrl, magazineId: magazineId }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
    /**
     * @param {?} pageUrl
     * @param {?} magazineId
     * @param {?} pageNumber
     * @param {?} limit
     * @return {?}
     */
    getTopCompinesContent(pageUrl, magazineId, pageNumber, limit) {
        return this.HttpClient.post(apiURL + 'heapsController/getHeapContent', { pageUrl: pageUrl, magazineId: magazineId, pageNumber: pageNumber, limit: limit, types: "" }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
    }
}
TopCompanyHomePageService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TopCompanyHomePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: RodmanCoreService }
];
/** @nocollapse */ TopCompanyHomePageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TopCompanyHomePageService_Factory() { return new TopCompanyHomePageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService)); }, token: TopCompanyHomePageService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/heaps/top-company-home-page/top-company-home-page.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TopCompanyHomePageComponent {
    /**
     * @param {?} RodmanCoreService
     * @param {?} TopHomepageService
     */
    constructor(RodmanCoreService, TopHomepageService) {
        this.RodmanCoreService = RodmanCoreService;
        this.TopHomepageService = TopHomepageService;
        this.getAllAd = [];
        this.datas = [];
        this.contentData = [];
        this.limit = 5;
        this.page = 0;
        this.loading = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.currentURL = this.currentURL.replace('/', '');
        this.selectedTab = this.currentURL.split('/');
        this.selectedTab = this.selectedTab[2];
        this.loading = true;
        this.page = 0;
        this.getAllAd = [];
        this.tabData = [];
        this.datas = [];
        this.contentData = [];
        this.viewAdRender = 0;
        this.page = 0;
        this.getTopCompinesTab();
        this.getTopCompinesContent();
        this.getads();
    }
    /**
     * @return {?}
     */
    getads() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        })));
    }
    /**
     * @return {?}
     */
    getTopCompinesTab() {
        this.TopHomepageService.getTopCompinesTab(this.currentURL, this.magazineId).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.tabData = data['data'];
        })));
    }
    /**
     * @return {?}
     */
    getTopCompinesContent() {
        this.TopHomepageService.getTopCompinesContent(this.currentURL, this.magazineId, this.page, this.limit).subscribe(((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.datas = data['data'];
            this.page = data['page'] + 1;
            for (let content of this.datas) {
                this.contentData.push(content);
            }
            this.loading = false;
        })));
    }
    /**
     * @return {?}
     */
    loadMoreData() {
        this.loading = true;
        this.getTopCompinesContent();
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    extractNameFromJson(data) {
        return this.RodmanCoreService.extractNameFromJson(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    safeHtmlReplace(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
}
TopCompanyHomePageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'CoreLib-top-company-home-page',
                template: "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div>\n                        <ul class=\"nav nav-tabs col-xs-12 col-sm-12 col-md-12\">\n                            <li *ngFor=\"let data of tabData\">\n                                <a class=\"bg-primary {{selectedTab==data.id ? 'selected' : '' }}\" [routerLink]=\"['/heaps/view/'+data.id+'/1']\">{{data.title}}</a>\n                            </li>\n                        </ul>\n                    </div>  \n\n                    <div class=\"border mt-3 mb-4 p-2 hide-slider\" *ngIf=\"tabData.length > 0\">\n                        <CoreLib-top-company-home-page-slider urlId={{selectedTab}} magazineId={{magazineId}} currentURL={{currentURL}}></CoreLib-top-company-home-page-slider>\n                    </div>\n\n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n\n\n                    <div *ngIf=\"contentData.length > 0\">\n                        <div class=\"container mb-3 mt-4\"  *ngFor=\"let contentData of contentData;let i =index \">\n                            <h1 [innerHtml]=\"safeHtmlReplace(contentData.title)\"></h1>\n                            <h5 [innerHtml]=contentData.summary></h5>\n                            <img  [src]=\"getImage(contentData.primary_image)\" alt=\"No Image\" class=\"img-scale border full-Size mb-2\">\n\n                                <div class=\" border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1\">\n                                    <b> <span *ngIf=\"contentData.author_name\">                                   \n                                        {{ extractNameFromJson(contentData.author_name) }} </span>\n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                    \n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"(contentData && i)\" magazineId={{magazineId}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\"> \n                                <div [innerHtml]=contentData.body></div>                                        \n                            </div>\n                            <div class=\"slider-releted\">\n                                <CoreLib-content-suggest-slide-show  magazineId ={{magazineId}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n                            </div>\n                            <div class=\"clearfix space-add\"></div>\n                        </div>                   \n                    </div> \n                    \n                    <div class=\"container mt-5 mb-3\" *ngIf=\"contentData?.length > 0\">\n                        <div class=\"row\" *ngIf=\"datas?.length > 4 \"> \n                            <div class=\"col-md-4 col-sm-4\"></div>\n                                <div class=\"col-md-4 col-sm-4\">   \n                                     <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button>\n                                </div>\n                            <div class=\"col-md-4 col-sm-4\"></div>\n                        </div>   \n                    </div>\n\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div>\n\n            </div>              \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\"> \n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n",
                styles: [".nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav>li>a{position:relative;display:block;padding:10px 15px;text-decoration:none}.nav,.nav ul,.nav1,.nav1 ul{z-index:999;margin:0;padding:0;list-style-type:none;list-style-position:outside;position:relative;line-height:26px}a{color:#fff}.selected,li>a:hover{background-color:#ccc!important}.line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.slider-releted{position:absolute!important;width:-webkit-max-content!important;width:-moz-max-content!important;width:max-content!important;z-index:9999;right:0;left:-53%;overflow:hidden;margin:15px}.clearfix.space-add{height:50px;margin-top:34%}"]
            }] }
];
/** @nocollapse */
TopCompanyHomePageComponent.ctorParameters = () => [
    { type: RodmanCoreService },
    { type: TopCompanyHomePageService }
];
TopCompanyHomePageComponent.propDecorators = {
    currentURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    magazineId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/heaps/heaps.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeapsModule {
}
HeapsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [TopCompanyHomePageComponent, TopCompanyHomePageSliderComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    HeapsRoutingModule,
                    AdsModule,
                    ContentsModule,
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"].forRoot()
                ],
                exports: [TopCompanyHomePageComponent, TopCompanyHomePageSliderComponent],
                providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"] }],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: rodman-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=rodman-core.js.map


/***/ }),

/***/ "../../dist/rodman-orm/fesm2015/rodman-orm.js":
/*!************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/dist/rodman-orm/fesm2015/rodman-orm.js ***!
  \************************************************************************/
/*! exports provided: RodmanORMComponent, RodmanORMModule, RodmanORMService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodmanORMComponent", function() { return RodmanORMComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodmanORMModule", function() { return RodmanORMModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodmanORMService", function() { return RodmanORMService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


/**
 * @fileoverview added by tsickle
 * Generated from: lib/rodman-orm.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RodmanORMService {
    constructor() { }
}
RodmanORMService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RodmanORMService.ctorParameters = () => [];
/** @nocollapse */ RodmanORMService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function RodmanORMService_Factory() { return new RodmanORMService(); }, token: RodmanORMService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/rodman-orm.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RodmanORMComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RodmanORMComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'RodmanORM-RodmanORM',
                template: `
    <p>
      rodman-orm works!
    </p>
  `
            }] }
];
/** @nocollapse */
RodmanORMComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/rodman-orm.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RodmanORMModule {
}
RodmanORMModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [RodmanORMComponent],
                imports: [],
                exports: [RodmanORMComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: rodman-orm.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=rodman-orm.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-glossary/content-glossary.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-glossary/content-glossary.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\"  >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<div class=\"row\" *ngIf=\"glossaryData?.length > 0\">\n    <div class=\"col-md-2 col-sm-2\"> </div>\n    <div class=\"col-md-8 col-sm-8 mt-5\">\n        <div class=\"row\">            \n            <!-- <div class=\"col-md-12 col-sm-12\" > -->\n                <div class=\"col-md-8 col-sm-8\" >\n                    <div class=\"col-md-6 col-sm-6\" *ngFor=\"let item of glossaryData; let i = index; let even = even;\">      \n                        <div class=\"col-md-12 col-sm-12 border-bottom mt-3\" id=\"{{current_letter}}\" *ngIf=\"matchCharacter(item.title,current_letter)\">\n                            <b><h4>{{current_letter}}</h4></b><br>\n                        </div>\n                        <!-- <div class=\"col-md-12 col-sm-12\" *ngIf=\"matchCharacter(item.title,current_letter)\">\n                            <br><hr>\n                        </div>     -->                              \n                            <a  [routerLink]=\"['/'+item.viewUrl]\">{{ item.title }} </a>                     \n                    </div>    \n                </div>\n                <div class=\"col-md-4 col-sm-4\" >\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>\n                    </div>\n                </div>\n            <!-- </div>          -->\n        </div>\n    </div>  \n</div>  ");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-infographics/content-infographics.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-infographics/content-infographics.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <CoreLib-lists-contents  routeUrl = {{currentURL}} magazineId=\"{{magazineId}}\" contentType=\"{{contentType}}\"></CoreLib-lists-contents>          \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n    ");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-issue/content-issue.component.html":
/*!************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-issue/content-issue.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<CoreLib-content-magazine-issue url={{checker}} magazineId={{magazineId}}></CoreLib-content-magazine-issue>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <h2> RSS Feeds </h2><br><br>         \n                    <h4> Content Types </h4><br>    \n                    \n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n    \n                    <div class=\"mt-2 mb-2\" *ngIf=\"rssData\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6 p-2\" *ngFor=\"let contentType of rssData\">\n                                <a target=\"_blank\" href=\"{{baseUrl+'feedcreator/rss/'+contentType.id+'/'+magazineId}}\"> {{contentType.tag.replace('_',\" \").replace('_',\" \") | uppercase}}</a>\n                            </div>\n                        </div>\n                    </div>                                \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>                 \n                    <div class=\"col-md-12 col-sm-12 mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"col-md-12 col-sm-12 mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div>\n            </div>    \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>        ");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-search/content-search.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-search/content-search.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8 mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Search For:</b></h6> </div>\n                                <div class=\"col-md-6 col-sm-6 text-left \"> \n                                    <input class=\"form-cotrol\" id=\"searchFiled\" (input)=\"searchFiled=$event.target.value\" type=\"text\" value=\"{{searchSlug}}\" >\n                                    <!-- <input #searchTextFiled type=\"text\" value=\"{{searchSlug}}\" /> -->\n                                </div>\n                                <div class=\"col-md-2 col-sm-2 \"> \n                                    <button (click)=searchTextFilter()>Search</button>\n                                    <!-- <button (click)=\"searchTextFiled(searchTextFiled.value)\" >Search</button> -->\n                \n                                    </div>\n                            </div><br>  \n                \n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Refine by Dates:</b></h6> </div>\n                                <div class=\"col-md-6 col-sm-6 text-left\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6 col-md-6\">\n                                            From : <br> \n                                            <input type=\"date\" class=\"form-control\"  id=\"dateFrom\" (input)=\"dateFrom=$event.target.value\">\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6\">\n                                            To : <br> \n                                            <input type=\"date\" class=\"form-control\"  id=\"dateTo\" (input)=\"dateTo=$event.target.value\">\n                                        </div>\n                                    </div>     \n                                </div>\n                                <div class=\"col-md-2 col-sm-2 \"> \n                                    <button (click)=searchDateFilter()>Search</button> \n                                </div>\n                            </div><br>\n                \n                            <div class=\"row mb-2 border-bottom\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Refine By Content:</b></h6> </div>\n                                <div class=\"col-md-8 col-sm-8 text-left \"> \n                                    <select class=\"form-cotrol\"  (input)=\"selectedProduct=$event.target.value\" (click)=\"selectData()\" (change)=searchSelectFilter()>\n                                            <option [value]=\"\">All</option>\n                                            <option *ngFor=\"let SelectOption of refineContentList;let i=index\" [value]=\"SelectOption.id\" [selected]=\"SelectOption.id==anySlug\">\n                                                {{SelectOption.tag.replace('_', ' ') | titlecase}}</option>\n                \n                                    </select>\n                                </div><br>\n                            </div><br>\n                \n                \n                            <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading2\">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                                        <!-- Buyer Guide -->\n                            <div class=\" mb-3 mt-4 border-bottom\" *ngIf=\"micrositeCompany?.length > 0 \" >\n                                <div class=\"mb-3\"><h2>Buyers Guide Companies</h2></div>                \n                                <div *ngIf=\"micrositeCompany?.length > 0\">\n                                    <div class=\"\"><h3>Microsite Companies</h3></div> \n                                    <div *ngFor=\"let microsite of micrositeCompany|slice:0:5;let i = index\">\n                                        <a [routerLink]=\"[microsite.viewUrl]\">{{microsite.title}}</a>\n                                    </div>\n                                </div>            \n                                <div *ngIf=\"featuredComapny?.length > 0\">\n                                    <div class=\"\"><h3>Featured Companies</h3></div> \n                                    <div *ngFor=\"let featured of featuredComapny|slice:0:5; let i = index\">\n                                        <a [routerLink]=\"[featured.viewUrl]\">{{featured.title}}</a>\n                                    </div>\n                                </div>        \n                            </div>\n                    \n                            <!-- Buyer Guide Categories -->\n                            <div class=\"container mb-3 mt-4 border-bottom\"  *ngIf=\"comapnyCategory?.length > 0\">                    \n                                <div><h3>Buyers Guide Categories</h3></div> \n                \n                                <div *ngFor=\"let category of comapnyCategory;let i = index\">\n                                    <!-- <a [routerLink]=\"[category.viewUrl]\">{{category.tag}}</a> -->\n                                    <p>{{category.tag}}</p>\n                                </div>\n                            </div>\n                \n                \n                            <!-- Content List-->\n                            <div class=\"container mb-3 mt-4\"  *ngIf=\"contentList?.length > 0\">\n                                <div class=\"border-bottom\" *ngFor=\"let content of contentList;let i = index\">                \n                                    <div class=\"col-md-12 col-sm-12 mt-1\">\n                                        <span *ngFor=\"let taxonomy of content.taggedTaxonomy.KNOWLEDGE_CENTER_TAXONOMY; let j =index\" >\n                                            <span *ngIf=\"j\"> | </span>\n                                            <a *ngIf=\"magazineId != 1\" [routerLink]=\"['/'+taxonomy.url]\"  > {{taxonomy.tag}}   </a> \n                                            <a *ngIf=\"magazineId == 1\" [routerLink]=\"['/'+staticUrl+taxonomy.url]\"  > {{taxonomy.tag}}</a>\n                                        </span>\n                                    </div> \n                                    <div class=\"col-md-12 col-sm-12\">\n                                       \n                                        <h4 class=\"mt-2\"><a  [routerLink]=\"[content.viewUrl]\"><b>{{safeHtml(content.title)}}</b></a></h4> \n                                        <!-- <h6 class=\"mt-3\">{{content.summary}}</h6> -->\n                                        <h6 class=\"mt-3\" *ngIf=\"content.summary\" [innerHTML]=\"safeHtml(content.summary)\"></h6>\n                                        <h6 class=\"mt-3\" *ngIf=\"((!content.summary) && (content.body))\" [innerHTML]=\"bodyCharacterLength(content.body)\"></h6>\n                                        <small>{{ content.publish_date| date : \"MMM dd , yyyy\"}}</small>\n                                    </div>\n                                </div>\n                            </div>\n                \n                            <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading1\">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                \n                            <div class=\"container mt-5 mb-3\"  *ngIf=\"contentList?.length > 0\">\n                                <div class=\"row\" *ngIf=\"contentList?.length > 9\"> \n                                    <div class=\"col-md-4 col-sm-4\"></div>\n                                        <div class=\"col-md-4 col-sm-4\">    <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button></div>\n                                    <div class=\"col-md-4 col-sm-4\"></div>\n                                </div>   \n                            </div>\n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    \n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"(!loading)  && ((contentType=='2542' && (currentURL == '')) || (currentURL == '/contents/list_ebook') )\">     <div class=\"heading-border mb-2\" id=\"webinars\"><h2>{{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>    \n                    <div class=\"border-bottom\" *ngFor=\"let Data of listContentData; let i =index\" >\n                        <div class=\"row\">\n                            <div class=\"col-sm-2 col-md-2\"><img class=\"img-responsive Webinars\"  [src]=\"getImage(Data.primary_image)\" alt=\"No Image\"> </div>\n                            <div class=\"col-sm-10 col-md-10\">\n                                <h1><div [innerHTML]=\"safeHtml(Data.title)\"> </div></h1>\n                                <div [innerHTML]=\"Data.body\"></div>\n                            </div>\n                        </div>   \n                    </div>\n                </div>           \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n    ");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/static-content/static-content.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/static-content/static-content.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5\">\n            <div class=\"row\">\n                <div class=\"col-md-8\"  *ngIf=\"staticContentData\">\n                    <h1 *ngIf=\"staticContentData[0]\">{{staticContentData[0].title}}</h1>\n                    <hr>    \n                    <div *ngIf=\"staticContentData[0]\" [innerHTML]=\"safeHtml(staticContentData[0].body)\"> </div>   \n                                              \n                    <!-- <div *ngIf=\"staticContentData[0]\" [innerHTML]=\"staticContentData[0].body\"> </div> -->\n                    <!-- <div *ngIf=\"staticContentData[0]\">{{staticContentData[0].body}}</div> -->\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n        \n            ");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n        <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n    </div>\n    <div class=\"container-fluid\">    \n        <div class=\"row\">\n            <div class=\"col\">\n                <div *ngIf=\"viewAdRender == 1\">\n                    <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n                </div>\n            </div>\n            <div class=\"col-8 mt-5 \">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-12\"><h3>All Companies</h3></div>\n                    <div class=\"col-sm-4 col-md-4\">\n                        <div class=\"border\">\n                            <!-- <CoreLib-directory-search-box [title]=\"\" [magazineId]=\"\" [data]=\"\"></CoreLib-directory-search-box> -->\n                            <div *ngIf=\"buyersGuideCategoryData?.length > 0 \">\n                                <div class=\"border\"> <h5>SEARCH BY...</h5> </div>\n                                <div class=\"back-color\" [innerHTML]=\"safeHtml(buyersGuideCategoryData[0][0].tag)\"></div>\n                                <div class=\"country\">\n                                    <div class=\"row ml-1\" *ngFor=\"let bgCatData of buyersGuideCategoryData[0][0].child\">\n\n                                        <div *ngIf=\"bgCatData.count != 0 \" class=\"col-sm-9 col-md-9\" [innerHTML]=\"safeHtml(bgCatData.tag)\"></div>\n                                        <div *ngIf=\"bgCatData.count != 0 \" class=\"col-sm-3 col-md-3\" >({{bgCatData.count}})</div>\n\n                                    </div> \n                                </div>    \n                            </div>\n                            <div *ngIf=\"buyersguideCountryData?.length > 0 \">\n                                <div class=\"back-color\" >Country</div>\n                                <div class=\"country\">\n                                    <div class=\"row ml-1\" *ngFor=\"let countryData of buyersguideCountryData\">\n                                        <div *ngIf=\"countryData.count != 0\" class=\"col-sm-9 col-md-9\" [innerHTML]=\"safeHtml(countryData.name)\"></div>\n                                        <div class=\"col-sm-3 col-md-3\" *ngIf=\"(countryData.child) && (countryData.count != 0)\">\n                                            ({{countryData.child ? countryData.child.length: '' }})  </div>\n                                    </div> \n                                </div>    \n                            </div>                          \n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">\n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>  \n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">\n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>\n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">                                \n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>\n                        </div>\n        \n                    </div>\n                    <div class=\"col-sm-8 col-md-8\">\n\n                        <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                        \n                        <!-- 1st -->\n                        <div *ngIf=\"featuredmicrositeCompanies?.length > 0 \"><h3>{{companiesTitleArray[magazineId][0]}}</h3></div>\n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let featuredmicrositeCompaniesData of featuredmicrositeCompanies;let i = index\">                        \n                            <div class=\"col-sm-3 col-md-3\">\n                                <img [src]=\"featuredmicrositeCompaniesData.primary_image_main\" width=\"100%\">\n                            </div>\n                            <div class=\"col-sm-6 col-md-6\">\n                                <a [routerLink]=\"['/'+featuredmicrositeCompaniesData.viewUrl]\">{{featuredmicrositeCompaniesData.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+featuredmicrositeCompaniesData.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>\n                        <!-- 2nd -->\n                        <div class=\"mt-2\" *ngIf=\"featuredmicrositeCompanies?.length > 0 \"><h3>{{companiesTitleArray[magazineId][1]}}</h3></div>\n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let micrositeCompanies of micrositeCompanies;let i = index\">                        \n                            <div class=\"col-sm-3 col-md-3\">\n                                <img [src]=\"micrositeCompanies.primary_image_main\" width=\"100%\">\n                            </div>\n                            <div class=\"col-sm-6 col-md-6\">\n                                <a [routerLink]=\"['/'+micrositeCompanies.viewUrl]\" >{{micrositeCompanies.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+micrositeCompanies.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>                        \n\n\n                        <!-- 3rd -->\n                        <div class=\"mt-2\" *ngIf=\"featuredBgCompanies?.length > 0 \">\n                            \n                            <ng-container *ngIf=\"(magazineId == 5 ) || (magazineId == 13);else defaultView\">\n                                <ng-container *ngIf=\"featuredBgCompanies[0].content_type_id == '2666'\">  \n                                    <h3>Deluxe Companies</h3>\n                                </ng-container>\n                                <ng-container *ngIf=\"featuredBgCompanies[0].content_type_id == '2543'\">  \n                                    <h3>{{companiesTitleArray[magazineId][2]}}</h3>\n                                </ng-container>\n                            </ng-container>                  \n                        \n                            <ng-template #defaultView>\n                                <ng-container > \n                                    <h3>{{companiesTitleArray[magazineId][2]}}</h3>\n                                </ng-container> \n                            </ng-template>\n\n\n\n\n                        </div>  \n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let featuredBgCompanies of featuredBgCompanies;let i = index\">                 <div class=\"col-sm-9 col-md-9\">\n                                <a [routerLink]=\"['/'+featuredBgCompanies.viewUrl]\">{{featuredBgCompanies.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+featuredBgCompanies.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>                            \n\n                        \n                        <!-- All -->\n                        <div class=\"mt-2\" *ngIf=\"data?.length > 0 \"><h3 id=\"allCompany\">All Companies</h3></div>\n                        <div class=\"mt-2 mb-2\" *ngIf=\"alphabet?.length > 0 \">\n                            <div class=\"row text-center back-color\" >\n                                <a *ngFor=\"let Character of alphabet\" class=\"mr-1\" [routerLink] [fragment]=\"Character\" [routerLinkActive]=\"'active'\"  [routerLinkActiveOptions]=\"{exact: true}\">  {{Character | titlecase}}  </a>\n                            </div>    \n                        </div>    \n\n                        <div class=\"row mt-3 mb-1\" *ngFor=\"let allCompanies of data;let i = index\">         \n                            <div class=\"col-md-12 col-sm-12 border-bottom mt-3\" id=\"{{current_letter}}\" *ngIf=\"matchCharacter(allCompanies.title,current_letter)\"> \n                                <div class=\"row\">\n                                    <div class=\"col-sm-9 col-md-9\">\n                                        <b><h4>{{current_letter}}</h4></b>\n                                    </div>\n                                    <div class=\"col-sm-3 col-md-3\">\n                                        <!-- <a [routerLink] [fragment]=\"'allCompany'\" [routerLinkActive]=\"'active'\"  [routerLinkActiveOptions]=\"{exact: true}\">  Return To Top    </a>  -->\n                                    </div>      <br> \n                                </div>\n                            </div>\n                                <a  [routerLink]=\"['/'+allCompanies.viewUrl]\">{{ allCompanies.title }} </a>         \n                        </div>    \n\n                    </div> \n                </div>      \n            </div>\n            <div class=\"col\">\n                <div *ngIf=\"viewAdRender == 1\">\n                    <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n                </div>\n            </div>\n        </div>   \n    </div>\n    \n    ");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/sites/components/not-found/not-found.component.html":
/*!************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/sites/components/not-found/not-found.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p> Core not-found works!</p> -->\n\n\n<div class=\"text-center\">\n    <h3> Under Development... </h3>\n\n   <p> Oops! <br>\n    This is awkward <br>\n    You are looking for something that doesn't actually exist\n   </p>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/users/Components/user-profile/user-profile.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/users/Components/user-profile/user-profile.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n<div class=\"text-center\"><p> Core user-profile works!</p>\n    <h3>Users Profile</h3>\n</div>     -->\n\n\n\n\n<div class=\"text-center\" *ngIf=\"message; else showLoginRequestMessage\">\n    <h2>Hello You Are Login</h2>\n</div> \n    <ng-template #showLoginRequestMessage>\n        <div class=\"text-center\" > <h2>Hello, please login to access the User app</h2></div>\n    </ng-template>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n        <CoreLib-ads-display [ads]=\"getAllAd\" location='header_0' footerData='show' ></CoreLib-ads-display> \n    </div> -->\n<CoreLib-header  magazineId=\"{{magazineId}}\" magazineName=\"{{magazineName}}\" menuId='81' groupId=\"\" fieldId=\"\" formId=\"\"></CoreLib-header>\n        <router-outlet>  </router-outlet>\n<CoreLib-footer magazineId=\"{{magazineId}}\"></CoreLib-footer>\n\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-content-view/bp-content-view.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-content-view/bp-content-view.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<CoreLib-content-view contentPageUrl = {{contentPageUrl}} magazineId = {{magazineId}}></CoreLib-content-view>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-top-company/bp-top-company.component.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-top-company/bp-top-company.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<CoreLib-top-company-home-page currentURL={{contentPageUrl}} magazineId={{magazineId}}></CoreLib-top-company-home-page>\n");

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!*****************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/tslib/tslib.es6.js ***!
  \*****************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "../rodman-core/src/lib/contents/content-glossary/content-glossary.component.css":
/*!***************************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-glossary/content-glossary.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".half-space{\n    margin-right:10px; ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvY29udGVudHMvY29udGVudC1nbG9zc2FyeS9jb250ZW50LWdsb3NzYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoicHJvamVjdHMvcm9kbWFuLWNvcmUvc3JjL2xpYi9jb250ZW50cy9jb250ZW50LWdsb3NzYXJ5L2NvbnRlbnQtZ2xvc3NhcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYWxmLXNwYWNle1xuICAgIG1hcmdpbi1yaWdodDoxMHB4OyA7XG59Il19 */");

/***/ }),

/***/ "../rodman-core/src/lib/contents/content-glossary/content-glossary.component.ts":
/*!**************************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-glossary/content-glossary.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ContentGlossaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentGlossaryComponent", function() { return ContentGlossaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _list_content_list_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-content/list-content.service */ "../rodman-core/src/lib/contents/list-content/list-content.service.ts");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");





let ContentGlossaryComponent = class ContentGlossaryComponent {
    constructor(ActivatedRoute, Router, ListContentService, RodmanCoreService) {
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.ListContentService = ListContentService;
        this.RodmanCoreService = RodmanCoreService;
        this.glossaryData = [];
        this.loading = true;
        this.getAllAd = [];
        this.current_letter = '';
    }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            this.magazineId = data.magazineId;
        });
        this.ListContentService.getContent('glossary', this.magazineId, 10, 0, '').subscribe((data) => {
            this.glossaryData = data['data'];
            this.getads();
            this.loading = false;
        });
    }
    getads() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
    }
    matchCharacter(current, pre) {
        if (current.charAt(0) != pre) {
            this.current_letter = current.charAt(0);
            return true;
        }
        return false;
    }
};
ContentGlossaryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _list_content_list_content_service__WEBPACK_IMPORTED_MODULE_2__["ListContentService"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_3__["RodmanCoreService"] }
];
ContentGlossaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CoreLib-content-glossary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-glossary.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-glossary/content-glossary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-glossary.component.css */ "../rodman-core/src/lib/contents/content-glossary/content-glossary.component.css")).default]
    })
], ContentGlossaryComponent);



/***/ }),

/***/ "../rodman-core/src/lib/contents/content-infographics/content-infographics.component.css":
/*!***********************************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-infographics/content-infographics.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL2NvbnRlbnRzL2NvbnRlbnQtaW5mb2dyYXBoaWNzL2NvbnRlbnQtaW5mb2dyYXBoaWNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "../rodman-core/src/lib/contents/content-infographics/content-infographics.component.ts":
/*!**********************************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-infographics/content-infographics.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ContentInfographicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentInfographicsComponent", function() { return ContentInfographicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../rodman-core/src/lib/rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");




let ContentInfographicsComponent = class ContentInfographicsComponent {
    constructor(router, RodmanCoreService, ActivatedRoute) {
        this.router = router;
        this.RodmanCoreService = RodmanCoreService;
        this.ActivatedRoute = ActivatedRoute;
        this.getAllAd = [];
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        });
    }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            this.magazineId = data.magazineId;
        });
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
    }
};
ContentInfographicsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_3__["RodmanCoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ContentInfographicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CoreLib-content-infographics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-infographics.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-infographics/content-infographics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-infographics.component.css */ "../rodman-core/src/lib/contents/content-infographics/content-infographics.component.css")).default]
    })
], ContentInfographicsComponent);



/***/ }),

/***/ "../rodman-core/src/lib/contents/content-issue/content-issue.component.css":
/*!*********************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-issue/content-issue.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL2NvbnRlbnRzL2NvbnRlbnQtaXNzdWUvY29udGVudC1pc3N1ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "../rodman-core/src/lib/contents/content-issue/content-issue.component.ts":
/*!********************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-issue/content-issue.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContentIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentIssueComponent", function() { return ContentIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _content_issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-issue.service */ "../rodman-core/src/lib/contents/content-issue/content-issue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");






let ContentIssueComponent = class ContentIssueComponent {
    constructor(RodmanCoreService, ActivatedRoute, Router, ContentIssueService) {
        this.RodmanCoreService = RodmanCoreService;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.ContentIssueService = ContentIssueService;
        this.issueData = [];
        this.sliderData = [];
        this.loading = true;
        this.page = 0;
        this.ptintTittle = false;
        this.routeChange = true;
        this.getAllAd = [];
        Router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                let data = event.url.split('/');
                this.checker = data[data.length - 1];
            }
        });
    }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            this.magazineId = data.magazineId;
        });
    }
};
ContentIssueComponent.ctorParameters = () => [
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_5__["RodmanCoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _content_issue_service__WEBPACK_IMPORTED_MODULE_3__["ContentIssueService"] }
];
ContentIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CoreLib-content-issue',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-issue.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-issue/content-issue.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-issue.component.css */ "../rodman-core/src/lib/contents/content-issue/content-issue.component.css")).default]
    })
], ContentIssueComponent);



/***/ }),

/***/ "../rodman-core/src/lib/contents/content-issue/content-issue.service.ts":
/*!******************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-issue/content-issue.service.ts ***!
  \******************************************************************************/
/*! exports provided: ContentIssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentIssueService", function() { return ContentIssueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");






let ContentIssueService = class ContentIssueService {
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    getIssue(magazineId, slug) {
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'issuescontroller/getIssues', { magazineId: magazineId, slug: slug }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
};
ContentIssueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
ContentIssueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContentIssueService);



/***/ }),

/***/ "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.css":
/*!*****************************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL2NvbnRlbnRzL2NvbnRlbnQtcnNzLWZlZWRzL2NvbnRlbnQtcnNzLWZlZWRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.ts":
/*!****************************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ContentRssFeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRssFeedsComponent", function() { return ContentRssFeedsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _content_rss_feeds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-rss-feeds.service */ "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.service.ts");






let ContentRssFeedsComponent = class ContentRssFeedsComponent {
    constructor(ActivatedRoute, Router, RodmanCoreService, ContentRssFeedsService) {
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.RodmanCoreService = RodmanCoreService;
        this.ContentRssFeedsService = ContentRssFeedsService;
        this.loading = true;
        this.getAllAd = [];
        this.baseUrl = _rodman_core_service__WEBPACK_IMPORTED_MODULE_2__["apiURL"];
    }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            this.magazineId = data.magazineId;
        });
        this.rssDataMethod();
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
    }
    rssDataMethod() {
        this.ContentRssFeedsService.rssFeeds(this.magazineId).subscribe((data) => {
            this.rssData = data['country'];
            this.loading = false;
        });
    }
};
ContentRssFeedsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_2__["RodmanCoreService"] },
    { type: _content_rss_feeds_service__WEBPACK_IMPORTED_MODULE_4__["ContentRssFeedsService"] }
];
ContentRssFeedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CoreLib-content-rss-feeds',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-rss-feeds.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-rss-feeds.component.css */ "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.css")).default]
    })
], ContentRssFeedsComponent);



/***/ }),

/***/ "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.service.ts":
/*!**************************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ContentRssFeedsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRssFeedsService", function() { return ContentRssFeedsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");






let ContentRssFeedsService = class ContentRssFeedsService {
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    rssFeeds(magazineId) {
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'contentsController/getContentType', { magazineId: magazineId }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
};
ContentRssFeedsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
ContentRssFeedsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContentRssFeedsService);



/***/ }),

/***/ "../rodman-core/src/lib/contents/content-search/content-search.component.css":
/*!***********************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-search/content-search.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-bottom{\n    border-bottom: 1px solid black!important;\n}\n\n.border-top{\n    border-top: 1px solid black!important;\n}\n\n.form-group.hidden {\n    width: 0;\n    margin: 0;\n    border: none;\n    padding: 0;\n  }\n\n.custom-day {\n    text-align: center;\n    padding: 0.185rem 0.25rem;\n    display: inline-block;\n    height: 2rem;\n    width: 2rem;\n  }\n\n.custom-day.focused {\n    background-color: #e6e6e6;\n  }\n\n.custom-day.range, .custom-day:hover {\n    background-color: rgb(2, 117, 216);\n    color: white;\n  }\n\n.custom-day.faded {\n    background-color: rgba(2, 117, 216, 0.5);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvY29udGVudHMvY29udGVudC1zZWFyY2gvY29udGVudC1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFLRTtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0FBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsWUFBWTtFQUNkOztBQUNBO0lBQ0Usd0NBQXdDO0VBQzFDIiwiZmlsZSI6InByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvY29udGVudHMvY29udGVudC1zZWFyY2gvY29udGVudC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItYm90dG9te1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjayFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9we1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjayFpbXBvcnRhbnQ7XG59XG5cblxuXG5cbiAgLmZvcm0tZ3JvdXAuaGlkZGVuIHtcbiAgICB3aWR0aDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmN1c3RvbS1kYXkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gIH1cbiAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgfVxuICAuY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jdXN0b20tZGF5LmZhZGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xuICB9Il19 */");

/***/ }),

/***/ "../rodman-core/src/lib/contents/content-search/content-search.component.ts":
/*!**********************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-search/content-search.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ContentSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSearchComponent", function() { return ContentSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _content_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-search.service */ "../rodman-core/src/lib/contents/content-search/content-search.service.ts");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let ContentSearchComponent = class ContentSearchComponent {
    constructor(calendar, RodmanCoreService, Router, ContentSearchService, ActivatedRoute) {
        this.calendar = calendar;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.ContentSearchService = ContentSearchService;
        this.ActivatedRoute = ActivatedRoute;
        this.page = 0;
        this.limit = 10;
        this.anySlug = '';
        this.slugCheck = false;
        this.contentList = [];
        this.getAllAd = [];
        this.loading1 = true;
        this.loading2 = true;
        this.loadMoreCheck = true;
        this.searchFiled = 'all';
        this.selectedProduct = 'all';
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        Router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.routeUrl = event.url;
                this.contentList = [];
                this.ActivatedRoute.params.subscribe(params => {
                    this.page = 0;
                    this.anySlug = params['any'];
                    this.searchSlug = params['slug'];
                });
                this.getSearchData();
            }
        });
        this.ActivatedRoute.data.subscribe(data => {
            this.magazineId = data.magazineId;
        });
    }
    ngOnInit() {
        if (this.magazineId == 1) {
            this.staticUrl = 'knowledge-center/';
        }
        this.getRefineData();
        this.getPageAds();
        //   this.ActivatedRoute.params.subscribe(params => {
        //     this.page=0;
        //     this.anySlug = params['any'];
        //     this.searchSlug = params['slug'];   
        //  });
        //  this.getSearchData();
        //  this.getRefineData();  
    }
    selectData() {
        if (this.refineContentList) {
            this.getRefineData();
        }
    }
    getRefineData() {
        this.ContentSearchService.refineContentList(this.magazineId).subscribe((data) => {
            this.refineContentList = data['country'];
        });
    }
    searchSelectFilter() {
        // this.searchFiled=(this.searchSlug!='') ? this.searchSlug : 'all' ;
        // if(this.searchFiled==='undefined' || this.searchFiled==''){
        //   this.searchFiled=this.searchSlug;
        // }
        this.page = 0;
        if ((this.selectedProduct === 'undefined' || this.selectedProduct == '')) {
            this.selectedProduct = "all";
        }
        this.Router.navigateByUrl('/contents/searchcontent/' + this.selectedProduct + '/' + this.searchFiled);
        // this.getSearchData();
    }
    searchDateFilter() {
        this.page = 0;
        this.getSearchData();
    }
    searchTextFilter() {
        this.page = 0;
        if (this.searchFiled === 'undefined' || this.searchFiled == '') {
            this.searchFiled = this.searchSlug;
            this.anySlug = 'all';
        }
        this.Router.navigateByUrl('/contents/searchcontent/' + this.anySlug + '/' + this.searchFiled);
    }
    getSearchData() {
        if (this.loadMoreCheck) {
            this.ContentSearchService.SearchCompany(this.searchSlug, this.page, this.limit, this.magazineId, this.dateFrom, this.dateTo, this.selectedProduct).subscribe((data) => {
                this.companyDataList = data['bgTopCompanies'];
                this.comapnyCategory = data['bgCategories'];
                this.micrositeCompany = this.companyDataList.filter(function (map) {
                    return map.has_featured_mircosite_listing == 1;
                });
                this.featuredComapny = this.companyDataList.filter(function (map) {
                    return map.has_featured_mircosite_listing == 0;
                });
            });
            this.loading2 = false;
        }
        this.selectedProduct = (this.selectedProduct == 'all') ? "" : this.selectedProduct;
        this.ContentSearchService.SearchContent(this.searchSlug, this.page, this.limit, this.magazineId, this.dateFrom, this.dateTo, this.selectedProduct).subscribe((data) => {
            this.putContentList = data['data'];
            for (let content of this.putContentList) {
                this.contentList.push(content);
            }
            this.page = data['page'] + 1;
        });
        // setTimeout(function(){
        //   this.loading1 = false;
        // },6000);
        setTimeout(() => {
            this.loading1 = false;
        }, 10000);
    }
    spinnerHide() {
    }
    safeHtml(data) {
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
    bodyCharacterLength(data) {
        return this.RodmanCoreService.bodyCharacterLength(data);
    }
    loadMoreData() {
        this.loading1 = true;
        this.loadMoreCheck = false;
        this.getSearchData();
    }
    getPageAds() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
    }
    // Date Option
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    }
};
ContentSearchComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _content_search_service__WEBPACK_IMPORTED_MODULE_3__["ContentSearchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ContentSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CoreLib-content-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-search.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-search/content-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-search.component.css */ "../rodman-core/src/lib/contents/content-search/content-search.component.css")).default]
    })
], ContentSearchComponent);



/***/ }),

/***/ "../rodman-core/src/lib/contents/content-search/content-search.service.ts":
/*!********************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/content-search/content-search.service.ts ***!
  \********************************************************************************/
/*! exports provided: ContentSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSearchService", function() { return ContentSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");






let ContentSearchService = class ContentSearchService {
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    refineContentList(magazineId) {
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'contentsController/getContentType', { magazineId: magazineId }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
    SearchContent(search, page, limit, magazineId, searchDateFrom, searchDateTo, contentTypeId) {
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'contentsController/getSearchContent', { search: search, page: page, limit: limit, magazineId: magazineId, searchDateFrom: searchDateFrom, searchDateTo: searchDateTo, contentTypeId: contentTypeId }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
    SearchCompany(search, page, limit, magazineId, searchDateFrom, searchDateTo, contentTypeId) {
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'contentsController/getSearchBgCompanies', { search: search, page: page, limit: limit, magazineId: magazineId, searchDateFrom: searchDateFrom, searchDateTo: searchDateTo, contentTypeId: contentTypeId }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
};
ContentSearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
ContentSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContentSearchService);



/***/ }),

/***/ "../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.css":
/*!***************************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading-border{\n    border-bottom: 1px solid #000000;\n    color: #000000;\n}\n.container{\n    min-height: 500px;\n}\n.Webinars{\n    max-width: 100%;\n    min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvY29udGVudHMvY29udGVudHMtd2ViaW5hci9jb250ZW50cy13ZWJpbmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvY29udGVudHMvY29udGVudHMtd2ViaW5hci9jb250ZW50cy13ZWJpbmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZy1ib3JkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG4uY29udGFpbmVye1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xufVxuXG4uV2ViaW5hcnN7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG59Il19 */");

/***/ }),

/***/ "../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.ts":
/*!**************************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ContentsWebinarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsWebinarComponent", function() { return ContentsWebinarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_content_list_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-content/list-content.service */ "../rodman-core/src/lib/contents/list-content/list-content.service.ts");





let ContentsWebinarComponent = class ContentsWebinarComponent {
    constructor(ListContentService, RodmanCoreService, Router, ActivatedRoute) {
        this.ListContentService = ListContentService;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.limit = 10;
        this.page = 0;
        this.loading = true;
        this.getAllAd = [];
        Router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.currentURL = event.url;
                if (this.currentURL == '/contents/list_webinars') {
                    this.currentURL = '';
                    this.contentType = '2542';
                }
            }
        });
    }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            this.magazineId = data.magazineId;
        });
        this.getContentData();
        this.getads();
    }
    getImage(imageId) {
        return this.RodmanCoreService.displayImageUrl(imageId);
    }
    safeHtml(data) {
        // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:,]/g, "")
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
    getContentData() {
        this.ListContentService.getContent(this.currentURL, this.magazineId, this.limit, this.page, this.contentType).subscribe((data) => {
            this.listContentData = data['data'];
            if (this.page == 0) {
                this.slugHeading = data['contentTypeName'];
            }
            this.page = data['page'] + 1;
            this.loading = false;
        });
    }
    getads() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
    }
};
ContentsWebinarComponent.ctorParameters = () => [
    { type: _list_content_list_content_service__WEBPACK_IMPORTED_MODULE_4__["ListContentService"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_2__["RodmanCoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ContentsWebinarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CoreLib-contents-webinar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contents-webinar.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contents-webinar.component.css */ "../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.css")).default]
    })
], ContentsWebinarComponent);



/***/ }),

/***/ "../rodman-core/src/lib/contents/list-content/list-content.service.ts":
/*!****************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/list-content/list-content.service.ts ***!
  \****************************************************************************/
/*! exports provided: ListContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContentService", function() { return ListContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");






let ListContentService = class ListContentService {
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    getContent(slug, magazineId, limit, page, contentType) {
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/getContentTypeContent', { pageUrl: slug, magazineId: magazineId, limit: limit, page: page, contentType: contentType }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
    getContentTopTaxonomy(slug, magazineId) {
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/getContentTypeTopTaxonomy', { pageUrl: slug, magazineId: magazineId }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
};
ListContentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
ListContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ListContentService);



/***/ }),

/***/ "../rodman-core/src/lib/contents/static-content/static-content.component.css":
/*!***********************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/static-content/static-content.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL2NvbnRlbnRzL3N0YXRpYy1jb250ZW50L3N0YXRpYy1jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "../rodman-core/src/lib/contents/static-content/static-content.component.ts":
/*!**********************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/static-content/static-content.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StaticContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticContentComponent", function() { return StaticContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _static_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-content.service */ "../rodman-core/src/lib/contents/static-content/static-content.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");





let StaticContentComponent = class StaticContentComponent {
    constructor(StaticContentService, Router, ActivatedRoute, RodmanCoreService) {
        this.StaticContentService = StaticContentService;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.RodmanCoreService = RodmanCoreService;
        this.limit = 30;
        this.page = 0;
        this.contentType = '';
        this.getAllAd = [];
        this.loading = true;
        Router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.routeUrl = event.url;
            }
        });
    }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            this.magazineId = data.magazineId;
        });
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
        this.getStatic();
    }
    ngOnChanges() {
        // this.getStatic();
    }
    safeHtml(data) {
        return this.RodmanCoreService.safeHtml(data);
    }
    getStatic() {
        this.StaticContentService.getStaticContent(this.routeUrl, this.magazineId, this.limit, this.page, this.contentType).subscribe((data) => {
            this.staticContentData = data['data'];
            this.loading = false;
        });
    }
};
StaticContentComponent.ctorParameters = () => [
    { type: _static_content_service__WEBPACK_IMPORTED_MODULE_2__["StaticContentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
StaticContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CoreLib-static-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./static-content.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/static-content/static-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./static-content.component.css */ "../rodman-core/src/lib/contents/static-content/static-content.component.css")).default]
    })
], StaticContentComponent);



/***/ }),

/***/ "../rodman-core/src/lib/contents/static-content/static-content.service.ts":
/*!********************************************************************************!*\
  !*** ../rodman-core/src/lib/contents/static-content/static-content.service.ts ***!
  \********************************************************************************/
/*! exports provided: StaticContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticContentService", function() { return StaticContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");






let StaticContentService = class StaticContentService {
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    getStaticContent(slug, magazineId, limit, page, contentType) {
        let slugs = slug.replace('/', '');
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/getContentTaxonomys', { pageUrl: slugs, magazineId: magazineId, limit: limit, page: page, contentType: contentType }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
};
StaticContentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
StaticContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StaticContentService);



/***/ }),

/***/ "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.css":
/*!******************************************************************************************************!*\
  !*** ../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-color{\n    background: gainsboro;\n    padding: 10px;\n}\n.country{\n    max-height: 300px;\n    overflow-y: scroll;\n    overflow-x:hidden ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvZGlyZWN0b3J5LXNlY3Rpb24vZGlyZWN0b3J5LWhvbWUtcGFnZS9kaXJlY3RvcnktaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoicHJvamVjdHMvcm9kbWFuLWNvcmUvc3JjL2xpYi9kaXJlY3Rvcnktc2VjdGlvbi9kaXJlY3RvcnktaG9tZS1wYWdlL2RpcmVjdG9yeS1ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWNvbG9ye1xuICAgIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvdW50cnl7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6aGlkZGVuIDtcbn0iXX0= */");

/***/ }),

/***/ "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.ts":
/*!*****************************************************************************************************!*\
  !*** ../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DirectoryHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryHomePageComponent", function() { return DirectoryHomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _directory_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directory-home-page.service */ "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.service.ts");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");





let DirectoryHomePageComponent = class DirectoryHomePageComponent {
    constructor(ActivatedRoute, DirectoryHomePageService, RodmanCoreService, Router) {
        this.ActivatedRoute = ActivatedRoute;
        this.DirectoryHomePageService = DirectoryHomePageService;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.getAllAd = [];
        this.alphabet = [];
        this.loading = true;
        this.current_letter = '';
        this.companiesTitleArray = {
            '1': { '0': 'Featured Supplier Showcase Companies', '1': 'Supplier Showcase Companies', '2': 'Featured Companies' },
            '5': { '0': 'Featured Company Capabilities Microsite', '1': 'Company Capabilities Microsite', '2': 'Featured Companies' },
            '6': { '0': 'Featured Company Profiles Microsite', '1': 'Company Profiles Microsite', '2': 'Featured Companies' },
            '7': { '0': 'Featured Microsite Companies', '1': 'Microsite Companies', '2': 'Featured Companies' },
            '8': { '0': 'Featured Company Profiles Microsite', '1': 'Company Profiles Microsite', '2': 'Featured Companies' },
            '9': { '0': 'Featured Corporate Profile Microsite', '1': 'Corporate Profile Microsite', '2': 'Featured Companies' },
            '10': { '0': 'Featured Technical Profile Microsite', '1': 'Technical Profile Microsite', '2': 'Featured Companies' },
            '11': { '0': 'Featured Microsite Companies', '1': 'Microsite Companies', '2': 'Featured Companies' },
            '12': { '0': 'Featured Microsite Companies', '1': 'Microsite Companies', '2': 'Featured Companies' },
            '13': { '0': 'Company Profile MicrositePLUS', '1': 'Company Profile Microsite', '2': 'Featured Companies' },
            '14': { '0': 'Featured Microsite Companies', '1': 'Microsite Companies', '2': 'Featured Companies' },
            '15': { '0': 'Featured Technical Profile Microsite', '1': 'Technical Profile Microsite', '2': 'Featured Companies' },
        };
        this.featuredmicrositeCompanies = [];
        this.micrositeCompanies = [];
        this.featuredBgCompanies = [];
        Router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        });
    }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            this.magazineId = data.magazineId;
        });
        this.getPageAd();
        this.buyersguideCategory();
        this.buyerGuideCompany();
        this.buyersguideCountry();
    }
    getPageAd() {
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
    }
    buyerGuideCompany() {
        this.DirectoryHomePageService.buyerGuideCompany(this.magazineId, this.currentURL).subscribe((data) => {
            this.data = data['data'];
            for (let compnayCheck of this.data) {
                if ((compnayCheck.has_microsite_listing == 1) && (compnayCheck.has_priority_listing == 1) && (compnayCheck.has_featured_mircosite_listing == 1)) {
                    this.featuredmicrositeCompanies.push(compnayCheck);
                }
                else if ((compnayCheck.has_microsite_listing == 1) && (compnayCheck.has_priority_listing == 1) && (compnayCheck.has_featured_mircosite_listing == 0)) {
                    this.micrositeCompanies.push(compnayCheck);
                }
                else if ((compnayCheck.has_microsite_listing == 0) && (compnayCheck.has_priority_listing == 1) && (compnayCheck.has_featured_mircosite_listing == 0)) {
                    this.featuredBgCompanies.push(compnayCheck);
                    // let checkCompanyTitle = compnayCheck.content_type_id;
                    // if(checkCompanyTitle != this.titleCheck ){}
                }
                if (compnayCheck.title.charAt(0).toUpperCase() != this.current_letter) {
                    this.current_letter = compnayCheck.title.charAt(0).toUpperCase();
                    this.alphabet.push(compnayCheck.title.charAt(0).toUpperCase());
                }
            }
            this.loading = false;
        });
    }
    buyersguideCategory() {
        this.DirectoryHomePageService.buyersguideCategory(this.magazineId, this.currentURL).subscribe((data) => {
            this.buyersGuideCategoryData = data['data'];
        });
    }
    buyersguideCountry() {
        this.DirectoryHomePageService.buyersguideCountry(this.magazineId, this.currentURL).subscribe((data) => {
            this.buyersguideCountryData = data['country'];
        });
    }
    matchCharacter(current, pre) {
        if (current.charAt(0).toUpperCase() != pre) {
            this.current_letter = current.charAt(0);
            return true;
        }
        return false;
    }
    safeHtml(data) {
        // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "")
        return this.RodmanCoreService.safeHtmlReplace(data);
    }
};
DirectoryHomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _directory_home_page_service__WEBPACK_IMPORTED_MODULE_2__["DirectoryHomePageService"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_3__["RodmanCoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DirectoryHomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CoreLib-directory-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./directory-home-page.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./directory-home-page.component.css */ "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.css")).default]
    })
], DirectoryHomePageComponent);



/***/ }),

/***/ "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.service.ts":
/*!***************************************************************************************************!*\
  !*** ../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: DirectoryHomePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryHomePageService", function() { return DirectoryHomePageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");






let DirectoryHomePageService = class DirectoryHomePageService {
    constructor(HttpClient, RodmanCoreService) {
        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
    }
    buyerGuideCompany(magazineId, slug) {
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/buyersguideSearchDirectory', { magazineId: magazineId, slug: slug }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
    buyersguideCategory(magazineId, slug) {
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/buyersguideCategory', { magazineId: magazineId, slug: slug }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
    buyersguideCountry(magazineId, slug) {
        return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/buyersguideCountry', { magazineId: magazineId, slug: slug }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
    }
};
DirectoryHomePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
DirectoryHomePageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DirectoryHomePageService);



/***/ }),

/***/ "../rodman-core/src/lib/rodman-core.service.ts":
/*!*****************************************************!*\
  !*** ../rodman-core/src/lib/rodman-core.service.ts ***!
  \*****************************************************/
/*! exports provided: apiURL, httpOptions, magazineNameDetails, magazineIds, IMAGE_DOMAIN, DEFAULT_IMAGE, RodmanCoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiURL", function() { return apiURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magazineNameDetails", function() { return magazineNameDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magazineIds", function() { return magazineIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_DOMAIN", function() { return IMAGE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_IMAGE", function() { return DEFAULT_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodmanCoreService", function() { return RodmanCoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");






'use strict';
const apiURL = 'http://3.85.159.45:8042/';
const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'Basic YWRtaW46YWRtaW5AMTIz' }) };
const magazineNameDetails = {
    'NUT': { id: '1', name: 'Nutraceuticals world' },
    'CW': { id: '5', name: 'Coating World' },
    'MPO': { id: '6', name: 'Medical Product Outsourcing' },
    'CP': { id: '7', name: 'Contract Pharma' },
    'BP': { id: '8', name: 'Beauty Packaging' },
    'HAP': { id: '9', name: 'Happi' },
    'INK': { id: '10', name: 'Ink World' },
    'LNW': { id: '11', name: 'Label & Narrow Web' },
    'NON': { id: '13', name: 'Nonwovens Industry' },
    'ODT': { id: '14', name: 'Orthopedic Design & Technology' },
    'PEN': { id: '15', name: 'Printed Electronics Now' },
};
const magazineIds = {
    '1': { id: 'NUT', name: 'Nutraceuticals world' },
    '5': { id: 'CW', name: 'Coating World' },
    '6': { id: 'MPO', name: 'Medical Product Outsourcing' },
    '7': { id: 'CP', name: 'Contract Pharma' },
    '8': { id: 'BP', name: 'Beauty Packaging' },
    '9': { id: 'HAP', name: 'Happi' },
    '10': { id: 'INK', name: 'Ink World' },
    '11': { id: 'LNW', name: 'Label & Narrow Web' },
    '13': { id: 'NON', name: 'Nonwovens Industry' },
    '14': { id: 'ODT', name: 'Orthopedic Design & Technology' },
    '15': { id: 'PEN', name: 'Printed Electronics Now' },
};
const IMAGE_DOMAIN = "http://dev.rodpub.com/images/";
const DEFAULT_IMAGE = "http://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif";
let RodmanCoreService = class RodmanCoreService {
    constructor(HttpClient, sanitizer, Router) {
        this.HttpClient = HttpClient;
        this.sanitizer = sanitizer;
        this.Router = Router;
        this.collectoionAds = [];
        this.finalArray = [];
        Router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        });
    }
    displayImageUrl(imageId) {
        imageId = imageId.toString();
        let folderName = imageId.substring(0, 3);
        let imageName = imageId.substring(3);
        return (imageId != '0') ? IMAGE_DOMAIN + folderName + "/" + imageName + '_main.jpg' : DEFAULT_IMAGE;
    }
    displayImageThumbURL(imageId) {
        imageId = imageId.toString();
        let folderName = imageId.substring(0, 3);
        let imageName = imageId.substring(3);
        return (imageId != '0') ? IMAGE_DOMAIN + folderName + "/" + imageName + '_thumb.jpg' : DEFAULT_IMAGE;
    }
    returnUrl() {
        return this.currentURL;
    }
    getAllAdst(magazineId) {
        return this.HttpClient.post(apiURL + 'adsController/getAds', { magazineId: magazineId, pageUrl: this.currentURL }, httpOptions);
    }
    getAdcode(str) {
        str = str.replace(/\'/g, '');
        str = str.replace(/\\/g, '');
        var firstIndex = str.indexOf("script") + 10;
        var lastIndex = str.indexOf("/script>");
        str = str.substring(firstIndex, lastIndex);
        if (str.indexOf('defineSlot') < 0)
            return false;
        var slot = str.substring(str.indexOf("defineSlot(") + 11, str.indexOf(").addService"));
        var slotvalue = slot.split(',')[0];
        var code = {
            slot: slotvalue,
            sizes: str.substring(str.lastIndexOf("[[") + 1, str.lastIndexOf("]]") + 1),
            key: str.substring(str.lastIndexOf('setTargeting("') + 14, str.lastIndexOf('",')),
            value: str.substring(str.lastIndexOf('",[') + 4, str.lastIndexOf('])'))
        };
        return code;
    }
    safeHtml(data) {
        return this.sanitizer.bypassSecurityTrustHtml(data);
    }
    safeHtmlReplace(data) {
        return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "").replace('&amp;', '&').replace("\'", "'");
    }
    bodyCharacterLength(data) {
        return data.substring(0, 150);
    }
    extractNameFromJson(obj) {
        if (/^[\],:{}\s]*$/.test(obj.replace(/\\["\\\/bfnrtu]/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            obj = JSON.parse(obj);
            return (obj.name) ? 'By ' + obj.name + ' ' + obj.title + ' .' : '';
        }
        else {
            return (obj) ? "By " + obj : '  ';
        }
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        this.errorData = {
            errorTitle: 'Oops! Request for document failed',
            errorDesc: 'Something bad happened. Please try again later.'
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(this.errorData);
    }
};
RodmanCoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RodmanCoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RodmanCoreService);



/***/ }),

/***/ "../rodman-core/src/lib/sites/components/not-found/not-found.component.css":
/*!*********************************************************************************!*\
  !*** ../rodman-core/src/lib/sites/components/not-found/not-found.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL3NpdGVzL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "../rodman-core/src/lib/sites/components/not-found/not-found.component.ts":
/*!********************************************************************************!*\
  !*** ../rodman-core/src/lib/sites/components/not-found/not-found.component.ts ***!
  \********************************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CoreLib-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/sites/components/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "../rodman-core/src/lib/sites/components/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "../rodman-core/src/lib/users/Components/user-profile/user-profile.component.css":
/*!***************************************************************************************!*\
  !*** ../rodman-core/src/lib/users/Components/user-profile/user-profile.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL3VzZXJzL0NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "../rodman-core/src/lib/users/Components/user-profile/user-profile.component.ts":
/*!**************************************************************************************!*\
  !*** ../rodman-core/src/lib/users/Components/user-profile/user-profile.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");



let UserProfileComponent = class UserProfileComponent {
    constructor(ActivatedRoute) {
        this.ActivatedRoute = ActivatedRoute;
        this.message = false;
    }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            this.magazineId = data.magazineId;
        });
        if (localStorage.getItem('authDetails' + this.magazineId)) {
            const data = JSON.parse(localStorage.getItem('authDetails' + this.magazineId));
            this.message = true;
        }
        else {
        }
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CoreLib-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/users/Components/user-profile/user-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.css */ "../rodman-core/src/lib/users/Components/user-profile/user-profile.component.css")).default]
    })
], UserProfileComponent);



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/content-search/content-search.component */ "../rodman-core/src/lib/contents/content-search/content-search.component.ts");
/* harmony import */ var _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../rodman-core/src/lib/sites/components/not-found/not-found.component */ "../rodman-core/src/lib/sites/components/not-found/not-found.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/static-content/static-content.component */ "../rodman-core/src/lib/contents/static-content/static-content.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_content_issue_content_issue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/content-issue/content-issue.component */ "../rodman-core/src/lib/contents/content-issue/content-issue.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_content_rss_feeds_content_rss_feeds_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component */ "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.ts");
/* harmony import */ var _rodman_core_src_lib_directory_section_directory_home_page_directory_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component */ "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_content_infographics_content_infographics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/content-infographics/content-infographics.component */ "../rodman-core/src/lib/contents/content-infographics/content-infographics.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_contents_webinar_contents_webinar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component */ "../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.ts");
/* harmony import */ var _bp_contant_bp_content_view_bp_content_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bp-contant/bp-content-view/bp-content-view.component */ "./src/app/bp-contant/bp-content-view/bp-content-view.component.ts");
/* harmony import */ var _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bp-contant/bp-top-company/bp-top-company.component */ "./src/app/bp-contant/bp-top-company/bp-top-company.component.ts");




// Rodman Core Import










const routes = [
    { path: "", pathMatch: 'full', loadChildren: () => __webpack_require__.e(/*! import() | bp-home-bp-home-module */ "bp-home-bp-home-module").then(__webpack_require__.bind(null, /*! ./bp-home/bp-home.module */ "./src/app/bp-home/bp-home.module.ts")).then(m => m.BpHomeModule) },
    // Search Content   
    { path: 'contents/list_webinars', component: _rodman_core_src_lib_contents_contents_webinar_contents_webinar_component__WEBPACK_IMPORTED_MODULE_11__["ContentsWebinarComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'contents/list_infographics', component: _rodman_core_src_lib_contents_content_infographics_content_infographics_component__WEBPACK_IMPORTED_MODULE_10__["ContentInfographicsComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'contents/list_industry-events', component: _rodman_core_src_lib_contents_content_infographics_content_infographics_component__WEBPACK_IMPORTED_MODULE_10__["ContentInfographicsComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'contents/searchcontent/:any/:slug', component: _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_4__["ContentSearchComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'contents/searchcontent/:any', component: _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_4__["ContentSearchComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'contents/searchcontent', component: _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_4__["ContentSearchComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    //View Page Content    
    { path: 'contents/:any/:any/:any', component: _bp_contant_bp_content_view_bp_content_view_component__WEBPACK_IMPORTED_MODULE_12__["BpContentViewComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'issues/:any/:any/:any', component: _bp_contant_bp_content_view_bp_content_view_component__WEBPACK_IMPORTED_MODULE_12__["BpContentViewComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    //Taxonomy
    // {path:  'formulary/:any', loadChildren: () =>import('./bp-taxonomy/bp-taxonomy.module').then (m=>m.BpTaxonomyModule)},
    { path: 'news/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    // {path:  'blog/:any', loadChildren: () =>import('./bp-taxonomy/bp-taxonomy.module').then (m=>m.BpTaxonomyModule)},
    { path: 'markets', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'markets/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'materials', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'materials/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'solutions', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'solutions/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'events', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'events/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'departments', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'departments/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'classifieds', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'classifieds/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'knowledge-center', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'knowledge-center/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'live-from-shows', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'resources', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'topics', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'topics/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'print-columns', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'print-columns/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'brandssuppliers', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'brandssuppliers/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'showcases', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'showcases/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'components', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    { path: 'components/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-taxonomy-bp-taxonomy-module */ "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null, /*! ./bp-taxonomy/bp-taxonomy.module */ "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(m => m.BpTaxonomyModule) },
    //Contents
    // {path:  'glossary', component:ContentGlossaryComponent,data: {magazineId: environment.magazineId }},
    { path: 'contents/viewwebsite/:any', component: _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: 'contents/2487', component: _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: 'contents/2543', component: _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: 'contents/:any', loadChildren: () => __webpack_require__.e(/*! import() | bp-contant-bp-contant-module */ "bp-contant-bp-contant-module").then(__webpack_require__.bind(null, /*! ./bp-contant/bp-contant.module */ "./src/app/bp-contant/bp-contant.module.ts")).then(m => m.BpContantModule) },
    // {path: 'profile',component : UserProfileComponent,data: {magazineId: environment.magazineId }},
    // {path: 'user/verifyUser/:token/:email',component:UserMailVerifyComponent},
    // BuyerGuide Case 
    { path: 'csd', component: _rodman_core_src_lib_directory_section_directory_home_page_directory_home_page_component__WEBPACK_IMPORTED_MODULE_9__["DirectoryHomePageComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'csd/contract-services-directory', component: _rodman_core_src_lib_directory_section_directory_home_page_directory_home_page_component__WEBPACK_IMPORTED_MODULE_9__["DirectoryHomePageComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    // OtherCase Static Content
    { path: 'subscribe-now', component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'advertise-with-us', component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'enewsletter-archive', component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'staff', component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'editorial-guidelines', component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'terms-and-conditions', component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'privacy-policy', component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'about-us', component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'contact-us', component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    //Rss
    { path: 'rssfeeds', component: _rodman_core_src_lib_contents_content_rss_feeds_content_rss_feeds_component__WEBPACK_IMPORTED_MODULE_8__["ContentRssFeedsComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'issues/:slug', component: _rodman_core_src_lib_contents_content_issue_content_issue_component__WEBPACK_IMPORTED_MODULE_7__["ContentIssueComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'heaps/view/:any', component: _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_13__["BpTopCompanyComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'heaps/view/:any/:any', component: _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_13__["BpTopCompanyComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: 'heaps/view/:any/:any/:any', component: _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_13__["BpTopCompanyComponent"], data: { magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId } },
    { path: "**", component: _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../rodman-core/src/lib/rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");





let AppComponent = class AppComponent {
    constructor(Router, ActivatedRoute, RodmanCoreService) {
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.RodmanCoreService = RodmanCoreService;
        this.title = 'BP';
        this.getAllAd = [];
        Router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        });
        Router.events.subscribe((ev) => {
            // this.spinner();
        });
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        this.magazineName = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineName;
        //   this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data =>{
        //     this.getAllAd = data;
        //     this.viewAdRender = 1;
        //  }))
    }
    ngOnInit() {
        this.ActivatedRoute.url.subscribe(url => {
            this.currentURL = url[0].path;
        });
    }
    ngOnChanges() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'BP-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "../../node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "../../node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rodman_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rodman-core */ "../../dist/rodman-core/fesm2015/rodman-core.js");
/* harmony import */ var _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/content-search/content-search.component */ "../rodman-core/src/lib/contents/content-search/content-search.component.ts");
/* harmony import */ var _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../rodman-core/src/lib/sites/components/not-found/not-found.component */ "../rodman-core/src/lib/sites/components/not-found/not-found.component.ts");
/* harmony import */ var _rodman_core_src_lib_users_Components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../rodman-core/src/lib/users/Components/user-profile/user-profile.component */ "../rodman-core/src/lib/users/Components/user-profile/user-profile.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/static-content/static-content.component */ "../rodman-core/src/lib/contents/static-content/static-content.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_content_glossary_content_glossary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/content-glossary/content-glossary.component */ "../rodman-core/src/lib/contents/content-glossary/content-glossary.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_content_issue_content_issue_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/content-issue/content-issue.component */ "../rodman-core/src/lib/contents/content-issue/content-issue.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_content_rss_feeds_content_rss_feeds_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component */ "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.ts");
/* harmony import */ var _rodman_core_src_lib_directory_section_directory_home_page_directory_home_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component */ "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_content_infographics_content_infographics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/content-infographics/content-infographics.component */ "../rodman-core/src/lib/contents/content-infographics/content-infographics.component.ts");
/* harmony import */ var _rodman_core_src_lib_contents_contents_webinar_contents_webinar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component */ "../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.ts");
/* harmony import */ var _bp_contant_bp_content_view_bp_content_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bp-contant/bp-content-view/bp-content-view.component */ "./src/app/bp-contant/bp-content-view/bp-content-view.component.ts");
/* harmony import */ var _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bp-contant/bp-top-company/bp-top-company.component */ "./src/app/bp-contant/bp-top-company/bp-top-company.component.ts");








// Rodman Core Import
 // import { BuyerGuideModule } from "rodman-core";












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
            _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_9__["ContentSearchComponent"],
            _rodman_core_src_lib_users_Components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"],
            _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_12__["StaticContentComponent"],
            _rodman_core_src_lib_contents_content_glossary_content_glossary_component__WEBPACK_IMPORTED_MODULE_13__["ContentGlossaryComponent"],
            _rodman_core_src_lib_contents_content_issue_content_issue_component__WEBPACK_IMPORTED_MODULE_14__["ContentIssueComponent"],
            _rodman_core_src_lib_contents_content_rss_feeds_content_rss_feeds_component__WEBPACK_IMPORTED_MODULE_15__["ContentRssFeedsComponent"],
            _rodman_core_src_lib_directory_section_directory_home_page_directory_home_page_component__WEBPACK_IMPORTED_MODULE_16__["DirectoryHomePageComponent"],
            _rodman_core_src_lib_contents_content_infographics_content_infographics_component__WEBPACK_IMPORTED_MODULE_17__["ContentInfographicsComponent"],
            _rodman_core_src_lib_contents_contents_webinar_contents_webinar_component__WEBPACK_IMPORTED_MODULE_18__["ContentsWebinarComponent"],
            _bp_contant_bp_content_view_bp_content_view_component__WEBPACK_IMPORTED_MODULE_19__["BpContentViewComponent"],
            _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_20__["BpTopCompanyComponent"]
        ],
        imports: [
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_8__["DirectorySectionModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_8__["SitesModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_8__["HeapsModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_8__["ContentsModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_8__["UsersModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_8__["TaxonomiesModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_8__["AdsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bp-contant/bp-content-view/bp-content-view.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/bp-contant/bp-content-view/bp-content-view.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9CUC9zcmMvYXBwL2JwLWNvbnRhbnQvYnAtY29udGVudC12aWV3L2JwLWNvbnRlbnQtdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/bp-contant/bp-content-view/bp-content-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/bp-contant/bp-content-view/bp-content-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: BpContentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpContentViewComponent", function() { return BpContentViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let BpContentViewComponent = class BpContentViewComponent {
    constructor(router) {
        this.router = router;
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.contentPageUrl = event.url;
            }
        });
    }
    ngOnInit() {
    }
};
BpContentViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BpContentViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'BP-bp-content-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bp-content-view.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-content-view/bp-content-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bp-content-view.component.css */ "./src/app/bp-contant/bp-content-view/bp-content-view.component.css")).default]
    })
], BpContentViewComponent);



/***/ }),

/***/ "./src/app/bp-contant/bp-top-company/bp-top-company.component.css":
/*!************************************************************************!*\
  !*** ./src/app/bp-contant/bp-top-company/bp-top-company.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9CUC9zcmMvYXBwL2JwLWNvbnRhbnQvYnAtdG9wLWNvbXBhbnkvYnAtdG9wLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/bp-contant/bp-top-company/bp-top-company.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/bp-contant/bp-top-company/bp-top-company.component.ts ***!
  \***********************************************************************/
/*! exports provided: BpTopCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpTopCompanyComponent", function() { return BpTopCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let BpTopCompanyComponent = class BpTopCompanyComponent {
    constructor(router) {
        this.router = router;
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.contentPageUrl = event.url;
            }
        });
    }
    ngOnInit() {
    }
};
BpTopCompanyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BpTopCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'BP-bp-top-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bp-top-company.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-top-company/bp-top-company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bp-top-company.component.css */ "./src/app/bp-contant/bp-top-company/bp-top-company.component.css")).default]
    })
], BpTopCompanyComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    API_URL: 'http://3.85.159.45:8042/',
    magazineId: '8',
    magazineName: 'BP',
    homeBoxId: "24987,5",
    breakingNews: '2487',
    TabOne: "2487,5",
    TabTwo: "2486,5",
    feature: '2486'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bezoar/RodmanAngled/projects/BP/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map