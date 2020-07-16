function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishlistWishlistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n<!--\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>-->\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<div class=\"title_inner d-flex\">\n\t\t\t\t<span class=\"center_title\">{{'my_wishlist' | translate}}</span>\n\t\t\t\t<h3 class=\"end\">\n\t\t\t\t\t<span class=\"end cart_icon\" (click)=\"cart()\">\n\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-mall ion-text-start\"></ion-icon>\n\t\t\t\t\t\t<ion-badge>2</ion-badge>\n\t\t\t\t\t</span>\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"item_container\">\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_6.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t\t<h3>Black Cotton Top</h3>\n\t\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/wishlist/wishlist-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/wishlist/wishlist-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: WishlistPageRoutingModule */

  /***/
  function srcAppWishlistWishlistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function () {
      return WishlistPageRoutingModule;
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


    var _wishlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wishlist.page */
    "./src/app/wishlist/wishlist.page.ts");

    var routes = [{
      path: '',
      component: _wishlist_page__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"]
    }];

    var WishlistPageRoutingModule = function WishlistPageRoutingModule() {
      _classCallCheck(this, WishlistPageRoutingModule);
    };

    WishlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WishlistPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/wishlist/wishlist.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/wishlist/wishlist.module.ts ***!
    \*********************************************/

  /*! exports provided: WishlistPageModule */

  /***/
  function srcAppWishlistWishlistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function () {
      return WishlistPageModule;
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


    var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wishlist-routing.module */
    "./src/app/wishlist/wishlist-routing.module.ts");
    /* harmony import */


    var _wishlist_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./wishlist.page */
    "./src/app/wishlist/wishlist.page.ts");

    var WishlistPageModule = function WishlistPageModule() {
      _classCallCheck(this, WishlistPageModule);
    };

    WishlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_6__["WishlistPageRoutingModule"]],
      declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_7__["WishlistPage"]]
    })], WishlistPageModule);
    /***/
  },

  /***/
  "./src/app/wishlist/wishlist.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/wishlist/wishlist.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishlistWishlistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title .title_inner .center_title {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  text-align: center;\n}\nion-header ion-toolbar ion-title .title_inner h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  line-height: 68px;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon {\n  position: relative;\n  min-width: 27px;\n  height: 46px;\n  line-height: normal;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon ion-badge {\n  background: var(--red_color);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 17px;\n  height: 17px;\n  line-height: 17px;\n  display: block;\n  font-size: 0.8rem !important;\n  position: absolute;\n  top: 9px;\n  right: 0;\n  font-weight: 500;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon ion-icon {\n  position: relative;\n  top: 16px;\n  font-size: 1.7rem;\n}\n.item_container {\n  padding: 0 6px;\n  padding-top: 20px;\n}\n.item_container ion-row ion-col {\n  padding: 8px 6px;\n}\n.item_container ion-row ion-col .item {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.item_container ion-row ion-col .item ion-icon.zmdi-favorite {\n  position: absolute;\n  top: 6px;\n  right: 7px;\n  color: var(--primary);\n  z-index: 9;\n  font-size: 1.6rem;\n}\n.item_container ion-row ion-col .item .item_img {\n  width: 100%;\n  height: 170px;\n  border-radius: 8px;\n  background: var(--bg-color);\n}\n.item_container ion-row ion-col .item .item_img img {\n  width: auto;\n  height: 100%;\n  display: block;\n  margin: auto;\n}\n.item_container ion-row ion-col .item .item_details {\n  padding-top: 12px;\n  width: 100%;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h3 {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding-bottom: 3px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.7rem;\n  padding-bottom: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h5 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-black);\n}\n.item_container ion-row ion-col .item .item_details h5 ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50px;\n  font-weight: 400;\n  font-size: 0.7rem;\n  min-width: 41px;\n  height: 18px;\n  line-height: 18px;\n}\n.item_container ion-row ion-col .item .item_details h5 ion-badge ion-icon {\n  font-size: 0.6rem;\n  position: relative;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0c7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FDRko7QURLRztFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSEo7QURRSztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05OO0FEUU07RUFDQyw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ05QO0FEU007RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ1BQO0FEZ0JBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0FDYkQ7QURnQkU7RUFDQyxnQkFBQTtBQ2RIO0FEZ0JHO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2RKO0FEaUJLO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDZk47QURtQkk7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNqQkw7QURtQks7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDakJOO0FEc0JJO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNwQkw7QURzQks7RUFDQyxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNwQk47QUR1Qks7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNyQk47QUR5Qks7RUFDQyxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ3ZCTjtBRHlCTTtFQUNDLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ3ZCUDtBRHlCTztFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDdkJSIiwiZmlsZSI6InNyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG5cdGlvbi10aXRsZSB7ICAgICBcblx0XHQudGl0bGVfaW5uZXIge1xuXHRcdFx0LmNlbnRlcl90aXRsZSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiA2OHB4O1xuXG5cblx0XHRcblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0Ji5jYXJ0X2ljb24ge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAyN3B4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NnB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblxuXHRcdFx0XHRcdFx0aW9uLWJhZGdlIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tcmVkX2NvbG9yKTtcblx0XHRcdFx0XHRcdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0XHRcdFx0XHRcdC0tY29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWVuZDogMDtcblx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctdG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxN3B4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxN3B4O1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDlweDtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS43cmVtO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uaXRlbV9jb250YWluZXIge1xuXHRwYWRkaW5nOiAwIDZweDtcblx0cGFkZGluZy10b3A6IDIwcHg7XG5cblx0aW9uLXJvdyB7XG5cdFx0aW9uLWNvbCB7XG5cdFx0XHRwYWRkaW5nOiA4cHggNnB4O1xuXG5cdFx0XHQuaXRlbSB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRcdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdFx0Ji56bWRpLWZhdm9yaXRlIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHRvcDogNnB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDdweDtcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDk7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuNnJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaXRlbV9pbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTcwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcblxuXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lml0ZW1fZGV0YWlscyB7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDEycHg7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAzcHg7XG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGg0IHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC43cmVtO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDhweDtcblx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoNSB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMXJlbTtcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcblxuXHRcdFx0XHRcdFx0aW9uLWJhZGdlIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcblx0XHRcdFx0XHRcdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0XHRcdFx0XHRcdC0tY29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWVuZDogMDtcblx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctdG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IC43cmVtO1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDQxcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cblx0XHRcdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC42cmVtO1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IDFweDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLmNlbnRlcl90aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDY4cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgc3Bhbi5jYXJ0X2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMjdweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHNwYW4uY2FydF9pY29uIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZF9jb2xvcik7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5cHg7XG4gIHJpZ2h0OiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHNwYW4uY2FydF9pY29uIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uaXRlbV9jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogOHB4IDZweDtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIC5pdGVtIGlvbi1pY29uLnptZGktZmF2b3JpdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnB4O1xuICByaWdodDogN3B4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHotaW5kZXg6IDk7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2ltZyBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9kZXRhaWxzIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9kZXRhaWxzIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2RldGFpbHMgaDQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9kZXRhaWxzIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9kZXRhaWxzIGg1IGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIG1pbi13aWR0aDogNDFweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZGV0YWlscyBoNSBpb24tYmFkZ2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/wishlist/wishlist.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/wishlist/wishlist.page.ts ***!
    \*******************************************/

  /*! exports provided: WishlistPage */

  /***/
  function srcAppWishlistWishlistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistPage", function () {
      return WishlistPage;
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

    var WishlistPage = /*#__PURE__*/function () {
      function WishlistPage(route) {
        _classCallCheck(this, WishlistPage);

        this.route = route;
      }

      _createClass(WishlistPage, [{
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

      return WishlistPage;
    }();

    WishlistPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WishlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wishlist',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./wishlist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./wishlist.page.scss */
      "./src/app/wishlist/wishlist.page.scss"))["default"]]
    })], WishlistPage);
    /***/
  }
}]);
//# sourceMappingURL=wishlist-wishlist-module-es5.js.map