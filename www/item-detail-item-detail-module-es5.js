function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-detail-item-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/item-detail/item-detail.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-detail/item-detail.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppItemDetailItemDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"bg_transparent\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<div class=\"title_inner d-flex\">\n\t\t\t\t<h3 class=\"end\">\n\t\t\t\t\t<span class=\"end cart_icon\" (click)=\"cart()\">\n\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-mall ion-text-start\"></ion-icon>\n\t\t\t\t\t\t<ion-badge>2</ion-badge>\n\t\t\t\t\t</span>\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-color\">\n\t<div class=\"banner\">\n\t\t<h3 [ngClass]=\"FavoriteIcon ? 'active' : ''\" (click)=\"toggleFavoriteIcon()\">\n\t\t\t<ion-icon class=\"zmdi zmdi-favorite-outline\"></ion-icon>\n\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t</h3>\n\n\t\t<ion-slides pager=\"true\" loop=\"true\">\n\t\t\t<ion-slide>\n\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t</div>\n\n\t<div class=\"item_details\">\n\t\t<h2>Black Cotton Top</h2>\n\t\t<h3 class=\"d-flex\">\n\t\t\tOperum Englang\n\t\t\t<ion-badge class=\"end\">\n\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t</ion-badge>\n\t\t</h3>\n\t\t<h4 class=\"d-flex\">\n\t\t\t$32.00\n\t\t\t<span class=\"end\" (click)=\"reviews()\">{{'read_all' | translate}} 124 {{'reviews' | translate}}\n\t\t\t\t<ion-icon class=\"zmdi zmdi-chevron-right ion-text-end\"></ion-icon>\n\t\t\t</span>\n\t\t</h4>\n\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>\n\t</div>\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\">\n\t\t<ion-icon class=\"zmdi zmdi-mall ion-text-start\"></ion-icon>\n\t\t{{'add_to_cart' | translate}}\n\t</ion-button>\n\n\t<div class=\"more_by_seller\">\n\t\t<h2 class=\"d-flex\" (click)=\"seller_info()\">{{'more_by' | translate}} &nbsp;<strong>{{'seller' | translate}}</strong><span class=\"end \">{{'view_all' | translate}}</span></h2>\n\t\t<div class=\"items_row\">\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Blue Medium</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$32.00</span> \n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Large Pink</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Full Sleven Tshirt</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Blue Medium</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$32.00</span> \n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Large Pink</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Full Sleven Tshirt</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Blue Medium</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$32.00</span> \n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Large Pink</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Full Sleven Tshirt</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Blue Medium</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$32.00</span> \n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Large Pink</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Full Sleven Tshirt</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Blue Medium</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$32.00</span> \n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Large Pink</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Full Sleven Tshirt</h3> \n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/item-detail/item-detail-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/item-detail/item-detail-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ItemDetailPageRoutingModule */

  /***/
  function srcAppItemDetailItemDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemDetailPageRoutingModule", function () {
      return ItemDetailPageRoutingModule;
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


    var _item_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./item-detail.page */
    "./src/app/item-detail/item-detail.page.ts");

    var routes = [{
      path: '',
      component: _item_detail_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailPage"]
    }];

    var ItemDetailPageRoutingModule = function ItemDetailPageRoutingModule() {
      _classCallCheck(this, ItemDetailPageRoutingModule);
    };

    ItemDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ItemDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/item-detail/item-detail.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/item-detail/item-detail.module.ts ***!
    \***************************************************/

  /*! exports provided: ItemDetailPageModule */

  /***/
  function srcAppItemDetailItemDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function () {
      return ItemDetailPageModule;
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


    var _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item-detail-routing.module */
    "./src/app/item-detail/item-detail-routing.module.ts");
    /* harmony import */


    var _item_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./item-detail.page */
    "./src/app/item-detail/item-detail.page.ts");

    var ItemDetailPageModule = function ItemDetailPageModule() {
      _classCallCheck(this, ItemDetailPageModule);
    };

    ItemDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["ItemDetailPageRoutingModule"]],
      declarations: [_item_detail_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailPage"]]
    })], ItemDetailPageModule);
    /***/
  },

  /***/
  "./src/app/item-detail/item-detail.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/item-detail/item-detail.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppItemDetailItemDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-top: 20px;\n}\nion-header ion-toolbar ion-title {\n  position: absolute !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 60px;\n}\nion-header ion-toolbar ion-title .title_inner .center_title {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  text-align: center;\n}\nion-header ion-toolbar ion-title .title_inner h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  line-height: 68px;\n}\nion-header ion-toolbar ion-title .title_inner h3 ion-icon.zmdi-favorite {\n  min-width: 41px;\n  font-size: 1.7rem;\n  position: relative;\n  top: 8px;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon {\n  position: relative;\n  min-width: 27px;\n  height: 46px;\n  line-height: normal;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon ion-badge {\n  background: var(--red_color);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 17px;\n  height: 17px;\n  line-height: 17px;\n  display: block;\n  font-size: 0.8rem !important;\n  position: absolute;\n  top: 9px;\n  right: 0;\n  font-weight: 500;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon ion-icon {\n  position: relative;\n  top: 16px;\n  font-size: 1.7rem;\n}\n.banner {\n  position: relative;\n}\n.banner h3 {\n  position: absolute;\n  margin: 0;\n  top: 80px;\n  z-index: 99;\n  right: 18px;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n}\n.banner h3 ion-icon {\n  font-size: 1.7rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 28px;\n  height: 28px;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.banner h3 ion-icon.zmdi-favorite {\n  width: 0;\n  height: 0;\n  color: var(--primary);\n}\n.banner h3.active ion-icon.zmdi-favorite {\n  width: 28px;\n  height: 28px;\n}\n.banner h3.active ion-icon.zmdi-favorite-outline {\n  width: 0;\n  height: 0;\n}\n.banner ion-slides ion-slide .img_box {\n  width: 100%;\n  height: 370px;\n  border-radius: 4px;\n}\n.item_details {\n  padding: 15px 13px 18px 13px;\n}\n.item_details h2 {\n  margin: 0;\n  font-weight: 600;\n  color: var(--text-black);\n  font-size: 1.52rem;\n  padding-bottom: 2px;\n}\n.item_details h3 {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0.6px;\n  padding-bottom: 10px;\n}\n.item_details h3 ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50px;\n  font-weight: 400;\n  font-size: 0.9rem;\n  min-width: 52px;\n  height: 23px;\n  line-height: 23px;\n}\n.item_details h3 ion-badge ion-icon {\n  font-size: 0.75rem;\n  position: relative;\n  top: 1px;\n}\n.item_details h4 {\n  margin: 0;\n  font-size: 1.3rem;\n  padding-bottom: 17px;\n}\n.item_details h4 span {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.item_details h4 span ion-icon {\n  font-size: 1.5rem;\n  width: 17px;\n  min-width: 17px;\n}\n.item_details p {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-weight: 500;\n  font-size: 0.95rem;\n  letter-spacing: 0.3px;\n  line-height: 21px;\n  padding-bottom: 10px;\n}\n.button.btn {\n  height: 55px;\n}\n.button.btn ion-icon {\n  font-size: 1.3rem;\n  min-width: 35px;\n}\n.more_by_seller {\n  padding-top: 23px;\n}\n.more_by_seller h2 {\n  margin: 0;\n  padding: 0 16px 17px;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n.more_by_seller h2 span {\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1.1rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n}\n.more_by_seller .items_row {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n}\n.more_by_seller .items_row .item {\n  display: inline-block;\n  margin: 0 6px;\n  overflow: hidden;\n  width: 147px;\n}\n.more_by_seller .items_row .item .item_img {\n  width: 147px;\n  height: 147px;\n  border-radius: 8px;\n}\n.more_by_seller .items_row .item .item_details {\n  padding-top: 12px;\n  width: 100%;\n  overflow: hidden;\n}\n.more_by_seller .items_row .item .item_details h3 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 0.8rem;\n  font-weight: 500;\n  padding-bottom: 3px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.more_by_seller .items_row .item .item_details h5 {\n  margin: 0;\n  font-size: 1rem;\n  color: var(--text-black);\n}\n.more_by_seller .items_row .item .item_details h5 ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50px;\n  font-weight: 400;\n  font-size: 0.7rem;\n  min-width: 41px;\n  height: 18px;\n  line-height: 18px;\n}\n.more_by_seller .items_row .item .item_details h5 ion-badge ion-icon {\n  font-size: 0.6rem;\n  position: relative;\n  top: 1px;\n}\n.more_by_seller .items_row .item:first-child {\n  margin-left: 14px;\n}\n.more_by_seller .items_row .item:last-child {\n  margin-right: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUNDRDtBRENDO0VBQ0MsNkJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURHRztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElHO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtLO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSE47QURRSztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05OO0FEUU07RUFDQyw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ05QO0FEU007RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ1BQO0FEaUJBO0VBQ0Msa0JBQUE7QUNkRDtBRGdCQztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNkRjtBRGdCRTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ2RIO0FEZ0JHO0VBQ0MsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQ2RKO0FEcUJJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNuQkw7QURzQkk7RUFDQyxRQUFBO0VBQ0EsU0FBQTtBQ3BCTDtBRDhCRztFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUM1Qko7QURrQ0E7RUFDQyw0QkFBQTtBQy9CRDtBRGlDQztFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQy9CRjtBRGtDQztFQUNDLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDaENGO0FEa0NFO0VBQ0MsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDaENIO0FEa0NHO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNoQ0o7QURzQ0M7RUFDQyxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ3BDRjtBRHNDRTtFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ3BDSDtBRHNDRztFQUNDLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNwQ0o7QUR5Q0M7RUFDQyxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDdkNGO0FEMkNBO0VBQ0MsWUFBQTtBQ3hDRDtBRDBDQztFQUNDLGlCQUFBO0VBQ0EsZUFBQTtBQ3hDRjtBRDRDQTtFQUNDLGlCQUFBO0FDekNEO0FEMkNDO0VBQ0MsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3pDRjtBRDJDRTtFQUNDLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUN6Q0g7QUQ2Q0M7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzNDRjtBRDZDRTtFQUNDLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQzNDSDtBRDZDRztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUMzQ0o7QUQ4Q0c7RUFDQyxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzVDSjtBRDhDSTtFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQzVDTDtBRGdESTtFQUNDLFNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUM5Q0w7QURnREs7RUFDQyw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUM5Q047QURnRE07RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQzlDUDtBRHFERztFQUNDLGlCQUFBO0FDbkRKO0FEc0RHO0VBQ0Msa0JBQUE7QUNwREoiLCJmaWxlIjoic3JjL2FwcC9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHBhZGRpbmctdG9wOiAyMHB4O1xuXG5cdGlvbi10aXRsZSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdFx0bGVmdDogMDtcblx0XHR0b3A6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiA2MHB4O1xuXG5cblx0XHQudGl0bGVfaW5uZXIge1xuXHRcdFx0LmNlbnRlcl90aXRsZSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiA2OHB4O1xuXG5cdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHQmLnptZGktZmF2b3JpdGUge1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiA0MXB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjdyZW07XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR0b3A6IDhweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHQmLmNhcnRfaWNvbiB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRtaW4td2lkdGg6IDI3cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQ2cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXG5cdFx0XHRcdFx0XHRpb24tYmFkZ2Uge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xuXHRcdFx0XHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHRcdFx0XHRcdFx0LS1jb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctZW5kOiAwO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0XHRcdFx0XHRcdC0tcGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTdweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogOXB4O1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHRvcDogMTZweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjdyZW07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cblxuLmJhbm5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRoMyB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdG1hcmdpbjogMDtcblx0XHR0b3A6IDgwcHg7XG5cdFx0ei1pbmRleDogOTk7XG5cdFx0cmlnaHQ6IDE4cHg7XG5cdFx0d2lkdGg6IDMwcHg7XG5cdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdGlvbi1pY29uIHtcblx0XHRcdGZvbnQtc2l6ZTogMS43cmVtO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0d2lkdGg6IDI4cHg7XG5cdFx0XHRoZWlnaHQ6IDI4cHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIC4zcztcblxuXHRcdFx0Ji56bWRpLWZhdm9yaXRlIHtcblx0XHRcdFx0d2lkdGg6IDA7XG5cdFx0XHRcdGhlaWdodDogMDtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ji5hY3RpdmUge1xuXHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHQmLnptZGktZmF2b3JpdGUge1xuXHRcdFx0XHRcdHdpZHRoOiAyOHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMjhweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuem1kaS1mYXZvcml0ZS1vdXRsaW5lIHtcblx0XHRcdFx0XHR3aWR0aDogMDtcblx0XHRcdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cblx0aW9uLXNsaWRlcyB7XG5cdFx0aW9uLXNsaWRlIHtcblx0XHRcdC5pbWdfYm94IHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMzcwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLml0ZW1fZGV0YWlscyB7XG5cdHBhZGRpbmc6IDE1cHggMTNweCAxOHB4IDEzcHg7XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcblx0XHRmb250LXNpemU6IDEuNTJyZW07XG5cdFx0cGFkZGluZy1ib3R0b206IDJweDtcblx0fVxuXG5cdGgzIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcblx0XHRmb250LXNpemU6IC45cmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IC42cHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cblx0XHRpb24tYmFkZ2Uge1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcblx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdFx0LS1jb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogMDtcblx0XHRcdC0tcGFkZGluZy1lbmQ6IDA7XG5cdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0XHQtLXBhZGRpbmctdG9wOiAwO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRmb250LXNpemU6IDAuOXJlbTtcblx0XHRcdG1pbi13aWR0aDogNTJweDtcblx0XHRcdGhlaWdodDogMjNweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyM3B4O1xuXG5cdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMC43NXJlbTtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR0b3A6IDFweDtcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdGg0IHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Zm9udC1zaXplOiAxLjNyZW07XG5cdFx0cGFkZGluZy1ib3R0b206IDE3cHg7XG5cblx0XHRzcGFuIHtcblx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdGZvbnQtc2l6ZTogLjlyZW07XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuXG5cdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdFx0XHR3aWR0aDogMTdweDtcblx0XHRcdFx0bWluLXdpZHRoOiAxN3B4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cdFx0bGV0dGVyLXNwYWNpbmc6IC4zcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIxcHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdH1cbn1cblxuLmJ1dHRvbi5idG4ge1xuXHRoZWlnaHQ6IDU1cHg7XG5cblx0aW9uLWljb24ge1xuXHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHRcdG1pbi13aWR0aDogMzVweDtcblx0fVxufVxuXG4ubW9yZV9ieV9zZWxsZXIge1xuXHRwYWRkaW5nLXRvcDogMjNweDtcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDAgMTZweCAxN3B4O1xuXHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0XHRzcGFuIHtcblx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRmb250LXNpemU6IDEuMXJlbTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdH1cblx0fVxuXG5cdC5pdGVtc19yb3cge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0b3ZlcmZsb3cteDogYXV0bzsgXG5cblx0XHQuaXRlbSB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRtYXJnaW46IDAgNnB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdHdpZHRoOiAxNDdweDtcblxuXHRcdFx0Lml0ZW1faW1nIHtcblx0XHRcdFx0d2lkdGg6IDE0N3B4O1xuXHRcdFx0XHRoZWlnaHQ6IDE0N3B4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHR9XG5cblx0XHRcdC5pdGVtX2RldGFpbHMge1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMTJweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAzcHg7XG5cdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHR9XG4gXG5cblx0XHRcdFx0aDUge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuXG5cdFx0XHRcdFx0aW9uLWJhZGdlIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG5cdFx0XHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHRcdFx0XHRcdC0tY29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDA7XG5cdFx0XHRcdFx0XHQtLXBhZGRpbmctZW5kOiAwO1xuXHRcdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogMDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuN3JlbTtcblx0XHRcdFx0XHRcdG1pbi13aWR0aDogNDFweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG5cdFx0XHRcdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC42cmVtO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHRvcDogMXB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTRweDtcblx0XHRcdH1cblxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLmNlbnRlcl90aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDY4cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgaW9uLWljb24uem1kaS1mYXZvcml0ZSB7XG4gIG1pbi13aWR0aDogNDFweDtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgc3Bhbi5jYXJ0X2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMjdweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHNwYW4uY2FydF9pY29uIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZF9jb2xvcik7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5cHg7XG4gIHJpZ2h0OiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHNwYW4uY2FydF9pY29uIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbm5lciBoMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwO1xuICB0b3A6IDgwcHg7XG4gIHotaW5kZXg6IDk5O1xuICByaWdodDogMThweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhbm5lciBoMyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5iYW5uZXIgaDMgaW9uLWljb24uem1kaS1mYXZvcml0ZSB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbi5iYW5uZXIgaDMuYWN0aXZlIGlvbi1pY29uLnptZGktZmF2b3JpdGUge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuLmJhbm5lciBoMy5hY3RpdmUgaW9uLWljb24uem1kaS1mYXZvcml0ZS1vdXRsaW5lIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi5iYW5uZXIgaW9uLXNsaWRlcyBpb24tc2xpZGUgLmltZ19ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaXRlbV9kZXRhaWxzIHtcbiAgcGFkZGluZzogMTVweCAxM3B4IDE4cHggMTNweDtcbn1cbi5pdGVtX2RldGFpbHMgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC1zaXplOiAxLjUycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLml0ZW1fZGV0YWlscyBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uaXRlbV9kZXRhaWxzIGgzIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1pbi13aWR0aDogNTJweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbn1cbi5pdGVtX2RldGFpbHMgaDMgaW9uLWJhZGdlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuLml0ZW1fZGV0YWlscyBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxN3B4O1xufVxuLml0ZW1fZGV0YWlscyBoNCBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5pdGVtX2RldGFpbHMgaDQgc3BhbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB3aWR0aDogMTdweDtcbiAgbWluLXdpZHRoOiAxN3B4O1xufVxuLml0ZW1fZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uYnV0dG9uLmJ0biB7XG4gIGhlaWdodDogNTVweDtcbn1cbi5idXR0b24uYnRuIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1pbi13aWR0aDogMzVweDtcbn1cblxuLm1vcmVfYnlfc2VsbGVyIHtcbiAgcGFkZGluZy10b3A6IDIzcHg7XG59XG4ubW9yZV9ieV9zZWxsZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMTZweCAxN3B4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5tb3JlX2J5X3NlbGxlciBoMiBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5tb3JlX2J5X3NlbGxlciAuaXRlbXNfcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4ubW9yZV9ieV9zZWxsZXIgLml0ZW1zX3JvdyAuaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDE0N3B4O1xufVxuLm1vcmVfYnlfc2VsbGVyIC5pdGVtc19yb3cgLml0ZW0gLml0ZW1faW1nIHtcbiAgd2lkdGg6IDE0N3B4O1xuICBoZWlnaHQ6IDE0N3B4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ubW9yZV9ieV9zZWxsZXIgLml0ZW1zX3JvdyAuaXRlbSAuaXRlbV9kZXRhaWxzIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vcmVfYnlfc2VsbGVyIC5pdGVtc19yb3cgLml0ZW0gLml0ZW1fZGV0YWlscyBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW9yZV9ieV9zZWxsZXIgLml0ZW1zX3JvdyAuaXRlbSAuaXRlbV9kZXRhaWxzIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cbi5tb3JlX2J5X3NlbGxlciAuaXRlbXNfcm93IC5pdGVtIC5pdGVtX2RldGFpbHMgaDUgaW9uLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbWluLXdpZHRoOiA0MXB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLm1vcmVfYnlfc2VsbGVyIC5pdGVtc19yb3cgLml0ZW0gLml0ZW1fZGV0YWlscyBoNSBpb24tYmFkZ2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cbi5tb3JlX2J5X3NlbGxlciAuaXRlbXNfcm93IC5pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4ubW9yZV9ieV9zZWxsZXIgLml0ZW1zX3JvdyAuaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/item-detail/item-detail.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/item-detail/item-detail.page.ts ***!
    \*************************************************/

  /*! exports provided: ItemDetailPage */

  /***/
  function srcAppItemDetailItemDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemDetailPage", function () {
      return ItemDetailPage;
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

    var ItemDetailPage = /*#__PURE__*/function () {
      function ItemDetailPage(route) {
        _classCallCheck(this, ItemDetailPage);

        this.route = route;
        this.FavoriteIcon = false;
      }

      _createClass(ItemDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleFavoriteIcon",
        value: function toggleFavoriteIcon() {
          this.FavoriteIcon = !this.FavoriteIcon;
        }
      }, {
        key: "cart",
        value: function cart() {
          this.route.navigate(['./cart']);
        }
      }, {
        key: "reviews",
        value: function reviews() {
          this.route.navigate(['./reviews']);
        }
      }, {
        key: "seller_info",
        value: function seller_info() {
          this.route.navigate(['./seller-info']);
        }
      }]);

      return ItemDetailPage;
    }();

    ItemDetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ItemDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/item-detail/item-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-detail.page.scss */
      "./src/app/item-detail/item-detail.page.scss"))["default"]]
    })], ItemDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=item-detail-item-detail-module-es5.js.map