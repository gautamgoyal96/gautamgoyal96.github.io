(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bp-taxonomy-bp-taxonomy-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-taxonomy/bp-taxonomy-list/bp-taxonomy-list.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/bp-taxonomy/bp-taxonomy-list/bp-taxonomy-list.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <CoreLib-list-taxonomies routeUrl = {{currentURL}} magazineId=\"{{magazineId}}\"></CoreLib-list-taxonomies>     \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"{{TabOne}}\" TabTwo=\"{{TabTwo}}\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>");

/***/ }),

/***/ "./src/app/bp-taxonomy/bp-taxonomy-list/bp-taxonomy-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/bp-taxonomy/bp-taxonomy-list/bp-taxonomy-list.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9CUC9zcmMvYXBwL2JwLXRheG9ub215L2JwLXRheG9ub215LWxpc3QvYnAtdGF4b25vbXktbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/bp-taxonomy/bp-taxonomy-list/bp-taxonomy-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/bp-taxonomy/bp-taxonomy-list/bp-taxonomy-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: BpTaxonomyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpTaxonomyListComponent", function() { return BpTaxonomyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../rodman-core/src/lib/rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");





let BpTaxonomyListComponent = class BpTaxonomyListComponent {
    constructor(router, RodmanCoreService) {
        this.router = router;
        this.RodmanCoreService = RodmanCoreService;
        this.getAllAd = [];
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        this.TabOne = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TabOne;
        this.TabTwo = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TabTwo;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.currentURL = event.url;
            }
        });
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
    }
    ngOnInit() {
    }
};
BpTaxonomyListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
BpTaxonomyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'BP-bp-taxonomy-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bp-taxonomy-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-taxonomy/bp-taxonomy-list/bp-taxonomy-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bp-taxonomy-list.component.css */ "./src/app/bp-taxonomy/bp-taxonomy-list/bp-taxonomy-list.component.css")).default]
    })
], BpTaxonomyListComponent);



/***/ }),

/***/ "./src/app/bp-taxonomy/bp-taxonomy-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/bp-taxonomy/bp-taxonomy-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BpTaxonomyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpTaxonomyRoutingModule", function() { return BpTaxonomyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bp_taxonomy_list_bp_taxonomy_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bp-taxonomy-list/bp-taxonomy-list.component */ "./src/app/bp-taxonomy/bp-taxonomy-list/bp-taxonomy-list.component.ts");




const routes = [
    { path: "", component: _bp_taxonomy_list_bp_taxonomy_list_component__WEBPACK_IMPORTED_MODULE_3__["BpTaxonomyListComponent"] },
    { path: ":any", component: _bp_taxonomy_list_bp_taxonomy_list_component__WEBPACK_IMPORTED_MODULE_3__["BpTaxonomyListComponent"] },
];
let BpTaxonomyRoutingModule = class BpTaxonomyRoutingModule {
};
BpTaxonomyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BpTaxonomyRoutingModule);



/***/ }),

/***/ "./src/app/bp-taxonomy/bp-taxonomy.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bp-taxonomy/bp-taxonomy.module.ts ***!
  \***************************************************/
/*! exports provided: BpTaxonomyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpTaxonomyModule", function() { return BpTaxonomyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bp_taxonomy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bp-taxonomy-routing.module */ "./src/app/bp-taxonomy/bp-taxonomy-routing.module.ts");
/* harmony import */ var _bp_taxonomy_list_bp_taxonomy_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bp-taxonomy-list/bp-taxonomy-list.component */ "./src/app/bp-taxonomy/bp-taxonomy-list/bp-taxonomy-list.component.ts");
/* harmony import */ var rodman_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rodman-core */ "../../dist/rodman-core/fesm2015/rodman-core.js");
/* harmony import */ var ngx_dfp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dfp */ "../../node_modules/ngx-dfp/fesm2015/ngx-dfp.js");







let BpTaxonomyModule = class BpTaxonomyModule {
};
BpTaxonomyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bp_taxonomy_list_bp_taxonomy_list_component__WEBPACK_IMPORTED_MODULE_4__["BpTaxonomyListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bp_taxonomy_routing_module__WEBPACK_IMPORTED_MODULE_3__["BpTaxonomyRoutingModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["TaxonomiesModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["ContentsModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["AdsModule"],
            ngx_dfp__WEBPACK_IMPORTED_MODULE_6__["DfpModule"].forRoot({
                idleLoad: true,
                enableVideoAds: true,
                personalizedAds: true,
                singleRequestMode: true,
                onSameNavigation: 'refresh',
                globalTargeting: {
                // food: ['NUT', 'HOME']
                }
            })
        ]
    })
], BpTaxonomyModule);



/***/ })

}]);
//# sourceMappingURL=bp-taxonomy-bp-taxonomy-module-es2015.js.map