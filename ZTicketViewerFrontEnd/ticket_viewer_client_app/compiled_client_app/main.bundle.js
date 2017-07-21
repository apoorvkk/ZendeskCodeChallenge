webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\" style=\"background-color: #e6f7fd\">\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\n  <a class=\"navbar-brand\" style=\"background-size: 120px auto;background-color: #e6f7fd\" href=\"#\"></a>\n  <ul class=\"nav navbar-nav mr-auto d-md-down-none\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link navbar-toggler\" href=\"#\" appSidebarToggler>&#9776;</a>\n    </li>\n  </ul>\n</header>\n\n<div class=\"app-body\">\n  <div class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/']\">Ticket Viewer </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"http://homesrus-aus.zendesk.com//\">Zendesk Admin Panel</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <main class=\"main\">\n    <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n  </main>\n</div>\n\n<footer class=\"app-footer\">\n  HomesRUS &copy; 2017 <a target=\"_blank\" href=\"https://www.linkedin.com/in/apoorv-kansal-987057125/\">Apoorv Kansal</a>.\n  <span class=\"float-right\">Zendesk Internship Coding Challenge\n    </span>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticket_detail_ticket_detail_component__ = __webpack_require__("../../../../../src/app/ticket-detail/ticket-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ticket_detail_comment_listings_comment_listings_component__ = __webpack_require__("../../../../../src/app/ticket-detail/comment-listings/comment-listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ticket_listings_ticket_listings_component__ = __webpack_require__("../../../../../src/app/ticket-listings/ticket-listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ticket_detail_comment_listings_comment_service__ = __webpack_require__("../../../../../src/app/ticket-detail/comment-listings/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_ticket_service__ = __webpack_require__("../../../../../src/app/shared/ticket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_error_error_service__ = __webpack_require__("../../../../../src/app/shared/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_not_found_page_not_found_page_component__ = __webpack_require__("../../../../../src/app/shared/not-found-page/not-found-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_read_more_component__ = __webpack_require__("../../../../../src/app/shared/read-more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_sidebar_directive__ = __webpack_require__("../../../../../src/app/shared/sidebar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_prettyjson__ = __webpack_require__("../../../../angular2-prettyjson/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_error_http_error_http_error_component__ = __webpack_require__("../../../../../src/app/shared/error/http-error/http-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_error_client_error_client_error_component__ = __webpack_require__("../../../../../src/app/shared/error/client-error/client-error.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular2_prettyjson__["a" /* PrettyJsonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_sidebar_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_8__ticket_listings_ticket_listings_component__["a" /* TicketListingsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ticket_detail_ticket_detail_component__["a" /* TicketDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ticket_detail_comment_listings_comment_listings_component__["a" /* CommentListingsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_read_more_component__["a" /* ReadMoreComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_error_http_error_http_error_component__["a" /* HttpErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_19__shared_error_client_error_client_error_component__["a" /* ClientErrorComponent */]
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* HashLocationStrategy */]
                },
                __WEBPACK_IMPORTED_MODULE_10__shared_ticket_service__["a" /* TicketService */],
                __WEBPACK_IMPORTED_MODULE_9__ticket_detail_comment_listings_comment_service__["a" /* CommentService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_error_error_service__["a" /* ErrorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_listings_ticket_listings_component__ = __webpack_require__("../../../../../src/app/ticket-listings/ticket-listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticket_detail_ticket_detail_component__ = __webpack_require__("../../../../../src/app/ticket-detail/ticket-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_not_found_page_not_found_page_component__ = __webpack_require__("../../../../../src/app/shared/not-found-page/not-found-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_error_http_error_http_error_component__ = __webpack_require__("../../../../../src/app/shared/error/http-error/http-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_error_client_error_client_error_component__ = __webpack_require__("../../../../../src/app/shared/error/client-error/client-error.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '', redirectTo: 'ticket-list', pathMatch: 'full'
    },
    {
        path: 'ticket-list', component: __WEBPACK_IMPORTED_MODULE_2__ticket_listings_ticket_listings_component__["a" /* TicketListingsComponent */]
    },
    {
        path: 'ticket-detail', component: __WEBPACK_IMPORTED_MODULE_3__ticket_detail_ticket_detail_component__["a" /* TicketDetailComponent */]
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_4__shared_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */],
        path: '404',
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_5__shared_error_http_error_http_error_component__["a" /* HttpErrorComponent */],
        path: 'http-error'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_6__shared_error_client_error_client_error_component__["a" /* ClientErrorComponent */],
        path: 'client-error'
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error/client-error/client-error.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\" style=\"padding-top: 20px; font-weight: 100; color: red;\">Error</h1>\n<hr>\n\n<div class=\"card\">\n  <div class=\"card-block\">\n    <b>{{errorService.message}}</b>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/error/client-error/client-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_service__ = __webpack_require__("../../../../../src/app/shared/error/error.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Used to display any client related errors locally. For instance, the component would be used if the user might
 provided an invalid ticket id.
 */
var ClientErrorComponent = (function () {
    function ClientErrorComponent(errorService, router) {
        this.errorService = errorService;
        this.router = router;
    }
    ClientErrorComponent.prototype.ngOnInit = function () {
        if (!this.errorService.message) {
            this.router.navigate(['/404']);
        }
    };
    ClientErrorComponent.prototype.ngOnDestroy = function () {
        /*
         Once the component has been displayed and about to be destroyed, we remove the error related message from
         ErrorService. Essentially, we want to show the error component only when there is an error and only show it
         once. If there is no error message, we redirect the user to not found page.
         */
        this.errorService.reset();
    };
    ClientErrorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/shared/error/client-error/client-error.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], ClientErrorComponent);
    return ClientErrorComponent;
    var _a, _b;
}());

//# sourceMappingURL=client-error.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
Used to store any error related messages so that when the error component is displayed,
the message here is used.
 */
var ErrorService = (function () {
    function ErrorService() {
    }
    Object.defineProperty(ErrorService.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    ErrorService.prototype.reset = function () {
        this._message = null;
    };
    ErrorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error/http-error/http-error.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\" style=\"padding-top: 20px; font-weight: 100; color: red;\">Error</h1>\n<hr>\n\n<div class=\"card\">\n  <div class=\"card-block\">\n    <b>Unable to communicate successfully with our servers. This could be due to malformed requests with invalid input or server issues.\n    Please try again later or contact your supervisor.</b> <br>\n    <pre *ngIf=\"wantErrorTrace\" style=\"border: 1px solid black\" [innerHTML]=\"errorService.message | json:4\"></pre>\n    <br>\n    <a (click)=\"toggleErrorTraceVisibility()\" style=\"color:#20a8d8\">{{errorTracePrompt}}</a>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/error/http-error/http-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_service__ = __webpack_require__("../../../../../src/app/shared/error/error.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
Used to display any http related errors when communicating with the REST api.
It displays a friendly message and then an error trace returned by the server.
 */
var HttpErrorComponent = (function () {
    function HttpErrorComponent(errorService, router) {
        this.errorService = errorService;
        this.router = router;
        this.wantErrorTrace = false;
        this.errorTracePrompt = 'See Error Trace';
    }
    HttpErrorComponent.prototype.ngOnInit = function () {
        if (!this.errorService.message) {
            this.router.navigate(['/404']); // No error so do not show this component at all.
        }
    };
    HttpErrorComponent.prototype.toggleErrorTraceVisibility = function () {
        this.wantErrorTrace = !this.wantErrorTrace;
        if (this.wantErrorTrace) {
            this.errorTracePrompt = 'Hide Error Trace';
        }
        else {
            this.errorTracePrompt = 'See Error Trace';
        }
    };
    HttpErrorComponent.prototype.ngOnDestroy = function () {
        /*
         Once the component has been displayed, we remove the error related message from HttpErrorService. Essentially,
         we want to show the error component only when there is an error and only show it once. If there is no error message,
         we redirect the user to not found page.
         */
        this.errorService.reset();
    };
    HttpErrorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/shared/error/http-error/http-error.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], HttpErrorComponent);
    return HttpErrorComponent;
    var _a, _b;
}());

//# sourceMappingURL=http-error.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/not-found-page/not-found-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\" style=\"padding-top: 20px; font-weight: 100\">Oops Not Found!</h1>\n<hr>\n\n<div class=\"card\">\n  <div class=\"card-block\">\n  The page you're looking for does not exist. Would you like to view your <a [routerLink]=\"['/ticket-list']\">tickets</a>?\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/not-found-page/not-found-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-not-found-page',
            template: __webpack_require__("../../../../../src/app/shared/not-found-page/not-found-page.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());

//# sourceMappingURL=not-found-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/read-more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
Used to cut down on long texts into manageable length and attaching "Read more" links.
 */
var ReadMoreComponent = (function () {
    function ReadMoreComponent(elementRef) {
        this.elementRef = elementRef;
        this.maxLength = 100;
        this.hideToggle = true;
        this.isCollapsed = true;
    }
    ReadMoreComponent.prototype.toggleView = function () {
        this.isCollapsed = !this.isCollapsed;
        this.determineView();
        this.currentText = this.currentText.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
    ReadMoreComponent.prototype.determineView = function () {
        // If text is clearly less than the max allowed, we must not show the "Read more/less" link.
        if (this.text.length <= this.maxLength) {
            this.currentText = this.text;
            this.isCollapsed = false;
            this.hideToggle = true;
            return;
        }
        this.hideToggle = false;
        // If we need to collapse the text, make sure to shorten text and attach "...".
        if (this.isCollapsed) {
            this.currentText = this.text.substring(0, this.maxLength) + '...';
        }
        else {
            this.currentText = this.text;
        }
    };
    ReadMoreComponent.prototype.ngOnInit = function () {
        this.currentText = this.currentText.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
    ReadMoreComponent.prototype.ngOnChanges = function () {
        this.determineView();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], ReadMoreComponent.prototype, "text", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", Object)
    ], ReadMoreComponent.prototype, "maxLength", void 0);
    ReadMoreComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'read-more',
            template: "\n    <div [innerHTML]=\"currentText\">\n    </div>\n    <a *ngIf=\"!hideToggle\" style=\"color:#22a8d8\" (click)=\"toggleView()\">Read {{isCollapsed? 'more':'less'}}</a>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
    ], ReadMoreComponent);
    return ReadMoreComponent;
    var _a;
}());

//# sourceMappingURL=read-more.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sidebar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export SidebarToggleDirective */
/* unused harmony export SidebarMinimizeDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SidebarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Allows the sidebar to be toggled via click.
 * @author: Łukasz Holeczek
 * This starter admin panel design has been adapted for the Zendesk Internship Coding Challenge.
 */
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
 * Allows the off-canvas sidebar to be closed via click.
 */
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];
//# sourceMappingURL=sidebar.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/ticket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
Used to communicate with REST api server which allows us to get the necessary ticket data (listing and specific ones).
 */
var TicketService = (function () {
    function TicketService(http) {
        this.http = http;
        this._tickets = [];
        this._totalTickets = 0;
        this._currentPage = 0;
    }
    Object.defineProperty(TicketService.prototype, "currentPage", {
        get: function () {
            return this._currentPage;
        },
        set: function (value) {
            this._currentPage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TicketService.prototype, "totalTickets", {
        get: function () {
            return this._totalTickets;
        },
        set: function (value) {
            this._totalTickets = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TicketService.prototype, "tickets", {
        get: function () {
            return this._tickets;
        },
        set: function (value) {
            this._tickets = value;
        },
        enumerable: true,
        configurable: true
    });
    TicketService.prototype.listTickets = function (pageNum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('http://' + window.location.hostname + ':8080/api/v1/tickets.json?page=' + pageNum.toString(), options);
    };
    TicketService.prototype.showTicket = function (ticketId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('http://' + window.location.hostname + ':8080/api/v1/tickets/' + ticketId.toString() + '.json', options);
    };
    TicketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], TicketService);
    return TicketService;
    var _a;
}());

//# sourceMappingURL=ticket.service.js.map

/***/ }),

/***/ "../../../../../src/app/ticket-detail/comment-listings/comment-listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner.hidden {\n  opacity: 0;\n}\n\n.spinner {\n  margin: 10px;\n  transition: opacity 0.5s;\n}\n\n.spinner, .spinner:after {\n  border-radius: 100%;\n}\n\n.spinner {\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  font-size: 32px;\n  border-bottom: 1px solid;\n  vertical-align: middle;\n  overflow: hidden;\n  text-indent: 100%;\n  -webkit-animation: 0.5s spinner linear infinite;\n  animation: 0.5s spinner linear infinite;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n.spinner:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border: 1px solid;\n  opacity: 0.5;\n}\n\n*:before, *:after {\n  box-sizing: inherit;\n}\n\n@-webkit-keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n#comment_paginator /deep/ .ngx-pagination {\n  padding-left: 0px;\n  padding-right: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ticket-detail/comment-listings/comment-listings.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"card-title\">Comments</h4>\n<hr>\n\n<div *ngFor=\"let comment of comments | paginate: { id: 'comment_paginator', itemsPerPage: 5, currentPage: currentPage, totalItems: totalComments}\" class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-lg-1\">\n        <span class=\"pull-left\">\n          <img class=\"media-object img-thumbnail \" src=\"{{comment.author.photo ? comment.author.photo : '/assets/img/no_img.gif'}}\">\n        </span>\n      </div>\n      <div class=\"col-lg-11\">\n          <read-more id=\"description_body\" [text]=\"comment.body ? comment.body : 'N/A'\" [maxLength]=\"500\"></read-more>\n          <br>\n          <div class=\"row\">\n            <ul *ngIf=\"comment.attachments\">\n              <li *ngFor=\"let attachment of comment.attachments\" style=\"list-style: none;\" class=\"pull-left\">\n                <a target=\"_blank\" href=\"{{attachment.content_url ? attachment.content_url : ''}}\">{{attachment.content_url ? attachment.content_url : ''}}</a>\n              </li>\n            </ul>\n          </div>\n          <small class=\"text-muted\">{{comment.author.name ? comment.author.name : 'N/A'}} ({{comment.author.role ? (comment.author.role | uppercase) : 'N/A'}})| {{comment.created_at ? (comment.created_at | date:'short') : 'N/A'}}</small>\n          <hr>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"text-center\">\n  <div class=\"spinner\" [ngClass]=\"{ 'hidden': !loading }\"></div>\n  <pagination-controls (pageChange)=\"listComments($event)\" id=\"comment_paginator\"></pagination-controls>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ticket-detail/comment-listings/comment-listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_service__ = __webpack_require__("../../../../../src/app/ticket-detail/comment-listings/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_error_error_service__ = __webpack_require__("../../../../../src/app/shared/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentListingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Used to fetch and display comments for a particular ticket.
 */
var CommentListingsComponent = (function () {
    function CommentListingsComponent(commentService, router, errorService) {
        this.commentService = commentService;
        this.router = router;
        this.errorService = errorService;
    }
    CommentListingsComponent.prototype.ngOnInit = function () {
        this.listComments(1);
    };
    CommentListingsComponent.prototype.listComments = function (pageNum) {
        var _this = this;
        if (pageNum <= 0) {
            this.errorService.message = 'Please supply a page number that is greater than 0.';
            this.router.navigate(['/client-error']);
        }
        if (this.ticketId === null || Number.isNaN(this.ticketId) || this.ticketId <= 0 || typeof this.ticketId !== 'number') {
            this.errorService.message = 'Please supply a valid ticket id (must be numerical and greater than 0).';
            this.router.navigate(['/client-error']);
        }
        this.loading = true;
        this.commentsRetrieverSub = this.commentService.listComments(pageNum, this.ticketId).subscribe(function (result) {
            var data = result.json();
            _this.comments = data['comments'];
            _this.totalComments = +data['count'];
            _this.currentPage = pageNum;
            _this.loading = false;
        }, function (error) {
            if (error.headers.get('content-type', '') === 'application/json') {
                _this.errorService.message = error.json();
            }
            else if (error.headers.get('content-type', '') === 'text/plain') {
                _this.errorService.message = error._body;
            }
            _this.router.navigate(['/http-error']);
        });
    };
    CommentListingsComponent.prototype.ngOnDestroy = function () {
        if (this.commentsRetrieverSub) {
            this.commentsRetrieverSub.unsubscribe();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", Number)
    ], CommentListingsComponent.prototype, "ticketId", void 0);
    CommentListingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-comment-listings',
            template: __webpack_require__("../../../../../src/app/ticket-detail/comment-listings/comment-listings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ticket-detail/comment-listings/comment-listings.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_error_error_service__["a" /* ErrorService */]) === "function" && _c || Object])
    ], CommentListingsComponent);
    return CommentListingsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=comment-listings.component.js.map

/***/ }),

/***/ "../../../../../src/app/ticket-detail/comment-listings/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Used to communicate with REST api server which allows us to get the necessary comment data (listing and specific ones).
 */
var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.listComments = function (pageNum, ticketId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('http://' + window.location.hostname + ':8080/api/v1/tickets/' + ticketId.toString() +
            '/comments.json?page=' + pageNum.toString(), options);
    };
    CommentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], CommentService);
    return CommentService;
    var _a;
}());

//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "../../../../../src/app/ticket-detail/ticket-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner.hidden {\n  opacity: 0;\n}\n\n.spinner {\n  margin: 10px;\n  transition: opacity 0.5s;\n}\n\n.spinner, .spinner:after {\n  border-radius: 100%;\n}\n\n.spinner {\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  font-size: 32px;\n  border-bottom: 1px solid;\n  vertical-align: middle;\n  overflow: hidden;\n  text-indent: 100%;\n  -webkit-animation: 0.5s spinner linear infinite;\n  animation: 0.5s spinner linear infinite;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n.spinner:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border: 1px solid;\n  opacity: 0.5;\n}\n\n*:before, *:after {\n  box-sizing: inherit;\n}\n\n@-webkit-keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ticket-detail/ticket-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\" style=\"padding-top: 20px; font-weight: 100\">Ticket Details</h1>\n<hr>\n\n<div *ngIf=\"loading==true\" class=\"card\">\n  <div class=\"card-block text-center\">\n    <div class=\"spinner\"></div>\n  </div>\n</div>\n\n<div *ngIf=\"loading==false\" class=\"card\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">{{ticket.subject ? ticket.subject : 'N/A'}}</h4>\n    <hr>\n\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label>ID:</label> <b> {{ticket.id ? ticket.id : 'N/A'}}</b> <br>\n        <label>Type: </label> <b> {{ticket.type ? (ticket.type | uppercase) : 'N/A'}}</b> <br>\n        <label>Status: </label> <b> {{ticket.status ? (ticket.status | uppercase) : 'N/A'}}</b> <br>\n        <label>Priority: </label> <b> {{ticket.priority ? (ticket.priority | uppercase) : 'N/A'}}</b> <br>\n        <label>Channel: </label> <b> {{ticket.channel ? (ticket.channel | uppercase) : 'N/A'}}</b> <br>\n        <label>Created at: </label> <b> {{ticket.created_at ?(ticket.created_at | date:'short') : 'N/A'}}</b> <br>\n        <br>\n        <h4 class=\"card-title\">Description</h4>\n        <read-more [text]=\"ticket.description ? ticket.description : 'N/A'\" [maxLength]=\"1050\"></read-more>\n      </div>\n\n\n      <div class=\"col-sm-6\">\n\n        <div *ngIf=\"ticket.requester\" class=\"card\">\n          <div class=\"card-block\">\n            <div class=\"row\">\n              <div class=\"col-lg-2\">\n                <img src=\"{{ticket.requester.photo ? ticket.requester.photo : '/assets/img/no_img.gif'}}\" class=\"img-thumbnail\" width=\"100\" height=\"100\">\n              </div>\n              <div class=\"col-lg-10\">\n                <h5 class=\"card-title\">&nbsp;{{ticket.requester.name ? ticket.requester.name : 'N/A'}}</h5>\n                <label>Ticket relationship: </label> <b>REQUESTER</b> <br>\n                <label>Email: </label><b> {{ticket.requester.email ? ticket.requester.email : 'N/A'}}</b> <br>\n                <label>Phone: </label><b> {{ticket.requester.phone ? ticket.requester.phone : 'N/A'}}</b> <br>\n                <label>Role: </label><b> {{ticket.requester.role ? (ticket.requester.role | uppercase) : 'N/A'}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"ticket.submitter\" class=\"card\">\n          <div class=\"card-block\">\n            <div class=\"row\">\n              <div class=\"col-lg-2\">\n                <img src=\"{{ticket.submitter.photo ? ticket.submitter.photo : '/assets/img/no_img.gif'}}\" class=\"img-thumbnail\" width=\"100\" height=\"100\">\n              </div>\n              <div class=\"col-lg-10\">\n                <h5 class=\"card-title\">&nbsp;{{ticket.submitter.name ? ticket.submitter.name : 'N/A'}}</h5>\n                <label>Ticket relationship: </label> <b>SUBMITTER</b> <br>\n                <label>Email: </label><b> {{ticket.submitter.email ? ticket.submitter.email : 'N/A'}}</b> <br>\n                <label>Phone: </label><b> {{ticket.submitter.phone ? ticket.submitter.phone : 'N/A'}}</b> <br>\n                <label>Role: </label><b> {{ticket.submitter.role ? (ticket.submitter.role | uppercase) : 'N/A'}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"ticket.assignee\" class=\"card\">\n          <div class=\"card-block\">\n            <div class=\"row\">\n              <div class=\"col-lg-2\">\n                <img src=\"{{ticket.assignee.photo? ticket.assignee.photo : '/assets/img/no_img.gif'}}\" class=\"img-thumbnail\" width=\"100\" height=\"100\">\n              </div>\n              <div class=\"col-lg-10\">\n                <h5 class=\"card-title\">&nbsp;{{ticket.assignee.name ? ticket.assignee.name : 'N/A'}}</h5>\n                <label>Ticket relationship: </label> <b>ASSIGNEE</b> <br>\n                <label>Email: </label><b> {{ticket.assignee.email ? ticket.assignee.email : 'N/A'}}</b> <br>\n                <label>Phone: </label><b> {{ticket.assignee.phone ? ticket.assignee.phone : 'N/A'}}</b> <br>\n                <label>Role: </label><b> {{ticket.assignee.role ? (ticket.assignee.role | uppercase) : 'N/A'}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <app-comment-listings [ticketId]=\"ticket.id\"></app-comment-listings>\n    <br>\n    <a [routerLink]=\"['/ticket-list']\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ticket-detail/ticket-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ticket_service__ = __webpack_require__("../../../../../src/app/shared/ticket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_error_error_service__ = __webpack_require__("../../../../../src/app/shared/error/error.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
Used to locate the specified ticket and then display its details.
 */
var TicketDetailComponent = (function () {
    function TicketDetailComponent(ticketService, activatedRoute, router, errorService) {
        this.ticketService = ticketService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.errorService = errorService;
    }
    TicketDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var ticketId = 0;
        this.activatedRoute.queryParams.subscribe(function (params) {
            ticketId = params['id'] ? Number(params['id']) : null;
        });
        if (ticketId === null || Number.isNaN(ticketId) || ticketId <= 0 || typeof ticketId !== 'number') {
            this.errorService.message = 'Please supply a valid ticket id (must be numerical and greater than 0).';
            this.router.navigate(['/client-error']);
        }
        // Look for the ticket locally from the current page of tickets.
        var localTicketFound = false;
        if (this.ticketService.tickets) {
            for (var _i = 0, _a = this.ticketService.tickets; _i < _a.length; _i++) {
                var ticket = _a[_i];
                if (+ticket['id'] == ticketId) {
                    this.ticket = ticket;
                    localTicketFound = true;
                    this.loading = false;
                }
            }
        }
        // Fallback and make request for the specific ticket.
        if (!localTicketFound || !this.ticketService.tickets) {
            this.ticketRetrieverSub = this.ticketService.showTicket(ticketId).subscribe(function (result) {
                _this.ticket = result.json();
                _this.loading = false;
            }, function (error) {
                if (error.headers.get('content-type', '') === 'application/json') {
                    _this.errorService.message = error.json();
                }
                else if (error.headers.get('content-type', '') === 'text/plain') {
                    _this.errorService.message = error._body;
                }
                _this.router.navigate(['/http-error']);
            });
        }
    };
    TicketDetailComponent.prototype.ngOnDestroy = function () {
        if (this.ticketRetrieverSub) {
            this.ticketRetrieverSub.unsubscribe();
        }
    };
    TicketDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-ticket-detail',
            template: __webpack_require__("../../../../../src/app/ticket-detail/ticket-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ticket-detail/ticket-detail.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_ticket_service__["a" /* TicketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_error_error_service__["a" /* ErrorService */]) === "function" && _d || Object])
    ], TicketDetailComponent);
    return TicketDetailComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=ticket-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/ticket-listings/ticket-listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner.hidden {\n  opacity: 0;\n}\n\n.spinner {\n  margin: 10px;\n  transition: opacity 0.5s;\n}\n\n.spinner, .spinner:after {\n  border-radius: 100%;\n}\n\n.spinner {\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  font-size: 32px;\n  border-bottom: 1px solid;\n  vertical-align: middle;\n  overflow: hidden;\n  text-indent: 100%;\n  -webkit-animation: 0.5s spinner linear infinite;\n  animation: 0.5s spinner linear infinite;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n.spinner:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border: 1px solid;\n  opacity: 0.5;\n}\n\n*:before, *:after {\n  box-sizing: inherit;\n}\n\n@-webkit-keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n#ticket_paginator /deep/ .ngx-pagination {\n  padding-left: 0px;\n  padding-right: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ticket-listings/ticket-listings.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\" style=\"padding-top: 20px; font-weight: 100\">Customer Support Tickets</h1>\n<hr>\n\n<div class=\"card\">\n  <div class=\"card-block\">\n    <table id=\"tickets_table\" class=\"table-responsive table-striped table-outline table-bordered\" cellspacing=\"0\" width=\"100%\">\n\n      <thead>\n      <tr>\n        <th>ID</th>\n        <th>Status</th>\n        <th>Subject</th>\n        <th>Requester Name</th>\n        <th>Assignee Name</th>\n        <th>Created At</th>\n        <th>Manage</th>\n      </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let ticket of ticketsService.tickets | paginate: { id: 'ticket_paginator', itemsPerPage: 25, currentPage: ticketsService.currentPage, totalItems: ticketsService.totalTickets }\">\n            <td>\n              {{ticket.id ? ticket.id: 'N/A'}}\n            </td>\n            <td>{{ticket.status ? ticket.status : 'N/A'}}</td>\n            <td>{{ticket.subject ? ticket.subject : 'N/A'}}</td>\n            <td>{{ticket.requester.name ? ticket.requester.name : 'N/A'}}</td>\n            <td>{{ticket.assignee.name ? ticket.assignee.name : 'N/A'}}</td>\n            <td>{{ticket.created_at ? (ticket.created_at| date: 'short') : 'N/A'}}</td>\n            <td><a [routerLink]=\"['/ticket-detail']\" [queryParams]=\"{id: ticket.id}\">View Details</a></td>\n        </tr>\n      </tbody>\n\n      <tfoot>\n        <th>ID</th>\n        <th>Status</th>\n        <th>Subject</th>\n        <th>Requester Name</th>\n        <th>Assignee Name</th>\n        <th>Created At</th>\n        <th>Manage</th>\n      </tfoot>\n\n    </table>\n\n    <div class=\"text-center\">\n      <div class=\"spinner\" [ngClass]=\"{ 'hidden': !loading }\"></div>\n      <pagination-controls (pageChange)=\"listTickets($event)\" id=\"ticket_paginator\"></pagination-controls>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/ticket-listings/ticket-listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ticket_service__ = __webpack_require__("../../../../../src/app/shared/ticket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_error_error_service__ = __webpack_require__("../../../../../src/app/shared/error/error.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketListingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Used to fetch and display tickets and their details.
 */
var TicketListingsComponent = (function () {
    function TicketListingsComponent(ticketsService, router, errorService) {
        this.ticketsService = ticketsService;
        this.router = router;
        this.errorService = errorService;
    }
    TicketListingsComponent.prototype.ngOnInit = function () {
        if (this.ticketsService.currentPage === 0) {
            this.listTickets(1);
        }
    };
    TicketListingsComponent.prototype.listTickets = function (pageNum) {
        var _this = this;
        if (pageNum <= 0) {
            this.errorService.message = 'Please supply a page number that is greater than 0.';
            this.router.navigate(['/client-error']);
        }
        this.loading = true;
        this.ticketsRetrieverSub = this.ticketsService.listTickets(pageNum).subscribe(function (result) {
            var data = result.json();
            _this.ticketsService.tickets = data['tickets'];
            _this.ticketsService.totalTickets = data['count'];
            _this.ticketsService.currentPage = pageNum;
            _this.loading = false;
        }, function (error) {
            if (error.headers.get('content-type', '') === 'application/json') {
                _this.errorService.message = error.json();
            }
            else if (error.headers.get('content-type', '') === 'text/plain') {
                _this.errorService.message = error._body.replace(/\n/g, '<br />').replace(/\t/g, '&nbsp;&nbsp;&nbsp;');
            }
            _this.router.navigate(['/http-error']);
        });
    };
    TicketListingsComponent.prototype.ngOnDestroy = function () {
        if (this.ticketsRetrieverSub) {
            this.ticketsRetrieverSub.unsubscribe();
        }
    };
    TicketListingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-ticket-listings',
            template: __webpack_require__("../../../../../src/app/ticket-listings/ticket-listings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ticket-listings/ticket-listings.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_ticket_service__["a" /* TicketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_error_error_service__["a" /* ErrorService */]) === "function" && _c || Object])
    ], TicketListingsComponent);
    return TicketListingsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=ticket-listings.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map