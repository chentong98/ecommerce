function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-error-network-error-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/network-error/network-error.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/network-error/network-error.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNetworkErrorNetworkErrorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Oops..</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"12\" offset-md=\"0\" size-sm=\"6\" offset-sm=\"3\">\n        \n        <div>\n          <ion-img src=\"../../assets/icon/no-wifi.png\"></ion-img>\n        </div>\n\n        <div class=\"ion-text-center error-message-div\">\n          <h1>Ooops!</h1>\n          <ion-label>No internet Connection found</ion-label> <br>\n          <ion-label>Checkout your connection</ion-label>\n\n\n          <ion-button expand=\"block\" (click)=\"checkingNetworkStatus()\" fill=\"outline\" class=\"retry-button\">\n            Try Again\n          </ion-button>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/network-error/network-error-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/network-error/network-error-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: NetworkErrorPageRoutingModule */

  /***/
  function srcAppNetworkErrorNetworkErrorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkErrorPageRoutingModule", function () {
      return NetworkErrorPageRoutingModule;
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


    var _network_error_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./network-error.page */
    "./src/app/network-error/network-error.page.ts");

    var routes = [{
      path: '',
      component: _network_error_page__WEBPACK_IMPORTED_MODULE_3__["NetworkErrorPage"]
    }];

    var NetworkErrorPageRoutingModule = function NetworkErrorPageRoutingModule() {
      _classCallCheck(this, NetworkErrorPageRoutingModule);
    };

    NetworkErrorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NetworkErrorPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/network-error/network-error.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/network-error/network-error.module.ts ***!
    \*******************************************************/

  /*! exports provided: NetworkErrorPageModule */

  /***/
  function srcAppNetworkErrorNetworkErrorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkErrorPageModule", function () {
      return NetworkErrorPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _network_error_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./network-error-routing.module */
    "./src/app/network-error/network-error-routing.module.ts");
    /* harmony import */


    var _network_error_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./network-error.page */
    "./src/app/network-error/network-error.page.ts");

    var NetworkErrorPageModule = function NetworkErrorPageModule() {
      _classCallCheck(this, NetworkErrorPageModule);
    };

    NetworkErrorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _network_error_routing_module__WEBPACK_IMPORTED_MODULE_5__["NetworkErrorPageRoutingModule"]],
      declarations: [_network_error_page__WEBPACK_IMPORTED_MODULE_6__["NetworkErrorPage"]]
    })], NetworkErrorPageModule);
    /***/
  },

  /***/
  "./src/app/network-error/network-error.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/network-error/network-error.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNetworkErrorNetworkErrorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmstZXJyb3IvbmV0d29yay1lcnJvci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/network-error/network-error.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/network-error/network-error.page.ts ***!
    \*****************************************************/

  /*! exports provided: NetworkErrorPage */

  /***/
  function srcAppNetworkErrorNetworkErrorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkErrorPage", function () {
      return NetworkErrorPage;
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


    var _providers_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../providers/network.service */
    "./src/app/providers/network.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NetworkErrorPage = /*#__PURE__*/function () {
      function NetworkErrorPage(menuCtrl, routerOutlet, networkService, activatedRoute) {
        _classCallCheck(this, NetworkErrorPage);

        this.menuCtrl = menuCtrl;
        this.routerOutlet = routerOutlet;
        this.networkService = networkService;
        this.activatedRoute = activatedRoute;
      }

      _createClass(NetworkErrorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menuCtrl.enable(false, 'menu');
          this.routerOutlet.swipeGesture = false;
          this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params['type']);
          });
        }
      }, {
        key: "checkingNetworkStatus",
        value: function checkingNetworkStatus() {
          this.networkService.retryToChecknetworkConnection();
        }
      }]);

      return NetworkErrorPage;
    }();

    NetworkErrorPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }, {
        type: _providers_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    NetworkErrorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-network-error',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./network-error.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/network-error/network-error.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./network-error.page.scss */
      "./src/app/network-error/network-error.page.scss"))["default"]]
    })], NetworkErrorPage);
    /***/
  }
}]);
//# sourceMappingURL=network-error-network-error-module-es5.js.map