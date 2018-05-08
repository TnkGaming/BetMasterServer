webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_KeyValuePair__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.currentDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()();
        this.values = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 5];
        this.colors = ["veryLow", "low", "medium", "high", "veryHigh", "veryHigh", "veryHigh"];
        this.changeDate(0);
        this.filter = "";
    }
    HomePage.prototype.changeDate = function (op) {
        var _this = this;
        this.currentDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()(this.currentDate.add(op, 'days'));
        var parsedDate = this.parseDate(this.currentDate);
        this.dataProvider.getMatchesByDate(parsedDate).subscribe(function (data) { return _this.matches = data.sort(function (a, b) {
            if (a.Home < b.Home)
                return -1;
            else if (a.Home > b.Home)
                return 1;
            else
                return 0;
        }); });
    };
    HomePage.prototype.parseDate = function (date) {
        return date.year() + "-" + (date.month() + 1) + "-" + date.date();
    };
    HomePage.prototype.isMaxed = function (isNext) {
        var today = __WEBPACK_IMPORTED_MODULE_4_moment___default()();
        if (isNext) {
            return today.diff(this.currentDate, 'days') <= -1;
        }
        else {
            return today.diff(this.currentDate, 'days') >= 2;
        }
    };
    HomePage.prototype.getTopThree = function (match) {
        var parsedMatch = this.parseMatch(match);
        var property = ["", "", ""];
        var odd = [0, 0, 0];
        parsedMatch.forEach(function (m) {
            if (!isNaN(m.Value)) {
                if (odd[0] <= m.Value) {
                    odd[2] = odd[1];
                    odd[1] = odd[0];
                    odd[0] = m.Value;
                    property[2] = property[1];
                    property[1] = property[0];
                    property[0] = m.Key;
                }
                else if (odd[1] <= m.Value) {
                    odd[2] = odd[1];
                    odd[1] = m.Value;
                    property[2] = property[1];
                    property[1] = m.Key;
                }
                else if (odd[2] <= m.Value) {
                    odd[2] = m.Value;
                    property[2] = m.Key;
                }
            }
        });
        return [new __WEBPACK_IMPORTED_MODULE_0__models_KeyValuePair__["a" /* KeyValuePair */](property[0], odd[0]), new __WEBPACK_IMPORTED_MODULE_0__models_KeyValuePair__["a" /* KeyValuePair */](property[1], odd[1]), new __WEBPACK_IMPORTED_MODULE_0__models_KeyValuePair__["a" /* KeyValuePair */](property[2], odd[2]),];
    };
    HomePage.prototype.parseMatch = function (match) {
        var FT = new __WEBPACK_IMPORTED_MODULE_0__models_KeyValuePair__["a" /* KeyValuePair */]("", 0);
        if (match.H >= match.X && match.H >= match.A) {
            FT.Key += "1";
            FT.Value += match.H;
            if (match.X >= match.A && match.X >= 0.34) {
                FT.Key += "~X";
                FT.Value += match.X;
            }
            else if (match.A >= 0.34) {
                FT.Key += "~2";
                FT.Value += match.A;
            }
        }
        else if (match.A >= match.H && match.A >= match.X) {
            FT.Key += "2";
            FT.Value += match.A;
            if (match.X >= match.H && match.X >= 0.34) {
                FT.Key += "~X";
                FT.Value += match.X;
            }
            else if (match.H >= 0.34) {
                FT.Key += "~1";
                FT.Value += match.H;
            }
        }
        else if (match.X >= match.H && match.X >= match.A) {
            FT.Key += "X";
            FT.Value += match.X;
            if (match.H >= match.A && match.H >= 0.34) {
                FT.Key += "~1";
                FT.Value += match.H;
            }
            else if (match.A >= 0.34) {
                FT.Key += "~2";
                FT.Value += match.A;
            }
        }
        var GG = new __WEBPACK_IMPORTED_MODULE_0__models_KeyValuePair__["a" /* KeyValuePair */]("", 0);
        if (match.GG >= 0.5) {
            GG.Key = "GG";
            GG.Value = match.GG;
        }
        else {
            GG.Key = "NG";
            GG.Value = 1 - match.GG;
        }
        var O15 = new __WEBPACK_IMPORTED_MODULE_0__models_KeyValuePair__["a" /* KeyValuePair */]("", 0);
        if (match.O15 >= 0.5) {
            O15.Key = "O15";
            O15.Value = match.O15;
        }
        else {
            O15.Key = "U15";
            O15.Value = 1 - match.O15;
        }
        var O25 = new __WEBPACK_IMPORTED_MODULE_0__models_KeyValuePair__["a" /* KeyValuePair */]("", 0);
        if (match.O25 >= 0.5) {
            O25.Key = "O25";
            O25.Value = match.O25;
        }
        else {
            O25.Key = "U25";
            O25.Value = 1 - match.O25;
        }
        var O35 = new __WEBPACK_IMPORTED_MODULE_0__models_KeyValuePair__["a" /* KeyValuePair */]("", 0);
        if (match.O35 >= 0.5) {
            O35.Key = "O35";
            O35.Value = match.O35;
        }
        else {
            O35.Key = "U35";
            O35.Value = 1 - match.O35;
        }
        return [FT, GG, O15, O25, O35];
    };
    HomePage.prototype.getColor = function (value) {
        for (var i = 0; i < this.values.length; i++) {
            if (this.values[i] >= value)
                return this.colors[i];
        }
        return "black";
    };
    HomePage.prototype.hasFinished = function (score) {
        return (score && score.length > 0);
    };
    HomePage.prototype.getResultColor = function (score, prediction) {
        switch (prediction) {
            case "1": return score[0] > score[1] ? "veryHigh" : "wrong";
            case "1~X":
            case "X~1":
                return score[0] >= score[1] ? "veryHigh" : "wrong";
            case "X": return score[0] == score[1] ? "veryHigh" : "wrong";
            case "2~X":
            case "X~2":
                return score[0] <= score[1] ? "veryHigh" : "wrong";
            case "2": return score[0] < score[1] ? "veryHigh" : "wrong";
            case "1~2":
            case "2~1":
                return score[0] > score[1] || score[0] < score[1] ? "veryHigh" : "wrong";
            case "O15": return score[0] + score[1] > 1.5 ? "veryHigh" : "wrong";
            case "U15": return score[0] + score[1] < 1.5 ? "veryHigh" : "wrong";
            case "O25": return score[0] + score[1] > 2.5 ? "veryHigh" : "wrong";
            case "U25": return score[0] + score[1] < 2.5 ? "veryHigh" : "wrong";
            case "O35": return score[0] + score[1] > 3.5 ? "veryHigh" : "wrong";
            case "U35": return score[0] + score[1] < 3.5 ? "veryHigh" : "wrong";
            case "GG": return score[0] > 0 && score[1] > 0 ? "veryHigh" : "wrong";
            case "NG": return score[0] == 0 || score[1] == 0 ? "veryHigh" : "wrong";
            default: return "";
        }
    };
    HomePage.prototype.fixedValue = function (value) {
        value = Math.floor(value * 100);
        return value < 100 ? value : 90;
    };
    HomePage.prototype.filterMatches = function () {
        var filteredResults = [];
        var filter = this.filter.toLowerCase();
        this.matches.forEach(function (match) {
            if (match.Home.toLowerCase().includes(filter) || match.Away.toLowerCase().includes(filter))
                filteredResults.push(match);
        });
        return filteredResults;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Tsinik\Desktop\workspace\GitHub\BetMaster\BetMaster\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="menu">\n    <ion-title>\n        <ion-label class = "dateMenu" text-center>\n          <button color="energized" ion-button clear icon-only (click)="changeDate(-1)" [disabled]="isMaxed(false)">\n           <ion-icon name="md-arrow-dropleft"></ion-icon>\n          </button>\n          <button color="energized" class= "date" ion-button clear> {{currentDate | amDateFormat:\'dddd, DD/MM/YY\'}} </button>\n          <button color="energized" ion-button clear icon-only (click)="changeDate(1)" [disabled]="isMaxed(true)">\n            <ion-icon xlarge name="md-arrow-dropright"></ion-icon>\n          </button>\n        </ion-label>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="master" padding>\n  <ion-input style="background-color:white" [(ngModel)]="filter">{{filter}}</ion-input>\n  <ion-list *ngIf = "matches">\n    <ion-item-sliding class="master" *ngFor = "let match of filterMatches()">\n      <ion-item class="master" >\n        <ion-label class="master">\n          {{match.Home}} VS {{match.Away}}\n          <span *ngIf="match.Score">\n          {{match.Score[0]+"-"+match.Score[1]}}\n        </span>\n          <ion-item no-lines text-center class="master">\n            <ion-label [ngClass]="[hasFinished(match.Score)?getResultColor(match.Score,top.Key):getColor(top.Value)]" *ngFor = "let top of getTopThree(match)" style="color:black; border-style: solid">\n            {{top.Key}} ({{fixedValue(top.Value)}}%)\n            </ion-label>\n          </ion-item>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side="right">\n          <ion-label class="sideOdds" [ngClass]="[hasFinished(match.Score)?getResultColor(match.Score,odd.Key):getColor(odd.Value)]" text-wrap text-center *ngFor = "let odd of parseMatch(match)" style="color:black; border-style: solid">\n              {{odd.Key}} ({{fixedValue(odd.Value)}}%)\n              </ion-label>\n      </ion-item-options>\n      <ion-item-options side="left">\n          <ion-label class="master sideOdds" text-wrap text-center>\n              <div>{{match.League}}</div>\n              {{match.Home}} VS {{match.Away}}\n              <span *ngIf="match.Score">\n                {{match.Score[0]+"-"+match.Score[1]}}\n              </span>\n            </ion-label>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Tsinik\Desktop\workspace\GitHub\BetMaster\BetMaster\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
    }
    DataProvider.prototype.getMatchesByDate = function (date) {
        return this.http.get('http://localhost:8080/' + date).map(function (response) {
            console.log(response);
            return response;
        });
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], DataProvider);
    return DataProvider;
    var _a;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_data__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_9__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 199,
	"./af.js": 199,
	"./ar": 200,
	"./ar-dz": 201,
	"./ar-dz.js": 201,
	"./ar-kw": 202,
	"./ar-kw.js": 202,
	"./ar-ly": 203,
	"./ar-ly.js": 203,
	"./ar-ma": 204,
	"./ar-ma.js": 204,
	"./ar-sa": 205,
	"./ar-sa.js": 205,
	"./ar-tn": 206,
	"./ar-tn.js": 206,
	"./ar.js": 200,
	"./az": 207,
	"./az.js": 207,
	"./be": 208,
	"./be.js": 208,
	"./bg": 209,
	"./bg.js": 209,
	"./bm": 210,
	"./bm.js": 210,
	"./bn": 211,
	"./bn.js": 211,
	"./bo": 212,
	"./bo.js": 212,
	"./br": 213,
	"./br.js": 213,
	"./bs": 214,
	"./bs.js": 214,
	"./ca": 215,
	"./ca.js": 215,
	"./cs": 216,
	"./cs.js": 216,
	"./cv": 217,
	"./cv.js": 217,
	"./cy": 218,
	"./cy.js": 218,
	"./da": 219,
	"./da.js": 219,
	"./de": 220,
	"./de-at": 221,
	"./de-at.js": 221,
	"./de-ch": 222,
	"./de-ch.js": 222,
	"./de.js": 220,
	"./dv": 223,
	"./dv.js": 223,
	"./el": 224,
	"./el.js": 224,
	"./en-au": 225,
	"./en-au.js": 225,
	"./en-ca": 226,
	"./en-ca.js": 226,
	"./en-gb": 227,
	"./en-gb.js": 227,
	"./en-ie": 228,
	"./en-ie.js": 228,
	"./en-il": 229,
	"./en-il.js": 229,
	"./en-nz": 230,
	"./en-nz.js": 230,
	"./eo": 231,
	"./eo.js": 231,
	"./es": 232,
	"./es-do": 233,
	"./es-do.js": 233,
	"./es-us": 234,
	"./es-us.js": 234,
	"./es.js": 232,
	"./et": 235,
	"./et.js": 235,
	"./eu": 236,
	"./eu.js": 236,
	"./fa": 237,
	"./fa.js": 237,
	"./fi": 238,
	"./fi.js": 238,
	"./fo": 239,
	"./fo.js": 239,
	"./fr": 240,
	"./fr-ca": 241,
	"./fr-ca.js": 241,
	"./fr-ch": 242,
	"./fr-ch.js": 242,
	"./fr.js": 240,
	"./fy": 243,
	"./fy.js": 243,
	"./gd": 244,
	"./gd.js": 244,
	"./gl": 245,
	"./gl.js": 245,
	"./gom-latn": 246,
	"./gom-latn.js": 246,
	"./gu": 247,
	"./gu.js": 247,
	"./he": 248,
	"./he.js": 248,
	"./hi": 249,
	"./hi.js": 249,
	"./hr": 250,
	"./hr.js": 250,
	"./hu": 251,
	"./hu.js": 251,
	"./hy-am": 252,
	"./hy-am.js": 252,
	"./id": 253,
	"./id.js": 253,
	"./is": 254,
	"./is.js": 254,
	"./it": 255,
	"./it.js": 255,
	"./ja": 256,
	"./ja.js": 256,
	"./jv": 257,
	"./jv.js": 257,
	"./ka": 258,
	"./ka.js": 258,
	"./kk": 259,
	"./kk.js": 259,
	"./km": 260,
	"./km.js": 260,
	"./kn": 261,
	"./kn.js": 261,
	"./ko": 262,
	"./ko.js": 262,
	"./ky": 263,
	"./ky.js": 263,
	"./lb": 264,
	"./lb.js": 264,
	"./lo": 265,
	"./lo.js": 265,
	"./lt": 266,
	"./lt.js": 266,
	"./lv": 267,
	"./lv.js": 267,
	"./me": 268,
	"./me.js": 268,
	"./mi": 269,
	"./mi.js": 269,
	"./mk": 270,
	"./mk.js": 270,
	"./ml": 271,
	"./ml.js": 271,
	"./mn": 272,
	"./mn.js": 272,
	"./mr": 273,
	"./mr.js": 273,
	"./ms": 274,
	"./ms-my": 275,
	"./ms-my.js": 275,
	"./ms.js": 274,
	"./mt": 276,
	"./mt.js": 276,
	"./my": 277,
	"./my.js": 277,
	"./nb": 278,
	"./nb.js": 278,
	"./ne": 279,
	"./ne.js": 279,
	"./nl": 280,
	"./nl-be": 281,
	"./nl-be.js": 281,
	"./nl.js": 280,
	"./nn": 282,
	"./nn.js": 282,
	"./pa-in": 283,
	"./pa-in.js": 283,
	"./pl": 284,
	"./pl.js": 284,
	"./pt": 285,
	"./pt-br": 286,
	"./pt-br.js": 286,
	"./pt.js": 285,
	"./ro": 287,
	"./ro.js": 287,
	"./ru": 288,
	"./ru.js": 288,
	"./sd": 289,
	"./sd.js": 289,
	"./se": 290,
	"./se.js": 290,
	"./si": 291,
	"./si.js": 291,
	"./sk": 292,
	"./sk.js": 292,
	"./sl": 293,
	"./sl.js": 293,
	"./sq": 294,
	"./sq.js": 294,
	"./sr": 295,
	"./sr-cyrl": 296,
	"./sr-cyrl.js": 296,
	"./sr.js": 295,
	"./ss": 297,
	"./ss.js": 297,
	"./sv": 298,
	"./sv.js": 298,
	"./sw": 299,
	"./sw.js": 299,
	"./ta": 300,
	"./ta.js": 300,
	"./te": 301,
	"./te.js": 301,
	"./tet": 302,
	"./tet.js": 302,
	"./tg": 303,
	"./tg.js": 303,
	"./th": 304,
	"./th.js": 304,
	"./tl-ph": 305,
	"./tl-ph.js": 305,
	"./tlh": 306,
	"./tlh.js": 306,
	"./tr": 307,
	"./tr.js": 307,
	"./tzl": 308,
	"./tzl.js": 308,
	"./tzm": 309,
	"./tzm-latn": 310,
	"./tzm-latn.js": 310,
	"./tzm.js": 309,
	"./ug-cn": 311,
	"./ug-cn.js": 311,
	"./uk": 312,
	"./uk.js": 312,
	"./ur": 313,
	"./ur.js": 313,
	"./uz": 314,
	"./uz-latn": 315,
	"./uz-latn.js": 315,
	"./uz.js": 314,
	"./vi": 316,
	"./vi.js": 316,
	"./x-pseudo": 317,
	"./x-pseudo.js": 317,
	"./yo": 318,
	"./yo.js": 318,
	"./zh-cn": 319,
	"./zh-cn.js": 319,
	"./zh-hk": 320,
	"./zh-hk.js": 320,
	"./zh-tw": 321,
	"./zh-tw.js": 321
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 414;

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Tsinik\Desktop\workspace\GitHub\BetMaster\BetMaster\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Tsinik\Desktop\workspace\GitHub\BetMaster\BetMaster\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyValuePair; });
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(Key, Value) {
        this.Key = Key;
        this.Value = Value;
    }
    return KeyValuePair;
}());

//# sourceMappingURL=KeyValuePair.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map