function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bp-contant-bp-contant-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-content-list/bp-content-list.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-content-list/bp-content-list.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBpContantBpContentListBpContentListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <!-- <CoreLib-home-slider *ngIf=\"contentType != 2542\" magazineId=\"{{magazineId}}\"  id = \"2486,7\"></CoreLib-home-slider> -->\n                    <CoreLib-lists-contents  routeUrl = {{currentURL}} magazineId=\"{{magazineId}}\" contentType=\"{{contentType}}\"></CoreLib-lists-contents>          \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"{{TabOne}}\" TabTwo=\"{{TabTwo}}\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n";
    /***/
  },

  /***/
  "./src/app/bp-contant/bp-contant-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/bp-contant/bp-contant-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: BpContantRoutingModule */

  /***/
  function srcAppBpContantBpContantRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BpContantRoutingModule", function () {
      return BpContantRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _bp_content_list_bp_content_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bp-content-list/bp-content-list.component */
    "./src/app/bp-contant/bp-content-list/bp-content-list.component.ts");

    var routes = [{
      path: "",
      component: _bp_content_list_bp_content_list_component__WEBPACK_IMPORTED_MODULE_3__["BpContentListComponent"]
    }, {
      path: ":any",
      component: _bp_content_list_bp_content_list_component__WEBPACK_IMPORTED_MODULE_3__["BpContentListComponent"]
    }];

    var BpContantRoutingModule = function BpContantRoutingModule() {
      _classCallCheck(this, BpContantRoutingModule);
    };

    BpContantRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BpContantRoutingModule);
    /***/
  },

  /***/
  "./src/app/bp-contant/bp-contant.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/bp-contant/bp-contant.module.ts ***!
    \*************************************************/

  /*! exports provided: BpContantModule */

  /***/
  function srcAppBpContantBpContantModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BpContantModule", function () {
      return BpContantModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _bp_contant_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bp-contant-routing.module */
    "./src/app/bp-contant/bp-contant-routing.module.ts");
    /* harmony import */


    var _bp_content_list_bp_content_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bp-content-list/bp-content-list.component */
    "./src/app/bp-contant/bp-content-list/bp-content-list.component.ts");
    /* harmony import */


    var rodman_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rodman-core */
    "../../dist/rodman-core/fesm2015/rodman-core.js");
    /* harmony import */


    var ngx_dfp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-dfp */
    "../../node_modules/ngx-dfp/fesm2015/ngx-dfp.js");

    var BpContantModule = function BpContantModule() {
      _classCallCheck(this, BpContantModule);
    };

    BpContantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_bp_content_list_bp_content_list_component__WEBPACK_IMPORTED_MODULE_4__["BpContentListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _bp_contant_routing_module__WEBPACK_IMPORTED_MODULE_3__["BpContantRoutingModule"], rodman_core__WEBPACK_IMPORTED_MODULE_5__["ContentsModule"], rodman_core__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], rodman_core__WEBPACK_IMPORTED_MODULE_5__["SitesModule"], rodman_core__WEBPACK_IMPORTED_MODULE_5__["AdsModule"], rodman_core__WEBPACK_IMPORTED_MODULE_5__["HeapsModule"], ngx_dfp__WEBPACK_IMPORTED_MODULE_6__["DfpModule"].forRoot({
        idleLoad: true,
        enableVideoAds: true,
        personalizedAds: true,
        singleRequestMode: true,
        onSameNavigation: 'refresh',
        globalTargeting: {// food: ['NUT', 'HOME']
        }
      })]
    })], BpContantModule);
    /***/
  },

  /***/
  "./src/app/bp-contant/bp-content-list/bp-content-list.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/bp-contant/bp-content-list/bp-content-list.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBpContantBpContentListBpContentListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9CUC9zcmMvYXBwL2JwLWNvbnRhbnQvYnAtY29udGVudC1saXN0L2JwLWNvbnRlbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/bp-contant/bp-content-list/bp-content-list.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/bp-contant/bp-content-list/bp-content-list.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BpContentListComponent */

  /***/
  function srcAppBpContantBpContentListBpContentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BpContentListComponent", function () {
      return BpContentListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../rodman-core/src/lib/rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var BpContentListComponent =
    /*#__PURE__*/
    function () {
      function BpContentListComponent(router, RodmanCoreService) {
        var _this = this;

        _classCallCheck(this, BpContentListComponent);

        this.router = router;
        this.RodmanCoreService = RodmanCoreService;
        this.getAllAd = [];
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        this.TabOne = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TabOne;
        this.TabTwo = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TabTwo;
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this.currentURL = event.url; // if(this.currentURL=='/contents/list_webinars'){
            //   this.currentURL= '';
            //   this.contentType = '2542';
            // }else if(this.currentURL=='/research'){
            //   this.currentURL= '';
            //   this.contentType = '2499,2488,2557';
            // }          
          }
        });
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(function (data) {
          _this.getAllAd = data;
          _this.viewAdRender = 1;
        });
      }

      _createClass(BpContentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BpContentListComponent;
    }();

    BpContentListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }];
    };

    BpContentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'BP-bp-content-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bp-content-list.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-content-list/bp-content-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bp-content-list.component.css */
      "./src/app/bp-contant/bp-content-list/bp-content-list.component.css")).default]
    })], BpContentListComponent);
    /***/
  }
}]);
//# sourceMappingURL=bp-contant-bp-contant-module-es5.js.map