function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
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
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app [dir]=\"rtlSide\">\n\t<ion-split-pane contentId=\"main-content\">\n\t\t<ion-menu contentId=\"main-content\" type=\"overlay\">\n\t\t\t<div class=\"profile_box\">\n\t\t\t\t<h2>\n\t\t\t\t\t{{\"hey\" | translate}},\n\t\t\t\t\t<span class=\"first_name\">Samantha</span>\n\t\t\t\t\t<span class=\"last_name\">Smith</span>\n\t\t\t\t</h2>\n\t\t\t</div>\n\t\t\t<ion-content fullscreen>\n\t\t\t\t<ion-list lines=\"none\">\n\t\t\t\t\t<ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n\t\t\t\t\t\t<ion-item mode=\"ios\" detail=\"false\" [routerDirection]=\"'root'\"   [routerLink]=\"[p.url]\">\n\t\t\t\t\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"start\" [class]=\"p.icon\"></ion-icon>\n\t\t\t\t\t\t\t\t<h2>{{ p.title | translate}}</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-menu-toggle>\n\t\t\t\t\t<ion-menu-toggle auto-hide=\"false\">\n\t\t\t\t\t\t<ion-item mode=\"ios\" detail=\"false\" (click)=\"onLogout()\">\n\t\t\t\t\t\t  <div class=\"item_inner d-flex\">\n\t\t\t\t\t\t\t<ion-icon slot=\"start\" class=\"zmdi zmdi-open-in-new\"></ion-icon>\n\t\t\t\t\t\t\t<h2>Log out</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t  </ion-menu-toggle>\n\n\t\t\t\t\t<div class=\"buy_this_app\" *ngIf=\"config.showBuyPromt\" (click)=\"buyAppAction()\">\n\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-shopping-cart\"></ion-icon>\n\t\t\t\t\t\t\t{{\"buy_this_app\" | translate}}\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-list>\n\t\t\t</ion-content>\n\t\t</ion-menu>\n\t\t<ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\t</ion-split-pane>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/title/title.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/title/title.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTitleTitlePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n<ion-header>\n  <ion-toolbar>\n    <ion-title>title</ion-title>\n  </ion-toolbar>\n</ion-header>\n-->\n<ion-content (click)=\"dismiss()\">\n\n</ion-content>\n<ion-footer no-border>\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-badge-check\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"address_title\" | translate}}</ion-label>\n\t\t\t\t<ion-input mode=\"md\" type=\"name\"  placeholder=\"{{'enter_address_title' | translate}}\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"address\" lines=\"none\">\n\t\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin\"></ion-icon>\n\t\t\t\t\t<p>1124, Patestine Street, Jackson Tower, Near City Garden, New York, USA</p>\n\t\t\t\t</div>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</div>\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"dismiss()\">{{'save_address' | translate}}</ion-button>\n</ion-footer>";
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
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'folder/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | folder-folder-module */
        "folder-folder-module").then(__webpack_require__.bind(null,
        /*! ./folder/folder.module */
        "./src/app/folder/folder.module.ts")).then(function (m) {
          return m.FolderPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'sign-in',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-in-sign-in-module */
        "sign-in-sign-in-module").then(__webpack_require__.bind(null,
        /*! ./sign-in/sign-in.module */
        "./src/app/sign-in/sign-in.module.ts")).then(function (m) {
          return m.SignInPageModule;
        });
      }
    }, {
      path: 'sign-up',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-up-sign-up-module */
        "sign-up-sign-up-module").then(__webpack_require__.bind(null,
        /*! ./sign-up/sign-up.module */
        "./src/app/sign-up/sign-up.module.ts")).then(function (m) {
          return m.SignUpPageModule;
        });
      }
    }, {
      path: 'verification',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | verification-verification-module */
        "verification-verification-module").then(__webpack_require__.bind(null,
        /*! ./verification/verification.module */
        "./src/app/verification/verification.module.ts")).then(function (m) {
          return m.VerificationPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'search',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | search-search-module */
        "search-search-module").then(__webpack_require__.bind(null,
        /*! ./search/search.module */
        "./src/app/search/search.module.ts")).then(function (m) {
          return m.SearchPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'item',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | item-item-module */
        "item-item-module").then(__webpack_require__.bind(null,
        /*! ./item/item.module */
        "./src/app/item/item.module.ts")).then(function (m) {
          return m.ItemPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'item-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | item-detail-item-detail-module */
        "item-detail-item-detail-module").then(__webpack_require__.bind(null,
        /*! ./item-detail/item-detail.module */
        "./src/app/item-detail/item-detail.module.ts")).then(function (m) {
          return m.ItemDetailPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'reviews',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reviews-reviews-module */
        "reviews-reviews-module").then(__webpack_require__.bind(null,
        /*! ./reviews/reviews.module */
        "./src/app/reviews/reviews.module.ts")).then(function (m) {
          return m.ReviewsPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'seller-info',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | seller-info-seller-info-module */
        "seller-info-seller-info-module").then(__webpack_require__.bind(null,
        /*! ./seller-info/seller-info.module */
        "./src/app/seller-info/seller-info.module.ts")).then(function (m) {
          return m.SellerInfoPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'cart',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | cart-cart-module */
        "cart-cart-module").then(__webpack_require__.bind(null,
        /*! ./cart/cart.module */
        "./src/app/cart/cart.module.ts")).then(function (m) {
          return m.CartPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'select-address',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | select-address-select-address-module */
        "select-address-select-address-module").then(__webpack_require__.bind(null,
        /*! ./select-address/select-address.module */
        "./src/app/select-address/select-address.module.ts")).then(function (m) {
          return m.SelectAddressPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'payment-mode',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | payment-mode-payment-mode-module */
        "payment-mode-payment-mode-module").then(__webpack_require__.bind(null,
        /*! ./payment-mode/payment-mode.module */
        "./src/app/payment-mode/payment-mode.module.ts")).then(function (m) {
          return m.PaymentModePageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'order-confirm',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | order-confirm-order-confirm-module */
        "order-confirm-order-confirm-module").then(__webpack_require__.bind(null,
        /*! ./order-confirm/order-confirm.module */
        "./src/app/order-confirm/order-confirm.module.ts")).then(function (m) {
          return m.OrderConfirmPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'my-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | my-profile-my-profile-module */
        "my-profile-my-profile-module").then(__webpack_require__.bind(null,
        /*! ./my-profile/my-profile.module */
        "./src/app/my-profile/my-profile.module.ts")).then(function (m) {
          return m.MyProfilePageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'offers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | offers-offers-module */
        "offers-offers-module").then(__webpack_require__.bind(null,
        /*! ./offers/offers.module */
        "./src/app/offers/offers.module.ts")).then(function (m) {
          return m.OffersPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'add-address',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-address-add-address-module */
        "add-address-add-address-module").then(__webpack_require__.bind(null,
        /*! ./add-address/add-address.module */
        "./src/app/add-address/add-address.module.ts")).then(function (m) {
          return m.AddAddressPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'title',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./title/title.module */
        "./src/app/title/title.module.ts")).then(function (m) {
          return m.TitlePageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'my-orders',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | my-orders-my-orders-module */
        "my-orders-my-orders-module").then(__webpack_require__.bind(null,
        /*! ./my-orders/my-orders.module */
        "./src/app/my-orders/my-orders.module.ts")).then(function (m) {
          return m.MyOrdersPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'add-review',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-review-add-review-module */
        "add-review-add-review-module").then(__webpack_require__.bind(null,
        /*! ./add-review/add-review.module */
        "./src/app/add-review/add-review.module.ts")).then(function (m) {
          return m.AddReviewPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'wishlist',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | wishlist-wishlist-module */
        "wishlist-wishlist-module").then(__webpack_require__.bind(null,
        /*! ./wishlist/wishlist.module */
        "./src/app/wishlist/wishlist.module.ts")).then(function (m) {
          return m.WishlistPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'about-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | about-us-about-us-module */
        "about-us-about-us-module").then(__webpack_require__.bind(null,
        /*! ./about-us/about-us.module */
        "./src/app/about-us/about-us.module.ts")).then(function (m) {
          return m.AboutUsPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'contact-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contact-us-contact-us-module */
        "contact-us-contact-us-module").then(__webpack_require__.bind(null,
        /*! ./contact-us/contact-us.module */
        "./src/app/contact-us/contact-us.module.ts")).then(function (m) {
          return m.ContactUsPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'language',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | language-language-module */
        "language-language-module").then(__webpack_require__.bind(null,
        /*! ./language/language.module */
        "./src/app/language/language.module.ts")).then(function (m) {
          return m.LanguagePageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'search-result',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | search-result-search-result-module */
        "search-result-search-result-module").then(__webpack_require__.bind(null,
        /*! ./search-result/search-result.module */
        "./src/app/search-result/search-result.module.ts")).then(function (m) {
          return m.SearchResultPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'network-error',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | network-error-network-error-module */
        "network-error-network-error-module").then(__webpack_require__.bind(null,
        /*! ./network-error/network-error.module */
        "./src/app/network-error/network-error.module.ts")).then(function (m) {
          return m.NetworkErrorPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Italic.woff2') format(\"woff2\"), url('GoogleSans-Italic.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Regular.woff2') format(\"woff2\"), url('GoogleSans-Regular.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-BoldItalic.woff2') format(\"woff2\"), url('GoogleSans-BoldItalic.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Bold.woff2') format(\"woff2\"), url('GoogleSans-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-MediumItalic.woff2') format(\"woff2\"), url('GoogleSans-MediumItalic.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Medium.woff2') format(\"woff2\"), url('GoogleSans-Medium.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Google Sans\";\n  font-family: \"Google Sans\";\n}\n.zmdi {\n  font: normal normal normal 14px/1 \"Material-Design-Iconic-Font\";\n}\nion-menu {\n  --background: url('img_menu.png') 0 0/100% 100% no-repeat;\n  --width: calc(100% - 50px);\n}\nion-menu ion-content {\n  --background: rgba(0, 0, 0, 0) !important;\n}\nion-menu .profile_box {\n  padding: 65px 34px 48px 34px;\n}\nion-menu .profile_box h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1.6rem;\n}\nion-menu .profile_box h2 span {\n  display: block;\n}\nion-menu ion-list {\n  background: var(--transparent) !important;\n  padding: 0;\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  position: relative;\n  z-index: 999;\n}\nion-menu ion-list ion-item {\n  padding: 17px 27px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --min-height: unset;\n  --background: var(--transparent) !important;\n  --background-activated: var(--transparent) !important;\n  --background-activated-opacity: 1;\n  --background-hover: var(--transparent) !important;\n  --ripple-color: var(--transparent) !important;\n}\nion-menu ion-list ion-item ion-icon {\n  font-size: 1.4rem;\n  min-width: 47px;\n  color: var(--primary);\n}\nion-menu ion-list ion-item h2 {\n  margin: 0;\n  color: var(--white);\n  font-weight: 500;\n  font-size: 1.1rem;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\nion-menu ion-list .buy_this_app {\n  background: var(--primary);\n  position: relative;\n  bottom: 0px;\n  right: 0px;\n  border-radius: 50px;\n  height: 49px;\n  display: flex;\n  align-items: center;\n  min-width: 170px;\n  z-index: 99999;\n  margin: 16px 21px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-menu ion-list .buy_this_app h2 {\n  color: var(--white);\n  display: flex;\n  align-items: center;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.1rem;\n  font-weight: 500;\n  padding: 0;\n}\nion-menu ion-list .buy_this_app h2 ion-icon {\n  font-size: 1.3rem;\n  min-width: 29px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQywwQkFBQTtFQUNBLGlHQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0M7RUFDQywwQkFBQTtFQUNBLG1HQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FES0M7RUFDQywwQkFBQTtFQUNBLHlHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0pGO0FET0M7RUFDQywwQkFBQTtFQUNBLDZGQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ05GO0FEU0M7RUFDQywwQkFBQTtFQUNBLDZHQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtBQ1JGO0FEV0M7RUFDQywwQkFBQTtFQUNBLGlHQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FEZUM7Ozs7Ozs7Ozs7Ozs7RUFhQyxnQ0FBQTtFQUNBLDBCQUFBO0FDYkY7QURnQkM7RUFDQywrREFBQTtBQ2JGO0FEZ0JDO0VBQ0MseURBQUE7RUFDQSwwQkFBQTtBQ2JGO0FEZUU7RUFDQyx5Q0FBQTtBQ2JIO0FEaUJFO0VBQ0MsNEJBQUE7QUNmSDtBRGlCRztFQUNDLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDZko7QURpQkk7RUFDQyxjQUFBO0FDZkw7QURxQkU7RUFDQyx5Q0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNuQkg7QURxQkc7RUFDQyxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EscURBQUE7RUFDQSxpQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsNkNBQUE7QUNuQko7QURxQkk7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ25CTDtBRHNCSTtFQUNDLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDcEJMO0FEd0JHO0VBQ0MsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUN0Qko7QUR3Qkk7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ3RCTDtBRHdCSztFQUNDLGlCQUFBO0VBQ0EsZUFBQTtBQ3RCTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBAZm9udC1mYWNlIHtcbiBcdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuIFx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuIFx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiBcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gXHRmb250LXN0eWxlOiBpdGFsaWM7XG4gfVxuXG4gQGZvbnQtZmFjZSB7XG4gXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiBcdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gXHRcdHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiBcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gXHRmb250LXN0eWxlOiBub3JtYWw7XG4gfVxuXG4gQGZvbnQtZmFjZSB7XG4gXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiBcdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gXHRcdHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiBcdGZvbnQtd2VpZ2h0OiBib2xkO1xuIFx0Zm9udC1zdHlsZTogaXRhbGljO1xuIH1cblxuIEBmb250LWZhY2Uge1xuIFx0Zm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gXHRzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuIFx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gXHRmb250LXdlaWdodDogYm9sZDtcbiBcdGZvbnQtc3R5bGU6IG5vcm1hbDtcbiB9XG5cbiBAZm9udC1mYWNlIHtcbiBcdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuIFx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuIFx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiBcdGZvbnQtd2VpZ2h0OiA1MDA7XG4gXHRmb250LXN0eWxlOiBpdGFsaWM7XG4gfVxuXG4gQGZvbnQtZmFjZSB7XG4gXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiBcdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiBcdFx0dXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gXHRmb250LXdlaWdodDogNTAwO1xuIFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuIH1cblxuXG5cbiAqLFxuIGJvZHksXG4gaHRtbCxcbiBwLFxuIHNwYW4sXG4gaDEsXG4gaDIsXG4gaDMsXG4gaDQsXG4gaDUsXG4gaDYsXG4gc3Ryb25nLFxuIGxpIHtcbiBcdC0taW9uLWZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuIFx0Zm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gfVxuXG4gLnptZGkge1xuIFx0Zm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xICdNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQnO1xuIH1cblxuIGlvbi1tZW51IHtcbiBcdC0tYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvaW1nX21lbnUucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiBcdC0td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuXG4gXHRpb24tY29udGVudCB7XG4gXHRcdC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuXG4gXHR9XG5cbiBcdC5wcm9maWxlX2JveCB7XG4gXHRcdHBhZGRpbmc6IDY1cHggMzRweCA0OHB4IDM0cHg7XG5cbiBcdFx0aDIge1xuIFx0XHRcdG1hcmdpbjogMDtcbiBcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuIFx0XHRcdGZvbnQtc2l6ZTogMS42cmVtO1xuXG4gXHRcdFx0c3BhbiB7XG4gXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0fVxuXG4gXHRpb24tbGlzdCB7XG4gXHRcdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuIFx0XHRwYWRkaW5nOiAwO1xuIFx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gXHRcdG1hcmdpbjogMCBhdXRvO1xuIFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gXHRcdHotaW5kZXg6IDk5OTtcblxuIFx0XHRpb24taXRlbSB7XG4gXHRcdFx0cGFkZGluZzogMTdweCAyN3B4O1xuIFx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiBcdFx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuIFx0XHRcdC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gXHRcdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gXHRcdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcbiBcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuIFx0XHRcdC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuIFx0XHRcdC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiBcdFx0XHQtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuIFx0XHRcdC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblxuIFx0XHRcdGlvbi1pY29uIHtcbiBcdFx0XHRcdGZvbnQtc2l6ZTogMS40cmVtO1xuIFx0XHRcdFx0bWluLXdpZHRoOiA0N3B4O1xuIFx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xuIFx0XHRcdH1cblxuIFx0XHRcdGgyIHtcbiBcdFx0XHRcdG1hcmdpbjogMDtcbiBcdFx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuIFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XG4gXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMnB4O1xuIFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQuYnV5X3RoaXNfYXBwIHtcbiBcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiBcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gXHRcdFx0Ym90dG9tOiAwcHg7XG4gXHRcdFx0cmlnaHQ6IDBweDtcbiBcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuIFx0XHRcdGhlaWdodDogNDlweDtcbiBcdFx0XHRkaXNwbGF5OiBmbGV4O1xuIFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gXHRcdFx0bWluLXdpZHRoOiAxNzBweDtcbiBcdFx0XHR6LWluZGV4OiA5OTk5OTtcbiBcdFx0XHRtYXJnaW46IDE2cHggMjFweDtcbiBcdFx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiBcdFx0XHRoMiB7XG4gXHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuIFx0XHRcdFx0ZGlzcGxheTogZmxleDtcbiBcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gXHRcdFx0XHRtYXJnaW46IGF1dG87XG4gXHRcdFx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XG4gXHRcdFx0XHRmb250LXNpemU6IDEuMXJlbTtcbiBcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG4gXHRcdFx0XHRwYWRkaW5nOiAwO1xuXG4gXHRcdFx0XHRpb24taWNvbiB7XG4gXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xuIFx0XHRcdFx0XHRtaW4td2lkdGg6IDI5cHg7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHR9XG5cbiB9IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGRJdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4qLFxuYm9keSxcbmh0bWwsXG5wLFxuc3BhbixcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnN0cm9uZyxcbmxpIHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbn1cblxuLnptZGkge1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgXCJNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnRcIjtcbn1cblxuaW9uLW1lbnUge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2ltZ19tZW51LnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIC0td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xufVxuaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cbmlvbi1tZW51IC5wcm9maWxlX2JveCB7XG4gIHBhZGRpbmc6IDY1cHggMzRweCA0OHB4IDM0cHg7XG59XG5pb24tbWVudSAucHJvZmlsZV9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuaW9uLW1lbnUgLnByb2ZpbGVfYm94IGgyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1tZW51IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5O1xufVxuaW9uLW1lbnUgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAxN3B4IDI3cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG59XG5pb24tbWVudSBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtaW4td2lkdGg6IDQ3cHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi1tZW51IGlvbi1saXN0IGlvbi1pdGVtIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmlvbi1tZW51IGlvbi1saXN0IC5idXlfdGhpc19hcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA0OXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDE3MHB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgbWFyZ2luOiAxNnB4IDIxcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbmlvbi1tZW51IGlvbi1saXN0IC5idXlfdGhpc19hcHAgaDIge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tbWVudSBpb24tbGlzdCAuYnV5X3RoaXNfYXBwIGgyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1pbi13aWR0aDogMjlweDtcbn0iXX0= */";
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
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/services/myevent.services */
    "./src/services/myevent.services.ts");
    /* harmony import */


    var src_models_contants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/contants.models */
    "./src/models/contants.models.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(config, platform, navCtrl, splashScreen, statusBar, authService, translate, myEvent) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.config = config;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.translate = translate;
        this.myEvent = myEvent;
        this.previousAuthState = false;
        this.rtlSide = "left";
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'home',
          url: '/home',
          icon: 'zmdi zmdi-home'
        }, {
          title: 'my_profile',
          url: '/my-profile',
          icon: 'zmdi zmdi-assignment-account'
        }, {
          title: 'my_orders',
          url: '/my-orders',
          icon: 'zmdi zmdi-shopping-cart'
        }, {
          title: 'offers',
          url: '/offers',
          icon: 'zmdi zmdi-label'
        }, {
          title: 'my_wishlist',
          url: '/wishlist',
          icon: 'zmdi zmdi-favorite'
        }, {
          title: 'about_us',
          url: '/about-us',
          icon: 'zmdi zmdi-assignment'
        }, {
          title: 'help_center',
          url: '/contact-us',
          icon: 'zmdi zmdi-comment-text'
        }];
        this.initializeApp();
        this.myEvent.getLanguageObservable().subscribe(function (value) {
          _this.navCtrl.navigateRoot(['./']);

          _this.globalize(value);
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          throw new Error("Method not implemented.");
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.styleDefault();

            _this2.splashScreen.hide();

            var defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].KEY_DEFAULT_LANGUAGE);

            _this2.globalize(defaultLang);
          });
        }
      }, {
        key: "globalize",
        value: function globalize(languagePriority) {
          this.translate.setDefaultLang("en");
          var defaultLangCode = this.config.availableLanguages[0].code;
          this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
          this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        }
      }, {
        key: "setDirectionAccordingly",
        value: function setDirectionAccordingly(lang) {
          switch (lang) {
            case 'ar':
              {
                this.rtlSide = "rtl";
                break;
              }

            default:
              {
                this.rtlSide = "ltr";
                break;
              }
          }
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var path = window.location.pathname.split('folder/')[1];

          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }

          this.authService.UserIsAuthenticated.subscribe(function (isAuth) {
            if (!isAuth && _this3.previousAuthState !== isAuth) {
              _this3.navCtrl.navigateBack('/sign-in');
            }

            _this3.previousAuthState = isAuth;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_9__["APP_CONFIG"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_7__["MyEvent"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_9__["APP_CONFIG"]))], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.ts":
  /*!*******************************!*\
    !*** ./src/app/app.config.ts ***!
    \*******************************/

  /*! exports provided: APP_CONFIG, BaseAppConfig */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function () {
      return APP_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseAppConfig", function () {
      return BaseAppConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("app.config");
    var BaseAppConfig = {
      availableLanguages: [{
        code: 'en',
        name: 'English'
      }, {
        code: 'ar',
        name: 'Arabic'
      }, {
        code: 'es',
        name: 'Spanish'
      }, {
        code: 'fr',
        name: 'French'
      }, {
        code: 'id',
        name: 'Indonesian'
      }, {
        code: 'pt',
        name: 'Portuguese'
      }],
      showBuyPromt: false
    };
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _title_title_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./title/title.module */
    "./src/app/title/title.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http);
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _title_title_module__WEBPACK_IMPORTED_MODULE_10__["TitlePageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _app_config__WEBPACK_IMPORTED_MODULE_13__["APP_CONFIG"],
        useValue: _app_config__WEBPACK_IMPORTED_MODULE_13__["BaseAppConfig"]
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _providers_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../providers/network.service */
    "./src/app/providers/network.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, navCtrl, networkService) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.navCtrl = navCtrl;
        this.networkService = networkService;
      }

      _createClass(AuthGuard, [{
        key: "canLoad",
        value: function canLoad(route, segments) {
          var _this4 = this;

          this.networkService.checkNetworkConnectionForGuard();
          return this.authService.UserIsAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (isAuthenticated) {
            if (!isAuthenticated) {
              return _this4.authService.autoLogin();
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(isAuthenticated);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (isAuthenticated) {
            if (!isAuthenticated) {
              _this4.navCtrl.navigateBack('/sign-in');
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _providers_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.model */
    "./src/app/auth/user.model.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, alertCtrl) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.alertCtrl = alertCtrl;
        this._url = "http://ecommerce.x-cow.com/api/action.php";
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
      }

      _createClass(AuthService, [{
        key: "register",
        value: function register(data) {
          var formData = new FormData();
          formData.append('action', 'register');
          formData.append('fullname', data.fullname);
          formData.append('email', data.email);
          formData.append('phoneno', data.phoneno);
          formData.append('password', data.password);
          return this.http.post(this._url, formData);
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this5 = this;

          var formData = new FormData();
          formData.append('action', 'userLogin');
          formData.append('email', email);
          formData.append('password', password);
          return this.http.post(this._url, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (resData) {
            if (resData.valid) {
              _this5.setUserData(resData.user_id, resData.email, resData.fullname, resData.session_id, resData.phoneno);
            }
          }));
        }
      }, {
        key: "autoLogin",
        value: function autoLogin() {
          var _this6 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage.get({
            key: 'authData'
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (storeData) {
            if (!storeData || !storeData.value) {
              return null;
            }

            var parsedData = JSON.parse(storeData.value);

            _this6.getUserDetail(parsedData.user_id, parsedData.session_id, parsedData.email);

            var user = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](parsedData.fullname, parsedData.user_id, parsedData.email, parsedData.session_id, parsedData.phoneno);
            return user;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (user) {
            _this6._user.next(user);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (agent) {
            return !!agent;
          }));
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail(email, session_id, user_id) {
          var _this7 = this;

          var formData = new FormData();
          formData.append('action', 'getUserDetail');
          formData.append('email', email);
          this.http.post(this._url, formData).subscribe(function (resData) {
            _this7.setUserData(email, user_id, session_id, resData.fullname, resData.phoneno);
          });
        }
      }, {
        key: "setUserData",
        value: function setUserData(user_id, fullname, email, session_id, phoneno) {
          this._user.next(new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](user_id, fullname, email, session_id, phoneno));

          this.storeAuthData(user_id, fullname, email, session_id, phoneno);
        }
      }, {
        key: "storeAuthData",
        value: function storeAuthData(user_id, fullname, email, session_id, phoneno) {
          var data = JSON.stringify({
            user_id: user_id,
            fullname: fullname,
            email: email,
            session_id: session_id,
            phoneno: phoneno
          });

          _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage.set({
            key: 'authData',
            value: data
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this._user.next(null);

          _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage.remove({
            key: 'authData'
          });
        }
      }, {
        key: "UserIsAuthenticated",
        get: function get() {
          return this._user.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (user) {
            if (user) {
              return true;
            } else {
              return false;
            }
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/user.model.ts":
  /*!************************************!*\
    !*** ./src/app/auth/user.model.ts ***!
    \************************************/

  /*! exports provided: User */

  /***/
  function srcAppAuthUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(email, user_id, session_id, fullname, phoneno) {
      _classCallCheck(this, User);

      this.email = email;
      this.user_id = user_id;
      this.session_id = session_id;
      this.fullname = fullname;
      this.phoneno = phoneno;
    };
    /***/

  },

  /***/
  "./src/app/providers/network.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/providers/network.service.ts ***!
    \**********************************************/

  /*! exports provided: NetworkService */

  /***/
  function srcAppProvidersNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
      return NetworkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var NetworkService = /*#__PURE__*/function () {
      function NetworkService(router, navCtrl, loadingCtrl) {
        _classCallCheck(this, NetworkService);

        this.router = router;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
      }

      _createClass(NetworkService, [{
        key: "checkNetworkConnectionForGuard",
        value: function checkNetworkConnectionForGuard() {
          var _this8 = this;

          var networkStatus = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Network"].getStatus();

          networkStatus.then(function (value) {
            if (value.connected !== true) {
              _this8.router.navigateByUrl('/network-error');
            }
          });
        }
      }, {
        key: "checkNetworkConnection",
        value: function checkNetworkConnection() {
          var _this9 = this;

          var handler = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Network"].addListener('networkStatusChange', function (status) {
            if (status.connected !== true) {
              _this9.router.navigateByUrl('/network-error');
            }
          });
        }
      }, {
        key: "retryToChecknetworkConnection",
        value: function retryToChecknetworkConnection() {
          var _this10 = this;

          this.loadingCtrl.create({}).then(function (loadingEl) {
            loadingEl.present();

            var networkStatus = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Network"].getStatus();

            networkStatus.then(function (value) {
              loadingEl.dismiss();

              if (value.connected == true) {
                _this10.router.navigateByUrl('/home');
              }
            });
          });
        }
      }, {
        key: "checkNetwornConnectionDirectToAuthPage",
        value: function checkNetwornConnectionDirectToAuthPage() {
          var _this11 = this;

          this.loadingCtrl.create({}).then(function (loadingEl) {
            loadingEl.present();

            var networkStatus = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Network"].getStatus();

            networkStatus.then(function (value) {
              loadingEl.dismiss();

              if (value.connected == true) {
                _this11.router.navigateByUrl('/sign-in');
              }
            });
          });
        }
      }]);

      return NetworkService;
    }();

    NetworkService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    NetworkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NetworkService);
    /***/
  },

  /***/
  "./src/app/title/title-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/title/title-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: TitlePageRoutingModule */

  /***/
  function srcAppTitleTitleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitlePageRoutingModule", function () {
      return TitlePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _title_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./title.page */
    "./src/app/title/title.page.ts");

    var routes = [{
      path: '',
      component: _title_page__WEBPACK_IMPORTED_MODULE_3__["TitlePage"]
    }];

    var TitlePageRoutingModule = function TitlePageRoutingModule() {
      _classCallCheck(this, TitlePageRoutingModule);
    };

    TitlePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TitlePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/title/title.module.ts":
  /*!***************************************!*\
    !*** ./src/app/title/title.module.ts ***!
    \***************************************/

  /*! exports provided: TitlePageModule */

  /***/
  function srcAppTitleTitleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitlePageModule", function () {
      return TitlePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _title_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./title-routing.module */
    "./src/app/title/title-routing.module.ts");
    /* harmony import */


    var _title_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./title.page */
    "./src/app/title/title.page.ts");

    var TitlePageModule = function TitlePageModule() {
      _classCallCheck(this, TitlePageModule);
    };

    TitlePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _title_routing_module__WEBPACK_IMPORTED_MODULE_6__["TitlePageRoutingModule"]],
      declarations: [_title_page__WEBPACK_IMPORTED_MODULE_7__["TitlePage"]]
    })], TitlePageModule);
    /***/
  },

  /***/
  "./src/app/title/title.page.scss":
  /*!***************************************!*\
    !*** ./src/app/title/title.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppTitleTitlePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgba(0, 0, 0, 0) !important;\n}\n\nion-footer {\n  background: var(--white);\n  padding-top: 15px;\n}\n\nion-footer .form ion-list ion-item {\n  margin-bottom: 20px;\n  border-bottom: none !important;\n  --min-height: unset !important;\n}\n\nion-footer .form ion-list ion-item ion-icon {\n  color: var(--secondary);\n  margin: 0;\n  font-size: 1.2rem;\n  min-width: 30px;\n  height: 37px;\n  line-height: 50px;\n}\n\nion-footer .form ion-list ion-item ion-label {\n  font-weight: 400;\n  font-size: 1.35rem !important;\n  margin-bottom: 14px !important;\n}\n\nion-footer .form ion-list ion-item ion-input {\n  font-weight: 500 !important;\n  letter-spacing: 0;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.6) !important;\n  padding-bottom: 7px !important;\n}\n\nion-footer .form ion-list ion-item.address .item_inner {\n  align-items: flex-start;\n}\n\nion-footer .form ion-list ion-item.address .item_inner ion-icon {\n  height: 18px;\n  line-height: normal;\n}\n\nion-footer .form ion-list ion-item.address .item_inner p {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 400;\n}\n\nion-footer .button.btn {\n  font-weight: 400;\n  letter-spacing: 1.5px !important;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvdGl0bGUvdGl0bGUucGFnZS5zY3NzIiwic3JjL2FwcC90aXRsZS90aXRsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5Q0FBQTtBQ0NEOztBREVBO0VBQ0Msd0JBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREdHO0VBQ0MsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDREo7O0FER0k7RUFDQyx1QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNETDs7QURJSTtFQUNDLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ0ZMOztBREtJO0VBQ0MsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0VBQ0EsOEJBQUE7QUNITDs7QURPSztFQUNDLHVCQUFBO0FDTE47O0FET007RUFDQyxZQUFBO0VBQ0EsbUJBQUE7QUNMUDs7QURRTTtFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDTlA7O0FEY0M7RUFDQyxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvdGl0bGUvdGl0bGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuXHQtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblx0cGFkZGluZy10b3A6IDE1cHg7XG5cblx0LmZvcm0ge1xuXHRcdGlvbi1saXN0IHtcblx0XHRcdGlvbi1pdGVtIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cblx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcblx0XHRcdFx0XHRtaW4td2lkdGg6IDMwcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAzN3B4O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW9uLWxhYmVsIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4zNXJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE0cHggIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlvbi1pbnB1dCB7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNikgIWltcG9ydGFudDtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLmFkZHJlc3Mge1xuXHRcdFx0XHRcdC5pdGVtX2lubmVyIHtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG5cdFx0XHRcdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5idXR0b24uYnRuIHtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGxldHRlci1zcGFjaW5nOiAxLjVweCAhaW1wb3J0YW50O1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0fVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzdweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4zNXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNikgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbS5hZGRyZXNzIC5pdGVtX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IGlvbi1pdGVtLmFkZHJlc3MgLml0ZW1faW5uZXIgaW9uLWljb24ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IGlvbi1pdGVtLmFkZHJlc3MgLml0ZW1faW5uZXIgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWZvb3RlciAuYnV0dG9uLmJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/title/title.page.ts":
  /*!*************************************!*\
    !*** ./src/app/title/title.page.ts ***!
    \*************************************/

  /*! exports provided: TitlePage */

  /***/
  function srcAppTitleTitlePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitlePage", function () {
      return TitlePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TitlePage = /*#__PURE__*/function () {
      function TitlePage(modalController) {
        _classCallCheck(this, TitlePage);

        this.modalController = modalController;
      }

      _createClass(TitlePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }]);

      return TitlePage;
    }();

    TitlePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    TitlePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-title',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./title.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/title/title.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./title.page.scss */
      "./src/app/title/title.page.scss"))["default"]]
    })], TitlePage);
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      url: "http://ecommerce.x-cow.com/api/action.php"
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/models/contants.models.ts":
  /*!***************************************!*\
    !*** ./src/models/contants.models.ts ***!
    \***************************************/

  /*! exports provided: Constants */

  /***/
  function srcModelsContantsModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.KEY_DEFAULT_LANGUAGE = 'ob_dl';
    /***/
  },

  /***/
  "./src/services/myevent.services.ts":
  /*!******************************************!*\
    !*** ./src/services/myevent.services.ts ***!
    \******************************************/

  /*! exports provided: MyEvent */

  /***/
  function srcServicesMyeventServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEvent", function () {
      return MyEvent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // For rxjs 6


    var MyEvent = /*#__PURE__*/function () {
      function MyEvent() {
        _classCallCheck(this, MyEvent);

        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MyEvent, [{
        key: "getLanguageObservable",
        value: function getLanguageObservable() {
          return this.selectedLanguage.asObservable();
        }
      }, {
        key: "setLanguageData",
        value: function setLanguageData(data) {
          this.selectedLanguage.next(data);
        }
      }]);

      return MyEvent;
    }();

    MyEvent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MyEvent);
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
    /*! /Users/syazwanmarzuki/Documents/Mobile App/e-commerce/customer/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map