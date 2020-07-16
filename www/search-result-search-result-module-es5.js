function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-result-search-result-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchResultSearchResultPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<div class=\"title_inner d-flex\">\n\t\t\t\t<h2 (click)=\"search()\">Top</h2>\n\t\t\t\t<ion-icon class=\"zmdi zmdi-search ion-text-center end\" (click)=\"search()\"></ion-icon>\n\t\t\t</div>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"item_container\">\n\t\t<h2>124 {{'result_found' | translate}}</h2>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/search-result/search-result-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/search-result/search-result-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: SearchResultPageRoutingModule */

  /***/
  function srcAppSearchResultSearchResultRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultPageRoutingModule", function () {
      return SearchResultPageRoutingModule;
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


    var _search_result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-result.page */
    "./src/app/search-result/search-result.page.ts");

    var routes = [{
      path: '',
      component: _search_result_page__WEBPACK_IMPORTED_MODULE_3__["SearchResultPage"]
    }];

    var SearchResultPageRoutingModule = function SearchResultPageRoutingModule() {
      _classCallCheck(this, SearchResultPageRoutingModule);
    };

    SearchResultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchResultPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/search-result/search-result.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/search-result/search-result.module.ts ***!
    \*******************************************************/

  /*! exports provided: SearchResultPageModule */

  /***/
  function srcAppSearchResultSearchResultModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultPageModule", function () {
      return SearchResultPageModule;
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


    var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-result-routing.module */
    "./src/app/search-result/search-result-routing.module.ts");
    /* harmony import */


    var _search_result_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./search-result.page */
    "./src/app/search-result/search-result.page.ts");

    var SearchResultPageModule = function SearchResultPageModule() {
      _classCallCheck(this, SearchResultPageModule);
    };

    SearchResultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchResultPageRoutingModule"]],
      declarations: [_search_result_page__WEBPACK_IMPORTED_MODULE_7__["SearchResultPage"]]
    })], SearchResultPageModule);
    /***/
  },

  /***/
  "./src/app/search-result/search-result.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/search-result/search-result.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchResultSearchResultPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\nion-header ion-toolbar {\n  max-width: calc(100% - 28px);\n  margin: 0 auto;\n  border-radius: 8px;\n  min-height: 50px !important;\n  max-height: 50px !important;\n  border: 1px solid rgba(204, 204, 204, 0.6) !important;\n}\nion-header ion-toolbar ion-buttons {\n  min-height: 50px !important;\n}\nion-header ion-toolbar ion-buttons ion-back-button {\n  --color: var(--text-dark-primary) !important;\n  --icon-font-size: 2rem !important;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-header ion-toolbar ion-title {\n  height: 50px;\n  line-height: 50px;\n  max-height: 50px;\n  padding: 0 !important;\n  position: relative !important;\n  top: 0 !important;\n}\nion-header ion-toolbar ion-title .title_inner h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-black);\n  font-weight: 400;\n  letter-spacing: 1px;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  position: relative;\n  text-transform: none;\n  text-align: justify;\n}\nion-header ion-toolbar ion-title .title_inner ion-icon {\n  color: var(--text-light);\n  font-size: 1.5rem;\n  min-width: 34px;\n}\n.item_container {\n  padding: 0 6px;\n}\n.item_container h2 {\n  margin: 0;\n  padding: 0 6px;\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  padding-bottom: 10px;\n}\n.item_container ion-row ion-col {\n  padding: 8px 6px;\n}\n.item_container ion-row ion-col .item {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.item_container ion-row ion-col .item .item_img {\n  width: 100%;\n  height: 170px;\n  border-radius: 8px;\n  background: var(--bg-color);\n}\n.item_container ion-row ion-col .item .item_img img {\n  width: auto;\n  height: 100%;\n  display: block;\n  margin: auto;\n}\n.item_container ion-row ion-col .item .item_details {\n  padding-top: 12px;\n  width: 100%;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h3 {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding-bottom: 3px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.7rem;\n  padding-bottom: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h5 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-black);\n}\n.item_container ion-row ion-col .item .item_details h5 ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50px;\n  font-weight: 400;\n  font-size: 0.7rem;\n  min-width: 41px;\n  height: 18px;\n  line-height: 18px;\n}\n.item_container ion-row ion-col .item .item_details h5 ion-badge ion-icon {\n  font-size: 0.6rem;\n  position: relative;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRDtBRENDO0VBQ0MsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EscURBQUE7QUNDRjtBRENFO0VBQ0MsMkJBQUE7QUNDSDtBRENHO0VBQ0MsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRElFO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUNGSDtBREtJO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0hMO0FETUk7RUFDQyx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pMO0FEWUE7RUFDQyxjQUFBO0FDVEQ7QURXQztFQUNDLFNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNURjtBRGFFO0VBQ0MsZ0JBQUE7QUNYSDtBRGFHO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1hKO0FEY0k7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNaTDtBRGNLO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1pOO0FEaUJJO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNmTDtBRGlCSztFQUNDLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ2ZOO0FEa0JLO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDaEJOO0FEb0JLO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNsQk47QURvQk07RUFDQyw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNsQlA7QURvQk87RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ2xCUiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcblx0cGFkZGluZy10b3A6IDIwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG5cdGlvbi10b29sYmFyIHtcblx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG5cdFx0bWF4LWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC42KSAhaW1wb3J0YW50O1xuXG5cdFx0aW9uLWJ1dHRvbnMge1xuXHRcdFx0bWluLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuXG5cdFx0XHRpb24tYmFjay1idXR0b24ge1xuXHRcdFx0XHQtLWNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSkgIWltcG9ydGFudDtcblx0XHRcdFx0LS1pY29uLWZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0XHRcdC0tcGFkZGluZy1lbmQ6IDA7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpb24tdGl0bGUge1xuXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDUwcHg7XG5cdFx0XHRtYXgtaGVpZ2h0OiA1MHB4O1xuXHRcdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG5cdFx0XHR0b3A6IDAgIWltcG9ydGFudDtcblxuXHRcdFx0LnRpdGxlX2lubmVyIHtcblx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IC45NXJlbTtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogNTBweDtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdFx0XHRcdFx0bWluLXdpZHRoOiAzNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cblxuLml0ZW1fY29udGFpbmVyIHtcblx0cGFkZGluZzogMCA2cHg7XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwIDZweDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRsZXR0ZXItc3BhY2luZzogMC44cHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdH1cblxuXHRpb24tcm93IHtcblx0XHRpb24tY29sIHtcblx0XHRcdHBhZGRpbmc6IDhweCA2cHg7XG5cblx0XHRcdC5pdGVtIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cblx0XHRcdFx0Lml0ZW1faW1nIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IDE3MHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG5cblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pdGVtX2RldGFpbHMge1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxMnB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogM3B4O1xuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuN3JlbTtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA4cHg7XG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aDUge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cblx0XHRcdFx0XHRcdGlvbi1iYWRnZSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG5cdFx0XHRcdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdFx0XHRcdFx0XHQtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDA7XG5cdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1lbmQ6IDA7XG5cdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMDtcblx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogMDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuN3JlbTtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiA0MXB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG5cdFx0XHRcdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuNnJlbTtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAxcHg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpb24taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjhweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNikgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMge1xuICBtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAtLWljb24tZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWF4LWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1pbi13aWR0aDogMzRweDtcbn1cblxuLml0ZW1fY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCA2cHg7XG59XG4uaXRlbV9jb250YWluZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiA4cHggNnB4O1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9pbWcgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZGV0YWlscyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZGV0YWlscyBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9kZXRhaWxzIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZGV0YWlscyBoNSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZGV0YWlscyBoNSBpb24tYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBtaW4td2lkdGg6IDQxcHg7XG4gIGhlaWdodDogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2RldGFpbHMgaDUgaW9uLWJhZGdlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/search-result/search-result.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/search-result/search-result.page.ts ***!
    \*****************************************************/

  /*! exports provided: SearchResultPage */

  /***/
  function srcAppSearchResultSearchResultPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultPage", function () {
      return SearchResultPage;
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

    var SearchResultPage = /*#__PURE__*/function () {
      function SearchResultPage(route) {
        _classCallCheck(this, SearchResultPage);

        this.route = route;
      }

      _createClass(SearchResultPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "item_details",
        value: function item_details() {
          this.route.navigate(['./item-detail']);
        }
      }, {
        key: "search",
        value: function search() {
          this.route.navigate(['./search']);
        }
      }]);

      return SearchResultPage;
    }();

    SearchResultPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SearchResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-result',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-result.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-result.page.scss */
      "./src/app/search-result/search-result.page.scss"))["default"]]
    })], SearchResultPage);
    /***/
  }
}]);
//# sourceMappingURL=search-result-search-result-module-es5.js.map