function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../dist/rodman-core/fesm2015/rodman-core.js":
  /*!**************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/dist/rodman-core/fesm2015/rodman-core.js ***!
    \**************************************************************************/

  /*! exports provided: AdsModule, ContentsModule, DEFAULT_IMAGE, DirectorySectionModule, HeapsModule, HomeModule, IMAGE_DOMAIN, RodmanCoreComponent, RodmanCoreModule, RodmanCoreService, SitesModule, TaxonomiesModule, UsersModule, apiURL, httpOptions, magazineIds, magazineNameDetails, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵbr, ɵbs, ɵbt, ɵbu, ɵbv, ɵbw, ɵbx, ɵby, ɵbz, ɵc, ɵca, ɵcb, ɵcc, ɵcd, ɵce, ɵcf, ɵcg, ɵch, ɵci, ɵcj, ɵck, ɵcl, ɵcm, ɵcn, ɵco, ɵcp, ɵcq, ɵcr, ɵcs, ɵct, ɵcu, ɵcv, ɵcw, ɵcx, ɵcy, ɵcz, ɵd, ɵda, ɵdb, ɵdc, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */

  /***/
  function distRodmanCoreFesm2015RodmanCoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdsModule", function () {
      return AdsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentsModule", function () {
      return ContentsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_IMAGE", function () {
      return DEFAULT_IMAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectorySectionModule", function () {
      return DirectorySectionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeapsModule", function () {
      return HeapsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMAGE_DOMAIN", function () {
      return IMAGE_DOMAIN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RodmanCoreComponent", function () {
      return RodmanCoreComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RodmanCoreModule", function () {
      return RodmanCoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RodmanCoreService", function () {
      return RodmanCoreService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SitesModule", function () {
      return SitesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaxonomiesModule", function () {
      return TaxonomiesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
      return UsersModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiURL", function () {
      return apiURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpOptions", function () {
      return httpOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "magazineIds", function () {
      return magazineIds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "magazineNameDetails", function () {
      return magazineNameDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NavComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return NavService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵba", function () {
      return ContentViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbb", function () {
      return ContentViewService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbc", function () {
      return ContentBoxTabsService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbd", function () {
      return ContentDynamicViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbe", function () {
      return ContentInfographicsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbf", function () {
      return ContentSearchComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbg", function () {
      return ContentSearchService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbh", function () {
      return ContentRelatedComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbi", function () {
      return ContentRelatedService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbj", function () {
      return ContentSuggestSlideShowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbk", function () {
      return ContentBoxTabsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbl", function () {
      return ContentDefaultComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbm", function () {
      return ContentJobsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbn", function () {
      return ContentFeatureComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbo", function () {
      return ContentVideoComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbp", function () {
      return ContentWebinarsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbq", function () {
      return ContentFormularyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbr", function () {
      return ContentBuyerGuideBasicComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbs", function () {
      return ContentBuyerGuideMicroSiteComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbt", function () {
      return ContentSlideShowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbu", function () {
      return ContentStaticContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbv", function () {
      return ContentWhitePaperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbw", function () {
      return ContentNewsReleaseComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbx", function () {
      return ContentCompanyRelatedComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵby", function () {
      return ContentCompanyRelatedService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbz", function () {
      return ContentRelatedContentListComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return AuthenticationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵca", function () {
      return ContentRelatedSearchesComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcb", function () {
      return ContentGlossaryComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcc", function () {
      return ContentIssueComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcd", function () {
      return ContentIssueService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵce", function () {
      return ContentIssueSliderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcf", function () {
      return ContentRssFeedsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcg", function () {
      return ContentRssFeedsService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵch", function () {
      return ContentListsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵci", function () {
      return ContentsWebinarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcj", function () {
      return ContentMagazineIssueComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵck", function () {
      return ContentsRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcl", function () {
      return UsersVerifyEmailComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcm", function () {
      return UsersVerifyEmailService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcn", function () {
      return UserProfileComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵco", function () {
      return CompanyContentAuthenticateComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcp", function () {
      return UsersRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcq", function () {
      return ListTaxonomiesComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcr", function () {
      return ListTaxonomiesService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcs", function () {
      return TaxonomiesRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵct", function () {
      return DirectoryHomePageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcu", function () {
      return DirectoryHomePageService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcv", function () {
      return DirectorySearchBoxComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcw", function () {
      return DirectoryBasicCompanyListingComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcx", function () {
      return DirectorySectionRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcy", function () {
      return TopCompanyHomePageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcz", function () {
      return TopCompanyHomePageService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return AuthenticationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵda", function () {
      return TopCompanyHomePageSliderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵdb", function () {
      return TopCompanyHomePageSliderService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵdc", function () {
      return HeapsRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return HeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return FooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return FootersliderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return FootersliderService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return NotFoundComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return SliderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return SitesRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return AdsDisplayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return AdsOverlayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return AdsFooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return AdsDoubleClickComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return AdsHomeWidgetComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return AdsRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return FeaturedContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return FeatureContentService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt", function () {
      return HomeSliderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵu", function () {
      return HomeSliderService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵv", function () {
      return HomeRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵw", function () {
      return ListContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵx", function () {
      return ListContentService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵy", function () {
      return StaticContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵz", function () {
      return StaticContentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "../../node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "../../node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap */
    "../../node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var ngx_dfp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-dfp */
    "../../node_modules/ngx-dfp/fesm2015/ngx-dfp.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-font-awesome */
    "../../node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var rodman_orm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! rodman-orm */
    "../../dist/rodman-orm/fesm2015/rodman-orm.js");
    /* harmony import */


    var ng2_device_detector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ng2-device-detector */
    "../../node_modules/ng2-device-detector/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/rodman-core.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    'use strict';
    /** @type {?} */


    var apiURL = 'http://3.85.159.45:8042/';
    /** @type {?} */

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46YWRtaW5AMTIz'
      })
    };
    /** @type {?} */

    var magazineNameDetails = {
      'NUT': {
        id: '1',
        name: 'Nutraceuticals world'
      },
      'CW': {
        id: '5',
        name: 'Coating World'
      },
      'MPO': {
        id: '6',
        name: 'Medical Product Outsourcing'
      },
      'CP': {
        id: '7',
        name: 'Contract Pharma'
      },
      'BP': {
        id: '8',
        name: 'Beauty Packaging'
      },
      'HAP': {
        id: '9',
        name: 'Happi'
      },
      'INK': {
        id: '10',
        name: 'Ink World'
      },
      'LNW': {
        id: '11',
        name: 'Label & Narrow Web'
      },
      'NON': {
        id: '13',
        name: 'Nonwovens Industry'
      },
      'ODT': {
        id: '14',
        name: 'Orthopedic Design & Technology'
      },
      'PEN': {
        id: '15',
        name: 'Printed Electronics Now'
      }
    };
    /** @type {?} */

    var magazineIds = {
      '1': {
        id: 'NUT',
        name: 'Nutraceuticals world'
      },
      '5': {
        id: 'CW',
        name: 'Coating World'
      },
      '6': {
        id: 'MPO',
        name: 'Medical Product Outsourcing'
      },
      '7': {
        id: 'CP',
        name: 'Contract Pharma'
      },
      '8': {
        id: 'BP',
        name: 'Beauty Packaging'
      },
      '9': {
        id: 'HAP',
        name: 'Happi'
      },
      '10': {
        id: 'INK',
        name: 'Ink World'
      },
      '11': {
        id: 'LNW',
        name: 'Label & Narrow Web'
      },
      '13': {
        id: 'NON',
        name: 'Nonwovens Industry'
      },
      '14': {
        id: 'ODT',
        name: 'Orthopedic Design & Technology'
      },
      '15': {
        id: 'PEN',
        name: 'Printed Electronics Now'
      }
    };
    /** @type {?} */

    var IMAGE_DOMAIN = "http://dev.rodpub.com/images/";
    /** @type {?} */

    var DEFAULT_IMAGE = "http://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif";

    var RodmanCoreService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} sanitizer
       * @param {?} Router
       */
      function RodmanCoreService(HttpClient, sanitizer, Router) {
        var _this = this;

        _classCallCheck(this, RodmanCoreService);

        this.HttpClient = HttpClient;
        this.sanitizer = sanitizer;
        this.Router = Router;
        this.collectoionAds = [];
        this.finalArray = [];
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this.currentURL = event.url;
          }
        });
      }
      /**
       * @param {?} imageId
       * @return {?}
       */


      _createClass(RodmanCoreService, [{
        key: "displayImageUrl",
        value: function displayImageUrl(imageId) {
          imageId = imageId.toString();
          /** @type {?} */

          var folderName = imageId.substring(0, 3);
          /** @type {?} */

          var imageName = imageId.substring(3);
          return imageId != '0' ? IMAGE_DOMAIN + folderName + "/" + imageName + '_main.jpg' : DEFAULT_IMAGE;
        }
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "displayImageThumbURL",
        value: function displayImageThumbURL(imageId) {
          imageId = imageId.toString();
          /** @type {?} */

          var folderName = imageId.substring(0, 3);
          /** @type {?} */

          var imageName = imageId.substring(3);
          return imageId != '0' ? IMAGE_DOMAIN + folderName + "/" + imageName + '_thumb.jpg' : DEFAULT_IMAGE;
        }
        /**
         * @return {?}
         */

      }, {
        key: "returnUrl",
        value: function returnUrl() {
          return this.currentURL;
        }
        /**
         * @param {?} magazineId
         * @return {?}
         */

      }, {
        key: "getAllAdst",
        value: function getAllAdst(magazineId) {
          return this.HttpClient.post(apiURL + 'adsController/getAds', {
            magazineId: magazineId,
            pageUrl: this.currentURL
          }, httpOptions);
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "getAdcode",
        value: function getAdcode(str) {
          str = str.replace(/\'/g, '');
          str = str.replace(/\\/g, '');
          /** @type {?} */

          var firstIndex = str.indexOf("script") + 10;
          /** @type {?} */

          var lastIndex = str.indexOf("/script>");
          str = str.substring(firstIndex, lastIndex);
          if (str.indexOf('defineSlot') < 0) return false;
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

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.sanitizer.bypassSecurityTrustHtml(data);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "").replace('&amp;', '&').replace("\'", "'");
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "bodyCharacterLength",
        value: function bodyCharacterLength(data) {
          return data.substring(0, 150);
        }
        /**
         * @param {?} obj
         * @return {?}
         */

      }, {
        key: "extractNameFromJson",
        value: function extractNameFromJson(obj) {
          if (/^[\],:{}\s]*$/.test(obj.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            obj = JSON.parse(obj);
            return obj.name ? 'By ' + obj.name + ' ' + obj.title + ' .' : '';
          } else {
            return obj ? "By " + obj : '  ';
          }
        }
        /**
         * @param {?} error
         * @return {?}
         */

      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          this.errorData = {
            errorTitle: 'Oops! Request for document failed',
            errorDesc: 'Something bad happened. Please try again later.'
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.errorData);
        }
      }]);

      return RodmanCoreService;
    }();

    RodmanCoreService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    RodmanCoreService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    /** @nocollapse */


    RodmanCoreService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function RodmanCoreService_Factory() {
        return new RodmanCoreService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      },
      token: RodmanCoreService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/rodman-core.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var RodmanCoreComponent =
    /*#__PURE__*/
    function () {
      function RodmanCoreComponent() {
        _classCallCheck(this, RodmanCoreComponent);
      }
      /**
       * @return {?}
       */


      _createClass(RodmanCoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RodmanCoreComponent;
    }();

    RodmanCoreComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-RodmanCore',
        template: "\n    <p>\n      rodman-core works!\n    </p>\n  "
      }]
    }];
    /** @nocollapse */

    RodmanCoreComponent.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/rodman-core.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var RodmanCoreModule = function RodmanCoreModule() {
      _classCallCheck(this, RodmanCoreModule);
    };

    RodmanCoreModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [RodmanCoreComponent],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], // AngularFontAwesomeModule,
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"].forRoot(), // Ng2DeviceDetectorModule.forRoot(),
        ngx_dfp__WEBPACK_IMPORTED_MODULE_10__["DfpModule"].forRoot({
          idleLoad: true,
          enableVideoAds: true,
          personalizedAds: true,
          // Request personalized ads by default
          singleRequestMode: true,
          // Only applies to initial refresh
          onSameNavigation: 'refresh',
          globalTargeting: {// food: ['NUT', 'HOME']
          }
        })],
        exports: [RodmanCoreComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"]],
        providers: [{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        }, {
          provide: RodmanCoreService
        }, {
          provide: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sites/sites-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var routes = [];

    var SitesRoutingModule = function SitesRoutingModule() {
      _classCallCheck(this, SitesRoutingModule);
    };

    SitesRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sites/components/nav/nav.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NavService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function NavService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, NavService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @param {?} menuId
       * @return {?}
       */


      _createClass(NavService, [{
        key: "getHeaderMenu",
        value: function getHeaderMenu(magazineId, menuId) {
          return this.HttpClient.post(apiURL + 'menuscontroller/displayMenu', {
            magazineId: magazineId,
            id: menuId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
        /**
         * @param {?} magazineId
         * @return {?}
         */

      }, {
        key: "currentIssue",
        value: function currentIssue(magazineId) {
          return this.HttpClient.post(apiURL + 'issuescontroller/latestIssueURL', {
            magazineId: magazineId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return NavService;
    }();

    NavService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NavService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    NavService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NavService_Factory() {
        return new NavService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: NavService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sites/components/nav/nav.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NavComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} NavService
       */
      function NavComponent(NavService) {
        _classCallCheck(this, NavComponent);

        this.NavService = NavService;
        this.hoverIndex = -1;
      }
      /**
       * @param {?} i
       * @return {?}
       */


      _createClass(NavComponent, [{
        key: "onHover",
        value: function onHover(i) {
          this.hoverIndex = i;
        }
        /**
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "onHoverOut",
        value: function onHoverOut(i) {
          this.hoverIndex = -1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // Header Main And Submenu api Call 
          this.NavService.getHeaderMenu(this.magazineId, this.menuId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this2.articles = data['data'];
          }); // this.currentIssue();
        }
        /**
         * @return {?}
         */

      }, {
        key: "currentIssue",
        value: function currentIssue() {
          var _this3 = this;

          this.NavService.currentIssue(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this3.issueUrl = data.issueUrl;
          });
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "validateUrl",
        value: function validateUrl(str) {
          /** @type {?} */
          var tarea = str;

          if (tarea.indexOf("http://") == 0 || tarea.indexOf("https://") == 0) {
            return true;
          }

          return false;
        }
      }]);

      return NavComponent;
    }();

    NavComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-nav',
        inputs: ['magazineId', 'menuId'],
        template: "<div class =\"primary_menu\">\n  <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngFor=\"let navItem of articles; let i = index\">\n        <span id=\"{{i}}\" (mouseenter) =\"onHover(i)\" (click)=\"onHoverOut(i)\">\n          <a class=\"nav-link\" *ngIf=\"(!validateUrl(navItem.url))\"   [routerLink]=\"[navItem.url.replace('?nav=top_nav', '')]\">{{navItem.title}}</a>\n          <a class=\"nav-link\" *ngIf=\"(validateUrl(navItem.url))\"   href=\"{{navItem.url}}\" target=\"_blank\">{{navItem.title}}</a>\n        </span>\n        <div class=\"submenu\">\n          <div *ngIf = \"i == hoverIndex\" (mouseleave) =\"onHoverOut(i)\"  >\n            <div *ngFor=\"let childNavItem of navItem.child; let j = index\" class=\"col-md-3 col-sm-3 list_item\" [routerLinkActive]=\"['active']\" >                 \n                <a class=\"nav-link text-color\" *ngIf=\"(!validateUrl(childNavItem.url)) && (navItem.title != childNavItem.title ) \"  [routerLink]=\"[childNavItem.url]\" (click)=\"onHoverOut(i)\" >{{childNavItem.title}}</a>                \n                <a class=\"nav-link text-color\" *ngIf=\"(validateUrl(childNavItem.url)) && (navItem.title != childNavItem.title )\" href=\"{{childNavItem.url}}\" target=\"_blank\" (click)=\"onHoverOut(i)\" >{{childNavItem.title}}</a>\n            </div>\n          </div>  \n        </div> \n      </li>   \n  </ul>\n</div>\n",
        styles: [".submenu{position:absolute;background:#f1f1f1;z-index:9999;color:#222;width:100%;top:50px;right:0}.list_item a{vertical-align:middle!important;z-index:-99999}.list_item{float:left;line-height:2rem;position:relative;font-size:14px}.primary_menu{position:relative}.text-color{color:#000!important}"]
      }]
    }];
    /** @nocollapse */

    NavComponent.ctorParameters = function () {
      return [{
        type: NavService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sites/components/header/header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var HeaderComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} CookieService
       * @param {?} Router
       * @param {?} RodmanCoreService
       */
      function HeaderComponent(CookieService, Router, RodmanCoreService) {
        _classCallCheck(this, HeaderComponent);

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


      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // this.isOverlayCookie = this.CookieService.get('overlay_'+this.magazineId);
        // if(this.isOverlayCookie===''){
        //   const dateNow = new Date();
        //   dateNow.setMinutes(dateNow.getMinutes() + 30);
        //   this.CookieService.set('overlay_'+this.magazineId, 'Overlay' ,dateNow,'/',"");
        //   this.overlayCookie = true;   
        // }else{
        //   // console.log('Cookie Set_'+this.magazineId)
        // }

        /**
         * @return {?}
         */

      }, {
        key: "search",
        value: function search() {
          if (this.searchContent) {
            this.Router.navigateByUrl('/contents/searchcontent/all/' + this.searchContent);
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-header',
        inputs: ['magazineId', 'magazineName', 'menuId', 'groupId', 'fieldId', 'formId'],
        template: "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary header-fixed\" >\n  <a class=\"navbar-brand\" href=\"#\">\n    <img class=\"header-logo\" src=\"{{Url}}{{magazineName+'_logo.png'}}\">\n  </a>\n    <button type=\"button\" class=\"navbar-toggler btn btn-primary \" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  <div class=\"navbar-collapse collapse\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\" > \n    <div class=\"col-sm-9 col-md-9\" >\n        <CoreLib-nav  magazineId={{magazineId}}  menuId={{menuId}}></CoreLib-nav>\n    </div>\n    <div class=\"col-sm-3 col-md-3\" style=\"float: right!important\">\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" id=\"searchContent\" (input)=\"searchContent=$event.target.value\" type=\"text\" placeholder=\"Search\">\n        <button class=\"btn btn-primary my-2 my-sm-0\" (click)=search() type=\"submit\">Search</button>\n      </form>  \n    </div>\n  </div>\n</nav>\n\n\n\n\n\n\n\n\n",
        styles: [".header-logo{max-height:40px}"]
      }]
    }];
    /** @nocollapse */

    HeaderComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: RodmanCoreService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sites/components/footer/footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FooterComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} Router
       * @param {?} httpService
       * @param {?} RodmanCoreService
       */
      function FooterComponent(Router, httpService, RodmanCoreService) {
        _classCallCheck(this, FooterComponent);

        this.Router = Router;
        this.httpService = httpService;
        this.RodmanCoreService = RodmanCoreService;
        this.footerSocialLink = [{
          '15': {
            'facebook': 'https://www.facebook.com/pages/Printed-Electronics-Now/135384279809061',
            'linkedin': 'http://www.linkedin.com/groups/Printed-Electronics-Now-2079630/about',
            'rss': '/rssfeeds/'
          }
        }, {
          '14': {
            'facebook': 'http://www.facebook.com/pages/Orthopedic-Design-Technology/132780940069550',
            'linkedin': 'http://www.linkedin.com/groups?about=&amp;gid=2079574&amp;trk=anet_ug_grppro',
            'twitter': 'https://twitter.com/odtmagazine'
          }
        }, {
          '13': {
            'facebook': 'http://www.facebook.com/pages/Nonwovens-Industry-Magazine/129247883774669',
            'linkedin': 'http://www.linkedin.com/groups?about=&amp;gid=1775410&amp;trk=anet_ug_grppro',
            'twitter': 'http://twitter.com/NonwovensMag',
            'rss': '/rssfeeds/'
          }
        }, {
          '11': {
            'facebook': 'http://www.facebook.com/pages/Label-And-Narrow-Web/124971914208037',
            'linkedin': 'http://www.linkedin.com/groups?gid=2079407&amp;about=',
            'twitter': 'http://www.twitter.com/labelandnarrow',
            'pinterest': 'https://www.pinterest.com/lnwmagazine/',
            'rss': '/rssfeeds/'
          }
        }, {
          '10': {
            'facebook': 'https://www.facebook.com/pages/Ink-World/101479703238099',
            'linkedin': 'http://www.linkedin.com/groups?gid=2079359',
            'twitter': 'http://twitter.com/inkworldmag',
            'rss': '/rssfeeds/',
            'google': 'https://plus.google.com/+Inkworldmagazine1/posts',
            'instagram': 'https://www.instagram.com/inkworldmag/'
          }
        }, {
          '9': {
            'facebook': 'https://www.facebook.com/HappiMagazine/',
            'linkedin': 'https://www.linkedin.com/groups/2079173/profile',
            'twitter': 'https://twitter.com/happimagazine',
            'instagram': 'https://www.instagram.com/happimagazine/',
            'pinterest': 'https://www.pinterest.com/happimagazine/',
            'rss': '/rssfeeds/'
          }
        }, {
          '8': {
            'facebook': 'https://www.facebook.com/pages/Beauty-Packaging/124945340875475',
            'linkedin': 'https://www.linkedin.com/groups?about=&amp;gid=1775357',
            'twitter': 'https://twitter.com/beautypackaging',
            'pinterest': 'https://www.pinterest.com/beautypackaging/',
            'rss': '/rssfeeds/'
          }
        }, {
          '7': {
            'facebook': 'http://www.facebook.com/contractpharma',
            'linkedin': 'http://www.linkedin.com/groups?about=&amp;gid=1775433&amp;trk=anet_ug_grppro',
            'twitter': 'http://twitter.com/contractpharma',
            'rss': '/rssfeeds/'
          }
        }, {
          '6': {
            'facebook': 'https://www.facebook.com/pages/Medical-Product-Outsourcing/105425076171700',
            'linkedin': 'http://www.linkedin.com/groups?gid=2079433&amp;trk=myg_ugrp_ovr',
            'twitter': 'https://twitter.com/mpomagazine',
            'rss': '/rssfeeds/'
          }
        }, {
          '5': {
            'facebook': 'http://www.facebook.com/pages/Coatings-World/111797362200467',
            'linkedin': 'http://www.linkedin.com/groups?gid=2079298&amp;about=e',
            'twitter': 'http://www.twitter.com/coatingsworld',
            'rss': '/rssfeeds/'
          }
        }, {
          '1': {
            'facebook': 'https://www.facebook.com/pages/Nutraceuticals-World/135318976481526',
            'linkedin': 'https://www.linkedin.com/groups/Nutraceuticals-World-2079225/about',
            'twitter': 'https://twitter.com/nutworld',
            'instagram': 'https://instagram.com/nutraceuticalsworld/',
            'pinterest': 'https://www.pinterest.com/nutraworld/',
            'rss': '/rssfeeds/'
          }
        }];
        this.Url = apiURL;
      }
      /**
       * @return {?}
       */


      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentYear = new Date().getFullYear();
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-footer',
        inputs: ['magazineId'],
        template: "<div class=\"container-fluid inner_cont\">\n  <div class=\"container\">\n    <div id=\"footer-show-content\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class='row'>\n        <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n              <p><a  [routerLink]=\"['/about-us']\"><h4>ABOUT US</h4></a></p>         \n              <p><a  [routerLink]=\"['/privacy-policy']\"><h4>PRIVACY POLICY</h4></a></p>         \n              <p><a  [routerLink]=\"['/terms-and-conditions']\"><h4>TERMS AND CONDTIONS</h4></a></p>         \n              <p><a [routerLink]=\"['/contact-us']\"><h4>CONTACT US</h4></a></p> \n\n        </div>\n        <div class=\"col-xs-12 col-sm-2 col-md-3 col-lg-3\">\n              <h4 style=\"color: white;\">FOLLOW US</h4>\n              <span *ngFor=\"let social of footerSocialLink\">\n                <p *ngIf=\"social.hasOwnProperty(magazineId)\">\n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].facebook\" href=\"{{social[magazineId].facebook}}\">\n                     <img src=\"{{Url+'facebook.png'}}\"></a> \n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].google\" href=\"{{social[magazineId].google}}\">\n                     <img src=\"{{Url+'google.png'}}\"></a>\n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].linkedin\" href=\"{{social[magazineId].linkedin}}\">\n                     <img src=\"{{Url+'linkedin.png'}}\"></a>\n\n                   <a [routerLink]=\"['/rssfeeds']\" class=\"social\" *ngIf=\"social[magazineId].rss\" [routerLink]=\"[social[magazineId].rss]\">\n                     <img src=\"{{Url+'rss.png'}}\"></a>\n\n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].twitter\" href=\"{{social[magazineId].twitter}}\">\n                     <img src=\"{{Url+'twitter.png'}}\"></a>\n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].instagram\" href=\"{{social[magazineId].instagram}}\">\n                     <img src=\"{{Url+'Instagram.png'}}\"></a>\n                   <a target=\"_blank\" class=\"social\" *ngIf=\"social[magazineId].pinterest\" href=\"{{social[magazineId].pinterest}}\">\n                     <img src=\"{{Url+'pinrest.png'}}\"></a>\n                </p>\n             </span>  \n                     \n        </div>\n        <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">                                            \n            <CoreLib-footerslider></CoreLib-footerslider>  \n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n</div>\n<div class=\"container-fluid\">\n\n      <div class='row'>\n        <div id=\"bottom-footer\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <p class=\"text-center\">Copyright \xA9 {{currentYear}} Rodman Media. All rights reserved. Use of this constitutes acceptance of our privacy policy \n                        The material on this site may not be reproduced, distributed, transmitted, or otherwise used, except with the prior written permission of Rodman Media.</p>       \n        </div>\n      </div> \n  \n</div>",
        styles: ["#bottom-footer{background-color:#000;color:#fff}.inner_cont{background:#464646}#footer-show-content{padding:20px!important}.text-center{max-width:80%;margin:0 auto}h4 a,p a{color:#fff!important}.font-colors{margin:2px}.social{width:20px;margin:5px}"]
      }]
    }];
    /** @nocollapse */

    FooterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sites/components/footerslider/footerslider.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FootersliderService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function FootersliderService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, FootersliderService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @return {?}
       */


      _createClass(FootersliderService, [{
        key: "getFooterData",
        value: function getFooterData(magazineId) {
          return this.HttpClient.post(apiURL + 'SitesController/footerSlider', {
            magazineId: magazineId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return FootersliderService;
    }();

    FootersliderService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FootersliderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    FootersliderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FootersliderService_Factory() {
        return new FootersliderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: FootersliderService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sites/components/footerslider/footerslider.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FootersliderComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} FootersliderService
       * @param {?} config
       */
      function FootersliderComponent(FootersliderService, config) {
        _classCallCheck(this, FootersliderComponent);

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


      _createClass(FootersliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          // Footer Slider Api Call 
          this.FootersliderService.getFooterData(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this4.sliderData = data['data'];
          });
        }
      }]);

      return FootersliderComponent;
    }();

    FootersliderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        inputs: ['magazineId'],
        selector: 'CoreLib-footerslider',
        template: "<ngb-carousel>\n    <ng-template ngbSlide *ngFor=\"let sliderData of sliderData; let i =index\">\n    <div class=\"sliderdata\">\n      <div class=\"picsum-img-wrapper\">\n        <img [src]=\"sliderData.image\" class=\"img-responsive\" alt=\"{{sliderData.name}}\">\n      </div>\n      <!--   <a class=\"nav-link\"  [routerLink]=\"[navItem.url.replace('?nav=top_nav', '')]\">{{navItem.title}}</a> -->\n      <div class=\"carousel_text\">\n        <h5>Latest Breaking News From {{sliderData.name}}</h5>\n        <p *ngFor=\"let textData of sliderData.child; let j = index\"><a target=\"_blank\" [routerLink]=\"[textData.viewUrl]\">{{textData.title}}</a></p>\n      </div>\n    </div>\n    </ng-template>\n</ngb-carousel>",
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
        styles: [".picsum-img-wrapper img{margin:5px;height:60px!important;min-height:50px!important;max-width:250px!important;background:0 0!important}.carousel_text{position:none!important;text-align:left!important;right:15%;bottom:20px;left:15%;z-index:10;padding-top:5px;padding-bottom:20px;color:#fff}.carousel_text p{margin:0;font-size:14px!important}.sliderdata{padding:0 35px!important;background:#8f8d8e!important}.carousel,.slide{padding:0 10px}"]
      }]
    }];
    /** @nocollapse */

    FootersliderComponent.ctorParameters = function () {
      return [{
        type: FootersliderService
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/users/authentication/authentication.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AuthenticationService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function AuthenticationService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, AuthenticationService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} data
       * @return {?}
       */


      _createClass(AuthenticationService, [{
        key: "userSignUp",
        value: function userSignUp(data) {
          //  Change Url For Register
          return this.HttpClient.post(apiURL + 'usersController/signUpNewsletter', data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "userLogin",
        value: function userLogin(data) {
          //  Change Url For Login
          return this.HttpClient.post(apiURL + 'usersController/userLogin', data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    AuthenticationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function AuthenticationService_Factory() {
        return new AuthenticationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: AuthenticationService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/users/authentication/authentication.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AuthenticationComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} modalService
       * @param {?} formBuilder
       * @param {?} AuthenticationService
       * @param {?} Router
       */
      function AuthenticationComponent(modalService, formBuilder, AuthenticationService, Router) {
        _classCallCheck(this, AuthenticationComponent);

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


      _createClass(AuthenticationComponent, [{
        key: "openLogin",
        value: function openLogin(login) {
          this.modalService.open(login, {
            centered: true
          });
        }
        /**
         * @param {?} register
         * @return {?}
         */

      }, {
        key: "openRegister",
        value: function openRegister(register) {
          this.modalService.open(register, {
            centered: true
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          //Check Login User
          if (localStorage.getItem('authDetails' + this.magazineId)) {
            /** @type {?} */
            var data = JSON.parse(localStorage.getItem('authDetails' + this.magazineId));
            this.loginMenuChange = true;
          } else {} //Registor Form


          this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            weekly_enewsletter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            special_promotions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            group_id_company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            field_id_company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            form_id_company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            magazineId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            url: location.origin + '/user/verifyUser/'
          }); // Login Form

          this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            magazineId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
        } //User Login  Function

        /**
         * @return {?}
         */

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          this.submitted = true;

          if (this.loginForm.invalid) {
            return;
          }

          this.AuthenticationService.userLogin(this.loginForm.value).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            if (data.status == "success" && data.message == "login successfully") {
              localStorage.setItem('authDetails' + _this5.magazineId, JSON.stringify(data.data));
              _this5.showMsgLoginSucess = true;
              _this5.loginMenuChange = true;

              _this5.modalService.dismissAll(_this5.loginForm.value);

              _this5.Router.navigateByUrl(_this5.profile);

              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this5.showMsgLoginSucess = false;
              }, 5000);
            } else {
              _this5.showMsgLoginFail = true;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this5.showMsgLoginFail = false;
              }, 5000);
            }
          });
        } // Validation Check Both Form

        /**
         * @return {?}
         */

      }, {
        key: "signup",
        // Registration User 

        /**
         * @return {?}
         */
        value: function signup() {
          var _this6 = this;

          this.submitted = true;

          if (this.registerForm.invalid) {
            return;
          }

          this.AuthenticationService.userSignUp(this.registerForm.value).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            if (data.status == "success" && data.message == "You are almost registered" && data.registerStatus == "success") {
              _this6.showMsgRegistration = true;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this6.showMsgRegistration = false;

                _this6.modalService.dismissAll(_this6.registerForm.value);
              }, 5000);
            }
          });
        } // Logout Session

        /**
         * @return {?}
         */

      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.clear();
          this.loginMenuChange = false;
          this.Router.navigateByUrl('');
        }
      }, {
        key: "registerVal",
        get: function get() {
          return this.registerForm.controls;
        }
        /**
         * @return {?}
         */

      }, {
        key: "loginVal",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return AuthenticationComponent;
    }();

    AuthenticationComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-authentication',
        template: "<!-- Login PopUp -->\n<ng-template #login let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Sign In</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n            <div class=\"modal-body\">\n                <div id=\"loginBoxDiv\" class=\"well\" style=\"\">\n                    <div class=\"row\"  *ngIf=\"showMsgLoginSucess; else errorMsg\">\n                        <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                            <p class=\"alert alert-success text-center\">  <strong>Thank you for logged in</strong> </p>\n                        </div>\n                    </div>\n    \n                    <ng-template #errorMsg >\n                        <div *ngIf=\"showMsgLoginFail\" class=\"alert alert-danger text-center\"> <h2>Wrong Login Details</h2></div>\n                    </ng-template>                     \n    \n                        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                                <h2>Already a member ?</h2>\n                                <input type=\"hidden\" formControlName=\"magazineId\" value=\"{{magazineId}}\" [ngModel]=\"magazineId\" > \n    \n                                <input type=\"text\" formControlName=\"email\" id=\"webUserName_loginform\" placeholder=\"Enter Your Email\" class=\"form-control required email\" [ngClass]=\"{ 'is-invalid': submitted && loginVal.email.errors }\">\n                                <div *ngIf=\"submitted && loginVal.email.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"loginVal.email.errors.required\">Email is required</div>\n                                        <div *ngIf=\"loginVal.email.errors.email\">Enter a valid email address</div>\n                                    </div>\n                                <br>\n                                <input type=\"password\" formControlName=\"password\" id=\"webPassword_loginform\" placeholder=\"Enter Password\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && loginVal.password.errors }\">\n                                <div *ngIf=\"submitted && loginVal.password.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"loginVal.password.errors.required\">Password is required</div>\n                                </div>\n    \n    \n                                <div class=\"clearfix\"></div><br>\n                                <a href=\"#\" class=\"pull-right\" >Forgot Password?</a>\n                                    <br>\n                                <button class=\"btn btn-primary form-control\" type=\"submit\">SIGN IN</button>\n                        </form> \n                        <div class=\"clearfix\"></div><br>\n                        <div class=\"clearfix\"></div><br>\n                        <hr>\n                        <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12 popup-btn pull-right\">\n                            <h5>Don't have an account? \n                                <button class=\"btn btn-primary\" (click)=\"[openRegister(register),modal.dismiss('Cross click')]\"> Sign Up FREE</button> \n                                OR  \n                                <button class=\"btn btn-default\" type=\"button\">Connect with linkedin</button>\n                            </h5>                \n                        </div>\n                    <div class=\"spacer5\"></div>\n                </div> \n            </div>\n    </ng-template>\n    <!-- Login PopUp  End -->\n    \n    \n    <!-- Register PopUp -->\n        <ng-template #register let-modal>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Join New </h4>\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                    <div name=\"SignUpNewsLetter_form_result\" id=\"SignUpNewsLetter_form_result\" class=\"well\">\n                        <div class=\"clearfix\"></div><br>\n                        <div class=\"row\"  *ngIf=\"showMsgRegistration\">\n                                <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                    <p class=\"alert alert-success text-center\">  <strong>You Are Almost Register!</strong> Please verfy Your Email !.</p>\n                                </div>\n                        </div>\n    \n                            <form [formGroup]=\"registerForm\" (ngSubmit)=\"signup();\">\n                                    <div class=\"formbox\">\n                                            \n                                            <input type=\"hidden\" formControlName=\"magazineId\" value=\"{{magazineId}}\" [ngModel]=\"magazineId\" >\n                                            <input type=\"hidden\" formControlName=\"group_id_company_name\" value=\"{{groupId}}\" [ngModel]=\"groupId\" >\n                                            <input type=\"hidden\" formControlName=\"form_id_company_name\"  value=\"{{formId}}\" [ngModel]=\"formId\">\n                                            <input type=\"hidden\" formControlName=\"field_id_company_name\" value=\"{{fieldId}}\" [ngModel]=\"fieldId\">\n    \n                                        \n                                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" [ngClass]=\"{ 'is-invalid': submitted && registerVal.email.errors }\" />\n                                            <div *ngIf=\"submitted && registerVal.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"registerVal.email.errors.required\">Email is required</div>\n                                                <div *ngIf=\"registerVal.email.errors.email\">Enter a valid email address</div>\n                                            </div>\n                                            <br>  \n    \n                                        \n                                            <input type=\"email\" formControlName=\"company_name\" class=\"form-control\" placeholder=\"Company Name\" [ngClass]=\"{ 'is-invalid': submitted && registerVal.company_name.errors }\" />\n                                            <div *ngIf=\"submitted && registerVal.company_name.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"registerVal.company_name.errors.required\">Company Name is required</div>\n                                            </div>\n                                            <br>\n    \n                                            <div class=\"clearfix\"></div><br>\n                                            <div style=\"text-align:left\">                                           \n                                                <input type=\"checkbox\" formControlName=\"weekly_enewsletter\"  >                                        \n                                                <span style=\"vertical-align: top;\">Yes, Please subscribe me to your weekly eNewsletters and Alerts</span>\n                                                <!-- <div *ngIf=\"submitted && registerVal.company_name.errors\" class=\"invalid-feedback\">\n                                                        <div *ngIf=\"registerVal.company_name.errors.required\">Option is required</div>\n                                                    </div> -->\n                                            </div>\n                \n                                            <div class=\"clearfix\"></div>\n                                            <div style=\"text-align:left\">                                         \n                                                <input type=\"checkbox\" formControlName=\"special_promotions\" >                                          \n                                                <span style=\"vertical-align: top;\">Yes, I wish to receive special promotions and offers from your affiliates.</span>\n                                                <!-- <div *ngIf=\"registerVal.special_promotions.errors.required\"  class=\"invalid-feedback\"> \n                                                        Please Check Option\n                                                    </div>\t -->\n                                            </div>\n                \n                                            <div class=\"clearfix\"></div>\n                                            <div style=\"text-align:left\" [routerLinkActive]=\"['active']\">\n                                                <p>By creating an account, I agree to the \n                                                    <a [routerLink]=\"[termsConditions]\" class=\"mag-color\">Terms of Use</a> and acknowledge that I have read the <a [routerLink]=\"[privacyPolicy]\" class=\"mag-color\">Privacy Policy.</a>\n                                                </p>\n                                            </div>\n                \n                                            <div class=\"clearfix\"></div>\n                                        <div class=\"clearfix\"></div>\n    \n                                        <button class=\"btn btn-primary form-control\"  id=\"\" type=\"submit\">Sign Up</button>\n                                      </div>\n                                  </form>\n                            <hr>\n                            <h5>Already a member?\n                                <button class=\"btn btn-primary\" (click)=\"[openLogin(login),modal.dismiss('Cross click')] \"> Sign In</button> \n                                OR \n                                <button class=\"btn btn-default\" type=\"button\"  >Connect with linkedin</button>\n                            </h5> \n                            <div class=\"clearfix\"></div>                          \n                    </div>\n            </div>\n        </ng-template>\n    <!-- Register PopUp -->\n    \n    \n    <!--  User signIn ANd Join POpup -->\n    <div class=\"navbar\" id=\"userDiv\" >\n        <div class=\"row\"> \n            <div class=\"dropdown\">\n                <p class=\"dropbtn ml-2 mr-3\">User</p>\n                <div class=\"dropdown-content\">  \n                    <div *ngIf=\"loginMenuChange; else showLoginRequestMessage\">\n                            <button class=\"btn mb-2 mr-2 col-md-12 col-sm-12\" [routerLink]=\"[profile]\">Profile</button>\n                            <button class=\"btn mb-2 mr-2 col-md-12 col-sm-12\" (click)=logOut()>Logout</button>                  \n                    </div> \n                     <ng-template #showLoginRequestMessage>\n                            <button class=\"btn mb-2 mr-2 col-md-12 col-sm-12\" (click)=\"openLogin(login)\">Login</button>\n                            <button class=\"btn mb-2 mr-2 col-md-12 col-sm-12\" (click)=\"openRegister(register)\">Join</button>\n                    </ng-template>\n                </div>\n            </div>\n         </div>\n    </div>\n    \n    \n    ",
        inputs: ['magazineId', 'groupId', 'fieldId', 'formId'],
        styles: [".dropbtn{color:#fff;margin-right:10px;border:none}.dropdown{position:relative;display:inline-block}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown-content button{color:#000;padding:12px 16px;text-decoration:none;display:block}.dropdown-content button:hover{background-color:#ddd}.dropdown:hover .dropdown-content{display:block}"]
      }]
    }];
    /** @nocollapse */

    AuthenticationComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: AuthenticationService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sites/components/not-found/not-found.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }
      /**
       * @return {?}
       */


      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-not-found',
        template: "<!-- <p> Core not-found works!</p> -->\n\n\n<div class=\"text-center\">\n    <h3> Under Development... </h3>\n\n   <p> Oops! <br>\n    This is awkward <br>\n    You are looking for something that doesn't actually exist\n   </p>\n</div>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    NotFoundComponent.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ads/ads-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var routes$1 = [];

    var AdsRoutingModule = function AdsRoutingModule() {
      _classCallCheck(this, AdsRoutingModule);
    };

    AdsRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$1)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ads/ads-display/ads-display.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var AdsDisplayComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} CookieService
       * @param {?} RodmanCoreService
       * @param {?} deviceService
       */
      function AdsDisplayComponent(CookieService, RodmanCoreService, deviceService) {
        _classCallCheck(this, AdsDisplayComponent);

        this.CookieService = CookieService;
        this.RodmanCoreService = RodmanCoreService;
        this.deviceService = deviceService;
        this.location = 'HOME';
        this.deviceInfo = null; // @Input() magazineId: any;

        this.collectoionAds = [];
        this.overlayShow = true;
        this.showFooterAds = false;
        this.screenDetect();
      }
      /**
       * @return {?}
       */


      _createClass(AdsDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataArray = this.getAdsFilter(this.ads);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "getAdsFilter",
        value: function getAdsFilter(data) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = data['data'][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var filterData = _step.value;
              // if(filterData.type == 'doubleclick'){ 
              this.isOverlayCookie = this.CookieService.get('overlay_' + filterData.id);

              if (this.isOverlayCookie) {
                this.overlayShow = false;
              } else if (!this.isOverlayCookie && filterData.type == 'overlay') {
                /** @type {?} */
                var dateNow = new Date();
                dateNow.setMinutes(dateNow.getMinutes() + 30);
                this.CookieService.set('overlay_' + filterData.id, 'Overlay', dateNow, '/', "");
              }

              this.collectoionAds[filterData.location.replace('-', "_").replace('-', "_")] = {
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

              if (filterData.type == 'doubleclick' && 'footer_1' == filterData.location.replace('-', "_").replace('-', "_").replace('-', "_")) {
                this.footerAds = {
                  id: filterData.id,
                  code: this.getAdcode(filterData.code),
                  type: filterData.type,
                  ad_type: filterData.location.replace('-', "_").replace('-', "_").replace('-', "_")
                };
              } // }        

            } // this.finalSlots =  this.arrayConvet(this.collectoionAds[this.location].code.sizes);   
            // this.arrayCheck=1;
            // this.collectoionAds[this.location].code.value = ((this.collectoionAds[this.location].code.value=='') && (this.collectoionAds[this.location].code.value=='ome')) ? 'HOME' : this.collectoionAds[this.location].code.value ;

          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return this.collectoionAds[this.location];
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "arrayConvet",
        value: function arrayConvet(data) {
          /** @type {?} */
          var sizes = data.split(']');
          /** @type {?} */

          var finalsize = [];

          for (var size in sizes) {
            if (sizes[size].indexOf('[') >= 0) {
              /** @type {?} */
              var singleSize = sizes[size].substring(sizes[size].indexOf('[') + 1).split(',');
              finalsize.push({
                width: singleSize[0].replace(/\s/g, "").toString(),
                height: singleSize[1].replace(/\s/g, "").toString()
              });
            }
          }

          return finalsize;
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "getAdcode",
        value: function getAdcode(str) {
          str = str.replace(/\'/g, '');
          str = str.replace(/\\/g, '');
          /** @type {?} */

          var firstIndex = str.indexOf("script") + 10;
          /** @type {?} */

          var lastIndex = str.indexOf("/script>");
          str = str.substring(firstIndex, lastIndex);
          if (str.indexOf('defineSlot') < 0) return false;
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

      }, {
        key: "screenDetect",
        value: function screenDetect() {
          this.deviceInfo = this.deviceService.getDeviceInfo(); // console.log(this.deviceInfo);
        }
      }]);

      return AdsDisplayComponent;
    }();

    AdsDisplayComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-ads-display',
        template: "<!-- <ng-template></ng-template> -->\n           <!-- <ng-template *ngFor=\"let size of finalSlots\">\n                <dfp-size width=\"{{size.width}}\"  height=\"{{size.height}}\"></dfp-size>\n            </ng-template> -->\n<!-- <div class=\"col-md-12 col-sm-12\" *ngIf=\"(collectoionAds[location].type != 'overlay') && (collectoionAds[location].ad_type != 'footer_1')\" > -->\n<div class=\"\" id=\"ads\" *ngIf=\"(collectoionAds[location].type != 'overlay')\" >    \n    <dfp-ad adUnit={{collectoionAds[location].code.slot}} responsive>\n    <div [ngSwitch]=\"location\">\n        <div *ngSwitchCase=\"'header_1'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"468\" [height]=\"60\"></dfp-size>\n            <dfp-size [width]=\"623\" [height]=\"108\"></dfp-size>\n            <dfp-size [width]=\"620\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"742\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"720\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"728\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"728\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"780\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"798\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"900\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"79\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"150\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"119\"></dfp-size>\n            <dfp-size [width]=\"970\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"1000\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"103\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"136\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"102\"></dfp-size>\n            <dfp-size [width]=\"700\" [height]=\"90\"></dfp-size>\n        </div>\n        <div *ngSwitchCase=\"'header_0'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"728\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"60\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"970\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"1000\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"90\"></dfp-size>\n        </div>  \n        <div *ngSwitchCase=\"'content_right_1'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"266\" [height]=\"195\"></dfp-size>\n            <dfp-size [width]=\"166\" [height]=\"600\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"244\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"248\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"300\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"400\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"500\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"600\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"700\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"800\"></dfp-size>\n        </div>         \n\n        <div *ngSwitchCase=\"'content_right_2'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"266\" [height]=\"195\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"248\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"300\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"400\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"500\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"600\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"700\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"800\"></dfp-size>\n        </div>          \n\n        <div *ngSwitchCase=\"'content_right_3'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"266\" [height]=\"195\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"248\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"300\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"320\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"400\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"500\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"600\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"700\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"800\"></dfp-size>\n        </div>  \n\n\n        <div *ngSwitchCase=\"'right_site_ad'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"910\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"903\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"800\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"900\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"980\"></dfp-size>\n            <dfp-size [width]=\"160\" [height]=\"800\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1000\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1075\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1080\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1090\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1020\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1105\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1100\"></dfp-size>\n        </div>\n\n        <div *ngSwitchCase=\"'left_site_ad'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"910\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"903\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"800\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"900\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"980\"></dfp-size>\n            <dfp-size [width]=\"160\" [height]=\"800\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1000\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1075\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1080\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1090\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1020\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1105\"></dfp-size>\n            <dfp-size [width]=\"400\" [height]=\"1100\"></dfp-size>\n        </div>\n\n        <div *ngSwitchCase=\"'footer_1'\">\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"728\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"60\"></dfp-size>\n            <dfp-size [width]=\"960\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"102\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1000\" [height]=\"90\"></dfp-size>\n        </div>  \n\n        <div *ngSwitchDefault >\n            <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"45\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"25\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"37\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"28\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"50\"></dfp-size>\n            <dfp-size [width]=\"250\"  [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"250\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"300\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"400\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"500\"></dfp-size>\n            <dfp-size [width]=\"300\"  [height]=\"600\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"700\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"800\"></dfp-size>\n            <dfp-size [width]=\"300\" [height]=\"24\"></dfp-size>\n            <dfp-size [width]=\"728\"  [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"960\"  [height]=\"60\"></dfp-size>\n            <dfp-size [width]=\"960\"  [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"90\"></dfp-size>\n            <dfp-size [width]=\"1080\" [height]=\"102\"></dfp-size>\n            <dfp-size [width]=\"728\"  [height]=\"100\"></dfp-size>\n            <dfp-size [width]=\"1100\" [height]=\"90\"></dfp-size>\n        </div>\n    </div>\n         \n    <!-- <dfp-size *ngFor=\"let size of finalSlots\"  width=\"{{size.width}}\"    height=\"{{size.height}}\"></dfp-size> -->\n    <dfp-targeting key={{collectoionAds[location].code.key}} value=\"{{collectoionAds[location].code.value !='' ? collectoionAds[location].code.value : 'HOME' }}\" >\n    <!-- <dfp-targeting key={{collectoionAds[location].code.key}} value=\"valueReplace(collectoionAds[location].code.value)\" > -->\n    </dfp-targeting>\n    </dfp-ad>\n</div>\n\n\n<div id=\"overlayAds\" *ngIf=\"((overlayShow) && (overlayAdsData) )\">\n   <CoreLib-ads-overlay [ads]=\"overlayAdsData\" [magazineName]=\"collectoionAds['footer_1'].code.key\" [location]=\"'footer_1'\"></CoreLib-ads-overlay>\n</div>\n\n\n<div id=\"footerAds\" *ngIf=\"(footerAds) && (footerAds.ad_type == 'footer_1') && (footerAds.type == 'doubleclick') && (footerData)\">    \n    <CoreLib-ads-footer [ads]=\"footerAds\" [magazineName]=\"collectoionAds['footer_1'].code.key\"></CoreLib-ads-footer>\n</div>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    AdsDisplayComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }, {
        type: RodmanCoreService
      }, {
        type: ng2_device_detector__WEBPACK_IMPORTED_MODULE_15__["Ng2DeviceService"]
      }];
    };

    AdsDisplayComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      location: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      footerData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ads/ads-overlay/ads-overlay.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AdsOverlayComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} BsModalService
       * @param {?} sanitizer
       * @param {?} CookieService
       */
      function AdsOverlayComponent(BsModalService, sanitizer, CookieService) {
        _classCallCheck(this, AdsOverlayComponent);

        this.BsModalService = BsModalService;
        this.sanitizer = sanitizer;
        this.CookieService = CookieService;
        this.isModalShown = false;
        this.magazine = {
          'NUT': {
            id: '1',
            name: 'Nutraceuticals world'
          },
          'CW': {
            id: '5',
            name: 'Coating World'
          },
          'MPO': {
            id: '6',
            name: 'Medical Product Outsourcing'
          },
          'CP': {
            id: '7',
            name: 'Contract Pharma'
          },
          'BP': {
            id: '8',
            name: 'Beauty Packaging'
          },
          'HAP': {
            id: '9',
            name: 'Happi'
          },
          'INK': {
            id: '10',
            name: 'Ink World'
          },
          'LNW': {
            id: '11',
            name: 'Label & Narrow Web'
          },
          'NON': {
            id: '13',
            name: 'Nonwovens Industry'
          },
          'ODT': {
            id: '14',
            name: 'Orthopedic Design & Technology'
          },
          'PEN': {
            id: '15',
            name: 'Printed Electronics Now'
          }
        };
      }
      /**
       * @return {?}
       */


      _createClass(AdsOverlayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isModalShown = true;
          setTimeout(
          /**
          * @return {?}
          */
          function () {}, 15000);
        }
        /**
         * @return {?}
         */

      }, {
        key: "showModal",
        value: function showModal() {
          this.isModalShown = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "hideModal",
        value: function hideModal() {
          this.autoShownModal.hide();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onHidden",
        value: function onHidden() {
          this.isModalShown = false;
        }
      }]);

      return AdsOverlayComponent;
    }();

    AdsOverlayComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-ads-overlay',
        template: "<!-- <div *ngIf=\"isModalShown && userData\"  [config]=\"{backdrop: 'static',  keyboard: false,show: true }\"  (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\"  class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-auto-name\"> -->\n<!-- <div id=\"overlayAds\"> -->\n    <div (onHidden)=\"onHidden()\"   [config]=\"{backdrop: 'static',  keyboard: false,show: true }\" bsModal #autoShownModal=\"bs-modal\"  class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-auto-name\"  *ngIf=\"ads && isModalShown\">\n        <div class=\"modal-dialog modal-md\">\n            <div class=\"modal-content popup_alert\">\n                <div class=\"popup-btn-box\">\n                    <button type=\"button\" class=\"close popup_close_btn\" aria-label=\"Close\" (click)=\"hideModal()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div> \n\n                <div class=\"\">\n                    <button type=\"button\" class=\"popup_contain close\" aria-label=\"Close\" (click)=\"hideModal()\">\n                        Continue To {{this.magazine[this.magazineName].name}}\n                    </button>\n                </div> \n                <div class=\"modal-body col-sm-12 col-md-12\" >\n                    <dfp-ad adUnit={{ads.code.slot}} responsive>\n                        <dfp-size [width]=\"600\" [height]=\"315\"></dfp-size>\n                        <dfp-size [width]=\"600\" [height]=\"400\"></dfp-size>\n                        <dfp-size [width]=\"640\" [height]=\"480\"></dfp-size>\n                        <dfp-targeting key={{ads.code.key}} value=\"{{ads.code.value != '' ? ads.code.value: 'HOME' }}\"> </dfp-targeting>\n                    </dfp-ad>\n                </div>\n            </div>\n        </div>\n    </div>\n<!-- </div>-->\n",
        styles: [".modal-dialog{max-width:630px!important}.close{font-size:1 rem!important}.popup_contain{padding:15px!important;margin-right:15px}.popup_alert{position:relative!important}.popup_close_btn{border:2px solid #060606!important;border-radius:50%;position:absolute;right:-21px;top:-15px;background-color:#fcf6f6!important}.popup_close_btn span{padding:5px}"]
      }]
    }];
    /** @nocollapse */

    AdsOverlayComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    AdsOverlayComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      location: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      magazineName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autoShownModal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['autoShownModal', {
          static: false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ads/ads-footer/ads-footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AdsFooterComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} RodmanCoreService
       * @param {?} Router
       * @param {?} CookieService
       */
      function AdsFooterComponent(RodmanCoreService, Router, CookieService) {
        _classCallCheck(this, AdsFooterComponent);

        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.CookieService = CookieService;
        this.showAds = false;
      }
      /**
       * @return {?}
       */


      _createClass(AdsFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdsFooterComponent;
    }();

    AdsFooterComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-ads-footer',
        template: "<!-- <div class=\"container\" *ngIf=\"showAds\"> -->\n<div class=\"container\" *ngIf=\"ads\">    \n    <div class=\"text-center middle\">\n        <div class=\"col-md-12 col-sm-12\"  >\n            <dfp-ad adUnit={{ads.code.slot}} responsive>\n                <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n                <dfp-size [width]=\"728\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"960\" [height]=\"60\"></dfp-size>\n                <dfp-size [width]=\"960\" [height]=\"90\"></dfp-size>\n\n                <dfp-size [width]=\"1080\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"1080\" [height]=\"102\"></dfp-size>\n                <dfp-size [width]=\"1100\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"1000\" [height]=\"90\"></dfp-size>\n\n                <dfp-targeting key={{ads.code.key}} value=\"{{ads.code.value != '' ? (ads.code.value=='ome' ? 'HOME' : ads.code.value ) : 'HOME' }}\"> </dfp-targeting>\n            </dfp-ad>\n        </div>\n    </div>    \n </div>\n ",
        styles: [".middle{Width:50%;Height:50px;position:fixed;Bottom:45px;z-index:10000}"]
      }]
    }];
    /** @nocollapse */

    AdsFooterComponent.ctorParameters = function () {
      return [{
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    AdsFooterComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      magazineName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ads/ads-double-click/ads-double-click.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AdsDoubleClickComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} RodmanCoreService
       * @param {?} Router
       */
      function AdsDoubleClickComponent(RodmanCoreService, Router) {
        var _this7 = this;

        _classCallCheck(this, AdsDoubleClickComponent);

        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router; // Optinal 

        this.device = 'website';
        this.loading = false; // target;

        this.target = 'HOME';
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this7.currentURL = event.url;
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(AdsDoubleClickComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.name = magazineIds[this.magazineId].id; // this.target = this.currentURL.toString().split('/').join(',');

          if (this.currentURL != '') {
            this.target = this.location.toString().split('/').join(',');
          }

          this.loading = true;
        }
      }]);

      return AdsDoubleClickComponent;
    }();

    AdsDoubleClickComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-ads-double-click',
        template: "<div class=\"\" id=\"doubleClick-{{no}}\" *ngIf=\"loading\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_main-content-{{no}}\" responsive>\n        <div [ngSwitch]=\"device\">\n            <div *ngSwitchCase=\"device=='mobile'\">\n                <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"45\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"37\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"58\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"64\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"38\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"25\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"27\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"24\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"47\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"28\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"50\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"45\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"37\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"58\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"64\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"38\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"25\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"27\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"24\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"47\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"28\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"50\"></dfp-size>\n                <dfp-size [width]=\"350\" [height]=\"250\"></dfp-size>\n            </div>\n\n            <div *ngSwitchDefault >\n                <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n                <dfp-size [width]=\"740\" [height]=\"150\"></dfp-size>\n                <dfp-size [width]=\"740\" [height]=\"200\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"60\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"100\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"120\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"60\"></dfp-size>            \n            </div> \n        </div>      \n            \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n\n<div class=\"col-md-12 col-sm-12\" id=\"relatedcontentbox1\" *ngIf=\"(location == 'relatedcontentbox1') && (loading)\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_related-content-box-1\" responsive>\n        <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"150\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"80\"></dfp-size>                   \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n<div class=\"col-md-12 col-sm-12\" id=\"insidecontentbox1\" *ngIf=\"(location == 'insidecontentbox1') && (loading)\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_inside-content-box-1\" responsive>\n        <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n        <dfp-size [width]=\"265\" [height]=\"221\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"80\"></dfp-size>     \n        <dfp-size [width]=\"225\" [height]=\"150\"></dfp-size>  \n        <dfp-size [width]=\"250\" [height]=\"150\"></dfp-size>                \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    AdsDoubleClickComponent.ctorParameters = function () {
      return [{
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AdsDoubleClickComponent.propDecorators = {
      magazineId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      location: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      no: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      screenSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ads/ads-home-widget/ads-home-widget.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AdsHomeWidgetComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} RodmanCoreService
       * @param {?} Router
       */
      function AdsHomeWidgetComponent(RodmanCoreService, Router) {
        var _this8 = this;

        _classCallCheck(this, AdsHomeWidgetComponent);

        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.device = 'website';
        this.loading = false;
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this8.currentURL = event.url;
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(AdsHomeWidgetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.name = magazineIds[this.magazineId].id; // this.target = this.currentURL.toString().split('/').join(',');

          if (this.currentURL != '') {// this.target = this.location.toString().split('/').join(',');
          }

          this.loading = true;
        }
      }]);

      return AdsHomeWidgetComponent;
    }();

    AdsHomeWidgetComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-ads-home-widget',
        template: "<div  id=\"doubleClick-{{no}}\" *ngIf=\"loading\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_main-content-{{no}}\" responsive>\n        <div [ngSwitch]=\"device\">\n            <div *ngSwitchCase=\"'mobile'\">\n                <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"45\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"37\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"58\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"64\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"38\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"25\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"27\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"24\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"47\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"28\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"50\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n            </div>\n\n            <div *ngSwitchDefault >\n                <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n                <dfp-size [width]=\"740\" [height]=\"150\"></dfp-size>\n                <dfp-size [width]=\"740\" [height]=\"200\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"60\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"90\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"100\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"120\"></dfp-size>\n                <dfp-size [width]=\"300\" [height]=\"250\"></dfp-size>\n                <dfp-size [width]=\"468\" [height]=\"60\"></dfp-size>            \n            </div> \n        </div>      \n            \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n\n<div class=\"col-md-12 col-sm-12\" id=\"relatedcontentbox1\" *ngIf=\"(location == 'relatedcontentbox1') && (loading)\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_related-content-box-1\" responsive>\n        <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"150\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"80\"></dfp-size>                   \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n<div class=\"col-md-12 col-sm-12\" id=\"insidecontentbox1\" *ngIf=\"(location == 'insidecontentbox1') && (loading)\" >    \n    <dfp-ad adUnit=\"/56119504/{{name}}_inside-content-box-1\" responsive>\n        <dfp-size [width]=\"1\" [height]=\"1\"></dfp-size>\n        <dfp-size [width]=\"265\" [height]=\"221\"></dfp-size>\n        <dfp-size [width]=\"225\" [height]=\"80\"></dfp-size>     \n        <dfp-size [width]=\"225\" [height]=\"150\"></dfp-size>  \n        <dfp-size [width]=\"250\" [height]=\"150\"></dfp-size>                \n        <dfp-targeting key={{name}} value={{target}} >  </dfp-targeting>\n    </dfp-ad>\n</div>\n\n",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    AdsHomeWidgetComponent.ctorParameters = function () {
      return [{
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AdsHomeWidgetComponent.propDecorators = {
      magazineId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      location: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      no: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      target: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ads/ads.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AdsModule = function AdsModule() {
      _classCallCheck(this, AdsModule);
    };

    AdsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [AdsDisplayComponent, AdsOverlayComponent, AdsFooterComponent, AdsDoubleClickComponent, AdsHomeWidgetComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], rodman_orm__WEBPACK_IMPORTED_MODULE_14__["RodmanORMModule"], AdsRoutingModule, ng2_device_detector__WEBPACK_IMPORTED_MODULE_15__["Ng2DeviceDetectorModule"].forRoot(), ngx_dfp__WEBPACK_IMPORTED_MODULE_10__["DfpModule"].forRoot({
          idleLoad: true,
          enableVideoAds: true,
          personalizedAds: true,
          // Request personalized ads by default
          singleRequestMode: true,
          // Only applies to initial refresh
          onSameNavigation: 'refresh',
          globalTargeting: {// food: ['NUT', 'HOME']
          }
        })],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
        exports: [AdsDisplayComponent, AdsOverlayComponent, AdsFooterComponent, AdsDoubleClickComponent, AdsHomeWidgetComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sites/components/slider/slider.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var SliderComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       * @param {?} RodmanCoreService
       */
      function SliderComponent(config, RodmanCoreService) {
        _classCallCheck(this, SliderComponent);

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


      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return SliderComponent;
    }();

    SliderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-slider',
        template: "<div class=\"border\">\n    <ngb-carousel>\n    <ng-template ngbSlide *ngFor=\"let sliderData of data[0] | slice:0:5; let i =index\">\n        <div class=\"picsum-img-wrapper\">\n            <a [routerLink]=\"[sliderData.viewUrl]\" >\n                <img class=\"slider-img\" [src]=\"getImage(sliderData.primary_image)\" alt=\"No Image\"></a>\n        </div>\n        <div class=\"carousel-caption\">\n            <h3  [innerHTML]=\"safeHtmlReplace(sliderData.title)\"></h3>\n        </div>\n    </ng-template>\n    </ngb-carousel>\n</div>\n",
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
        styles: [".slider-img{width:100%;max-height:450px!important}"]
      }]
    }];
    /** @nocollapse */

    SliderComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]
      }, {
        type: RodmanCoreService
      }];
    };

    SliderComponent.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sites/sites.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SitesModule = function SitesModule() {
      _classCallCheck(this, SitesModule);
    };

    SitesModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NavComponent, AuthenticationComponent, HeaderComponent, FooterComponent, FootersliderComponent, NotFoundComponent, SliderComponent],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], // HttpClient,    
        SitesRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__["AngularFontAwesomeModule"], rodman_orm__WEBPACK_IMPORTED_MODULE_14__["RodmanORMModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), AdsModule],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
        exports: [NavComponent, HeaderComponent, FooterComponent, NotFoundComponent, AuthenticationComponent, SliderComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/home/home-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var routes$2 = [];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$2)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/home/components/featured-content/feature-content.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FeatureContentService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function FeatureContentService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, FeatureContentService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @param {?} id
       * @return {?}
       */


      _createClass(FeatureContentService, [{
        key: "getfetureData",
        value: function getfetureData(magazineId, id) {
          return this.HttpClient.post(apiURL + 'contentscontroller/getBoxContent', {
            magazineId: magazineId,
            id: id
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return FeatureContentService;
    }();

    FeatureContentService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FeatureContentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    FeatureContentService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FeatureContentService_Factory() {
        return new FeatureContentService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: FeatureContentService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/home/components/featured-content/featured-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FeaturedContentComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} FeatureContentService
       * @param {?} RodmanCoreService
       */
      function FeaturedContentComponent(FeatureContentService, RodmanCoreService) {
        _classCallCheck(this, FeaturedContentComponent);

        this.FeatureContentService = FeatureContentService;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @return {?}
       */


      _createClass(FeaturedContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.FeatureContentService.getfetureData(this.magazineId, this.featured_content_section).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this9.featuredContentData = data['data'];
            _this9.featuredContentHeading = data['contentType'];
            _this9.viewAdRender = 1;
          });
        }
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "extractNameFromJson",
        value: function extractNameFromJson(data) {
          return this.RodmanCoreService.extractNameFromJson(data);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return FeaturedContentComponent;
    }();

    FeaturedContentComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        inputs: ['magazineId', 'featured_content_section'],
        selector: 'CoreLib-featured-content',
        template: "<div class=\"d-flex justify-content-center loader-height mt-5 mb-5\" *ngIf= \"featuredContentHeading == null || featuredContentHeading.length === 0\">\n    <div class=\"spinner-border abc\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n<div class=\"container container_box my-5\" *ngIf=\"featuredContentHeading && featuredContentHeading[0]\">\n\n    <div class=\"row content\">    \n        <div class=\"col-sm-12 heading-border\"> \n             <h3 *ngIf=\"featuredContentHeading && featuredContentHeading[0].slug\">{{featuredContentHeading[0].slug.replace('-', ' ')  | uppercase }}</h3>            \n        </div>\n    </div>            \n           \n    <br>\n\n    <div class=\"row content vdivide\">\n        <div class=\"col-sm-8\">\n            <figure>\n                <div class=\"img-hover-zoom img-hover-zoom--slowmo\">\n                    <a [routerLink]=\"[featuredContentData[0].viewUrl]\">\n                        <img class=\"border\" *ngIf=\"featuredContentData && featuredContentData[0]\" [src]=\"getImage(featuredContentData[0].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                    </a>\n                </div>\n                <br>\n                <h4 class=\"text-center pt-2\" *ngIf=\"featuredContentData && featuredContentData[0]\"><a [routerLink]=\"[featuredContentData[0].viewUrl]\">{{safeHtmlReplace(featuredContentData[0].title)}}</a></h4>\n                <p class=\"text-center\"><small *ngIf=\"featuredContentData && featuredContentData[0].author_name\"> <b>\n                    {{extractNameFromJson(featuredContentData[0].author_name)}} </b></small></p>\n            </figure>\n        </div>\n        \n        <div class=\"col-sm-4\">      \n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <figure>\n                        <a [routerLink]=\"[featuredContentData[1].viewUrl]\">\n                            <img class=\"img-responsive\" *ngIf=\"featuredContentData && featuredContentData[1]\" [src]=\"getImage(featuredContentData[1].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                        </a>\n                        <div class=\"ml-3 pt-1\">\n                            <h4 *ngIf=\"featuredContentData && featuredContentData[1]\"><a [routerLink]=\"[featuredContentData[1].viewUrl]\">{{safeHtmlReplace(featuredContentData[1].title)}}</a></h4>\n                            <small *ngIf=\"featuredContentData && featuredContentData[1].author_name\"> <b>{{extractNameFromJson(featuredContentData[1].author_name)}} </b></small>\n                        </div>\n                    </figure>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <figure>\n                        <a [routerLink]=\"[featuredContentData[2].viewUrl]\">\n                           <img class=\"img-responsive\" *ngIf=\"featuredContentData && featuredContentData[2]\" [src]=\"getImage(featuredContentData[2].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\">  \n                        </a> \n                        <div class=\"ml-3 pt-1\"> \n                            <h4 *ngIf=\"featuredContentData && featuredContentData[2]\" ><a [routerLink]=\"[featuredContentData[2].viewUrl]\">{{safeHtmlReplace(featuredContentData[2].title)}}</a></h4>\n                            <small  *ngIf=\"featuredContentData && featuredContentData[2].author_name\"> <b>{{extractNameFromJson(featuredContentData[2].author_name)}} </b></small>\n                        </div>\n                    </figure>\n                </div>        \n            </div>      \n        </div>\n    </div>  \n\n    <br><hr>\n    <div class=\"row\"> \n        <div class=\"col-sm-8 col-md-8\" >\n            <div class=\"row content\">\n                <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-md-3 col-xs-3 image-container\">\n                            <a [routerLink]=\"[featuredContentData[3].viewUrl]\">\n                                <img class=\"img-res\" *ngIf=\"featuredContentData && featuredContentData[3]\" [src]=\"getImage(featuredContentData[3].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                            </a>    \n                        </div>\n                        <div class=\"col-sm-9 col-md-9 col-xs-9\">     \n                            <h6 *ngIf=\"featuredContentData && featuredContentData[3]\" ><a [routerLink]=\"[featuredContentData[3].viewUrl]\">{{safeHtmlReplace(featuredContentData[3].title)}}</a></h6>\n                            <p class=\"feature-summary\" *ngIf=\"featuredContentData && featuredContentData[3]\" >{{safeHtmlReplace(featuredContentData[3].summary)}}</p>\n                            <small *ngIf=\"featuredContentData && featuredContentData[3].author_name\"> <b>{{extractNameFromJson(featuredContentData[3].author_name)}} </b></small>\n                        </div>\n                    </div>\n                </div>            \n                <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4 col-md-4 col-xs-4 image-container\">\n                            <a [routerLink]=\"[featuredContentData[4].viewUrl]\">\n                                <img class=\"img-res\" *ngIf=\"featuredContentData && featuredContentData[4]\" [src]=\"getImage(featuredContentData[4].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                            </a>    \n                        </div>\n                        <div class=\"col-sm-8 col-md-8 col-xs-8 \"> \n                            <h6 *ngIf=\"featuredContentData && featuredContentData[4]\"><a [routerLink]=\"[featuredContentData[4].viewUrl]\">{{safeHtmlReplace(featuredContentData[4].title)}}</a></h6>\n                            <p *ngIf=\"featuredContentData && featuredContentData[4]\" class=\"feature-summary\">{{safeHtmlReplace(featuredContentData[4].summary)}}</p>\n                            <small  *ngIf=\"featuredContentData && featuredContentData[4].author_name\"> <b>{{extractNameFromJson(featuredContentData[4].author_name)}} </b></small>\n                        </div>\n                    </div>\n                </div>\n            </div>  \n\n            <br>\n\n            <div class=\"row content\">\n                <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-md-3 col-xs-3 image-container\">\n                            <a [routerLink]=\"[featuredContentData[5].viewUrl]\">    \n                                <img class=\"img-res\" *ngIf=\"featuredContentData && featuredContentData[5]\" [src]=\"getImage(featuredContentData[5].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                            </a>    \n                        </div>\n                        <div class=\"col-sm-9 col-md-9 col-xs-9\">     \n                            <h6 *ngIf=\"featuredContentData && featuredContentData[5]\"><a [routerLink]=\"[featuredContentData[5].viewUrl]\">{{safeHtmlReplace(featuredContentData[5].title)}}</a></h6>\n                            <p *ngIf=\"featuredContentData && featuredContentData[5]\" class=\"feature-summary\">{{safeHtmlReplace(featuredContentData[5].summary)}}</p>\n                            <small *ngIf=\"featuredContentData && featuredContentData[5].author_name\"> <b>{{extractNameFromJson(featuredContentData[5].author_name)}} </b></small>\n                        </div>\n                    </div>\n                </div>                   \n            \n                <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4 col-md-4 col-xs-4 image-container\">\n                            <a [routerLink]=\"[featuredContentData[6].viewUrl]\">\n                                <img class=\"img-res\" *ngIf=\"featuredContentData && featuredContentData[6]\" [src]=\"getImage(featuredContentData[6].primary_image)\" alt=\"No Image\" width=\"100%\" height=\"auto\"> \n                            </a>    \n                        </div>\n                        <div class=\"col-sm-8 col-md-8 col-xs-8 \"> \n                            <h6 *ngIf=\"featuredContentData && featuredContentData[6]\"><a [routerLink]=\"[featuredContentData[6].viewUrl]\">{{safeHtmlReplace(featuredContentData[6].title)}}</a></h6>\n                            <p *ngIf=\"featuredContentData && featuredContentData[6]\" class=\"feature-summary\">{{safeHtmlReplace(featuredContentData[6].summary)}}</p>\n                            <small  *ngIf=\"featuredContentData && featuredContentData[6].author_name\"> <b>{{extractNameFromJson(featuredContentData[6].author_name)}} </b></small>\n                        </div>\n                    </div>\n                </div>     \n            </div>   \n\n        </div>   \n        <div class=\"col-sm-4 col-md-4\" >\n                <div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"(viewAdRender == 1) && (getAllAd)\" >\n                    <CoreLib-ads-display [ads]=\"getAllAd\" location=\"{{location}}\"></CoreLib-ads-display>\n                    <!-- {{location}} -->\n                </div>\n        </div> \n    </div>\n\n\n</div>\n<!-- end show Data -->\n",
        styles: [".loader-height{min-height:450px}.container_box{width:100%!important;max-width:90%!important}.heading-border{border-bottom:1px solid;border-top:4px solid}.heading-border h3{padding:10px!important}.row.vdivide [class*=col-]:not(:last-child):after{background:#e0e0e0;width:1px;content:\"\";display:block;position:absolute;top:0;bottom:0;right:0;min-height:70px}.img-hover-zoom{height:100%;width:100%;overflow:hidden}.img-hover-zoom--slowmo img{-webkit-transform-origin:50% 65%;transform-origin:50% 65%;-webkit-transition:-webkit-transform 5s,-webkit-filter 3s ease-in-out;transition:transform 5s,filter 3s ease-in-out,-webkit-transform 5s,-webkit-filter 3s ease-in-out}.img-hover-zoom--slowmo:hover img{-webkit-filter:brightness(100%);filter:brightness(100%);-webkit-transform:scale(2);transform:scale(2)}.feature-summary{font-size:10px;color:#03225c}"]
      }]
    }];
    /** @nocollapse */

    FeaturedContentComponent.ctorParameters = function () {
      return [{
        type: FeatureContentService
      }, {
        type: RodmanCoreService
      }];
    };

    FeaturedContentComponent.propDecorators = {
      getAllAd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      location: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/home/components/home-slider/home-slider.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var HomeSliderService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function HomeSliderService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, HomeSliderService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @param {?} id
       * @return {?}
       */


      _createClass(HomeSliderService, [{
        key: "getHomeSlider",
        value: function getHomeSlider(magazineId, id) {
          return this.HttpClient.post(apiURL + 'contentsController/getHomeSliderContent', {
            magazineId: magazineId,
            id: id
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return HomeSliderService;
    }();

    HomeSliderService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    HomeSliderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    HomeSliderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function HomeSliderService_Factory() {
        return new HomeSliderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: HomeSliderService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/home/components/home-slider/home-slider.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var HomeSliderComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HomeSliderService
       * @param {?} config
       * @param {?} RodmanCoreService
       */
      function HomeSliderComponent(HomeSliderService, config, RodmanCoreService) {
        _classCallCheck(this, HomeSliderComponent);

        this.HomeSliderService = HomeSliderService;
        this.RodmanCoreService = RodmanCoreService;
        this.loading = true;
        config.interval = 3000; // config.showNavigationArrows = false;
        // config.showNavigationIndicators = false;
      }
      /**
       * @return {?}
       */


      _createClass(HomeSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.HomeSliderService.getHomeSlider(this.magazineId, this.homeBoxId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this10.homeSliderData = data['data'];
            _this10.loading = false;
          });
        }
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return HomeSliderComponent;
    }();

    HomeSliderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        inputs: ['magazineId', 'homeBoxId'],
        selector: 'CoreLib-home-slider',
        template: "<div class=\"d-flex justify-content-center mt-5 mb-5 loader-height\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n<div class=\"border slider-arrow\">\n    <ngb-carousel>\n        <ng-template ngbSlide *ngFor=\"let sliderData of homeSliderData; let i =index\">\n            <div class=\"picsum-img-wrapper\">\n                <a [routerLink]=\"[sliderData.viewUrl]\" >\n                    <!-- <img [src]=\"sliderData.primary_image_main\" alt=\"No Image\"> -->\n                    <img  [src]=\"getImage(sliderData.primary_image)\" alt=\"No Image\">\n                </a>\n            </div>\n            <div class=\"carousel-caption\">\n                <h3>{{safeHtmlReplace(sliderData.title)}}</h3>\n            </div>\n        </ng-template>\n    </ngb-carousel>\n</div>     \n\n\n       \n",
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
        styles: [".picsum-img-wrapper img{width:100%!important}.carousel-caption h3{color:#000}.carousel-control-next-icon,.carousel-control-prev-icon{color:#000!important}.carousel-control-next-icon:after{content:'>';font-size:55px;color:#000!important}.carousel-control-prev-icon:after{content:'<';font-size:55px;color:#000!important}.loader-height{min-height:100px}"]
      }]
    }];
    /** @nocollapse */

    HomeSliderComponent.ctorParameters = function () {
      return [{
        type: HomeSliderService
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]
      }, {
        type: RodmanCoreService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/home/home.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [FeaturedContentComponent, HomeSliderComponent],
        imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], AdsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__["AngularFontAwesomeModule"], HomeRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
        exports: [FeaturedContentComponent, HomeSliderComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/contents-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var routes$3 = [];

    var ContentsRoutingModule = function ContentsRoutingModule() {
      _classCallCheck(this, ContentsRoutingModule);
    };

    ContentsRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$3)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/list-content/list-content.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ListContentService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function ListContentService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ListContentService);

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


      _createClass(ListContentService, [{
        key: "getContent",
        value: function getContent(slug, magazineId, limit, page, contentType) {
          return this.HttpClient.post(apiURL + 'taxonomysController/getContentTypeContent', {
            pageUrl: slug,
            magazineId: magazineId,
            limit: limit,
            page: page,
            contentType: contentType
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
        /**
         * @param {?} slug
         * @param {?} magazineId
         * @return {?}
         */

      }, {
        key: "getContentTopTaxonomy",
        value: function getContentTopTaxonomy(slug, magazineId) {
          return this.HttpClient.post(apiURL + 'taxonomysController/getContentTypeTopTaxonomy', {
            pageUrl: slug,
            magazineId: magazineId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ListContentService;
    }();

    ListContentService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ListContentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    ListContentService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ListContentService_Factory() {
        return new ListContentService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: ListContentService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/list-content/list-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ListContentComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} Router
       * @param {?} ListContentService
       * @param {?} RodmanCoreService
       */
      function ListContentComponent(Router, ListContentService, RodmanCoreService) {
        var _this11 = this;

        _classCallCheck(this, ListContentComponent);

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
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this11.currentURL = event.url;
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(ListContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // this.getContentData();

        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.magazineId == 1 || this.magazineId == 5) {
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

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getContentData",
        value: function getContentData() {
          var _this12 = this;

          this.taxonomyUrl = this.routeUrl.split('/');
          this.taxonomyUrl = this.taxonomyUrl[this.taxonomyUrl.length - 1];
          /** @type {?} */

          var url = this.taxonomyUrl.split('_');
          this.taxonomyUrlTo = url[1];

          if (this.page == 0) {
            this.ListContentService.getContentTopTaxonomy(this.routeUrl, this.magazineId).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              // this.slugHeading = data['contentTypeName'];
              _this12.contentTaxonomy = data['CONTENT_TAXONOMYS'];
              _this12.all = data['all'];
            });
          }

          this.ListContentService.getContent(this.routeUrl, this.magazineId, this.limit, this.page, this.contentType).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this12.contentData = data['data'];

            if (_this12.page == 0) {
              _this12.slugHeading = data['contentTypeName']; // this.contentTaxonomy = data['CONTENT_TAXONOMYS'];

              _this12.sliderData.push(_this12.contentData);
            }

            _this12.page = data['page'] + 1;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _this12.contentData[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var content = _step2.value;

                _this12.listContentData.push(content);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            _this12.loading = false;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "loadMoreData",
        value: function loadMoreData() {
          this.loading = true;
          this.getContentData();
        }
        /**
         * @return {?}
         */

      }, {
        key: "removeContentType",
        value: function removeContentType() {
          this.contentType = '';
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "extractNameFromJson",
        value: function extractNameFromJson(data) {
          return this.RodmanCoreService.extractNameFromJson(data);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "bodyCharacterLength",
        value: function bodyCharacterLength(data) {
          return this.RodmanCoreService.bodyCharacterLength(data);
        }
      }]);

      return ListContentComponent;
    }();

    ListContentComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-lists-contents',
        inputs: ['routeUrl', 'magazineId', 'contentType'],
        template: "<div class=\"container mt-5\" *ngIf=\"slugHeading  && (contentType!='2542') && (routeUrl != '/contents/list_industry-events')  && (routeUrl != '/contents/list_ebook')\">\n    <div class=\"row\" >\n        <div class=\"col-md-12 col-sm-12\" >\n            <CoreLib-slider [data]=\"sliderData\"></CoreLib-slider>\n        </div>\n    </div>\n    <!-- Page Heading -->\n    <div class=\"mb-2\" id=\"url\"><h2>{{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>\n     <!--Top Taxonomy  -->\n        <span *ngIf=\"all.tag\">\n            <span class=\"taxonomy-text\" ><a  [routerLink]=\"['/'+all.url]\">{{all.tag}}</a></span> \n        </span>    \n        <span  *ngFor=\"let taxonomyTitle of contentTaxonomy;let k = index;\" class=\"taxonomy-text\" >\n            <a  [routerLink]=\"[staticUrl+taxonomyTitle.slug+'/view_'+taxonomyUrlTo]\">{{taxonomyTitle.tag}}</a>      \n        </span>    \n    <div class=\"heading-border\"></div>\n    <!-- List Data -->\n    <div *ngIf=\"listContentData?.length > 0\"  >\n        <div  *ngFor=\"let Data of listContentData; let i =index; let k = index\" >        \n            <div class=\"col-md-12 col-sm-12\">\n                <div class=\"row\">         \n                    <div class=\"col-md-12 col-sm-12\">\n                        <span *ngFor=\"let taxonomy of Data.taggedTaxonomy.KNOWLEDGE_CENTER_TAXONOMY | slice:0:5; let j =index\">\n                            <span *ngIf=\"j\"> | </span> \n                            <a  [routerLink]=\"[staticUrl+taxonomy.url]\"  > {{taxonomy.tag}}</a>         \n                        </span>        \n                    </div> \n                    \n                    <div class=\"col-md-9 col-sm-9\">\n                       \n                        <h4 class=\"mt-2\"><a [routerLink]=\"[Data.viewUrl]\">\n                            <b><div [innerHTML]=\"safeHtml(Data.title)\"> </div></b>\n                        </a></h4> \n                        <h6 class=\"mt-3\" *ngIf=\"Data.summary\" [innerHTML]=\"safeHtml(Data.summary)\"></h6>\n                        <h6 class=\"mt-3\" *ngIf=\"((!Data.summary) && (Data.body))\" [innerHTML]=\"bodyCharacterLength(Data.body)\"></h6>\n                        <div class=\"mt-2\">                             \n                            <span *ngIf=\"Data.author_name\"> {{extractNameFromJson(Data.author_name)}} </span>\n                            <span *ngIf=\"Data.companyDetail\">  <small  *ngIf=\"Data.companyDetail.title\"> <b> {{Data.companyDetail.title}}</b> . </small> </span> \n                            <small *ngIf=\"Data.publish_date\"> {{ Data.publish_date| date : \"MMM dd , yyyy\"}} . </small>\n                        </div>    \n                    </div>\n                    <div class=\"col-md-3 col-sm-3\" *ngIf=\"Data.primary_image\">\n                             <img class=\"img-scale\" [src]=\"getImage(Data.primary_image)\" alt=\"\"> \n                    </div>\n                </div>\n            </div>  \n\n            <div id=\"ads\" *ngIf=\"(k % 3 == 0) && (k > 2)\" ><hr>\n                <div class=\"col-md-12 col-sm-12\">\n                    <div class=\"row\" > \n                        <CoreLib-ads-double-click magazineId={{magazineId}} no=\"1\" location={{currentURL}}></CoreLib-ads-double-click>\n                    </div>\n                </div>\n            </div><hr>         \n        </div>   \n    </div>         \n</div>\n    \n    <!-- Webinars , ebook -->\n<div class=\"container mt-5\" *ngIf=\"(!loading)  && ((contentType=='2542' && (routeUrl == '')) || (routeUrl == '/contents/list_ebook') )\">   \n    <div class=\"heading-border mb-2\" id=\"webinars\"><h2>{{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>\n    \n    <div class=\"border-bottom\" *ngFor=\"let Data of listContentData; let i =index\" >\n        <div class=\"row\">\n            <div class=\"col-sm-2 col-md-2\"><img class=\"img-responsive Webinars\"  [src]=\"getImage(Data.primary_image)\" alt=\"No Image\"> </div>\n            <div class=\"col-sm-10 col-md-10\">\n                <h1><div [innerHTML]=\"safeHtml(Data.title)\"> </div></h1>\n                <div [innerHTML]=\"Data.body\"></div>\n            </div>\n        </div>   \n    </div>\n</div> \n\n    <!-- Industry events -->\n<div class=\"container mt-5\"*ngIf=\"(!loading)  && (routeUrl == '/contents/list_industry-events')\">   \n    <div class=\"mb-2\"><h2>{{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>   \n    <div class=\"heading-border\"></div>\n    <div *ngIf=\"listContentData?.length > 0\" >\n        <div  *ngFor=\"let Data of listContentData; let i =index\" >\n            <div class=\"col-md-12 col-sm-12\">                \n                <div><h4 class=\"mt-2\"><b><div [innerHTML]=\"safeHtml(Data.title)\"> </div></b></h4> <br></div>\n                <div><h5>{{ Data.start_date| date : \"MMM dd , yyyy\"}}</h5></div>\n                <div><b>Location: </b>{{Data.location}}</div>\n                <div><b>Contact:</b> {{Data.contact}}</div>\n                <div><b>Phone: </b> {{Data.phone}}</div>       \n                <div><b>Website:</b> {{Data.website}}</div>\n                <div><b>Email:</b>{{Data.email}}</div>\n            </div>   \n            <hr> \n        </div>   \n    </div> \n</div> \n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n<div class=\"container mt-5 mb-3\" *ngIf=\"listContentData?.length > 0  && contentType!='2542' && (routeUrl != '/contents/list_industry-events') && (routeUrl != '/contents/list_ebook')\">\n    <div class=\"row\" *ngIf=\"contentData?.length > 9 \"> \n        <div class=\"col-md-4 col-sm-4\"></div>\n            <div class=\"col-md-4 col-sm-4\">    <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button></div>\n        <div class=\"col-md-4 col-sm-4\"></div>\n    </div>   \n</div>",
        styles: [".img-scale{max-width:150px}.heading-border{border-bottom:1px solid #000;color:#000}.taxonomy-text{font-size:15px;background-color:#f2f2f2;font-weight:501;text-transform:uppercase;margin-right:15px;margin-bottom:10px;display:inline-block;letter-spacing:1px}.loader-height{min-height:800px}.Webinars{max-width:100%;min-width:100px}#ads,.taxonomy-text a{padding:10px}"]
      }]
    }];
    /** @nocollapse */

    ListContentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ListContentService
      }, {
        type: RodmanCoreService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/static-content/static-content.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var StaticContentService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function StaticContentService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, StaticContentService);

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


      _createClass(StaticContentService, [{
        key: "getStaticContent",
        value: function getStaticContent(slug, magazineId, limit, page, contentType) {
          /** @type {?} */
          var slugs = slug.replace('/', '');
          return this.HttpClient.post(apiURL + 'taxonomysController/getContentTaxonomys', {
            pageUrl: slugs,
            magazineId: magazineId,
            limit: limit,
            page: page,
            contentType: contentType
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return StaticContentService;
    }();

    StaticContentService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    StaticContentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    StaticContentService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function StaticContentService_Factory() {
        return new StaticContentService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: StaticContentService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/static-content/static-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var StaticContentComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} StaticContentService
       * @param {?} Router
       * @param {?} ActivatedRoute
       * @param {?} RodmanCoreService
       */
      function StaticContentComponent(StaticContentService, Router, ActivatedRoute, RodmanCoreService) {
        var _this13 = this;

        _classCallCheck(this, StaticContentComponent);

        this.StaticContentService = StaticContentService;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.RodmanCoreService = RodmanCoreService;
        this.limit = 30;
        this.page = 0;
        this.contentType = '';
        this.getAllAd = [];
        this.loading = true;
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this13.routeUrl = event.url;
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(StaticContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.ActivatedRoute.data.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this14.magazineId = data.magazineId;
          });
          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this14.getAllAd = data;
            _this14.viewAdRender = 1;
          });
          this.getStatic();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {} // this.getStatic();

        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.RodmanCoreService.safeHtml(data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getStatic",
        value: function getStatic() {
          var _this15 = this;

          this.StaticContentService.getStaticContent(this.routeUrl, this.magazineId, this.limit, this.page, this.contentType).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this15.staticContentData = data['data'];
            _this15.loading = false;
          });
        }
      }]);

      return StaticContentComponent;
    }();

    StaticContentComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-static-content',
        template: "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5\">\n            <div class=\"row\">\n                <div class=\"col-md-8\"  *ngIf=\"staticContentData\">\n                    <h1 *ngIf=\"staticContentData[0]\">{{staticContentData[0].title}}</h1>\n                    <hr>    \n                    <div *ngIf=\"staticContentData[0]\" [innerHTML]=\"safeHtml(staticContentData[0].body)\"> </div>   \n                                              \n                    <!-- <div *ngIf=\"staticContentData[0]\" [innerHTML]=\"staticContentData[0].body\"> </div> -->\n                    <!-- <div *ngIf=\"staticContentData[0]\">{{staticContentData[0].body}}</div> -->\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n        \n            ",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    StaticContentComponent.ctorParameters = function () {
      return [{
        type: StaticContentService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: RodmanCoreService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-view/content-view.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentViewService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function ContentViewService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ContentViewService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @param {?} contentUrl
       * @return {?}
       */


      _createClass(ContentViewService, [{
        key: "getContentDetails",
        value: function getContentDetails(magazineId, contentUrl) {
          // contentUrl ='/issues/2019-03-01/view_features/the-conductive-ink-and-materials-market-42752';
          return this.HttpClient.post(apiURL + 'taxonomysController/getViewContent', {
            magazineId: magazineId,
            contentUrl: contentUrl
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ContentViewService;
    }();

    ContentViewService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ContentViewService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    ContentViewService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ContentViewService_Factory() {
        return new ContentViewService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: ContentViewService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-box-tabs/content-box-tabs.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentBoxTabsService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function ContentBoxTabsService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ContentBoxTabsService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @param {?} id
       * @return {?}
       */


      _createClass(ContentBoxTabsService, [{
        key: "getTopRightWidget",
        value: function getTopRightWidget(magazineId, id) {
          return this.HttpClient.post(apiURL + 'contentscontroller/getBoxContent', {
            magazineId: magazineId,
            id: id
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ContentBoxTabsService;
    }();

    ContentBoxTabsService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ContentBoxTabsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    ContentBoxTabsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ContentBoxTabsService_Factory() {
        return new ContentBoxTabsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: ContentBoxTabsService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-view/content-view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ɵ0 = [];
    /** @type {?} */

    var contentDataView = [{
      status: 'Fail',
      data: ɵ0,
      message: '',
      video: [],
      magazine_id: ''
    }];

    var ContentViewComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ViewContentService
       * @param {?} config
       * @param {?} ContentBoxTabService
       * @param {?} RodmanCoreService
       * @param {?} Router
       */
      function ContentViewComponent(ViewContentService, config, ContentBoxTabService, RodmanCoreService, Router) {
        _classCallCheck(this, ContentViewComponent);

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


      _createClass(ContentViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // this.viewData();s

        /**
         * @param {?} contentDataView
         * @return {?}
         */

      }, {
        key: "selectView",
        value: function selectView(contentDataView) {
          this.selectedContentView = contentDataView;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.getads();
          this.viewData();
        }
        /**
         * @return {?}
         */

      }, {
        key: "viewData",
        value: function viewData() {
          var _this16 = this;

          // if((this.dataFetch)==false){ 
          this.ViewContentService.getContentDetails(this.magazineId, this.contentPageUrl).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this16.dataFetch = true;
            _this16.contentData = data['data'];
            _this16.contentDataView[0] = data['data'];
            _this16.page = data['data'].slug;
            _this16.displayDefault = 1;
            _this16.loading = false;
          }); // }
        }
        /**
         * @return {?}
         */

      }, {
        key: "check",
        value: function check() {
          this.dataFetch = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getads",
        value: function getads() {
          var _this17 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this17.getAllAd = data;
          });
        }
      }]);

      return ContentViewComponent;
    }();

    ContentViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-view',
        inputs: ['magazineId', 'contentPageUrl'],
        template: "            <div [ngSwitch]=\"page\">\n                <div *ngSwitchCase=\"'jobs'\">\n                        <CoreLib-content-jobs [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-jobs> \n                </div>\n                <div *ngSwitchCase=\"'features'\">\n                        <CoreLib-content-feature [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-feature>\n                </div>\n                <div *ngSwitchCase=\"'videos'\">\n                        <CoreLib-content-video [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-video>\n                </div>      \n                <div *ngSwitchCase=\"'webinars'\">\n                        <CoreLib-content-webinars  [ads]=\"getAllAd\"          \n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-webinars>\n                </div> \n                <div *ngSwitchCase=\"'formulary'\">\n                        <CoreLib-content-formulary [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-formulary>\n                </div>     \n                <div *ngSwitchCase=\"'infographics'\">\n                        <CoreLib-content-infographics [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-infographics>\n                </div> \n                <div *ngSwitchCase=\"'buyers-guide-companies'\">\n                        <CoreLib-content-buyer-guide-basic  [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-buyer-guide-basic> \n                </div> \n                <div *ngSwitchCase=\"'slideshows'\">\n                        <CoreLib-content-slide-show [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-slide-show>\n                </div> \n                <div *ngSwitchCase=\"'static-content'\">\n                        <CoreLib-content-static-content [ads]=\"getAllAd\"\n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-static-content>\n                </div> \n                <div *ngSwitchCase=\"'white-papers-tech-papers'\">\n                        <CoreLib-content-white-paper  \n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-white-paper>\n                </div> \n                <div *ngSwitchCase=\"'news-releases'\">\n                        <CoreLib-content-news-release \n                        [ContentInterface]=\"contentDataView\" \n                        (select)=\"selectView($event)\"></CoreLib-content-news-release>\n                </div> \n         \n                <div *ngSwitchDefault>\n                    <div *ngIf=\"displayDefault\">\n                            <CoreLib-content-default [ads]=\"getAllAd\"\n                            [ContentInterface]=\"contentDataView\" \n                            (select)=\"selectView($event)\">></CoreLib-content-default>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"check()\"></div>\n\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n            \n<!-- \n          <ng-template #Default>\n                <ng-container> \n                    <div>\n                         hello\n                    </div>\n                </ng-container> \n           </ng-template>\n\n    -->\n   ",
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
        styles: [".content-color{color:#fff!important;text-align:center}.hide{display:none!important}.line{border-top:1px solid}"]
      }]
    }];
    /** @nocollapse */

    ContentViewComponent.ctorParameters = function () {
      return [{
        type: ContentViewService
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]
      }, {
        type: ContentBoxTabsService
      }, {
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-dynamic-view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentDynamicViewComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} sanitizer
       * @param {?} RodmanCoreService
       * @param {?} Router
       */
      function ContentDynamicViewComponent(sanitizer, RodmanCoreService, Router) {
        _classCallCheck(this, ContentDynamicViewComponent);

        this.sanitizer = sanitizer;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.ContentInterface = [];
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getAllAd = []; // super(sanitizer,RodmanCoreService,Router);
      }
      /**
       * @return {?}
       */


      _createClass(ContentDynamicViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @param {?} ContentInterface
         * @param {?} ContentAdsInterface
         * @return {?}
         */

      }, {
        key: "selectView",
        value: function selectView(ContentInterface, ContentAdsInterface) {
          this.select.emit(ContentInterface);
        }
        /**
         * @param {?} obj
         * @return {?}
         */

      }, {
        key: "extractNameFromJson",
        value: function extractNameFromJson(obj) {
          return this.RodmanCoreService.extractNameFromJson(obj);
        }
        /**
         * @param {?} url
         * @return {?}
         */

      }, {
        key: "videoURL",
        value: function videoURL(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.RodmanCoreService.safeHtml(data);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return ContentDynamicViewComponent;
    }();

    ContentDynamicViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-dynamic-view',
        template: "",
        styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
      }]
    }];
    /** @nocollapse */

    ContentDynamicViewComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ContentDynamicViewComponent.propDecorators = {
      ContentInterface: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ContentAdsInterface: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      select: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-infographics.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentInfographicsComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo) {
      _inherits(ContentInfographicsComponent, _ContentDynamicViewCo);

      function ContentInfographicsComponent() {
        _classCallCheck(this, ContentInfographicsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentInfographicsComponent).apply(this, arguments));
      }

      _createClass(ContentInfographicsComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }]);

      return ContentInfographicsComponent;
    }(ContentDynamicViewComponent);

    ContentInfographicsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-infographics',
        template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n    \n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div *ngIf=\"ContentInterface\">\n                <div class=\"container mb-3 mt-4\" id=\"infographics\"  *ngFor=\"let contentData of ContentInterface\">\n                    <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                    <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                    <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                    <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1\">\n                        <b>{{ extractNameFromJson(contentData.author_name) }} {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-12 body-min-height\" [innerHtml]=\"safeHtml(contentData.body)\"></div>\n                    <div class=\"col-sm-12 col-md-12\" >\n                        <img  [src]=\"contentData.primary_image_main\" alt=\"No Image\" class=\"img-scale mb-2\">\n                    </div>\n                    <div class=\"col-sm-12 col-md-12\" >\n                        <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n                        <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n                    </div>\n\n                </div>                   \n            </div> \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n",
        styles: ["\n    .line{\n      border-top: 1px solid;\n    }\n  "]
      }]
    }];
    ContentInfographicsComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-search/content-search.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentSearchService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function ContentSearchService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ContentSearchService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @return {?}
       */


      _createClass(ContentSearchService, [{
        key: "refineContentList",
        value: function refineContentList(magazineId) {
          return this.HttpClient.post(apiURL + 'contentsController/getContentType', {
            magazineId: magazineId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
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

      }, {
        key: "SearchContent",
        value: function SearchContent(search, page, limit, magazineId, searchDateFrom, searchDateTo, contentTypeId) {
          return this.HttpClient.post(apiURL + 'contentsController/getSearchContent', {
            search: search,
            page: page,
            limit: limit,
            magazineId: magazineId,
            searchDateFrom: searchDateFrom,
            searchDateTo: searchDateTo,
            contentTypeId: contentTypeId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
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

      }, {
        key: "SearchCompany",
        value: function SearchCompany(search, page, limit, magazineId, searchDateFrom, searchDateTo, contentTypeId) {
          return this.HttpClient.post(apiURL + 'contentsController/getSearchBgCompanies', {
            search: search,
            page: page,
            limit: limit,
            magazineId: magazineId,
            searchDateFrom: searchDateFrom,
            searchDateTo: searchDateTo,
            contentTypeId: contentTypeId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ContentSearchService;
    }();

    ContentSearchService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ContentSearchService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    ContentSearchService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ContentSearchService_Factory() {
        return new ContentSearchService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: ContentSearchService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-search/content-search.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentSearchComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} calendar
       * @param {?} RodmanCoreService
       * @param {?} Router
       * @param {?} ContentSearchService
       * @param {?} ActivatedRoute
       */
      function ContentSearchComponent(calendar, RodmanCoreService, Router, ContentSearchService, ActivatedRoute) {
        var _this18 = this;

        _classCallCheck(this, ContentSearchComponent);

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
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this18.routeUrl = event.url;
            _this18.contentList = [];

            _this18.ActivatedRoute.params.subscribe(
            /**
            * @param {?} params
            * @return {?}
            */
            function (params) {
              _this18.page = 0;
              _this18.anySlug = params['any'];
              _this18.searchSlug = params['slug'];
            });

            _this18.getSearchData();
          }
        });
        this.ActivatedRoute.data.subscribe(
        /**
        * @param {?} data
        * @return {?}
        */
        function (data) {
          _this18.magazineId = data.magazineId;
        });
      }
      /**
       * @return {?}
       */


      _createClass(ContentSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.magazineId == 1) {
            this.staticUrl = 'knowledge-center/';
          }

          this.getRefineData();
          this.getPageAds(); //   this.ActivatedRoute.params.subscribe(params => {
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

      }, {
        key: "selectData",
        value: function selectData() {
          if (this.refineContentList) {
            this.getRefineData();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getRefineData",
        value: function getRefineData() {
          var _this19 = this;

          this.ContentSearchService.refineContentList(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this19.refineContentList = data['country'];
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "searchSelectFilter",
        value: function searchSelectFilter() {
          // this.searchFiled=(this.searchSlug!='') ? this.searchSlug : 'all' ;
          // if(this.searchFiled==='undefined' || this.searchFiled==''){
          //   this.searchFiled=this.searchSlug;
          // }
          this.page = 0;

          if (this.selectedProduct === 'undefined' || this.selectedProduct == '') {
            this.selectedProduct = "all";
          }

          this.Router.navigateByUrl('/contents/searchcontent/' + this.selectedProduct + '/' + this.searchFiled); // this.getSearchData();
        }
        /**
         * @return {?}
         */

      }, {
        key: "searchDateFilter",
        value: function searchDateFilter() {
          this.page = 0;
          this.getSearchData();
        }
        /**
         * @return {?}
         */

      }, {
        key: "searchTextFilter",
        value: function searchTextFilter() {
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

      }, {
        key: "getSearchData",
        value: function getSearchData() {
          var _this20 = this;

          if (this.loadMoreCheck) {
            this.ContentSearchService.SearchCompany(this.searchSlug, this.page, this.limit, this.magazineId, this.dateFrom, this.dateTo, this.selectedProduct).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              _this20.companyDataList = data['bgTopCompanies'];
              _this20.comapnyCategory = data['bgCategories'];
              _this20.micrositeCompany = _this20.companyDataList.filter(
              /**
              * @param {?} map
              * @return {?}
              */
              function (map) {
                return map.has_featured_mircosite_listing == 1;
              });
              _this20.featuredComapny = _this20.companyDataList.filter(
              /**
              * @param {?} map
              * @return {?}
              */
              function (map) {
                return map.has_featured_mircosite_listing == 0;
              });
            });
            this.loading2 = false;
          }

          this.selectedProduct = this.selectedProduct == 'all' ? "" : this.selectedProduct;
          this.ContentSearchService.SearchContent(this.searchSlug, this.page, this.limit, this.magazineId, this.dateFrom, this.dateTo, this.selectedProduct).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this20.putContentList = data['data'];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = _this20.putContentList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var content = _step3.value;

                _this20.contentList.push(content);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            _this20.page = data['page'] + 1;
          }); // setTimeout(function(){
          //   this.loading1 = false;
          // },6000);

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this20.loading1 = false;
          }, 10000);
        }
        /**
         * @return {?}
         */

      }, {
        key: "spinnerHide",
        value: function spinnerHide() {}
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "bodyCharacterLength",
        value: function bodyCharacterLength(data) {
          return this.RodmanCoreService.bodyCharacterLength(data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "loadMoreData",
        value: function loadMoreData() {
          this.loading1 = true;
          this.loadMoreCheck = false;
          this.getSearchData();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getPageAds",
        value: function getPageAds() {
          var _this21 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this21.getAllAd = data;
            _this21.viewAdRender = 1;
          });
        } // Date Option

        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "onDateSelection",
        value: function onDateSelection(date) {
          if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
          } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
          } else {
            this.toDate = null;
            this.fromDate = date;
          }
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isHovered",
        value: function isHovered(date) {
          return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isInside",
        value: function isInside(date) {
          return date.after(this.fromDate) && date.before(this.toDate);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isRange",
        value: function isRange(date) {
          return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
        }
      }]);

      return ContentSearchComponent;
    }();

    ContentSearchComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-search',
        template: "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8 mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Search For:</b></h6> </div>\n                                <div class=\"col-md-6 col-sm-6 text-left \"> \n                                    <input class=\"form-cotrol\" id=\"searchFiled\" (input)=\"searchFiled=$event.target.value\" type=\"text\" value=\"{{searchSlug}}\" >\n                                    <!-- <input #searchTextFiled type=\"text\" value=\"{{searchSlug}}\" /> -->\n                                </div>\n                                <div class=\"col-md-2 col-sm-2 \"> \n                                    <button (click)=searchTextFilter()>Search</button>\n                                    <!-- <button (click)=\"searchTextFiled(searchTextFiled.value)\" >Search</button> -->\n                \n                                    </div>\n                            </div><br>  \n                \n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Refine by Dates:</b></h6> </div>\n                                <div class=\"col-md-6 col-sm-6 text-left\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6 col-md-6\">\n                                            From : <br> \n                                            <input type=\"date\" class=\"form-control\"  id=\"dateFrom\" (input)=\"dateFrom=$event.target.value\">\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6\">\n                                            To : <br> \n                                            <input type=\"date\" class=\"form-control\"  id=\"dateTo\" (input)=\"dateTo=$event.target.value\">\n                                        </div>\n                                    </div>     \n                                </div>\n                                <div class=\"col-md-2 col-sm-2 \"> \n                                    <button (click)=searchDateFilter()>Search</button> \n                                </div>\n                            </div><br>\n                \n                            <div class=\"row mb-2 border-bottom\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Refine By Content:</b></h6> </div>\n                                <div class=\"col-md-8 col-sm-8 text-left \"> \n                                    <select class=\"form-cotrol\"  (input)=\"selectedProduct=$event.target.value\" (click)=\"selectData()\" (change)=searchSelectFilter()>\n                                            <option [value]=\"\">All</option>\n                                            <option *ngFor=\"let SelectOption of refineContentList;let i=index\" [value]=\"SelectOption.id\" [selected]=\"SelectOption.id==anySlug\">\n                                                {{SelectOption.tag.replace('_', ' ') | titlecase}}</option>\n                \n                                    </select>\n                                </div><br>\n                            </div><br>\n                \n                \n                            <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading2\">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                                        <!-- Buyer Guide -->\n                            <div class=\" mb-3 mt-4 border-bottom\" *ngIf=\"micrositeCompany?.length > 0 \" >\n                                <div class=\"mb-3\"><h2>Buyers Guide Companies</h2></div>                \n                                <div *ngIf=\"micrositeCompany?.length > 0\">\n                                    <div class=\"\"><h3>Microsite Companies</h3></div> \n                                    <div *ngFor=\"let microsite of micrositeCompany|slice:0:5;let i = index\">\n                                        <a [routerLink]=\"[microsite.viewUrl]\">{{microsite.title}}</a>\n                                    </div>\n                                </div>            \n                                <div *ngIf=\"featuredComapny?.length > 0\">\n                                    <div class=\"\"><h3>Featured Companies</h3></div> \n                                    <div *ngFor=\"let featured of featuredComapny|slice:0:5; let i = index\">\n                                        <a [routerLink]=\"[featured.viewUrl]\">{{featured.title}}</a>\n                                    </div>\n                                </div>        \n                            </div>\n                    \n                            <!-- Buyer Guide Categories -->\n                            <div class=\"container mb-3 mt-4 border-bottom\"  *ngIf=\"comapnyCategory?.length > 0\">                    \n                                <div><h3>Buyers Guide Categories</h3></div> \n                \n                                <div *ngFor=\"let category of comapnyCategory;let i = index\">\n                                    <!-- <a [routerLink]=\"[category.viewUrl]\">{{category.tag}}</a> -->\n                                    <p>{{category.tag}}</p>\n                                </div>\n                            </div>\n                \n                \n                            <!-- Content List-->\n                            <div class=\"container mb-3 mt-4\"  *ngIf=\"contentList?.length > 0\">\n                                <div class=\"border-bottom\" *ngFor=\"let content of contentList;let i = index\">                \n                                    <div class=\"col-md-12 col-sm-12 mt-1\">\n                                        <span *ngFor=\"let taxonomy of content.taggedTaxonomy.KNOWLEDGE_CENTER_TAXONOMY; let j =index\" >\n                                            <span *ngIf=\"j\"> | </span>\n                                            <a *ngIf=\"magazineId != 1\" [routerLink]=\"['/'+taxonomy.url]\"  > {{taxonomy.tag}}   </a> \n                                            <a *ngIf=\"magazineId == 1\" [routerLink]=\"['/'+staticUrl+taxonomy.url]\"  > {{taxonomy.tag}}</a>\n                                        </span>\n                                    </div> \n                                    <div class=\"col-md-12 col-sm-12\">\n                                       \n                                        <h4 class=\"mt-2\"><a  [routerLink]=\"[content.viewUrl]\"><b>{{safeHtml(content.title)}}</b></a></h4> \n                                        <!-- <h6 class=\"mt-3\">{{content.summary}}</h6> -->\n                                        <h6 class=\"mt-3\" *ngIf=\"content.summary\" [innerHTML]=\"safeHtml(content.summary)\"></h6>\n                                        <h6 class=\"mt-3\" *ngIf=\"((!content.summary) && (content.body))\" [innerHTML]=\"bodyCharacterLength(content.body)\"></h6>\n                                        <small>{{ content.publish_date| date : \"MMM dd , yyyy\"}}</small>\n                                    </div>\n                                </div>\n                            </div>\n                \n                            <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading1\">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                \n                            <div class=\"container mt-5 mb-3\"  *ngIf=\"contentList?.length > 0\">\n                                <div class=\"row\" *ngIf=\"contentList?.length > 9\"> \n                                    <div class=\"col-md-4 col-sm-4\"></div>\n                                        <div class=\"col-md-4 col-sm-4\">    <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button></div>\n                                    <div class=\"col-md-4 col-sm-4\"></div>\n                                </div>   \n                            </div>\n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>",
        styles: [".border-bottom{border-bottom:1px solid #000!important}.border-top{border-top:1px solid #000!important}.form-group.hidden{width:0;margin:0;border:none;padding:0}.custom-day{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}.custom-day.focused{background-color:#e6e6e6}.custom-day.range,.custom-day:hover{background-color:#0275d8;color:#fff}.custom-day.faded{background-color:rgba(2,117,216,.5)}"]
      }]
    }];
    /** @nocollapse */

    ContentSearchComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]
      }, {
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ContentSearchService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-related/content-related.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentRelatedService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function ContentRelatedService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ContentRelatedService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @param {?} contentId
       * @return {?}
       */


      _createClass(ContentRelatedService, [{
        key: "getRelatedContent",
        value: function getRelatedContent(magazineId, contentId) {
          return this.HttpClient.post(apiURL + 'taxonomysController/getReleatedContent', {
            magazineId: magazineId,
            contentId: contentId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ContentRelatedService;
    }();

    ContentRelatedService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ContentRelatedService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    ContentRelatedService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ContentRelatedService_Factory() {
        return new ContentRelatedService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: ContentRelatedService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-related/content-related.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentRelatedComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ContentRelatedService
       * @param {?} RodmanCoreService
       */
      function ContentRelatedComponent(ContentRelatedService, RodmanCoreService) {
        _classCallCheck(this, ContentRelatedComponent);

        this.ContentRelatedService = ContentRelatedService;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @return {?}
       */


      _createClass(ContentRelatedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.ContentRelatedService.getRelatedContent(this.magazineId, this.contentId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this22.relatedContentData = data['data'];
            _this22.relatedContentData = _this22.relatedContentData.slice(0, 5);
          });
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return ContentRelatedComponent;
    }();

    ContentRelatedComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-related',
        inputs: ['magazineId', 'contentId'],
        template: "<div class=\"container\">\n    <div class=\"bg-primary border-primary align-center \" *ngIf=\"relatedContentData?.length > 0\">\n        <p class=\"content-color\" *ngIf=\"!(heading)\">RELATED CONTENT</p>\n        <p class=\"content-color\" *ngIf=\"(heading)\">{{heading}}</p>\n    </div> \n    <ul class=\"change-style\" *ngIf=\"relatedContentData?.length > 0\">\n        <li *ngFor=\"let content of relatedContentData\"><a [routerLink]=\"[content.viewUrl]\">{{safeHtmlReplace(content.title)}} </a></li>            \n    </ul>\n</div>",
        styles: [".content-color{color:#fff!important;text-align:center;margin-bottom:.5rem;font-family:Montserrat,-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-weight:501;padding:5px}.change-style li a{font-weight:400;font-size:14px}.change-style{border:1px solid;background:#f6f6f6}.border-primary{border:1px solid}"]
      }]
    }];
    /** @nocollapse */

    ContentRelatedComponent.ctorParameters = function () {
      return [{
        type: ContentRelatedService
      }, {
        type: RodmanCoreService
      }];
    };

    ContentRelatedComponent.propDecorators = {
      heading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-suggest-slide-show/content-suggest-slide-show.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentSuggestSlideShowComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} RodmanCoreService
       * @param {?} Router
       * @param {?} config
       * @param {?} ContentRelatedService
       */
      function ContentSuggestSlideShowComponent(RodmanCoreService, Router, config, ContentRelatedService) {
        _classCallCheck(this, ContentSuggestSlideShowComponent);

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


      _createClass(ContentSuggestSlideShowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.ContentRelatedService.getRelatedContent(this.magazineId, this.contentId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this23.SlideShowData = data['data'];
            _this23.loading = false;
          });
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImageUrl",
        value: function getImageUrl(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
      }]);

      return ContentSuggestSlideShowComponent;
    }();

    ContentSuggestSlideShowComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-suggest-slide-show',
        inputs: ['magazineId', 'contentId'],
        template: "<!--  a[index] !== void 0 -->\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<ngb-carousel *ngIf=\"(SlideShowData?.length > 0)  && (!loading)\"> \n \n        <ng-template ngbSlide *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(0)\">\n            <div class=\"row\">\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData.hasOwnProperty(0)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[0].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[0].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[0].title)}}</p>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && (SlideShowData.hasOwnProperty(1))\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[1].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[1].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[1].title)}}</p>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && (SlideShowData.hasOwnProperty(2))\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[2].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[2].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[2].title)}}</p>\n                        </div>\n                    </a>\n                </div>       \n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(3)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[3].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[3].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[3].title)}}</p>\n                        </div>\n                    </a>\n                </div>                \n            </div>\n        </ng-template>\n\n\n\n        <ng-template ngbSlide *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(4)\">\n            <div class=\"row\">\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(4)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[4].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[4].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[4].title)}}</p>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(5)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[5].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[5].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[5].title)}}</p>\n                        </div>\n                    </a>\n                </div>   \n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(6)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[6].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[6].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[6].title)}}</p>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(7)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[7].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[7].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[7].title)}}</p>\n                        </div>\n                    </a>\n                </div>                    \n            </div>\n        </ng-template>\n\n        <ng-template ngbSlide *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(8)\">\n            <div class=\"row\">\n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(8)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[8].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[8].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[8].title)}}</p>\n                        </div>\n                    </a>\n                </div>   \n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(9)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[9].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[9].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[9].title)}}</p>\n                        </div>\n                    </a>\n                </div>  \n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(10)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[10].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[10].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[10].title)}}</p>\n                        </div>\n                    </a>\n                </div>  \n                <div class=\"col-md-3\" *ngIf=\"SlideShowData && SlideShowData.hasOwnProperty(11)\"> \n                    <a  [routerLink]=\"['/'+SlideShowData[11].viewUrl]\"  > \n                        <div class=\"picsum-img-wrapper\">\n                            <img [src]=\"getImageUrl(SlideShowData[11].primary_image)\" alt=\"No Image\">\n                        </div>\n                        <div class=\"carousel-caption\">\n                            <p>{{safeHtmlReplace(SlideShowData[11].title)}}</p>\n                        </div>\n                    </a>\n                </div>                      \n            </div>\n        </ng-template>\n\n</ngb-carousel>  ",
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
        styles: ["img{max-height:250px}"]
      }]
    }];
    /** @nocollapse */

    ContentSuggestSlideShowComponent.ctorParameters = function () {
      return [{
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]
      }, {
        type: ContentRelatedService
      }];
    };

    ContentSuggestSlideShowComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-box-tabs/content-box-tabs.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentBoxTabsComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ContentBoxTabsService
       * @param {?} Router
       * @param {?} RodmanCoreService
       */
      function ContentBoxTabsComponent(ContentBoxTabsService, Router, RodmanCoreService) {
        var _this24 = this;

        _classCallCheck(this, ContentBoxTabsComponent);

        this.ContentBoxTabsService = ContentBoxTabsService;
        this.Router = Router;
        this.RodmanCoreService = RodmanCoreService;
        this.currentJustify = 'justified';
        this.loading = true;
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this24.currentURL = event.url;
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(ContentBoxTabsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.ContentBoxTabsService.getTopRightWidget(this.magazineId, this.TabOne).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this25.contentBoxTabOne = data['data'];
            _this25.tabOneHeading = data['contentType'];
          });
          this.ContentBoxTabsService.getTopRightWidget(this.magazineId, this.TabTwo).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this25.contentBoxTabTwo = data['data'];
            _this25.tabTwoheading = data['contentType'];
            _this25.loading = false;
          });
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "extractNameFromJson",
        value: function extractNameFromJson(data) {
          return this.RodmanCoreService.extractNameFromJson(data);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return ContentBoxTabsComponent;
    }();

    ContentBoxTabsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-box-tabs',
        inputs: ['magazineId', 'TabOne', 'TabTwo'],
        template: "<div class=\"d-flex justify-content-center mt-5 mb-5 loader-height\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n    <ngb-tabset [justify]=\"currentJustify\" *ngIf=\"!loading\">\n        <ngb-tab  *ngIf=\"tabOneHeading && tabOneHeading[0]\" title=\"{{tabOneHeading[0].slug.replace('-', ' ')  | uppercase }}\">\n            <ng-template ngbTabContent>\n                \n                <div *ngFor=\"let tabOne of contentBoxTabOne\">\n                    <div class=\"row allign border-bottom\" >\n                        <h6><a [routerLink]=\"[tabOne.viewUrl]\">  <div [innerHTML]=\"safeHtmlReplace(tabOne.title)\"> </div> </a></h6><br>\n                        <!-- <p *ngIf=\"tabOne.firstName\"><small>By <b>{{tabOne.firstName}} {{tabOne.lastName}}</b></small></p> -->\n                        <p> \n                            <small *ngIf=\"tabOne.author_name\"> {{extractNameFromJson(tabOne.author_name)}} </small>\n                            <small> <b>{{tabOne.publish_date | date : \"MMM dd , yyyy \"}} </b></small>\n                        </p>\n                    </div>                      \n                </div>\n                <!-- If You Want Main Content-1 Ads -->\n                <!-- <div *ngIf=\"showAds == 'yes'\">\n                    <CoreLib-ads-home-widget  magazineId={{magazineId}} no=\"1\" location={{currentURL}} target='breaking-news'></CoreLib-ads-home-widget>\n                </div> -->\n\n            </ng-template>\n        </ngb-tab>\n\n    \n        <ngb-tab>\n            <ng-template ngbTabTitle *ngIf=\"tabTwoheading && tabTwoheading[0]\">{{tabTwoheading[0].slug.replace('-', ' ')  | uppercase }}</ng-template>\n            <ng-template ngbTabContent>\n\n                <div *ngFor=\"let tabTwo of contentBoxTabTwo\">\n                    <div class=\"row allign border-bottom\">\n                        <h6><a [routerLink]=\"[tabTwo.viewUrl]\"><div [innerHTML]=\"safeHtmlReplace(tabTwo.title)\"></div></a></h6> <br>\n                        <!-- <p *ngIf=\"tabTwo.firstName\"> <small>By <b>{{tabTwo.firstName}} {{tabTwo.lastName}}</b></small></p> -->\n                        <p>\n                            <small *ngIf=\"tabTwo.author_name\"> {{extractNameFromJson(tabTwo.author_name)}} </small>\n                            <small> <b>{{tabTwo.publish_date | date : \"MMM dd , yyyy \"}} </b></small>\n                        </p>\n                    </div>                     \n                </div> \n                <!-- If You Want Main Content-1 Ads --> \n                <!-- <div *ngIf=\"showAds == 'yes'\">\n                    <CoreLib-ads-home-widget  magazineId={{magazineId}} no=\"1\" location={{currentURL}} target='feature'></CoreLib-ads-home-widget>\n                </div> -->\n\n            </ng-template>\n        </ngb-tab>\n    </ngb-tabset> \n",
        styles: [".allign{margin:10px!important;min-height:45px}.alignName{margin-left:10px!important}.loader-height{min-height:100px}.allign h6{margin-bottom:0!important;width:100%}"]
      }]
    }];
    /** @nocollapse */

    ContentBoxTabsComponent.ctorParameters = function () {
      return [{
        type: ContentBoxTabsService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: RodmanCoreService
      }];
    };

    ContentBoxTabsComponent.propDecorators = {
      showAds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/users/users-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var routes$4 = [];

    var UsersRoutingModule = function UsersRoutingModule() {
      _classCallCheck(this, UsersRoutingModule);
    };

    UsersRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$4)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/users/users-verify-email/users-verify-email.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var UsersVerifyEmailService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function UsersVerifyEmailService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, UsersVerifyEmailService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} userData
       * @return {?}
       */


      _createClass(UsersVerifyEmailService, [{
        key: "UserDeatils",
        value: function UserDeatils(userData) {
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

      }, {
        key: "verifyUser",
        value: function verifyUser(magazineId, passKey, webUserName) {
          return this.HttpClient.post(apiURL + 'usersController/verification', {
            magazineId: magazineId,
            passKey: passKey,
            webUserName: webUserName
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return UsersVerifyEmailService;
    }();

    UsersVerifyEmailService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    UsersVerifyEmailService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    UsersVerifyEmailService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function UsersVerifyEmailService_Factory() {
        return new UsersVerifyEmailService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: UsersVerifyEmailService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/users/users-verify-email/users-verify-email.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var UsersVerifyEmailComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} formBuilder
       * @param {?} UserVerifyEmailService
       * @param {?} Router
       */
      function UsersVerifyEmailComponent(formBuilder, UserVerifyEmailService, Router) {
        _classCallCheck(this, UsersVerifyEmailComponent);

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


      _createClass(UsersVerifyEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.UserVerifyEmailService.verifyUser(this.magazineId, this.passKey, this.email).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            if (data.status == "success" && data.message == "Verification successfully" && data.registerStatus == "success") {
              _this26.userData = data['data'];
              _this26.formData = data['formData'];
              _this26.mailing_list = data['SUBSCRIBE_MAILING_LIST'];
              _this26.isModalShown = true;
              _this26.id = data['data'].id;
            } else if (data.registerStatus == "IL") {
              _this26.message = true; // this.isModalShown = true;
              // this.userData = 'data ';
            }
          });
          this.verifyForm = this.formBuilder.group({
            magazineId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            // id:111,
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cnfpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            formData: this.object,
            maling_list: this.formBuilder.array([], this.minSelectedCheckboxes(1))
          }, {
            validator: this.checkIfMatchingPasswords('password', 'cnfpassword')
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "createObjectOverView",

        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        value: function createObjectOverView(key, value) {
          if (value) {
            this.object[key] = value;
          } else {
            delete this.object[key];
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "showModal",
        value: function showModal() {
          this.isModalShown = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "hideModal",
        value: function hideModal() {
          this.autoShownModal.hide();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onHidden",
        value: function onHidden() {
          this.isModalShown = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this27 = this;

          this.submitted = true;

          if (this.verifyForm.invalid) {
            return;
          }

          this.UserVerifyEmailService.UserDeatils(this.verifyForm.value).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            if (data.status == "success" && data.message == "Data updated successfully") {
              _this27.showMsgRegistration = true;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this27.Router.navigate(['/']);
              }, 5000);
            }
          });
        } // CheckBox Mapping For Newsletter

        /**
         * @param {?} email
         * @param {?} isChecked
         * @return {?}
         */

      }, {
        key: "onChangeNewsLetter",
        value: function onChangeNewsLetter(email, isChecked) {
          /** @type {?} */
          var newsLetterFormArray =
          /** @type {?} */
          this.verifyForm.controls.maling_list;

          if (isChecked) {
            newsLetterFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](email));
            this.newsLetterMessage = false;
          } else {
            /** @type {?} */
            var index = newsLetterFormArray.controls.findIndex(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.value == email;
            });
            newsLetterFormArray.removeAt(index);

            if (newsLetterFormArray.length) {
              this.newsLetterMessage = false;
            } else {
              this.newsLetterMessage = true;
            }
          }
        } // Confirm Password Function 

        /**
         * @param {?} passwordKey
         * @param {?} passwordConfirmationKey
         * @return {?}
         */

      }, {
        key: "checkIfMatchingPasswords",
        value: function checkIfMatchingPasswords(passwordKey, passwordConfirmationKey) {
          return (
            /**
            * @param {?} group
            * @return {?}
            */
            function (group) {
              /** @type {?} */
              var passwordInput = group.controls[passwordKey];
              /** @type {?} */

              var passwordConfirmationInput = group.controls[passwordConfirmationKey];

              if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({
                  notEquivalent: true
                });
              } else {
                return passwordConfirmationInput.setErrors(null);
              }
            }
          );
        } //  Check Box Minimum One Select Validation

        /**
         * @param {?=} min
         * @return {?}
         */

      }, {
        key: "minSelectedCheckboxes",
        value: function minSelectedCheckboxes() {
          var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

          /** @type {?} */
          var validator =
          /**
          * @param {?} formArray
          * @return {?}
          */
          function validator(formArray) {
            /** @type {?} */
            var totalSelected = formArray.controls.map(
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              return control.value;
            }).reduce(
            /**
            * @param {?} prev
            * @param {?} next
            * @return {?}
            */
            function (prev, next) {
              return next ? prev + next : prev;
            }, 0);
            return totalSelected >= min ? null : {
              required: true
            };
          };

          return validator;
        }
      }, {
        key: "verifyVal",
        get: function get() {
          return this.verifyForm.controls;
        }
      }]);

      return UsersVerifyEmailComponent;
    }();

    UsersVerifyEmailComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-users-verify-email',
        inputs: ['magazineId', 'passKey', 'email'],
        template: "<div class=\"container\">\n        <div class=\"row description\">\n         \n        <div *ngIf=\"message\"> \n                 <div class=\"text-center\"><h1>Invalid Link For Process</h1></div>\n        </div>   \n    \n            <div *ngIf=\"isModalShown && userData\"  [config]=\"{backdrop: 'static',  keyboard: false,show: true }\"  (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\"\n            class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-auto-name\">\n              <div class=\"modal-dialog modal-lg modal-md\">\n                <div class=\"modal-content\">\n                   <!-- <div class=\"modal-header\">\n                     <h4 id=\"dialog-auto-name\" class=\"modal-title pull-left\"></h4>\n                      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                  </div>  -->\n                  <div class=\"modal-body\">\n                      <h2>Please enter your details below to create your log-in credentials. You will only need to register once.</h2>\n    \n                      <div class=\"clearfix\"></div><br>\n    \n                      <div class=\"row\"  *ngIf=\"showMsgRegistration\">\n                              <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                      <p class=\"alert alert-success text-center\">You Have Update Details Please Login </p>\n                              </div>\n                      </div>\n    \n                      <form [formGroup]=\"verifyForm\" (ngSubmit)=\"onSubmit()\"> \n                          <input type=\"hidden\" formControlName=\"magazineId\"  value=\"{{magazineId}}\" [ngModel]=\"magazineId\"> \n                          <input type=\"hidden\" formControlName=\"id\"  value=\"{{id}}\" [ngModel]=\"id\"> \n                            <!-- First And Last Name -->\n                            <br><br>\n                           <div class=\"row\">\n                              <div class=\"col-sm-6 col-md-6\">\n                                  <input type=\"text\" formControlName=\"firstName\" id=\"firstName\" placeholder=\"Enter First Name\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && verifyVal.firstName.errors}\" > \n                                   <div *ngIf=\"submitted && verifyVal.firstName.errors\" class=\"invalid-feedback\">\n                                          <div *ngIf=\"verifyVal.firstName.errors.required\">Field is required</div>\n                                  </div> \n                               </div> \n                              \n                                <div class=\"col-sm-6 col-md-6\"> \n                                    <input type=\"text\" formControlName=\"lastName\" id=\"lastName\" placeholder=\"Enter Last Name\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && verifyVal.lastName.errors}\">\n                                    <div *ngIf=\"submitted && verifyVal.lastName.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"verifyVal.lastName.errors.required\">Field is required</div>\n                                    </div> \n                                </div> \n                              \n                          </div>   \n                          <br> \n                          \n                            <!-- Password and Confirm Password -->\n                           <div class=\"row\">\n                              <div class=\"col-sm-6 col-md-6\">\n                                  <input type=\"password\" formControlName=\"password\" id=\"password\" placeholder=\"Enter Password\" class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && verifyVal.password.errors}\">\n                                  <div *ngIf=\"submitted && verifyVal.password.errors\" class=\"invalid-feedback\">\n                                          <div *ngIf=\"verifyVal.password.errors.required\">Field is required</div>\n                                  </div>\n                              </div> \n                              <div class=\"col-sm-6 col-md-6\">\n                                  <input type=\"password\" formControlName=\"cnfpassword\" id=\"cnfpassword\" placeholder=\"Enter Confirm Password\"  class=\"form-control required\" [ngClass]=\"{ 'is-invalid': submitted && verifyVal.cnfpassword.errors}\">\n                                  <div *ngIf=\"submitted && verifyVal.cnfpassword.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"verifyVal.cnfpassword.errors.required\">Field is required</div>\n                                  </div>\n                              </div>                                                \n                          </div>  \n                          <br> \n                           \n                          <!-- Newsletter  -->\n                          <div class=\"row\">\n                              <input type=\"hidden\" formControlName=\"maling_list\" value=\"1\" [ngModel]=\"1\">\n                                <label class=\"col-md-12 col-sm -12\">\n                                  <h4><b>Newsletter</b></h4>\n                                </label>\n                              \n                                <div class=\"col-sm-12 col-md-12\" id=\"newsLetterMessage\" *ngIf=\"newsLetterMessage\"> \n                                  <b>At Least One Option Must Be Selected :</b>\n                                </div><br>\n    \n                                <div class=\"col-sm-6 col-md-6\" *ngFor=\"let newsbox of mailing_list;let n = index \">\n                                  <label> {{newsbox.short_tag}} \n                                      <input type=\"checkbox\"   (change)=\"onChangeNewsLetter(newsbox.id,$event.target.checked)\"> \n                                  </label>                             \n                                </div>\n                          </div> \n    \n    \n                           <!-- Professional OverView  -->\n                          <div class=\"row\">\n                              <input type=\"hidden\" formControlName=\"formData\">\n                              <div  class=\"col-sm-6 col-md-6\" *ngFor='let category of formData'>\n                                <div *ngIf=\"category.group_fields_title != 'Company Name' && category.group_fields_title != 'Summary' \">\n                                  <label><b>{{category.group_fields_title}} </b></label>\n                                  <select id={{category.group_fields_title}} class=\"form-control required\" (change)=\"createObjectOverView(category.group_fields_title,$event.target.value)\" required >\n                                    <option value=\"\">Select {{category.group_fields_title}}</option>\n                                    <option *ngFor=\"let subCategory of (category.option_data.split('$|$'))\" value=\"{{subCategory}}\">{{ subCategory }}</option>\n                                  </select>\n                                </div>\n                              </div> \n                          </div> \n    \n                          <br>\n                          \n                           <button class=\"btn btn-primary form-control\" type=\"submit\">Submit</button>\n                      </form>                   \n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n    </div>\n    \n    \n    \n    \n    \n    \n    ",
        styles: [".description{min-height:500px}"]
      }]
    }];
    /** @nocollapse */

    UsersVerifyEmailComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: UsersVerifyEmailService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    UsersVerifyEmailComponent.propDecorators = {
      autoShownModal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['autoShownModal', {
          static: false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/users/Components/user-profile/user-profile.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var UserProfileComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ActivatedRoute
       */
      function UserProfileComponent(ActivatedRoute) {
        _classCallCheck(this, UserProfileComponent);

        this.ActivatedRoute = ActivatedRoute;
        this.message = false;
      }
      /**
       * @return {?}
       */


      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.ActivatedRoute.data.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this28.magazineId = data.magazineId;
          });

          if (localStorage.getItem('authDetails' + this.magazineId)) {
            /** @type {?} */
            var data = JSON.parse(localStorage.getItem('authDetails' + this.magazineId));
            this.message = true;
          } else {}
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-user-profile',
        template: "<!-- \n<div class=\"text-center\"><p> Core user-profile works!</p>\n    <h3>Users Profile</h3>\n</div>     -->\n\n\n\n\n<div class=\"text-center\" *ngIf=\"message; else showLoginRequestMessage\">\n    <h2>Hello You Are Login</h2>\n</div> \n    <ng-template #showLoginRequestMessage>\n        <div class=\"text-center\" > <h2>Hello, please login to access the User app</h2></div>\n    </ng-template>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/users/Components/company-content-authenticate/company-content-authenticate.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CompanyContentAuthenticateComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} Router
       * @param {?} RodmanCoreService
       */
      function CompanyContentAuthenticateComponent(Router, RodmanCoreService) {
        _classCallCheck(this, CompanyContentAuthenticateComponent);

        this.Router = Router;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @return {?}
       */


      _createClass(CompanyContentAuthenticateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @param {?} filePath
         * @return {?}
         */

      }, {
        key: "downloadFile",
        value: function downloadFile(filePath) {
          /** @type {?} */
          var newWindow = window.open(filePath);
        }
      }]);

      return CompanyContentAuthenticateComponent;
    }();

    CompanyContentAuthenticateComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-company-content-authenticate',
        template: "<div class=\"container\">\n    <div class=\"border mt-5 mb-5\" >\n            \n        <p class=\"text-center mt-3\">This content is sponsored by:</p>\n            <div  class=\"text-center\">\n                <img  class=\"img-responsive\" name=\"companyLogo\" style=\"max-width: 350px;\" [src]=\"sendParentMessage.primary_image_main\">\n            </div>\n            <p class=\"text-center\" >\n                <a [routerLink]=\"['/contents/viewwebsite/'+sendParentMessage.id]\">Visit the website</a>\n            </p><br><br>\n            <p class=\"text-center\" >{{ sendParentMessage.title }}</p><br><br>\n            <hr>\n            <div class=\"mt-3 text-center\">\n                <h5 class=\"text-center\">Download today and learn more</h5>\n            </div>\n            \n            <div class=\"col-sm-12 col-md-12\">\n                <div class=\"col-sm-4 col-md-4\"></div>\n                <div class=\"col-sm-8 col-md-8\">\n                    <b>Email :</b> <br>\n                    <input type=\"text\" class=\" text-center form-control\">\n                </div>  \n            </div>\n\n            <div class=\"text-center  mt-3 mb-3\">               \n\n                <ng-container *ngIf=\"link;else default\">\n                    <button *ngIf=\"link\" class=\"download\" (click)=\"downloadFile(link)\"> Download Now</button>\n                </ng-container>\n                <ng-template #default>\n                    <ng-container>\n                        <button *ngIf=\"link\" class=\"download\">Request Info </button>\n                    </ng-container>\n                </ng-template>\n                <!-- <button>Request Info</button> -->\n            </div>\n    </div>    \n\n</div>\n\n",
        styles: [".download{background-color:#d9534f!important;border-color:#d43f3a;color:#fff;padding:2px}h5,p{font-weight:700}"]
      }]
    }];
    /** @nocollapse */

    CompanyContentAuthenticateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: RodmanCoreService
      }];
    };

    CompanyContentAuthenticateComponent.propDecorators = {
      sendParentMessage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      link: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/users/users.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { AuthenticationComponent } from './authentication/authentication.component';


    var UsersModule = function UsersModule() {
      _classCallCheck(this, UsersModule);
    };

    UsersModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [UsersVerifyEmailComponent, UserProfileComponent, CompanyContentAuthenticateComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], UsersRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), rodman_orm__WEBPACK_IMPORTED_MODULE_14__["RodmanORMModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
        exports: [UsersVerifyEmailComponent, UserProfileComponent, CompanyContentAuthenticateComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-default.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ContentDefaultComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo2) {
      _inherits(ContentDefaultComponent, _ContentDynamicViewCo2);

      function ContentDefaultComponent() {
        _classCallCheck(this, ContentDefaultComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentDefaultComponent).apply(this, arguments));
      }

      _createClass(ContentDefaultComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }]);

      return ContentDefaultComponent;
    }(ContentDynamicViewComponent);

    ContentDefaultComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-default',
        template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"default\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                            <!-- <ngb-carousel *ngIf=\"contentData.content_type_id != 2653\">\n                                <ng-template ngbSlide>\n                                    <div class=\"picsum-img-wrapper\">\n                                        <img  [src]=\"contentData.primary_image_main\" alt=\"No Image\" class=\"img-scale full-Size mb-2\">\n                                    </div>\n                                    <div class=\"carousel-caption\"> </div>\n                                </ng-template>\n                        \n                                <ng-template ngbSlide  *ngFor=\"let slideImage of contentData.slider_image;\">\n                                    <div class=\"picsum-img-wrapper\">\n                                        <img  [src]=\"slideImage\" alt=\"No Image\" class=\"img-scale  full-Size mb-2\">\n                                    </div>\n                                    <div class=\"carousel-caption\"> </div>\n                                </ng-template>\n                            </ngb-carousel> -->\n                        \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                    <b> {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>                                \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>     \n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n<div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>  \n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n\n\n",
        styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
      }]
    }];
    ContentDefaultComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-jobs.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentJobsComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo3) {
      _inherits(ContentJobsComponent, _ContentDynamicViewCo3);

      function ContentJobsComponent() {
        _classCallCheck(this, ContentJobsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentJobsComponent).apply(this, arguments));
      }

      _createClass(ContentJobsComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }]);

      return ContentJobsComponent;
    }(ContentDynamicViewComponent);

    ContentJobsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-jobs',
        template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n       \n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"default\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n\n                        \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-4\">\n                                    <b> {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n                            <!-- <div class=\"row\">\n                                <div class=\"col-md-7\" [innerHtml]=\"safeHtml(contentData.body)\"></div>                                \n                                <div class=\"col-md-5\">\n                                    <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                                </div>                            \n                            </div> -->\n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>    \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n\n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n\n\n\n\n<!-- \n\n    <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n        <div class=\"col-md-2 col-sm-2\"></div>\n        <div class=\"col-md-6 col-sm-offset-6\" >\n            <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n        </div>\n        <div class=\"col-md-4 col-sm-4\"></div>\n    </div> -->\n    \n    \n    \n    <div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">\n        <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n        <div >\n            <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n        </div>\n        <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n    </div>   \n        \n        <!-- Related Content -->\n    <!-- <div class=\"row\" *ngFor=\"let contentData of ContentInterface\" >\n        <div class=\"col-sm-2 col-md-2\" ></div>\n        <div class=\"col-sm-6 col-md-6\" >\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n        </div>\n        <div class=\"col-sm-4 col-md-4\" ></div>    \n    </div>   -->\n\n\n \n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>",
        styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
      }]
    }];
    ContentJobsComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-feature.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentFeatureComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo4) {
      _inherits(ContentFeatureComponent, _ContentDynamicViewCo4);

      function ContentFeatureComponent() {
        _classCallCheck(this, ContentFeatureComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentFeatureComponent).apply(this, arguments));
      }

      _createClass(ContentFeatureComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }]);

      return ContentFeatureComponent;
    }(ContentDynamicViewComponent);

    ContentFeatureComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-feature',
        template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"feature\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                        \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                    <b> \n                                        {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n                            <div class=\"releted_nws\">\n                                    <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                                </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>  \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n<!-- Slider Show -->\n<div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n    \n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>",
        styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
      }]
    }];
    ContentFeatureComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-video.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentVideoComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo5) {
      _inherits(ContentVideoComponent, _ContentDynamicViewCo5);

      function ContentVideoComponent() {
        _classCallCheck(this, ContentVideoComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentVideoComponent).apply(this, arguments));
      }

      _createClass(ContentVideoComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
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
      }]);

      return ContentVideoComponent;
    }(ContentDynamicViewComponent);

    ContentVideoComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-video',
        template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>    \n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n                <div class=\"col-md-8\">\n                    <div class=\"container mb-3 mt-4\" id=\"video\"  *ngFor=\"let contentData of ContentInterface\">\n                        <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                        <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                        <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5> \n                        <div class=\"row\">\n                            <iframe width=\"800\" height=\"420\" [src]=\"videoPath\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                        </div>                    \n                        <div class=\"row\">\n                            <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                <b>{{ extractNameFromJson(contentData.author_name) }} {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                            </div>\n                        </div> \n                        <div class=\"row\" >\n                            <div class=\"col-md-12 col-sm-12 body-min-height\" [innerHtml]=\"safeHtml(contentData.body)\"></div>   \n                            <div class=\"col-md-12 col-sm-12\">\n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>  \n                            </div>     \n                        </div>\n                    </div> \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"col-md-12 col-sm-12 mb-2\">\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                        <CoreLib-content-box-tabs *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>\n                    </div>\n                </div>\n            </div>    \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n    \n<div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div>\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n        \n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>\n",
        styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
      }]
    }];
    ContentVideoComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-webinars.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentWebinarsComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo6) {
      _inherits(ContentWebinarsComponent, _ContentDynamicViewCo6);

      function ContentWebinarsComponent() {
        _classCallCheck(this, ContentWebinarsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentWebinarsComponent).apply(this, arguments));
      }

      _createClass(ContentWebinarsComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }]);

      return ContentWebinarsComponent;
    }(ContentDynamicViewComponent);

    ContentWebinarsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-webinars',
        template: "\n    <div class=\"col-md-12 col-sm-12 text-center\" >\n            <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n        </div>\n        \n    <div class=\"row\">\n        <div class=\"col-md-2 col-sm-2\"> </div>\n        <div class=\"col-md-6 col-sm-6\">\n    \n            <div *ngIf=\"ContentInterface\">\n                <div class=\"container mb-3 mt-4\" id=\"webinars\"  *ngFor=\"let contentData of ContentInterface\">\n                    <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                    <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                    <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                \n                    <div class=\"row\">\n                        <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                            <b>{{ extractNameFromJson(contentData.author_name) }} {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                        </div>\n                    </div> \n\n                    <div class=\"releted_nws\">\n                        <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                    </div> \n                    <div class=\"row_contian\">                            \n                        <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>  \n                    </div>\n                </div>                   \n            </div>  \n    \n        </div>\n       \n        <!-- Tabbing Right Side -->\n        <div class=\"col-md-4 col-sm-4 mt-4\" *ngFor=\"let contentData of ContentInterface\">\n            <div class=\"col-md-12 col-sm-12\">\n            <div class=\"col-md-10 col-sm-10\">\n                <div class=\"col-md-12 col-sm-12 mb-2\">\n                    <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                </div>\n                    <CoreLib-content-box-tabs magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                <div class=\"col-md-12 col-sm-12 mb-2\" >\n                    <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>\n                </div>\n                <div class=\"col-md-12 col-sm-12 mb-2\" >\n                    <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>\n                </div>\n            </div>\n            <div class=\"col-md-2 col-sm-2\"></div>\n            </div> \n        </div>     \n    </div>  \n    \n    \n    \n<div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div>\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n\n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>\n    ",
        styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
      }]
    }];
    ContentWebinarsComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-formulary.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentFormularyComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo7) {
      _inherits(ContentFormularyComponent, _ContentDynamicViewCo7);

      function ContentFormularyComponent() {
        _classCallCheck(this, ContentFormularyComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentFormularyComponent).apply(this, arguments));
      }

      _createClass(ContentFormularyComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }]);

      return ContentFormularyComponent;
    }(ContentDynamicViewComponent);

    ContentFormularyComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-formulary',
        template: "\n<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n               <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"default\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                         \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                    <b> {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n\n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' heading='Related Formulary' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>    \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n   \n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n\n<!-- Slider Show -->\n<div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n    \n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>",
        styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
      }]
    }];
    ContentFormularyComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-buyer-guide-basic.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentBuyerGuideBasicComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo8) {
      _inherits(ContentBuyerGuideBasicComponent, _ContentDynamicViewCo8);

      function ContentBuyerGuideBasicComponent() {
        _classCallCheck(this, ContentBuyerGuideBasicComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentBuyerGuideBasicComponent).apply(this, arguments));
      }

      _createClass(ContentBuyerGuideBasicComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }]);

      return ContentBuyerGuideBasicComponent;
    }(ContentDynamicViewComponent);

    ContentBuyerGuideBasicComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-buyer-guide-basic',
        template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n        <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n    </div>\n    \n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"bgbasic\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                        \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                    <b> {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n\n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>                                \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>     \n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n\n<!-- Slider Show -->\n<div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n       \n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-6 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>"
      }]
    }];
    ContentBuyerGuideBasicComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-buyer-guide-micro-site.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentBuyerGuideMicroSiteComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo9) {
      _inherits(ContentBuyerGuideMicroSiteComponent, _ContentDynamicViewCo9);

      function ContentBuyerGuideMicroSiteComponent() {
        _classCallCheck(this, ContentBuyerGuideMicroSiteComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentBuyerGuideMicroSiteComponent).apply(this, arguments));
      }

      _createClass(ContentBuyerGuideMicroSiteComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }]);

      return ContentBuyerGuideMicroSiteComponent;
    }(ContentDynamicViewComponent);

    ContentBuyerGuideMicroSiteComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-buyer-guide-micro-site',
        template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n        <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n    </div>\n    \n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface?.length > 0\">\n                        <div class=\"container mb-3 mt-4\" id=\"bgmicrosite\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                        \n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                    <b> {{ extractNameFromJson(contentData.author_name) }} \n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n \n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\">                                    \n                                <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>                                \n                                <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>     \n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n\n<!-- Slider Show -->\n<div class=\"container-fluid\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n    \n    <!-- Related Content -->\n<!-- <div class=\"row\" *ngFor=\"let contentData of ContentInterface\" >\n    <div class=\"col-sm-2 col-md-2\" ></div>\n    <div class=\"col-sm-6 col-md-6\" >\n        <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n    </div>\n    <div class=\"col-sm-4 col-md-4\" ></div>    \n</div>       -->\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>"
      }]
    }];
    ContentBuyerGuideMicroSiteComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-slide-show.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentSlideShowComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo10) {
      _inherits(ContentSlideShowComponent, _ContentDynamicViewCo10);

      function ContentSlideShowComponent() {
        _classCallCheck(this, ContentSlideShowComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentSlideShowComponent).apply(this, arguments));
      }

      _createClass(ContentSlideShowComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }]);

      return ContentSlideShowComponent;
    }(ContentDynamicViewComponent);

    ContentSlideShowComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-slide-show',
        template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n        <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n    </div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"ContentInterface\">\n                        <div class=\"container mb-3 mt-4\" id=\"slideShow\"  *ngFor=\"let contentData of ContentInterface\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                            <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                            <div class=\"row\">\n                                <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-4\">\n                                    <b>{{ extractNameFromJson(contentData.author_name) }} {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n                            <div class=\"row\">\n                                <div class=\"col-md-12 col-sm-12 body-min-height\" [innerHtml]=\"safeHtml(contentData.body)\"></div>\n                                <div class=\"col-md-12 col-sm-12\" >   <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches></div>\n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>\n\n        \n        </div>\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n<div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div>\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>",
        styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
      }]
    }];
    ContentSlideShowComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-static-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentStaticContentComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo11) {
      _inherits(ContentStaticContentComponent, _ContentDynamicViewCo11);

      function ContentStaticContentComponent() {
        _classCallCheck(this, ContentStaticContentComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentStaticContentComponent).apply(this, arguments));
      }

      _createClass(ContentStaticContentComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
      }]);

      return ContentStaticContentComponent;
    }(ContentDynamicViewComponent);

    ContentStaticContentComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-static-content',
        template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngIf=\"ContentInterface?.length > 0\">\n                <div class=\"col-md-8\">\n                    <div class=\"container mb-3 mt-4\" id=\"staticContent\"  *ngFor=\"let contentData of ContentInterface\">\n                        <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                        <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                        <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                    \n                        <div class=\"row\">\n                            <div class=\" col-sm-12 col-md-12 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\">\n                                <b>{{ extractNameFromJson(contentData.author_name) }} {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                            </div>\n                        </div> \n\n                        <div class=\"releted_nws\">\n                            <CoreLib-content-related *ngIf=\"ContentInterface\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                        </div> \n                        <div class=\"row_contian\">                                \n                            <div class=\"releted_post\" [innerHtml]=\"safeHtml(contentData.body)\"></div>      \n                            <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n                        </div>\n                    </div> \n\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"ContentInterface?.length > 0\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of ContentInterface\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div>\n            </div>  \n        </div>\n        <div class=\"col\">\n            <div >\n                <!-- <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n\n\n\n\n\n\n<!-- \n    <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n        <div class=\"col-md-2 col-sm-2\"></div>\n        <div class=\"col-md-6 col-sm-offset-6\" >\n            \n        </div>\n        <div class=\"col-md-4 col-sm-4\"></div>\n    </div>\n     -->\n    \n    \n    <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n        <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n        <div >\n            <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n        </div>\n        <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n    </div>   \n        \n        <!-- Related Content -->\n    <!-- <div class=\"row\" *ngFor=\"let contentData of ContentInterface\" >\n        <div class=\"col-sm-2 col-md-2\" ></div>\n        <div class=\"col-sm-6 col-md-6\" >\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n        </div>\n        <div class=\"col-sm-4 col-md-4\" ></div>    \n    </div>   -->\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div></div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\" *ngFor=\"let contentData of ContentInterface\">\n                <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div ></div>\n        </div>\n    </div>   \n</div>",
        styles: [".line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.body-min-height{min-height:60px}"]
      }]
    }];
    ContentStaticContentComponent.propDecorators = {
      ads: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-white-paper.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentWhitePaperComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo12) {
      _inherits(ContentWhitePaperComponent, _ContentDynamicViewCo12);

      function ContentWhitePaperComponent() {
        _classCallCheck(this, ContentWhitePaperComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContentWhitePaperComponent).apply(this, arguments));
      }

      _createClass(ContentWhitePaperComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {// alert('sfdsf')
        }
      }]);

      return ContentWhitePaperComponent;
    }(ContentDynamicViewComponent);

    ContentWhitePaperComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-white-paper',
        template: "    <div class=\"row mb-3\">\n        <div class=\"col-md-2 col-sm-2\"> </div>\n        <div class=\"col-md-5 col-sm-5\">\n    \n            <div *ngIf=\"ContentInterface\">\n                <div class=\"container mb-3 mt-4\" id=\"whitepaper\"  *ngFor=\"let contentData of ContentInterface\">\n                    <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                    <!-- <h1 id=\"default\">{{contentData.title}}</h1> -->\n                    <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                    <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n               \n                    <div class=\"row border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\" >\n                        <!-- <div class=\"col-sm-12 col-md-12\"> -->\n                            <div class=\"col-sm-4 col-md-4\" *ngIf=\"contentData.companyDetail.title\">\n                               <b> Released by </b> {{contentData.companyDetail.title}} \n                            </div> \n                            <div class=\"col-sm-6 col-md-6\">\n                                <b>{{ extractNameFromJson(contentData.author_name) }}</b>\n                            </div>\n                            <div class=\"col-sm-2 col-md-2\" *ngIf=\"contentData.publish_date\">\n                                {{contentData.publish_date | date : \"MMM dd , yyyy\"}}\n                            </div> \n                        <!-- </div> -->\n                    </div> \n                    <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12\" [innerHtml]=\"safeHtml(contentData.body)\"></div>\n                \n                    </div>\n                </div>                   \n            </div>  \n    \n        </div>\n       \n        <!-- Tabbing Right Side -->\n        <div class=\"col-md-3 col-sm-3 mt-4\" *ngFor=\"let contentData of ContentInterface\">\n            <CoreLib-company-content-authenticate [link]=\"contentData.link\" [sendParentMessage]=\"contentData.companyDetail\"></CoreLib-company-content-authenticate>\n        </div>     \n        <div class=\"col-md-2 col-sm-2\"></div>\n    </div>  \n    \n    <hr>\n\n<div class=\"row mb-3\">\n    <div class=\"col-md-2 col-sm-2\"> </div>\n    <div class=\"col-md-5 col-sm-5\">\n        <div *ngIf=\"ContentInterface\">\n            <!-- <div class=\"container mb-3 mt-4\" *ngFor=\"let contentData of ContentInterface\">  -->\n            <div class=\"container mb-3 mt-4\" *ngFor=\"let contentData of ContentInterface\"> \n                <div class=\"row\" *ngIf=\"(contentData.companyDetail.id && contentData.content_type_id)\">\n                    <div class=\"col-md-12 col-sm-12\">\n                        <h3 class=\"back-color\">\n                            More White Papers / Tech Papers by {{contentData.companyDetail.title}}\n                        </h3>\n                    </div>                \n                    <div class=\"col-md-12 col-sm-12\">\n                        <CoreLib-content-company-related [magazineId]=\"contentData.magazine_id\" [companyId]=\"contentData.companyDetail.id\" [contentType]=\"contentData.content_type_id\" ></CoreLib-content-company-related>\n                    </div>      \n                </div>\n                <div class=\"row\" *ngIf=\"contentData.companyDetail.id\">\n                    <div class=\"col-md-12 col-sm-12\">\n                        <h3 class=\"back-color\">\n                            Related Content {{contentData.companyDetail.title}}\n                        </h3>\n                    </div>                \n                    <div class=\"col-md-12 col-sm-12\">\n                        <CoreLib-content-company-related [magazineId]=\"contentData.magazine_id\" [companyId]=\"contentData.companyDetail.id\" [contentType]=\"\" ></CoreLib-content-company-related>\n                    </div>      \n                </div>\n            </div>                   \n        </div>      \n    </div>\n    <div class=\"col-md-3 col-sm-3 mt-4\"></div>     \n    <div class=\"col-md-2 col-sm-2\"></div>\n</div>     \n\n\n  \n",
        styles: ["h2{ background-color:#ccc; } .back-color{background-color: #ccc;}"]
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-dynamic-view/content-news-release.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentNewsReleaseComponent =
    /*#__PURE__*/
    function (_ContentDynamicViewCo13) {
      _inherits(ContentNewsReleaseComponent, _ContentDynamicViewCo13);

      function ContentNewsReleaseComponent() {
        var _this29;

        _classCallCheck(this, ContentNewsReleaseComponent);

        _this29 = _possibleConstructorReturn(this, _getPrototypeOf(ContentNewsReleaseComponent).apply(this, arguments));
        _this29.data = 1;
        return _this29;
      }
      /**
       * @return {?}
       */


      _createClass(ContentNewsReleaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentNewsReleaseComponent;
    }(ContentDynamicViewComponent);

    ContentNewsReleaseComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-news-release',
        template: "    <div class=\"row mb-3\">\n        <div class=\"col-md-2 col-sm-2\"> </div>\n        <div class=\"col-md-5 col-sm-5\">\n    \n            <div *ngIf=\"ContentInterface\">\n                <div class=\"container mb-3 mt-4\" id=\"whitepaper\"  *ngFor=\"let contentData of ContentInterface\">\n                    <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                    <h1 id=\"default\" [innerHtml]=safeHtmlReplace(contentData.title)></h1>\n                    <h5 [innerHtml]=safeHtmlReplace(contentData.summary)></h5>\n                \n                    <div class=\"row border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-2\" >\n                            <!-- <div class=\"col-sm-12 col-md-12\"> -->\n                                <div class=\"col-sm-4 col-md-4\" *ngIf=\"contentData.companyDetail.title\">\n                                    <b> Released by </b> {{contentData.companyDetail.title}} \n                                </div> \n                                <!-- <div class=\"col-sm-6 col-md-6\">\n                                    <b>{{ extractNameFromJson(contentData.author_name) }}</b>\n                                </div> -->\n                                <div class=\"col-sm-2 col-md-2\" *ngIf=\"contentData.publish_date\">\n                                    {{contentData.publish_date | date : \"MMM dd , yyyy\"}}\n                                </div> \n                            <!-- </div> -->\n                        </div> \n                    <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12 body-min-height\" [innerHtml]=\"safeHtml(contentData.body)\"></div>\n                \n                    </div>\n                </div>                   \n            </div>  \n    \n        </div>\n        \n        <!-- Tabbing Right Side -->\n        <div class=\"col-md-3 col-sm-3 mt-4\" *ngFor=\"let contentData of ContentInterface\">\n            <CoreLib-company-content-authenticate [link]=\"contentData.link\" [sendParentMessage]=\"contentData.companyDetail\"></CoreLib-company-content-authenticate>\n        </div>     \n        <div class=\"col-md-2 col-sm-2\"></div>\n    </div>  \n    \n    <hr>\n\n<div class=\"row mb-3\">\n    <div class=\"col-md-2 col-sm-2\"> </div>\n    <div class=\"col-md-5 col-sm-5\">\n        <div *ngIf=\"ContentInterface\">\n            <div class=\"container mb-3 mt-4\" *ngFor=\"let contentData of ContentInterface\"> \n                <div class=\"row\" *ngIf=\"(contentData.companyDetail.id && contentData.content_type_id)\">\n                    <div class=\"col-md-12 col-sm-12\">\n                        <h3 class=\"back-color\">\n                            More  News Releases by {{contentData.companyDetail.title}}\n                        </h3>\n                    </div>                \n                    <div class=\"col-md-12 col-sm-12\">\n                            <CoreLib-content-company-related [magazineId]=\"contentData.magazine_id\" [companyId]=\"contentData.companyDetail.id\" [contentType]=\"contentData.content_type_id\" ></CoreLib-content-company-related> \n                    </div>      \n                </div>\n            </div>                   \n        </div>      \n    </div>\n    <div class=\"col-md-3 col-sm-3 mt-4\"></div>     \n    <div class=\"col-md-2 col-sm-2\"></div>\n</div>     \n    \n    \n<div class=\"row mb-3\">\n    <div class=\"col-md-2 col-sm-2\"> </div>\n    <div class=\"col-md-5 col-sm-5\">\n        <div *ngIf=\"ContentInterface\">\n            <div class=\"container mb-3 mt-4\" *ngFor=\"let contentData of ContentInterface\"> \n                <div class=\"row\" *ngIf=\"contentData.companyDetail.id\">\n                    <div class=\"col-md-12 col-sm-12\">\n                        <h3 class=\"back-color\">\n                            Related Content {{contentData.companyDetail.title}}\n                        </h3>\n                    </div>                \n                    <div class=\"col-md-12 col-sm-12\">\n                        <CoreLib-content-company-related [magazineId]=\"contentData.magazine_id\" [companyId]=\"contentData.companyDetail.id\" [contentType]=\"\" ></CoreLib-content-company-related>\n                    </div>      \n                </div>\n            </div>                   \n        </div>      \n    </div>\n    <div class=\"col-md-3 col-sm-3 mt-4\"></div>     \n    <div class=\"col-md-2 col-sm-2\"></div>\n</div>         \n    ",
        styles: [" h2{ background-color:#ccc} .back-color{ background-color: #ccc;}"]
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-company-related/content-company-related.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentCompanyRelatedService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function ContentCompanyRelatedService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ContentCompanyRelatedService);

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


      _createClass(ContentCompanyRelatedService, [{
        key: "getContentRelated",
        value: function getContentRelated(magazineId, limit, page, companyId, contentType) {
          return this.HttpClient.post(apiURL + 'taxonomysController/getContentReleated', {
            contentType: contentType,
            magazineId: magazineId,
            limit: limit,
            page: page,
            companyId: companyId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ContentCompanyRelatedService;
    }();

    ContentCompanyRelatedService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ContentCompanyRelatedService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    ContentCompanyRelatedService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ContentCompanyRelatedService_Factory() {
        return new ContentCompanyRelatedService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: ContentCompanyRelatedService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-company-related/content-company-related.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentCompanyRelatedComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ContentCompanyRelatedService
       * @param {?} RodmanCoreService
       */
      function ContentCompanyRelatedComponent(ContentCompanyRelatedService, RodmanCoreService) {
        _classCallCheck(this, ContentCompanyRelatedComponent);

        this.ContentCompanyRelatedService = ContentCompanyRelatedService;
        this.RodmanCoreService = RodmanCoreService;
        this.page = 0;
        this.limit = 10;
        this.loading = true;
      }
      /**
       * @return {?}
       */


      _createClass(ContentCompanyRelatedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {} // this.getData();

        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "")
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getData",
        value: function getData() {
          var _this30 = this;

          this.ContentCompanyRelatedService.getContentRelated(this.magazineId, this.limit, this.page, this.companyId, this.contentType).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this30.relatedData = data['data'];
            _this30.loading = false;
          });
        }
      }]);

      return ContentCompanyRelatedComponent;
    }();

    ContentCompanyRelatedComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-company-related',
        template: "<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n    \n\n<div *ngFor=\"let data of relatedData;let i =index\">     \n\n        <ng-container  *ngIf=\"contentType;else defaultView\">\n            <!-- <p><span class=\"bg-primary\">{{data.tag}}</span></p> -->\n            <p><span><b>{{data.tag}}</b></span></p>\n            <h4><a [routerLink]=\"['/'+data.viewUrl]\">\n            <div [innerHTML]=\"safeHtml(data.title)\"> </div>\n            </a></h4>\n            <div [innerHTML]=\"safeHtml(data.summary)\"></div>\n            <p>{{data.publish_date | date : \"MMM dd , yyyy\"}}</p>\n        </ng-container>\n\n    \n        <ng-template #defaultView>\n            <ng-container> \n                <h4><a [routerLink]=\"['/'+data.viewUrl]\">\n                    <div [innerHTML]=\"safeHtml(data.title)\"> </div>\n                </a></h4>\n                <div [innerHTML]=\"safeHtml(data.summary)\"></div>\n                <p> <span class=\"\"><b>{{data.tag}}</b></span>  Released on  {{data.publish_date | date : \"MMM dd , yyyy\"}}</p>\n            </ng-container> \n        </ng-template>\n\n    <hr>\n</div>\n\n\n\n",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    ContentCompanyRelatedComponent.ctorParameters = function () {
      return [{
        type: ContentCompanyRelatedService
      }, {
        type: RodmanCoreService
      }];
    };

    ContentCompanyRelatedComponent.propDecorators = {
      magazineId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      companyId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      contentType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-related-content-list/content-related-content-list.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentRelatedContentListComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} Router
       * @param {?} ListContentService
       * @param {?} RodmanCoreService
       */
      function ContentRelatedContentListComponent(Router, ListContentService, RodmanCoreService) {
        var _this31 = this;

        _classCallCheck(this, ContentRelatedContentListComponent);

        this.Router = Router;
        this.ListContentService = ListContentService;
        this.RodmanCoreService = RodmanCoreService;
        this.listContentData = [];
        this.limit = 10;
        this.page = 0;
        this.contentType = '';
        this.loading = true;
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this31.currentURL = event.url;
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(ContentRelatedContentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // this.getContentData();

        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.page = 0;
          this.slugHeading;
          this.listContentData = [];
          this.getContentData();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getContentData",
        value: function getContentData() {
          var _this32 = this;

          this.taxonomyUrl = this.routeUrl.split('/');
          this.taxonomyUrl = this.taxonomyUrl[this.taxonomyUrl.length - 1];
          /** @type {?} */

          var url = this.taxonomyUrl.split('_');
          this.taxonomyUrlTo = url[1];
          this.ListContentService.getContent(this.routeUrl, this.magazineId, this.limit, this.page, this.contentType).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this32.contentData = data['data'];

            if (_this32.page == 0) {
              _this32.slugHeading = data['contentTypeName']; // this.contentTaxonomy = data['CONTENT_TAXONOMYS'];
            }

            _this32.page = data['page'] + 1;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = _this32.contentData[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var content = _step4.value;

                _this32.listContentData.push(content);
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            _this32.loading = false;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "loadMoreData",
        value: function loadMoreData() {
          this.loading = true;
          this.getContentData();
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "bodyCharacterLength",
        value: function bodyCharacterLength(data) {
          return this.RodmanCoreService.bodyCharacterLength(data);
        }
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "extractNameFromJson",
        value: function extractNameFromJson(data) {
          return this.RodmanCoreService.extractNameFromJson(data);
        }
      }]);

      return ContentRelatedContentListComponent;
    }();

    ContentRelatedContentListComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-related-content-list',
        inputs: ['routeUrl', 'magazineId', 'contentType'],
        template: "<!-- Every Page Bottom -->\n<div class=\"container mt-5\" id=\"content-related-content-list\" *ngIf=\"contentType!='2542'\">\n    <div class=\"mb-2\" *ngIf=\"slugHeading\"><h2>Related {{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>\n            <div class=\"heading-border\"></div>\n    <div *ngIf=\"listContentData?.length > 0\" >\n    <div  *ngFor=\"let Data of listContentData | slice:1; let i =index\" >    \n        <div class=\"col-md-12 col-sm-12\">\n            <div class=\"row\">                            \n                <div class=\"col-md-9 col-sm-9\">\n                    <h4 class=\"mt-2\">\n                        <a [routerLink]=\"[Data.viewUrl]\">\n                            <b> <div [innerHTML]=\"safeHtml(Data.title)\"> </div> </b>\n                        </a>\n                    </h4> \n                    <h6 class=\"mt-3\" *ngIf=\"Data.summary\">{{safeHtml(Data.summary)}}</h6>\n                    <h6 class=\"mt-3\" *ngIf=\"(!Data.summary) && (Data.body)\">{{bodyCharacterLength(Data.body)}}</h6>\n                    <div class=\"mt-2\"> \n                        <!-- <span *ngIf=\"Data.firstName\"> By <small> <b> {{Data.firstName}} {{Data.lastName}}</b> </small></span>  -->\n                        <span *ngIf=\"Data.author_name\"> {{extractNameFromJson(Data.author_name)}}  </span>\n                        <div *ngIf=\"slugHeading == 'Glossary'\" [innerHtml]=\"safeHtml(Data.body)\"> </div> \n                        <small *ngIf=\"Data.publish_date\">{{ Data.publish_date| date : \"MMM dd , yyyy\"}}</small>\n                    </div>    \n                </div>\n                <div class=\"col-md-3 col-sm-3\" *ngIf=\"(slugHeading != 'Glossary') && (Data.primary_image)\">\n                    <img class=\"img-scale\"  [src]=\"getImage(Data.primary_image)\">\n                </div>\n            </div>\n        </div>   \n\n        <div class=\"col-md-12 col-sm-12\" id=\"ads\" *ngIf=\"(i % 3 == 0) && (i > 2)\" ><hr>\n            <div class=\"row align-ads\"> \n                <CoreLib-ads-double-click magazineId={{magazineId}} no=\"1\" location={{currentURL}}></CoreLib-ads-double-click>\n            </div>\n        </div><hr>     \n    </div>   \n    </div>         \n</div>\n\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n       \n\n<div class=\"container mt-5 mb-3\" *ngIf=\"listContentData?.length > 0  && contentType!='2542'\">\n    <div class=\"row\" *ngIf=\"contentData?.length > 9 \"> \n        <div class=\"col-md-4 col-sm-4\"></div>\n            <div class=\"col-md-4 col-sm-4\">    <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button></div>\n        <div class=\"col-md-4 col-sm-4\"></div>\n    </div>   \n</div>",
        styles: [".img-scale{max-width:250px}.heading-border{border-bottom:1px solid #000;color:#000}.taxonomy-text{margin:5px;font-size:18px}.align-ads{margin-left:0!important}"]
      }]
    }];
    /** @nocollapse */

    ContentRelatedContentListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ListContentService
      }, {
        type: RodmanCoreService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-related-searches/content-related-searches.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentRelatedSearchesComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} Router
       */
      function ContentRelatedSearchesComponent(Router) {
        _classCallCheck(this, ContentRelatedSearchesComponent);

        this.Router = Router;
      }
      /**
       * @return {?}
       */


      _createClass(ContentRelatedSearchesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentRelatedSearchesComponent;
    }();

    ContentRelatedSearchesComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-related-searches',
        template: "<div  *ngIf=\"dataArray\" class=\"mt-3 mb-3\">\n    <div *ngIf=\"dataArray[0]\"> <h3>Related Searches</h3></div>\n    <span class=\"taxonomy-text\" *ngFor=\"let search of dataArray | slice:0:5;let i=index\" >\n        <a [routerLink]=\"['/contents/searchcontent/all/'+search.tag]\"  > {{search.tag}}  </a>\n    </span>\n</div>\n",
        styles: [".taxonomy-text{font-size:15px;background-color:#f2f2f2;font-weight:501;text-transform:uppercase;margin-right:15px;margin-bottom:10px;display:inline-block;letter-spacing:1px}.taxonomy-text a{padding:10px}"]
      }]
    }];
    /** @nocollapse */

    ContentRelatedSearchesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ContentRelatedSearchesComponent.propDecorators = {
      dataArray: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-glossary/content-glossary.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentGlossaryComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ActivatedRoute
       * @param {?} Router
       * @param {?} ListContentService
       * @param {?} RodmanCoreService
       */
      function ContentGlossaryComponent(ActivatedRoute, Router, ListContentService, RodmanCoreService) {
        _classCallCheck(this, ContentGlossaryComponent);

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


      _createClass(ContentGlossaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.ActivatedRoute.data.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this33.magazineId = data.magazineId;
          });
          this.ListContentService.getContent('glossary', this.magazineId, 10, 0, '').subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this33.glossaryData = data['data'];

            _this33.getads();

            _this33.loading = false;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getads",
        value: function getads() {
          var _this34 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this34.getAllAd = data;
            _this34.viewAdRender = 1;
          });
        }
        /**
         * @param {?} current
         * @param {?} pre
         * @return {?}
         */

      }, {
        key: "matchCharacter",
        value: function matchCharacter(current, pre) {
          if (current.charAt(0) != pre) {
            this.current_letter = current.charAt(0);
            return true;
          }

          return false;
        }
      }]);

      return ContentGlossaryComponent;
    }();

    ContentGlossaryComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-glossary',
        template: "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\"  >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<div class=\"row\" *ngIf=\"glossaryData?.length > 0\">\n    <div class=\"col-md-2 col-sm-2\"> </div>\n    <div class=\"col-md-8 col-sm-8 mt-5\">\n        <div class=\"row\">            \n            <!-- <div class=\"col-md-12 col-sm-12\" > -->\n                <div class=\"col-md-8 col-sm-8\" >\n                    <div class=\"col-md-6 col-sm-6\" *ngFor=\"let item of glossaryData; let i = index; let even = even;\">      \n                        <div class=\"col-md-12 col-sm-12 border-bottom mt-3\" id=\"{{current_letter}}\" *ngIf=\"matchCharacter(item.title,current_letter)\">\n                            <b><h4>{{current_letter}}</h4></b><br>\n                        </div>\n                        <!-- <div class=\"col-md-12 col-sm-12\" *ngIf=\"matchCharacter(item.title,current_letter)\">\n                            <br><hr>\n                        </div>     -->                              \n                            <a  [routerLink]=\"['/'+item.viewUrl]\">{{ item.title }} </a>                     \n                    </div>    \n                </div>\n                <div class=\"col-md-4 col-sm-4\" >\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>\n                    </div>\n                </div>\n            <!-- </div>          -->\n        </div>\n    </div>  \n</div>  ",
        styles: [".half-space{margin-right:10px}"]
      }]
    }];
    /** @nocollapse */

    ContentGlossaryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ListContentService
      }, {
        type: RodmanCoreService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-issue/content-issue.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentIssueService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function ContentIssueService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ContentIssueService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @param {?} slug
       * @return {?}
       */


      _createClass(ContentIssueService, [{
        key: "getIssue",
        value: function getIssue(magazineId, slug) {
          return this.HttpClient.post(apiURL + 'issuescontroller/getIssues', {
            magazineId: magazineId,
            slug: slug
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ContentIssueService;
    }();

    ContentIssueService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ContentIssueService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    ContentIssueService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ContentIssueService_Factory() {
        return new ContentIssueService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: ContentIssueService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-issue/content-issue.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentIssueComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} RodmanCoreService
       * @param {?} ActivatedRoute
       * @param {?} Router
       * @param {?} ContentIssueService
       */
      function ContentIssueComponent(RodmanCoreService, ActivatedRoute, Router, ContentIssueService) {
        var _this35 = this;

        _classCallCheck(this, ContentIssueComponent);

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
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            /** @type {?} */
            var data = event.url.split('/');
            _this35.checker = data[data.length - 1];
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(ContentIssueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.ActivatedRoute.data.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this36.magazineId = data.magazineId;
          });
        }
      }]);

      return ContentIssueComponent;
    }();

    ContentIssueComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-issue',
        template: "<CoreLib-content-magazine-issue url={{checker}} magazineId={{magazineId}}></CoreLib-content-magazine-issue>\n",
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
        styles: [""]
      }]
    }];
    /** @nocollapse */

    ContentIssueComponent.ctorParameters = function () {
      return [{
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ContentIssueService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-issue-slider/content-issue-slider.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentIssueSliderComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       * @param {?} RodmanCoreService
       */
      function ContentIssueSliderComponent(config, RodmanCoreService) {
        _classCallCheck(this, ContentIssueSliderComponent);

        this.RodmanCoreService = RodmanCoreService;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true; // config.interval = 3000;
        // config.showNavigationArrows = false;
        // config.showNavigationIndicators = false;
      }
      /**
       * @return {?}
       */


      _createClass(ContentIssueSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return ContentIssueSliderComponent;
    }();

    ContentIssueSliderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-issue-slider',
        template: "<ngb-carousel *ngIf=\"sliderData.length > 0 \" [interval]=\"false\">\n            <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(0)\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(0)\"> \n                        <a  [routerLink]=\"['/issues/'+sliderData[0].slug]\"  > \n                            <div class=\"picsum-img-wrapper ml-3\">\n                                <img [src]=\"getImage(sliderData[0].image)\" alt=\"No Image\">\n                            </div>\n                            <div class=\"carousel-caption\">\n                                <p>{{safeHtmlReplace(sliderData[0].issue_title)}}</p>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(1))\"> \n                        <a  [routerLink]=\"['/issues/'+sliderData[1].slug]\"  > \n                            <div class=\"picsum-img-wrapper\">\n                                <img [src]=\"getImage(sliderData[1].image)\" alt=\"No Image\">\n                            </div>\n                            <div class=\"carousel-caption\">\n                                <p>{{safeHtmlReplace(sliderData[1].issue_title)}}</p>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(2))\"> \n                        <a  [routerLink]=\"['/issues/'+sliderData[2].slug]\"  > \n                            <div class=\"picsum-img-wrapper\">\n                                <img [src]=\"getImage(sliderData[2].image)\" alt=\"No Image\">\n                            </div>\n                            <div class=\"carousel-caption\">\n                                <p>{{safeHtmlReplace(sliderData[2].issue_title)}}</p>\n                            </div>\n                        </a>\n                    </div>    \n                    <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(3))\"> \n                            <a  [routerLink]=\"['/issues/'+sliderData[3].slug]\"  > \n                                <div class=\"picsum-img-wrapper\">\n                                    <img [src]=\"getImage(sliderData[3].image)\" alt=\"No Image\">\n                                </div>\n                                <div class=\"carousel-caption\">\n                                    <p>{{safeHtmlReplace(sliderData[3].issue_title)}}</p>\n                                </div>\n                            </a>\n                        </div>                                          \n                </div>\n            </ng-template>\n\n            <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(4)\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(4)\"> \n                            <a  [routerLink]=\"['/issues/'+sliderData[4].slug]\"  > \n                                <div class=\"picsum-img-wrapper ml-3\">\n                                    <img [src]=\"getImage(sliderData[4].image)\" alt=\"No Image\">\n                                </div>\n                                <div class=\"carousel-caption\">\n                                    <p>{{safeHtmlReplace(sliderData[4].issue_title)}}</p>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(5))\"> \n                            <a  [routerLink]=\"['/issues/'+sliderData[5].slug]\"  > \n                                <div class=\"picsum-img-wrapper\">\n                                    <img [src]=\"getImage(sliderData[5].image)\" alt=\"No Image\">\n                                </div>\n                                <div class=\"carousel-caption\">\n                                    <p>{{safeHtmlReplace(sliderData[5].issue_title)}}</p>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(6))\"> \n                            <a  [routerLink]=\"['/issues/'+sliderData[6].slug]\"  > \n                                <div class=\"picsum-img-wrapper\">\n                                    <img [src]=\"getImage(sliderData[6].image)\" alt=\"No Image\">\n                                </div>\n                                <div class=\"carousel-caption\">\n                                    <p>{{safeHtmlReplace(sliderData[6].issue_title)}}</p>\n                                </div>\n                            </a>\n                        </div>    \n                        <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(7))\"> \n                                <a  [routerLink]=\"['/issues/'+sliderData[7].slug]\"  > \n                                    <div class=\"picsum-img-wrapper\">\n                                        <img [src]=\"getImage(sliderData[7].image)\" alt=\"No Image\">\n                                    </div>\n                                    <div class=\"carousel-caption\">\n                                        <p>{{safeHtmlReplace(sliderData[7].issue_title)}}</p>\n                                    </div>\n                                </a>\n                            </div>                                          \n                    </div>\n                </ng-template>\n\n\n                <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(8)\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(8)\"> \n                                <a  [routerLink]=\"['/issues/'+sliderData[8].slug]\"  > \n                                    <div class=\"picsum-img-wrapper ml-3\">\n                                        <img [src]=\"getImage(sliderData[8].image)\" alt=\"No Image\">\n                                    </div>\n                                    <div class=\"carousel-caption\">\n                                        <p>{{safeHtmlReplace(sliderData[8].issue_title)}}</p>\n                                    </div>\n                                </a>\n                            </div>\n                            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(9))\"> \n                                <a  [routerLink]=\"['/issues/'+sliderData[9].slug]\"  > \n                                    <div class=\"picsum-img-wrapper\">\n                                        <img [src]=\"getImage(sliderData[9].image)\" alt=\"No Image\">\n                                    </div>\n                                    <div class=\"carousel-caption\">\n                                        <p>{{safeHtmlReplace(sliderData[9].issue_title)}}</p>\n                                    </div>\n                                </a>\n                            </div>\n                            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(10))\"> \n                                <a  [routerLink]=\"['/issues/'+sliderData[10].slug]\"  > \n                                    <div class=\"picsum-img-wrapper\">\n                                        <img [src]=\"getImage(sliderData[10].image)\" alt=\"No Image\">\n                                    </div>\n                                    <div class=\"carousel-caption\">\n                                        <p>{{safeHtmlReplace(sliderData[10].issue_title)}}</p>\n                                    </div>\n                                </a>\n                            </div>    \n                            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(11))\"> \n                                    <a  [routerLink]=\"['/issues/'+sliderData[11].slug]\"  > \n                                        <div class=\"picsum-img-wrapper\">\n                                            <img [src]=\"getImage(sliderData[11].image)\" alt=\"No Image\">\n                                        </div>\n                                        <div class=\"carousel-caption\">\n                                            <p>{{safeHtmlReplace(sliderData[11].issue_title)}}</p>\n                                        </div>\n                                    </a>\n                                </div>                                          \n                        </div>\n                    </ng-template>        \n                    \n                    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(12)\">\n                            <div class=\"row\">\n                                <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(12)\"> \n                                    <a  [routerLink]=\"['/issues/'+sliderData[12].slug]\"  > \n                                        <div class=\"picsum-img-wrapper ml-3\">\n                                            <img [src]=\"getImage(sliderData[12].image)\" alt=\"No Image\">\n                                        </div>\n                                        <div class=\"carousel-caption\">\n                                            <p>{{safeHtmlReplace(sliderData[12].issue_title)}}</p>\n                                        </div>\n                                    </a>\n                                </div>\n                                <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(13))\"> \n                                    <a  [routerLink]=\"['/issues/'+sliderData[13].slug]\"  > \n                                        <div class=\"picsum-img-wrapper\">\n                                            <img [src]=\"getImage(sliderData[13].image)\" alt=\"No Image\">\n                                        </div>\n                                        <div class=\"carousel-caption\">\n                                            <p>{{safeHtmlReplace(sliderData[13].issue_title)}}</p>\n                                        </div>\n                                    </a>\n                                </div>\n                                <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(14))\"> \n                                    <a  [routerLink]=\"['/issues/'+sliderData[14].slug]\"  > \n                                        <div class=\"picsum-img-wrapper\">\n                                            <img [src]=\"getImage(sliderData[14].image)\" alt=\"No Image\">\n                                        </div>\n                                        <div class=\"carousel-caption\">\n                                            <p>{{safeHtmlReplace(sliderData[14].issue_title)}}</p>\n                                        </div>\n                                    </a>\n                                </div>    \n                                <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(15))\"> \n                                        <a  [routerLink]=\"['/issues/'+sliderData[15].slug]\"  > \n                                            <div class=\"picsum-img-wrapper\">\n                                                <img [src]=\"getImage(sliderData[15].image)\" alt=\"No Image\">\n                                            </div>\n                                            <div class=\"carousel-caption\">\n                                                <p>{{safeHtmlReplace(sliderData[15].issue_title)}}</p>\n                                            </div>\n                                        </a>\n                                    </div>                                          \n                            </div>\n                        </ng-template>             \n</ngb-carousel>",
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
        styles: ["img{max-width:150px}.img_class:hover img{background:#000;padding:5px}"]
      }]
    }];
    /** @nocollapse */

    ContentIssueSliderComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]
      }, {
        type: RodmanCoreService
      }];
    };

    ContentIssueSliderComponent.propDecorators = {
      sliderData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-rss-feeds/content-rss-feeds.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentRssFeedsService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function ContentRssFeedsService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ContentRssFeedsService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @return {?}
       */


      _createClass(ContentRssFeedsService, [{
        key: "rssFeeds",
        value: function rssFeeds(magazineId) {
          return this.HttpClient.post(apiURL + 'contentsController/getContentType', {
            magazineId: magazineId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ContentRssFeedsService;
    }();

    ContentRssFeedsService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ContentRssFeedsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    ContentRssFeedsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ContentRssFeedsService_Factory() {
        return new ContentRssFeedsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: ContentRssFeedsService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-rss-feeds/content-rss-feeds.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentRssFeedsComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ActivatedRoute
       * @param {?} Router
       * @param {?} RodmanCoreService
       * @param {?} ContentRssFeedsService
       */
      function ContentRssFeedsComponent(ActivatedRoute, Router, RodmanCoreService, ContentRssFeedsService) {
        _classCallCheck(this, ContentRssFeedsComponent);

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


      _createClass(ContentRssFeedsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.ActivatedRoute.data.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this37.magazineId = data.magazineId;
          });
          this.rssDataMethod();
          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this37.getAllAd = data;
            _this37.viewAdRender = 1;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "rssDataMethod",
        value: function rssDataMethod() {
          var _this38 = this;

          this.ContentRssFeedsService.rssFeeds(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this38.rssData = data['country'];
            _this38.loading = false;
          });
        }
      }]);

      return ContentRssFeedsComponent;
    }();

    ContentRssFeedsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-rss-feeds',
        template: "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <h2> RSS Feeds </h2><br><br>         \n                    <h4> Content Types </h4><br>    \n                    \n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n    \n                    <div class=\"mt-2 mb-2\" *ngIf=\"rssData\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6 p-2\" *ngFor=\"let contentType of rssData\">\n                                <a target=\"_blank\" href=\"{{baseUrl+'feedcreator/rss/'+contentType.id+'/'+magazineId}}\"> {{contentType.tag.replace('_',\" \").replace('_',\" \") | uppercase}}</a>\n                            </div>\n                        </div>\n                    </div>                                \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>                 \n                    <div class=\"col-md-12 col-sm-12 mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"col-md-12 col-sm-12 mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div>\n            </div>    \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>        ",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    ContentRssFeedsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: RodmanCoreService
      }, {
        type: ContentRssFeedsService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-lists/content-lists.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ɵ0$1 = [];
    /** @type {?} */

    var contentDataView$1 = [{
      status: 'Fail',
      data: ɵ0$1,
      message: '',
      video: [],
      magazine_id: ''
    }];

    var ContentListsComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ViewContentService
       * @param {?} config
       * @param {?} ContentBoxTabService
       * @param {?} RodmanCoreService
       * @param {?} Router
       */
      function ContentListsComponent(ViewContentService, config, ContentBoxTabService, RodmanCoreService, Router) {
        _classCallCheck(this, ContentListsComponent);

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


      _createClass(ContentListsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.viewData();
        }
        /**
         * @param {?} contentDataView
         * @return {?}
         */

      }, {
        key: "selectView",
        value: function selectView(contentDataView) {
          this.selectedContentView = contentDataView;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.getads(); // this.viewData();
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.RodmanCoreService.safeHtml(data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "viewData",
        value: function viewData() {
          var _this39 = this;

          if (this.dataFetch == false) {
            this.ViewContentService.getContentDetails(this.magazineId, this.contentPageUrl).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              _this39.dataFetch = true;
              _this39.contentData = data['data'];
              _this39.contentDataView[0] = data['data'];
              _this39.page = data['data'].slug;
              _this39.displayDefault = 1;
              _this39.loading = false;
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "check",
        value: function check() {
          this.dataFetch = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getads",
        value: function getads() {
          var _this40 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this40.ads = data;
          });
        }
      }]);

      return ContentListsComponent;
    }();

    ContentListsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-lists',
        template: "<div class=\"col-md-12 col-sm-12 text-center\" >\n    <CoreLib-ads-display [ads]=\"ads\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div >\n                <CoreLib-ads-display [ads]=\"ads\" location='left_site_ad'></CoreLib-ads-display>\n            </div>\n        </div>\n        <div class=\"col-6 mt-5 \">\n            <div class=\"row\" *ngIf=\"contentDataView[0]\">\n\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"contentDataView[0]\">\n                        <div class=\"container mb-3 mt-4\" id=\"default\"  *ngFor=\"let contentData of contentDataView[0]\">\n                            <h3> {{ contentData.slug.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h3>\n                            <h1 id=\"default\">{{contentData.title}}</h1>\n                            <h5>{{contentData.summary}}</h5>\n                          \n                            <div class=\"row\">\n                                <div class=\" col-sm-6 col-md-6 border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1 ml-4\">\n                                    <b> <!-- {{ extractNameFromJson(contentData.author_name) }}  -->\n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                            </div> \n                            <div class=\"row\">\n                                <div class=\"col-md-7\" [innerHtml]=\"safeHtml(contentData.body)\"></div>                                \n                                <!-- Related Content  Box -->\n                                <div class=\"col-md-5\">\n                                    <CoreLib-content-related *ngIf=\"contentDataView[0]\" magazineId={{contentData.magazine_id}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                                </div>                            \n                            </div>\n                        </div>                   \n                    </div>          \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\" *ngIf=\"contentDataView[0]\">\n                        <CoreLib-content-box-tabs  *ngFor=\"let contentData of contentDataView[0]\" magazineId={{contentData.magazine_id}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\"  >\n                        <CoreLib-ads-display [ads]=\"ads\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n\n        <div class=\"col\">\n            <div >\n                <CoreLib-ads-display [ads]=\"ads\" location='right_site_ad'></CoreLib-ads-display>\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n\n\n\n\n\n\n<!-- Related Searches -->\n<!-- <div class=\"row\" *ngFor=\"let contentData of contentDataView[0]\">\n    <div class=\"col-md-2 col-sm-2\"></div>\n    <div class=\"col-md-6 col-sm-offset-6\" >\n        <CoreLib-content-related-searches [dataArray]=\"contentData.RELATED_SEARCHES\"></CoreLib-content-related-searches>\n    </div>\n    <div class=\"col-md-4 col-sm-4\"></div>\n</div> -->\n\n<!-- Slider Show -->\n<div class=\"row\" *ngFor=\"let contentData of contentDataView[0]\">\n    <!-- <div class=\"col-md-1 col-sm-1\"></div> -->\n    <div  *ngIf=\"contentData.content_type_id != 2653\" >\n        <CoreLib-content-suggest-slide-show  magazineId ={{contentData.magazine_id}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n    </div>\n    <!-- <div class=\"col-md-1 col-sm-1\"></div>  -->\n</div>   \n    \n    <!-- Related Content -->\n<div class=\"row\" *ngFor=\"let contentData of contentDataView[0]\" >\n    <div class=\"col-sm-2 col-md-2\" ></div>\n    <div class=\"col-sm-6 col-md-6\" >\n        <CoreLib-content-related-content-list routeUrl=\"\" magazineId={{contentData.magazine_id}} contentType={{contentData.content_type_id}}></CoreLib-content-related-content-list>\n    </div>\n    <div class=\"col-sm-4 col-md-4\" ></div>    \n</div>  ",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    ContentListsComponent.ctorParameters = function () {
      return [{
        type: ContentViewService
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]
      }, {
        type: ContentBoxTabsService
      }, {
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/contents-webinar/contents-webinar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentsWebinarComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ListContentService
       * @param {?} RodmanCoreService
       * @param {?} Router
       * @param {?} ActivatedRoute
       */
      function ContentsWebinarComponent(ListContentService, RodmanCoreService, Router, ActivatedRoute) {
        var _this41 = this;

        _classCallCheck(this, ContentsWebinarComponent);

        this.ListContentService = ListContentService;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.limit = 10;
        this.page = 0;
        this.loading = true;
        this.getAllAd = [];
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this41.currentURL = event.url;

            if (_this41.currentURL == '/contents/list_webinars') {
              _this41.currentURL = '';
              _this41.contentType = '2542';
            }
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(ContentsWebinarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this42 = this;

          this.ActivatedRoute.data.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this42.magazineId = data.magazineId;
          });
          this.getContentData();
          this.getads();
        }
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:,]/g, "")
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getContentData",
        value: function getContentData() {
          var _this43 = this;

          this.ListContentService.getContent(this.currentURL, this.magazineId, this.limit, this.page, this.contentType).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this43.listContentData = data['data'];

            if (_this43.page == 0) {
              _this43.slugHeading = data['contentTypeName'];
            }

            _this43.page = data['page'] + 1;
            _this43.loading = false;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getads",
        value: function getads() {
          var _this44 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this44.getAllAd = data;
            _this44.viewAdRender = 1;
          });
        }
      }]);

      return ContentsWebinarComponent;
    }();

    ContentsWebinarComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-contents-webinar',
        template: "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    \n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"(!loading)  && ((contentType=='2542' && (currentURL == '')) || (currentURL == '/contents/list_ebook') )\">     <div class=\"heading-border mb-2\" id=\"webinars\"><h2>{{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>    \n                    <div class=\"border-bottom\" *ngFor=\"let Data of listContentData; let i =index\" >\n                        <div class=\"row\">\n                            <div class=\"col-sm-2 col-md-2\"><img class=\"img-responsive Webinars\"  [src]=\"getImage(Data.primary_image)\" alt=\"No Image\"> </div>\n                            <div class=\"col-sm-10 col-md-10\">\n                                <h1><div [innerHTML]=\"safeHtml(Data.title)\"> </div></h1>\n                                <div [innerHTML]=\"Data.body\"></div>\n                            </div>\n                        </div>   \n                    </div>\n                </div>           \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n    ",
        styles: [".heading-border{border-bottom:1px solid #000;color:#000}.container{min-height:500px}.Webinars{max-width:100%;min-width:100px}"]
      }]
    }];
    /** @nocollapse */

    ContentsWebinarComponent.ctorParameters = function () {
      return [{
        type: ListContentService
      }, {
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/content-magazine-issue/content-magazine-issue.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentMagazineIssueComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} RodmanCoreService
       * @param {?} ActivatedRoute
       * @param {?} Router
       * @param {?} ContentIssueService
       */
      function ContentMagazineIssueComponent(RodmanCoreService, ActivatedRoute, Router, ContentIssueService) {
        _classCallCheck(this, ContentMagazineIssueComponent);

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


      _createClass(ContentMagazineIssueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
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

      }, {
        key: "getIssue",
        value: function getIssue(url) {
          var _this45 = this;

          this.ContentIssueService.getIssue(this.magazineId, url).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            /** @type {?} */
            var collectData = data['data']; // if(this.page==0)  {

            _this45.sliderData = data['issue'];
            _this45.page = 1; // }      

            _this45.nextIssue = data['nextIssue'];
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = collectData[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _data = _step5.value;

                _this45.issueData.push(_data);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            _this45.loading = false;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getads",
        value: function getads() {
          var _this46 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this46.getAllAd = data;
            _this46.viewAdRender = 1;
          });
        }
        /**
         * @param {?} slug
         * @return {?}
         */

      }, {
        key: "loadMoreData",
        value: function loadMoreData(slug) {
          this.loading = true;
          this.issueData.push({
            'id': "",
            'primary_image': "",
            'title': "",
            'summary': "",
            'publish_date': "",
            'viewUrl': "",
            'issue_title': "",
            'nextTag': this.nextIssue.issue_title
          });
          this.getIssue(slug);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
        /**
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "titlePrint",
        value: function titlePrint(title) {
          return title == 1 ? true : false;
        }
      }]);

      return ContentMagazineIssueComponent;
    }();

    ContentMagazineIssueComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-content-magazine-issue',
        template: "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div *ngIf=\"!(loading)\"><h3>{{name}} Magazine</h3></div>\n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                    <div class=\"mb-4 border p-2\" *ngIf=\"sliderData.length > 0\">                        \n                        <CoreLib-content-issue-slider [sliderData]=\"sliderData\"></CoreLib-content-issue-slider>\n                    </div>                    \n                    <div class=\"mt-3 mb-3 border-bottom\" *ngFor=\"let issue of issueData;let i=index\">\n                        <div class=\"col-md-12 col-sm-12 mt-3 mb-3\" *ngIf=\"i == 0\"><h2>{{issue.issue_title}}</h2> </div>                 \n                      \n                        <div>\n                            <h3 *ngIf=\"issue.viewUrl\"> \n                                <a [innerHTML]=\"safeHtml(issue.title)\" [routerLink]=\"['/'+issue.viewUrl]\"></a> \n                            </h3>\n                            <h3 class=\"mb-2\" *ngIf=\"issue.nextTag\"> \n                                {{issue.nextTag}}\n                            </h3>\n                        </div>    \n                        <div>    \n                            <h5 [innerHTML]=\"safeHtml(issue.summary)\" ></h5>\n                        </div>    \n                        <div *ngIf=\"issue.publish_date\" class=\"mb-1\"><small><b>{{issue.publish_date| date : \"MMM dd , yyyy\"}}</b></small></div>\n                    </div>\n                                        \n                    <div class=\"container mt-5 mb-3\" *ngIf=\"(nextIssue) && (sliderData.length > 0) && (!loading)\">                            \n                        <div class=\"row\" > \n                            <div class=\"col-md-4 col-sm-4\"></div>\n                                <div class=\"col-md-4 col-sm-4\">                                       \n                                    <button class=\"text-center button\"  (click)=\"loadMoreData(nextIssue.slug)\">Load More</button>\n                                </div>\n                            <div class=\"col-md-4 col-sm-4\"></div>\n                        </div>   \n                    </div>    \n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n        \n            \n\n\n",
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
        styles: [""]
      }]
    }];
    /** @nocollapse */

    ContentMagazineIssueComponent.ctorParameters = function () {
      return [{
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ContentIssueService
      }];
    };

    ContentMagazineIssueComponent.propDecorators = {
      url: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      magazineId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/contents/contents.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ContentsModule = function ContentsModule() {
      _classCallCheck(this, ContentsModule);
    };

    ContentsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [ListContentComponent, StaticContentComponent, ContentViewComponent, ContentDynamicViewComponent, ContentInfographicsComponent, ContentSearchComponent, ContentRelatedComponent, ContentSuggestSlideShowComponent, ContentBoxTabsComponent, ContentDefaultComponent, ContentJobsComponent, ContentFeatureComponent, ContentVideoComponent, ContentWebinarsComponent, ContentFormularyComponent, ContentBuyerGuideBasicComponent, ContentBuyerGuideMicroSiteComponent, ContentSlideShowComponent, ContentStaticContentComponent, ContentWhitePaperComponent, ContentNewsReleaseComponent, ContentCompanyRelatedComponent, ContentRelatedContentListComponent, ContentRelatedSearchesComponent, ContentGlossaryComponent, ContentIssueComponent, ContentIssueSliderComponent, ContentRssFeedsComponent, ContentListsComponent, ContentsWebinarComponent, ContentMagazineIssueComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], // FormsModule,
        ContentsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"].forRoot(), AdsModule, SitesModule, UsersModule, ngx_dfp__WEBPACK_IMPORTED_MODULE_10__["DfpModule"].forRoot({
          idleLoad: true,
          enableVideoAds: true,
          personalizedAds: true,
          // Request personalized ads by default
          singleRequestMode: true,
          // Only applies to initial refresh
          onSameNavigation: 'refresh',
          globalTargeting: {// food: ['NUT', 'HOME']
          }
        })],
        exports: [ListContentComponent, StaticContentComponent, ContentViewComponent, ContentDynamicViewComponent, ContentInfographicsComponent, ContentSearchComponent, ContentRelatedComponent, ContentSuggestSlideShowComponent, ContentBoxTabsComponent, ContentDefaultComponent, ContentRelatedContentListComponent, ContentGlossaryComponent, ContentIssueComponent, ContentIssueSliderComponent, ContentRssFeedsComponent, ContentListsComponent, ContentWebinarsComponent, ContentMagazineIssueComponent],
        providers: [{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/taxonomies/taxonomies-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var routes$5 = [];

    var TaxonomiesRoutingModule = function TaxonomiesRoutingModule() {
      _classCallCheck(this, TaxonomiesRoutingModule);
    };

    TaxonomiesRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$5)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/taxonomies/list-taxonomies/list-taxonomies.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ListTaxonomiesService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function ListTaxonomiesService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ListTaxonomiesService);

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


      _createClass(ListTaxonomiesService, [{
        key: "getContent",
        value: function getContent(slug, magazineId, limit, page, contentType) {
          return this.HttpClient.post(apiURL + 'taxonomysController/getContentTaxonomys', {
            pageUrl: slug,
            magazineId: magazineId,
            limit: limit,
            page: page,
            contentType: contentType
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
        /**
         * @param {?} slug
         * @param {?} magazineId
         * @return {?}
         */

      }, {
        key: "getContentTopTaxonomy",
        value: function getContentTopTaxonomy(slug, magazineId) {
          return this.HttpClient.post(apiURL + 'taxonomysController/getTopTaxonomys', {
            pageUrl: slug,
            magazineId: magazineId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
        /**
         * @param {?} contentId
         * @param {?} magazineId
         * @return {?}
         */

      }, {
        key: "getContentTaxonomy",
        value: function getContentTaxonomy(contentId, magazineId) {
          return this.HttpClient.post(apiURL + 'taxonomysController/getContentTaxonomyTagged', {
            contentId: contentId,
            magazineId: magazineId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ListTaxonomiesService;
    }();

    ListTaxonomiesService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ListTaxonomiesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    ListTaxonomiesService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ListTaxonomiesService_Factory() {
        return new ListTaxonomiesService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: ListTaxonomiesService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/taxonomies/list-taxonomies/list-taxonomies.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ListTaxonomiesComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} Router
       * @param {?} RouterModule
       * @param {?} ListTaxonomiesService
       * @param {?} RodmanCoreService
       */
      function ListTaxonomiesComponent(Router, RouterModule, ListTaxonomiesService, RodmanCoreService) {
        var _this47 = this;

        _classCallCheck(this, ListTaxonomiesComponent);

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
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this47.currentURL = event.url;
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(ListTaxonomiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.magazineId == 1) {
            this.staticUrl = '/knowledge-center/';
          } // this.getTaxonomyData();

        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
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

      }, {
        key: "getTaxonomyData",
        value: function getTaxonomyData() {
          var _this48 = this;

          this.taxonomyUrl = this.routeUrl.split('/');
          this.taxonomyUrlTo = this.taxonomyUrl[1];
          /** @type {?} */

          var cleanUrl = this.routeUrl.replace('/', "");

          if (this.page == 0) {
            this.ListTaxonomiesService.getContentTopTaxonomy(cleanUrl, this.magazineId).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              _this48.contentTaxonomy = data['CONTENT_TAXONOMYS']; // this.slugHeading = data['contentTypeName'];

              _this48.all = data['all'];
            });
          }

          this.ListTaxonomiesService.getContent(cleanUrl, this.magazineId, this.limit, this.page, this.contentType).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this48.listTaxonomyData = data['data'];

            if (_this48.page == 0) {
              _this48.slugHeading = data['contentTypeName']; // this.contentTaxonomy = data['CONTENT_TAXONOMYS'];

              _this48.sliderData.push(_this48.listTaxonomyData);
            }

            _this48.page = data['page'] + 1;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = _this48.listTaxonomyData[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var taxonomy = _step6.value;
                console.log(taxonomy);

                _this48.taxonomyData.push(taxonomy);
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }

            _this48.loading = false;
          });
        }
        /**
         * @param {?} slug
         * @return {?}
         */

      }, {
        key: "routing",
        value: function routing(slug) {
          this.Router.navigateByUrl(this.taxonomyUrlTo + '/' + slug);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "bodyCharacterLength",
        value: function bodyCharacterLength(data) {
          return this.RodmanCoreService.bodyCharacterLength(data);
        }
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
        /**
         * @return {?}
         */

      }, {
        key: "loadMoreData",
        value: function loadMoreData() {
          this.loading = true;
          this.getTaxonomyData();
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "extractNameFromJson",
        value: function extractNameFromJson(data) {
          return this.RodmanCoreService.extractNameFromJson(data);
        }
      }]);

      return ListTaxonomiesComponent;
    }();

    ListTaxonomiesComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-list-taxonomies',
        inputs: ['routeUrl', 'magazineId'],
        template: "<div class=\"container mt-5\"  >\n    <div class=\"row\" >\n        <div class=\"col-md-12 col-sm-12\" >\n            <CoreLib-slider [data]=\"sliderData\"></CoreLib-slider>\n        </div>\n    </div>\n    <div class=\"mb-2\" *ngIf=\"slugHeading\"><h2> {{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>\n    <span *ngIf=\"all.tag\">\n        <span class=\"taxonomy-text\" ><a  [routerLink]=\"['/'+all.url]\">{{all.tag}}</a></span> \n    </span>    \n    <span  *ngFor=\"let taxonomyTitle of contentTaxonomy;let k = index;\" class=\"taxonomy-text\">\n        <a *ngIf=\"(magazineId != 1)\" [routerLink]=\"['/'+taxonomyUrlTo+'/'+taxonomyTitle.slug]\"  > {{taxonomyTitle.tag}}  </a>\n        <a *ngIf=\"(magazineId == 1)\" [routerLink]=\"['/'+taxonomyUrlTo+'/'+taxonomyTitle.url]\"  > {{taxonomyTitle.tag}}  </a>\n    </span>\n    <div class=\"heading-border\"></div>\n    <div  *ngIf=\"taxonomyData?.length > 0\">\n        <div *ngFor=\"let Data of taxonomyData; let i =index\">\n            <div class=\"col-md-12 col-sm-12\">\n                <div class=\"row\">       \n                    <div class=\"col-md-12 col-sm-12\">\n                        <span *ngFor=\"let taxonomy of Data.taggedTaxonomy.KNOWLEDGE_CENTER_TAXONOMY | slice:0:5; let j =index\">\n                            <span *ngIf=\"j\"> | </span>\n                            <a  [routerLink]=\"[staticUrl+taxonomy.url]\"  > {{taxonomy.tag}}  </a>\n                        </span>                       \n                        <!-- <span *ngFor=\"let taxonomy of Data.taggedTaxonomy.NEWS_TAXONOMY; let z =index\">\n                            <a *ngIf=\"magazineId != 1\" [routerLink]=\"['/'+taxonomy.url]\"  > {{taxonomy.tag}}   </a> \n                            <a *ngIf=\"magazineId == 1\"  [routerLink]=\"['/'+staticUrl+taxonomy.url]\"  > {{taxonomy.tag}}  </a>  |\n                        </span> -->\n                    </div>                          \n                    <div class=\"col-md-9 col-sm-9\">\n                        \n                        <h4 class=\"mt-2\"><a [routerLink]=\"[Data.viewUrl]\"><b><div [innerHTML]=\"safeHtml(Data.title)\"> </div></b></a></h4>\n                         \n                        <h6 class=\"mt-3\" *ngIf=\"Data.summary\" [innerHTML]=\"safeHtml(Data.summary)\"></h6>\n                        <h6 class=\"mt-3\" *ngIf=\"((!Data.summary) && (Data.body))\" [innerHTML]=\"bodyCharacterLength(Data.body)\"></h6>\n\n                        <div class=\"mt-2\"> \n                            <span class=\"\" *ngIf=\"Data.tag\"> <b> {{Data.tag.replace('-', ' ').replace('_', ' ') | titlecase}} . </b> </span>                        \n                            <span *ngIf=\"Data.author_name\"> {{extractNameFromJson(Data.author_name)}} </span>\n                            <small *ngIf=\"Data.publish_date\"> {{ Data.publish_date| date : \"MMM dd , yyyy\"}}  </small>\n                        </div>    \n                    </div>\n                    <div class=\"col-md-3 col-sm-3\" *ngIf=\"Data.primary_image\">\n                        <img class=\"img-scale\" [src]=\"getImage(Data.primary_image)\" alt=\"\"> \n                    </div>\n                </div>\n            </div>   \n            <div id=\"ads\" *ngIf=\"(i % 3 == 0) && (i > 2)\" ><hr>\n                <div class=\"col-md-12 col-sm-12\">\n                    <div class=\"row\"> \n                        <CoreLib-ads-double-click magazineId={{magazineId}} no=\"1\" location={{currentURL}}></CoreLib-ads-double-click>\n                    </div>\n                </div>\n            </div><hr>  \n        </div>    \n    </div>\n</div>\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<div class=\"container mt-5 mb-3\" *ngIf=\"taxonomyData?.length > 0\">\n    <div class=\"row\" *ngIf=\"listTaxonomyData?.length > 9 \"> \n        <div class=\"col-md-4 col-sm-4\"></div>\n            <div class=\"col-md-4 col-sm-4\">    <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button></div>\n        <div class=\"col-md-4 col-sm-4\"></div>\n    </div>    \n</div>",
        styles: [".img-scale{max-width:150px}.heading-border{border-bottom:1px solid #000;color:#000}.search-results{overflow:scroll}.pointer:hover{cursor:pointer;text-decoration:underline}.loader-height{min-height:800px}.taxonomy-text{font-size:15px;background-color:#f2f2f2;font-weight:501;text-transform:uppercase;margin-right:15px;margin-bottom:10px;display:inline-block;letter-spacing:1px}#ads,.taxonomy-text a{padding:10px}"]
      }]
    }];
    /** @nocollapse */

    ListTaxonomiesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
      }, {
        type: ListTaxonomiesService
      }, {
        type: RodmanCoreService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/taxonomies/taxonomies.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TaxonomiesModule = function TaxonomiesModule() {
      _classCallCheck(this, TaxonomiesModule);
    };

    TaxonomiesModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [ListTaxonomiesComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], AdsModule, SitesModule, TaxonomiesRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [ListTaxonomiesComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directory-section/directory-section-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var routes$6 = [];

    var DirectorySectionRoutingModule = function DirectorySectionRoutingModule() {
      _classCallCheck(this, DirectorySectionRoutingModule);
    };

    DirectorySectionRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes$6, {
          anchorScrolling: 'enabled'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directory-section/directory-home-page/directory-home-page.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var DirectoryHomePageService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function DirectoryHomePageService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, DirectoryHomePageService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} magazineId
       * @param {?} slug
       * @return {?}
       */


      _createClass(DirectoryHomePageService, [{
        key: "buyerGuideCompany",
        value: function buyerGuideCompany(magazineId, slug) {
          return this.HttpClient.post(apiURL + 'taxonomysController/buyersguideSearchDirectory', {
            magazineId: magazineId,
            slug: slug
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
        /**
         * @param {?} magazineId
         * @param {?} slug
         * @return {?}
         */

      }, {
        key: "buyersguideCategory",
        value: function buyersguideCategory(magazineId, slug) {
          return this.HttpClient.post(apiURL + 'taxonomysController/buyersguideCategory', {
            magazineId: magazineId,
            slug: slug
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
        /**
         * @param {?} magazineId
         * @param {?} slug
         * @return {?}
         */

      }, {
        key: "buyersguideCountry",
        value: function buyersguideCountry(magazineId, slug) {
          return this.HttpClient.post(apiURL + 'taxonomysController/buyersguideCountry', {
            magazineId: magazineId,
            slug: slug
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return DirectoryHomePageService;
    }();

    DirectoryHomePageService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    DirectoryHomePageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    DirectoryHomePageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function DirectoryHomePageService_Factory() {
        return new DirectoryHomePageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: DirectoryHomePageService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directory-section/directory-home-page/directory-home-page.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DirectoryHomePageComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ActivatedRoute
       * @param {?} DirectoryHomePageService
       * @param {?} RodmanCoreService
       * @param {?} Router
       */
      function DirectoryHomePageComponent(ActivatedRoute, DirectoryHomePageService, RodmanCoreService, Router) {
        var _this49 = this;

        _classCallCheck(this, DirectoryHomePageComponent);

        this.ActivatedRoute = ActivatedRoute;
        this.DirectoryHomePageService = DirectoryHomePageService;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.getAllAd = [];
        this.alphabet = [];
        this.loading = true;
        this.current_letter = '';
        this.companiesTitleArray = {
          '1': {
            '0': 'Featured Supplier Showcase Companies',
            '1': 'Supplier Showcase Companies',
            '2': 'Featured Companies'
          },
          '5': {
            '0': 'Featured Company Capabilities Microsite',
            '1': 'Company Capabilities Microsite',
            '2': 'Featured Companies'
          },
          '6': {
            '0': 'Featured Company Profiles Microsite',
            '1': 'Company Profiles Microsite',
            '2': 'Featured Companies'
          },
          '7': {
            '0': 'Featured Microsite Companies',
            '1': 'Microsite Companies',
            '2': 'Featured Companies'
          },
          '8': {
            '0': 'Featured Company Profiles Microsite',
            '1': 'Company Profiles Microsite',
            '2': 'Featured Companies'
          },
          '9': {
            '0': 'Featured Corporate Profile Microsite',
            '1': 'Corporate Profile Microsite',
            '2': 'Featured Companies'
          },
          '10': {
            '0': 'Featured Technical Profile Microsite',
            '1': 'Technical Profile Microsite',
            '2': 'Featured Companies'
          },
          '11': {
            '0': 'Featured Microsite Companies',
            '1': 'Microsite Companies',
            '2': 'Featured Companies'
          },
          '12': {
            '0': 'Featured Microsite Companies',
            '1': 'Microsite Companies',
            '2': 'Featured Companies'
          },
          '13': {
            '0': 'Company Profile MicrositePLUS',
            '1': 'Company Profile Microsite',
            '2': 'Featured Companies'
          },
          '14': {
            '0': 'Featured Microsite Companies',
            '1': 'Microsite Companies',
            '2': 'Featured Companies'
          },
          '15': {
            '0': 'Featured Technical Profile Microsite',
            '1': 'Technical Profile Microsite',
            '2': 'Featured Companies'
          }
        };
        this.featuredmicrositeCompanies = [];
        this.micrositeCompanies = [];
        this.featuredBgCompanies = [];
        Router.events.subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this49.currentURL = event.url;
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(DirectoryHomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this50 = this;

          this.ActivatedRoute.data.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this50.magazineId = data.magazineId;
          });
          this.getPageAd();
          this.buyersguideCategory();
          this.buyerGuideCompany();
          this.buyersguideCountry();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getPageAd",
        value: function getPageAd() {
          var _this51 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this51.getAllAd = data;
            _this51.viewAdRender = 1;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "buyerGuideCompany",
        value: function buyerGuideCompany() {
          var _this52 = this;

          this.DirectoryHomePageService.buyerGuideCompany(this.magazineId, this.currentURL).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this52.data = data['data'];
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = _this52.data[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var compnayCheck = _step7.value;

                if (compnayCheck.has_microsite_listing == 1 && compnayCheck.has_priority_listing == 1 && compnayCheck.has_featured_mircosite_listing == 1) {
                  _this52.featuredmicrositeCompanies.push(compnayCheck);
                } else if (compnayCheck.has_microsite_listing == 1 && compnayCheck.has_priority_listing == 1 && compnayCheck.has_featured_mircosite_listing == 0) {
                  _this52.micrositeCompanies.push(compnayCheck);
                } else if (compnayCheck.has_microsite_listing == 0 && compnayCheck.has_priority_listing == 1 && compnayCheck.has_featured_mircosite_listing == 0) {
                  _this52.featuredBgCompanies.push(compnayCheck); // let checkCompanyTitle = compnayCheck.content_type_id;
                  // if(checkCompanyTitle != this.titleCheck ){}

                }

                if (compnayCheck.title.charAt(0).toUpperCase() != _this52.current_letter) {
                  _this52.current_letter = compnayCheck.title.charAt(0).toUpperCase();

                  _this52.alphabet.push(compnayCheck.title.charAt(0).toUpperCase());
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }

            _this52.loading = false;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "buyersguideCategory",
        value: function buyersguideCategory() {
          var _this53 = this;

          this.DirectoryHomePageService.buyersguideCategory(this.magazineId, this.currentURL).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this53.buyersGuideCategoryData = data['data'];
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "buyersguideCountry",
        value: function buyersguideCountry() {
          var _this54 = this;

          this.DirectoryHomePageService.buyersguideCountry(this.magazineId, this.currentURL).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this54.buyersguideCountryData = data['country'];
          });
        }
        /**
         * @param {?} current
         * @param {?} pre
         * @return {?}
         */

      }, {
        key: "matchCharacter",
        value: function matchCharacter(current, pre) {
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

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "")
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return DirectoryHomePageComponent;
    }();

    DirectoryHomePageComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-directory-home-page',
        template: "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n        <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n    </div>\n    <div class=\"container-fluid\">    \n        <div class=\"row\">\n            <div class=\"col\">\n                <div *ngIf=\"viewAdRender == 1\">\n                    <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n                </div>\n            </div>\n            <div class=\"col-8 mt-5 \">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-12\"><h3>All Companies</h3></div>\n                    <div class=\"col-sm-4 col-md-4\">\n                        <div class=\"border\">\n                            <!-- <CoreLib-directory-search-box [title]=\"\" [magazineId]=\"\" [data]=\"\"></CoreLib-directory-search-box> -->\n                            <div *ngIf=\"buyersGuideCategoryData?.length > 0 \">\n                                <div class=\"border\"> <h5>SEARCH BY...</h5> </div>\n                                <div class=\"back-color\" [innerHTML]=\"safeHtml(buyersGuideCategoryData[0][0].tag)\"></div>\n                                <div class=\"country\">\n                                    <div class=\"row ml-1\" *ngFor=\"let bgCatData of buyersGuideCategoryData[0][0].child\">\n\n                                        <div *ngIf=\"bgCatData.count != 0 \" class=\"col-sm-9 col-md-9\" [innerHTML]=\"safeHtml(bgCatData.tag)\"></div>\n                                        <div *ngIf=\"bgCatData.count != 0 \" class=\"col-sm-3 col-md-3\" >({{bgCatData.count}})</div>\n\n                                    </div> \n                                </div>    \n                            </div>\n                            <div *ngIf=\"buyersguideCountryData?.length > 0 \">\n                                <div class=\"back-color\" >Country</div>\n                                <div class=\"country\">\n                                    <div class=\"row ml-1\" *ngFor=\"let countryData of buyersguideCountryData\">\n                                        <div *ngIf=\"countryData.count != 0\" class=\"col-sm-9 col-md-9\" [innerHTML]=\"safeHtml(countryData.name)\"></div>\n                                        <div class=\"col-sm-3 col-md-3\" *ngIf=\"(countryData.child) && (countryData.count != 0)\">\n                                            ({{countryData.child ? countryData.child.length: '' }})  </div>\n                                    </div> \n                                </div>    \n                            </div>                          \n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">\n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>  \n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">\n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>\n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">                                \n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>\n                        </div>\n        \n                    </div>\n                    <div class=\"col-sm-8 col-md-8\">\n\n                        <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                        \n                        <!-- 1st -->\n                        <div *ngIf=\"featuredmicrositeCompanies?.length > 0 \"><h3>{{companiesTitleArray[magazineId][0]}}</h3></div>\n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let featuredmicrositeCompaniesData of featuredmicrositeCompanies;let i = index\">                        \n                            <div class=\"col-sm-3 col-md-3\">\n                                <img [src]=\"featuredmicrositeCompaniesData.primary_image_main\" width=\"100%\">\n                            </div>\n                            <div class=\"col-sm-6 col-md-6\">\n                                <a [routerLink]=\"['/'+featuredmicrositeCompaniesData.viewUrl]\">{{featuredmicrositeCompaniesData.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+featuredmicrositeCompaniesData.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>\n                        <!-- 2nd -->\n                        <div class=\"mt-2\" *ngIf=\"featuredmicrositeCompanies?.length > 0 \"><h3>{{companiesTitleArray[magazineId][1]}}</h3></div>\n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let micrositeCompanies of micrositeCompanies;let i = index\">                        \n                            <div class=\"col-sm-3 col-md-3\">\n                                <img [src]=\"micrositeCompanies.primary_image_main\" width=\"100%\">\n                            </div>\n                            <div class=\"col-sm-6 col-md-6\">\n                                <a [routerLink]=\"['/'+micrositeCompanies.viewUrl]\" >{{micrositeCompanies.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+micrositeCompanies.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>                        \n\n\n                        <!-- 3rd -->\n                        <div class=\"mt-2\" *ngIf=\"featuredBgCompanies?.length > 0 \">\n                            \n                            <ng-container *ngIf=\"(magazineId == 5 ) || (magazineId == 13);else defaultView\">\n                                <ng-container *ngIf=\"featuredBgCompanies[0].content_type_id == '2666'\">  \n                                    <h3>Deluxe Companies</h3>\n                                </ng-container>\n                                <ng-container *ngIf=\"featuredBgCompanies[0].content_type_id == '2543'\">  \n                                    <h3>{{companiesTitleArray[magazineId][2]}}</h3>\n                                </ng-container>\n                            </ng-container>                  \n                        \n                            <ng-template #defaultView>\n                                <ng-container > \n                                    <h3>{{companiesTitleArray[magazineId][2]}}</h3>\n                                </ng-container> \n                            </ng-template>\n\n\n\n\n                        </div>  \n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let featuredBgCompanies of featuredBgCompanies;let i = index\">                 <div class=\"col-sm-9 col-md-9\">\n                                <a [routerLink]=\"['/'+featuredBgCompanies.viewUrl]\">{{featuredBgCompanies.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+featuredBgCompanies.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>                            \n\n                        \n                        <!-- All -->\n                        <div class=\"mt-2\" *ngIf=\"data?.length > 0 \"><h3 id=\"allCompany\">All Companies</h3></div>\n                        <div class=\"mt-2 mb-2\" *ngIf=\"alphabet?.length > 0 \">\n                            <div class=\"row text-center back-color\" >\n                                <a *ngFor=\"let Character of alphabet\" class=\"mr-1\" [routerLink] [fragment]=\"Character\" [routerLinkActive]=\"'active'\"  [routerLinkActiveOptions]=\"{exact: true}\">  {{Character | titlecase}}  </a>\n                            </div>    \n                        </div>    \n\n                        <div class=\"row mt-3 mb-1\" *ngFor=\"let allCompanies of data;let i = index\">         \n                            <div class=\"col-md-12 col-sm-12 border-bottom mt-3\" id=\"{{current_letter}}\" *ngIf=\"matchCharacter(allCompanies.title,current_letter)\"> \n                                <div class=\"row\">\n                                    <div class=\"col-sm-9 col-md-9\">\n                                        <b><h4>{{current_letter}}</h4></b>\n                                    </div>\n                                    <div class=\"col-sm-3 col-md-3\">\n                                        <!-- <a [routerLink] [fragment]=\"'allCompany'\" [routerLinkActive]=\"'active'\"  [routerLinkActiveOptions]=\"{exact: true}\">  Return To Top    </a>  -->\n                                    </div>      <br> \n                                </div>\n                            </div>\n                                <a  [routerLink]=\"['/'+allCompanies.viewUrl]\">{{ allCompanies.title }} </a>         \n                        </div>    \n\n                    </div> \n                </div>      \n            </div>\n            <div class=\"col\">\n                <div *ngIf=\"viewAdRender == 1\">\n                    <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n                </div>\n            </div>\n        </div>   \n    </div>\n    \n    ",
        styles: [".back-color{background:#dcdcdc;padding:10px}.country{max-height:300px;overflow-y:scroll;overflow-x:hidden}"]
      }]
    }];
    /** @nocollapse */

    DirectoryHomePageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: DirectoryHomePageService
      }, {
        type: RodmanCoreService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directory-section/directory-search-box/directory-search-box.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DirectorySearchBoxComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} RodmanCoreService
       */
      function DirectorySearchBoxComponent(RodmanCoreService) {
        _classCallCheck(this, DirectorySearchBoxComponent);

        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @return {?}
       */


      _createClass(DirectorySearchBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "")
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return DirectorySearchBoxComponent;
    }();

    DirectorySearchBoxComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-directory-search-box',
        template: "<div class=\"back-color\" [innerHTML]=\"safeHtml(title)\"></div>\n<div class=\"country\">\n    <div class=\"row ml-1\" *ngFor=\"let bgCatData of data\">\n        <div class=\"col-sm-9 col-md-9\" [innerHTML]=\"safeHtml(bgCatData.tag)\"></div>\n        <div class=\"col-sm-3 col-md-3\" *ngIf=\"bgCatData.count\">({{bgCatData.count}})</div>\n    </div> \n</div>\n",
        styles: [".country{max-height:300px;overflow-y:scroll;overflow-x:hidden}.back-color{background:#dcdcdc;padding:10px}"]
      }]
    }];
    /** @nocollapse */

    DirectorySearchBoxComponent.ctorParameters = function () {
      return [{
        type: RodmanCoreService
      }];
    };

    DirectorySearchBoxComponent.propDecorators = {
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      magazineId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      boxNo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directory-section/directory-basic-company-listing/directory-basic-company-listing.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DirectoryBasicCompanyListingComponent =
    /*#__PURE__*/
    function () {
      function DirectoryBasicCompanyListingComponent() {
        _classCallCheck(this, DirectoryBasicCompanyListingComponent);
      }
      /**
       * @return {?}
       */


      _createClass(DirectoryBasicCompanyListingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DirectoryBasicCompanyListingComponent;
    }();

    DirectoryBasicCompanyListingComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-directory-basic-company-listing',
        template: "<p>directory-basic-company-listing works!</p>\n",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    DirectoryBasicCompanyListingComponent.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directory-section/directory-section.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DirectorySectionModule = function DirectorySectionModule() {
      _classCallCheck(this, DirectorySectionModule);
    };

    DirectorySectionModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [DirectoryHomePageComponent, DirectorySearchBoxComponent, DirectoryBasicCompanyListingComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], AdsModule, ContentsModule, DirectorySectionRoutingModule],
        exports: [DirectoryHomePageComponent, DirectorySearchBoxComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/heaps/heaps-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var routes$7 = [];

    var HeapsRoutingModule = function HeapsRoutingModule() {
      _classCallCheck(this, HeapsRoutingModule);
    };

    HeapsRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes$7)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/heaps/top-company-home-page-slider/top-company-home-page-slider.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TopCompanyHomePageSliderService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function TopCompanyHomePageSliderService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, TopCompanyHomePageSliderService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} pageUrl
       * @param {?} magazineId
       * @return {?}
       */


      _createClass(TopCompanyHomePageSliderService, [{
        key: "getTopCompinesSliderData",
        value: function getTopCompinesSliderData(pageUrl, magazineId) {
          return this.HttpClient.post(apiURL + 'heapsController/getHeapContent', {
            pageUrl: pageUrl,
            magazineId: magazineId,
            pageNumber: 0,
            limit: 0,
            types: 'slider'
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return TopCompanyHomePageSliderService;
    }();

    TopCompanyHomePageSliderService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    TopCompanyHomePageSliderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    TopCompanyHomePageSliderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function TopCompanyHomePageSliderService_Factory() {
        return new TopCompanyHomePageSliderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: TopCompanyHomePageSliderService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/heaps/top-company-home-page-slider/top-company-home-page-slider.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TopCompanyHomePageSliderComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       * @param {?} RodmanCoreService
       * @param {?} TopCompanySliderService
       */
      function TopCompanyHomePageSliderComponent(config, RodmanCoreService, TopCompanySliderService) {
        _classCallCheck(this, TopCompanyHomePageSliderComponent);

        this.RodmanCoreService = RodmanCoreService;
        this.TopCompanySliderService = TopCompanySliderService;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
        this.sliderData = []; // config.interval = 3000;
        // config.showNavigationArrows = false;
        // config.showNavigationIndicators = false;
      }
      /**
       * @return {?}
       */


      _createClass(TopCompanyHomePageSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTopCompinesSliderData();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getTopCompinesSliderData",
        value: function getTopCompinesSliderData() {
          var _this55 = this;

          this.TopCompanySliderService.getTopCompinesSliderData(this.currentURL, this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this55.sliderData = data['data'];
          });
        }
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
      }]);

      return TopCompanyHomePageSliderComponent;
    }();

    TopCompanyHomePageSliderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-top-company-home-page-slider',
        template: "<ngb-carousel *ngIf=\"sliderData.length > 0 \" [interval]=\"false\">\n    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(0)\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(0)\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/1/'+sliderData[0].id]\"  > \n                    <div class=\"picsum-img-wrapper ml-3\">\n                        <img [src]=\"getImage(sliderData[0].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[0].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(1))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/1/'+sliderData[1].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[1].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[1].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(2))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/1/'+sliderData[2].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[2].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[2].title}}</p>\n                    </div>\n                </a>\n            </div>    \n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(3))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/1/'+sliderData[3].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[3].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[3].title}}</p>\n                    </div>\n                </a>\n            </div>                                          \n        </div>\n    </ng-template>\n  \n    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(4)\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(4)\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/2/'+sliderData[4].id]\"  > \n                    <div class=\"picsum-img-wrapper ml-3\">\n                        <img [src]=\"getImage(sliderData[4].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[4].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(5))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/2/'+sliderData[5].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[5].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[5].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(6))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/2/'+sliderData[6].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[6].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[6].title}}</p>\n                    </div>\n                </a>\n            </div>    \n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(7))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/2/'+sliderData[7].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[7].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[7].title}}</p>\n                    </div>\n                </a>\n            </div>                                          \n        </div>\n    </ng-template>\n  \n    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(8)\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(8)\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/3/'+sliderData[8].id]\"  > \n                    <div class=\"picsum-img-wrapper ml-3\">\n                        <img [src]=\"getImage(sliderData[8].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[8].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(9))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/3/'+sliderData[9].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[9].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[9].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(10))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/3/'+sliderData[10].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[10].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[10].title}}</p>\n                    </div>\n                </a>\n            </div>    \n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(11))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/3/'+sliderData[11].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[11].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[11].title}}</p>\n                    </div>\n                </a>\n            </div>                                          \n        </div>\n    </ng-template>        \n            \n    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(12)\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(12)\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/4/'+sliderData[12].id]\"  > \n                    <div class=\"picsum-img-wrapper ml-3\">\n                        <img [src]=\"getImage(sliderData[12].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[12].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(13))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/4/'+sliderData[13].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[13].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[13].title}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(14))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/4/'+sliderData[14].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[14].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[14].title}}</p>\n                    </div>\n                </a>\n            </div>    \n            <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(15))\"> \n                <a  [routerLink]=\"['/heaps/view/'+urlId+'/4/'+sliderData[15].id]\"  > \n                    <div class=\"picsum-img-wrapper\">\n                        <img [src]=\"getImage(sliderData[15].primary_image)\" >\n                    </div>\n                    <div class=\"carousel-caption\">\n                        <p>{{sliderData[15].title}}</p>\n                    </div>\n                </a>\n            </div>                                          \n        </div>\n    </ng-template> \n  \n    <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(16)\">\n      <div class=\"row\">\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(16)\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/5/'+sliderData[16].id]\"  > \n                  <div class=\"picsum-img-wrapper ml-3\">\n                      <img [src]=\"getImage(sliderData[16].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[16].title}}</p>\n                  </div>\n              </a>\n          </div>\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(17))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/5/'+sliderData[17].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[17].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[17].title}}</p>\n                  </div>\n              </a>\n          </div>\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(18))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/5/'+sliderData[18].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[18].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[18].title}}</p>\n                  </div>\n              </a>\n          </div>    \n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(19))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/5/'+sliderData[19].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[19].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[19].title}}</p>\n                  </div>\n              </a>\n          </div>                                          \n      </div>\n     </ng-template>    \n     \n     <ng-template ngbSlide *ngIf=\"sliderData && sliderData.hasOwnProperty(20)\">\n      <div class=\"row\">\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData.hasOwnProperty(20)\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/6/'+sliderData[20].id]\"  > \n                  <div class=\"picsum-img-wrapper ml-3\">\n                      <img [src]=\"getImage(sliderData[20].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[20].title}}</p>\n                  </div>\n              </a>\n          </div>\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(21))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/6/'+sliderData[21].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[21].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[21].title}}</p>\n                  </div>\n              </a>\n          </div>\n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(22))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/6/'+sliderData[22].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[22].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[22].title}}</p>\n                  </div>\n              </a>\n          </div>    \n          <div class=\"col-md-3 col-sm-3 img_class\" *ngIf=\"sliderData && (sliderData.hasOwnProperty(23))\"> \n              <a  [routerLink]=\"['/heaps/view/'+urlId+'/6/'+sliderData[23].id]\"  > \n                  <div class=\"picsum-img-wrapper\">\n                      <img [src]=\"getImage(sliderData[23].primary_image)\" >\n                  </div>\n                  <div class=\"carousel-caption\">\n                      <p>{{sliderData[23].title}}</p>\n                  </div>\n              </a>\n          </div>                                          \n      </div>\n     </ng-template>    \n  \n  \n  </ngb-carousel>",
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]],
        styles: [".img_class:hover img{background:#000;padding:5px}.picsum-img-wrapper,img{width:170px;height:200px}"]
      }]
    }];
    /** @nocollapse */

    TopCompanyHomePageSliderComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"]
      }, {
        type: RodmanCoreService
      }, {
        type: TopCompanyHomePageSliderService
      }];
    };

    TopCompanyHomePageSliderComponent.propDecorators = {
      currentURL: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      magazineId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      urlId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/heaps/top-company-home-page/top-company-home-page.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TopCompanyHomePageService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} HttpClient
       * @param {?} RodmanCoreService
       */
      function TopCompanyHomePageService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, TopCompanyHomePageService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }
      /**
       * @param {?} pageUrl
       * @param {?} magazineId
       * @return {?}
       */


      _createClass(TopCompanyHomePageService, [{
        key: "getTopCompinesTab",
        value: function getTopCompinesTab(pageUrl, magazineId) {
          return this.HttpClient.post(apiURL + 'heapsController/heapScroller', {
            pageUrl: pageUrl,
            magazineId: magazineId
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
        /**
         * @param {?} pageUrl
         * @param {?} magazineId
         * @param {?} pageNumber
         * @param {?} limit
         * @return {?}
         */

      }, {
        key: "getTopCompinesContent",
        value: function getTopCompinesContent(pageUrl, magazineId, pageNumber, limit) {
          return this.HttpClient.post(apiURL + 'heapsController/getHeapContent', {
            pageUrl: pageUrl,
            magazineId: magazineId,
            pageNumber: pageNumber,
            limit: limit,
            types: ""
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return TopCompanyHomePageService;
    }();

    TopCompanyHomePageService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    TopCompanyHomePageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: RodmanCoreService
      }];
    };
    /** @nocollapse */


    TopCompanyHomePageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function TopCompanyHomePageService_Factory() {
        return new TopCompanyHomePageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RodmanCoreService));
      },
      token: TopCompanyHomePageService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/heaps/top-company-home-page/top-company-home-page.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TopCompanyHomePageComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} RodmanCoreService
       * @param {?} TopHomepageService
       */
      function TopCompanyHomePageComponent(RodmanCoreService, TopHomepageService) {
        _classCallCheck(this, TopCompanyHomePageComponent);

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


      _createClass(TopCompanyHomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
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

      }, {
        key: "getads",
        value: function getads() {
          var _this56 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this56.getAllAd = data;
            _this56.viewAdRender = 1;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getTopCompinesTab",
        value: function getTopCompinesTab() {
          var _this57 = this;

          this.TopHomepageService.getTopCompinesTab(this.currentURL, this.magazineId).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this57.tabData = data['data'];
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getTopCompinesContent",
        value: function getTopCompinesContent() {
          var _this58 = this;

          this.TopHomepageService.getTopCompinesContent(this.currentURL, this.magazineId, this.page, this.limit).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this58.datas = data['data'];
            _this58.page = data['page'] + 1;
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              for (var _iterator8 = _this58.datas[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var content = _step8.value;

                _this58.contentData.push(content);
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                  _iterator8.return();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
            }

            _this58.loading = false;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "loadMoreData",
        value: function loadMoreData() {
          this.loading = true;
          this.getTopCompinesContent();
        }
        /**
         * @param {?} imageId
         * @return {?}
         */

      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "extractNameFromJson",
        value: function extractNameFromJson(data) {
          return this.RodmanCoreService.extractNameFromJson(data);
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return TopCompanyHomePageComponent;
    }();

    TopCompanyHomePageComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'CoreLib-top-company-home-page',
        template: "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div>\n                        <ul class=\"nav nav-tabs col-xs-12 col-sm-12 col-md-12\">\n                            <li *ngFor=\"let data of tabData\">\n                                <a class=\"bg-primary {{selectedTab==data.id ? 'selected' : '' }}\" [routerLink]=\"['/heaps/view/'+data.id+'/1']\">{{data.title}}</a>\n                            </li>\n                        </ul>\n                    </div>  \n\n                    <div class=\"border mt-3 mb-4 p-2 hide-slider\" *ngIf=\"tabData.length > 0\">\n                        <CoreLib-top-company-home-page-slider urlId={{selectedTab}} magazineId={{magazineId}} currentURL={{currentURL}}></CoreLib-top-company-home-page-slider>\n                    </div>\n\n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n\n\n                    <div *ngIf=\"contentData.length > 0\">\n                        <div class=\"container mb-3 mt-4\"  *ngFor=\"let contentData of contentData;let i =index \">\n                            <h1 [innerHtml]=\"safeHtmlReplace(contentData.title)\"></h1>\n                            <h5 [innerHtml]=contentData.summary></h5>\n                            <img  [src]=\"getImage(contentData.primary_image)\" alt=\"No Image\" class=\"img-scale border full-Size mb-2\">\n\n                                <div class=\" border-dark border-top border-bottom mt-1 mb-1 pt-1 pb-1\">\n                                    <b> <span *ngIf=\"contentData.author_name\">                                   \n                                        {{ extractNameFromJson(contentData.author_name) }} </span>\n                                        {{contentData.publish_date | date : \"MMM dd , yyyy\"}} </b>\n                                </div>\n                    \n                            <div class=\"releted_nws\">\n                                <CoreLib-content-related *ngIf=\"(contentData && i)\" magazineId={{magazineId}} contentId='{{contentData.id}}' ></CoreLib-content-related>           \n                            </div> \n                            <div class=\"row_contian\"> \n                                <div [innerHtml]=contentData.body></div>                                        \n                            </div>\n                            <div class=\"slider-releted\">\n                                <CoreLib-content-suggest-slide-show  magazineId ={{magazineId}} contentId={{contentData.id}} > </CoreLib-content-suggest-slide-show>\n                            </div>\n                            <div class=\"clearfix space-add\"></div>\n                        </div>                   \n                    </div> \n                    \n                    <div class=\"container mt-5 mb-3\" *ngIf=\"contentData?.length > 0\">\n                        <div class=\"row\" *ngIf=\"datas?.length > 4 \"> \n                            <div class=\"col-md-4 col-sm-4\"></div>\n                                <div class=\"col-md-4 col-sm-4\">   \n                                     <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button>\n                                </div>\n                            <div class=\"col-md-4 col-sm-4\"></div>\n                        </div>   \n                    </div>\n\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div>\n\n            </div>              \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\"> \n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n\n\n",
        styles: [".nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav>li>a{position:relative;display:block;padding:10px 15px;text-decoration:none}.nav,.nav ul,.nav1,.nav1 ul{z-index:999;margin:0;padding:0;list-style-type:none;list-style-position:outside;position:relative;line-height:26px}a{color:#fff}.selected,li>a:hover{background-color:#ccc!important}.line{border-top:1px solid}.releted_nws{float:right;width:100%;max-width:275px;padding-top:10px}.releted_post{padding-top:15px}.slider-releted{position:absolute!important;width:-webkit-max-content!important;width:-moz-max-content!important;width:max-content!important;z-index:9999;right:0;left:-53%;overflow:hidden;margin:15px}.clearfix.space-add{height:50px;margin-top:34%}"]
      }]
    }];
    /** @nocollapse */

    TopCompanyHomePageComponent.ctorParameters = function () {
      return [{
        type: RodmanCoreService
      }, {
        type: TopCompanyHomePageService
      }];
    };

    TopCompanyHomePageComponent.propDecorators = {
      currentURL: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      magazineId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/heaps/heaps.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var HeapsModule = function HeapsModule() {
      _classCallCheck(this, HeapsModule);
    };

    HeapsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [TopCompanyHomePageComponent, TopCompanyHomePageSliderComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], HeapsRoutingModule, AdsModule, ContentsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"].forRoot()],
        exports: [TopCompanyHomePageComponent, TopCompanyHomePageSliderComponent],
        providers: [{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        }]
      }]
    }];
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

    /***/
  },

  /***/
  "../../dist/rodman-orm/fesm2015/rodman-orm.js":
  /*!************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/dist/rodman-orm/fesm2015/rodman-orm.js ***!
    \************************************************************************/

  /*! exports provided: RodmanORMComponent, RodmanORMModule, RodmanORMService */

  /***/
  function distRodmanOrmFesm2015RodmanOrmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RodmanORMComponent", function () {
      return RodmanORMComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RodmanORMModule", function () {
      return RodmanORMModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RodmanORMService", function () {
      return RodmanORMService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/rodman-orm.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var RodmanORMService = function RodmanORMService() {
      _classCallCheck(this, RodmanORMService);
    };

    RodmanORMService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    RodmanORMService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    RodmanORMService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function RodmanORMService_Factory() {
        return new RodmanORMService();
      },
      token: RodmanORMService,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/rodman-orm.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var RodmanORMComponent =
    /*#__PURE__*/
    function () {
      function RodmanORMComponent() {
        _classCallCheck(this, RodmanORMComponent);
      }
      /**
       * @return {?}
       */


      _createClass(RodmanORMComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RodmanORMComponent;
    }();

    RodmanORMComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'RodmanORM-RodmanORM',
        template: "\n    <p>\n      rodman-orm works!\n    </p>\n  "
      }]
    }];
    /** @nocollapse */

    RodmanORMComponent.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/rodman-orm.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var RodmanORMModule = function RodmanORMModule() {
      _classCallCheck(this, RodmanORMModule);
    };

    RodmanORMModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [RodmanORMComponent],
        imports: [],
        exports: [RodmanORMComponent]
      }]
    }];
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

    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-glossary/content-glossary.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-glossary/content-glossary.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsRodmanCoreSrcLibContentsContentGlossaryContentGlossaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\"  >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<div class=\"row\" *ngIf=\"glossaryData?.length > 0\">\n    <div class=\"col-md-2 col-sm-2\"> </div>\n    <div class=\"col-md-8 col-sm-8 mt-5\">\n        <div class=\"row\">            \n            <!-- <div class=\"col-md-12 col-sm-12\" > -->\n                <div class=\"col-md-8 col-sm-8\" >\n                    <div class=\"col-md-6 col-sm-6\" *ngFor=\"let item of glossaryData; let i = index; let even = even;\">      \n                        <div class=\"col-md-12 col-sm-12 border-bottom mt-3\" id=\"{{current_letter}}\" *ngIf=\"matchCharacter(item.title,current_letter)\">\n                            <b><h4>{{current_letter}}</h4></b><br>\n                        </div>\n                        <!-- <div class=\"col-md-12 col-sm-12\" *ngIf=\"matchCharacter(item.title,current_letter)\">\n                            <br><hr>\n                        </div>     -->                              \n                            <a  [routerLink]=\"['/'+item.viewUrl]\">{{ item.title }} </a>                     \n                    </div>    \n                </div>\n                <div class=\"col-md-4 col-sm-4\" >\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>\n                    </div>\n                </div>\n            <!-- </div>          -->\n        </div>\n    </div>  \n</div>  ";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-infographics/content-infographics.component.html":
  /*!**************************************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-infographics/content-infographics.component.html ***!
    \**************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsRodmanCoreSrcLibContentsContentInfographicsContentInfographicsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <CoreLib-lists-contents  routeUrl = {{currentURL}} magazineId=\"{{magazineId}}\" contentType=\"{{contentType}}\"></CoreLib-lists-contents>          \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n    ";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-issue/content-issue.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-issue/content-issue.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsRodmanCoreSrcLibContentsContentIssueContentIssueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<CoreLib-content-magazine-issue url={{checker}} magazineId={{magazineId}}></CoreLib-content-magazine-issue>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsRodmanCoreSrcLibContentsContentRssFeedsContentRssFeedsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <h2> RSS Feeds </h2><br><br>         \n                    <h4> Content Types </h4><br>    \n                    \n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n    \n                    <div class=\"mt-2 mb-2\" *ngIf=\"rssData\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6 p-2\" *ngFor=\"let contentType of rssData\">\n                                <a target=\"_blank\" href=\"{{baseUrl+'feedcreator/rss/'+contentType.id+'/'+magazineId}}\"> {{contentType.tag.replace('_',\" \").replace('_',\" \") | uppercase}}</a>\n                            </div>\n                        </div>\n                    </div>                                \n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"col-md-12 col-sm-12 mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>                 \n                    <div class=\"col-md-12 col-sm-12 mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"col-md-12 col-sm-12 mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div>\n            </div>    \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>        ";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-search/content-search.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-search/content-search.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsRodmanCoreSrcLibContentsContentSearchContentSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8 mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Search For:</b></h6> </div>\n                                <div class=\"col-md-6 col-sm-6 text-left \"> \n                                    <input class=\"form-cotrol\" id=\"searchFiled\" (input)=\"searchFiled=$event.target.value\" type=\"text\" value=\"{{searchSlug}}\" >\n                                    <!-- <input #searchTextFiled type=\"text\" value=\"{{searchSlug}}\" /> -->\n                                </div>\n                                <div class=\"col-md-2 col-sm-2 \"> \n                                    <button (click)=searchTextFilter()>Search</button>\n                                    <!-- <button (click)=\"searchTextFiled(searchTextFiled.value)\" >Search</button> -->\n                \n                                    </div>\n                            </div><br>  \n                \n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Refine by Dates:</b></h6> </div>\n                                <div class=\"col-md-6 col-sm-6 text-left\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6 col-md-6\">\n                                            From : <br> \n                                            <input type=\"date\" class=\"form-control\"  id=\"dateFrom\" (input)=\"dateFrom=$event.target.value\">\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6\">\n                                            To : <br> \n                                            <input type=\"date\" class=\"form-control\"  id=\"dateTo\" (input)=\"dateTo=$event.target.value\">\n                                        </div>\n                                    </div>     \n                                </div>\n                                <div class=\"col-md-2 col-sm-2 \"> \n                                    <button (click)=searchDateFilter()>Search</button> \n                                </div>\n                            </div><br>\n                \n                            <div class=\"row mb-2 border-bottom\">\n                                <div class=\"col-md-4 col-sm-4 \"> <h6><b>Refine By Content:</b></h6> </div>\n                                <div class=\"col-md-8 col-sm-8 text-left \"> \n                                    <select class=\"form-cotrol\"  (input)=\"selectedProduct=$event.target.value\" (click)=\"selectData()\" (change)=searchSelectFilter()>\n                                            <option [value]=\"\">All</option>\n                                            <option *ngFor=\"let SelectOption of refineContentList;let i=index\" [value]=\"SelectOption.id\" [selected]=\"SelectOption.id==anySlug\">\n                                                {{SelectOption.tag.replace('_', ' ') | titlecase}}</option>\n                \n                                    </select>\n                                </div><br>\n                            </div><br>\n                \n                \n                            <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading2\">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                                        <!-- Buyer Guide -->\n                            <div class=\" mb-3 mt-4 border-bottom\" *ngIf=\"micrositeCompany?.length > 0 \" >\n                                <div class=\"mb-3\"><h2>Buyers Guide Companies</h2></div>                \n                                <div *ngIf=\"micrositeCompany?.length > 0\">\n                                    <div class=\"\"><h3>Microsite Companies</h3></div> \n                                    <div *ngFor=\"let microsite of micrositeCompany|slice:0:5;let i = index\">\n                                        <a [routerLink]=\"[microsite.viewUrl]\">{{microsite.title}}</a>\n                                    </div>\n                                </div>            \n                                <div *ngIf=\"featuredComapny?.length > 0\">\n                                    <div class=\"\"><h3>Featured Companies</h3></div> \n                                    <div *ngFor=\"let featured of featuredComapny|slice:0:5; let i = index\">\n                                        <a [routerLink]=\"[featured.viewUrl]\">{{featured.title}}</a>\n                                    </div>\n                                </div>        \n                            </div>\n                    \n                            <!-- Buyer Guide Categories -->\n                            <div class=\"container mb-3 mt-4 border-bottom\"  *ngIf=\"comapnyCategory?.length > 0\">                    \n                                <div><h3>Buyers Guide Categories</h3></div> \n                \n                                <div *ngFor=\"let category of comapnyCategory;let i = index\">\n                                    <!-- <a [routerLink]=\"[category.viewUrl]\">{{category.tag}}</a> -->\n                                    <p>{{category.tag}}</p>\n                                </div>\n                            </div>\n                \n                \n                            <!-- Content List-->\n                            <div class=\"container mb-3 mt-4\"  *ngIf=\"contentList?.length > 0\">\n                                <div class=\"border-bottom\" *ngFor=\"let content of contentList;let i = index\">                \n                                    <div class=\"col-md-12 col-sm-12 mt-1\">\n                                        <span *ngFor=\"let taxonomy of content.taggedTaxonomy.KNOWLEDGE_CENTER_TAXONOMY; let j =index\" >\n                                            <span *ngIf=\"j\"> | </span>\n                                            <a *ngIf=\"magazineId != 1\" [routerLink]=\"['/'+taxonomy.url]\"  > {{taxonomy.tag}}   </a> \n                                            <a *ngIf=\"magazineId == 1\" [routerLink]=\"['/'+staticUrl+taxonomy.url]\"  > {{taxonomy.tag}}</a>\n                                        </span>\n                                    </div> \n                                    <div class=\"col-md-12 col-sm-12\">\n                                       \n                                        <h4 class=\"mt-2\"><a  [routerLink]=\"[content.viewUrl]\"><b>{{safeHtml(content.title)}}</b></a></h4> \n                                        <!-- <h6 class=\"mt-3\">{{content.summary}}</h6> -->\n                                        <h6 class=\"mt-3\" *ngIf=\"content.summary\" [innerHTML]=\"safeHtml(content.summary)\"></h6>\n                                        <h6 class=\"mt-3\" *ngIf=\"((!content.summary) && (content.body))\" [innerHTML]=\"bodyCharacterLength(content.body)\"></h6>\n                                        <small>{{ content.publish_date| date : \"MMM dd , yyyy\"}}</small>\n                                    </div>\n                                </div>\n                            </div>\n                \n                            <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading1\">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                \n                            <div class=\"container mt-5 mb-3\"  *ngIf=\"contentList?.length > 0\">\n                                <div class=\"row\" *ngIf=\"contentList?.length > 9\"> \n                                    <div class=\"col-md-4 col-sm-4\"></div>\n                                        <div class=\"col-md-4 col-sm-4\">    <button class=\"text-center button\"  (click)=\"loadMoreData()\">Load More</button></div>\n                                    <div class=\"col-md-4 col-sm-4\"></div>\n                                </div>   \n                            </div>\n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsRodmanCoreSrcLibContentsContentsWebinarContentsWebinarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    \n                    <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"(!loading)  && ((contentType=='2542' && (currentURL == '')) || (currentURL == '/contents/list_ebook') )\">     <div class=\"heading-border mb-2\" id=\"webinars\"><h2>{{ slugHeading.replace('list_', ' ').replace('-', ' ').replace('_', ' ') | titlecase }}</h2></div>    \n                    <div class=\"border-bottom\" *ngFor=\"let Data of listContentData; let i =index\" >\n                        <div class=\"row\">\n                            <div class=\"col-sm-2 col-md-2\"><img class=\"img-responsive Webinars\"  [src]=\"getImage(Data.primary_image)\" alt=\"No Image\"> </div>\n                            <div class=\"col-sm-10 col-md-10\">\n                                <h1><div [innerHTML]=\"safeHtml(Data.title)\"> </div></h1>\n                                <div [innerHTML]=\"Data.body\"></div>\n                            </div>\n                        </div>   \n                    </div>\n                </div>           \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n    \n    ";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/static-content/static-content.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/static-content/static-content.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsRodmanCoreSrcLibContentsStaticContentStaticContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n\n<div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5\">\n            <div class=\"row\">\n                <div class=\"col-md-8\"  *ngIf=\"staticContentData\">\n                    <h1 *ngIf=\"staticContentData[0]\">{{staticContentData[0].title}}</h1>\n                    <hr>    \n                    <div *ngIf=\"staticContentData[0]\" [innerHTML]=\"safeHtml(staticContentData[0].body)\"> </div>   \n                                              \n                    <!-- <div *ngIf=\"staticContentData[0]\" [innerHTML]=\"staticContentData[0].body\"> </div> -->\n                    <!-- <div *ngIf=\"staticContentData[0]\">{{staticContentData[0].body}}</div> -->\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n        \n            ";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.html":
  /*!*********************************************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.html ***!
    \*********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsRodmanCoreSrcLibDirectorySectionDirectoryHomePageDirectoryHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n        <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n    </div>\n    <div class=\"container-fluid\">    \n        <div class=\"row\">\n            <div class=\"col\">\n                <div *ngIf=\"viewAdRender == 1\">\n                    <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n                </div>\n            </div>\n            <div class=\"col-8 mt-5 \">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-12\"><h3>All Companies</h3></div>\n                    <div class=\"col-sm-4 col-md-4\">\n                        <div class=\"border\">\n                            <!-- <CoreLib-directory-search-box [title]=\"\" [magazineId]=\"\" [data]=\"\"></CoreLib-directory-search-box> -->\n                            <div *ngIf=\"buyersGuideCategoryData?.length > 0 \">\n                                <div class=\"border\"> <h5>SEARCH BY...</h5> </div>\n                                <div class=\"back-color\" [innerHTML]=\"safeHtml(buyersGuideCategoryData[0][0].tag)\"></div>\n                                <div class=\"country\">\n                                    <div class=\"row ml-1\" *ngFor=\"let bgCatData of buyersGuideCategoryData[0][0].child\">\n\n                                        <div *ngIf=\"bgCatData.count != 0 \" class=\"col-sm-9 col-md-9\" [innerHTML]=\"safeHtml(bgCatData.tag)\"></div>\n                                        <div *ngIf=\"bgCatData.count != 0 \" class=\"col-sm-3 col-md-3\" >({{bgCatData.count}})</div>\n\n                                    </div> \n                                </div>    \n                            </div>\n                            <div *ngIf=\"buyersguideCountryData?.length > 0 \">\n                                <div class=\"back-color\" >Country</div>\n                                <div class=\"country\">\n                                    <div class=\"row ml-1\" *ngFor=\"let countryData of buyersguideCountryData\">\n                                        <div *ngIf=\"countryData.count != 0\" class=\"col-sm-9 col-md-9\" [innerHTML]=\"safeHtml(countryData.name)\"></div>\n                                        <div class=\"col-sm-3 col-md-3\" *ngIf=\"(countryData.child) && (countryData.count != 0)\">\n                                            ({{countryData.child ? countryData.child.length: '' }})  </div>\n                                    </div> \n                                </div>    \n                            </div>                          \n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">\n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>  \n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">\n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>\n                        </div>\n                        <div class=\"mt-1\" *ngIf=\"viewAdRender == 1\">                                \n                            <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>\n                        </div>\n        \n                    </div>\n                    <div class=\"col-sm-8 col-md-8\">\n\n                        <div class=\"d-flex justify-content-center mt-5 mb-5\" *ngIf=\"loading\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                        \n                        <!-- 1st -->\n                        <div *ngIf=\"featuredmicrositeCompanies?.length > 0 \"><h3>{{companiesTitleArray[magazineId][0]}}</h3></div>\n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let featuredmicrositeCompaniesData of featuredmicrositeCompanies;let i = index\">                        \n                            <div class=\"col-sm-3 col-md-3\">\n                                <img [src]=\"featuredmicrositeCompaniesData.primary_image_main\" width=\"100%\">\n                            </div>\n                            <div class=\"col-sm-6 col-md-6\">\n                                <a [routerLink]=\"['/'+featuredmicrositeCompaniesData.viewUrl]\">{{featuredmicrositeCompaniesData.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+featuredmicrositeCompaniesData.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>\n                        <!-- 2nd -->\n                        <div class=\"mt-2\" *ngIf=\"featuredmicrositeCompanies?.length > 0 \"><h3>{{companiesTitleArray[magazineId][1]}}</h3></div>\n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let micrositeCompanies of micrositeCompanies;let i = index\">                        \n                            <div class=\"col-sm-3 col-md-3\">\n                                <img [src]=\"micrositeCompanies.primary_image_main\" width=\"100%\">\n                            </div>\n                            <div class=\"col-sm-6 col-md-6\">\n                                <a [routerLink]=\"['/'+micrositeCompanies.viewUrl]\" >{{micrositeCompanies.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+micrositeCompanies.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>                        \n\n\n                        <!-- 3rd -->\n                        <div class=\"mt-2\" *ngIf=\"featuredBgCompanies?.length > 0 \">\n                            \n                            <ng-container *ngIf=\"(magazineId == 5 ) || (magazineId == 13);else defaultView\">\n                                <ng-container *ngIf=\"featuredBgCompanies[0].content_type_id == '2666'\">  \n                                    <h3>Deluxe Companies</h3>\n                                </ng-container>\n                                <ng-container *ngIf=\"featuredBgCompanies[0].content_type_id == '2543'\">  \n                                    <h3>{{companiesTitleArray[magazineId][2]}}</h3>\n                                </ng-container>\n                            </ng-container>                  \n                        \n                            <ng-template #defaultView>\n                                <ng-container > \n                                    <h3>{{companiesTitleArray[magazineId][2]}}</h3>\n                                </ng-container> \n                            </ng-template>\n\n\n\n\n                        </div>  \n                        <div class=\"row mt-3 mb-3\" *ngFor=\"let featuredBgCompanies of featuredBgCompanies;let i = index\">                 <div class=\"col-sm-9 col-md-9\">\n                                <a [routerLink]=\"['/'+featuredBgCompanies.viewUrl]\">{{featuredBgCompanies.title}}</a>\n                            </div>\n                            <div class=\"col-sm-3 col-md-3\">\n                                <a [routerLink]=\"['/'+featuredBgCompanies.viewUrl]\">View Listing</a>\n                            </div>                         \n                        </div>                            \n\n                        \n                        <!-- All -->\n                        <div class=\"mt-2\" *ngIf=\"data?.length > 0 \"><h3 id=\"allCompany\">All Companies</h3></div>\n                        <div class=\"mt-2 mb-2\" *ngIf=\"alphabet?.length > 0 \">\n                            <div class=\"row text-center back-color\" >\n                                <a *ngFor=\"let Character of alphabet\" class=\"mr-1\" [routerLink] [fragment]=\"Character\" [routerLinkActive]=\"'active'\"  [routerLinkActiveOptions]=\"{exact: true}\">  {{Character | titlecase}}  </a>\n                            </div>    \n                        </div>    \n\n                        <div class=\"row mt-3 mb-1\" *ngFor=\"let allCompanies of data;let i = index\">         \n                            <div class=\"col-md-12 col-sm-12 border-bottom mt-3\" id=\"{{current_letter}}\" *ngIf=\"matchCharacter(allCompanies.title,current_letter)\"> \n                                <div class=\"row\">\n                                    <div class=\"col-sm-9 col-md-9\">\n                                        <b><h4>{{current_letter}}</h4></b>\n                                    </div>\n                                    <div class=\"col-sm-3 col-md-3\">\n                                        <!-- <a [routerLink] [fragment]=\"'allCompany'\" [routerLinkActive]=\"'active'\"  [routerLinkActiveOptions]=\"{exact: true}\">  Return To Top    </a>  -->\n                                    </div>      <br> \n                                </div>\n                            </div>\n                                <a  [routerLink]=\"['/'+allCompanies.viewUrl]\">{{ allCompanies.title }} </a>         \n                        </div>    \n\n                    </div> \n                </div>      \n            </div>\n            <div class=\"col\">\n                <div *ngIf=\"viewAdRender == 1\">\n                    <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n                </div>\n            </div>\n        </div>   \n    </div>\n    \n    ";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/sites/components/not-found/not-found.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/sites/components/not-found/not-found.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsRodmanCoreSrcLibSitesComponentsNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p> Core not-found works!</p> -->\n\n\n<div class=\"text-center\">\n    <h3> Under Development... </h3>\n\n   <p> Oops! <br>\n    This is awkward <br>\n    You are looking for something that doesn't actually exist\n   </p>\n</div>";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/users/Components/user-profile/user-profile.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/users/Components/user-profile/user-profile.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsRodmanCoreSrcLibUsersComponentsUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n<div class=\"text-center\"><p> Core user-profile works!</p>\n    <h3>Users Profile</h3>\n</div>     -->\n\n\n\n\n<div class=\"text-center\" *ngIf=\"message; else showLoginRequestMessage\">\n    <h2>Hello You Are Login</h2>\n</div> \n    <ng-template #showLoginRequestMessage>\n        <div class=\"text-center\" > <h2>Hello, please login to access the User app</h2></div>\n    </ng-template>";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n        <CoreLib-ads-display [ads]=\"getAllAd\" location='header_0' footerData='show' ></CoreLib-ads-display> \n    </div> -->\n<CoreLib-header  magazineId=\"{{magazineId}}\" magazineName=\"{{magazineName}}\" menuId='81' groupId=\"\" fieldId=\"\" formId=\"\"></CoreLib-header>\n        <router-outlet>  </router-outlet>\n<CoreLib-footer magazineId=\"{{magazineId}}\"></CoreLib-footer>\n\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-content-view/bp-content-view.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-content-view/bp-content-view.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBpContantBpContentViewBpContentViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<CoreLib-content-view contentPageUrl = {{contentPageUrl}} magazineId = {{magazineId}}></CoreLib-content-view>";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-top-company/bp-top-company.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-top-company/bp-top-company.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBpContantBpTopCompanyBpTopCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<CoreLib-top-company-home-page currentURL={{contentPageUrl}} magazineId={{magazineId}}></CoreLib-top-company-home-page>\n";
    /***/
  },

  /***/
  "../../node_modules/tslib/tslib.es6.js":
  /*!*****************************************************************!*\
    !*** /home/bezoar/RodmanAngled/node_modules/tslib/tslib.es6.js ***!
    \*****************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "../rodman-core/src/lib/contents/content-glossary/content-glossary.component.css":
  /*!***************************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-glossary/content-glossary.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function rodmanCoreSrcLibContentsContentGlossaryContentGlossaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".half-space{\n    margin-right:10px; ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvY29udGVudHMvY29udGVudC1nbG9zc2FyeS9jb250ZW50LWdsb3NzYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoicHJvamVjdHMvcm9kbWFuLWNvcmUvc3JjL2xpYi9jb250ZW50cy9jb250ZW50LWdsb3NzYXJ5L2NvbnRlbnQtZ2xvc3NhcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYWxmLXNwYWNle1xuICAgIG1hcmdpbi1yaWdodDoxMHB4OyA7XG59Il19 */";
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-glossary/content-glossary.component.ts":
  /*!**************************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-glossary/content-glossary.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ContentGlossaryComponent */

  /***/
  function rodmanCoreSrcLibContentsContentGlossaryContentGlossaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentGlossaryComponent", function () {
      return ContentGlossaryComponent;
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


    var _list_content_list_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../list-content/list-content.service */
    "../rodman-core/src/lib/contents/list-content/list-content.service.ts");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");

    var ContentGlossaryComponent =
    /*#__PURE__*/
    function () {
      function ContentGlossaryComponent(ActivatedRoute, Router, ListContentService, RodmanCoreService) {
        _classCallCheck(this, ContentGlossaryComponent);

        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.ListContentService = ListContentService;
        this.RodmanCoreService = RodmanCoreService;
        this.glossaryData = [];
        this.loading = true;
        this.getAllAd = [];
        this.current_letter = '';
      }

      _createClass(ContentGlossaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this59 = this;

          this.ActivatedRoute.data.subscribe(function (data) {
            _this59.magazineId = data.magazineId;
          });
          this.ListContentService.getContent('glossary', this.magazineId, 10, 0, '').subscribe(function (data) {
            _this59.glossaryData = data['data'];

            _this59.getads();

            _this59.loading = false;
          });
        }
      }, {
        key: "getads",
        value: function getads() {
          var _this60 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(function (data) {
            _this60.getAllAd = data;
            _this60.viewAdRender = 1;
          });
        }
      }, {
        key: "matchCharacter",
        value: function matchCharacter(current, pre) {
          if (current.charAt(0) != pre) {
            this.current_letter = current.charAt(0);
            return true;
          }

          return false;
        }
      }]);

      return ContentGlossaryComponent;
    }();

    ContentGlossaryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _list_content_list_content_service__WEBPACK_IMPORTED_MODULE_2__["ListContentService"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_3__["RodmanCoreService"]
      }];
    };

    ContentGlossaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'CoreLib-content-glossary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-glossary.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-glossary/content-glossary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-glossary.component.css */
      "../rodman-core/src/lib/contents/content-glossary/content-glossary.component.css")).default]
    })], ContentGlossaryComponent);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-infographics/content-infographics.component.css":
  /*!***********************************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-infographics/content-infographics.component.css ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function rodmanCoreSrcLibContentsContentInfographicsContentInfographicsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL2NvbnRlbnRzL2NvbnRlbnQtaW5mb2dyYXBoaWNzL2NvbnRlbnQtaW5mb2dyYXBoaWNzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-infographics/content-infographics.component.ts":
  /*!**********************************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-infographics/content-infographics.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ContentInfographicsComponent */

  /***/
  function rodmanCoreSrcLibContentsContentInfographicsContentInfographicsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentInfographicsComponent", function () {
      return ContentInfographicsComponent;
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


    var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../rodman-core/src/lib/rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var ContentInfographicsComponent =
    /*#__PURE__*/
    function () {
      function ContentInfographicsComponent(router, RodmanCoreService, ActivatedRoute) {
        var _this61 = this;

        _classCallCheck(this, ContentInfographicsComponent);

        this.router = router;
        this.RodmanCoreService = RodmanCoreService;
        this.ActivatedRoute = ActivatedRoute;
        this.getAllAd = [];
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this61.currentURL = event.url;
          }
        });
      }

      _createClass(ContentInfographicsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this62 = this;

          this.ActivatedRoute.data.subscribe(function (data) {
            _this62.magazineId = data.magazineId;
          });
          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(function (data) {
            _this62.getAllAd = data;
            _this62.viewAdRender = 1;
          });
        }
      }]);

      return ContentInfographicsComponent;
    }();

    ContentInfographicsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_3__["RodmanCoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ContentInfographicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'CoreLib-content-infographics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-infographics.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-infographics/content-infographics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-infographics.component.css */
      "../rodman-core/src/lib/contents/content-infographics/content-infographics.component.css")).default]
    })], ContentInfographicsComponent);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-issue/content-issue.component.css":
  /*!*********************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-issue/content-issue.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function rodmanCoreSrcLibContentsContentIssueContentIssueComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL2NvbnRlbnRzL2NvbnRlbnQtaXNzdWUvY29udGVudC1pc3N1ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-issue/content-issue.component.ts":
  /*!********************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-issue/content-issue.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ContentIssueComponent */

  /***/
  function rodmanCoreSrcLibContentsContentIssueContentIssueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentIssueComponent", function () {
      return ContentIssueComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _content_issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content-issue.service */
    "../rodman-core/src/lib/contents/content-issue/content-issue.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var ContentIssueComponent =
    /*#__PURE__*/
    function () {
      function ContentIssueComponent(RodmanCoreService, ActivatedRoute, Router, ContentIssueService) {
        var _this63 = this;

        _classCallCheck(this, ContentIssueComponent);

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
        Router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            var data = event.url.split('/');
            _this63.checker = data[data.length - 1];
          }
        });
      }

      _createClass(ContentIssueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this64 = this;

          this.ActivatedRoute.data.subscribe(function (data) {
            _this64.magazineId = data.magazineId;
          });
        }
      }]);

      return ContentIssueComponent;
    }();

    ContentIssueComponent.ctorParameters = function () {
      return [{
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_5__["RodmanCoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _content_issue_service__WEBPACK_IMPORTED_MODULE_3__["ContentIssueService"]
      }];
    };

    ContentIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'CoreLib-content-issue',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-issue.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-issue/content-issue.component.html")).default,
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-issue.component.css */
      "../rodman-core/src/lib/contents/content-issue/content-issue.component.css")).default]
    })], ContentIssueComponent);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-issue/content-issue.service.ts":
  /*!******************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-issue/content-issue.service.ts ***!
    \******************************************************************************/

  /*! exports provided: ContentIssueService */

  /***/
  function rodmanCoreSrcLibContentsContentIssueContentIssueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentIssueService", function () {
      return ContentIssueService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var ContentIssueService =
    /*#__PURE__*/
    function () {
      function ContentIssueService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ContentIssueService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }

      _createClass(ContentIssueService, [{
        key: "getIssue",
        value: function getIssue(magazineId, slug) {
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'issuescontroller/getIssues', {
            magazineId: magazineId,
            slug: slug
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ContentIssueService;
    }();

    ContentIssueService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }];
    };

    ContentIssueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ContentIssueService);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.css":
  /*!*****************************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function rodmanCoreSrcLibContentsContentRssFeedsContentRssFeedsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL2NvbnRlbnRzL2NvbnRlbnQtcnNzLWZlZWRzL2NvbnRlbnQtcnNzLWZlZWRzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.ts":
  /*!****************************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ContentRssFeedsComponent */

  /***/
  function rodmanCoreSrcLibContentsContentRssFeedsContentRssFeedsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentRssFeedsComponent", function () {
      return ContentRssFeedsComponent;
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


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _content_rss_feeds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./content-rss-feeds.service */
    "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.service.ts");

    var ContentRssFeedsComponent =
    /*#__PURE__*/
    function () {
      function ContentRssFeedsComponent(ActivatedRoute, Router, RodmanCoreService, ContentRssFeedsService) {
        _classCallCheck(this, ContentRssFeedsComponent);

        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.RodmanCoreService = RodmanCoreService;
        this.ContentRssFeedsService = ContentRssFeedsService;
        this.loading = true;
        this.getAllAd = [];
        this.baseUrl = _rodman_core_service__WEBPACK_IMPORTED_MODULE_2__["apiURL"];
      }

      _createClass(ContentRssFeedsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this65 = this;

          this.ActivatedRoute.data.subscribe(function (data) {
            _this65.magazineId = data.magazineId;
          });
          this.rssDataMethod();
          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(function (data) {
            _this65.getAllAd = data;
            _this65.viewAdRender = 1;
          });
        }
      }, {
        key: "rssDataMethod",
        value: function rssDataMethod() {
          var _this66 = this;

          this.ContentRssFeedsService.rssFeeds(this.magazineId).subscribe(function (data) {
            _this66.rssData = data['country'];
            _this66.loading = false;
          });
        }
      }]);

      return ContentRssFeedsComponent;
    }();

    ContentRssFeedsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_2__["RodmanCoreService"]
      }, {
        type: _content_rss_feeds_service__WEBPACK_IMPORTED_MODULE_4__["ContentRssFeedsService"]
      }];
    };

    ContentRssFeedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'CoreLib-content-rss-feeds',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-rss-feeds.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-rss-feeds.component.css */
      "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.css")).default]
    })], ContentRssFeedsComponent);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.service.ts":
  /*!**************************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.service.ts ***!
    \**************************************************************************************/

  /*! exports provided: ContentRssFeedsService */

  /***/
  function rodmanCoreSrcLibContentsContentRssFeedsContentRssFeedsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentRssFeedsService", function () {
      return ContentRssFeedsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var ContentRssFeedsService =
    /*#__PURE__*/
    function () {
      function ContentRssFeedsService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ContentRssFeedsService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }

      _createClass(ContentRssFeedsService, [{
        key: "rssFeeds",
        value: function rssFeeds(magazineId) {
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'contentsController/getContentType', {
            magazineId: magazineId
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ContentRssFeedsService;
    }();

    ContentRssFeedsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }];
    };

    ContentRssFeedsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ContentRssFeedsService);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-search/content-search.component.css":
  /*!***********************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-search/content-search.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function rodmanCoreSrcLibContentsContentSearchContentSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".border-bottom{\n    border-bottom: 1px solid black!important;\n}\n\n.border-top{\n    border-top: 1px solid black!important;\n}\n\n.form-group.hidden {\n    width: 0;\n    margin: 0;\n    border: none;\n    padding: 0;\n  }\n\n.custom-day {\n    text-align: center;\n    padding: 0.185rem 0.25rem;\n    display: inline-block;\n    height: 2rem;\n    width: 2rem;\n  }\n\n.custom-day.focused {\n    background-color: #e6e6e6;\n  }\n\n.custom-day.range, .custom-day:hover {\n    background-color: rgb(2, 117, 216);\n    color: white;\n  }\n\n.custom-day.faded {\n    background-color: rgba(2, 117, 216, 0.5);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvY29udGVudHMvY29udGVudC1zZWFyY2gvY29udGVudC1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFLRTtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0FBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsWUFBWTtFQUNkOztBQUNBO0lBQ0Usd0NBQXdDO0VBQzFDIiwiZmlsZSI6InByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvY29udGVudHMvY29udGVudC1zZWFyY2gvY29udGVudC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItYm90dG9te1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjayFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9we1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjayFpbXBvcnRhbnQ7XG59XG5cblxuXG5cbiAgLmZvcm0tZ3JvdXAuaGlkZGVuIHtcbiAgICB3aWR0aDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmN1c3RvbS1kYXkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gIH1cbiAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgfVxuICAuY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jdXN0b20tZGF5LmZhZGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xuICB9Il19 */";
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-search/content-search.component.ts":
  /*!**********************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-search/content-search.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ContentSearchComponent */

  /***/
  function rodmanCoreSrcLibContentsContentSearchContentSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentSearchComponent", function () {
      return ContentSearchComponent;
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


    var _content_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content-search.service */
    "../rodman-core/src/lib/contents/content-search/content-search.service.ts");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var ContentSearchComponent =
    /*#__PURE__*/
    function () {
      function ContentSearchComponent(calendar, RodmanCoreService, Router, ContentSearchService, ActivatedRoute) {
        var _this67 = this;

        _classCallCheck(this, ContentSearchComponent);

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
        Router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this67.routeUrl = event.url;
            _this67.contentList = [];

            _this67.ActivatedRoute.params.subscribe(function (params) {
              _this67.page = 0;
              _this67.anySlug = params['any'];
              _this67.searchSlug = params['slug'];
            });

            _this67.getSearchData();
          }
        });
        this.ActivatedRoute.data.subscribe(function (data) {
          _this67.magazineId = data.magazineId;
        });
      }

      _createClass(ContentSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.magazineId == 1) {
            this.staticUrl = 'knowledge-center/';
          }

          this.getRefineData();
          this.getPageAds(); //   this.ActivatedRoute.params.subscribe(params => {
          //     this.page=0;
          //     this.anySlug = params['any'];
          //     this.searchSlug = params['slug'];   
          //  });
          //  this.getSearchData();
          //  this.getRefineData();  
        }
      }, {
        key: "selectData",
        value: function selectData() {
          if (this.refineContentList) {
            this.getRefineData();
          }
        }
      }, {
        key: "getRefineData",
        value: function getRefineData() {
          var _this68 = this;

          this.ContentSearchService.refineContentList(this.magazineId).subscribe(function (data) {
            _this68.refineContentList = data['country'];
          });
        }
      }, {
        key: "searchSelectFilter",
        value: function searchSelectFilter() {
          // this.searchFiled=(this.searchSlug!='') ? this.searchSlug : 'all' ;
          // if(this.searchFiled==='undefined' || this.searchFiled==''){
          //   this.searchFiled=this.searchSlug;
          // }
          this.page = 0;

          if (this.selectedProduct === 'undefined' || this.selectedProduct == '') {
            this.selectedProduct = "all";
          }

          this.Router.navigateByUrl('/contents/searchcontent/' + this.selectedProduct + '/' + this.searchFiled); // this.getSearchData();
        }
      }, {
        key: "searchDateFilter",
        value: function searchDateFilter() {
          this.page = 0;
          this.getSearchData();
        }
      }, {
        key: "searchTextFilter",
        value: function searchTextFilter() {
          this.page = 0;

          if (this.searchFiled === 'undefined' || this.searchFiled == '') {
            this.searchFiled = this.searchSlug;
            this.anySlug = 'all';
          }

          this.Router.navigateByUrl('/contents/searchcontent/' + this.anySlug + '/' + this.searchFiled);
        }
      }, {
        key: "getSearchData",
        value: function getSearchData() {
          var _this69 = this;

          if (this.loadMoreCheck) {
            this.ContentSearchService.SearchCompany(this.searchSlug, this.page, this.limit, this.magazineId, this.dateFrom, this.dateTo, this.selectedProduct).subscribe(function (data) {
              _this69.companyDataList = data['bgTopCompanies'];
              _this69.comapnyCategory = data['bgCategories'];
              _this69.micrositeCompany = _this69.companyDataList.filter(function (map) {
                return map.has_featured_mircosite_listing == 1;
              });
              _this69.featuredComapny = _this69.companyDataList.filter(function (map) {
                return map.has_featured_mircosite_listing == 0;
              });
            });
            this.loading2 = false;
          }

          this.selectedProduct = this.selectedProduct == 'all' ? "" : this.selectedProduct;
          this.ContentSearchService.SearchContent(this.searchSlug, this.page, this.limit, this.magazineId, this.dateFrom, this.dateTo, this.selectedProduct).subscribe(function (data) {
            _this69.putContentList = data['data'];
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = _this69.putContentList[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var content = _step9.value;

                _this69.contentList.push(content);
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                  _iterator9.return();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
            }

            _this69.page = data['page'] + 1;
          }); // setTimeout(function(){
          //   this.loading1 = false;
          // },6000);

          setTimeout(function () {
            _this69.loading1 = false;
          }, 10000);
        }
      }, {
        key: "spinnerHide",
        value: function spinnerHide() {}
      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }, {
        key: "bodyCharacterLength",
        value: function bodyCharacterLength(data) {
          return this.RodmanCoreService.bodyCharacterLength(data);
        }
      }, {
        key: "loadMoreData",
        value: function loadMoreData() {
          this.loading1 = true;
          this.loadMoreCheck = false;
          this.getSearchData();
        }
      }, {
        key: "getPageAds",
        value: function getPageAds() {
          var _this70 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(function (data) {
            _this70.getAllAd = data;
            _this70.viewAdRender = 1;
          });
        } // Date Option

      }, {
        key: "onDateSelection",
        value: function onDateSelection(date) {
          if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
          } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
          } else {
            this.toDate = null;
            this.fromDate = date;
          }
        }
      }, {
        key: "isHovered",
        value: function isHovered(date) {
          return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
        }
      }, {
        key: "isInside",
        value: function isInside(date) {
          return date.after(this.fromDate) && date.before(this.toDate);
        }
      }, {
        key: "isRange",
        value: function isRange(date) {
          return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
        }
      }]);

      return ContentSearchComponent;
    }();

    ContentSearchComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _content_search_service__WEBPACK_IMPORTED_MODULE_3__["ContentSearchService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ContentSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'CoreLib-content-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-search.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/content-search/content-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-search.component.css */
      "../rodman-core/src/lib/contents/content-search/content-search.component.css")).default]
    })], ContentSearchComponent);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/content-search/content-search.service.ts":
  /*!********************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/content-search/content-search.service.ts ***!
    \********************************************************************************/

  /*! exports provided: ContentSearchService */

  /***/
  function rodmanCoreSrcLibContentsContentSearchContentSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentSearchService", function () {
      return ContentSearchService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var ContentSearchService =
    /*#__PURE__*/
    function () {
      function ContentSearchService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ContentSearchService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }

      _createClass(ContentSearchService, [{
        key: "refineContentList",
        value: function refineContentList(magazineId) {
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'contentsController/getContentType', {
            magazineId: magazineId
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }, {
        key: "SearchContent",
        value: function SearchContent(search, page, limit, magazineId, searchDateFrom, searchDateTo, contentTypeId) {
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'contentsController/getSearchContent', {
            search: search,
            page: page,
            limit: limit,
            magazineId: magazineId,
            searchDateFrom: searchDateFrom,
            searchDateTo: searchDateTo,
            contentTypeId: contentTypeId
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }, {
        key: "SearchCompany",
        value: function SearchCompany(search, page, limit, magazineId, searchDateFrom, searchDateTo, contentTypeId) {
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'contentsController/getSearchBgCompanies', {
            search: search,
            page: page,
            limit: limit,
            magazineId: magazineId,
            searchDateFrom: searchDateFrom,
            searchDateTo: searchDateTo,
            contentTypeId: contentTypeId
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ContentSearchService;
    }();

    ContentSearchService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }];
    };

    ContentSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ContentSearchService);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.css":
  /*!***************************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function rodmanCoreSrcLibContentsContentsWebinarContentsWebinarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".heading-border{\n    border-bottom: 1px solid #000000;\n    color: #000000;\n}\n.container{\n    min-height: 500px;\n}\n.Webinars{\n    max-width: 100%;\n    min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvY29udGVudHMvY29udGVudHMtd2ViaW5hci9jb250ZW50cy13ZWJpbmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvY29udGVudHMvY29udGVudHMtd2ViaW5hci9jb250ZW50cy13ZWJpbmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZy1ib3JkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG4uY29udGFpbmVye1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xufVxuXG4uV2ViaW5hcnN7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.ts":
  /*!**************************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ContentsWebinarComponent */

  /***/
  function rodmanCoreSrcLibContentsContentsWebinarContentsWebinarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentsWebinarComponent", function () {
      return ContentsWebinarComponent;
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


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_content_list_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../list-content/list-content.service */
    "../rodman-core/src/lib/contents/list-content/list-content.service.ts");

    var ContentsWebinarComponent =
    /*#__PURE__*/
    function () {
      function ContentsWebinarComponent(ListContentService, RodmanCoreService, Router, ActivatedRoute) {
        var _this71 = this;

        _classCallCheck(this, ContentsWebinarComponent);

        this.ListContentService = ListContentService;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.limit = 10;
        this.page = 0;
        this.loading = true;
        this.getAllAd = [];
        Router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this71.currentURL = event.url;

            if (_this71.currentURL == '/contents/list_webinars') {
              _this71.currentURL = '';
              _this71.contentType = '2542';
            }
          }
        });
      }

      _createClass(ContentsWebinarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this72 = this;

          this.ActivatedRoute.data.subscribe(function (data) {
            _this72.magazineId = data.magazineId;
          });
          this.getContentData();
          this.getads();
        }
      }, {
        key: "getImage",
        value: function getImage(imageId) {
          return this.RodmanCoreService.displayImageUrl(imageId);
        }
      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:,]/g, "")
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }, {
        key: "getContentData",
        value: function getContentData() {
          var _this73 = this;

          this.ListContentService.getContent(this.currentURL, this.magazineId, this.limit, this.page, this.contentType).subscribe(function (data) {
            _this73.listContentData = data['data'];

            if (_this73.page == 0) {
              _this73.slugHeading = data['contentTypeName'];
            }

            _this73.page = data['page'] + 1;
            _this73.loading = false;
          });
        }
      }, {
        key: "getads",
        value: function getads() {
          var _this74 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(function (data) {
            _this74.getAllAd = data;
            _this74.viewAdRender = 1;
          });
        }
      }]);

      return ContentsWebinarComponent;
    }();

    ContentsWebinarComponent.ctorParameters = function () {
      return [{
        type: _list_content_list_content_service__WEBPACK_IMPORTED_MODULE_4__["ListContentService"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_2__["RodmanCoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ContentsWebinarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'CoreLib-contents-webinar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contents-webinar.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contents-webinar.component.css */
      "../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.css")).default]
    })], ContentsWebinarComponent);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/list-content/list-content.service.ts":
  /*!****************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/list-content/list-content.service.ts ***!
    \****************************************************************************/

  /*! exports provided: ListContentService */

  /***/
  function rodmanCoreSrcLibContentsListContentListContentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListContentService", function () {
      return ListContentService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var ListContentService =
    /*#__PURE__*/
    function () {
      function ListContentService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, ListContentService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }

      _createClass(ListContentService, [{
        key: "getContent",
        value: function getContent(slug, magazineId, limit, page, contentType) {
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/getContentTypeContent', {
            pageUrl: slug,
            magazineId: magazineId,
            limit: limit,
            page: page,
            contentType: contentType
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }, {
        key: "getContentTopTaxonomy",
        value: function getContentTopTaxonomy(slug, magazineId) {
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/getContentTypeTopTaxonomy', {
            pageUrl: slug,
            magazineId: magazineId
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return ListContentService;
    }();

    ListContentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }];
    };

    ListContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ListContentService);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/static-content/static-content.component.css":
  /*!***********************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/static-content/static-content.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function rodmanCoreSrcLibContentsStaticContentStaticContentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL2NvbnRlbnRzL3N0YXRpYy1jb250ZW50L3N0YXRpYy1jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/static-content/static-content.component.ts":
  /*!**********************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/static-content/static-content.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: StaticContentComponent */

  /***/
  function rodmanCoreSrcLibContentsStaticContentStaticContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticContentComponent", function () {
      return StaticContentComponent;
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


    var _static_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./static-content.service */
    "../rodman-core/src/lib/contents/static-content/static-content.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var StaticContentComponent =
    /*#__PURE__*/
    function () {
      function StaticContentComponent(StaticContentService, Router, ActivatedRoute, RodmanCoreService) {
        var _this75 = this;

        _classCallCheck(this, StaticContentComponent);

        this.StaticContentService = StaticContentService;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.RodmanCoreService = RodmanCoreService;
        this.limit = 30;
        this.page = 0;
        this.contentType = '';
        this.getAllAd = [];
        this.loading = true;
        Router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this75.routeUrl = event.url;
          }
        });
      }

      _createClass(StaticContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this76 = this;

          this.ActivatedRoute.data.subscribe(function (data) {
            _this76.magazineId = data.magazineId;
          });
          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(function (data) {
            _this76.getAllAd = data;
            _this76.viewAdRender = 1;
          });
          this.getStatic();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {// this.getStatic();
        }
      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.RodmanCoreService.safeHtml(data);
        }
      }, {
        key: "getStatic",
        value: function getStatic() {
          var _this77 = this;

          this.StaticContentService.getStaticContent(this.routeUrl, this.magazineId, this.limit, this.page, this.contentType).subscribe(function (data) {
            _this77.staticContentData = data['data'];
            _this77.loading = false;
          });
        }
      }]);

      return StaticContentComponent;
    }();

    StaticContentComponent.ctorParameters = function () {
      return [{
        type: _static_content_service__WEBPACK_IMPORTED_MODULE_2__["StaticContentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }];
    };

    StaticContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'CoreLib-static-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./static-content.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/contents/static-content/static-content.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./static-content.component.css */
      "../rodman-core/src/lib/contents/static-content/static-content.component.css")).default]
    })], StaticContentComponent);
    /***/
  },

  /***/
  "../rodman-core/src/lib/contents/static-content/static-content.service.ts":
  /*!********************************************************************************!*\
    !*** ../rodman-core/src/lib/contents/static-content/static-content.service.ts ***!
    \********************************************************************************/

  /*! exports provided: StaticContentService */

  /***/
  function rodmanCoreSrcLibContentsStaticContentStaticContentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticContentService", function () {
      return StaticContentService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var StaticContentService =
    /*#__PURE__*/
    function () {
      function StaticContentService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, StaticContentService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }

      _createClass(StaticContentService, [{
        key: "getStaticContent",
        value: function getStaticContent(slug, magazineId, limit, page, contentType) {
          var slugs = slug.replace('/', '');
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/getContentTaxonomys', {
            pageUrl: slugs,
            magazineId: magazineId,
            limit: limit,
            page: page,
            contentType: contentType
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return StaticContentService;
    }();

    StaticContentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }];
    };

    StaticContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StaticContentService);
    /***/
  },

  /***/
  "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.css":
  /*!******************************************************************************************************!*\
    !*** ../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.css ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function rodmanCoreSrcLibDirectorySectionDirectoryHomePageDirectoryHomePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back-color{\n    background: gainsboro;\n    padding: 10px;\n}\n.country{\n    max-height: 300px;\n    overflow-y: scroll;\n    overflow-x:hidden ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3JvZG1hbi1jb3JlL3NyYy9saWIvZGlyZWN0b3J5LXNlY3Rpb24vZGlyZWN0b3J5LWhvbWUtcGFnZS9kaXJlY3RvcnktaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoicHJvamVjdHMvcm9kbWFuLWNvcmUvc3JjL2xpYi9kaXJlY3Rvcnktc2VjdGlvbi9kaXJlY3RvcnktaG9tZS1wYWdlL2RpcmVjdG9yeS1ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWNvbG9ye1xuICAgIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvdW50cnl7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6aGlkZGVuIDtcbn0iXX0= */";
    /***/
  },

  /***/
  "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: DirectoryHomePageComponent */

  /***/
  function rodmanCoreSrcLibDirectorySectionDirectoryHomePageDirectoryHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectoryHomePageComponent", function () {
      return DirectoryHomePageComponent;
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


    var _directory_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./directory-home-page.service */
    "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.service.ts");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");

    var DirectoryHomePageComponent =
    /*#__PURE__*/
    function () {
      function DirectoryHomePageComponent(ActivatedRoute, DirectoryHomePageService, RodmanCoreService, Router) {
        var _this78 = this;

        _classCallCheck(this, DirectoryHomePageComponent);

        this.ActivatedRoute = ActivatedRoute;
        this.DirectoryHomePageService = DirectoryHomePageService;
        this.RodmanCoreService = RodmanCoreService;
        this.Router = Router;
        this.getAllAd = [];
        this.alphabet = [];
        this.loading = true;
        this.current_letter = '';
        this.companiesTitleArray = {
          '1': {
            '0': 'Featured Supplier Showcase Companies',
            '1': 'Supplier Showcase Companies',
            '2': 'Featured Companies'
          },
          '5': {
            '0': 'Featured Company Capabilities Microsite',
            '1': 'Company Capabilities Microsite',
            '2': 'Featured Companies'
          },
          '6': {
            '0': 'Featured Company Profiles Microsite',
            '1': 'Company Profiles Microsite',
            '2': 'Featured Companies'
          },
          '7': {
            '0': 'Featured Microsite Companies',
            '1': 'Microsite Companies',
            '2': 'Featured Companies'
          },
          '8': {
            '0': 'Featured Company Profiles Microsite',
            '1': 'Company Profiles Microsite',
            '2': 'Featured Companies'
          },
          '9': {
            '0': 'Featured Corporate Profile Microsite',
            '1': 'Corporate Profile Microsite',
            '2': 'Featured Companies'
          },
          '10': {
            '0': 'Featured Technical Profile Microsite',
            '1': 'Technical Profile Microsite',
            '2': 'Featured Companies'
          },
          '11': {
            '0': 'Featured Microsite Companies',
            '1': 'Microsite Companies',
            '2': 'Featured Companies'
          },
          '12': {
            '0': 'Featured Microsite Companies',
            '1': 'Microsite Companies',
            '2': 'Featured Companies'
          },
          '13': {
            '0': 'Company Profile MicrositePLUS',
            '1': 'Company Profile Microsite',
            '2': 'Featured Companies'
          },
          '14': {
            '0': 'Featured Microsite Companies',
            '1': 'Microsite Companies',
            '2': 'Featured Companies'
          },
          '15': {
            '0': 'Featured Technical Profile Microsite',
            '1': 'Technical Profile Microsite',
            '2': 'Featured Companies'
          }
        };
        this.featuredmicrositeCompanies = [];
        this.micrositeCompanies = [];
        this.featuredBgCompanies = [];
        Router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this78.currentURL = event.url;
          }
        });
      }

      _createClass(DirectoryHomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this79 = this;

          this.ActivatedRoute.data.subscribe(function (data) {
            _this79.magazineId = data.magazineId;
          });
          this.getPageAd();
          this.buyersguideCategory();
          this.buyerGuideCompany();
          this.buyersguideCountry();
        }
      }, {
        key: "getPageAd",
        value: function getPageAd() {
          var _this80 = this;

          this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(function (data) {
            _this80.getAllAd = data;
            _this80.viewAdRender = 1;
          });
        }
      }, {
        key: "buyerGuideCompany",
        value: function buyerGuideCompany() {
          var _this81 = this;

          this.DirectoryHomePageService.buyerGuideCompany(this.magazineId, this.currentURL).subscribe(function (data) {
            _this81.data = data['data'];
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
              for (var _iterator10 = _this81.data[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var compnayCheck = _step10.value;

                if (compnayCheck.has_microsite_listing == 1 && compnayCheck.has_priority_listing == 1 && compnayCheck.has_featured_mircosite_listing == 1) {
                  _this81.featuredmicrositeCompanies.push(compnayCheck);
                } else if (compnayCheck.has_microsite_listing == 1 && compnayCheck.has_priority_listing == 1 && compnayCheck.has_featured_mircosite_listing == 0) {
                  _this81.micrositeCompanies.push(compnayCheck);
                } else if (compnayCheck.has_microsite_listing == 0 && compnayCheck.has_priority_listing == 1 && compnayCheck.has_featured_mircosite_listing == 0) {
                  _this81.featuredBgCompanies.push(compnayCheck); // let checkCompanyTitle = compnayCheck.content_type_id;
                  // if(checkCompanyTitle != this.titleCheck ){}

                }

                if (compnayCheck.title.charAt(0).toUpperCase() != _this81.current_letter) {
                  _this81.current_letter = compnayCheck.title.charAt(0).toUpperCase();

                  _this81.alphabet.push(compnayCheck.title.charAt(0).toUpperCase());
                }
              }
            } catch (err) {
              _didIteratorError10 = true;
              _iteratorError10 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                  _iterator10.return();
                }
              } finally {
                if (_didIteratorError10) {
                  throw _iteratorError10;
                }
              }
            }

            _this81.loading = false;
          });
        }
      }, {
        key: "buyersguideCategory",
        value: function buyersguideCategory() {
          var _this82 = this;

          this.DirectoryHomePageService.buyersguideCategory(this.magazineId, this.currentURL).subscribe(function (data) {
            _this82.buyersGuideCategoryData = data['data'];
          });
        }
      }, {
        key: "buyersguideCountry",
        value: function buyersguideCountry() {
          var _this83 = this;

          this.DirectoryHomePageService.buyersguideCountry(this.magazineId, this.currentURL).subscribe(function (data) {
            _this83.buyersguideCountryData = data['country'];
          });
        }
      }, {
        key: "matchCharacter",
        value: function matchCharacter(current, pre) {
          if (current.charAt(0).toUpperCase() != pre) {
            this.current_letter = current.charAt(0);
            return true;
          }

          return false;
        }
      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          // return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "")
          return this.RodmanCoreService.safeHtmlReplace(data);
        }
      }]);

      return DirectoryHomePageComponent;
    }();

    DirectoryHomePageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _directory_home_page_service__WEBPACK_IMPORTED_MODULE_2__["DirectoryHomePageService"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_3__["RodmanCoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    DirectoryHomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'CoreLib-directory-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./directory-home-page.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./directory-home-page.component.css */
      "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.css")).default]
    })], DirectoryHomePageComponent);
    /***/
  },

  /***/
  "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.service.ts":
  /*!***************************************************************************************************!*\
    !*** ../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.service.ts ***!
    \***************************************************************************************************/

  /*! exports provided: DirectoryHomePageService */

  /***/
  function rodmanCoreSrcLibDirectorySectionDirectoryHomePageDirectoryHomePageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectoryHomePageService", function () {
      return DirectoryHomePageService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var DirectoryHomePageService =
    /*#__PURE__*/
    function () {
      function DirectoryHomePageService(HttpClient, RodmanCoreService) {
        _classCallCheck(this, DirectoryHomePageService);

        this.HttpClient = HttpClient;
        this.RodmanCoreService = RodmanCoreService;
      }

      _createClass(DirectoryHomePageService, [{
        key: "buyerGuideCompany",
        value: function buyerGuideCompany(magazineId, slug) {
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/buyersguideSearchDirectory', {
            magazineId: magazineId,
            slug: slug
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }, {
        key: "buyersguideCategory",
        value: function buyersguideCategory(magazineId, slug) {
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/buyersguideCategory', {
            magazineId: magazineId,
            slug: slug
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }, {
        key: "buyersguideCountry",
        value: function buyersguideCountry(magazineId, slug) {
          return this.HttpClient.post(_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["apiURL"] + 'taxonomysController/buyersguideCountry', {
            magazineId: magazineId,
            slug: slug
          }, _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.RodmanCoreService.handleError));
        }
      }]);

      return DirectoryHomePageService;
    }();

    DirectoryHomePageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }];
    };

    DirectoryHomePageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DirectoryHomePageService);
    /***/
  },

  /***/
  "../rodman-core/src/lib/rodman-core.service.ts":
  /*!*****************************************************!*\
    !*** ../rodman-core/src/lib/rodman-core.service.ts ***!
    \*****************************************************/

  /*! exports provided: apiURL, httpOptions, magazineNameDetails, magazineIds, IMAGE_DOMAIN, DEFAULT_IMAGE, RodmanCoreService */

  /***/
  function rodmanCoreSrcLibRodmanCoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiURL", function () {
      return apiURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpOptions", function () {
      return httpOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "magazineNameDetails", function () {
      return magazineNameDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "magazineIds", function () {
      return magazineIds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMAGE_DOMAIN", function () {
      return IMAGE_DOMAIN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_IMAGE", function () {
      return DEFAULT_IMAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RodmanCoreService", function () {
      return RodmanCoreService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");

    'use strict';

    var apiURL = 'http://3.85.159.45:8042/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46YWRtaW5AMTIz'
      })
    };
    var magazineNameDetails = {
      'NUT': {
        id: '1',
        name: 'Nutraceuticals world'
      },
      'CW': {
        id: '5',
        name: 'Coating World'
      },
      'MPO': {
        id: '6',
        name: 'Medical Product Outsourcing'
      },
      'CP': {
        id: '7',
        name: 'Contract Pharma'
      },
      'BP': {
        id: '8',
        name: 'Beauty Packaging'
      },
      'HAP': {
        id: '9',
        name: 'Happi'
      },
      'INK': {
        id: '10',
        name: 'Ink World'
      },
      'LNW': {
        id: '11',
        name: 'Label & Narrow Web'
      },
      'NON': {
        id: '13',
        name: 'Nonwovens Industry'
      },
      'ODT': {
        id: '14',
        name: 'Orthopedic Design & Technology'
      },
      'PEN': {
        id: '15',
        name: 'Printed Electronics Now'
      }
    };
    var magazineIds = {
      '1': {
        id: 'NUT',
        name: 'Nutraceuticals world'
      },
      '5': {
        id: 'CW',
        name: 'Coating World'
      },
      '6': {
        id: 'MPO',
        name: 'Medical Product Outsourcing'
      },
      '7': {
        id: 'CP',
        name: 'Contract Pharma'
      },
      '8': {
        id: 'BP',
        name: 'Beauty Packaging'
      },
      '9': {
        id: 'HAP',
        name: 'Happi'
      },
      '10': {
        id: 'INK',
        name: 'Ink World'
      },
      '11': {
        id: 'LNW',
        name: 'Label & Narrow Web'
      },
      '13': {
        id: 'NON',
        name: 'Nonwovens Industry'
      },
      '14': {
        id: 'ODT',
        name: 'Orthopedic Design & Technology'
      },
      '15': {
        id: 'PEN',
        name: 'Printed Electronics Now'
      }
    };
    var IMAGE_DOMAIN = "http://dev.rodpub.com/images/";
    var DEFAULT_IMAGE = "http://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif";

    var RodmanCoreService =
    /*#__PURE__*/
    function () {
      function RodmanCoreService(HttpClient, sanitizer, Router) {
        var _this84 = this;

        _classCallCheck(this, RodmanCoreService);

        this.HttpClient = HttpClient;
        this.sanitizer = sanitizer;
        this.Router = Router;
        this.collectoionAds = [];
        this.finalArray = [];
        Router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
            _this84.currentURL = event.url;
          }
        });
      }

      _createClass(RodmanCoreService, [{
        key: "displayImageUrl",
        value: function displayImageUrl(imageId) {
          imageId = imageId.toString();
          var folderName = imageId.substring(0, 3);
          var imageName = imageId.substring(3);
          return imageId != '0' ? IMAGE_DOMAIN + folderName + "/" + imageName + '_main.jpg' : DEFAULT_IMAGE;
        }
      }, {
        key: "displayImageThumbURL",
        value: function displayImageThumbURL(imageId) {
          imageId = imageId.toString();
          var folderName = imageId.substring(0, 3);
          var imageName = imageId.substring(3);
          return imageId != '0' ? IMAGE_DOMAIN + folderName + "/" + imageName + '_thumb.jpg' : DEFAULT_IMAGE;
        }
      }, {
        key: "returnUrl",
        value: function returnUrl() {
          return this.currentURL;
        }
      }, {
        key: "getAllAdst",
        value: function getAllAdst(magazineId) {
          return this.HttpClient.post(apiURL + 'adsController/getAds', {
            magazineId: magazineId,
            pageUrl: this.currentURL
          }, httpOptions);
        }
      }, {
        key: "getAdcode",
        value: function getAdcode(str) {
          str = str.replace(/\'/g, '');
          str = str.replace(/\\/g, '');
          var firstIndex = str.indexOf("script") + 10;
          var lastIndex = str.indexOf("/script>");
          str = str.substring(firstIndex, lastIndex);
          if (str.indexOf('defineSlot') < 0) return false;
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
      }, {
        key: "safeHtml",
        value: function safeHtml(data) {
          return this.sanitizer.bypassSecurityTrustHtml(data);
        }
      }, {
        key: "safeHtmlReplace",
        value: function safeHtmlReplace(data) {
          return data.replace(/[^a-zA-Z0-9.()'"$@&!?:, ]/g, "").replace('&amp;', '&').replace("\'", "'");
        }
      }, {
        key: "bodyCharacterLength",
        value: function bodyCharacterLength(data) {
          return data.substring(0, 150);
        }
      }, {
        key: "extractNameFromJson",
        value: function extractNameFromJson(obj) {
          if (/^[\],:{}\s]*$/.test(obj.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            obj = JSON.parse(obj);
            return obj.name ? 'By ' + obj.name + ' ' + obj.title + ' .' : '';
          } else {
            return obj ? "By " + obj : '  ';
          }
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          this.errorData = {
            errorTitle: 'Oops! Request for document failed',
            errorDesc: 'Something bad happened. Please try again later.'
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(this.errorData);
        }
      }]);

      return RodmanCoreService;
    }();

    RodmanCoreService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    RodmanCoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RodmanCoreService);
    /***/
  },

  /***/
  "../rodman-core/src/lib/sites/components/not-found/not-found.component.css":
  /*!*********************************************************************************!*\
    !*** ../rodman-core/src/lib/sites/components/not-found/not-found.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function rodmanCoreSrcLibSitesComponentsNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL3NpdGVzL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "../rodman-core/src/lib/sites/components/not-found/not-found.component.ts":
  /*!********************************************************************************!*\
    !*** ../rodman-core/src/lib/sites/components/not-found/not-found.component.ts ***!
    \********************************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function rodmanCoreSrcLibSitesComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'CoreLib-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/sites/components/not-found/not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "../rodman-core/src/lib/sites/components/not-found/not-found.component.css")).default]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "../rodman-core/src/lib/users/Components/user-profile/user-profile.component.css":
  /*!***************************************************************************************!*\
    !*** ../rodman-core/src/lib/users/Components/user-profile/user-profile.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function rodmanCoreSrcLibUsersComponentsUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9yb2RtYW4tY29yZS9zcmMvbGliL3VzZXJzL0NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "../rodman-core/src/lib/users/Components/user-profile/user-profile.component.ts":
  /*!**************************************************************************************!*\
    !*** ../rodman-core/src/lib/users/Components/user-profile/user-profile.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function rodmanCoreSrcLibUsersComponentsUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
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

    var UserProfileComponent =
    /*#__PURE__*/
    function () {
      function UserProfileComponent(ActivatedRoute) {
        _classCallCheck(this, UserProfileComponent);

        this.ActivatedRoute = ActivatedRoute;
        this.message = false;
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this85 = this;

          this.ActivatedRoute.data.subscribe(function (data) {
            _this85.magazineId = data.magazineId;
          });

          if (localStorage.getItem('authDetails' + this.magazineId)) {
            var data = JSON.parse(localStorage.getItem('authDetails' + this.magazineId));
            this.message = true;
          } else {}
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'CoreLib-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../rodman-core/src/lib/users/Components/user-profile/user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.css */
      "../rodman-core/src/lib/users/Components/user-profile/user-profile.component.css")).default]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/content-search/content-search.component */
    "../rodman-core/src/lib/contents/content-search/content-search.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/sites/components/not-found/not-found.component */
    "../rodman-core/src/lib/sites/components/not-found/not-found.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/static-content/static-content.component */
    "../rodman-core/src/lib/contents/static-content/static-content.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_content_issue_content_issue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/content-issue/content-issue.component */
    "../rodman-core/src/lib/contents/content-issue/content-issue.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_content_rss_feeds_content_rss_feeds_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component */
    "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_directory_section_directory_home_page_directory_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component */
    "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_content_infographics_content_infographics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/content-infographics/content-infographics.component */
    "../rodman-core/src/lib/contents/content-infographics/content-infographics.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_contents_webinar_contents_webinar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component */
    "../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.ts");
    /* harmony import */


    var _bp_contant_bp_content_view_bp_content_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./bp-contant/bp-content-view/bp-content-view.component */
    "./src/app/bp-contant/bp-content-view/bp-content-view.component.ts");
    /* harmony import */


    var _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./bp-contant/bp-top-company/bp-top-company.component */
    "./src/app/bp-contant/bp-top-company/bp-top-company.component.ts"); // Rodman Core Import


    var routes = [{
      path: "",
      pathMatch: 'full',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-home-bp-home-module */
        "bp-home-bp-home-module").then(__webpack_require__.bind(null,
        /*! ./bp-home/bp-home.module */
        "./src/app/bp-home/bp-home.module.ts")).then(function (m) {
          return m.BpHomeModule;
        });
      }
    }, // Search Content   
    {
      path: 'contents/list_webinars',
      component: _rodman_core_src_lib_contents_contents_webinar_contents_webinar_component__WEBPACK_IMPORTED_MODULE_11__["ContentsWebinarComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'contents/list_infographics',
      component: _rodman_core_src_lib_contents_content_infographics_content_infographics_component__WEBPACK_IMPORTED_MODULE_10__["ContentInfographicsComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'contents/list_industry-events',
      component: _rodman_core_src_lib_contents_content_infographics_content_infographics_component__WEBPACK_IMPORTED_MODULE_10__["ContentInfographicsComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'contents/searchcontent/:any/:slug',
      component: _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_4__["ContentSearchComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'contents/searchcontent/:any',
      component: _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_4__["ContentSearchComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'contents/searchcontent',
      component: _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_4__["ContentSearchComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, //View Page Content    
    {
      path: 'contents/:any/:any/:any',
      component: _bp_contant_bp_content_view_bp_content_view_component__WEBPACK_IMPORTED_MODULE_12__["BpContentViewComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'issues/:any/:any/:any',
      component: _bp_contant_bp_content_view_bp_content_view_component__WEBPACK_IMPORTED_MODULE_12__["BpContentViewComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, //Taxonomy
    // {path:  'formulary/:any', loadChildren: () =>import('./bp-taxonomy/bp-taxonomy.module').then (m=>m.BpTaxonomyModule)},
    {
      path: 'news/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, // {path:  'blog/:any', loadChildren: () =>import('./bp-taxonomy/bp-taxonomy.module').then (m=>m.BpTaxonomyModule)},
    {
      path: 'markets',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'markets/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'materials',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'materials/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'solutions',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'solutions/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'events',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'events/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'departments',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'departments/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'classifieds',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'classifieds/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'knowledge-center',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'knowledge-center/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'live-from-shows',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'resources',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'topics',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'topics/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'print-columns',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'print-columns/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'brandssuppliers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'brandssuppliers/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'showcases',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'showcases/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'components',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, {
      path: 'components/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-taxonomy-bp-taxonomy-module */
        "bp-taxonomy-bp-taxonomy-module").then(__webpack_require__.bind(null,
        /*! ./bp-taxonomy/bp-taxonomy.module */
        "./src/app/bp-taxonomy/bp-taxonomy.module.ts")).then(function (m) {
          return m.BpTaxonomyModule;
        });
      }
    }, //Contents
    // {path:  'glossary', component:ContentGlossaryComponent,data: {magazineId: environment.magazineId }},
    {
      path: 'contents/viewwebsite/:any',
      component: _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }, {
      path: 'contents/2487',
      component: _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }, {
      path: 'contents/2543',
      component: _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }, {
      path: 'contents/:any',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bp-contant-bp-contant-module */
        "bp-contant-bp-contant-module").then(__webpack_require__.bind(null,
        /*! ./bp-contant/bp-contant.module */
        "./src/app/bp-contant/bp-contant.module.ts")).then(function (m) {
          return m.BpContantModule;
        });
      }
    }, // {path: 'profile',component : UserProfileComponent,data: {magazineId: environment.magazineId }},
    // {path: 'user/verifyUser/:token/:email',component:UserMailVerifyComponent},
    // BuyerGuide Case 
    {
      path: 'csd',
      component: _rodman_core_src_lib_directory_section_directory_home_page_directory_home_page_component__WEBPACK_IMPORTED_MODULE_9__["DirectoryHomePageComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'csd/contract-services-directory',
      component: _rodman_core_src_lib_directory_section_directory_home_page_directory_home_page_component__WEBPACK_IMPORTED_MODULE_9__["DirectoryHomePageComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, // OtherCase Static Content
    {
      path: 'subscribe-now',
      component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'advertise-with-us',
      component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'enewsletter-archive',
      component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'staff',
      component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'editorial-guidelines',
      component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'terms-and-conditions',
      component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'privacy-policy',
      component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'about-us',
      component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'contact-us',
      component: _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, //Rss
    {
      path: 'rssfeeds',
      component: _rodman_core_src_lib_contents_content_rss_feeds_content_rss_feeds_component__WEBPACK_IMPORTED_MODULE_8__["ContentRssFeedsComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'issues/:slug',
      component: _rodman_core_src_lib_contents_content_issue_content_issue_component__WEBPACK_IMPORTED_MODULE_7__["ContentIssueComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'heaps/view/:any',
      component: _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_13__["BpTopCompanyComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'heaps/view/:any/:any',
      component: _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_13__["BpTopCompanyComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: 'heaps/view/:any/:any/:any',
      component: _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_13__["BpTopCompanyComponent"],
      data: {
        magazineId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId
      }
    }, {
      path: "**",
      component: _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(Router, ActivatedRoute, RodmanCoreService) {
        var _this86 = this;

        _classCallCheck(this, AppComponent);

        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.RodmanCoreService = RodmanCoreService;
        this.title = 'BP';
        this.getAllAd = [];
        Router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this86.currentURL = event.url;
          }
        });
        Router.events.subscribe(function (ev) {// this.spinner();
        });
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        this.magazineName = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineName; //   this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data =>{
        //     this.getAllAd = data;
        //     this.viewAdRender = 1;
        //  }))
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this87 = this;

          this.ActivatedRoute.url.subscribe(function (url) {
            _this87.currentURL = url[0].path;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'BP-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-font-awesome */
    "../../node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng4-loading-spinner */
    "../../node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
    /* harmony import */


    var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var rodman_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rodman-core */
    "../../dist/rodman-core/fesm2015/rodman-core.js");
    /* harmony import */


    var _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/content-search/content-search.component */
    "../rodman-core/src/lib/contents/content-search/content-search.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/sites/components/not-found/not-found.component */
    "../rodman-core/src/lib/sites/components/not-found/not-found.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_users_Components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/users/Components/user-profile/user-profile.component */
    "../rodman-core/src/lib/users/Components/user-profile/user-profile.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/static-content/static-content.component */
    "../rodman-core/src/lib/contents/static-content/static-content.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_content_glossary_content_glossary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/content-glossary/content-glossary.component */
    "../rodman-core/src/lib/contents/content-glossary/content-glossary.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_content_issue_content_issue_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/content-issue/content-issue.component */
    "../rodman-core/src/lib/contents/content-issue/content-issue.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_content_rss_feeds_content_rss_feeds_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component */
    "../rodman-core/src/lib/contents/content-rss-feeds/content-rss-feeds.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_directory_section_directory_home_page_directory_home_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component */
    "../rodman-core/src/lib/directory-section/directory-home-page/directory-home-page.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_content_infographics_content_infographics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/content-infographics/content-infographics.component */
    "../rodman-core/src/lib/contents/content-infographics/content-infographics.component.ts");
    /* harmony import */


    var _rodman_core_src_lib_contents_contents_webinar_contents_webinar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component */
    "../rodman-core/src/lib/contents/contents-webinar/contents-webinar.component.ts");
    /* harmony import */


    var _bp_contant_bp_content_view_bp_content_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./bp-contant/bp-content-view/bp-content-view.component */
    "./src/app/bp-contant/bp-content-view/bp-content-view.component.ts");
    /* harmony import */


    var _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./bp-contant/bp-top-company/bp-top-company.component */
    "./src/app/bp-contant/bp-top-company/bp-top-company.component.ts"); // Rodman Core Import
    // import { BuyerGuideModule } from "rodman-core";


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _rodman_core_src_lib_sites_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"], _rodman_core_src_lib_contents_content_search_content_search_component__WEBPACK_IMPORTED_MODULE_9__["ContentSearchComponent"], _rodman_core_src_lib_users_Components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"], _rodman_core_src_lib_contents_static_content_static_content_component__WEBPACK_IMPORTED_MODULE_12__["StaticContentComponent"], _rodman_core_src_lib_contents_content_glossary_content_glossary_component__WEBPACK_IMPORTED_MODULE_13__["ContentGlossaryComponent"], _rodman_core_src_lib_contents_content_issue_content_issue_component__WEBPACK_IMPORTED_MODULE_14__["ContentIssueComponent"], _rodman_core_src_lib_contents_content_rss_feeds_content_rss_feeds_component__WEBPACK_IMPORTED_MODULE_15__["ContentRssFeedsComponent"], _rodman_core_src_lib_directory_section_directory_home_page_directory_home_page_component__WEBPACK_IMPORTED_MODULE_16__["DirectoryHomePageComponent"], _rodman_core_src_lib_contents_content_infographics_content_infographics_component__WEBPACK_IMPORTED_MODULE_17__["ContentInfographicsComponent"], _rodman_core_src_lib_contents_contents_webinar_contents_webinar_component__WEBPACK_IMPORTED_MODULE_18__["ContentsWebinarComponent"], _bp_contant_bp_content_view_bp_content_view_component__WEBPACK_IMPORTED_MODULE_19__["BpContentViewComponent"], _bp_contant_bp_top_company_bp_top_company_component__WEBPACK_IMPORTED_MODULE_20__["BpTopCompanyComponent"]],
      imports: [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], rodman_core__WEBPACK_IMPORTED_MODULE_8__["DirectorySectionModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"], rodman_core__WEBPACK_IMPORTED_MODULE_8__["HomeModule"], rodman_core__WEBPACK_IMPORTED_MODULE_8__["SitesModule"], rodman_core__WEBPACK_IMPORTED_MODULE_8__["HeapsModule"], rodman_core__WEBPACK_IMPORTED_MODULE_8__["ContentsModule"], rodman_core__WEBPACK_IMPORTED_MODULE_8__["UsersModule"], rodman_core__WEBPACK_IMPORTED_MODULE_8__["TaxonomiesModule"], rodman_core__WEBPACK_IMPORTED_MODULE_8__["AdsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/bp-contant/bp-content-view/bp-content-view.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/bp-contant/bp-content-view/bp-content-view.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBpContantBpContentViewBpContentViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9CUC9zcmMvYXBwL2JwLWNvbnRhbnQvYnAtY29udGVudC12aWV3L2JwLWNvbnRlbnQtdmlldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/bp-contant/bp-content-view/bp-content-view.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/bp-contant/bp-content-view/bp-content-view.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BpContentViewComponent */

  /***/
  function srcAppBpContantBpContentViewBpContentViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BpContentViewComponent", function () {
      return BpContentViewComponent;
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

    var BpContentViewComponent =
    /*#__PURE__*/
    function () {
      function BpContentViewComponent(router) {
        var _this88 = this;

        _classCallCheck(this, BpContentViewComponent);

        this.router = router;
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this88.contentPageUrl = event.url;
          }
        });
      }

      _createClass(BpContentViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BpContentViewComponent;
    }();

    BpContentViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BpContentViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'BP-bp-content-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bp-content-view.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-content-view/bp-content-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bp-content-view.component.css */
      "./src/app/bp-contant/bp-content-view/bp-content-view.component.css")).default]
    })], BpContentViewComponent);
    /***/
  },

  /***/
  "./src/app/bp-contant/bp-top-company/bp-top-company.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/bp-contant/bp-top-company/bp-top-company.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBpContantBpTopCompanyBpTopCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9CUC9zcmMvYXBwL2JwLWNvbnRhbnQvYnAtdG9wLWNvbXBhbnkvYnAtdG9wLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/bp-contant/bp-top-company/bp-top-company.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/bp-contant/bp-top-company/bp-top-company.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BpTopCompanyComponent */

  /***/
  function srcAppBpContantBpTopCompanyBpTopCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BpTopCompanyComponent", function () {
      return BpTopCompanyComponent;
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

    var BpTopCompanyComponent =
    /*#__PURE__*/
    function () {
      function BpTopCompanyComponent(router) {
        var _this89 = this;

        _classCallCheck(this, BpTopCompanyComponent);

        this.router = router;
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this89.contentPageUrl = event.url;
          }
        });
      }

      _createClass(BpTopCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BpTopCompanyComponent;
    }();

    BpTopCompanyComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BpTopCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'BP-bp-top-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bp-top-company.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/bp-contant/bp-top-company/bp-top-company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bp-top-company.component.css */
      "./src/app/bp-contant/bp-top-company/bp-top-company.component.css")).default]
    })], BpTopCompanyComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/bezoar/RodmanAngled/projects/BP/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map