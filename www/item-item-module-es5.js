function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppItemItemPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<div class=\"title_inner d-flex\">\n\t\t\t\t<span class=\"center_title\"> Fashion</span>\n\t\t\t\t<h3 class=\"end\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite ion-text-start\"></ion-icon>\n\n\t\t\t\t\t<span class=\"end cart_icon\" (click)=\"cart()\">\n\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-mall ion-text-start\"></ion-icon>\n\t\t\t\t\t\t<ion-badge>2</ion-badge>\n\t\t\t\t\t</span>\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"item_container\">\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/item/item-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/item/item-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: ItemPageRoutingModule */

  /***/
  function srcAppItemItemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemPageRoutingModule", function () {
      return ItemPageRoutingModule;
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


    var _item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./item.page */
    "./src/app/item/item.page.ts");

    var routes = [{
      path: '',
      component: _item_page__WEBPACK_IMPORTED_MODULE_3__["ItemPage"]
    }];

    var ItemPageRoutingModule = function ItemPageRoutingModule() {
      _classCallCheck(this, ItemPageRoutingModule);
    };

    ItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ItemPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/item/item.module.ts":
  /*!*************************************!*\
    !*** ./src/app/item/item.module.ts ***!
    \*************************************/

  /*! exports provided: ItemPageModule */

  /***/
  function srcAppItemItemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemPageModule", function () {
      return ItemPageModule;
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


    var _item_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item-routing.module */
    "./src/app/item/item-routing.module.ts");
    /* harmony import */


    var _item_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./item.page */
    "./src/app/item/item.page.ts");

    var ItemPageModule = function ItemPageModule() {
      _classCallCheck(this, ItemPageModule);
    };

    ItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _item_routing_module__WEBPACK_IMPORTED_MODULE_6__["ItemPageRoutingModule"]],
      declarations: [_item_page__WEBPACK_IMPORTED_MODULE_7__["ItemPage"]]
    })], ItemPageModule);
    /***/
  },

  /***/
  "./src/app/item/item.page.scss":
  /*!*************************************!*\
    !*** ./src/app/item/item.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppItemItemPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title .title_inner .center_title {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  text-align: center;\n}\nion-header ion-toolbar ion-title .title_inner h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  line-height: 68px;\n}\nion-header ion-toolbar ion-title .title_inner h3 ion-icon.zmdi-favorite {\n  min-width: 41px;\n  font-size: 1.7rem;\n  position: relative;\n  top: 8px;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon {\n  position: relative;\n  min-width: 27px;\n  height: 46px;\n  line-height: normal;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon ion-badge {\n  background: var(--red_color);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 17px;\n  height: 17px;\n  line-height: 17px;\n  display: block;\n  font-size: 0.8rem !important;\n  position: absolute;\n  top: 9px;\n  right: 0;\n  font-weight: 500;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon ion-icon {\n  position: relative;\n  top: 16px;\n  font-size: 1.7rem;\n}\n.item_container {\n  padding: 0 6px;\n  padding-top: 10px;\n}\n.item_container ion-row ion-col {\n  padding: 8px 6px;\n}\n.item_container ion-row ion-col .item {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.item_container ion-row ion-col .item .item_img {\n  width: 100%;\n  height: 170px;\n  border-radius: 8px;\n  background: var(--bg-color);\n}\n.item_container ion-row ion-col .item .item_img img {\n  width: auto;\n  height: 100%;\n  display: block;\n  margin: auto;\n}\n.item_container ion-row ion-col .item .item_details {\n  padding-top: 12px;\n  width: 100%;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h3 {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding-bottom: 3px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.7rem;\n  padding-bottom: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h5 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-black);\n}\n.item_container ion-row ion-col .item .item_details h5 ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50px;\n  font-weight: 400;\n  font-size: 0.7rem;\n  min-width: 41px;\n  height: 18px;\n  line-height: 18px;\n}\n.item_container ion-row ion-col .item .item_details h5 ion-badge ion-icon {\n  font-size: 0.6rem;\n  position: relative;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvaXRlbS9pdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaXRlbS9pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtHO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNISjtBRE1LO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSk47QURTSztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1BOO0FEU007RUFDQyw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ1BQO0FEVU07RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ1JQO0FEaUJBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0FDZEQ7QURpQkU7RUFDQyxnQkFBQTtBQ2ZIO0FEaUJHO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2ZKO0FEa0JJO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDaEJMO0FEa0JLO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ2hCTjtBRHFCSTtFQUNDLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDbkJMO0FEcUJLO0VBQ0MsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDbkJOO0FEc0JLO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDcEJOO0FEd0JLO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUN0Qk47QUR3Qk07RUFDQyw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUN0QlA7QUR3Qk87RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ3RCUiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcblx0aW9uLXRpdGxlIHsgICBcblx0XHQudGl0bGVfaW5uZXIge1xuXHRcdFx0LmNlbnRlcl90aXRsZSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiA2OHB4O1xuXG5cdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHQmLnptZGktZmF2b3JpdGUge1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiA0MXB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjdyZW07XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR0b3A6IDhweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHQmLmNhcnRfaWNvbiB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRtaW4td2lkdGg6IDI3cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQ2cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXG5cdFx0XHRcdFx0XHRpb24tYmFkZ2Uge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xuXHRcdFx0XHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHRcdFx0XHRcdFx0LS1jb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctZW5kOiAwO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0XHRcdFx0XHRcdC0tcGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTdweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogOXB4O1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHRvcDogMTZweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjdyZW07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5pdGVtX2NvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDAgNnB4O1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblxuXHRpb24tcm93IHtcblx0XHRpb24tY29sIHtcblx0XHRcdHBhZGRpbmc6IDhweCA2cHg7XG5cblx0XHRcdC5pdGVtIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cblx0XHRcdFx0Lml0ZW1faW1nIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IDE3MHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG5cblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pdGVtX2RldGFpbHMge1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxMnB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogM3B4O1xuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuN3JlbTtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA4cHg7XG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aDUge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cblx0XHRcdFx0XHRcdGlvbi1iYWRnZSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG5cdFx0XHRcdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdFx0XHRcdFx0XHQtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDA7XG5cdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1lbmQ6IDA7XG5cdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMDtcblx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogMDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuN3JlbTtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiA0MXB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG5cdFx0XHRcdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuNnJlbTtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAxcHg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciAuY2VudGVyX3RpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNjhweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyBpb24taWNvbi56bWRpLWZhdm9yaXRlIHtcbiAgbWluLXdpZHRoOiA0MXB4O1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyBzcGFuLmNhcnRfaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgc3Bhbi5jYXJ0X2ljb24gaW9uLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkX2NvbG9yKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgc3Bhbi5jYXJ0X2ljb24gaW9uLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTZweDtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5pdGVtX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiA4cHggNnB4O1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9pbWcgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZGV0YWlscyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZGV0YWlscyBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9kZXRhaWxzIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZGV0YWlscyBoNSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZGV0YWlscyBoNSBpb24tYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBtaW4td2lkdGg6IDQxcHg7XG4gIGhlaWdodDogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2RldGFpbHMgaDUgaW9uLWJhZGdlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/item/item.page.ts":
  /*!***********************************!*\
    !*** ./src/app/item/item.page.ts ***!
    \***********************************/

  /*! exports provided: ItemPage */

  /***/
  function srcAppItemItemPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemPage", function () {
      return ItemPage;
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

    var ItemPage = /*#__PURE__*/function () {
      function ItemPage(route) {
        _classCallCheck(this, ItemPage);

        this.route = route;
      }

      _createClass(ItemPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cart",
        value: function cart() {
          this.route.navigate(['./cart']);
        }
      }, {
        key: "item_details",
        value: function item_details() {
          this.route.navigate(['./item-detail']);
        }
      }]);

      return ItemPage;
    }();

    ItemPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item.page.scss */
      "./src/app/item/item.page.scss"))["default"]]
    })], ItemPage);
    /***/
  }
}]);
//# sourceMappingURL=item-item-module-es5.js.map