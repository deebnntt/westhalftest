function formValidate(){

}

function formSubmit(){

    document.getElementById('form1').classList.add("formHide");

    var para = document.createElement("h2");
    var node = document.createTextNode("Thank you for your interest in West Half. We will contact you with additional information as soon as it is available.");
    var node2 = document.createTextNode("We look forward to meeting you.");

    para.innerHTML ="Thank you for your interest in West Half. We will contact you with additional information as soon as it is available. <br />" + "We look forward to meeting you.";

    para.classList.add("thankTxt");

    var element = document.getElementById("contactFormSec");
    element.appendChild(para);

    setTimeout(function(){
     document.getElementById('form1').submit();
 }, 1500);

}


webpackJsonp([1,5],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppService = (function () {
    function AppService() {
        this._images = {
            samplesImages: {
                retina: ['./assets/img/sample-1.jpg', './assets/img/sample-2.jpg', './assets/img/sample-3.jpg', './assets/img/sample-4.jpg'],
                desktop: ['./assets/img/sample-1-1280.jpg', './assets/img/sample-2-1280.jpg', './assets/img/sample-3-1280.jpg', './assets/img/sample-4-1280.jpg'],
                tablet: ['./assets/img/sample-1-tablet.jpg', './assets/img/sample-2-tablet.jpg', './assets/img/sample-3-tablet.jpg', './assets/img/sample-4-tablet.jpg'],
                mobile: ['./assets/img/sample-1-mobile.jpg', './assets/img/sample-2-mobile.jpg', './assets/img/sample-3-mobile.jpg', './assets/img/sample-4-mobile.jpg']
            },
            optionsImages: {
                retina: ['./assets/img/sl-option-1.jpg', './assets/img/sl-option-2.jpg', './assets/img/sl-option-3.jpg', './assets/img/sl-option-4.jpg', './assets/img/sl-option-5.jpg'],
                desktop: ['./assets/img/sl-option-1-1280.jpg', './assets/img/sl-option-2-1280.jpg', './assets/img/sl-option-3-1280.jpg', './assets/img/sl-option-4-1280.jpg', './assets/img/sl-option-5-1280.jpg'],
                tablet: ['./assets/img/sl-option-1-tablet.jpg', './assets/img/sl-option-2-tablet.jpg', './assets/img/sl-option-3-tablet.jpg', './assets/img/sl-option-4-tablet.jpg', './assets/img/sl-option-5-tablet.jpg'],
                mobile: ['./assets/img/sl-option-1-mobile.jpg', './assets/img/sl-option-2-mobile.jpg', './assets/img/sl-option-3-mobile.jpg', './assets/img/sl-option-4-mobile.jpg', './assets/img/sl-option-5-mobile.jpg']
            },
            streetsImages: {
                retina: ['./assets/img/street.jpg'],
                desktop: ['./assets/img/street-1280.jpg'],
                tablet: ['./assets/img/street-tablet.jpg'],
                mobile: ['./assets/img/street-mobile.jpg']
            },
            sportsImages: {
                retina: ['./assets/img/sport.jpg'],
                desktop: ['./assets/img/sport-1280.jpg'],
                tablet: ['./assets/img/sport-tablet.jpg'],
                mobile: ['./assets/img/sport-mobile.jpg']
            },
            prevOptionsImages: {
                retina: ['./assets/img/option-1.jpg', './assets/img/option-2.jpg', './assets/img/option-3.jpg', './assets/img/option-4.jpg', './assets/img/option-5.jpg'],
                desktop: ['./assets/img/option-1-1280.jpg', './assets/img/option-2-1280.jpg', './assets/img/option-3-1280.jpg', './assets/img/option-4-1280.jpg', './assets/img/option-5-1280.jpg'],
                tablet: ['./assets/img/option-1-tablet.jpg', './assets/img/option-2-tablet.jpg', './assets/img/option-3-tablet.jpg', './assets/img/option-4-tablet.jpg', './assets/img/option-5-tablet.jpg']
            }
        };
        this.detectDevice();
    }
    AppService.prototype.detectDevice = function () {
        if (window.innerWidth > 1600) {
            this._type = 'retina';
        }
        else if (window.innerWidth > 1025) {
            if (window.devicePixelRatio > 1) {
                this._type = 'retina';
            }
            else {
                this._type = 'desktop';
            }
        }
        else if (window.innerWidth > 740) {
            this._type = 'tablet';
        }
        else {
            this._type = 'mobile';
        }
    };
    AppService.prototype.getImage = function (page) {
        return this._images[page][this._type] || this._images[page]['desktop'];
    };
    AppService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_slider_desktop_homeSlideController__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_slider_desktop_buildingSlideController__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_slider_desktop_neighborhoodSlideController__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_slider_desktop_contactSlideController__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_slider_mobile_homeMobileSlideController__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_slider_mobile_buildingMobileSlideController__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_slider_mobile_neighborhoodMobileSlideController__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_slider_mobile_contactMobileSlideController__ = __webpack_require__(574);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreetingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var GreetingService = (function () {
    function GreetingService(_ngZone, _router) {
        this._ngZone = _ngZone;
        this._router = _router;
        this.isButtonsDisabled = true;
        this.isOpenMenu = false;
        this.isArrowVisible = false;
        this.isCanChangeState = false;
        this.isFooterVisible = false;
        this._slideConfigs = [
            {
                prevState: { name: 'contact', text: 'Contact' },
                nextState: { name: 'building', text: 'Building' },
                state: { name: '', text: 'Home' },
                controllerFactory: {
                    desktop: new __WEBPACK_IMPORTED_MODULE_4__shared_slider_desktop_homeSlideController__["a" /* HomeSlideControllerFactory */](),
                    mobile: new __WEBPACK_IMPORTED_MODULE_8__shared_slider_mobile_homeMobileSlideController__["a" /* HomeMobileSlideControllerFactory */]()
                },
                title: [{ text: 'west', name: '_half' }, { text: 'half', name: '_half-ruble' }, { text: 'a shift', name: '_quarter' }, { text: 'in urban', name: '_three-quarter' }, { text: 'living', name: '_zero' }],
                subtitle: [{ text: 'APARTMENTS LEASING SUMMER 2019', name: '_apartments' }]
            },
            {
                prevState: { name: '', text: 'Home' },
                nextState: { name: 'neighborhood', text: 'Neighborhood' },
                state: { name: 'building', text: 'Building' },
                title: [{ text: 'a shift', name: '_zero' }, { text: 'in', name: '_half-ruble' }, { text: 'balance.', name: '_half' }],
                comment: [{ text: 'building', name: '_shift-end' }],
                controllerFactory: {
                    desktop: new __WEBPACK_IMPORTED_MODULE_5__shared_slider_desktop_buildingSlideController__["a" /* BuildingSlideControllerFactory */](),
                    mobile: new __WEBPACK_IMPORTED_MODULE_9__shared_slider_mobile_buildingMobileSlideController__["a" /* BuildingMobileSlideControllerFactory */]()
                }
            },
            {
                prevState: { name: 'building', text: 'Building' },
                nextState: { name: 'contact', text: 'Contact' },
                state: { name: 'neighborhood', text: 'Neighborhood' },
                title: [{ text: 'a shift', name: '_zero' }, { text: 'in', name: '_half-ruble' }, { text: 'culture.', name: '_half' }],
                comment: [{ text: 'neighborhood', name: '_shift-end' }],
                controllerFactory: {
                    desktop: new __WEBPACK_IMPORTED_MODULE_6__shared_slider_desktop_neighborhoodSlideController__["a" /* NeighborhoodSlideControllerFactory */](),
                    mobile: new __WEBPACK_IMPORTED_MODULE_10__shared_slider_mobile_neighborhoodMobileSlideController__["a" /* NeighborhoodMobileSlideControllerFactory */]()
                }
            },
            {
                prevState: { name: 'neighborhood', text: 'Neighborhood' },
                nextState: { name: '', text: 'Home' },
                state: { name: 'contact', text: 'Contact' },
                title: [{ text: 'a shift', name: '_zero' }, { text: 'in', name: '_half-ruble' }, { text: 'reality.', name: '_half' }],
                comment: [{ text: 'contact', name: '_shift-end' }],
                controllerFactory: {
                    desktop: new __WEBPACK_IMPORTED_MODULE_7__shared_slider_desktop_contactSlideController__["a" /* ContactSlideControllerFactory */](),
                    mobile: new __WEBPACK_IMPORTED_MODULE_11__shared_slider_mobile_contactMobileSlideController__["a" /* ContactMobileSlideControllerFactory */]()
                }
            }
        ];
        this._slides = [];
    }
    GreetingService.prototype.initSlider = function (canvas, config, type) {
        var _this = this;
        var self = this;
        $(config.components.images).find('.item').each(function () {
            var $that = $(this);
            var imgSrc = $that.find('img').attr('src');
            var index = $that.index();
            self._slideConfigs[index].image = imgSrc;
        });
        this._slideConfigs.forEach(function (slideConfig) {
            _this._slides.push(new __WEBPACK_IMPORTED_MODULE_1__slide__["a" /* Slide */](canvas, Object.assign({}, slideConfig, config), type));
        });
        var firstStateListener = this._router.events
            .filter(function (route) { return route instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (route) {
            var stateName = route.url.slice(1);
            _this._current = _this.findSlide(stateName);
            _this._showState();
            firstStateListener.unsubscribe();
        });
    };
    Object.defineProperty(GreetingService.prototype, "current", {
        get: function () {
            return this._current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GreetingService.prototype, "next", {
        get: function () {
            var stateName = this.current.nextState.name;
            return this.findSlide(stateName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GreetingService.prototype, "prev", {
        get: function () {
            var stateName = this.current.prevState.name;
            return this.findSlide(stateName);
        },
        enumerable: true,
        configurable: true
    });
    GreetingService.prototype._showState = function (callback) {
        var perform = performance.now();
        this._current.show({
            onEnd: function () {
                console.debug("GreetingService: _showState: " + (performance.now() - perform));
                callback && callback();
            }
        });
    };
    GreetingService.prototype._hideState = function (state, hideCallback, showCallback) {
        var _this = this;
        var perform = performance.now();
        this.current.hide({
            onEnd: function () {
                console.debug("GreetingService: _hideState: " + (performance.now() - perform));
                _this._current = state;
                _this._router.navigate([state.state.name]);
                hideCallback();
                _this._showState(showCallback);
            }
        });
    };
    GreetingService.prototype.toNext = function (hideCallback, showCallback) {
        var stateName = this.current.nextState.name;
        this.changeTo(stateName, hideCallback, showCallback);
    };
    GreetingService.prototype.toPrev = function (hideCallback, showCallback) {
        var stateName = this.current.prevState.name;
        this.changeTo(stateName, hideCallback, showCallback);
    };
    GreetingService.prototype.changeTo = function (stateName, hideCallback, showCallback) {
        var state = this.findSlide(stateName);
        this._hideState(state, hideCallback, showCallback);
    };
    GreetingService.prototype.findSlide = function (state) {
        return this._slides.find(function (slide) {
            return slide.state.name === state;
        });
    };
    GreetingService.prototype.getImages = function () {
        return this._slideConfigs.map(function (config) { return config.image; });
    };
    /*
     *
     */
    GreetingService.prototype.remoteTitleToCenter = function () {
        this.isCenterTitle = false;
    };
    GreetingService.prototype.titleToCenter = function () {
        this.isCenterTitle = true;
    };
    GreetingService.prototype.remoteTitleToRight = function () {
        this.isTitleToRight = false;
    };
    GreetingService.prototype.titleToRight = function () {
        this.isTitleToRight = true;
    };
    GreetingService.prototype.hideArrow = function () {
        this.isArrowVisible = false;
    };
    GreetingService.prototype.showArrow = function () {
        var _this = this;
        setTimeout(function () {
            _this.isArrowVisible = _this.current.state && _this.current.state.name !== '';
        }, 2000);
    };
    GreetingService.prototype.swapTitleToLeft = function () {
        var _this = this;
        this._ngZone.run(function () {
            setTimeout(function () {
                _this.isCanChangeState = true;
                _this.isFooterVisible = true;
            }, 2000);
            _this.remoteTitleToRight();
            _this.titleToCenter();
            _this.showArrow();
            _this.isButtonsDisabled = false;
        });
    };
    GreetingService.prototype._prepareChangeState = function () {
        this.isCanChangeState = false;
        this.closeMenu();
        this.isButtonsDisabled = true;
        this.hideArrow();
        this.titleToRight();
        this.remoteTitleToCenter();
        this.isFooterVisible = false;
    };
    GreetingService.prototype.toState = function (name) {
        var _this = this;
        this._prepareChangeState();
        return this[name](function () { return _this.swapTitleToLeft(); }, function () { });
    };
    GreetingService.prototype.goToState = function (stateName) {
        var _this = this;
        if (this.current.state.name === stateName) {
            return;
        }
        this._prepareChangeState();
        return this.changeTo(stateName, function () { return _this.swapTitleToLeft(); }, function () { });
    };
    GreetingService.prototype.closeMenu = function () {
        this.isOpenMenu = false;
    };
    GreetingService.prototype.openMenu = function () {
        this.isOpenMenu = true;
    };
    GreetingService.prototype.swipe = function (direction) {
        if (!this.isCanChangeState) {
            return;
        }
        direction === 'swipeleft' ? this.toState('toNext') : this.toState('toPrev');
    };
    GreetingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], GreetingService);
    return GreetingService;
    var _a, _b;
}());
//# sourceMappingURL=greeting.service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
var colors = {
    orangeE9: '#E96621',
    red75: '#751017',
    redC8: '#C82229',
    pinkFF: '#FFD2D4',
    black: '#000',
    gray8B: '#8b8a8a'
};
//# sourceMappingURL=slider-colors.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalService = (function () {
    function ModalService() {
        this.local = {
            currentModal: null,
        };
    }
    ModalService.prototype.show = function (modal) {
        this.local.currentModal = modal;
    };
    ModalService.prototype.hide = function () {
        this.local.currentModal = null;
    };
    ModalService.prototype.prevent = function (e) {
        e.stopPropagation();
    };
    ModalService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata('design:paramtypes', [])
    ], ModalService);
    return ModalService;
}());
//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuildingComponent = (function () {
    function BuildingComponent() {
    }
    BuildingComponent.prototype.ngOnInit = function () {
    };
    BuildingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'building',
            template: __webpack_require__(790),
            styles: [__webpack_require__(753)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None
        }),
        __metadata('design:paramtypes', [])
    ], BuildingComponent);
    return BuildingComponent;
}());
//# sourceMappingURL=building.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'contact',
            template: __webpack_require__(791),
            styles: [__webpack_require__(754)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None
        }),
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.isPopupVisible = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.isPopupVisible = true;
        }, 2000);
    };
    HomeComponent.prototype.closePopup = function () {
        this.isPopupVisible = false;
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'home',
            template: __webpack_require__(792),
            styles: [__webpack_require__(755)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None
        }),
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeighborhoodComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NeighborhoodComponent = (function () {
    function NeighborhoodComponent() {
    }
    NeighborhoodComponent.prototype.ngOnInit = function () {
    };
    NeighborhoodComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'neighborhood',
            template: __webpack_require__(793),
            styles: [__webpack_require__(756)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None
        }),
        __metadata('design:paramtypes', [])
    ], NeighborhoodComponent);
    return NeighborhoodComponent;
}());
//# sourceMappingURL=neighborhood.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 396;


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(578);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_greeting_greeting_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(route, router, _greetingService, element) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._greetingService = _greetingService;
        this.element = element;
        this.isHiddenFooter = true;
        this.local = {
            previousRouteClassName: null
        };
        router.events.subscribe(function (val) {
            var currentRoute = _this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
                _this.local.previousRouteClassName = currentRoute.snapshot.data['className'];
            }
            else if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if (_this.element) {
                    _this.element.nativeElement['classList'].remove(_this.local.previousRouteClassName);
                }
                if (_this.element) {
                    _this.element.nativeElement['classList'].add(currentRoute.snapshot.data['className']);
                }
            }
        });
    }
    Object.defineProperty(AppComponent.prototype, "isFooterVisible", {
        get: function () {
            return this._greetingService.isFooterVisible;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app',
            template: __webpack_require__(768),
            styles: [__webpack_require__(730), __webpack_require__(731)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_greeting_greeting_service__["a" /* GreetingService */]]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_greeting_greeting_service__["a" /* GreetingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_greeting_greeting_service__["a" /* GreetingService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_index__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_index__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components__["a" /* AppComponents */],
                __WEBPACK_IMPORTED_MODULE_7__containers__["a" /* AppContainers */],
                __WEBPACK_IMPORTED_MODULE_10__shared_index__["a" /* AppShared */],
                __WEBPACK_IMPORTED_MODULE_11__directives_index__["a" /* Directives */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* ROUTES */])
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_common__["a" /* PathLocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_12__angular_common__["b" /* HashLocationStrategy */] },
                __WEBPACK_IMPORTED_MODULE_9__services__["a" /* Services */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }),
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_home_home_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_contact_contact_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_neighborhood_neighborhood_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_building_building_component__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });




var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__containers_home_home_component__["a" /* HomeComponent */],
        data: {
            className: 'p-home'
        }
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_1__containers_contact_contact_component__["a" /* ContactComponent */],
        data: {
            className: 'p-contact'
        }
    },
    {
        path: 'neighborhood',
        component: __WEBPACK_IMPORTED_MODULE_2__containers_neighborhood_neighborhood_component__["a" /* NeighborhoodComponent */],
        data: {
            className: 'p-neighborhood'
        }
    },
    {
        path: 'building',
        component: __WEBPACK_IMPORTED_MODULE_3__containers_building_building_component__["a" /* BuildingComponent */],
        data: {
            className: 'p-building'
        }
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BGreetingControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BGreetingControlComponent = (function () {
    function BGreetingControlComponent() {
        this.onState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this._isButtonDisable = true;
    }
    Object.defineProperty(BGreetingControlComponent.prototype, "isDisable", {
        set: function (value) {
            var _this = this;
            if (value) {
                this._isButtonDisable = true;
            }
            else {
                setTimeout(function () {
                    _this._isButtonDisable = false;
                }, 1500);
            }
        },
        enumerable: true,
        configurable: true
    });
    BGreetingControlComponent.prototype.ngOnInit = function () {
    };
    BGreetingControlComponent.prototype.changeState = function (state) {
        this.onState.emit(state);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]) === 'function' && _a) || Object)
    ], BGreetingControlComponent.prototype, "onState", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Object)
    ], BGreetingControlComponent.prototype, "prev", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Object)
    ], BGreetingControlComponent.prototype, "next", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Boolean),
        __metadata('design:paramtypes', [Boolean])
    ], BGreetingControlComponent.prototype, "isDisable", null);
    BGreetingControlComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'b-greeting-control',
            template: __webpack_require__(769),
            styles: [__webpack_require__(732)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None
        }),
        __metadata('design:paramtypes', [])
    ], BGreetingControlComponent);
    return BGreetingControlComponent;
    var _a;
}());
//# sourceMappingURL=b-greeting-control.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BGreetingTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BGreetingTitleComponent = (function () {
    function BGreetingTitleComponent() {
        this.isFastShowing = false;
    }
    Object.defineProperty(BGreetingTitleComponent.prototype, "isCenter", {
        set: function (value) {
            var _this = this;
            if (value && !this.isFastShowing) {
                setTimeout(function () {
                    _this._isCenter = value;
                }, 1500);
            }
            else {
                this._isCenter = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    BGreetingTitleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Boolean)
    ], BGreetingTitleComponent.prototype, "isFastShowing", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Array)
    ], BGreetingTitleComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Array)
    ], BGreetingTitleComponent.prototype, "subtitle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Array)
    ], BGreetingTitleComponent.prototype, "comment", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Boolean)
    ], BGreetingTitleComponent.prototype, "isOutRight", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Boolean),
        __metadata('design:paramtypes', [Boolean])
    ], BGreetingTitleComponent.prototype, "isCenter", null);
    BGreetingTitleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'b-greeting-title',
            template: __webpack_require__(770),
            styles: [__webpack_require__(733)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None
        }),
        __metadata('design:paramtypes', [])
    ], BGreetingTitleComponent);
    return BGreetingTitleComponent;
}());
//# sourceMappingURL=b-greeting-title.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_greeting_greeting_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BHomePopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BHomePopupComponent = (function () {
    function BHomePopupComponent(_greetingService, _el) {
        this._greetingService = _greetingService;
        this._el = _el;
        this.onClosePopup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
    }
    Object.defineProperty(BHomePopupComponent.prototype, "isButtonDisabled", {
        get: function () {
            return this._greetingService.isButtonsDisabled;
        },
        enumerable: true,
        configurable: true
    });
    BHomePopupComponent.prototype.removePopup = function (event) {
        if (!this._el.nativeElement.contains(event.target)) {
            this.hidePopup();
        }
    };
    BHomePopupComponent.prototype.ngOnInit = function () {
    };
    BHomePopupComponent.prototype.hidePopup = function () {
        this.onClosePopup.emit();
    };
    Object.defineProperty(BHomePopupComponent.prototype, "current", {
        get: function () {
            return this._greetingService.current || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BHomePopupComponent.prototype, "title", {
        get: function () {
            return this.current.title || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BHomePopupComponent.prototype, "subtitle", {
        get: function () {
            return this.current.subtitle || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BHomePopupComponent.prototype, "comment", {
        get: function () {
            return this.current.comment || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BHomePopupComponent.prototype, "prev", {
        get: function () {
            return this.current.prevState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BHomePopupComponent.prototype, "next", {
        get: function () {
            return this.current.nextState;
        },
        enumerable: true,
        configurable: true
    });
    BHomePopupComponent.prototype.toPrev = function () {
        this._greetingService.toState('toPrev');
    };
    BHomePopupComponent.prototype.toNext = function () {
        this._greetingService.toState('toNext');
    };
    BHomePopupComponent.prototype.onState = function (state) {
        var _this = this;
        this.onClosePopup.emit();
        setTimeout(function () {
            state === 'next' ? _this.toNext() : _this.toPrev();
        }, 700);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Object)
    ], BHomePopupComponent.prototype, "isPopupVisible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]) === 'function' && _a) || Object)
    ], BHomePopupComponent.prototype, "onClosePopup", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('document:click', ['$event']),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Object]),
        __metadata('design:returntype', void 0)
    ], BHomePopupComponent.prototype, "removePopup", null);
    BHomePopupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'b-home-popup',
            template: __webpack_require__(771),
            styles: [__webpack_require__(734)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None
        }),
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_greeting_greeting_service__["a" /* GreetingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_greeting_greeting_service__["a" /* GreetingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */]) === 'function' && _c) || Object])
    ], BHomePopupComponent);
    return BHomePopupComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=b-home-popup.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_greeting_greeting_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BPageTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BPageTitleComponent = (function () {
    function BPageTitleComponent(_greetingService) {
        this._greetingService = _greetingService;
        this.isShow = false;
        this.isOutRight = false;
    }
    BPageTitleComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BPageTitleComponent.prototype, "current", {
        get: function () {
            return this._greetingService.current || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BPageTitleComponent.prototype, "title", {
        get: function () {
            return this.current.title || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BPageTitleComponent.prototype, "subtitle", {
        get: function () {
            return this.current.subtitle || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BPageTitleComponent.prototype, "comment", {
        get: function () {
            return this.current.comment || [];
        },
        enumerable: true,
        configurable: true
    });
    BPageTitleComponent.prototype.setVisibleTitle = function () {
        this.isShow = true;
    };
    BPageTitleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'b-page-title',
            template: __webpack_require__(772),
            styles: [__webpack_require__(735)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_greeting_greeting_service__["a" /* GreetingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_greeting_greeting_service__["a" /* GreetingService */]) === 'function' && _a) || Object])
    ], BPageTitleComponent);
    return BPageTitleComponent;
    var _a;
}());
//# sourceMappingURL=b-page-title.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__b_greeting_control_b_greeting_control_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__b_greeting_title_b_greeting_title_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__b_page_title_b_page_title_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__b_home_popup_b_home_popup_component__ = __webpack_require__(528);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLOCKS; });




var BLOCKS = [
    __WEBPACK_IMPORTED_MODULE_0__b_greeting_control_b_greeting_control_component__["a" /* BGreetingControlComponent */],
    __WEBPACK_IMPORTED_MODULE_1__b_greeting_title_b_greeting_title_component__["a" /* BGreetingTitleComponent */],
    __WEBPACK_IMPORTED_MODULE_2__b_page_title_b_page_title_component__["a" /* BPageTitleComponent */],
    __WEBPACK_IMPORTED_MODULE_3__b_home_popup_b_home_popup_component__["a" /* BHomePopupComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnDownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BtnDownComponent = (function () {
    function BtnDownComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
    }
    BtnDownComponent.prototype.ngOnInit = function () {
    };
    BtnDownComponent.prototype.click = function (event) {
        this.onClick.emit(event);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]) === 'function' && _a) || Object)
    ], BtnDownComponent.prototype, "onClick", void 0);
    BtnDownComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'btn-down',
            template: __webpack_require__(773),
            styles: [__webpack_require__(736)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None
        }),
        __metadata('design:paramtypes', [])
    ], BtnDownComponent);
    return BtnDownComponent;
    var _a;
}());
//# sourceMappingURL=btn-down.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnHamburgerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BtnHamburgerComponent = (function () {
    function BtnHamburgerComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this.isOpen = false;
    }
    BtnHamburgerComponent.prototype.ngOnInit = function () {
    };
    BtnHamburgerComponent.prototype.click = function () {
        this.onClick.emit(!this.isOpen);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]) === 'function' && _a) || Object)
    ], BtnHamburgerComponent.prototype, "onClick", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Boolean)
    ], BtnHamburgerComponent.prototype, "isOpen", void 0);
    BtnHamburgerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'btn-hamburger',
            template: __webpack_require__(774),
            styles: [__webpack_require__(737)]
        }),
        __metadata('design:paramtypes', [])
    ], BtnHamburgerComponent);
    return BtnHamburgerComponent;
    var _a;
}());
//# sourceMappingURL=btn-hamburger.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__btn_hamburger_btn_hamburger_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__btn_down_btn_down_component__ = __webpack_require__(531);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BUTTONS; });


var BUTTONS = [
    __WEBPACK_IMPORTED_MODULE_1__btn_down_btn_down_component__["a" /* BtnDownComponent */],
    __WEBPACK_IMPORTED_MODULE_0__btn_hamburger_btn_hamburger_component__["a" /* BtnHamburgerComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ETC; });
var ETC = [];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FContactComponent = (function () {
    function FContactComponent() {
        this.submitButtonWasClicked = false;
        this.emailValid = false;
        this.nameValid = false;
        this.phoneValid = false;
        this.formValid = false;
    }
    FContactComponent.prototype.ngOnInit = function () {
    };
    FContactComponent.prototype.submitForm = function () {
        this.submitButtonWasClicked = true;
        this.checkEmail();
        this.checkName();
        var tel = document.getElementById('phone');
        var phoneErr = document.getElementById('phoneError');

        if(tel.value){
            this.checkPhone();
            this.formValid = this.nameValid && this.emailValid && this.phoneValid;
        }
        else if(phoneErr.classList.contains("phoneErShow")){
            this.checkPhone();
            this.formValid = this.nameValid && this.emailValid && this.phoneValid;
        }
        else{
            this.formValid = this.nameValid && this.emailValid;
        }
        if(this.formValid==true) formSubmit();

    };
    FContactComponent.prototype.checkPhone = function () {

        document.getElementById('phoneError').classList.add("phoneErHide");
        document.getElementById('phoneError').classList.remove("phoneErShow");

        var tel = document.getElementById('phone');

        if(tel.value != ""){

            this.phoneValid = /^[\d\+\-\.\(\)\/\s]*$/.test(this.tel);

            var phoneno = /^\d{10}$/;

            if(tel.value.match(phoneno)){
                this.phoneValid = true;
            }
            else{
                this.phoneValid = false;
            }

            if(this.phoneValid == false) {
               document.getElementById('phoneError').classList.add("phoneErShow");
               document.getElementById('phoneError').classList.remove("phoneErHide");
           }else{
                document.getElementById('phoneError').classList.remove("phoneErShow");
                document.getElementById('phoneError').classList.add("phoneErHide");
            }
        }

        if(tel.value == "")
            {
                this.phoneValid = true;
                document.getElementById('phoneError').classList.remove("phoneErShow");
                document.getElementById('phoneError').classList.add("phoneErHide");
            }


};
FContactComponent.prototype.phoneFocus = function () {
    document.getElementById('phoneError').classList.remove("phoneErShow");
    document.getElementById('phoneError').classList.add("phoneErHide");
};

FContactComponent.prototype.phoneKeyDown = function () {
    document.getElementById('phoneError').classList.remove("phoneErShow");
    document.getElementById('phoneError').classList.add("phoneErHide");
};

FContactComponent.prototype.checkName = function () {
    this.nameValid = /[a-zA-Z ]/i.test(this.name) && this.name && this.name.length !== 0;
}
FContactComponent.prototype.checkEmail = function () {
    this.emailValid = /^[-a-z0-9~!$%^&*_=}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|cat|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(this.email);
};
    FContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'f-contact',
            template: __webpack_require__(775),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(738)]
        }),
        __metadata('design:paramtypes', [])
    ], FContactComponent);
    return FContactComponent;
}());
//# sourceMappingURL=f-contact.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__f_contact_f_contact_component__ = __webpack_require__(535);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FORMS; });

var FORMS = [
    __WEBPACK_IMPORTED_MODULE_0__f_contact_f_contact_component__["a" /* FContactComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__etc__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lists__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menus__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__previews__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sections__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sliders__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_index__ = __webpack_require__(542);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponents; });










var AppComponents = [
    __WEBPACK_IMPORTED_MODULE_0__blocks__["a" /* BLOCKS */],
    __WEBPACK_IMPORTED_MODULE_1__buttons__["a" /* BUTTONS */],
    __WEBPACK_IMPORTED_MODULE_2__etc__["a" /* ETC */],
    __WEBPACK_IMPORTED_MODULE_3__forms__["a" /* FORMS */],
    __WEBPACK_IMPORTED_MODULE_4__lists__["a" /* LISTS */],
    __WEBPACK_IMPORTED_MODULE_5__menus__["a" /* MENUS */],
    __WEBPACK_IMPORTED_MODULE_9__modals_index__["a" /* MODALS */],
    __WEBPACK_IMPORTED_MODULE_6__previews__["a" /* PREVIEWS */],
    __WEBPACK_IMPORTED_MODULE_7__sections__["a" /* SECTIONS */],
    __WEBPACK_IMPORTED_MODULE_8__sliders__["a" /* SLIDERS */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__l_options_l_options_component__ = __webpack_require__(539);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LISTS; });

var LISTS = [
    __WEBPACK_IMPORTED_MODULE_0__l_options_l_options_component__["a" /* LOptionsComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LOptionsComponent = (function () {
    function LOptionsComponent(_appService) {
        this._appService = _appService;
    }
    LOptionsComponent.prototype.ngOnInit = function () {
        this.images = this._appService.getImage('prevOptionsImages').slice();
    };
    LOptionsComponent.prototype.clicked = function (event, n) {
        event.preventDefault();
        console.log(3);
        console.log(n);
        this.slick.slick('slickGoTo', n, true);
        this.slick.parent().addClass('_active');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Object)
    ], LOptionsComponent.prototype, "slick", void 0);
    LOptionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'l-options',
            template: __webpack_require__(776),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(739)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], LOptionsComponent);
    return LOptionsComponent;
    var _a;
}());
//# sourceMappingURL=l-options.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__m_greeting_m_greeting_component__ = __webpack_require__(541);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENUS; });

var MENUS = [
    __WEBPACK_IMPORTED_MODULE_0__m_greeting_m_greeting_component__["a" /* MGretingComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MGretingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MGretingComponent = (function () {
    function MGretingComponent() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this.isOpen = false;
        this.onOpenMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this.menu = [
            { state: 'building', title: 'Building' },
            { state: 'neighborhood', title: 'Neighborhood' },
            { state: 'contact', title: 'Contact' }
        ];
    }
    MGretingComponent.prototype.ngOnInit = function () {
    };
    MGretingComponent.prototype.goToState = function (state) {
        this.onChange.emit(state);
        this.onOpenMenu.emit(!this.isOpen);
    };
    MGretingComponent.prototype.onClick = function (state) {
        this.onOpenMenu.emit(state);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]) === 'function' && _a) || Object)
    ], MGretingComponent.prototype, "onChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Boolean)
    ], MGretingComponent.prototype, "isOpen", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]) === 'function' && _b) || Object)
    ], MGretingComponent.prototype, "onOpenMenu", void 0);
    MGretingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'm-greeting',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            template: __webpack_require__(777),
            styles: [__webpack_require__(740)]
        }),
        __metadata('design:paramtypes', [])
    ], MGretingComponent);
    return MGretingComponent;
    var _a, _b;
}());
//# sourceMappingURL=m-greeting.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_default_modal_default_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_policy_modal_policy_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_help_modal_help_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_house_modal_house_component__ = __webpack_require__(545);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODALS; });




var MODALS = [
    __WEBPACK_IMPORTED_MODULE_0__modal_default_modal_default_component__["a" /* ModalDefaultComponent */],
    __WEBPACK_IMPORTED_MODULE_1__modal_policy_modal_policy_component__["a" /* ModalPolicyComponent */],
    __WEBPACK_IMPORTED_MODULE_2__modal_help_modal_help_component__["a" /* ModalHelpComponent */],
    __WEBPACK_IMPORTED_MODULE_3__modal_house_modal_house_component__["a" /* ModalHouseComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_service_modal_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDefaultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalDefaultComponent = (function () {
    function ModalDefaultComponent(_modalService) {
        this._modalService = _modalService;
    }
    ModalDefaultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'modal-default',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            template: __webpack_require__(778),
            styles: [__webpack_require__(741)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('fadeIn', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* transition */])('void => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])('0.2s ease', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: 1 }))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* transition */])('* => void', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])('0.2s ease', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_modal_service_modal_service__["a" /* ModalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_modal_service_modal_service__["a" /* ModalService */]) === 'function' && _a) || Object])
    ], ModalDefaultComponent);
    return ModalDefaultComponent;
    var _a;
}());
//# sourceMappingURL=modal-default.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalHelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalHelpComponent = (function () {
    function ModalHelpComponent() {
    }
    ModalHelpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'modal-help',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            template: __webpack_require__(779),
            styles: [__webpack_require__(742)]
        }),
        __metadata('design:paramtypes', [])
    ], ModalHelpComponent);
    return ModalHelpComponent;
}());
//# sourceMappingURL=modal-help.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalHouseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalHouseComponent = (function () {
    function ModalHouseComponent() {
    }
    ModalHouseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'modal-house',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            template: __webpack_require__(780),
            styles: [__webpack_require__(743)]
        }),
        __metadata('design:paramtypes', [])
    ], ModalHouseComponent);
    return ModalHouseComponent;
}());
//# sourceMappingURL=modal-house.component.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPolicyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalPolicyComponent = (function () {
    function ModalPolicyComponent() {
    }
    ModalPolicyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'modal-policy',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            template: __webpack_require__(781),
            styles: [__webpack_require__(744)]
        }),
        __metadata('design:paramtypes', [])
    ], ModalPolicyComponent);
    return ModalPolicyComponent;
}());
//# sourceMappingURL=modal-policy.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PREVIEWS; });
var PREVIEWS = [];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__s_greeting_s_greeting_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__s_contact_s_contact_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__s_footer_s_footer_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__s_neighborhood_s_neighborhood_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__s_building_s_building_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__s_options_s_options_component__ = __webpack_require__(554);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECTIONS; });






var SECTIONS = [
    __WEBPACK_IMPORTED_MODULE_0__s_greeting_s_greeting_component__["a" /* SGreetingComponent */],
    __WEBPACK_IMPORTED_MODULE_4__s_building_s_building_component__["a" /* SBuildingComponent */],
    __WEBPACK_IMPORTED_MODULE_1__s_contact_s_contact_component__["a" /* SContactComponent */],
    __WEBPACK_IMPORTED_MODULE_2__s_footer_s_footer_component__["a" /* SFooterComponent */],
    __WEBPACK_IMPORTED_MODULE_3__s_neighborhood_s_neighborhood_component__["a" /* SNeighborhoodComponent */],
    __WEBPACK_IMPORTED_MODULE_5__s_options_s_options_component__["a" /* SOptionsComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SBuildingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SBuildingComponent = (function () {
    function SBuildingComponent() {
    }
    SBuildingComponent.prototype.ngOnInit = function () {
    };
    SBuildingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 's-building',
            template: __webpack_require__(782),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(745)]
        }),
        __metadata('design:paramtypes', [])
    ], SBuildingComponent);
    return SBuildingComponent;
}());
//# sourceMappingURL=s-building.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SContactComponent = (function () {
    function SContactComponent() {
    }
    SContactComponent.prototype.ngOnInit = function () {
    };
    SContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 's-contact',
            template: __webpack_require__(783),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(746)]
        }),
        __metadata('design:paramtypes', [])
    ], SContactComponent);
    return SContactComponent;
}());
//# sourceMappingURL=s-contact.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_service_modal_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SFooterComponent = (function () {
    function SFooterComponent(_modalService) {
        this._modalService = _modalService;
    }
    SFooterComponent.prototype.showModal = function (modal) {
        this._modalService.show(modal);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Boolean)
    ], SFooterComponent.prototype, "isHidden", void 0);
    SFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 's-footer',
            template: __webpack_require__(784),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(747)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_modal_service_modal_service__["a" /* ModalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_modal_service_modal_service__["a" /* ModalService */]) === 'function' && _a) || Object])
    ], SFooterComponent);
    return SFooterComponent;
    var _a;
}());
//# sourceMappingURL=s-footer.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_greeting_greeting_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SGreetingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SGreetingComponent = (function () {
    function SGreetingComponent(_greetingService, _el) {
        this._greetingService = _greetingService;
        this._el = _el;
        this._desktopConfig = {
            components: {
                wrapper: '.s-greeting__canvas-wrapper',
                canvas: '.s-greeting__canvas',
                images: '.slider-images._desktop'
            },
            duration: { show: 1, hide: 0.8 },
            delay: { show: 0, hide: 0.2 },
            paths: { x: 8, y: 6 },
            sizes: {
                canvas: { x: 0, y: 0, width: 1280, height: 800 },
                image: { x: 0, y: 0, width: 1280, height: 800 }
            },
            type: 'desktop'
        };
        this._mobileConfig = {
            components: {
                wrapper: '.s-greeting__canvas-wrapper',
                canvas: '.s-greeting__canvas',
                images: '.slider-images._mobile'
            },
            duration: { show: 1, hide: 0.8 },
            delay: { show: 0, hide: 0.2 },
            paths: { x: 6, y: 10 },
            sizes: {
                canvas: { x: 0, y: 0, width: 750, height: 1041 },
                image: { x: 0, y: 0, width: 750, height: 1041 }
            },
            type: 'mobile'
        };
    }
    Object.defineProperty(SGreetingComponent.prototype, "isButtonsDisabled", {
        get: function () {
            return this._greetingService.isButtonsDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGreetingComponent.prototype, "isCenterTitle", {
        get: function () {
            return this._greetingService.isCenterTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGreetingComponent.prototype, "isTitleToRight", {
        get: function () {
            return this._greetingService.isTitleToRight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGreetingComponent.prototype, "isOpenMenu", {
        get: function () {
            return this._greetingService.isOpenMenu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGreetingComponent.prototype, "isArrowVisible", {
        get: function () {
            return this._greetingService.isArrowVisible;
        },
        enumerable: true,
        configurable: true
    });
    SGreetingComponent.prototype.onWindowOrientationChange = function () {
        this._calculateHeight();
    };
    SGreetingComponent.prototype._getConfig = function () {
        if (window.innerWidth > 740) {
            return this._desktopConfig;
        }
        return this._mobileConfig;
    };
    SGreetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = this._greetingService.getImages();
        this._greetingService.isButtonsDisabled = true;
        var canvas = document.getElementsByClassName('s-greeting__canvas')[0];
        var config = this._getConfig();
        this._greetingService.initSlider(canvas, config, config.type);
        setTimeout(function () {
            _this._greetingService.swapTitleToLeft();
        }, 300);
    };
    SGreetingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        new Hammer(this._el.nativeElement, {})
            .on('swipeleft swiperight', function (event) {
            _this.swipe(event.type);
        });
        this._calculateHeight();
    };
    SGreetingComponent.prototype._calculateHeight = function () {
        this._el.nativeElement.style.height = window.innerHeight + 'px';
    };
    SGreetingComponent.prototype.onState = function (state) {
        state === 'next' ? this.toNext() : this.toPrev();
    };
    SGreetingComponent.prototype.toPrev = function () {
        this._greetingService.toState('toPrev');
    };
    SGreetingComponent.prototype.toNext = function () {
        this._greetingService.toState('toNext');
    };
    Object.defineProperty(SGreetingComponent.prototype, "current", {
        get: function () {
            return this._greetingService.current || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGreetingComponent.prototype, "title", {
        get: function () {
            return this.current.title || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGreetingComponent.prototype, "subtitle", {
        get: function () {
            return this.current.subtitle || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGreetingComponent.prototype, "comment", {
        get: function () {
            return this.current.comment || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGreetingComponent.prototype, "prev", {
        get: function () {
            return this.current.prevState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGreetingComponent.prototype, "next", {
        get: function () {
            return this.current.nextState;
        },
        enumerable: true,
        configurable: true
    });
    SGreetingComponent.prototype.swipe = function (direction) {
        this._greetingService.swipe(direction);
    };
    SGreetingComponent.prototype.onOpenMenu = function (state) {
        state ? this._greetingService.openMenu() : this._greetingService.closeMenu();
    };
    SGreetingComponent.prototype.goToState = function (state) {
        this._greetingService.goToState(state);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('window:orientationchange', ['$event']),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', void 0)
    ], SGreetingComponent.prototype, "onWindowOrientationChange", null);
    SGreetingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 's-greeting',
            template: __webpack_require__(785),
            styles: [__webpack_require__(748)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_greeting_greeting_service__["a" /* GreetingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_greeting_greeting_service__["a" /* GreetingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */]) === 'function' && _b) || Object])
    ], SGreetingComponent);
    return SGreetingComponent;
    var _a, _b;
}());
//# sourceMappingURL=s-greeting.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SNeighborhoodComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SNeighborhoodComponent = (function () {
    function SNeighborhoodComponent(_appService) {
        this._appService = _appService;
        this.local = {};
    }
    SNeighborhoodComponent.prototype.ngOnInit = function () {
        this.streetImage = this._appService.getImage('streetsImages');
        this.sportImage = this._appService.getImage('sportsImages');
    };
    SNeighborhoodComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 's-neighborhood',
            template: __webpack_require__(786),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(749)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], SNeighborhoodComponent);
    return SNeighborhoodComponent;
    var _a;
}());
//# sourceMappingURL=s-neighborhood.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SOptionsComponent = (function () {
    function SOptionsComponent() {
    }
    SOptionsComponent.prototype.ngOnInit = function () {
    };
    SOptionsComponent.prototype.saveSlickComponent = function (slick) {
        this.slick = slick;
    };
    SOptionsComponent.prototype.clicked = function (event) {
        event.stopPropagation();
    };
    SOptionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 's-options',
            template: __webpack_require__(787),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(750)]
        }),
        __metadata('design:paramtypes', [])
    ], SOptionsComponent);
    return SOptionsComponent;
}());
//# sourceMappingURL=s-options.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sl_samples_sl_samples_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sl_options_sl_options_component__ = __webpack_require__(556);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SLIDERS; });


var SLIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__sl_samples_sl_samples_component__["a" /* SlSamplesComponent */],
    __WEBPACK_IMPORTED_MODULE_1__sl_options_sl_options_component__["a" /* SlOptionsComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlOptionsComponent = (function () {
    function SlOptionsComponent(_el, _appService) {
        this._el = _el;
        this._appService = _appService;
        this.isTextVisible = true;
        this.getSlickComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this.local = {};
        this.config = {
            arrows: true,
            dots: false,
            // autoplay: true,
            speed: 600,
            infinite: true,
            slidesToShow: 1,
            draggable: false,
            prevArrow: '<button class="slick-prev"><svg version="1.1" class="svg-arrow-circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" \
          viewBox="0 0 21.7 21.7" style="enable-background:new 0 0 21.7 21.7;" xml:space="preserve"> \
          <path d="M10.9,0C4.9,0,0,4.9,0,10.9c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9C21.7,4.9,16.8,0,10.9,0z M10.9,20.7 \
          c-5.4,0-9.9-4.4-9.9-9.9C1,5.4,5.4,1,10.9,1c5.4,0,9.9,4.4,9.9,9.9C20.7,16.3,16.3,20.7,10.9,20.7z M9.9,7.6l3.5,3.5l-3.5,3.5 \
          L9.4,14l2.9-2.9L9.4,8.1L9.9,7.6z"/></svg></button>',
            nextArrow: '<button class="slick-next"><svg version="1.1" class="svg-arrow-circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" \
          viewBox="0 0 21.7 21.7" style="enable-background:new 0 0 21.7 21.7;" xml:space="preserve"> \
          <path d="M10.9,0C4.9,0,0,4.9,0,10.9c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9C21.7,4.9,16.8,0,10.9,0z M10.9,20.7 \
          c-5.4,0-9.9-4.4-9.9-9.9C1,5.4,5.4,1,10.9,1c5.4,0,9.9,4.4,9.9,9.9C20.7,16.3,16.3,20.7,10.9,20.7z M9.9,7.6l3.5,3.5l-3.5,3.5 \
          L9.4,14l2.9-2.9L9.4,8.1L9.9,7.6z"/></svg></button>',
            responsive: [
                {
                    breakpoint: 740,
                    settings: {
                        dots: true
                    }
                }
            ]
        };
    }
    SlOptionsComponent.prototype.ngOnInit = function () {
        this.images = this._appService.getImage('optionsImages').slice();
    };
    SlOptionsComponent.prototype.saveSlickElement = function (data) {
        this.getSlickComponent.emit(data);
    };
    SlOptionsComponent.prototype.clicked = function () {
        console.log(3);
        $(this._el.nativeElement).find('.sl-options').removeClass('_active');
    };
    SlOptionsComponent.prototype.onClick = function () {
        $(this._el.nativeElement).find('.sl-options').removeClass('_active');
    };
    SlOptionsComponent.prototype.textHide = function () {
        this.isTextVisible = !this.isTextVisible;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]) === 'function' && _a) || Object)
    ], SlOptionsComponent.prototype, "getSlickComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('document:click'),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', void 0)
    ], SlOptionsComponent.prototype, "onClick", null);
    SlOptionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'sl-options',
            template: __webpack_require__(788),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(751)]
        }),
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__["a" /* AppService */]) === 'function' && _c) || Object])
    ], SlOptionsComponent);
    return SlOptionsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=sl-options.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlSamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlSamplesComponent = (function () {
    function SlSamplesComponent(_appService) {
        this._appService = _appService;
        this.isSliderVisible = true;
        this.local = {};
        this.config = {
            dots: true,
            prevArrow: '<button class="slick-prev"><svg version="1.1" class="svg-arrow-circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" \
          viewBox="0 0 21.7 21.7" style="enable-background:new 0 0 21.7 21.7;" xml:space="preserve"> \
          <path d="M10.9,0C4.9,0,0,4.9,0,10.9c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9C21.7,4.9,16.8,0,10.9,0z M10.9,20.7 \
          c-5.4,0-9.9-4.4-9.9-9.9C1,5.4,5.4,1,10.9,1c5.4,0,9.9,4.4,9.9,9.9C20.7,16.3,16.3,20.7,10.9,20.7z M9.9,7.6l3.5,3.5l-3.5,3.5 \
          L9.4,14l2.9-2.9L9.4,8.1L9.9,7.6z"/></svg></button>',
            nextArrow: '<button class="slick-next"><svg version="1.1" class="svg-arrow-circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" \
          viewBox="0 0 21.7 21.7" style="enable-background:new 0 0 21.7 21.7;" xml:space="preserve"> \
          <path d="M10.9,0C4.9,0,0,4.9,0,10.9c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9C21.7,4.9,16.8,0,10.9,0z M10.9,20.7 \
          c-5.4,0-9.9-4.4-9.9-9.9C1,5.4,5.4,1,10.9,1c5.4,0,9.9,4.4,9.9,9.9C20.7,16.3,16.3,20.7,10.9,20.7z M9.9,7.6l3.5,3.5l-3.5,3.5 \
          L9.4,14l2.9-2.9L9.4,8.1L9.9,7.6z"/></svg></button>'
        };
    }
    SlSamplesComponent.prototype.ngOnInit = function () {
        this.images = this._appService.getImage('samplesImages').slice();
    };
    SlSamplesComponent.prototype.clicked = function () {
        this.isSliderVisible = !this.isSliderVisible;
    };
    SlSamplesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'sl-samples',
            template: __webpack_require__(789),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(752)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_service_app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], SlSamplesComponent);
    return SlSamplesComponent;
    var _a;
}());
//# sourceMappingURL=sl-samples.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__building_building_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__neighborhood_neighborhood_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContainers; });




var AppContainers = [
    __WEBPACK_IMPORTED_MODULE_1__building_building_component__["a" /* BuildingComponent */],
    __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */],
    __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_2__neighborhood_neighborhood_component__["a" /* NeighborhoodComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimateTitleDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimateTitleDirective = (function () {
    function AnimateTitleDirective(_el, _renderer) {
        this._renderer = _renderer;
        this.onScrollToElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this._elementOffsetTop = null;
        this._offset = 0;
        this._dispose = function () { };
        this._element = _el.nativeElement;
    }
    Object.defineProperty(AnimateTitleDirective.prototype, "offset", {
        set: function (value) {
            this._offset = value;
        },
        enumerable: true,
        configurable: true
    });
    AnimateTitleDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.calculatePosition(_this._element);
            _this._dispose = _this._renderer.listen(window, 'scroll', _this._onScroll.bind(_this));
            _this._onScroll();
        }, 100);
    };
    AnimateTitleDirective.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    AnimateTitleDirective.prototype._onScroll = function () {
        if (window.pageYOffset + window.innerHeight - this._offset > this._elementOffsetTop) {
            this.onScrollToElement.emit();
            this._dispose();
        }
    };
    AnimateTitleDirective.prototype.calculatePosition = function (elem) {
        var coords = elem.getBoundingClientRect();
        var height = Math.max(document.documentElement.scrollHeight, window.innerHeight || 0);
        this._elementOffsetTop = coords.top + window.pageYOffset;
        if (window.innerHeight < 800) {
            this._offset = this._offset / 3;
        }
        if (height - 30 < coords.bottom + window.pageYOffset + this._offset) {
            this._elementOffsetTop = height - 30 - this._offset;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Number),
        __metadata('design:paramtypes', [Number])
    ], AnimateTitleDirective.prototype, "offset", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]) === 'function' && _a) || Object)
    ], AnimateTitleDirective.prototype, "onScrollToElement", void 0);
    AnimateTitleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Directive */])({
            selector: '[animateTitle]'
        }),
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Renderer */]) === 'function' && _c) || Object])
    ], AnimateTitleDirective);
    return AnimateTitleDirective;
    var _a, _b, _c;
}());
//# sourceMappingURL=animate-title.directive.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas_image__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_rect__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideController; });


var SlideController = (function () {
    function SlideController(canvas, config) {
        this._blockSizes = {};
        this._isShow = false;
        this.$canvas = null;
        this.$wrapper = null;
        this._duration = { show: 1000, hide: 1000 };
        this._delay = { show: 0, hide: 0 };
        TweenMax.defaultEase = Power3.easeInOut;
        this._canvas = canvas;
        this._context = canvas.getContext('2d');
        this._config = config;
        this._sizes = config.sizes;
        this._paths = config.paths || { x: 1, y: 1 };
        this._duration = config.duration || this._duration;
        this._delay = config.delay || this._delay;
        this._blockSizes = {
            image: {
                width: Math.ceil(this._sizes.image.width / this._paths.x),
                height: Math.ceil(this._sizes.image.height / this._paths.y),
            },
            canvas: {
                width: Math.ceil(this._sizes.canvas.width / this._paths.x),
                height: Math.ceil(this._sizes.canvas.height / this._paths.y)
            }
        };
        this.$canvas = config.components && $(config.components.canvas);
        this.$wrapper = config.components && $(config.components.wrapper);
    }
    SlideController.prototype._updateCanvas = function () {
        var canvas = $('<canvas></canvas>')
            .attr('width', this._sizes.canvas.width).attr('height', this._sizes.canvas.height)
            .addClass(this._config.components && this._config.components.canvas.slice(1));
        this._context = canvas[0].getContext('2d');
        this.$wrapper.find('canvas').remove();
        this.$wrapper.append(canvas);
        this._context.clearRect(0, 0, this._sizes.canvas.width, this._sizes.canvas.height);
    };
    SlideController.prototype.show = function (config) {
        this._updateCanvas();
        if (this._isShow) {
            throw new Error('Slide already showing');
        }
        this._isShow = true;
        this._image = new Image();
        this._image.src = this._config.image;
    };
    SlideController.prototype.hide = function () {
        this._isShow = false;
    };
    SlideController.prototype.onShowEnd = function () {
        this._temp = this._canvas.toDataURL();
        this._isShow = true;
    };
    SlideController.prototype._rectangleOffsetAnimate = function (_config) {
        var _this = this;
        var config = Object.assign({}, _config, { image: this._image });
        return function (callback) { return __WEBPACK_IMPORTED_MODULE_0__canvas_image__["a" /* animate */](_this._context, config, callback); };
    };
    SlideController.prototype._getImagePixelsPerCanvasPixel = function (canvas, image) {
        return image / canvas;
    };
    SlideController.prototype._getImagePositions = function (canvas, origin) {
        var xDivider = this._getImagePixelsPerCanvasPixel(origin.canvas.width, origin.image.width);
        var yDivider = this._getImagePixelsPerCanvasPixel(origin.canvas.height, origin.image.height);
        var imageX = xDivider * canvas.x + origin.image.x;
        var imageY = yDivider * canvas.y + origin.image.y;
        var imageWidth = xDivider * canvas.width;
        var imageHeight = xDivider * canvas.height;
        return { imageX: imageX, imageY: imageY, imageWidth: imageWidth, imageHeight: imageHeight };
    };
    SlideController.prototype._customRectangleAnimation = function (canvas, origin, inputConfig, callback) {
        var drawCanvas = {
            x: Math.min(canvas.end.x, canvas.start.x),
            y: Math.min(canvas.end.y, canvas.start.y),
            width: Math.max(canvas.end.width, canvas.start.width),
            height: Math.max(canvas.end.height, canvas.start.height),
        };
        var _a = this._getImagePositions(drawCanvas, origin), imageX = _a.imageX, imageY = _a.imageY, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
        var imageObject = this._image;
        imageX += inputConfig.offset && inputConfig.offset.x || 0;
        imageY += inputConfig.offset && inputConfig.offset.y || 0;
        var config = {
            start: Object.assign({}, canvas.start),
            end: Object.assign({}, canvas.end),
            opacity: inputConfig.opacity,
            fill: inputConfig.fill,
            duration: inputConfig.duration,
            delay: inputConfig.delay,
            ease: inputConfig.ease,
            onStartRedraw: function (context, current, config) {
                inputConfig.onStartRedraw && inputConfig.onStartRedraw(context, current, config);
                if (!inputConfig.isNotRedrawImage) {
                    __WEBPACK_IMPORTED_MODULE_0__canvas_image__["b" /* draw */](context, {
                        imageObject: imageObject,
                        image: { x: imageX, y: imageY, width: imageWidth, height: imageHeight },
                        canvas: drawCanvas
                    });
                }
                inputConfig.onEndRedraw && inputConfig.onEndRedraw(context, current, config);
            }
        };
        __WEBPACK_IMPORTED_MODULE_1__canvas_rect__["b" /* animate */](this._context, config, callback);
    };
    Object.defineProperty(SlideController.prototype, "isShow", {
        get: function () {
            return this._isShow;
        },
        enumerable: true,
        configurable: true
    });
    SlideController.prototype._showSlide = function (config) {
        TweenMax.fromTo('.s-greeting__canvas-wrapper', config.duration, { x: config.wrapperX.from }, { x: config.wrapperX.to });
        TweenMax.fromTo('.s-greeting__canvas-wrapper-after, .s-greeting__canvas-wrapper-before, .s-greeting__canvas', config.duration, { x: config.innerX.from }, { x: config.innerX.to });
    };
    SlideController.prototype._handleLoad = function (callbacks, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        this._image.onload = function () {
            __WEBPACK_IMPORTED_MODULE_0__canvas_image__["b" /* draw */](_this._context, Object.assign({}, _this._sizes, { imageObject: _this._image }));
            setTimeout(function () {
                var width = window.innerWidth;
                _this._showSlide({
                    wrapperX: { from: -width, to: 0 },
                    innerX: { from: width, to: 0 },
                    duration: _this._duration.show
                });
            }, _this._delay.show * 1000);
            var firstStep = 900;
            var secondStep = firstStep + 400;
            var thirdStep = secondStep + 350;
            var context = {
                height: _this._blockSizes.canvas.height,
                width: _this._blockSizes.canvas.width,
                imageWidth: _this._blockSizes.image.width,
                imageHeight: _this._blockSizes.image.height,
                startImageX: _this._sizes.image.x,
                startImageY: _this._sizes.image.y,
                firstStep: firstStep, secondStep: secondStep, thirdStep: thirdStep
            };
            var wrapperCallbacks = callbacks.map(function (callback) {
                return callback.bind(context);
            });
            config.onStart && config.onStart();
            async.parallel(wrapperCallbacks, function () {
                config.onEnd && config.onEnd();
                _this._temp = _this._canvas.toDataURL();
            });
        };
    };
    SlideController.prototype._handleUnload = function (callbacks, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var firstStep = 0;
        var secondStep = firstStep + 200;
        var thirdStep = secondStep + 200;
        var fourthStep = thirdStep + 200;
        var context = {
            height: this._blockSizes.canvas.height,
            width: this._blockSizes.canvas.width,
            imageWidth: this._blockSizes.image.width,
            imageHeight: this._blockSizes.image.height,
            startImageX: this._sizes.image.x,
            startImageY: this._sizes.image.y,
            fullWidth: this._sizes.canvas.width,
            fullHeight: this._sizes.canvas.height,
            firstStep: firstStep, secondStep: secondStep, thirdStep: thirdStep, fourthStep: fourthStep
        };
        var wrapperCallbacks = callbacks.map(function (callback) {
            return callback.bind(context);
        });
        config.onStart && config.onStart();
        async.parallel(wrapperCallbacks, function () {
            config.onEnd && config.onEnd();
        });
        setTimeout(function () {
            var width = window.innerWidth;
            _this._showSlide({
                wrapperX: { from: 0, to: width },
                innerX: { from: 0, to: -width },
                duration: _this._duration.hide
            });
        }, this._delay.hide * 1000);
    };
    ;
    SlideController.prototype._customRectangleClearAnimation = function (config, callback) {
        __WEBPACK_IMPORTED_MODULE_1__canvas_rect__["c" /* animateClear */](this._context, config, callback);
    };
    return SlideController;
}());
//# sourceMappingURL=slideController.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimateDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimateDirective = (function () {
    function AnimateDirective(_el, _render) {
        this._el = _el;
        this._render = _render;
        this._defaultOffset = 0;
        this._defaultClassName = '';
    }
    AnimateDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.local = {
            elem: this._el.nativeElement,
            pos: this.offset || this._defaultOffset,
            className: this.className || this._defaultClassName,
            elemOffsetTop: null
        };
        setTimeout(function () {
            _this.calculatePosition(_this.local.elem);
            _this.onWindowScroll();
        }, 100);
    };
    AnimateDirective.prototype.onWindowScroll = function () {
        if (!this.local.elemOffsetTop) {
            return;
        }
        if (window.pageYOffset + window.innerHeight - this.local.pos > this.local.elemOffsetTop) {
            this.addClassName(this.local.className);
        }
    };
    AnimateDirective.prototype.calculatePosition = function (elem) {
        var coords = elem.getBoundingClientRect();
        var height = Math.max(document.documentElement.scrollHeight, window.innerHeight || 0);
        this.local.elemOffsetTop = coords.top + window.pageYOffset;
        if (window.innerHeight < 800) {
            this.local.pos = this.local.pos / 3;
        }
        if (height - 30 < coords.bottom + window.pageYOffset + this.local.pos) {
            this.local.elemOffsetTop = height - 30 - this.local.pos;
        }
    };
    AnimateDirective.prototype.addClassName = function (className) {
        this._render.setElementClass(this.local.elem, className, true);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('offset'),
        __metadata('design:type', Number)
    ], AnimateDirective.prototype, "offset", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('className'),
        __metadata('design:type', String)
    ], AnimateDirective.prototype, "className", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('window:scroll', ['$event']),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', void 0)
    ], AnimateDirective.prototype, "onWindowScroll", null);
    AnimateDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Directive */])({
            selector: '[animate]'
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Renderer */]) === 'function' && _b) || Object])
    ], AnimateDirective);
    return AnimateDirective;
    var _a, _b;
}());
//# sourceMappingURL=animate.directive.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orientationDetector_orientation_detector_directive__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slick_slick_directive__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animate_animate_directive__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animate_title_animate_title_directive__ = __webpack_require__(559);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Directives; });




var Directives = [
    __WEBPACK_IMPORTED_MODULE_2__animate_animate_directive__["a" /* AnimateDirective */],
    __WEBPACK_IMPORTED_MODULE_3__animate_title_animate_title_directive__["a" /* AnimateTitleDirective */],
    __WEBPACK_IMPORTED_MODULE_0__orientationDetector_orientation_detector_directive__["a" /* OrientationDetectorDirective */],
    __WEBPACK_IMPORTED_MODULE_1__slick_slick_directive__["a" /* SlickDirective */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrientationDetectorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrientationDetectorDirective = (function () {
    function OrientationDetectorDirective(_renderer) {
        this._renderer = _renderer;
    }
    OrientationDetectorDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._setOrientation();
        if (device.desktop()) {
            this._dispose = this._renderer.listen(window, 'resize', function () { return _this._setOrientation(); });
        }
        else {
            this._dispose = this._renderer.listen(window, 'orientationchange', function () { return _this._setOrientation(); });
        }
    };
    OrientationDetectorDirective.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    OrientationDetectorDirective.prototype._setOrientation = function () {
        setTimeout(function () {
            var html = document.documentElement;
            if (window.innerHeight >= window.innerWidth) {
                html.classList.add('_portrait');
                html.classList.remove('_landscape');
            }
            else {
                html.classList.add('_landscape');
                html.classList.remove('_portrait');
            }
        }, 0);
    };
    OrientationDetectorDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Directive */])({
            selector: '[orientationDetector]'
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Renderer */]) === 'function' && _a) || Object])
    ], OrientationDetectorDirective);
    return OrientationDetectorDirective;
    var _a;
}());
//# sourceMappingURL=orientation-detector.directive.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlickDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlickDirective = (function () {
    function SlickDirective(_el) {
        this._el = _el;
        this.getSlickElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
    }
    SlickDirective.prototype.ngAfterViewInit = function () {
        this.$slick = $(this._el.nativeElement);
        this.statusField = this.$slick.parent().find('.sl-samples__pages');
        if (this.isCounterInit) {
            this.counter(this.$slick);
        }
        this.$slick.slick(this.config);
        this.getSlickElement.emit(this.$slick);
        // this.$slick.slick('setPosition');
        // setInterval(() => {
        //   console.log('111');
        //   console.log(this.$slick);
        //   this.$slick.slick('setPosition');
        // }, 1000);
    };
    SlickDirective.prototype.counter = function ($slick) {
        var _this = this;
        $slick
            .on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var index = (currentSlide ? currentSlide : 0) + 1;
            _this.statusField.text(index + '/' + slick.slideCount);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Boolean)
    ], SlickDirective.prototype, "isCounterInit", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', Object)
    ], SlickDirective.prototype, "config", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]) === 'function' && _a) || Object)
    ], SlickDirective.prototype, "getSlickElement", void 0);
    SlickDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Directive */])({
            selector: '[appSlick]'
        }),
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */]) === 'function' && _b) || Object])
    ], SlickDirective);
    return SlickDirective;
    var _a, _b;
}());
//# sourceMappingURL=slick.directive.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slide; });
var Slide = (function () {
    function Slide(canvas, config, type) {
        this._states = {
            nextState: null, prevState: null, current: null
        };
        this._states.nextState = config.nextState;
        this._states.prevState = config.prevState;
        this._states.current = config.state;
        this._title = config.title;
        this._subtitle = config.subtitle;
        this._comment = config.comment;
        this._controller = config.controllerFactory[type].createController(canvas, config);
    }
    Object.defineProperty(Slide.prototype, "nextState", {
        get: function () {
            return this._states.nextState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "prevState", {
        get: function () {
            return this._states.prevState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "state", {
        get: function () {
            return this._states.current;
        },
        enumerable: true,
        configurable: true
    });
    Slide.prototype.hide = function (config) {
        this._controller.hide(config);
    };
    Slide.prototype.show = function (config) {
        this._controller.show(config);
    };
    Object.defineProperty(Slide.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "subtitle", {
        get: function () {
            return this._subtitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        enumerable: true,
        configurable: true
    });
    return Slide;
}());
//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__greeting_greeting_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_service_modal_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_app_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });



var Services = [
    __WEBPACK_IMPORTED_MODULE_0__greeting_greeting_service__["a" /* GreetingService */],
    __WEBPACK_IMPORTED_MODULE_1__modal_service_modal_service__["a" /* ModalService */],
    __WEBPACK_IMPORTED_MODULE_2__app_service_app_service__["a" /* AppService */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animate; });
function draw(context, config) {
    var _a = config.canvas.offset || {}, _b = _a.x1, x1 = _b === void 0 ? 0 : _b, _c = _a.y1, y1 = _c === void 0 ? 0 : _c, _d = _a.x2, x2 = _d === void 0 ? 0 : _d, _e = _a.y2, y2 = _e === void 0 ? 0 : _e;
    context.drawImage(config.imageObject, config.image.x, config.image.y, config.image.width, config.image.height, config.canvas.x + x1, config.canvas.y + y1, config.canvas.width - x1 - x2, config.canvas.height - y1 - y2);
}
function animate(context, config, callback) {
    var start = config.start;
    var end = config.end;
    var onComplete = config.onComplete;
    var current = {
        opacity: config.start.opacityFill,
        imageX: start.image.x, imageY: start.image.y, imageHeight: start.image.height, imageWidth: start.image.width,
        canvasX: start.canvas.x, canvasY: start.canvas.y, canvasHeight: start.canvas.height, canvasWidth: start.canvas.width
    };
    setTimeout(function () {
        TweenMax.to(current, config.duration / 1000, {
            ease: config.ease || Expo.easeInOut,
            opacity: config.end.opacityFill,
            imageX: end.image.x, imageY: end.image.y,
            imageHeight: end.image.height, imageWidth: end.image.width,
            canvasX: end.canvas.x, canvasY: end.canvas.y,
            canvasHeight: end.canvas.height, canvasWidth: end.canvas.width,
            onUpdate: function () {
                tick(context, current, start, config);
            },
            onComplete: function () { return onComplete && onComplete(current, config, callback) || callback(); }
        });
    }, config.delay || 0);
}
function tick(context, current, start, config) {
    config.onStartRedraw && config.onStartRedraw(context, current, config);
    draw(context, {
        canvas: { x: current.canvasX, y: current.canvasY, width: current.canvasWidth, height: current.canvasHeight },
        image: { x: current.imageX, y: current.imageY, width: current.imageWidth, height: current.imageHeight },
        imageObject: config.image
    });
    config.onEndRedraw && config.onEndRedraw(context, current, config);
}

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_use_svg_use_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__no_index_no_index_component__ = __webpack_require__(568);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppShared; });


var AppShared = [
    __WEBPACK_IMPORTED_MODULE_0__svg_use_svg_use_component__["a" /* SvgUseComponent */],
    __WEBPACK_IMPORTED_MODULE_1__no_index_no_index_component__["a" /* NoIndexComponent */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoIndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoIndexComponent = (function () {
    function NoIndexComponent() {
    }
    NoIndexComponent.prototype.ngOnInit = function () {
    };
    NoIndexComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'no-index',
            template: __webpack_require__(794),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(757)]
        }),
        __metadata('design:paramtypes', [])
    ], NoIndexComponent);
    return NoIndexComponent;
}());
//# sourceMappingURL=no-index.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slideController__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingSlideControllerFactory; });
/* unused harmony export BuildingSlideController */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var BuildingSlideControllerFactory = (function () {
    function BuildingSlideControllerFactory() {
    }
    BuildingSlideControllerFactory.prototype.createController = function (canvas, config) {
        return new BuildingSlideController(canvas, config);
    };
    return BuildingSlideControllerFactory;
}());
var BuildingSlideController = (function (_super) {
    __extends(BuildingSlideController, _super);
    function BuildingSlideController(canvas, config) {
        _super.call(this, canvas, config);
    }
    BuildingSlideController.prototype.show = function (config) {
        _super.prototype.show.call(this);
        var _this = this;
        var delay = 100;
        _super.prototype._handleLoad.call(this, [
            /*
             * Row 0
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 0
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: 0, width: 0, height: height },
                        end: { x: 0, y: 0, width: width * 5 - 120, height: height },
                        duration: 900, delay: 0, ease: Expo.easeIn
                    }, callback); },
                    // Column 4
                    // Color: orange
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 5 * width - 120, y: 0 },
                        end: { width: 10, height: height, x: 5 * width - 120, y: 0 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: '#E96621', duration: 20 }, callback); },
                    // Column 4
                    // Color: red #C82229
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 5 * width - 110, y: 0 },
                        end: { width: 15, height: height, x: 5 * width - 110, y: 0 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: '#C82229', duration: 40 }, callback); },
                    // Column 4
                    // Color: black
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 5 * width - 95, y: 0 },
                        end: { width: 95, height: height, x: 5 * width - 95, y: 0 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: '#000', duration: 60 }, callback); },
                    // Column 5
                    // Color: black, opacity 0.5
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 5 * width, y: 0 },
                        end: { width: 45, height: height, x: 5 * width, y: 0 }
                    }, _this._sizes, { ease: Expo.easeOut, fill: '#000', opacity: 0.5, duration: 50 }, callback); }
                ], callback);
            },
            /*
             * Row 1
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 1
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: height, width: 0, height: height },
                        end: { x: 0, y: height, width: width * 3, height: height },
                        duration: 1100, delay: delay, ease: Expo.easeIn
                    }, callback); },
                    // Column 3
                    // Color: red #C82229
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 3 * width, y: height },
                        end: { width: 45, height: height, x: 3 * width, y: height }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: '#C82229', duration: 100 }, callback); },
                    // Column 3
                    // Color: black
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 3 * width + 45, y: height },
                        end: { width: 15, height: height, x: 3 * width + 45, y: height }
                    }, _this._sizes, { ease: Expo.easeOut, isNotRedrawImage: true, fill: '#000', duration: 100 }, callback); }
                ], callback);
            },
            /*
             * Row 2
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 2
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: height * 2, width: 0, height: height },
                        end: { x: 0, y: height * 2, width: width * 4 - 57, height: height },
                        duration: 1100, delay: delay * 2, ease: Expo.easeIn
                    }, callback); },
                    // Column 2
                    // Color: pink
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 4 * width - 57, y: height * 2 },
                        end: { width: 9, height: height, x: 4 * width - 57, y: height * 2 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: '#FFD2D4', duration: 50 }, callback); },
                    // Column 3
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: width * 4 - 48, y: height * 2, width: 0, height: height },
                        end: { x: width * 4 - 48, y: height * 2, width: 30, height: height },
                        duration: 100, delay: 0, ease: Power0.easeNone
                    }, callback); },
                    // Column 4
                    // Color: red #751017
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 4 * width - 18, y: height * 2 },
                        end: { width: 18, height: height, x: 4 * width - 18, y: height * 2 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: '#751017', duration: 100 }, callback); },
                    // Column 4
                    // Color: black, opacity 0.5
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 4 * width, y: height * 2 },
                        end: { width: 62, height: height, x: 4 * width, y: height * 2 }
                    }, _this._sizes, { ease: Expo.easeOut, fill: '#000', opacity: 0.5, duration: 150 }, callback); }
                ], callback);
            },
            /*
             * Row 3
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 3
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: height * 3, width: 0, height: height },
                        end: { x: 0, y: height * 3, width: width * 4 - 18, height: height },
                        duration: 1100, delay: delay * 3, ease: Expo.easeIn
                    }, callback); },
                    // Column 4
                    // Color: red #751017
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 4 * width - 18, y: height * 3 },
                        end: { width: 18, height: height, x: 4 * width - 18, y: height * 3 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: '#751017', duration: 100 }, callback); },
                    // Column 8
                    // Color: pink
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 8 * width - 130, y: height * 3 },
                        end: { width: 8, height: height, x: 8 * width - 130, y: height * 3 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: '#FFD2D4', duration: 50 }, callback); },
                    // Column 8
                    // Color: black, opacity: 0.5
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 8 * width - 122, y: height * 3 },
                        end: { width: 92, height: height, x: 8 * width - 122, y: height * 3 }
                    }, _this._sizes, { ease: Expo.easeOut, fill: '#000', opacity: 0.5, duration: 250, offset: { x: 0, y: 4 } }, callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 4
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: height * 4, width: 0, height: height },
                        end: { x: 0, y: height * 4, width: width * 3 - 46, height: height },
                        duration: 1100, delay: delay * 4, ease: Expo.easeIn
                    }, callback); },
                    // Column 3
                    // Color: red #C82229
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3 - 46, y: height * 4 },
                        end: { width: 8, height: height, x: width * 3 - 46, y: height * 4 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: '#C82229', duration: 50 }, callback); },
                    // Column 3
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: width * 3 - 38, y: height * 4, width: 0, height: height },
                        end: { x: width * 3 - 38, y: height * 4, width: 38, height: height },
                        duration: 50, delay: 0, ease: Power0.easeNone
                    }, callback); },
                    // Column 4
                    // Color: pink
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3, y: height * 4 },
                        end: { width: 15, height: height, x: width * 3, y: height * 4 }
                    }, _this._sizes, { ease: Expo.easeOut, isNotRedrawImage: true, fill: '#E96621', duration: 50 }, callback); },
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                _this._customRectangleClearAnimation({
                    start: { x: 0, y: height * 5, width: 0, height: height },
                    end: { x: 0, y: height * 5, width: width * 4, height: height },
                    duration: 1100, delay: delay * 5, ease: Expo.easeIn
                }, callback);
            }
        ], config);
    };
    BuildingSlideController.prototype.hide = function (config) {
        _super.prototype.hide.call(this);
        var _this = this;
        var animationDuration = 1000;
        _super.prototype._handleUnload.call(this, [
            /*
             * Rows 0
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    // Column 5
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 3 * width + width / 4, y: 0 },
                        end: { width: fullWidth - 3 * width - width / 4, height: height, x: 3 * width + width / 4, y: 0 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 1
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 4
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width + width / 16, y: height },
                        end: { width: fullWidth - width * 2 - width / 16, height: height, x: 2 * width + width / 16, y: height },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 2
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, secondStep = _a.secondStep;
                async.parallel([
                    // Column 4
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 3 * width, y: height * 2 },
                        end: { width: fullWidth - width * 3, height: height, x: 3 * width, y: height * 2 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 3
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width, y: height * 3 },
                        end: { width: fullWidth - width * 2, height: height, x: 2 * width, y: height * 3 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width, y: height * 4 },
                        end: { width: fullWidth - width * 2, height: height, x: 2 * width, y: height * 4 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    // Column 5
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: width * 3, y: height * 5 },
                        end: { width: fullWidth - width * 3, height: height, x: width * 3, y: height * 5 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            }
        ], config);
    };
    return BuildingSlideController;
}(__WEBPACK_IMPORTED_MODULE_0__slideController__["a" /* SlideController */]));
//# sourceMappingURL=buildingSlideController.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slideController__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_rect__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSlideControllerFactory; });
/* unused harmony export ContactSlideController */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var ContactSlideControllerFactory = (function () {
    function ContactSlideControllerFactory() {
    }
    ContactSlideControllerFactory.prototype.createController = function (canvas, config) {
        return new ContactSlideController(canvas, config);
    };
    return ContactSlideControllerFactory;
}());
var ContactSlideController = (function (_super) {
    __extends(ContactSlideController, _super);
    function ContactSlideController(canvas, config) {
        _super.call(this, canvas, config);
    }
    ContactSlideController.prototype.show = function (config) {
        _super.prototype.show.call(this);
        var _this = this;
        _super.prototype._handleLoad.call(this, [
            /*
             * Row 0
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight, startImageX = _a.startImageX, startImageY = _a.startImageY;
                async.parallel([
                    // Column 4-5
                    // Image animate
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 4 + 55, y: 0, width: 0, height: height },
                            image: {
                                x: imageWidth * 4 + startImageX + 70,
                                y: startImageY,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 4 + 55, y: 0, width: width * 2 - 70, height: height },
                            image: {
                                x: imageWidth * 4 + startImageX + 70,
                                y: startImageY,
                                width: imageWidth * 2 - 80,
                                height: imageHeight
                            },
                        },
                        duration: 1300,
                        delay: firstStep,
                        ease: Expo.easeInOut
                    }),
                    // Column 6
                    function (callback) { return async.series([
                        // Color: red #751017
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 6 * width - 15, y: 0 },
                            end: { width: 5, height: height, x: 6 * width - 15, y: 0 }
                        }, _this._sizes, {
                            ease: Expo.easeIn,
                            isNotRedrawImage: true,
                            fill: '#751017',
                            duration: 150,
                            delay: firstStep + 300
                        }, callback); },
                        // Color: pink
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 6 * width - 10, y: 0 },
                            end: { width: 10, height: height, x: 6 * width - 10, y: 0 }
                        }, _this._sizes, {
                            ease: Power0.easeNone,
                            isNotRedrawImage: true,
                            fill: '#FFD2D4',
                            duration: 150
                        }, callback); },
                        // Color: black, opacity: 0.4
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 6 * width, y: 0 },
                            end: { width: 125, height: height, x: 6 * width, y: 0 }
                        }, _this._sizes, {
                            ease: Expo.easeOut,
                            fill: '#000',
                            opacity: 0.4,
                            duration: 300
                        }, callback); }
                    ], callback); },
                    // Column 7
                    // Color: red #C82229
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 7 * width + 65, y: 0 },
                        end: { width: width - 65, height: height, x: 7 * width + 65, y: 0 }
                    }, _this._sizes, {
                        ease: Expo.easeInOut,
                        isNotRedrawImage: true,
                        fill: '#C82229',
                        duration: 400,
                        delay: firstStep + 300
                    }, callback); },
                ], callback);
            },
            /*
             * Row 1
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // ROW 1
                    // Column 4
                    function (callback) { return async.series([
                        // Color: orange
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 4 * width - 55, y: height },
                            end: { width: 50, height: height, x: 4 * width - 55, y: height }
                        }, _this._sizes, {
                            ease: Expo.easeIn, isNotRedrawImage: true,
                            fill: '#E96621', opacity: 1, duration: 200, delay: firstStep + 200
                        }, callback); },
                        // Color: red #751017
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 4 * width - 5, y: height },
                            end: { width: 5, height: height, x: 4 * width - 5, y: height }
                        }, _this._sizes, {
                            ease: Expo.easeOut, isNotRedrawImage: true,
                            fill: '#751017', opacity: 1, duration: 150
                        }, callback); },
                    ], callback); },
                    // Column 7
                    function (callback) { return async.series([
                        // Color: red #C82229
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 7 * width - 5, y: height },
                            end: { width: 5, height: height, x: 7 * width - 5, y: height }
                        }, _this._sizes, {
                            ease: Expo.easeIn, isNotRedrawImage: true,
                            fill: '#C82229', opacity: 1, duration: 150, delay: firstStep + 200
                        }, callback); },
                        // Color: black
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 7 * width, y: height },
                            end: { width: 30, height: height, x: 7 * width, y: height }
                        }, _this._sizes, {
                            ease: Expo.easeOut, isNotRedrawImage: true,
                            fill: '#000', opacity: 1, duration: 200
                        }, callback); },
                    ], callback); }
                ], callback);
            },
            /*
             * Row 2
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // ROW 2
                    // Column 7
                    // Color: orange
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 7 * width - 45, y: height * 2 },
                        end: { width: 5, height: height, x: 7 * width - 45, y: height * 2 }
                    }, _this._sizes, { isNotRedrawImage: true, fill: '#E96621', duration: 300, delay: firstStep }, callback); }
                ], callback);
            },
            /*
             * Row 3
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // ROW 3
                    // Column: 3-4
                    // Color: black, opacity: 0.4
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 4 * width - 70, y: height * 3 },
                        end: { width: width + 10, height: height, x: 4 * width - 70, y: height * 3 }
                    }, _this._sizes, {
                        ease: Expo.easeIn,
                        fill: '#000',
                        duration: 300,
                        opacity: 0.4,
                        delay: firstStep
                    }, callback); },
                    // Column: 5
                    // Color: pink
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 5 * width - 60, y: height * 3 },
                        end: { width: 10, height: height, x: 5 * width - 60, y: height * 3 }
                    }, _this._sizes, {
                        isNotRedrawImage: true,
                        fill: '#FFD2D4',
                        ease: Power0.easeNone,
                        duration: 100
                    }, callback); },
                    // Column: 5
                    // Color: red #C82229
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 5 * width - 50, y: height * 3 },
                        end: { width: 20, height: height, x: 5 * width - 50, y: height * 3 }
                    }, _this._sizes, {
                        isNotRedrawImage: true,
                        fill: '#C82229',
                        ease: Expo.easeOut,
                        duration: 200
                    }, callback); },
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight, startImageX = _a.startImageX, startImageY = _a.startImageY;
                async.parallel([
                    // ROW 4
                    // Column 3-7
                    function (callback) { return async.series([
                        // Image animate
                        _this._rectangleOffsetAnimate({
                            start: {
                                canvas: { x: width * 3 + 110, y: height * 4, width: 0, height: height },
                                image: {
                                    x: imageWidth * 3 + 110 + startImageX - 15,
                                    y: imageHeight * 4 + startImageY,
                                    width: 0,
                                    height: imageHeight
                                },
                            },
                            end: {
                                canvas: { x: width * 3 + 110, y: height * 4, width: width * 3, height: height },
                                image: {
                                    x: imageWidth * 3 + 110 + startImageX - 15,
                                    y: imageHeight * 4 + startImageY,
                                    width: imageWidth * 3,
                                    height: imageHeight
                                },
                            },
                            duration: 780,
                            ease: Expo.easeIn,
                            delay: firstStep
                        }),
                        function (callback) { return async.parallel([
                            // Image animate with black fill
                            _this._rectangleOffsetAnimate({
                                start: {
                                    canvas: { x: width * 6, y: height * 4, width: 0, height: height },
                                    image: {
                                        x: imageWidth * 6 + startImageX - 15,
                                        y: imageHeight * 4 + startImageY,
                                        width: 0,
                                        height: imageHeight
                                    },
                                },
                                end: {
                                    canvas: { x: width * 6, y: height * 4, width: width * 2, height: height },
                                    image: {
                                        x: imageWidth * 6 + startImageX - 15,
                                        y: imageHeight * 4 + startImageY,
                                        width: imageWidth * 2,
                                        height: imageHeight
                                    },
                                },
                                duration: 520,
                                ease: Expo.easeOut,
                                onEndRedraw: function (context, current) {
                                    __WEBPACK_IMPORTED_MODULE_1__canvas_rect__["a" /* draw */](context, {
                                        x: current.canvasX, y: current.canvasY, width: current.canvasWidth, height: current.canvasHeight,
                                        opacity: 0.4, fill: '#000'
                                    });
                                }
                            }),
                            // Column 6
                            // Color: red #751017
                            function (callback) { return _this._customRectangleAnimation({
                                start: { width: 0, height: height, x: 6 * width - 40, y: height * 4 },
                                end: { width: 10, height: height, x: 6 * width - 40, y: height * 4 }
                            }, _this._sizes, { ease: Expo.easeIn, isNotRedrawImage: true, fill: '#751017', duration: 300 }, callback); },
                            // Column 6
                            // Color: red #C82229
                            function (callback) { return _this._customRectangleAnimation({
                                start: { width: 0, height: height, x: 6 * width - 30, y: height * 4 },
                                end: { width: 30, height: height, x: 6 * width - 30, y: height * 4 }
                            }, _this._sizes, { ease: Expo.easeOut, isNotRedrawImage: true, fill: '#C82229', duration: 300, delay: 150 }, callback); }
                        ], callback); }
                    ], callback); },
                    // Column 3
                    function (callback) { return async.series([
                        // Color: red #751017
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 3 * width - 50, y: height * 4 },
                            end: { width: 5, height: height, x: 3 * width - 50, y: height * 4 }
                        }, _this._sizes, { ease: Expo.easeIn, isNotRedrawImage: true, fill: '#751017', duration: 250, delay: firstStep }, callback); },
                        // Color: red #C82229
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 3 * width - 45, y: height * 4 },
                            end: { width: 125, height: height, x: 3 * width - 45, y: height * 4 }
                        }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: '#C82229', duration: 300 }, callback); },
                        // Color: black
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 3 * width + 80, y: height * 4 },
                            end: { width: 30, height: height, x: 3 * width + 80, y: height * 4 }
                        }, _this._sizes, { ease: Expo.easeOut, isNotRedrawImage: true, fill: '#000', duration: 200 }, callback); },
                    ], callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // ROW 5
                    // Column 3-4
                    // Color: black
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 4 * width - 115, y: height * 5 },
                        end: { width: 45, height: height, x: 4 * width - 115, y: height * 5 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Expo.easeIn, fill: '#000', duration: 300, delay: firstStep,
                    }, callback); },
                    // Column 3-4
                    // Color: red #751017
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 4 * width - 70, y: height * 5 },
                        end: { width: 60, height: height, x: 4 * width - 70, y: height * 5 }
                    }, _this._sizes, { ease: Expo.easeOut, isNotRedrawImage: true, fill: '#751017', duration: 350 }, callback); },
                    // Column 3-4
                    // Color: pink
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 4 * width - 10, y: height * 5 },
                        end: { width: 10, height: height, x: 4 * width - 10, y: height * 5 }
                    }, _this._sizes, { ease: Expo.easeInOut, isNotRedrawImage: true, fill: '#FFD2D4', duration: 100 }, callback); },
                ], callback);
            }
        ], config);
    };
    ContactSlideController.prototype.hide = function (config) {
        _super.prototype.hide.call(this);
        var _this = this;
        var animationDuration = 1000;
        _super.prototype._handleUnload.call(this, [
            /*
             * Rows 0
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    // Column 5
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 3 * width + width / 4, y: 0 },
                        end: { width: fullWidth - 3 * width - width / 4, height: height, x: 3 * width + width / 4, y: 0 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 1
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 4
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width + 10, y: height },
                        end: { width: fullWidth - width * 2 - 10, height: height, x: 2 * width + 10, y: height },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 2
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, secondStep = _a.secondStep;
                async.parallel([
                    // Column 4
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 3 * width, y: height * 2 },
                        end: { width: fullWidth - width * 3, height: height, x: 3 * width, y: height * 2 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 3
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width, y: height * 3 },
                        end: { width: fullWidth - width * 2, height: height, x: 2 * width, y: height * 3 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width, y: height * 4 },
                        end: { width: fullWidth - width * 2, height: height, x: 2 * width, y: height * 4 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    // Column 5
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: width * 3, y: height * 5 },
                        end: { width: fullWidth - width * 3, height: height, x: width * 3, y: height * 5 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            }
        ], config);
    };
    return ContactSlideController;
}(__WEBPACK_IMPORTED_MODULE_0__slideController__["a" /* SlideController */]));
//# sourceMappingURL=contactSlideController.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slideController__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_rect__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_colors__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSlideControllerFactory; });
/* unused harmony export HomeSlideController */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var HomeSlideControllerFactory = (function () {
    function HomeSlideControllerFactory() {
    }
    HomeSlideControllerFactory.prototype.createController = function (canvas, config) {
        return new HomeSlideController(canvas, config);
    };
    return HomeSlideControllerFactory;
}());
var HomeSlideController = (function (_super) {
    __extends(HomeSlideController, _super);
    function HomeSlideController(canvas, config) {
        _super.call(this, canvas, config);
    }
    HomeSlideController.prototype.show = function (config) {
        _super.prototype.show.call(this);
        var _this = this;
        _super.prototype._handleLoad.call(this, [
            /*
             * Row 0
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.parallel([
                    // Column 4-7
                    function (callback) { return async.series([
                        // Column 3.75 - 6
                        // Image animate
                        _this._rectangleOffsetAnimate({
                            start: {
                                canvas: { x: width * 3.75, y: 0, width: 0, height: height },
                                image: {
                                    x: imageWidth * 3.5,
                                    y: 0,
                                    width: 0,
                                    height: imageHeight
                                },
                            },
                            end: {
                                canvas: { x: width * 3.75, y: 0, width: width * 2.25, height: height },
                                image: {
                                    x: imageWidth * 3.5,
                                    y: 0,
                                    width: imageWidth * 2.25,
                                    height: imageHeight
                                },
                            },
                            duration: 700,
                            delay: firstStep,
                            ease: Expo.easeIn
                        }),
                        // Column 6
                        // Color: orange
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 6 * width, y: 0 },
                            end: { width: width / 20, height: height, x: 6 * width, y: 0 }
                        }, _this._sizes, {
                            ease: Power0.easeNone,
                            isNotRedrawImage: true,
                            fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9,
                            duration: 50
                        }, callback); },
                        // Column 6
                        // Color: red75
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 6.05 * width, y: 0 },
                            end: { width: width / 8, height: height, x: 6.05 * width, y: 0 }
                        }, _this._sizes, {
                            ease: Power0.easeNone,
                            isNotRedrawImage: true,
                            fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75,
                            duration: 50
                        }, callback); },
                        // Column 6
                        // Image animate
                        _this._rectangleOffsetAnimate({
                            start: {
                                canvas: { x: width * 6.175, y: 0, width: 0, height: height },
                                image: {
                                    x: imageWidth * 5.925,
                                    y: 0,
                                    width: 0,
                                    height: imageHeight
                                },
                            },
                            end: {
                                canvas: { x: width * 6.175, y: 0, width: width / 16 * 9, height: height },
                                image: {
                                    x: imageWidth * 5.925,
                                    y: 0,
                                    width: imageWidth / 16 * 9,
                                    height: imageHeight
                                },
                            },
                            duration: 100,
                            ease: Power0.easeNone,
                            onEndRedraw: function (context, current) {
                                __WEBPACK_IMPORTED_MODULE_1__canvas_rect__["a" /* draw */](context, {
                                    x: current.canvasX, y: current.canvasY, width: current.canvasWidth, height: current.canvasHeight, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, opacity: 0.5
                                });
                            }
                        }),
                        // Column 6
                        // Image animate
                        _this._rectangleOffsetAnimate({
                            start: {
                                canvas: { x: width * 6.175 + width / 16 * 9, y: 0, width: 0, height: height },
                                image: {
                                    x: imageWidth * 6.5,
                                    y: 0,
                                    width: 0,
                                    height: imageHeight
                                },
                            },
                            end: {
                                canvas: { x: width * 6.175 + width / 16 * 9, y: 0, width: width * 0.2, height: height },
                                image: {
                                    x: imageWidth * 6.5,
                                    y: 0,
                                    width: imageWidth * 0.2,
                                    height: imageHeight
                                },
                            },
                            duration: 300,
                            ease: Expo.easeOut
                        }),
                    ], callback); },
                    // Column 7
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 7.75 * width, y: 0 },
                        end: { width: width / 4, height: height, x: 7.75 * width, y: 0 }
                    }, _this._sizes, {
                        ease: Expo.easeInOut,
                        isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8,
                        duration: 300,
                        delay: firstStep + 300
                    }, callback); },
                ], callback);
            },
            /*
             * Row 1
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.series([
                    // ROW 1
                    // Column 3
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3.2, y: height },
                        end: { width: width / 20, height: height, x: width * 3.2, y: height }
                    }, _this._sizes, {
                        ease: Expo.easeIn,
                        isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9,
                        duration: 150,
                        delay: firstStep
                    }, callback); },
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 3.25, y: height, width: 0, height: height },
                            image: {
                                x: imageWidth * 3.5,
                                y: imageHeight,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 3.25, y: height, width: width * 0.75, height: height },
                            image: {
                                x: imageWidth * 3.5,
                                y: imageHeight,
                                width: imageWidth * 0.75,
                                height: imageHeight
                            },
                        },
                        duration: 250,
                        ease: Power0.easeNone
                    }),
                    // Column 4
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 4, y: height },
                        end: { width: width / 10, height: height, x: width * 4, y: height }
                    }, _this._sizes, {
                        ease: Power0.easeNone,
                        isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8,
                        duration: 100
                    }, callback); },
                    // Column 4
                    // Color: pinkFF
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 4.1, y: height },
                        end: { width: width / 20, height: height, x: width * 4.1, y: height }
                    }, _this._sizes, {
                        ease: Expo.easeNone,
                        isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF,
                        duration: 100
                    }, callback); },
                ], callback);
            },
            /*
             * Row 2
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // ROW 2
                    // Column 7
                    // Color: pinkFF
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 6.66 * width, y: height * 2 },
                        end: { width: width / 20, height: height, x: 6.66 * width, y: height * 2 }
                    }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 200, delay: firstStep, ease: Expo.easeIn }, callback); },
                    // Column 7
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 6.71 * width, y: height * 2 },
                        end: { width: width * 0.29, height: height, x: 6.71 * width, y: height * 2 }
                    }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 200, ease: Expo.easeOut }, callback); }
                ], callback);
            },
            /*
             * Row 3
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.parallel([
                    // ROW 3
                    // Column 3-4
                    function (callback) { return async.series([
                        // Column 3
                        _this._rectangleOffsetAnimate({
                            start: {
                                canvas: { x: width * 3, y: height * 3, width: 0, height: height },
                                image: {
                                    x: imageWidth * 3.25,
                                    y: imageHeight * 3,
                                    width: 0,
                                    height: imageHeight
                                },
                            },
                            end: {
                                canvas: { x: width * 3, y: height * 3, width: width, height: height },
                                image: {
                                    x: imageWidth * 3.25,
                                    y: imageHeight * 3,
                                    width: imageWidth,
                                    height: imageHeight
                                },
                            },
                            duration: 550,
                            ease: Expo.easeIn,
                            delay: firstStep
                        }),
                        // Column 4
                        // Color: redC8
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 4, y: height * 3 },
                            end: { width: width / 10, height: height, x: width * 4, y: height * 3 }
                        }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 200, ease: Expo.easeOut }, callback); },
                        // Column 4
                        // Color: black
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 4.1, y: height * 3 },
                            end: { width: width / 20, height: height, x: width * 4.1, y: height * 3 }
                        }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 100, ease: Expo.easeOut }, callback); }
                    ], callback); },
                    // Column 7
                    function (callback) { return async.series([
                        // Column 7
                        // Color: redC8
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 7.45, y: height * 3 },
                            end: { width: width / 20, height: height, x: width * 7.45, y: height * 3 }
                        }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 150, ease: Expo.easeIn, delay: firstStep }, callback); },
                        // Column 7
                        // Color: orangeE9
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 7.5, y: height * 3 },
                            end: { width: width / 10, height: height, x: width * 7.5, y: height * 3 }
                        }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 150, ease: Expo.easeOut }, callback); },
                    ], callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // ROW 4
                    // Column: 2-3
                    function (callback) { return async.series([
                        // Column 2
                        // Color: red75
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 2.75 * width, y: height * 4 },
                            end: { width: width * 0.2, height: height, x: 2.75 * width, y: height * 4 }
                        }, _this._sizes, { ease: Expo.easeIn, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 250, delay: firstStep }, callback); },
                        // Column 2
                        // Color: pinkFF
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 2.95 * width, y: height * 4 },
                            end: { width: width / 20, height: height, x: 2.95 * width, y: height * 4 }
                        }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 100 }, callback); },
                        // Column 3
                        // Color: black, opacity: 0.4
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 3 * width, y: height * 4 },
                            end: { width: width * 1.1, height: height, x: 3 * width, y: height * 4 }
                        }, _this._sizes, { ease: Expo.easeOut, opacity: 0.4, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 400 }, callback); },
                    ], callback); },
                    // Column: 5
                    function (callback) { return async.series([
                        // Column 2
                        // Color: black, opacity: 0.4
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 5, y: height * 4 },
                            end: { width: width * 0.2, height: height, x: width * 5, y: height * 4 }
                        }, _this._sizes, { ease: Expo.easeIn, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 250, opacity: 0.4, delay: firstStep }, callback); },
                        // Column 2
                        // Color: orangeE9
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 5.2, y: height * 4 },
                            end: { width: width * 0.05, height: height, x: width * 5.2, y: height * 4 }
                        }, _this._sizes, { ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 100, isNotRedrawImage: true }, callback); },
                    ], callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.series([
                    // ROW 5
                    // Column 3
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 3.5 * width, y: height * 5 },
                        end: { width: width / 20, height: height, x: 3.5 * width, y: height * 5 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Expo.easeIn, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 200, delay: firstStep,
                    }, callback); },
                    // Column 3-4
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 3.55, y: height * 5, width: 0, height: height },
                            image: {
                                x: imageWidth * 3.40,
                                y: imageHeight * 5,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 3.55, y: height * 5, width: width * 1.7, height: height },
                            image: {
                                x: imageWidth * 3.40,
                                y: imageHeight * 5,
                                width: imageWidth * 1.7,
                                height: imageHeight
                            },
                        },
                        duration: 300,
                        ease: Power0.easeNone
                    }),
                    // Column 5
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 5.25 * width, y: height * 5 },
                        end: { width: width * 0.3, height: height, x: 5.25 * width, y: height * 5 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 100,
                    }, callback); },
                    // Column 5
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 5.55 * width, y: height * 5 },
                        end: { width: width / 20, height: height, x: 5.55 * width, y: height * 5 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 100,
                    }, callback); },
                    // Column 5
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 5.6, y: height * 5, width: 0, height: height },
                            image: {
                                x: imageWidth * 5.45,
                                y: imageHeight * 5,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 5.6, y: height * 5, width: width * 0.4, height: height },
                            image: {
                                x: imageWidth * 5.45,
                                y: imageHeight * 5,
                                width: imageWidth * 0.4,
                                height: imageHeight
                            },
                        },
                        duration: 50,
                        ease: Power0.easeNone
                    }),
                    // Column 6
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 6 * width, y: height * 5 },
                        end: { width: width / 20, height: height, x: 6 * width, y: height * 5 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 50,
                    }, callback); },
                    // Column 6-7
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 6.05, y: height * 5, width: 0, height: height },
                            image: {
                                x: imageWidth * 5.9,
                                y: imageHeight * 5,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 6.05, y: height * 5, width: width * 1.5, height: height },
                            image: {
                                x: imageWidth * 5.90,
                                y: imageHeight * 5,
                                width: imageWidth * 1.5,
                                height: imageHeight
                            },
                        },
                        duration: 250,
                        ease: Power0.easeOut
                    }),
                ], callback);
            }
        ], config);
    };
    HomeSlideController.prototype.hide = function (config) {
        _super.prototype.hide.call(this);
        var _this = this;
        var animationDuration = 1000;
        _super.prototype._handleUnload.call(this, [
            /*
             * Rows 0
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    // Column 5
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 3 * width + width / 4, y: 0 },
                        end: { width: fullWidth - 3 * width - width / 4, height: height, x: 3 * width + width / 4, y: 0 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 1
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 4
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width + 10, y: height },
                        end: { width: fullWidth - width * 2 - 10, height: height, x: 2 * width + 10, y: height },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 2
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, secondStep = _a.secondStep;
                async.parallel([
                    // Column 4
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 3 * width, y: height * 2 },
                        end: { width: fullWidth - width * 3, height: height, x: 3 * width, y: height * 2 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 3
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width, y: height * 3 },
                        end: { width: fullWidth - width * 2, height: height, x: 2 * width, y: height * 3 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width, y: height * 4 },
                        end: { width: fullWidth - width * 2, height: height, x: 2 * width, y: height * 4 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    // Column 5
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: width * 3, y: height * 5 },
                        end: { width: fullWidth - width * 3, height: height, x: width * 3, y: height * 5 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            }
        ], config);
    };
    return HomeSlideController;
}(__WEBPACK_IMPORTED_MODULE_0__slideController__["a" /* SlideController */]));
//# sourceMappingURL=homeSlideController.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slideController__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeighborhoodSlideControllerFactory; });
/* unused harmony export NeighborhoodSlideController */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var NeighborhoodSlideControllerFactory = (function () {
    function NeighborhoodSlideControllerFactory() {
    }
    NeighborhoodSlideControllerFactory.prototype.createController = function (canvas, config) {
        return new NeighborhoodSlideController(canvas, config);
    };
    return NeighborhoodSlideControllerFactory;
}());
var NeighborhoodSlideController = (function (_super) {
    __extends(NeighborhoodSlideController, _super);
    function NeighborhoodSlideController(canvas, config) {
        _super.call(this, canvas, config);
    }
    NeighborhoodSlideController.prototype.show = function (config) {
        _super.prototype.show.call(this);
        var _this = this;
        _super.prototype._handleLoad.call(this, [
            /*
             * Row 0
             */
            function (callback) {
                var _a = this, firstStep = _a.firstStep, width = _a.width, height = _a.height;
                async.parallel([
                    // Column 2-4
                    function (callback) { return async.series([
                        // Column 2.5
                        function (callback) { return _this._customRectangleClearAnimation({
                            start: { x: width * 2.5, y: 0, width: 0, height: height },
                            end: { x: width * 2.5, y: 0, width: width * 1.5 - 35, height: height },
                            duration: 1200, delay: 150, ease: Expo.easeIn
                        }, callback); },
                        // Column 4
                        // Color: black
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 4 * width - 35, y: 0 },
                            end: { width: 25, height: height, x: 4 * width - 35, y: 0 }
                        }, _this._sizes, {
                            ease: Power0.None, isNotRedrawImage: true, fill: '#000', duration: 100
                        }, callback); },
                        // Column 4
                        // Color: red #751017
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 4 * width - 10, y: 0 },
                            end: { width: 10, height: height, x: 4 * width - 10, y: 0 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, isNotRedrawImage: true, fill: '#751017', duration: 100
                        }, callback); },
                    ], callback); },
                    // Column 6
                    function (callback) { return async.series([
                        // Column 6
                        // Color: red #C82229
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 6 * width, y: 0 },
                            end: { width: 10, height: height, x: 6 * width, y: 0 }
                        }, _this._sizes, {
                            ease: Expo.easeIn, isNotRedrawImage: true,
                            fill: '#C82229', opacity: 1, duration: 100,
                            delay: firstStep
                        }, callback); },
                        // Column 6
                        // Color: orange
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 6 * width + 10, y: 0 },
                            end: { width: 10, height: height, x: 6 * width + 10, y: 0 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, isNotRedrawImage: true,
                            fill: '#E96621', opacity: 1, duration: 100
                        }, callback); },
                        // Column 6
                        function (callback) { return _this._customRectangleClearAnimation({
                            start: { x: width * 6 + 20, y: 0, width: 0, height: height },
                            end: { x: width * 6 + 20, y: 0, width: 50 + width, height: height },
                            duration: 1000, ease: Expo.easeOut
                        }, callback); }
                    ], callback); }
                ], callback);
            },
            /*
             * Row 1
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 5
                    function (callback) { return async.series([
                        // Color: pink
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 5 - 5, y: height },
                            end: { width: 5, height: height, x: width * 5 - 5, y: height }
                        }, _this._sizes, {
                            ease: Expo.easeIn, isNotRedrawImage: true, fill: '#FFD2D4', opacity: 1, duration: 150, delay: firstStep
                        }, callback); },
                        // Color: black, opacity: 0.4
                        function (callback) { return async.series([
                            // Color: orange #E96621, opacity 0.4
                            function (callback) { return _this._customRectangleAnimation({
                                start: { width: 0, height: height, x: width * 5, y: height },
                                end: { width: width, height: height, x: width * 5, y: height }
                            }, _this._sizes, {
                                ease: Expo.easeOut, fill: '#000', opacity: 0.4, duration: 300
                            }, callback); },
                        ], callback); },
                    ], callback); },
                    // Column 6-7
                    function (callback) { return async.series([
                        // Color: red #C82229
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 6, y: height },
                            end: { width: 10, height: height, x: width * 6, y: height }
                        }, _this._sizes, {
                            ease: Expo.easeIn, isNotRedrawImage: true, fill: '#C82229', opacity: 1, duration: 200, delay: firstStep
                        }, callback); },
                        // Clear
                        function (callback) { return _this._customRectangleClearAnimation({
                            start: { x: width * 6 + 10, y: height, width: 0, height: height },
                            end: { x: width * 6 + 10, y: height, width: 40 + width, height: height },
                            duration: 700, ease: Expo.easeInOut
                        }, callback); },
                    ], callback); }
                ], callback);
            },
            /*
             * Row 2
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 7
                    // Color: orange
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 7 + 38, y: height * 2 },
                        end: { width: 5, height: height, x: width * 7 + 38, y: height * 2 }
                    }, _this._sizes, {
                        ease: Expo.easeInOut, isNotRedrawImage: true, fill: '#E96621', opacity: 1, duration: 150, delay: firstStep
                    }, callback); },
                ], callback);
            },
            /*
             * Row 3
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2-3
                    function (callback) { return async.series([
                        // Column 2
                        // Color: red #C82229
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 3 - 60, y: height * 3 },
                            end: { width: 25, height: height, x: width * 3 - 60, y: height * 3 }
                        }, _this._sizes, {
                            ease: Expo.easeIn, fill: '#C82229', duration: 200, delay: firstStep, isNotRedrawImage: true,
                        }, callback); },
                        // Column 2
                        // Color: pink
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 3 - 35, y: height * 3 },
                            end: { width: 10, height: height, x: width * 3 - 35, y: height * 3 }
                        }, _this._sizes, {
                            ease: Power0.easeNone, fill: '#FFD2D4', duration: 100, isNotRedrawImage: true,
                        }, callback); },
                        // Column 2
                        // Color: black
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 3 - 25, y: height * 3 },
                            end: { width: 25, height: height, x: width * 3 - 25, y: height * 3 }
                        }, _this._sizes, {
                            ease: Power0.easeNone, fill: '#000', duration: 150, isNotRedrawImage: true
                        }, callback); },
                        // Column 3
                        // Color: black, opacity: 0.4
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 3, y: height * 3 },
                            end: { width: width - 30, height: height, x: width * 3, y: height * 3 }
                        }, _this._sizes, {
                            ease: Power0.easeNone, fill: '#000', opacity: 0.4, duration: 350
                        }, callback); },
                        // Column 3
                        // Color: red #751017
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 4 - 30, y: height * 3 },
                            end: { width: 25, height: height, x: width * 4 - 30, y: height * 3 }
                        }, _this._sizes, {
                            ease: Power0.easeNone, fill: '#751017', duration: 150, isNotRedrawImage: true
                        }, callback); },
                        // Column 3
                        // Color: orange
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 4 - 5, y: height * 3 },
                            end: { width: 5, height: height, x: width * 4 - 5, y: height * 3 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, fill: '#E96621', duration: 100, isNotRedrawImage: true
                        }, callback); },
                    ], callback); },
                    // Column 6-7
                    function (callback) { return async.series([
                        // Column 6-7
                        // Color: black, opacity: 0.4
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 7 - 80, y: height * 3 },
                            end: { width: width - 40, height: height, x: width * 7 - 80, y: height * 3 }
                        }, _this._sizes, {
                            ease: Expo.easeIn, fill: '#000', opacity: 0.4, duration: 500, delay: firstStep
                        }, callback); },
                        // Column 3
                        // Color: orange
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 7 + 38, y: height * 3 },
                            end: { width: 5, height: height, x: width * 7 + 38, y: height * 3 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, fill: '#E96621', duration: 100, isNotRedrawImage: true
                        }, callback); },
                    ], callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // Column 6
                    // Color: orange #E96621
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 6, y: height * 4 },
                        end: { width: 5, height: height, x: width * 6, y: height * 4 }
                    }, _this._sizes, {
                        ease: Expo.easeIn, isNotRedrawImage: true, fill: '#E96621', duration: 150, delay: firstStep
                    }, callback); },
                    // Column 6
                    // Color: red #C82229
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 6 + 5, y: height * 4 },
                        end: { width: 20, height: height, x: width * 6 + 5, y: height * 4 }
                    }, _this._sizes, {
                        ease: Power0.easeNone, isNotRedrawImage: true, fill: '#C82229', duration: 250
                    }, callback); },
                    // Column 6
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: width * 6 + 25, y: height * 4, width: 0, height: height },
                        end: { x: width * 6 + 25, y: height * 4, width: width + 40, height: height },
                        duration: 800, ease: Expo.easeOut
                    }, callback); },
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2-3
                    function (callback) { return async.series([
                        // Column 2-3
                        // Color: black, opacity: 0.4
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 2, y: height * 5 },
                            end: { width: width * 2 - 65, height: height, x: width * 2, y: height * 5 }
                        }, _this._sizes, {
                            ease: Expo.easeIn, fill: '#000', opacity: 0.4, duration: 500, delay: firstStep
                        }, callback); },
                        // Column 3
                        // Color: pink
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 4 - 65, y: height * 5 },
                            end: { width: 10, height: height, x: width * 4 - 65, y: height * 5 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, isNotRedrawImage: true, fill: '#FFD2D4', opacity: 1, duration: 200
                        }, callback); }
                    ], callback); },
                    // Column 7
                    function (callback) { return async.series([
                        // Color: black, opacity: 0.7
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 7, y: height * 5 },
                            end: { width: 40, height: height, x: width * 7, y: height * 5 }
                        }, _this._sizes, {
                            ease: Expo.easeIn, fill: '#000', opacity: 0.7, duration: 350, delay: firstStep
                        }, callback); },
                        // Color: red #751017
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 7 + 40, y: height * 5 },
                            end: { width: 15, height: height, x: width * 7 + 40, y: height * 5 }
                        }, _this._sizes, {
                            ease: Power0.easeNone, fill: '#751017', opacity: 1, duration: 150, isNotRedrawImage: true
                        }, callback); },
                        // Color: pink
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 7 + 55, y: height * 5 },
                            end: { width: 5, height: height, x: width * 7 + 55, y: height * 5 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, fill: '#FFD2D4', opacity: 1, duration: 70, isNotRedrawImage: true
                        }, callback); },
                    ], callback); }
                ], callback);
            }
        ], config);
    };
    NeighborhoodSlideController.prototype.hide = function (config) {
        _super.prototype.hide.call(this);
        var _this = this;
        var animationDuration = 1000;
        _super.prototype._handleUnload.call(this, [
            /*
             * Rows 0
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, secondStep = _a.secondStep;
                async.parallel([
                    // Column 5
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 3 * width + width / 4, y: 0 },
                        end: { width: fullWidth - 3 * width - width / 4, height: height, x: 3 * width + width / 4, y: 0 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 1
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 4
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width + width / 16, y: height },
                        end: { width: fullWidth - width * 2 - width / 16, height: height, x: 2 * width + width / 16, y: height },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 2
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width, y: height * 3 },
                        end: { width: fullWidth - width * 2, height: height, x: 2 * width, y: height * 3 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 3
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width, y: height * 3 },
                        end: { width: fullWidth - width * 2, height: height, x: 2 * width, y: height * 3 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    // Column 2
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 2 * width, y: height * 4 },
                        end: { width: fullWidth - width * 2, height: height, x: 2 * width, y: height * 4 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, width = _a.width, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    // Column 5
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: width * 3 - 60, y: height * 5 },
                        end: { width: fullWidth - width * 3 + 60, height: height, x: width * 3 - 60, y: height * 5 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            }
        ], config);
    };
    return NeighborhoodSlideController;
}(__WEBPACK_IMPORTED_MODULE_0__slideController__["a" /* SlideController */]));
//# sourceMappingURL=neighborhoodSlideController.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slideController__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_rect__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_colors__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingMobileSlideControllerFactory; });
/* unused harmony export BuildingMobileSlideController */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var BuildingMobileSlideControllerFactory = (function () {
    function BuildingMobileSlideControllerFactory() {
    }
    BuildingMobileSlideControllerFactory.prototype.createController = function (canvas, config) {
        return new BuildingMobileSlideController(canvas, config);
    };
    return BuildingMobileSlideControllerFactory;
}());
var BuildingMobileSlideController = (function (_super) {
    __extends(BuildingMobileSlideController, _super);
    function BuildingMobileSlideController(canvas, config) {
        _super.call(this, canvas, config);
    }
    BuildingMobileSlideController.prototype.show = function (config) {
        _super.prototype.show.call(this);
        var _this = this;
        var delay = 100;
        _super.prototype._handleLoad.call(this, [
            /*
             * Row 0
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 0-3
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: 0, width: 0, height: height },
                        end: { x: 0, y: 0, width: width * 3, height: height },
                        duration: 900, delay: 0, ease: Expo.easeIn
                    }, callback); },
                    // Column 3
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3, y: 0 },
                        end: { width: width * 0.15, height: height, x: width * 3, y: 0 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 20 }, callback); },
                    // Column 3
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3.15, y: 0 },
                        end: { width: width * 0.15, height: height, x: width * 3.15, y: 0 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 40 }, callback); },
                    // Column 3
                    // Color: black
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3.3, y: 0 },
                        end: { width: width * 0.7, height: height, x: width * 3.3, y: 0 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 60 }, callback); },
                    // Column 4
                    // Color: black, opacity 0.5
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 4, y: 0 },
                        end: { width: width / 2, height: height, x: width * 4, y: 0 }
                    }, _this._sizes, { ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, opacity: 0.5, duration: 50 }, callback); }
                ], callback);
            },
            /*
             * Row 1
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 1
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: height, width: 0, height: height },
                        end: { x: 0, y: height, width: width * 1.5, height: height },
                        duration: 1100, delay: delay, ease: Expo.easeIn
                    }, callback); },
                    // Column 1
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.5, y: height },
                        end: { width: width * 0.4, height: height, x: width * 1.5, y: height }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 100 }, callback); },
                    // Column 1
                    // Color: black
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.9, y: height },
                        end: { width: width * 0.1, height: height, x: width * 1.9, y: height }
                    }, _this._sizes, { ease: Expo.easeOut, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 100 }, callback); }
                ], callback);
            },
            /*
             * Row 2
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 2
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: height * 2, width: 0, height: height },
                        end: { x: 0, y: height * 2, width: width * 1.2, height: height },
                        duration: 1100, delay: delay * 2, ease: Expo.easeIn
                    }, callback); },
                    // Column 1
                    // Color: pinkFF
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.2, y: height * 2 },
                        end: { width: width * 0.1, height: height, x: width * 1.2, y: height * 2 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 50 }, callback); },
                    // Column 1
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: width * 1.3, y: height * 2, width: 0, height: height },
                        end: { x: width * 1.3, y: height * 2, width: width * 0.55, height: height },
                        duration: 100, delay: 0, ease: Power0.easeNone
                    }, callback); },
                    // Column 1
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.85, y: height * 2 },
                        end: { width: width * 0.15, height: height, x: width * 1.85, y: height * 2 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 100 }, callback); },
                    // Column 4
                    // Color: black, opacity 0.5
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 2, y: height * 2 },
                        end: { width: width / 3, height: height, x: width * 2, y: height * 2 }
                    }, _this._sizes, { ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, opacity: 0.5, duration: 150 }, callback); }
                ], callback);
            },
            /*
             * Row 3
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 3
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: height * 3, width: 0, height: height },
                        end: { x: 0, y: height * 3, width: width * 1.85, height: height },
                        duration: 1100, delay: delay * 3, ease: Expo.easeIn
                    }, callback); },
                    // Column 1
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.85, y: height * 3 },
                        end: { width: width * 0.15, height: height, x: width * 1.85, y: height * 3 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 100 }, callback); },
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, secondStep = _a.secondStep;
                async.series([
                    // Column 5
                    // Color: pinkFF
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 5, y: height * 5 },
                        end: { width: width * 0.05, height: height, x: width * 5, y: height * 5 }
                    }, _this._sizes, { ease: Expo.easeIn, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 100, delay: secondStep }, callback); },
                    // Column 5
                    // Color: black, opacity: 0.8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 5.05, y: height * 5 },
                        end: { width: width * 0.95, height: height, x: width * 5.05, y: height * 5 }
                    }, _this._sizes, { ease: Expo.easeOut, opacity: 0.8, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 250 }, callback); },
                ], callback);
            },
            /*
             * Row 6
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, secondStep = _a.secondStep;
                async.series([
                    // Column 0
                    // Color: black, opacity: 0.8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 6 },
                        end: { width: width * 0.95, height: height, x: 0, y: height * 6 }
                    }, _this._sizes, { ease: Expo.easeIn, opacity: 0.8, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 300, delay: secondStep + delay * 2 }, callback); },
                    // Column 0
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 0.95, y: height * 6 },
                        end: { width: width * 0.05, height: height, x: width * 0.95, y: height * 6 }
                    }, _this._sizes, { ease: Expo.easeOut, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 100 }, callback); },
                    // Column 1
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width, y: height * 6 },
                        end: { width: width * 0.1, height: height, x: width, y: height * 6 }
                    }, _this._sizes, { ease: Expo.easeOut, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 150 }, callback); }
                ], callback);
            },
            /*
             * Row 7
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, secondStep = _a.secondStep;
                async.series([
                    // Column 1
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.6, y: height * 7 },
                        end: { width: width * 0.06, height: height, x: width * 1.6, y: height * 7 }
                    }, _this._sizes, { ease: Expo.easeIn, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 100, delay: secondStep + delay * 4 }, callback); },
                    // Column 1
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.66, y: height * 7 },
                        end: { width: width * 0.35, height: height, x: width * 1.66, y: height * 7 }
                    }, _this._sizes, { ease: Expo.easeOut, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 300 }, callback); },
                ], callback);
            },
            /*
             * Row 8
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 8
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: height * 8, width: 0, height: height },
                        end: { x: 0, y: height * 8, width: width, height: height },
                        duration: 600, delay: delay * 7, ease: Expo.easeIn,
                        onEndRedraw: function (context, current) {
                            __WEBPACK_IMPORTED_MODULE_1__canvas_rect__["a" /* draw */](context, {
                                x: current.x, y: current.y, width: current.width, height: current.height, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, opacity: 0.4
                            });
                        }
                    }, callback); },
                    // Column 1
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width, y: height * 8 },
                        end: { width: width * 0.15, height: height, x: width, y: height * 8 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 100 }, callback); },
                    // Column 1
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.15, y: height * 8 },
                        end: { width: width * 0.25, height: height, x: width * 1.15, y: height * 8 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 100 }, callback); },
                    // Column 1
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.40, y: height * 8 },
                        end: { width: width * 0.05, height: height, x: width * 1.40, y: height * 8 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 100 }, callback); },
                    // Column 1
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: width * 1.45, y: height * 8, width: 0, height: height },
                        end: { x: width * 1.45, y: height * 8, width: width * 0.55, height: height },
                        duration: 400, ease: Expo.easeOut,
                    }, callback); }
                ], callback);
            },
            /*
             * Row 9
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height;
                async.series([
                    // ROW 0-3
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: height * 9, width: 0, height: height },
                        end: { x: 0, y: height * 9, width: width * 2.9, height: height },
                        duration: 900, ease: Expo.easeIn, delay: delay * 9
                    }, callback); },
                    // Column 3
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 2.9, y: height * 9 },
                        end: { width: width * 0.1, height: height, x: width * 2.9, y: height * 9 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 40 }, callback); },
                ], callback);
            },
        ], config);
    };
    BuildingMobileSlideController.prototype.hide = function (config) {
        _super.prototype.hide.call(this);
        var _this = this;
        var animationDuration = 1000;
        _super.prototype._handleUnload.call(this, [
            /*
             * Rows 0
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: 0 },
                        end: { width: fullWidth, height: height, x: 0, y: 0 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 1
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height },
                        end: { width: fullWidth, height: height, x: 0, y: height },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 2
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, secondStep = _a.secondStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0 },
                        end: { width: fullWidth, height: height, x: 0 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 3
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 3 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 3 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 4 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 4 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 5 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 5 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 6
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 6 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 6 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 7
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, secondStep = _a.secondStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 7 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 7 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 8
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 8 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 8 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 9
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 9 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 9 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            }
        ], config);
    };
    return BuildingMobileSlideController;
}(__WEBPACK_IMPORTED_MODULE_0__slideController__["a" /* SlideController */]));
//# sourceMappingURL=buildingMobileSlideController.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slideController__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_rect__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_colors__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMobileSlideControllerFactory; });
/* unused harmony export ContactMobileSlideController */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var ContactMobileSlideControllerFactory = (function () {
    function ContactMobileSlideControllerFactory() {
    }
    ContactMobileSlideControllerFactory.prototype.createController = function (canvas, config) {
        return new ContactMobileSlideController(canvas, config);
    };
    return ContactMobileSlideControllerFactory;
}());
var ContactMobileSlideController = (function (_super) {
    __extends(ContactMobileSlideController, _super);
    function ContactMobileSlideController(canvas, config) {
        _super.call(this, canvas, config);
    }
    ContactMobileSlideController.prototype.show = function (config) {
        _super.prototype.show.call(this);
        var _this = this;
        _super.prototype._handleLoad.call(this, [
            /*
             * Row 0
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight, startImageX = _a.startImageX, startImageY = _a.startImageY;
                async.parallel([
                    // Column 1-3
                    // Image animate
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 1.68, y: 0, width: 0, height: height },
                            image: {
                                x: imageWidth * 2,
                                y: startImageY,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 1.68, y: 0, width: width * 2.2, height: height },
                            image: {
                                x: imageWidth * 2,
                                y: startImageY,
                                width: imageWidth * 2.2,
                                height: imageHeight
                            },
                        },
                        duration: 900,
                        delay: firstStep,
                        ease: Expo.easeInOut
                    }),
                    // Column 3
                    function (callback) { return async.series([
                        // Color: red75
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 3.88, y: 0 },
                            end: { width: width / 20, height: height, x: width * 3.88, y: 0 }
                        }, _this._sizes, {
                            ease: Expo.easeIn,
                            isNotRedrawImage: true,
                            fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75,
                            duration: 150,
                            delay: firstStep + 700
                        }, callback); },
                        // Column 3
                        // Color: pinkFF
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 3.93, y: 0 },
                            end: { width: width * 0.07, height: height, x: width * 3.93, y: 0 }
                        }, _this._sizes, {
                            ease: Power0.easeNone,
                            isNotRedrawImage: true,
                            fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF,
                            duration: 150
                        }, callback); },
                        // Column 4
                        // Color: black, opacity: 0.4
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 4, y: 0 },
                            end: { width: width * 0.9, height: height, x: width * 4, y: 0 }
                        }, _this._sizes, {
                            ease: Expo.easeOut,
                            fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black,
                            opacity: 0.4,
                            duration: 300
                        }, callback); }
                    ], callback); },
                    // Column 5
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 5.7 * width, y: 0 },
                        end: { width: width * 0.3, height: height, x: 5.7 * width, y: 0 }
                    }, _this._sizes, {
                        ease: Expo.easeInOut,
                        isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8,
                        duration: 400,
                        delay: firstStep + 400
                    }, callback); },
                ], callback);
            },
            /*
             * Row 1
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // ROW 1
                    // Column 0
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 0.68, y: height },
                        end: { width: width * 0.64, height: height, x: width * 0.68, y: height }
                    }, _this._sizes, {
                        ease: Expo.easeIn, isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, opacity: 1, duration: 200, delay: firstStep + 200
                    }, callback); },
                    // Column 1
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.32, y: height },
                        end: { width: width * 0.08, height: height, x: width * 1.32, y: height }
                    }, _this._sizes, {
                        ease: Expo.easeOut, isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, opacity: 1, duration: 150
                    }, callback); }
                ], callback);
            },
            /*
             * Row 3
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // ROW 3
                    // Column: 0
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 3 },
                        end: { width: width * 0.2, height: height, x: 0, y: height * 3 }
                    }, _this._sizes, {
                        ease: Expo.easeIn,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75,
                        duration: 300,
                        isNotRedrawImage: true,
                        delay: firstStep
                    }, callback); },
                    // Column: 0
                    // Color: black, opacity 0.8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 0.2, y: height * 3 },
                        end: { width: width * 0.1, height: height, x: width * 0.2, y: height * 3 }
                    }, _this._sizes, {
                        opacity: 0.8,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black,
                        ease: Power0.easeNone,
                        duration: 100
                    }, callback); },
                    // Column: 0-1
                    // Color: gray8B
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 0.3, y: height * 3 },
                        end: { width: width * 1.05, height: height, x: width * 0.3, y: height * 3 }
                    }, _this._sizes, {
                        isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].gray8B,
                        ease: Expo.easeOut,
                        duration: 200
                    }, callback); },
                    // Column: 1
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.35, y: height * 3 },
                        end: { width: width * 0.05, height: height, x: width * 1.35, y: height * 3 }
                    }, _this._sizes, {
                        isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8,
                        ease: Expo.easeOut,
                        duration: 200
                    }, callback); },
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // ROW 4
                    // Column 5
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 5.65 * width, y: height * 4 },
                        end: { width: width * 0.05, height: height, x: 5.65 * width, y: height * 4 }
                    }, _this._sizes, { ease: Expo.easeIn, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 250, delay: firstStep }, callback); },
                    // Column 5
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 5.8, y: height * 4 },
                        end: { width: width * 0.2, height: height, x: width * 5.8, y: height * 4 }
                    }, _this._sizes, { ease: Power0.easeNone, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 300 }, callback); },
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // ROW 5
                    // Column 1
                    // Color: black, opacity: 0.4
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width, y: height * 5 },
                        end: { width: width * 1.4, height: height, x: width, y: height * 5 }
                    }, _this._sizes, {
                        opacity: 0.4, ease: Expo.easeIn, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 300, delay: firstStep
                    }, callback); },
                    // Column 2
                    // Color: pinkFF
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 2.4, y: height * 5 },
                        end: { width: width * 0.05, height: height, x: width * 2.4, y: height * 5 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 100
                    }, callback); },
                    // Column 2
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 2.45, y: height * 5 },
                        end: { width: width * 0.15, height: height, x: width * 2.45, y: height * 5 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 200
                    }, callback); },
                ], callback);
            },
            /*
             * Row 6
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.series([
                    // ROW 6
                    // Column all
                    // Image animate
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: 0, y: height * 6, width: 0, height: height },
                            image: {
                                x: imageWidth / 5,
                                y: imageHeight * 6,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: 0, y: height * 6, width: width * 5.8, height: height },
                            image: {
                                x: imageWidth / 5,
                                y: imageHeight * 6,
                                width: imageWidth * 5.8,
                                height: imageHeight
                            },
                        },
                        duration: 1100,
                        delay: firstStep,
                        ease: Expo.easeInOut
                    }),
                    // Column 5
                    // Clear
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: width * 5.8, y: height * 6 },
                        end: { width: width * 0.2, height: height, x: width * 5.8, y: height * 6 },
                        duration: 200, ease: Expo.easeOut
                    }, callback); }
                ], callback);
            },
            /*
             * Row 7
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.series([
                    // ROW 7
                    // Column 0
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 7 },
                        end: { width: width * 0.05, height: height, x: 0, y: height * 7 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Expo.easeIn, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 100, delay: firstStep
                    }, callback); },
                    // Column 0
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 0.05, y: height * 7 },
                        end: { width: width * 0.95, height: height, x: width * 0.05, y: height * 7 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 200
                    }, callback); },
                    // Column 1-2
                    // Image animate
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width, y: height * 7, width: 0, height: height },
                            image: {
                                x: imageWidth * 0.8,
                                y: imageHeight * 7,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width, y: height * 7, width: width * 2, height: height },
                            image: {
                                x: imageWidth * 0.8,
                                y: imageHeight * 7,
                                width: imageWidth * 2,
                                height: imageHeight
                            },
                        },
                        duration: 300,
                        ease: Power0.easeNone
                    }),
                    // Column 3
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3, y: height * 7 },
                        end: { width: width * 0.08, height: height, x: width * 3, y: height * 7 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 50
                    }, callback); },
                    // Column 3
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3.08, y: height * 7 },
                        end: { width: width * 0.16, height: height, x: width * 3.08, y: height * 7 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 200
                    }, callback); },
                    // Column 3-5
                    // Image animate
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 3.24, y: height * 7, width: 0, height: height },
                            image: {
                                x: imageWidth * 3.02,
                                y: imageHeight * 7,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 3.24, y: height * 7, width: width * 3.76, height: height },
                            image: {
                                x: imageWidth * 3.02,
                                y: imageHeight * 7,
                                width: imageWidth * 3.76,
                                height: imageHeight
                            },
                        },
                        duration: 800,
                        ease: Expo.easeOut,
                        onEndRedraw: function (context, current) {
                            __WEBPACK_IMPORTED_MODULE_1__canvas_rect__["a" /* draw */](context, {
                                width: current.canvasWidth, height: current.canvasHeight, x: current.canvasX, y: current.canvasY, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, opacity: 0.4
                            });
                        }
                    }),
                ], callback);
            },
            /*
             * Row 8
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.series([
                    // ROW 8
                    // Column all
                    // Image animate
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: 0, y: height * 8, width: 0, height: height },
                            image: {
                                x: imageWidth / 5,
                                y: imageHeight * 8,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: 0, y: height * 8, width: width * 5.8, height: height },
                            image: {
                                x: imageWidth / 5,
                                y: imageHeight * 8,
                                width: imageWidth * 5.8,
                                height: imageHeight
                            },
                        },
                        duration: 1100,
                        delay: firstStep,
                        ease: Expo.easeInOut
                    }),
                    // Column 5
                    // Color: black
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 5.8, y: height * 8 },
                        end: { width: width * 0.2, height: height, x: width * 5.8, y: height * 8 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 200
                    }, callback); },
                ], callback);
            },
            /*
             * Row 9
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.series([
                    // ROW 9
                    // Column 0
                    // Color: black
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 9 },
                        end: { width: width * 2.13, height: height, x: 0, y: height * 9 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 200, delay: firstStep
                    }, callback); },
                    // Column 2
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 2.13, y: height * 9 },
                        end: { width: width * 0.48, height: height, x: width * 2.13, y: height * 9 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 200
                    }, callback); },
                    // Column 2
                    // Color: pinkFF
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 2.61, y: height * 9 },
                        end: { width: width * 0.06, height: height, x: width * 2.61, y: height * 9 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 200
                    }, callback); },
                    // Column all
                    // Image animate
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 2.67, y: height * 9, width: 0, height: height },
                            image: {
                                x: imageWidth * 2.87,
                                y: imageHeight * 9,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 2.67, y: height * 9, width: width * 3.13, height: height },
                            image: {
                                x: imageWidth * 2.87,
                                y: imageHeight * 9,
                                width: imageWidth * 3.13,
                                height: imageHeight
                            },
                        },
                        duration: 600,
                        ease: Expo.easeInOut
                    }),
                    // Column 5
                    // Color: black
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 5.8, y: height * 9 },
                        end: { width: width * 0.2, height: height, x: width * 5.8, y: height * 9 }
                    }, _this._sizes, {
                        isNotRedrawImage: true, ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 200
                    }, callback); },
                ], callback);
            },
        ], config);
    };
    ContactMobileSlideController.prototype.hide = function (config) {
        _super.prototype.hide.call(this);
        var _this = this;
        var animationDuration = 1000;
        _super.prototype._handleUnload.call(this, [
            /*
             * Rows 0
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: 0 },
                        end: { width: fullWidth, height: height, x: 0, y: 0 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 1
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height },
                        end: { width: fullWidth, height: height, x: 0, y: height },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 2
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, secondStep = _a.secondStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0 },
                        end: { width: fullWidth, height: height, x: 0 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 3
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 3 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 3 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 4 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 4 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 5 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 5 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 6
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 6 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 6 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 7
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, secondStep = _a.secondStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 7 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 7 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 8
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 8 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 8 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 9
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 9 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 9 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            }
        ], config);
    };
    return ContactMobileSlideController;
}(__WEBPACK_IMPORTED_MODULE_0__slideController__["a" /* SlideController */]));
//# sourceMappingURL=contactMobileSlideController.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slideController__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_rect__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_colors__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMobileSlideControllerFactory; });
/* unused harmony export HomeMobileSlideController */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var HomeMobileSlideControllerFactory = (function () {
    function HomeMobileSlideControllerFactory() {
    }
    HomeMobileSlideControllerFactory.prototype.createController = function (canvas, config) {
        return new HomeMobileSlideController(canvas, config);
    };
    return HomeMobileSlideControllerFactory;
}());
var HomeMobileSlideController = (function (_super) {
    __extends(HomeMobileSlideController, _super);
    function HomeMobileSlideController(canvas, config) {
        _super.call(this, canvas, config);
    }
    HomeMobileSlideController.prototype.show = function (config) {
        _super.prototype.show.call(this);
        var _this = this;
        _super.prototype._handleLoad.call(this, [
            /*
             * Row 0
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.parallel([
                    // Column 1-4.3
                    // Image animate
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 1.30, y: height, width: 0, height: height },
                            image: {
                                x: imageWidth * 1.30,
                                y: imageHeight * 1.2,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 1.30, y: height, width: width * 3, height: height },
                            image: {
                                x: imageWidth * 1.30,
                                y: imageHeight * 1.2,
                                width: imageWidth * 3,
                                height: imageHeight
                            },
                        },
                        duration: 700,
                        delay: firstStep,
                        ease: Expo.easeIn
                    }),
                ], callback);
            },
            /*
             * Row 1
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // ROW 1
                    // Column 3
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3.8, y: height * 2 },
                        end: { width: width * 0.05, height: height, x: width * 3.8, y: height * 2 }
                    }, _this._sizes, {
                        ease: Expo.easeIn,
                        isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9,
                        duration: 150,
                        delay: firstStep
                    }, callback); },
                    // Column 3
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3.85, y: height * 2 },
                        end: { width: width * 0.15, height: height, x: width * 3.85, y: height * 2 }
                    }, _this._sizes, {
                        ease: Power0.easeNone,
                        isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75,
                        duration: 100
                    }, callback); },
                    // Column 4
                    // Color: black
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 4, y: height * 2 },
                        end: { width: width * 1.4, height: height, x: width * 4, y: height * 2 }
                    }, _this._sizes, {
                        ease: Expo.easeOut,
                        opacity: 0.4,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black,
                        duration: 300
                    }, callback); },
                ], callback);
            },
            /*
             * Row 2
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.series([
                    // ROW 2
                    // Column 0
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 3 },
                        end: { width: width * 0.05, height: height, x: 0, y: height * 3 }
                    }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 100, delay: firstStep, ease: Expo.easeIn }, callback); },
                    // Column 0
                    // Image animate
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 0.05, y: height * 2, width: 0, height: height },
                            image: {
                                x: imageWidth * 0.30,
                                y: imageHeight * 2,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 0.05, y: height * 2, width: width * 0.95, height: height },
                            image: {
                                x: imageWidth * 0.30,
                                y: imageHeight * 2,
                                width: imageWidth * 0.95,
                                height: imageHeight
                            },
                        },
                        duration: 300,
                        ease: Power0.easeNone
                    }),
                    // Column 1
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width, y: height * 3 },
                        end: { width: width * 0.4, height: height, x: width, y: height * 3 }
                    }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 150, ease: Power0.easeNone }, callback); },
                    // Column 1
                    // Color: pinkFF
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.4, y: height * 3 },
                        end: { width: width * 0.05, height: height, x: width * 1.4, y: height * 3 }
                    }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 100, ease: Power0.easeNone }, callback); },
                    // Column 1
                    // Image animate
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 1.45, y: height * 3, width: 0, height: height },
                            image: {
                                x: imageWidth * 1.70,
                                y: imageHeight * 2,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 1.45, y: height * 3, width: width * 0.55, height: height },
                            image: {
                                x: imageWidth * 1.70,
                                y: imageHeight * 2,
                                width: imageWidth * 0.55,
                                height: imageHeight
                            },
                        },
                        duration: 300,
                        ease: Expo.easeOut
                    }),
                ], callback);
            },
            /*
             * Row 3
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // ROW 3
                    // Column 5
                    // Color: pinkFF
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 4.94, y: height * 4 },
                        end: { width: width * 0.06, height: height, x: width * 4.94, y: height * 4 }
                    }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 150, ease: Expo.easeIn, delay: firstStep }, callback); },
                    // Column 5
                    // Color: red75
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 5, y: height * 4 },
                        end: { width: width * 0.4, height: height, x: width * 5, y: height * 4 }
                    }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 150, ease: Power0.easeNone }, callback); },
                    // Column 5
                    // Color: black
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 5.4, y: height * 4 },
                        end: { width: width * 0.6, height: height, x: width * 5.4, y: height * 4 }
                    }, _this._sizes, { isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 150, ease: Expo.easeOut }, callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.parallel([
                    // ROW 5
                    // Column 0-1
                    function (callback) { return async.series([
                        // Column 0
                        // Color: red75
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 0, y: height * 6 },
                            end: { width: width * 0.14, height: height, x: 0, y: height * 6 }
                        }, _this._sizes, {
                            isNotRedrawImage: true, ease: Expo.easeIn, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 200, delay: firstStep,
                        }, callback); },
                        // Column 0
                        // Color: pinkFF
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 0.14, y: height * 6 },
                            end: { width: width * 0.06, height: height, x: width * 0.14, y: height * 6 }
                        }, _this._sizes, {
                            isNotRedrawImage: true, ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 100
                        }, callback); },
                        // Column 0-1
                        _this._rectangleOffsetAnimate({
                            start: {
                                canvas: { x: width * 0.2, y: height * 6, width: 0, height: height },
                                image: {
                                    x: imageWidth * 0.3,
                                    y: imageHeight * 5,
                                    width: 0,
                                    height: imageHeight
                                },
                            },
                            end: {
                                canvas: { x: width * 0.2, y: height * 6, width: width * 1.8, height: height },
                                image: {
                                    x: imageWidth * 0.3,
                                    y: imageHeight * 5,
                                    width: imageWidth * 1.8,
                                    height: imageHeight
                                },
                            },
                            duration: 200,
                            ease: Power0.easeNone,
                            onEndRedraw: function (context, current) {
                                __WEBPACK_IMPORTED_MODULE_1__canvas_rect__["a" /* draw */](context, {
                                    width: current.canvasWidth, height: current.canvasHeight, x: current.canvasX, y: current.canvasY,
                                    fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, opacity: 0.8
                                });
                            }
                        })
                    ], callback); },
                    // Column 4-5
                    function (callback) { return async.series([
                        // Column 4-5
                        // Color: black
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 4.3, y: height * 6 },
                            end: { width: width * 1.05, height: height, x: width * 4.3, y: height * 6 }
                        }, _this._sizes, {
                            opacity: 0.8, ease: Expo.easeIn, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 200, delay: firstStep,
                        }, callback); },
                        // Column 5
                        // Color: redC8
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 5.35, y: height * 6 },
                            end: { width: width * 0.06, height: height, x: width * 5.35, y: height * 6 }
                        }, _this._sizes, {
                            isNotRedrawImage: true, ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 100
                        }, callback); },
                        // Column 5
                        // Color: orangeE9
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 5.41, y: height * 6 },
                            end: { width: width * 0.1, height: height, x: width * 5.41, y: height * 6 }
                        }, _this._sizes, {
                            isNotRedrawImage: true, ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 100
                        }, callback); }
                    ], callback); }
                ], callback);
            },
            /*
             * Row 7
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // ROW 7
                    // Column 3
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 2.94, y: height * 8 },
                        end: { width: width * 0.06, height: height, x: width * 2.94, y: height * 8 }
                    }, _this._sizes, {
                        ease: Expo.easeIn, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 200, delay: firstStep, isNotRedrawImage: true
                    }, callback); },
                    // Column 3-4
                    // Color: black, opacity: 0.4
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 3, y: height * 8 },
                        end: { width: width * 1.9, height: height, x: width * 3, y: height * 8 }
                    }, _this._sizes, {
                        opacity: 0.4, ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 250
                    }, callback); },
                    // Column 4-5
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 4.9, y: height * 8 },
                        end: { width: width * 0.32, height: height, x: width * 4.9, y: height * 8 }
                    }, _this._sizes, {
                        ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 250, isNotRedrawImage: true
                    }, callback); },
                ], callback);
            },
            /*
             * Row 8
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight;
                async.series([
                    // ROW 8
                    _this._rectangleOffsetAnimate({
                        start: {
                            canvas: { x: width * 0.3, y: height * 9, width: 0, height: height },
                            image: {
                                x: 0,
                                y: imageHeight * 8,
                                width: 0,
                                height: imageHeight
                            },
                        },
                        end: {
                            canvas: { x: width * 0.3, y: height * 9, width: width * 6, height: height },
                            image: {
                                x: 0,
                                y: imageHeight * 8,
                                width: imageWidth * 6,
                                height: imageHeight
                            },
                        },
                        duration: 1000,
                        delay: firstStep,
                        ease: Expo.easeInOut
                    })
                ], callback);
            },
        ], config);
    };
    HomeMobileSlideController.prototype.hide = function (config) {
        _super.prototype.hide.call(this);
        var _this = this;
        var animationDuration = 1000;
        _super.prototype._handleUnload.call(this, [
            /*
             * Rows 0
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height },
                        end: { width: fullWidth, height: height, x: 0, y: height },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 1
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 2 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 2 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 2
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, secondStep = _a.secondStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0 },
                        end: { width: fullWidth, height: height, x: 0 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 3
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 4 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 4 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 5 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 5 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 6 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 6 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 6
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 7 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 7 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 7
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, secondStep = _a.secondStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 8 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 8 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 8
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 9 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 9 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
        ], config);
    };
    return HomeMobileSlideController;
}(__WEBPACK_IMPORTED_MODULE_0__slideController__["a" /* SlideController */]));
//# sourceMappingURL=homeMobileSlideController.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slideController__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_rect__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_colors__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeighborhoodMobileSlideControllerFactory; });
/* unused harmony export NeighborhoodMobileSlideController */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var NeighborhoodMobileSlideControllerFactory = (function () {
    function NeighborhoodMobileSlideControllerFactory() {
    }
    NeighborhoodMobileSlideControllerFactory.prototype.createController = function (canvas, config) {
        return new NeighborhoodMobileSlideController(canvas, config);
    };
    return NeighborhoodMobileSlideControllerFactory;
}());
var NeighborhoodMobileSlideController = (function (_super) {
    __extends(NeighborhoodMobileSlideController, _super);
    function NeighborhoodMobileSlideController(canvas, config) {
        _super.call(this, canvas, config);
    }
    NeighborhoodMobileSlideController.prototype.show = function (config) {
        _super.prototype.show.call(this);
        var _this = this;
        _super.prototype._handleLoad.call(this, [
            /*
             * Row 0
             */
            function (callback) {
                var _a = this, secondStep = _a.secondStep, width = _a.width, height = _a.height;
                async.parallel([
                    // Column 0-1
                    function (callback) { return async.series([
                        // Column 0-1
                        function (callback) { return _this._customRectangleClearAnimation({
                            start: { x: 0, y: 0, width: 0, height: height },
                            end: { x: 0, y: 0, width: width * 1.76, height: height },
                            duration: 1200, delay: 150, ease: Expo.easeIn
                        }, callback); },
                        // Column 1
                        // Color: black
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 1.76, y: 0 },
                            end: { width: width * 0.18, height: height, x: width * 1.76, y: 0 }
                        }, _this._sizes, {
                            ease: Power0.None, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 100
                        }, callback); },
                        // Column 1
                        // Color: red75
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 1.94, y: 0 },
                            end: { width: width * 0.06, height: height, x: width * 1.94, y: 0 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, isNotRedrawImage: true, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 100
                        }, callback); },
                    ], callback); },
                    // Column 4
                    function (callback) { return async.series([
                        // Column 4
                        // Color: redC8
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: 4 * width, y: 0 },
                            end: { width: width * 0.08, height: height, x: 4 * width, y: 0 }
                        }, _this._sizes, {
                            ease: Expo.easeIn, isNotRedrawImage: true,
                            fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, opacity: 1, duration: 100,
                            delay: secondStep
                        }, callback); },
                        // Column 4
                        // Color: orangeE9
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 4.08, y: 0 },
                            end: { width: width * 0.1, height: height, x: width * 4.08, y: 0 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, isNotRedrawImage: true,
                            fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, opacity: 1, duration: 100
                        }, callback); },
                        // Column 4-5
                        function (callback) { return _this._customRectangleClearAnimation({
                            start: { x: width * 4.18, y: 0, width: 0, height: height },
                            end: { x: width * 4.18, y: 0, width: width * 1.82, height: height },
                            duration: 1000, ease: Expo.easeOut
                        }, callback); }
                    ], callback); }
                ], callback);
            },
            /*
             * Row 1
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // Column 4
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 4 * width, y: height },
                        end: { width: width * 0.08, height: height, x: 4 * width, y: height }
                    }, _this._sizes, {
                        ease: Expo.easeIn, isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, opacity: 1, duration: 100,
                        delay: firstStep
                    }, callback); },
                    // Column 4-5
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: width * 4.08, y: height, width: 0, height: height },
                        end: { x: width * 4.08, y: height, width: width * 1.92, height: height },
                        duration: 1000, ease: Expo.easeOut
                    }, callback); }
                ], callback);
            },
            /*
             * Row 2
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, secondStep = _a.secondStep;
                console.log(firstStep, secondStep);
                async.series([
                    // Column 3
                    // Color: pinkFF
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 1.95, y: height * 2 },
                        end: { width: width * 0.05, height: height, x: width * 1.95, y: height * 2 }
                    }, _this._sizes, {
                        ease: Expo.easeIn, isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, opacity: 1, duration: (secondStep - firstStep) * 0.25,
                        delay: firstStep
                    }, callback); },
                    // Column 3
                    // Color: black, opacity: 0.4
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 2, y: height * 2 },
                        end: { width: width * 2, height: height, x: width * 2, y: height * 2 }
                    }, _this._sizes, {
                        ease: Expo.easeIn, opacity: 0.4,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: (secondStep - firstStep) * 0.75
                    }, callback); },
                    // Column 4
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: 4 * width, y: height * 2 },
                        end: { width: width * 0.08, height: height, x: 4 * width, y: height * 2 }
                    }, _this._sizes, {
                        ease: Expo.easeIn, isNotRedrawImage: true,
                        fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, opacity: 1, duration: 100
                    }, callback); },
                    // Column 4-5
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: width * 4.08, y: height, width: 0, height: height * 2 },
                        end: { x: width * 4.08, y: height, width: width * 1.92, height: height * 2 },
                        duration: 1000, ease: Expo.easeOut
                    }, callback); }
                ], callback);
            },
            /*
             * Row 3
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, secondStep = _a.secondStep;
                async.parallel([
                    // Column 5
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 5.85, y: height * 3 },
                        end: { width: width * 0.15, height: height, x: width * 5.85, y: height * 3 }
                    }, _this._sizes, {
                        ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 100, isNotRedrawImage: true, delay: secondStep
                    }, callback); },
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, secondStep = _a.secondStep;
                async.parallel([
                    // Column 0-1
                    function (callback) { return async.series([
                        // Column 0
                        // Color: redC8
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 0.24, y: height * 4 },
                            end: { width: width * 0.17, height: height, x: width * 0.24, y: height * 4 }
                        }, _this._sizes, {
                            ease: Expo.easeIn, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, duration: 200, delay: firstStep, isNotRedrawImage: true,
                        }, callback); },
                        // Column 0
                        // Color: pinkFF
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 0.41, y: height * 4 },
                            end: { width: width * 0.04, height: height, x: width * 0.41, y: height * 4 }
                        }, _this._sizes, {
                            ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 100, isNotRedrawImage: true,
                        }, callback); },
                        // Column 0
                        // Color: black
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 0.45, y: height * 4 },
                            end: { width: width * 0.2, height: height, x: width * 0.45, y: height * 4 }
                        }, _this._sizes, {
                            ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 150, isNotRedrawImage: true
                        }, callback); },
                        // Column 0-1
                        // Color: black, opacity: 0.4
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 0.65, y: height * 4 },
                            end: { width: width * 1.10, height: height, x: width * 0.65, y: height * 4 }
                        }, _this._sizes, {
                            ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, opacity: 0.4, duration: 350
                        }, callback); },
                        // Column 1
                        // Color: red75
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 1.75, y: height * 4 },
                            end: { width: width * 0.2, height: height, x: width * 1.75, y: height * 4 }
                        }, _this._sizes, {
                            ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 150, isNotRedrawImage: true
                        }, callback); },
                        // Column 1
                        // Color: orangeE9
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 1.95, y: height * 4 },
                            end: { width: width * 0.05, height: height, x: width * 1.95, y: height * 4 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 100, isNotRedrawImage: true
                        }, callback); },
                    ], callback); },
                    // Column 5
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height, x: width * 5.85, y: height * 4 },
                        end: { width: width * 0.15, height: height, x: width * 5.85, y: height * 4 }
                    }, _this._sizes, {
                        ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, duration: 100, isNotRedrawImage: true, delay: secondStep
                    }, callback); },
                ], callback);
            },
            /*
             * Row 5-6
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    // Column 4
                    // Color: orangeE9
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height * 2, x: width * 4, y: height * 5 },
                        end: { width: width * 0.05, height: height * 2, x: width * 4, y: height * 5 }
                    }, _this._sizes, {
                        ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].orangeE9, opacity: 1, duration: 70, isNotRedrawImage: true, delay: firstStep
                    }, callback); },
                    // Column 4
                    // Color: redC8
                    function (callback) { return _this._customRectangleAnimation({
                        start: { width: 0, height: height * 2, x: width * 4.05, y: height * 5 },
                        end: { width: width * 0.20, height: height * 2, x: width * 4.05, y: height * 5 }
                    }, _this._sizes, {
                        ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].redC8, opacity: 1, duration: 120, isNotRedrawImage: true
                    }, callback); },
                    // Column 4-5
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: width * 4.25, y: height * 5, width: 0, height: height * 2 },
                        end: { x: width * 4.25, y: height * 5, width: width * 1.75, height: height * 2 },
                        duration: 800, ease: Expo.easeInOut
                    }, callback); },
                ], callback);
            },
            /*
             * Row 8
             */
            function (callback) {
                var _a = this, width = _a.width, height = _a.height, firstStep = _a.firstStep, secondStep = _a.secondStep;
                async.parallel([
                    // Column 0-2
                    function (callback) { return async.series([
                        // Column 0
                        function (callback) { return _this._customRectangleClearAnimation({
                            start: { x: 0, y: height * 8, width: 0, height: height },
                            end: { x: 0, y: height * 8, width: width * 0.55, height: height },
                            duration: 500, ease: Expo.easeIn,
                            delay: firstStep
                        }, callback); },
                        // Column 0
                        // Color: red75
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 0.55, y: height * 8 },
                            end: { width: width * 0.70, height: height, x: width * 0.55, y: height * 8 }
                        }, _this._sizes, {
                            ease: Power0.easeNone, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 100, isNotRedrawImage: true
                        }, callback); },
                        // Column 1
                        function (callback) { return _this._customRectangleClearAnimation({
                            start: { x: width * 1.25, y: height * 8, width: 0, height: height },
                            end: { x: width * 1.25, y: height * 8, width: width * 0.75, height: height },
                            duration: 150, ease: Power0.easeNone,
                            onEndRedraw: function (context, current) {
                                __WEBPACK_IMPORTED_MODULE_1__canvas_rect__["a" /* draw */](context, {
                                    width: current.width, height: current.height, x: current.x, y: current.y, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, opacity: 0.4
                                });
                            }
                        }, callback); },
                        // Column 2
                        // Color: black, opacity: 0.4
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 2, y: height * 8 },
                            end: { width: width * 0.3, height: height, x: width * 2, y: height * 8 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, opacity: 0.4, duration: 100
                        }, callback); },
                        // Column 2
                        // Color: pinkFF
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 2.3, y: height * 8 },
                            end: { width: width * 0.05, height: height, x: width * 2.3, y: height * 8 }
                        }, _this._sizes, {
                            ease: Expo.easeInOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, isNotRedrawImage: true, duration: 100
                        }, callback); },
                    ], callback); },
                    // Column 5
                    function (callback) { return async.series([
                        // Color: black, opacity: 0.8
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 5, y: height * 8 },
                            end: { width: width * 0.35, height: height, x: width * 5, y: height * 8 }
                        }, _this._sizes, {
                            ease: Expo.easeIn, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].black, duration: 150, opacity: 0.8, delay: secondStep
                        }, callback); },
                        // Color: red75
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 5.35, y: height * 8 },
                            end: { width: width * 0.2, height: height, x: width * 5.35, y: height * 8 }
                        }, _this._sizes, {
                            ease: Expo.easeOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].red75, duration: 150, isNotRedrawImage: true
                        }, callback); },
                        // Color: pinkFF
                        function (callback) { return _this._customRectangleAnimation({
                            start: { width: 0, height: height, x: width * 5.55, y: height * 8 },
                            end: { width: width * 0.05, height: height, x: width * 5.55, y: height * 8 }
                        }, _this._sizes, {
                            ease: Expo.easeInOut, fill: __WEBPACK_IMPORTED_MODULE_2__slider_colors__["a" /* colors */].pinkFF, duration: 150, isNotRedrawImage: true
                        }, callback); },
                    ], callback); }
                ], callback);
            },
            /*
             * Row 9
             */
            function (callback) {
                var _a = this, firstStep = _a.firstStep, width = _a.width, height = _a.height;
                async.parallel([
                    // Column 0-1
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { x: 0, y: height * 9, width: 0, height: height },
                        end: { x: 0, y: height * 9, width: width * 2, height: height },
                        duration: 800, delay: firstStep, ease: Expo.easeIn
                    }, callback); },
                ], callback);
            }
        ], config);
    };
    NeighborhoodMobileSlideController.prototype.hide = function (config) {
        _super.prototype.hide.call(this);
        var _this = this;
        var animationDuration = 1000;
        _super.prototype._handleUnload.call(this, [
            /*
             * Rows 0
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: 0 },
                        end: { width: fullWidth, height: height, x: 0, y: 0 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 1
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height },
                        end: { width: fullWidth, height: height, x: 0, y: height },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 2
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, secondStep = _a.secondStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0 },
                        end: { width: fullWidth, height: height, x: 0 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Rows 3
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 3 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 3 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 4
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.parallel([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 4 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 4 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 5
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 5 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 5 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 6
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 6 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 6 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 7
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, secondStep = _a.secondStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 7 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 7 },
                        duration: animationDuration, delay: secondStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 8
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, firstStep = _a.firstStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 8 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 8 },
                        duration: animationDuration, delay: firstStep
                    }, callback); }
                ], callback);
            },
            /*
             * Row 9
             */
            function (callback) {
                var _a = this, fullWidth = _a.fullWidth, height = _a.height, thirdStep = _a.thirdStep;
                async.series([
                    function (callback) { return _this._customRectangleClearAnimation({
                        start: { width: 0, height: height, x: 0, y: height * 9 },
                        end: { width: fullWidth, height: height, x: 0, y: height * 9 },
                        duration: animationDuration, delay: thirdStep
                    }, callback); }
                ], callback);
            }
        ], config);
    };
    return NeighborhoodMobileSlideController;
}(__WEBPACK_IMPORTED_MODULE_0__slideController__["a" /* SlideController */]));
//# sourceMappingURL=neighborhoodMobileSlideController.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgUseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SvgUseComponent = (function () {
    function SvgUseComponent() {
    }
    Object.defineProperty(SvgUseComponent.prototype, "baseUrl", {
        get: function () {
            return window.location.href.replace(window.location.hash, '');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata('design:type', String)
    ], SvgUseComponent.prototype, "name", void 0);
    SvgUseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'svg-use',
            template: __webpack_require__(795),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(758)]
        }),
        __metadata('design:paramtypes', [])
    ], SvgUseComponent);
    return SvgUseComponent;
}());
//# sourceMappingURL=svg-use.component.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return draw; });
/* unused harmony export drawWithGradient */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return animateClear; });
function animate(context, config, callback) {
    var start = config.start;
    var end = config.end;
    var current = {
        x: start.x,
        y: start.y,
        width: start.width,
        height: start.height
    };
    setTimeout(function () {
        TweenMax.to(current, config.duration / 1000, { x: end.x, y: end.y, width: end.width, height: end.height,
            onUpdate: function () {
                tick(context, current, start, config);
            },
            onComplete: callback
        });
    }, config.delay);
}
function tick(context, current, start, config) {
    config.onStartRedraw && config.onStartRedraw(context, current, config);
    var x, y;
    if (start.x >= config.end.x) {
        x = Math.min(current.x, start.x);
        y = Math.min(current.y, start.y);
    }
    else {
        x = current.x;
        y = current.y;
    }
    var width = current.width;
    var height = current.height;
    config = Object.assign({}, config, {
        x: x, y: y, width: width, height: height
    });
    if (config.isGradient) {
        drawWithGradient(context, config);
    }
    else {
        draw(context, config);
    }
    config.onEndRedraw && config.onEndRedraw(context, current, config);
}
function draw(context, config) {
    _draw(context, config, function (context, config) { return config.fill; });
}
function drawWithGradient(context, config) {
    _draw(context, config, function (context, config) {
        var gradient = context.createLinearGradient(0, 0, config.width, 0);
        var colors = config.colors || [];
        colors.forEach(function (color) {
            gradient.addColorStop(color.anchor, color.color);
        });
        return gradient;
    });
}
function _draw(context, config, fillStyleCallback) {
    var tempFillStyle = context.fillStyle;
    var tempOpacity = context.globalAlpha;
    var fillStyle = fillStyleCallback(context, config);
    context.fillStyle = fillStyle;
    context.globalAlpha = config.opacity !== undefined ? config.opacity : 1;
    fillStyle && context.fillRect(config.x, config.y, config.width, config.height);
    context.globalAlpha = tempOpacity;
    context.fillStyle = tempFillStyle;
}
function animateClear(context, config, callback) {
    var start = config.start;
    var end = config.end;
    var current = {
        x: start.x,
        y: start.y,
        width: start.width,
        height: start.height
    };
    setTimeout(function () {
        TweenMax.to(current, config.duration / 1000, {
            ease: config.ease || Expo.easeInOut,
            x: end.x, y: end.y, width: end.width, height: end.height,
            onUpdate: function () {
                clearTick(context, current, start, config);
            },
            onComplete: callback
        });
    }, config.delay);
}
function clearTick(context, current, start, config) {
    config.onStartRedraw && config.onStartRedraw(context, current, config);
    var x, y;
    if (start.x >= config.end.x) {
        x = Math.min(current.x, start.x);
        y = Math.min(current.y, start.y);
    }
    else {
        x = current.x;
        y = current.y;
    }
    var width = current.width;
    var height = current.height;
    context.clearRect(x, y, width, height);
    config.onEndRedraw && config.onEndRedraw(context, current, config);
}

//# sourceMappingURL=rect.js.map

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".app__slider {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n}\n._ios .wrapper {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".slider-images {\n  display: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".b-greeting-control {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  opacity: 1;\n  transition: opacity 0.5s ease-in-out 0.5s;\n}\n.b-greeting-control._hidden {\n  transition: opacity 0.3s ease-out;\n  opacity: 0;\n  pointer-events: none;\n}\n.b-greeting-control__button {\n  cursor: pointer;\n  border: 1px solid #fff;\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n  position: relative;\n  padding: 10px 15px 8px;\n  color: #fff;\n  font-size: 15px;\n  font-family: 'GoodOffcXCondBold';\n  text-transform: uppercase;\n}\n.b-greeting-control__button._prev {\n  text-align: left;\n  margin-right: 10px;\n  padding-left: 30px;\n}\n.b-greeting-control__button._next {\n  text-align: right;\n  padding-right: 30px;\n}\n.b-greeting-control__button._next:after,\n.b-greeting-control__button._prev:before {\n  width: 7px;\n  height: 7px;\n  top: 1px;\n  bottom: 0;\n  content: '';\n  display: block;\n  position: absolute;\n}\n.b-greeting-control__button._next:after {\n  border-right: 1px solid #fff;\n  border-top: 1px solid #fff;\n  right: 15px;\n  margin: auto 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.b-greeting-control__button._prev:before {\n  border-left: 1px solid #fff;\n  border-top: 1px solid #fff;\n  left: 15px;\n  margin: auto 0;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".b-greeting-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  overflow: hidden;\n  width: 100%;\n  min-height: 260px;\n  margin-top: -50px;\n  margin-bottom: 20px;\n  transition: opacity 0.2s ease-out;\n}\n.b-greeting-title._hidden {\n  opacity: 0;\n}\n.b-greeting-title__title {\n  font-size: 0;\n  display: block;\n}\n.b-greeting-title__title-item {\n  font-size: 0;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.b-greeting-title__title-item span {\n  padding-top: 6px;\n  line-height: 38px;\n  text-transform: uppercase;\n  font-family: 'goodoffcxcondbold', sans-serif;\n  color: #fff;\n  font-size: 60px;\n  display: inline-block;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n._mac .b-greeting-title__title-item span {\n  padding-top: 3px;\n}\n.b-greeting-title__title-item._half {\n  margin-left: 30px;\n}\n.b-greeting-title__title-item._half-ruble {\n  margin-left: 85px;\n}\n.b-greeting-title__title-item._quarter {\n  margin-left: 15px;\n}\n.b-greeting-title__title-item._three-quarter {\n  margin-left: 50px;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item:nth-child(0) {\n  transition-delay: 0s;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item:nth-child(0) span {\n  transition-delay: 0s;\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item:nth-child(0) {\n  transition-delay: 0.3s;\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item:nth-child(0) span {\n  transition-delay: 0.3s;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item:nth-child(1) {\n  transition-delay: 0.15s;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item:nth-child(1) span {\n  transition-delay: 0.15s;\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item:nth-child(1) {\n  transition-delay: 0.45s;\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item:nth-child(1) span {\n  transition-delay: 0.45s;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item:nth-child(2) {\n  transition-delay: 0.05s;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item:nth-child(2) span {\n  transition-delay: 0.05s;\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item:nth-child(2) {\n  transition-delay: 0.35s;\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item:nth-child(2) span {\n  transition-delay: 0.35s;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item:nth-child(3) {\n  transition-delay: 0.2s;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item:nth-child(3) span {\n  transition-delay: 0.2s;\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item:nth-child(3) {\n  transition-delay: 0.5s;\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item:nth-child(3) span {\n  transition-delay: 0.5s;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item:nth-child(4) {\n  transition-delay: 0.1s;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item:nth-child(4) span {\n  transition-delay: 0.1s;\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item:nth-child(4) {\n  transition-delay: 0.4s;\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item:nth-child(4) span {\n  transition-delay: 0.4s;\n}\n.b-greeting-title__title._in .b-greeting-title__title-item {\n  transition: -webkit-transform 0.3s ease-in;\n  transition: transform 0.3s ease-in;\n  transition: transform 0.3s ease-in, -webkit-transform 0.3s ease-in;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.b-greeting-title__title._in .b-greeting-title__title-item span {\n  transition: -webkit-transform 0.3s ease-in;\n  transition: transform 0.3s ease-in;\n  transition: transform 0.3s ease-in, -webkit-transform 0.3s ease-in;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item {\n  transition: -webkit-transform 0.3s ease-in;\n  transition: transform 0.3s ease-in;\n  transition: transform 0.3s ease-in, -webkit-transform 0.3s ease-in;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.b-greeting-title__title._out-right .b-greeting-title__title-item span {\n  transition: -webkit-transform 0.3s ease-in;\n  transition: transform 0.3s ease-in;\n  transition: transform 0.3s ease-in, -webkit-transform 0.3s ease-in;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.b-greeting-title__comment-item {\n  font-family: 'goodoffcxcondbold', sans-serif;\n  font-size: 21px;\n  color: #fff;\n  opacity: 1;\n  transition: opacity 0.5s ease-in-out 0.5s;\n  text-transform: uppercase;\n}\n.b-greeting-title__comment-item._shift-end {\n  width: 130px;\n  text-align: right;\n}\n.b-greeting-title__comment._hidden .b-greeting-title__comment-item {\n  transition: opacity 0.3s ease-out;\n  opacity: 0;\n}\n.b-greeting-title__subtitle {\n  padding-top: 15px;\n}\n.b-greeting-title__subtitle-item {\n  font-size: 21px;\n  color: #fff;\n  font-family: 'goodoffcxcondbold', sans-serif;\n  transition: opacity 0.5s ease-in-out 0.5s;\n  opacity: 1;\n}\n.b-greeting-title__subtitle._hidden .b-greeting-title__subtitle-item {\n  transition: opacity 0.3s ease-out;\n  opacity: 0;\n}\n@media only screen and (max-width: 1024px) {\n  .b-greeting-title__title span {\n    padding-top: 6px;\n    line-height: 39px;\n  }\n  ._mac .b-greeting-title__title span {\n    padding-top: 6px;\n  }\n  ._ipad .b-greeting-title__title-item {\n    margin-bottom: -16px;\n  }\n}\n@media only screen and (max-width: 900px) {\n  .b-greeting-title__title span {\n    font-size: 5rem;\n    line-height: 30px;\n  }\n  .b-greeting-title__subtitle-item {\n    font-size: 1.8rem;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .b-greeting-title {\n    min-height: auto;\n    max-width: 90px;\n    margin-bottom: 10px;\n    margin-top: 0;\n  }\n  .b-greeting-title__title {\n    line-height: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .b-greeting-title__title-item {\n    margin-bottom: -4px;\n  }\n  .b-greeting-title__title-item span {\n    font-size: 1.5rem;\n    line-height: 0.9rem;\n  }\n  .b-greeting-title__title-item._half {\n    margin-left: 10px;\n  }\n  .b-greeting-title__title-item._half-ruble {\n    margin-left: 21px;\n  }\n  .b-greeting-title__title-item._quarter {\n    margin-left: 3px;\n  }\n  .b-greeting-title__title-item._three-quarter {\n    margin-left: 11px;\n  }\n  .b-greeting-title__comment-item {\n    font-size: 1.2rem;\n    width: auto;\n  }\n  .b-greeting-title__comment-item._shift-end {\n    width: auto;\n    text-align: left;\n    padding-left: 10px;\n  }\n  .b-greeting-title__subtitle {\n    padding-top: 8px;\n  }\n  .b-greeting-title__subtitle-item {\n    font-size: 0.8rem;\n  }\n}\n@media only screen and (max-width: 740px) and (orientation: landscape) {\n  .b-greeting-title {\n    max-width: 110px;\n  }\n  .b-greeting-title__title-item span {\n    font-size: 2.5rem;\n    line-height: 1.6rem;\n  }\n  .b-greeting-title__title-item._half {\n    margin-left: 9px;\n  }\n  .b-greeting-title__title-item._half-ruble {\n    margin-left: 21px;\n  }\n  .b-greeting-title__title-item._three-quarter {\n    margin-left: 20px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".b-home-popup {\n  -webkit-transform: translateY(130%);\n          transform: translateY(130%);\n  transition: none;\n}\n@media only screen and (min-width: 901px) {\n  .b-home-popup {\n    display: none;\n  }\n}\n@media only screen and (max-width: 900px) {\n  .b-home-popup {\n    transition: -webkit-transform 1s ease;\n    transition: transform 1s ease;\n    transition: transform 1s ease, -webkit-transform 1s ease;\n    -webkit-transform: translateY(130%);\n            transform: translateY(130%);\n    padding-top: 19%;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    z-index: 1;\n    width: 90vw;\n    height: 84vh;\n    background: linear-gradient(to top left, #d7d7d7, #828282);\n  }\n  .b-home-popup._active {\n    transition: -webkit-transform 1s ease;\n    transition: transform 1s ease;\n    transition: transform 1s ease, -webkit-transform 1s ease;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n  }\n  .b-home-popup__close-button {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    right: 0;\n    top: 4px;\n    z-index: 1;\n  }\n  .b-home-popup__close-button:after,\n  .b-home-popup__close-button:before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    top: 20px;\n    width: 21px;\n    height: 2px;\n    background-color: #fff;\n  }\n  .b-home-popup__close-button:after {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n  }\n  .b-home-popup__close-button:before {\n    -webkit-transform: rotate(-60deg);\n            transform: rotate(-60deg);\n  }\n  .b-home-popup .b-greeting-control {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .b-home-popup .b-greeting-control__button {\n    font-size: 1.8rem;\n    -ms-flex-preferred-size: 38%;\n        flex-basis: 38%;\n    width: 38%;\n    max-width: 130px;\n  }\n  .b-home-popup .b-greeting-control__button._prev {\n    margin-right: 9px;\n    padding: 10px 10px 8px 22px;\n  }\n  .b-home-popup .b-greeting-control__button._prev:before {\n    border-left: 2px solid #fff;\n    border-top: 2px solid #fff;\n    left: 9px;\n    width: 11px;\n    height: 11px;\n  }\n  .b-home-popup .b-greeting-control__button._next {\n    padding: 10px 22px 8px 10px;\n  }\n  .b-home-popup .b-greeting-control__button._next:after {\n    border-right: 2px solid #fff;\n    border-top: 2px solid #fff;\n    right: 9px;\n    width: 11px;\n    height: 11px;\n  }\n  .b-home-popup .b-greeting-title {\n    max-width: 100%;\n    margin-bottom: 35px;\n    margin-top: 0;\n  }\n  .b-home-popup .b-greeting-title__title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .b-home-popup .b-greeting-title__title-item span {\n    font-size: 8rem;\n    line-height: 6.5rem;\n    padding-bottom: 1px;\n    display: inline-block;\n  }\n  .b-home-popup .b-greeting-title__title-item._half {\n    margin-left: -54px;\n  }\n  .b-home-popup .b-greeting-title__title-item._half-ruble {\n    margin-left: 52px;\n  }\n  .b-home-popup .b-greeting-title__title-item._quarter {\n    margin-left: -52px;\n  }\n  .b-home-popup .b-greeting-title__title-item._three-quarter {\n    margin-left: 55px;\n  }\n  .b-home-popup .b-greeting-title__title-item._zero {\n    margin-left: -110px;\n  }\n  .b-home-popup .b-greeting-title__subtitle {\n    padding-top: 40px;\n    text-align: center;\n  }\n  .b-home-popup .b-greeting-title__subtitle-item {\n    font-size: 2.5rem;\n  }\n  .b-home-popup .s-footer {\n    padding-bottom: 17px;\n    display: block;\n  }\n  .b-home-popup .s-footer .container {\n    padding: 0 27px;\n    min-width: 200px;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .b-home-popup {\n    padding-top: 19%;\n  }\n  .b-home-popup .b-greeting-title__title-item span {\n    font-size: 6rem;\n    line-height: 4.1rem;\n  }\n  .b-home-popup .b-greeting-title__title-item._zero {\n    margin-left: -90px;\n  }\n  .b-home-popup .b-greeting-title__subtitle {\n    padding-top: 19px;\n  }\n}\n@media only screen and (max-width: 740px) and (orientation: landscape) {\n  .b-home-popup {\n    padding-top: 5%;\n    width: 95vw;\n    height: 95%;\n  }\n  .b-home-popup .b-greeting-title {\n    margin-bottom: 20px;\n  }\n  .b-home-popup .b-greeting-title__title-item span {\n    font-size: 3.4rem;\n    line-height: 2.2rem;\n    padding-bottom: 1px;\n  }\n  .b-home-popup .b-greeting-title__title-item._half {\n    margin-left: -15px;\n  }\n  .b-home-popup .b-greeting-title__title-item._half-ruble {\n    margin-left: 35px;\n  }\n  .b-home-popup .b-greeting-title__subtitle-item {\n    font-size: 2rem;\n  }\n}\n@media only screen and (max-height: 370px) and (orientation: landscape) {\n  .b-home-popup {\n    height: 100%;\n    padding-top: 10px;\n  }\n  .b-home-popup .s-footer {\n    padding: 5px 0;\n  }\n  .b-home-popup .b-greeting-title {\n    margin-bottom: 5px;\n  }\n  .b-home-popup .b-greeting-title__title-item span {\n    font-size: 2.8rem;\n    line-height: 1.8rem;\n  }\n  .b-home-popup .b-greeting-title__title-item._zero {\n    margin-right: -70px;\n  }\n  .b-home-popup .b-greeting-title__subtitle {\n    padding-top: 5px;\n  }\n  .b-home-popup .b-greeting-title__subtitle-item {\n    font-size: 1.6rem;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .b-home-popup .s-footer__address {\n    max-width: 55%;\n  }\n  .b-home-popup .b-greeting-title__title-item span {\n    font-size: 5rem;\n    line-height: 3.3rem;\n    padding-bottom: 2px;\n  }\n  .b-home-popup .b-greeting-title__subtitle-item {\n    font-size: 2rem;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".btn-down {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 1px solid #9f4e48;\n  position: absolute;\n  bottom: 40px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.btn-down .svg-arrow-down {\n  top: 7px;\n  fill: #9f4e48;\n  width: 8px;\n  height: 15px;\n  -webkit-animation: bounce-arrow 2s infinite ease-in-out;\n          animation: bounce-arrow 2s infinite ease-in-out;\n}\n@media only screen and (max-width: 740px) {\n  .btn-down {\n    bottom: 5%;\n  }\n}\n@-webkit-keyframes bounce-arrow {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  50% {\n    -webkit-transform: translateY(5px);\n            transform: translateY(5px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n@keyframes bounce-arrow {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  50% {\n    -webkit-transform: translateY(5px);\n            transform: translateY(5px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".btn-hamburger {\n  width: 37px;\n  height: 37px;\n  padding: 10px;\n}\n.btn-hamburger__dash {\n  display: block;\n  width: 17px;\n  height: 2px;\n  background-color: #000;\n  transition: opacity 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, opacity 0.2s ease-out;\n  transition: transform 0.2s ease-out, opacity 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform-origin: left;\n          transform-origin: left;\n}\n.btn-hamburger__dash+.btn-hamburger__dash {\n  margin-top: 5px;\n}\n._opened .btn-hamburger__dash._1 {\n  -webkit-transform: rotate(58deg) translateY(-5px) translateX(2px);\n          transform: rotate(58deg) translateY(-5px) translateX(2px);\n  -webkit-transform-origin: left;\n          transform-origin: left;\n}\n._opened .btn-hamburger__dash._2 {\n  opacity: 0;\n}\n._opened .btn-hamburger__dash._3 {\n  -webkit-transform: rotate(-58deg) translateY(4px) translateX(3px);\n          transform: rotate(-58deg) translateY(4px) translateX(3px);\n  -webkit-transform-origin: left;\n          transform-origin: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".f-contact {\n  margin-bottom: 60px;\n}\n.f-contact__top {\n  margin-bottom: 33px;\n}\n.f-contact__top._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.f-contact__top._animated {\n  opacity: 1;\n}\n.f-contact__text {\n  display: inline-block;\n  vertical-align: bottom;\n  font-size: 1.4rem;\n  color: #000;\n}\n.f-contact__choices {\n  display: inline-block;\n  vertical-align: bottom;\n}\n.f-contact__choice {\n  display: inline-block;\n  vertical-align: bottom;\n  font-size: 1.4rem;\n  margin-left: 12px;\n}\n.f-contact__row {\n  width: 100%;\n  position: relative;\n}\n.f-contact__row._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.f-contact__row._animated {\n  opacity: 1;\n}\n.f-contact__row._short {\n  width: calc(100% - 98px);\n}\n.f-contact__row._short .f-contact__field {\n  background-color: #c3c3c3;\n}\n.f-contact__row-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.f-contact__row._tel span {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 14px;\n  font-size: 1.4rem;\n  margin: auto 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 2px;\n}\n.f-contact__field {\n  display: block;\n  height: 45px;\n  background-color: #ddd;\n  padding: 3px 14px 0;\n  width: 100%;\n  font-size: 1.4rem;\n  text-align: left;\n}\n.f-contact__field::-webkit-input-placeholder {\n  color: #000;\n}\n.f-contact__field:-ms-input-placeholder {\n  color: #000;\n}\n.f-contact__field::placeholder {\n  color: #000;\n}\n.f-contact__field:focus::-webkit-input-placeholder {\n  opacity: 0;\n}\n.f-contact__field:focus:-ms-input-placeholder {\n  opacity: 0;\n}\n.f-contact__field:focus::placeholder {\n  opacity: 0;\n}\n.f-contact__field:focus+span._tel {\n  opacity: 0;\n}\n.f-contact__field._tel {\n  padding: 0 50px 0 14px;\n}\n.f-contact__field._tel._hide + span._tel {\n  opacity: 0;\n}\n.f-contact__button {\n  width: 90px;\n  height: 37px;\n  padding-top: 5px;\n  background-color: #c82229;\n  color: #fff;\n  font-size: 1.4rem;\n  text-transform: uppercase;\n}\n.f-contact__text-required {\n  font-size: 1.2rem;\n  color: #909090;\n}\n.f-contact__label {\n  position: relative;\n  display: block;\n  padding-left: 18px;\n  cursor: pointer;\n}\n.f-contact__chk {\n  display: none;\n}\n.f-contact__chk:checked +.f-contact__check-span:after {\n  display: block;\n}\n.f-contact__check-span:before {\n  display: block;\n  content: '';\n  position: absolute;\n  width: 9px;\n  height: 9px;\n  background: #fff;\n  border: 1px solid #000;\n  left: 0;\n  top: 2px;\n}\n.f-contact__check-span:after {\n  display: none;\n  content: '';\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  background: #c82229;\n  left: 1px;\n  top: 3px;\n}\n@media only screen and (min-width: 1281px) {\n  .f-contact__row {\n    position: relative;\n    width: 100%;\n    padding-top: 6.9%;\n  }\n  .f-contact__row .f-default__label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n  .f-contact__row._tel span {\n    font-size: 1.1vw;\n  }\n  .f-contact__field {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    font-size: 1.1vw;\n  }\n  .f-contact__row-wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n  .f-contact__button {\n    height: 100%;\n    width: 16%;\n    font-size: 1.1vw;\n  }\n  .f-contact__text,\n  .f-contact__choice {\n    font-size: 1.1vw;\n  }\n  .f-contact__text-required {\n    font-size: 0.8vw;\n  }\n}\n@media only screen and (min-width: 1700px) {\n  .f-contact__check-span:after {\n    top: 5px;\n  }\n  .f-contact__check-span:before {\n    top: 4px;\n  }\n}\n@media only screen and (min-width: 1500px) {\n  .f-contact__check-span:after {\n    width: 9px;\n    height: 9px;\n  }\n  .f-contact__check-span:before {\n    width: 11px;\n    height: 11px;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .f-contact {\n    margin-bottom: 78px;\n  }\n  .f-contact__text {\n    font-size: 1.8rem;\n    margin-bottom: 30px;\n    letter-spacing: 0.01rem;\n  }\n  .f-contact__text-required {\n    font-size: 1.5rem;\n    padding-top: 1px;\n  }\n  .f-contact__row._short {\n    width: calc(100% - 59px);\n  }\n  .f-contact__row._short._bottom {\n    width: 100%;\n  }\n  .f-contact__row._tel span {\n    line-height: 3rem;\n    font-size: 1.8rem;\n    top: 12px;\n    right: 29px;\n  }\n  .f-contact__field {\n    height: 50px;\n    font-size: 1.8rem;\n    padding: 4px 10px 0 26px;\n  }\n  .f-contact__field._tel {\n    padding: 4px 10px 0 26px;\n  }\n  .f-contact__button {\n    width: 99px;\n    height: 41px;\n    font-size: 1.7rem;\n  }\n  .f-contact__label {\n    font-size: 1.8rem;\n    padding-left: 25px;\n  }\n  .f-contact__check-span:before {\n    width: 16px;\n    height: 16px;\n    top: 0;\n  }\n  .f-contact__check-span:after {\n    width: 14px;\n    height: 14px;\n    top: 1px;\n  }\n  .f-contact__choice {\n    margin-left: 0;\n  }\n  .f-contact__choices {\n    max-width: 335px;\n    padding-right: 28px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .f-contact__top {\n    margin-bottom: 40px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .f-contact__text {\n    display: block;\n  }\n  .f-contact__choice:first-child {\n    margin-left: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".l-options {\n  max-width: 78%;\n  margin: 0 auto;\n}\n.l-options__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.l-options__item:nth-child(2n) .l-options__outer {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n  border-right: 0;\n  border-left: 5px solid #c82229;\n}\n.l-options__item:nth-child(2n) .l-options__text {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.l-options__item._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.l-options__item._animated {\n  opacity: 1;\n}\n.l-options__outer {\n  max-width: 75%;\n  width: 75%;\n  -ms-flex-preferred-size: 75%;\n      flex-basis: 75%;\n  border-right: 5px solid #c82229;\n}\n.l-options__link {\n  display: block;\n  position: relative;\n}\n.l-options__link:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.l-options__link .svg-plus {\n  fill: #fff;\n  opacity: 0;\n  transition: opacity 0.2s;\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  width: 35px;\n  height: 35px;\n}\n.l-options__link:hover:before {\n  opacity: 0.7;\n}\n.l-options__link:hover .svg-plus {\n  opacity: 0.8;\n}\n.l-options__img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n}\n.l-options__text {\n  max-width: 25%;\n  width: 25%;\n  -ms-flex-preferred-size: 25%;\n      flex-basis: 25%;\n  text-align: center;\n  font-size: 2.4rem;\n  color: #000;\n  text-transform: uppercase;\n  font-family: 'goodoffcxcondbold', sans-serif;\n}\n.l-options__text p {\n  font-size: 2.4rem;\n}\n@media only screen and (max-width: 740px) {\n  .l-options {\n    display: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".m-greeting {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  pointer-events: none;\n}\n.m-greeting .btn-hamburger {\n  pointer-events: auto;\n}\n.m-greeting__nav {\n  pointer-events: none;\n}\n._open-menu .m-greeting__nav {\n  pointer-events: auto;\n}\n.m-greeting__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n}\n.m-greeting__item {\n  display: block;\n  padding: 0 10px;\n  overflow: hidden;\n}\n.m-greeting__item:nth-child(0) .m-greeting__button {\n  transition-delay: 0s;\n}\n.m-greeting__item:nth-child(0) .m-greeting__button span {\n  transition-delay: 0s;\n}\n.m-greeting__item:nth-child(1) .m-greeting__button {\n  transition-delay: 0.2s;\n}\n.m-greeting__item:nth-child(1) .m-greeting__button span {\n  transition-delay: 0.2s;\n}\n.m-greeting__item:nth-child(2) .m-greeting__button {\n  transition-delay: 0.1s;\n}\n.m-greeting__item:nth-child(2) .m-greeting__button span {\n  transition-delay: 0.1s;\n}\n.m-greeting__item:nth-child(3) .m-greeting__button {\n  transition-delay: 0s;\n}\n.m-greeting__item:nth-child(3) .m-greeting__button span {\n  transition-delay: 0s;\n}\n._open-menu .m-greeting__item:nth-child(0) .m-greeting__button {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition-delay: 0s;\n}\n._open-menu .m-greeting__item:nth-child(0) .m-greeting__button span {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition-delay: 0s;\n}\n._open-menu .m-greeting__item:nth-child(1) .m-greeting__button {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition-delay: 0s;\n}\n._open-menu .m-greeting__item:nth-child(1) .m-greeting__button span {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition-delay: 0s;\n}\n._open-menu .m-greeting__item:nth-child(2) .m-greeting__button {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition-delay: 0.1s;\n}\n._open-menu .m-greeting__item:nth-child(2) .m-greeting__button span {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition-delay: 0.1s;\n}\n._open-menu .m-greeting__item:nth-child(3) .m-greeting__button {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition-delay: 0.2s;\n}\n._open-menu .m-greeting__item:nth-child(3) .m-greeting__button span {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition-delay: 0.2s;\n}\n.m-greeting__button {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: translateX(-120%);\n          transform: translateX(-120%);\n  display: block;\n  font-family: 'goodoffcxcondbold', sans-serif;\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #000;\n  text-transform: uppercase;\n  overflow: hidden;\n}\n.m-greeting__button span {\n  display: block;\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: translateX(120%);\n          transform: translateX(120%);\n}\n@media only screen and (max-width: 740px) {\n  .m-greeting {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    margin-top: 15px;\n    margin-left: 28px;\n  }\n  .m-greeting._open-menu .m-greeting__list:after {\n    transition: -webkit-transform 0.2s ease-out;\n    transition: transform 0.2s ease-out;\n    transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n    -webkit-transform: scaleY(1) translateZ(0);\n            transform: scaleY(1) translateZ(0);\n  }\n  .m-greeting__button {\n    display: block;\n    font-size: 2.5rem;\n  }\n  .m-greeting__button {\n    line-height: 1.8;\n  }\n  .m-greeting__item {\n    z-index: 1;\n  }\n  .m-greeting__list {\n    margin-top: -3px;\n    margin-left: -6px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n  }\n  .m-greeting__list:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    transition: -webkit-transform 0.2s ease-out;\n    transition: transform 0.2s ease-out;\n    transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n    -webkit-transform: scaleY(0) translateZ(0);\n            transform: scaleY(0) translateZ(0);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    background-color: rgba(255,255,255,0.5);\n    width: 100%;\n    height: 100%;\n    bottom: 0;\n    z-index: -1;\n  }\n}\n@media only screen and (max-width: 740px) and (orientation: landscape) {\n  .m-greeting {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .m-greeting__list {\n    display: block;\n    margin-top: -3px;\n  }\n  .m-greeting__item {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  .m-greeting {\n    margin-left: 15px;\n  }\n  .m-greeting__item {\n    padding: 0 5px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".modal-default {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n  z-index: 2;\n}\n.modal-default__wrapper {\n  padding: 50px;\n  width: 100%;\n  height: 100%;\n  font-size: 0;\n  background: rgba(0,0,0,0.7);\n}\n.modal-default__wrapper:after {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 100%;\n  vertical-align: middle;\n}\n.modal-default__content {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  padding: 65px 50px 50px;\n  background: #fff;\n  max-width: 800px;\n  width: 100%;\n  max-height: 100%;\n}\n.modal-default__close {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n  width: 40px;\n  height: 40px;\n  z-index: 3;\n}\n.modal-default__close .svg-plus {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 36px;\n  height: 36px;\n  fill: #000;\n}\n@media only screen and (max-width: 740px) {\n  .modal-default__wrapper {\n    padding: 0;\n  }\n  .modal-default__content {\n    display: block;\n    padding: 20px;\n    height: 100%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".modal-help__title {\n  font-size: 2.4rem;\n  text-transform: uppercase;\n}\n.modal-help__text {\n  font-size: 1.6rem;\n  color: #000;\n  line-height: 2.2rem;\n}\n@media only screen and (max-width: 740px) {\n  .modal-help {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".modal-house__title {\n  font-size: 2.4rem;\n  text-transform: uppercase;\n}\n.modal-house__text {\n  font-size: 1.6rem;\n  color: #000;\n  line-height: 2.2rem;\n}\n@media only screen and (max-width: 740px) {\n  .modal-house {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".modal-policy__inner {\n  text-align: left;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100vh - 200px);\n}\n.modal-policy__wrapper>p {\n  font-size: 1.4rem;\n  margin-bottom: 10px;\n}\n.modal-policy__title {\n  font-size: 3.6rem;\n  margin-bottom: 10px;\n}\n.modal-policy__subtitle {\n  font-size: 1.4rem;\n  margin-bottom: 10px;\n}\n.modal-policy__text {\n  font-size: 1.4rem;\n  color: #000;\n  line-height: 1.5rem;\n  margin-bottom: 12px;\n}\n.modal-policy__ol-list {\n  counter-reset: myCounter;\n}\n.modal-policy__ol-list h3 {\n  font-size: 1.4rem;\n  padding-left: 20px;\n  position: relative;\n  margin-bottom: 10px;\n}\n.modal-policy__ol-list li>h3 {\n  list-style: none;\n}\n.modal-policy__ol-list li>h3:before {\n  position: absolute;\n  left: 0;\n  counter-increment: myCounter;\n  content: counter(myCounter) '.';\n  display: inline-block;\n  text-align: center;\n  font-size: 1.4rem;\n  color: #000;\n}\n.modal-policy__ol-list li p {\n  font-size: 1.4rem;\n  margin-bottom: 10px;\n}\n.modal-policy__ol-list li p._list-title {\n  margin: 0;\n}\n.modal-policy__list {\n  padding-left: 20px;\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n}\n.modal-policy__list li {\n  position: relative;\n  padding-left: 15px;\n  font-size: 1.4rem;\n  line-height: 1.6;\n}\n.modal-policy__list li:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background-color: #000;\n  top: 4px;\n  left: 0;\n}\n@media only screen and (max-width: 740px) {\n  .modal-policy__inner {\n    height: calc(100vh - 90px);\n    margin-top: 50px;\n  }\n  .modal-policy__wrapper {\n    padding-bottom: 40px;\n  }\n  .modal-policy__title {\n    font-size: 2.6rem;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".s-building__text {\n  max-width: 74.3%;\n  margin: 108px auto 116px;\n}\n.s-building__text._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.s-building__text._animated {\n  opacity: 1;\n}\n.s-building__text .container {\n  padding: 0;\n}\n.s-building__text p {\n  margin: 0 auto;\n  letter-spacing: 0.01rem;\n  font-size: 2.1rem;\n  line-height: 2.5rem;\n}\n.s-building__text p._margin {\n  margin: 0;\n  max-width: 78.7%;\n}\n.s-building__text._margin {\n  max-width: 72.1%;\n  margin: 113px auto 85px;\n}\n@media only screen and (max-width: 1024px) {\n  .s-building__text {\n    margin: 65px auto;\n    cursor: pointer;\n  }\n  .s-building__text .container {\n    padding: 0 20px;\n  }\n  .s-building__text._margin {\n    margin: 65px auto 55px;\n  }\n  .s-building__text p._margin {\n    margin: 0 auto;\n    max-width: 950px;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .s-building__text {\n    max-width: 100%;\n    padding: 0 43px;\n    margin: 70px 0 75px;\n  }\n  .s-building__text .container {\n    padding: 0 43px;\n  }\n  .s-building__text._margin {\n    max-width: 100%;\n    padding: 0 43px;\n    margin: 100px 0 80px;\n  }\n  .s-building__text p {\n    font-size: 2.2rem;\n    line-height: 2.6rem;\n  }\n  .s-building__text p._margin {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .s-building__text {\n    margin: 70px 0 75px;\n    padding: 0 25px;\n  }\n  .s-building__text._margin {\n    padding: 0 25px;\n  }\n  .s-building__text .container {\n    padding: 0 25px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".s-contact {\n  padding: 85px 0 113px;\n  max-width: 60.2%;\n  margin: 0 auto;\n}\n.s-contact__title {\n  display: table;\n  font-size: 2.1rem;\n  font-family: 'goodoffcxcondbold', sans-serif;\n  letter-spacing: -0.02rem;\n  position: relative;\n  padding-bottom: 10px;\n  margin-bottom: 42px;\n}\n.s-contact__title:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 7px;\n  background-color: #c82229;\n}\n.s-contact__title._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.s-contact__title._animated {\n  opacity: 1;\n}\n.s-contact__wrapper {\n  width: calc(100% - 98px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.s-contact__wrapper._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.s-contact__wrapper._animated {\n  opacity: 1;\n}\n.s-contact .svg-bp-logo {\n  width: 122px;\n  height: 21px;\n}\n.s-contact .svg-jbg-logo {\n  width: 118px;\n  height: 51px;\n}\n@media only screen and (min-width: 1281px) {\n  .s-contact__title {\n    font-size: 1.7vw;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .s-contact {\n    max-width: 100%;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .s-contact {\n    padding: 67px 0 103px;\n  }\n  .s-contact .container {\n    max-width: 100%;\n  }\n  .s-contact__title {\n    margin-bottom: 47px;\n    letter-spacing: 0;\n    font-size: 2.9rem;\n    padding-bottom: 12px;\n  }\n  .s-contact__title:after {\n    width: 100px;\n    height: 8px;\n  }\n  .s-contact__wrapper {\n    width: 100%;\n  }\n  .s-contact__logo-img {\n    width: 100%;\n    height: auto;\n  }\n  .s-contact__logo .svg-bp-logo,\n  .s-contact__logo .svg-jbg-logo {\n    width: 125px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".s-footer {\n  padding-bottom: 20px;\n  transition: opacity 0.2s ease-out;\n  opacity: 1;\n}\n.s-footer._hidden {\n  opacity: 0;\n}\n.p-home .s-footer {\n  margin-top: -40px;\n  margin-bottom: 0;\n}\n.s-footer .container {\n  max-width: 92.4%;\n  padding: 0 20px;\n}\n.s-footer__outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.s-footer__buttons {\n  display: block;\n}\n.s-footer__buttons-outer {\n  display: inline-block;\n}\n.s-footer__address,\n.s-footer__policy {\n  font-size: 1.1rem;\n  color: #000;\n  opacity: 0.4;\n}\n.s-footer__policy {\n  display: inline-block;\n  vertical-align: baseline;\n  margin-left: 17px;\n}\n.s-footer__home {\n  display: inline-block;\n  vertical-align: baseline;\n  position: relative;\n  bottom: -2px;\n  margin-left: 7px;\n  font-size: 0;\n}\n.s-footer__home .svg-home {\n  width: 17px;\n  height: 15px;\n  fill: #000;\n  opacity: 0.4;\n}\n.s-footer__help {\n  display: inline-block;\n  vertical-align: baseline;\n  position: relative;\n  bottom: -2px;\n  margin-left: 7px;\n  font-size: 0;\n}\n.s-footer__help .svg-wheelchair {\n  width: 13px;\n  height: 15px;\n  fill: #000;\n  opacity: 0.4;\n}\n@media only screen and (max-width: 1024px) {\n  .s-footer__buttons {\n    position: relative;\n    bottom: -1px;\n  }\n}\n@media only screen and (max-width: 1024px) and (orientation: portrait) {\n  .p-home .s-footer {\n    display: none;\n  }\n}\n@media only screen and (max-width: 900px) {\n  .p-home .s-footer {\n    margin-top: 0;\n    padding-top: 13px;\n  }\n  .b-home-popup .s-footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n  }\n  .b-home-popup .s-footer__address {\n    max-width: 45%;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .s-footer .container {\n    max-width: 100%;\n    padding: 0 19px;\n  }\n  .s-footer__buttons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .s-footer__buttons-outer {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    text-align: right;\n  }\n  .s-footer__outer {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .s-footer__address {\n    max-width: 38%;\n    font-size: 1.4rem;\n    line-height: 1.5rem;\n  }\n  .b-home-popup .s-footer__address {\n    max-width: 45%;\n  }\n  .s-footer__policy {\n    font-size: 1.4rem;\n    margin: 0;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .s-footer__help {\n    margin-left: 6px;\n  }\n  .s-footer__help .svg-wheelchair {\n    width: 11px;\n    position: relative;\n    bottom: 2px;\n  }\n  .s-footer__home .svg-home {\n    width: 14px;\n  }\n  .p-home .s-footer {\n    display: none;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .s-footer__address {\n    max-width: 45%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".s-greeting {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  background-image: url(" + __webpack_require__(816) + ");\n  background-color: #8c8a8b;\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  background-size: auto 100%;\n}\n.s-greeting__image-list {\n  display: none;\n}\n.s-greeting__canvas {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  height: 100%;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.s-greeting__canvas-wrapper {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.s-greeting__block {\n  z-index: 1;\n  position: absolute;\n  height: 100%;\n  width: 280px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  left: 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 50px;\n}\n.s-greeting__menu {\n  pointer-events: none;\n  position: absolute;\n  top: 35px;\n  left: 20px;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.s-greeting__menu._disabled {\n  pointer-events: none;\n}\n.s-greeting__logo {\n  display: block;\n  width: 85px;\n  pointer-events: auto;\n}\n.s-greeting__logo .svg-logo {\n  width: 62px;\n  height: 38px;\n  fill: #000;\n}\n.s-greeting__bottom {\n  opacity: 0;\n  transition: opacity 0.2s ease-out;\n}\n.s-greeting__bottom button {\n  cursor: default;\n}\n.s-greeting__bottom._visible {\n  opacity: 1;\n}\n@media only screen and (max-width: 1024px) {\n  s-greeting {\n    display: block;\n  }\n  .s-greeting {\n    height: 100%;\n  }\n  .s-greeting__block {\n    height: 70vh;\n    bottom: 0;\n    top: auto;\n  }\n}\n@media only screen and (max-width: 1024px) and (orientation: portrait) {\n  .s-greeting {\n    background-size: auto 70%;\n    background-repeat: repeat-y;\n  }\n  .s-greeting:after {\n    background: linear-gradient(to bottom, #959595 0%, transparent 30%);\n  }\n  .s-greeting__block {\n    height: 80vh;\n    bottom: 0;\n    top: auto;\n  }\n  .s-greeting__canvas {\n    height: 70vh;\n  }\n  .s-greeting__canvas-wrapper {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n}\n@media screen and (max-width: 900px) {\n  .s-greeting__block {\n    max-width: 272px;\n  }\n  .s-greeting .b-greeting-title {\n    display: none;\n  }\n  .s-greeting .b-greeting-control {\n    display: none;\n  }\n}\n@media screen and (max-width: 740px) and (orientation: portrait) {\n  .s-greeting {\n    background-image: url(" + __webpack_require__(815) + ");\n    background-color: #ece9ea;\n    background-size: 100% auto;\n    background-position: bottom right;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .s-greeting__canvas {\n    height: auto;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 740px) and (orientation: landscape) {\n  .s-greeting {\n    background-image: url(" + __webpack_require__(814) + ");\n    background-color: #ece9ea;\n    background-size: auto 100%;\n    background-position: bottom right;\n    height: 100%;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .s-greeting__menu {\n    top: 16px;\n    left: 26px;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .s-greeting__logo {\n    width: 64px;\n    margin-top: 15px;\n  }\n  .s-greeting__logo .svg-logo {\n    width: 64px;\n    height: 40px;\n  }\n}\n@media only screen and (max-width: 420px) {\n  .s-greeting__block {\n    width: 150px;\n    padding-left: 20px;\n  }\n}\n@media only screen and (max-width: 360px) and (orientation: portrait) {\n  .s-greeting__canvas-wrapper {\n    margin-top: auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".s-neighborhood {\n  padding: 92px 0 137px;\n}\n.s-neighborhood__top {\n  margin-bottom: 99px;\n}\n.s-neighborhood__top .container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 92.2%;\n  padding: 0 20px;\n}\n.s-neighborhood__col {\n  width: 50%;\n  max-width: 50%;\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n}\n.s-neighborhood__col._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.s-neighborhood__col._animated {\n  opacity: 1;\n}\n.s-neighborhood__text {\n  padding-left: 71px;\n  padding-right: 40px;\n}\n.s-neighborhood__text p {\n  max-width: 95%;\n  margin: 0 auto;\n  font-size: 2.1rem;\n  letter-spacing: 0.01rem;\n  line-height: 2.5rem;\n}\n.s-neighborhood__text p._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.s-neighborhood__text p._animated {\n  opacity: 1;\n}\n.s-neighborhood__img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n}\n.s-neighborhood__wrap-img {\n  width: 100%;\n  height: 100%;\n}\n.s-neighborhood__center {\n  max-width: 1920px;\n  text-align: right;\n  margin: 0 auto 117px;\n}\n.s-neighborhood__center._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.s-neighborhood__center._animated {\n  opacity: 1;\n}\n.s-neighborhood__center-wrap-img {\n  max-width: 74.4%;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  position: relative;\n  padding-top: 43.1%;\n  margin-left: auto;\n}\n.s-neighborhood__center-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: bottom;\n     object-position: bottom;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.s-neighborhood__bottom .container {\n  max-width: 91.4%;\n  padding: 0 20px;\n}\n.s-neighborhood__bottom p {\n  max-width: 57%;\n  font-size: 2.1rem;\n  line-height: 2.5rem;\n  letter-spacing: 0.01rem;\n}\n.s-neighborhood__bottom._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.s-neighborhood__bottom._animated {\n  opacity: 1;\n}\n@media only screen and (max-width: 1281px) {\n  .s-neighborhood__wrap-img {\n    max-width: 559px;\n    max-height: 572px;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .s-neighborhood {\n    padding: 50px 0 60px;\n  }\n  .s-neighborhood .container {\n    padding: 0 20px;\n  }\n  .s-neighborhood__top {\n    margin-bottom: 50px;\n  }\n  .s-neighborhood__text {\n    padding-left: 40px;\n  }\n  .s-neighborhood__center {\n    margin-bottom: 60px;\n  }\n  .s-neighborhood__bottom p {\n    max-width: 100%;\n  }\n}\n@media only screen and (max-width: 900px) {\n  .s-neighborhood__text {\n    padding-left: 20px;\n    padding-right: 0;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .s-neighborhood {\n    padding: 71px 0 91px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .s-neighborhood .container {\n    display: block;\n    padding: 0 27px;\n  }\n  .s-neighborhood__top {\n    margin-bottom: 0;\n  }\n  .s-neighborhood__top .container {\n    max-width: 100%;\n    padding: 0;\n  }\n  .s-neighborhood__col {\n    width: 100%;\n    max-width: 100%;\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    margin-bottom: 85px;\n  }\n  .s-neighborhood__text {\n    padding-left: 0;\n    padding-top: 0;\n    padding-right: 0;\n  }\n  .s-neighborhood__text p {\n    max-width: 100%;\n    font-size: 2.2rem;\n    line-height: 2.6rem;\n    padding: 0 43px;\n  }\n  .s-neighborhood__bottom {\n    margin-bottom: 20px;\n  }\n  .s-neighborhood__bottom p {\n    font-size: 2.2rem;\n    line-height: 2.6rem;\n  }\n  .s-neighborhood__wrap-img {\n    height: 384px;\n    max-width: 100%;\n  }\n  .s-neighborhood__center {\n    margin-bottom: 98px;\n    width: 100%;\n  }\n  .s-neighborhood__center-wrap-img {\n    max-width: 100%;\n    padding-top: 112.2%;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .s-neighborhood__text p {\n    padding: 0 25px;\n  }\n  .s-neighborhood__bottom .container {\n    padding: 0 25px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".s-options {\n  margin-bottom: 163px;\n  cursor: pointer;\n}\n.s-options .container {\n  max-width: 95.3%;\n  position: relative;\n}\n@media only screen and (max-width: 1024px) {\n  .s-options {\n    margin-bottom: 80px;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .s-options {\n    margin-bottom: 133px;\n    height: 226px;\n    cursor: pointer;\n  }\n  .s-options .container {\n    max-width: 100%;\n    height: 100%;\n  }\n}\n@media only screen and (max-width: 740px) and (orientation: landscape) {\n  .s-options {\n    margin-bottom: 30px;\n  }\n  .s-options .container {\n    height: 100%;\n    max-width: 100%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "sl-options {\n  display: block;\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  height: calc(100% + 2px);\n  pointer-events: none;\n}\n.sl-options {\n  opacity: 0;\n  transition: opacity 0.2s ease-out;\n  pointer-events: none;\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  height: calc(100% + 2px);\n}\n.sl-options .sl-options__item.slick-active .sl-options__text {\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.sl-options._active {\n  opacity: 1;\n  pointer-events: auto;\n}\n.sl-options._active .sl-options__item.slick-active .sl-options__text {\n  opacity: 1;\n  transition: opacity 0.6s 0.6s ease;\n}\n.sl-options__wrapper {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.sl-options__item {\n  overflow: hidden;\n}\n.sl-options__img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n}\n.sl-options__text {\n  display: table;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  transition: opacity 0.2s ease-out;\n  font-size: 1.4rem;\n  line-height: 29px;\n  padding: 4px 24px 0 42px;\n  letter-spacing: 0.005rem;\n  background-color: #000;\n}\n.slick-current .sl-options__text {\n  opacity: 1;\n  transition: opacity 0.6s 0.6s ease;\n}\n.sl-options__text:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  right: -4px;\n  top: 0;\n  background-color: #c82229;\n}\n.sl-options__text:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  top: 0;\n  width: 2px;\n  background-color: #e96621;\n  right: -6px;\n}\n.sl-options__text p {\n  color: #fff;\n}\n.sl-options .slick-arrow {\n  position: absolute;\n  top: 50%;\n  font-size: 0;\n  width: 40px;\n  height: 40px;\n}\n.sl-options .slick-list,\n.sl-options .slick-track,\n.sl-options__outer {\n  height: 100%;\n}\n.sl-options .slick-next {\n  right: 2.2%;\n}\n.sl-options .slick-prev {\n  left: 2.2%;\n}\n.sl-options .slick-next,\n.sl-options .slick-prev {\n  z-index: 1;\n}\n.sl-options .slick-next .svg-arrow-circle,\n.sl-options .slick-prev .svg-arrow-circle {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  fill: #fff;\n  width: 35px;\n  height: 35px;\n}\n.sl-options .slick-prev .svg-arrow-circle {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.sl-options__close {\n  position: absolute;\n  top: 24px;\n  right: 16px;\n  width: 40px;\n  height: 40px;\n}\n.sl-options__close .svg-plus {\n  fill: #000;\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 35px;\n  height: 35px;\n}\n.sl-options__animate-text {\n  display: none;\n}\n@media only screen and (max-width: 1024px) {\n  .sl-options__text {\n    padding: 8px 20px;\n  }\n  .sl-options__text p {\n    font-size: 1.4rem;\n    line-height: 1.2;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .sl-options {\n    height: calc(100% - 1px);\n    opacity: 1;\n    pointer-events: auto;\n  }\n  .sl-options .sl-options__item.slick-active .sl-options__text {\n    opacity: 1;\n    transition: opacity 0.6s 0.6s ease, background-color 0.2s;\n  }\n  .sl-options__text {\n    transition: background-color 0.2s ease-out, color 0.2s ease-out;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    background-color: rgba(0,0,0,0.8);\n  }\n  .sl-options__text p {\n    transition: opacity 0.2s ease-out;\n    font-size: 1.6rem;\n    max-width: 84%;\n    margin: 0 auto;\n  }\n  .sl-options__outer._transparent .sl-options__text {\n    transition: background-color 0.2s ease-out, color 0.2s ease-out;\n    background-color: transparent;\n  }\n  .sl-options__outer._transparent .sl-options__text p {\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n  }\n  .sl-options__outer._transparent .sl-options__animate-text {\n    transition: -webkit-transform 0.2s ease-out;\n    transition: transform 0.2s ease-out;\n    transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  .sl-options__close {\n    display: none;\n  }\n  .sl-options__animate-text {\n    transition: -webkit-transform 0.2s ease-out;\n    transition: transform 0.2s ease-out;\n    transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n    display: block;\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    top: 3%;\n    right: 1.7%;\n  }\n  .sl-options__animate-text._transparent {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    transition: -webkit-transform 0.2s ease-out;\n    transition: transform 0.2s ease-out;\n    transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  }\n  .sl-options__animate-text .svg-cross {\n    display: block;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    fill: #fff;\n    width: 12px;\n    height: 12px;\n    display: block;\n  }\n  .sl-options__animate-text:before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: 24px;\n    height: 24px;\n    background-color: #c72129;\n    border-radius: 50%;\n  }\n  .sl-options .slick-next,\n  .sl-options .slick-prev {\n    display: none !important;\n  }\n  .sl-options .slick-dots {\n    opacity: 1;\n    position: absolute;\n    left: 50%;\n    bottom: -37px;\n    -webkit-transform: translateX(-50%) translateZ(0);\n            transform: translateX(-50%) translateZ(0);\n  }\n  .sl-options .slick-dots li {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .sl-options .slick-dots li button {\n    position: relative;\n    font-size: 0;\n    width: 17px;\n    height: 35px;\n  }\n  .sl-options .slick-dots li button:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: 9px;\n    height: 9px;\n    background-color: #000;\n    border-radius: 50%;\n  }\n  .sl-options .slick-dots li.slick-active button:after {\n    background-color: #c72129;\n  }\n  .sl-options._active .slick-dots {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n@media only screen and (max-width: 740px) and (orientation: landscape) {\n  .sl-options__close,\n  .sl-options .slick-arrow {\n    width: 50px;\n    height: 50px;\n  }\n  .sl-options__close .svg-plus {\n    width: 35px;\n    height: 35px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".sl-samples {\n  position: relative;\n}\n.sl-samples._hidden {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.sl-samples._animated {\n  opacity: 1;\n}\n.sl-samples__item {\n  pointer-events: auto;\n}\n.sl-samples__wrapper-img {\n  height: 100%;\n  padding-top: 48.7%;\n  width: 100%;\n  max-width: 100%;\n  position: relative;\n}\n.sl-samples__img {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: bottom;\n     object-position: bottom;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.sl-samples .slick-list.draggable {\n  padding: 0 !important;\n}\n.sl-samples__text {\n  position: relative;\n  margin-top: -2px;\n  background: #fff;\n}\n.sl-samples__text p {\n  display: table;\n  max-width: calc(100% - 150px);\n  color: #fff;\n  letter-spacing: 0.007rem;\n  font-size: 1.4rem;\n  background-color: #000;\n  line-height: 29px;\n  padding: 3px 24px 0 72px;\n  position: relative;\n}\n.sl-samples__text p:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  right: -4px;\n  top: 0;\n  background: #c82229;\n}\n.sl-samples__text p:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  top: 0;\n  width: 2px;\n  background: #e96621;\n  right: -6px;\n}\n.sl-samples .slick-arrow {\n  position: absolute;\n  bottom: -40px;\n  z-index: 1;\n}\n.sl-samples .slick-next,\n.sl-samples .slick-prev {\n  font-size: 0;\n  width: 40px;\n  height: 40px;\n  right: 4.7%;\n}\n.sl-samples .slick-next .svg-arrow-circle,\n.sl-samples .slick-prev .svg-arrow-circle {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  fill: #c82229;\n  width: 22px;\n  height: 22px;\n}\n.sl-samples .slick-prev .svg-arrow-circle {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.sl-samples .slick-prev {\n  right: calc(4.7% + 76px);\n}\n.sl-samples .slick-prev:before {\n  left: 3px;\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg);\n}\n.sl-samples .slick-next:before {\n  right: 2px;\n}\n.sl-samples__pages {\n  letter-spacing: 0.08rem;\n  position: absolute;\n  top: 2px;\n  width: 116px;\n  font-size: 1.4rem;\n  font-family: 'goodoffcxcondbold', sans-serif;\n  color: #000;\n  right: 4.7%;\n  line-height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.sl-samples__pages-all {\n  display: block;\n  position: relative;\n  margin-left: 5px;\n}\n.sl-samples__pages-all:before {\n  position: absolute;\n  content: '/';\n  display: block;\n  left: -3px;\n}\n.sl-samples__background-text {\n  pointer-events: none;\n  opacity: 1;\n  transition: background-color 0.2s ease-out, color 0.2s ease-out;\n  position: absolute;\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #fff;\n  line-height: 2.2rem;\n  background-color: rgba(0,0,0,0.8);\n}\n.sl-samples__background-text p {\n  transition: opacity 0.2s ease-out;\n  font-size: 1.6rem;\n  max-width: 80%;\n  line-height: 1.3;\n}\n.sl-samples__background-text._transparent {\n  transition: background-color 0.2s ease-out, color 0.2s ease-out;\n  background-color: transparent;\n}\n.sl-samples__background-text._transparent p {\n  transition: opacity 0.2s ease-out;\n  opacity: 0;\n}\n.sl-samples__background-text._transparent .sl-samples__close-text {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n}\n.sl-samples__close-text {\n  pointer-events: auto;\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  display: none;\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  width: 40px;\n  height: 40px;\n}\n.sl-samples__close-text:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 24px;\n  height: 24px;\n  background-color: #c72129;\n  border-radius: 50%;\n}\n.sl-samples__close-text .svg-cross {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  fill: #fff;\n  width: 12px;\n  height: 12px;\n}\n.sl-samples .slick-dots {\n  display: none !important;\n  position: absolute;\n  left: 50%;\n  bottom: -39px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.sl-samples .slick-dots li {\n  display: inline-block;\n  vertical-align: middle;\n}\n.sl-samples .slick-dots li button {\n  position: relative;\n  font-size: 0;\n  width: 17px;\n  height: 35px;\n}\n.sl-samples .slick-dots li button:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 9px;\n  height: 9px;\n  background-color: #000;\n  border-radius: 50%;\n}\n.sl-samples .slick-dots li.slick-active button:after {\n  background-color: #c72129;\n}\n@media only screen and (max-width: 1024px) {\n  .sl-samples__text p {\n    max-width: calc(100% - 150px);\n    line-height: 1.2;\n    padding: 8px 20px;\n  }\n  .sl-samples__pages {\n    width: 50px;\n    top: 3px;\n    bottom: auto;\n    right: 45px;\n  }\n  .sl-samples .slick-next {\n    right: 10px;\n  }\n  .sl-samples .slick-prev {\n    right: 90px;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .sl-samples:after {\n    display: block;\n    content: '';\n    height: 0;\n    visibility: hidden;\n    clear: both;\n  }\n  .sl-samples__text {\n    display: none;\n  }\n  .sl-samples__pages {\n    display: none;\n  }\n  .sl-samples .slick-arrow {\n    bottom: -29px;\n  }\n  .sl-samples .slick-next,\n  .sl-samples .slick-prev {\n    display: none !important;\n  }\n  .sl-samples .slick-dots {\n    display: block;\n  }\n  .sl-samples__background-text {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .sl-samples__close-text {\n    display: block;\n  }\n  .sl-samples .slick-dots {\n    display: block !important;\n  }\n}\n@media only screen and (max-width: 740px) and (orientation: landscape) {\n  .sl-samples p {\n    font-size: 1.6rem;\n  }\n  .sl-samples__img,\n  .sl-samples__wrapper {\n    max-height: 92vh;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".building-page .b-greeting-title {\n  display: none;\n  max-width: 100%;\n  margin: 70px auto 0;\n  text-align: center;\n}\n.building-page .b-greeting-title__title {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.building-page .b-greeting-title__title-item span {\n  color: #000;\n  font-size: 8rem;\n  line-height: 6.5rem;\n  padding-bottom: 1px;\n  display: inline-block;\n}\n.building-page .b-greeting-title__title-item._zero {\n  margin-left: -70px;\n}\n.building-page .b-greeting-title__title-item._half-ruble {\n  margin-left: 4px;\n}\n.building-page .b-greeting-title__title-item._half {\n  margin-left: 23px;\n}\n.building-page .b-greeting-title__comment-item {\n  color: #000;\n  font-size: 2.5rem;\n  display: inline-block;\n}\n.building-page .b-greeting-title__comment-item._shift-end {\n  padding-left: 0;\n  margin-left: -9px;\n}\n@media only screen and (max-width: 900px) {\n  .building-page .b-greeting-title {\n    display: block;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .building-page .b-greeting-title__title-item span {\n    font-size: 6rem;\n    line-height: 4.1rem;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".contact-page .b-greeting-title {\n  display: none;\n  max-width: 100%;\n  margin: 70px auto 0;\n  text-align: center;\n}\n.contact-page .b-greeting-title__title {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.contact-page .b-greeting-title__title-item span {\n  color: #000;\n  font-size: 8rem;\n  line-height: 6.5rem;\n  padding-bottom: 1px;\n  display: inline-block;\n}\n.contact-page .b-greeting-title__title-item._zero {\n  margin-left: -70px;\n}\n.contact-page .b-greeting-title__title-item._half-ruble {\n  margin-left: 4px;\n}\n.contact-page .b-greeting-title__title-item._half {\n  margin-left: 18px;\n}\n.contact-page .b-greeting-title__comment-item {\n  color: #000;\n  font-size: 2.5rem;\n  display: inline-block;\n}\n.contact-page .b-greeting-title__comment-item._shift-end {\n  padding-left: 0;\n}\n@media only screen and (max-width: 900px) {\n  .contact-page .b-greeting-title {\n    display: block;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .contact-page .b-greeting-title__title-item span {\n    font-size: 6rem;\n    line-height: 4.1rem;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "@media screen and (max-width: 740px) {\n  .home {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    pointer-events: none;\n  }\n  .home._clickable {\n    pointer-events: auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".neighborhood-page .b-greeting-title {\n  display: none;\n  max-width: 100%;\n  margin: 70px auto 0;\n  text-align: center;\n}\n.neighborhood-page .b-greeting-title__title {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.neighborhood-page .b-greeting-title__title-item span {\n  color: #000;\n  font-size: 8rem;\n  line-height: 6.5rem;\n  padding-bottom: 1px;\n  display: inline-block;\n}\n.neighborhood-page .b-greeting-title__title-item._zero {\n  margin-left: -70px;\n}\n.neighborhood-page .b-greeting-title__title-item._half-ruble {\n  margin-left: 4px;\n}\n.neighborhood-page .b-greeting-title__title-item._half {\n  margin-left: 50px;\n}\n.neighborhood-page .b-greeting-title__comment-item {\n  color: #000;\n  font-size: 2.5rem;\n  display: inline-block;\n}\n.neighborhood-page .b-greeting-title__comment-item._shift-end {\n  padding-left: 0;\n  margin-left: -48px;\n}\n@media only screen and (max-width: 900px) {\n  .neighborhood-page .b-greeting-title {\n    display: block;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .neighborhood-page .b-greeting-title__title-item span {\n    font-size: 6rem;\n    line-height: 4.1rem;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\"\n     orientationDetector>\n  <no-index></no-index>\n  <s-greeting changeOrientationDetect></s-greeting>\n  <router-outlet></router-outlet>\n  <s-footer [isHidden]=\"!isFooterVisible\"></s-footer>\n  <modal-default></modal-default>\n</div>\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<div class=\"b-greeting-control\" [ngClass]=\"{ _hidden: _isButtonDisable }\">\n  <button type=\"button\"\n          class=\"b-greeting-control__button _prev\"\n          *ngIf=\"prev\"\n          (click)=\"changeState('prev')\">{{ prev.text }}</button>\n  <button type=\"button\"\n          class=\"b-greeting-control__button _next\"\n          *ngIf=\"next\"\n          (click)=\"changeState('next')\">{{ next.text }}</button>\n</div>\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<div class=\"b-greeting-title\">\n  <ul class=\"b-greeting-title__comment\"\n      [ngClass]=\"{ _hidden: !_isCenter }\">\n    <li class=\"b-greeting-title__comment-item {{ item.name }}\"\n      *ngFor=\"let item of comment\">\n      {{ item.text }}\n    </li>\n  </ul>\n  <ul class=\"b-greeting-title__title\" [ngClass]=\"{ '_in': _isCenter, '_out-right': isOutRight }\">\n    <li class=\"b-greeting-title__title-item\"\n        [ngClass]=\"item.name\"\n        *ngFor=\"let item of title\">\n      <span>{{ item.text }}</span>\n    </li>\n  </ul>\n  <ul class=\"b-greeting-title__subtitle\"\n      [ngClass]=\"{ _hidden: !_isCenter }\">\n    <li class=\"b-greeting-title__subtitle-item {{ item.name }}\"\n        *ngFor=\"let item of subtitle\">\n      {{ item.text }}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<div class=\"b-home-popup\" [ngClass]=\"{ '_active': isPopupVisible }\">\n  <button class=\"b-home-popup__close-button\" (click)=\"hidePopup()\"></button>\n  <b-greeting-title\n    [isOutRight]=\"false\"\n    [isCenter]=\"true\"\n    [comment]=\"comment\"\n    [subtitle]=\"subtitle\"\n    [title]=\"title\"></b-greeting-title>\n  <b-greeting-control\n    [isDisable]=\"isButtonDisabled\"\n    [next]=\"next\"\n    (onState)=\"onState($event)\"\n    [prev]=\"prev\"></b-greeting-control>\n    <s-footer [isHidden]=\"isHiddenFooter\"></s-footer>\n</div>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<b-greeting-title\n  animateTitle\n  [offset]=\"100\"\n  [isFastShowing]=\"true\"\n  (onScrollToElement)=\"setVisibleTitle()\"\n  [isOutRight]=\"isOutRight\"\n  [isCenter]=\"isShow\"\n  [comment]=\"comment\"\n  [subtitle]=\"subtitle\"\n  [title]=\"title\"></b-greeting-title>\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" (click)=\"click($event)\" class=\"btn-down\">\n  <svg-use name=\"arrow-down\"></svg-use>\n</button>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn-hamburger\" type=\"button\" (click)=\"click()\" [ngClass]=\"{ _opened: isOpen }\">\n  <span class=\"btn-hamburger__dash _1\"></span>\n  <span class=\"btn-hamburger__dash _2\"></span>\n  <span class=\"btn-hamburger__dash _3\"></span>\n</button>\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<form id=\"form1\" method=\"post\" action=\"http://westhalf.com/thanks.php\" class=\"f-contact f-default\">\n  <div class=\"f-contact__top _hidden\"  animate [offset]=\"100\" [className]=\"'_animated'\">\n    <div class=\"f-contact__text\">What size apartment are you looking for?{{test}}</div>\n    <div class=\"f-contact__choices\">\n      <div class=\"f-contact__choice\">\n        <label class=\"f-contact__label _chk\">\n          <input type=\"checkbox\" name=\"choice[]\" class=\"f-contact__chk\" value=\"Studio\"><span class=\"f-contact__check-span\"></span><span>Studio</span>\n        </label>\n      </div>\n      <div class=\"f-contact__choice\">\n        <label class=\"f-contact__label _chk\">\n          <input type=\"checkbox\" name=\"choice[]\" class=\"f-contact__chk\" value=\"1BR\"><span class=\"f-contact__check-span\"></span><span>1BR</span>\n        </label>\n      </div>\n      <div class=\"f-contact__choice\">\n        <label class=\"f-contact__label _chk\">\n          <input type=\"checkbox\" name=\"choice[]\" class=\"f-contact__chk\" value=\"2BR\"><span class=\"f-contact__check-span\"></span><span>2BR</span>\n        </label>\n      </div>\n      <div class=\"f-contact__choice\">\n        <label class=\"f-contact__label _chk\">\n          <input type=\"checkbox\" name=\"choice[]\" class=\"f-contact__chk\" value=\"3BR\"><span class=\"f-contact__check-span\"></span><span>3BR</span>\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"f-contact__row _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">\n    <div class=\"f-default__label _name\" [ngClass]=\" {'_empty' : submitButtonWasClicked && !name}\">\n      <input type=\"text\" placeholder=\"Name*\" (change)=\"checkName()\" [(ngModel)]=\"name\" name=\"name\" class=\"f-contact__field\"><span class=\"f-default__error\">This field is required!</span>\n    </div>\n  </div>\n  <div class=\"f-contact__row _short _tel _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">\n    <div class=\"f-default__label\">\n      <input id=\"phone\" type=\"tel\" placeholder=\"\" (change)=\"checkPhone()\" (onfocus)=\"phoneFocus()\" (onkeydown)=\"phoneKeyDown()\" [(ngModel)]=\"phone\" name=\"tel\" maxlength=\"10\" class=\"f-contact__field _tel\"><span id=\"phoneError\" class=\"f-default__error\">This field is incorrect!</span><span class=\"_tel\" *ngIf=\"!phone\">Phone</span>\n    </div>\n  </div>\n  <div class=\"f-contact__row _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">\n    <div class=\"f-default__label _email\" (change)=\"checkEmail()\" [ngClass]=\" {'_invalid' : submitButtonWasClicked && email && email.length !== 0 && !emailValid , '_empty' : submitButtonWasClicked && !email}\"  >\n      <input type=\"text\" placeholder=\"Email*\" [(ngModel)]=\"email\" name=\"email\" class=\"f-contact__field _email\"><span class=\"f-default__error\">This field is required!</span><span class=\"f-default__hasemail\">Email is incorrect!</span>\n    </div>\n  </div>\n  <div class=\"f-contact__row _short _bottom _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">\n    <div class=\"f-contact__row-wrapper\">\n      <div class=\"f-contact__text-required\">* Required field</div>\n      <button class=\"f-contact__button js-submit\" (click)=\"submitForm()\">Send</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<ul role=\"list\" class=\"l-options\">\n  <li class=\"l-options__item _hidden\" animate [offset]=\"200\" [className]=\"'_animated'\">\n    <div class=\"l-options__outer\">\n      <a href=\"#\" class=\"l-options__link\" (click)=\"clicked($event, 0)\">\n        <img [src]=\"images[0]\" class=\"l-options__img\">\n        <svg-use name=\"plus\"></svg-use>\n      </a>\n    </div>\n    <div class=\"l-options__text\">\n      <p>ROOFTOP</p>\n    </div>\n  </li>\n  <li class=\"l-options__item _hidden\" animate [offset]=\"200\" [className]=\"'_animated'\">\n    <div class=\"l-options__outer\">\n      <a href=\"#\" class=\"l-options__link\" (click)=\"clicked($event, 1)\">\n        <img [src]=\"images[1]\" class=\"l-options__img\">\n        <svg-use name=\"plus\"></svg-use>\n      </a>\n    </div>\n    <div class=\"l-options__text\">\n      <p>lounge</p>\n    </div>\n  </li>\n  <li class=\"l-options__item _hidden\" animate [offset]=\"200\" [className]=\"'_animated'\">\n    <div class=\"l-options__outer\">\n      <a href=\"#\" class=\"l-options__link\" (click)=\"clicked($event, 2)\">\n        <img [src]=\"images[2]\" class=\"l-options__img\">\n        <svg-use name=\"plus\"></svg-use>\n      </a>\n    </div>\n    <div class=\"l-options__text\">\n      <p>lobby</p>\n    </div>\n  </li>\n  <li class=\"l-options__item _hidden\" animate [offset]=\"200\" [className]=\"'_animated'\">\n    <div class=\"l-options__outer\">\n      <a href=\"#\" class=\"l-options__link\" (click)=\"clicked($event, 3)\">\n        <img [src]=\"images[3]\" class=\"l-options__img\">\n        <svg-use name=\"plus\"></svg-use>\n      </a>\n    </div>\n    <div class=\"l-options__text\">\n      <p>fitness center</p>\n    </div>\n  </li>\n  <li class=\"l-options__item _hidden\" animate [offset]=\"200\" [className]=\"'_animated'\">\n    <div class=\"l-options__outer\">\n      <a href=\"#\" class=\"l-options__link\" (click)=\"clicked($event, 4)\">\n        <img [src]=\"images[4]\" class=\"l-options__img\">\n        <svg-use name=\"plus\"></svg-use>\n      </a>\n    </div>\n    <div class=\"l-options__text\">\n      <p>GREENSPACES</p>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<div class=\"m-greeting\" [ngClass]=\"{ '_open-menu': isOpen }\">\n\n  <btn-hamburger (onClick)=\"onClick($event)\"\n                 [isOpen]=\"isOpen\"></btn-hamburger>\n\n  <nav class=\"m-greeting__nav\" role=\"navigation\" aria-label=\"main menu\">\n    <ul class=\"m-greeting__list\">\n      <li class=\"m-greeting__item\"\n          *ngFor=\"let item of menu\">\n        <button type=\"button\" (click)=\"goToState(item.state)\" class=\"m-greeting__button\">\n          <span>{{ item.title }}</span>\n        </button>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<section class=\"modal-default\"\n         *ngIf=\"_modalService.local.currentModal\"\n         [@fadeIn]>\n  <div class=\"modal-default__wrapper\"\n       (click)=\"_modalService.hide()\">\n    <div class=\"modal-default__content\"\n         (click)=\"_modalService.prevent($event)\">\n      <button type=\"button\" class=\"modal-default__close\" (click)=\"_modalService.hide()\">\n        <svg-use name=\"plus\"></svg-use>\n      </button>\n      <modal-policy *ngIf=\"_modalService.local.currentModal === 'modalPolicy'\"></modal-policy>\n      <!--<modal-house *ngIf=\"_modalService.local.currentModal === 'modalHouse'\"></modal-house>-->\n      <!--<modal-help *ngIf=\"_modalService.local.currentModal === 'modalHelp'\"></modal-help>-->\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-help\">\n  <div class=\"modal-help__inner\">\n    <div class=\"modal-help__title\">Rendering any necessary assistance</div>\n    <div class=\"modal-help__text\">Just steps from Nationals Park and the Capitol Riverfront neighborhood and overlooking a creative streetscape lined with sensational restaurants and top retail brands, West Half has pride of place in the thriving Ballpark District. Moments from the Metro, minutes from downtown, and home to hundreds of events, this high-energy area is one of DC’s most exciting, fast-growing neighborhoods.</div>\n  </div>\n</div>\n"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-house\">\n  <div class=\"modal-house__inner\">\n    <div class=\"modal-house__title\">A shift a culture</div>\n    <div class=\"modal-house__text\">Just steps from Nationals Park and the Capitol Riverfront neighborhood and overlooking a creative streetscape lined with sensational restaurants and top retail brands, West Half has pride of place in the thriving Ballpark District. Moments from the Metro, minutes from downtown, and home to hundreds of events, this high-energy area is one of DC’s most exciting, fast-growing neighborhoods.</div>\n  </div>\n</div>\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-policy\">\n  <div class=\"modal-policy__inner\">\n    <div class=\"modal-policy__wrapper\">\n     <h1 class=\"modal-policy__title\">JBG SMITH Privacy Policy</h1>\n     <h3 class=\"modal-policy__subtitle\">Effective Date: 06/12/17</h3>\n     <p>\n     Welcome to the www.WestHalf.com (the “Site”), which is owned and operated by JBG Smith Properties or its affiliates (“JBGS,” “We” or “Us”). Site visitors (“You” or “Your” as applicable) should read and understand the following Privacy Policy (“Policy”) which discloses our collection, storage, use, and disclosure of Your personal information (“Information”) collected through the Site. This Policy applies to all services available on the Site and does not apply to services or products offered by other companies or individuals, including third party sites made available through this Site. By using the Site, You consent to the collection and use of Your Information as described in this Policy and the Terms and Conditions located at www.jbgsmith.com/terms-conditions and www.jbgsmith.com/privacy-policy, which is incorporated herein by reference and may include terms which are listed but not defined in this Policy.\n     </p>\n     <p>\n    We may update or modify this Policy from time to time. If we make material changes we will post a revised effective date below. Any changes shall be effective immediately upon posting the revised Policy. Your use of the Site after changes are made shall be deemed acceptance by You of the revised Policy.\n     </p>\n     <ol class=\"modal-policy__ol-list\">\n     <li class=\"modal-policy__item\">\n     <h3>INFORMATION COLLECTED</h3>\n     <p>\n     Information is collected through two methods: (i) Information provided by You to the Site; or (ii) Information that is obtained from Your use of the Site. </p>\n     <p>\n     i. Information provided by You: You may browse the Site anonymously. You may enroll in our News and Alerts Service by providing Your email address. If you contact us through the Contact page you will be asked to provide contact information so that we may respond to your inquiry. The Site may allow You to distribute materials and information downloaded from the Site to third parties via the third party’s email address. You represent that You have the authority to provide the email addresses of those third parties, and that those third parties have agreed to receive such materials and information from us. The Site may allow you to provide information to apply for a position with JBG Smith. This service, which collects your resume, contact information, employment and education history and other related information, is operated using a third-party service provider who collects and submits the information to us.\n     </p>\n     <p>\n     ii. Information Collected from Your use of the Site: Based upon Your use of the Site, we may automatically collect certain information, such as Your usage data, preferences, or other data relating to Your use of the Site. We use cookies and similar technology to collect aggregate (non-personal) information about Site usage by all of our visitors and to help us remember You and Your preferences when You revisit the Site. These cookies may stay on your browser into the future until they expire or you delete them. Some cookies used to allow the Site to function easily are erased when you close your browser window. Further general information about cookies and how they work is available at <a href=\"www.allaboutcookies.org\">www.allaboutcookies.org</a>. In particular, we may collect the following types of information:\n     </p>\n     <p>\n     a.Your browser type, language, plug-ins, Internet domain and operating system;\n     </p>\n     <p>\n     b.Your Internet Protocol (IP) address;\n     </p>\n     <p>\n     c.The website(s) You visited before visiting the Site and the website(s) You visited after visiting the Site;\n     </p>\n     <p>\n     d.Unique identifiers, including mobile device identification numbers, that may identify the physical location of such devices;\n     </p>\n     <p>\n     e.Data collected through cookies and other tracking technologies;\n     </p>\n     <p>\n     f. Your location information if you agree to share it with us; and\n     </p>\n     <p>\n     g.Data related to Your interactions with content on the Site, such as the type of content viewed on the Site.\n     </p>\n     <p>\n     iii. Third Party Cookies and Do Not Track. We may allow selected third parties to place cookies through the Site to provide us with better insights into the use of the Site or user demographics or to provide relevant advertising to You. These third parties may collect information about a consumer’s online activities over time and across different websites when he or she uses our website. We may also permit third party service providers to place cookies through our Site to perform analytic or marketing functions where you are notified of them and you have consented to the usage. We do not control the use of such third-party cookies or the resulting information and we are not responsible for any actions or policies of such third parties.\n     </p>\n     <p>\n     We do not use technology that recognizes a “do-not-track” signal from your web browser.\n     </p>\n     </li>\n     <li class=\"modal-policy__item\">\n     <h3>USE OF COLLECTED INFORMATION</h3>\n     <p class=\"_list-title\">The purpose of collecting Your Information is to provide You with the best experience possible.</p>\n     <p>\n     In general, we will use Your Information for our general commercial purposes, including, for example, to: (i) analyze, operate and improve the Site and the services offered thereon; (ii) customize the content You see when You use the Site; (iii) enforce our Terms and Conditions and this Policy; (iv) conduct market analysis, traffic flow analysis and related reporting to third parties; (v) to send You information about our company and our products and services and those of other companies we believe You may find of interest; and (vi) for any other purposes disclosed to You at the time we collect Your Information. By providing Your or another’s email address You hereby grant Us permission to distribute any notices, news alerts, materials, updates or any other information to those email addresses.\n     </p>\n     </li>\n     <li class=\"modal-policy__item\">\n     <h3>ACCESSING YOUR INFORMATION AND YOUR CHOICES</h3>\n     <p>\n     You can choose not to receive emails from us by “unsubscribing” using the instructions in any email you receive from us. This will not stop us from sending emails about your transactions with us or in response to inquiries you send us.\n     </p>\n     <p>\n     You can choose to delete or block cookies by setting your browser to either reject all cookies or to allow cookies only from selected sites. If you block cookies performance of the Site may be impaired and certain features may not function at all.\n     </p>\n     </li>\n     <li class=\"modal-policy__item\">\n     <h3>DISCLOSURE OF YOUR INFORMATION</h3>\n     <p>\n     We may disclose Your Information to our affiliated companies, but we will not sell, trade or rent Your Information to any third party except with your authorization or as described in this Policy. We may reveal information about You to unaffiliated third parties: (1) if You request or authorize it; (2) if the Information is provided to help complete a transaction for You; (3) if the Information is provided to comply with the law, applicable regulations, governmental and quasi- governmental requests, court orders or subpoenas, to enforce our Terms of Use or other agreements, or to protect our rights, property or safety or the rights, property or safety of our users or others (e.g., to a consumer reporting agency for fraud protection etc.); (4) if the disclosure is done as part of a purchase, transfer or sale of services or assets (e.g., in the event that substantially all of our assets are acquired by another party, user Information may be one of the transferred assets); (5) if the Information is provided to our agents, outside vendors or service providers to perform functions on our behalf (e.g., analyzing data, providing marketing assistance, providing customer service, processing orders, etc.); or (6) as otherwise described in this Privacy Policy.</p>\n     <p>\n     We may provide data, such as aggregate data, sales, site traffic and related Site information, to third parties; however Your Information will not be included in such data except in an aggregate manner where the use of such Information will not identify You personally. Additionally, JBGS may disclose anonymized forms of Your email address to third party websites to enable JBGS to provide You with the services You have agreed to receive.\n     </p>\n     </li>\n     <li class=\"modal-policy__item\">\n     <h3>YOUR CALIFORNIA PRIVACY RIGHTS</h3>\n     <p>\n     We do not share your information with others for use to directly contact to you by means of the mail, telephone, or electronic mail to market their products, goods, or services to you for your personal, family, or household purposes.\n     </p>\n     </li>\n     <li class=\"modal-policy__item\">\n     <h3>SECURITY OF YOUR INFORMATION</h3>\n     <p>\n     We use reasonable technical, administrative and physical measures to protect Information contained in our system against misuse, loss or alteration. Please understand that no security system is perfect and, as such, We do not guarantee the security of the Site, or that Your Information won’t be intercepted while being transmitted to the Site.\n     </p>\n     </li>\n     <li class=\"modal-policy__item\">\n     <h3>LINKS TO THIRD PARTY WEBSITES</h3>\n     <p>\n     Although the Site contains links to third party websites, We are not responsible for the privacy policies and/or practices on those third party websites. Where we have linked You to a third-party website You should read the terms and conditions and privacy policy stated on that third-party website as it governs the use of that third-party website.\n     </p>\n     </li>\n     <li class=\"modal-policy__item\">\n     <h3>CHILDREN’S PRIVACY</h3>\n     <p>\n     The Site is directed to persons 18 years of age or older. Accordingly, You must be 18 years of age in order to access the Site. If You are under 18 years of age You may not access the Site without the consent of a parent or guardian. We do not knowingly collect, distribute or share any Information from persons under 18 years of age and we are not under any obligation to verify that persons accessing the Site are, in fact, over 18 years of age. If we become aware that a child under 18 years of age has provided Information to JBGS or the Site, we will delete such Information as soon as is possible under the circumstances.\n     </p>\n     </li>\n     <li class=\"modal-policy__item\">\n     <h3>TERMINATION</h3>\n     <p>\n     If you decide at any time that you no longer wish to receive the News and Alerts Services, please follow the unsubscribe instructions provided in any of the communications You receive. Please note that we reserve the right to use Your Information in any aggregated data collection after termination, however we will ensure that the use of such Information will not identify You personally.\n     </p>\n     </li>\n     <li class=\"modal-policy__item\">\n     <h3>QUESTIONS</h3>\n     <p>\n     If You have any questions concerning this Policy or the Site, please contact JBGS at ir@jbgsmith.com.\n     </p>\n     </li>\n     </ol>\n     </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<section class=\"s-building\">\n  <div class=\"s-building__text _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">\n    <p>West Half marks a shift in the very fabric of DC living. In the heart of the anticipated Ballpark District, it’s right where the action is. Nationals Park, the Metro, the Capitol Riverfront and the Yards are within throwing distance,\n      giving you the freedom to explore your own indoor/outdoor and work/life balances. Designed by renowned New York-based ODA Architecture, West Half features an iconic multi-dimensional façade, modern interior and made-to-measure\n      amenities. With its tectonic appearance, holistic energy and limitless elasticity, it represents a shift in urban living.</p>\n  </div>\n\n  <sl-samples></sl-samples>\n\n  <div class=\"s-building__text _margin _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">\n    <p class=\"_margin\">West Half stands for simplicity, choice and ease. With interiors by award winning practice Cecconi Simone, every personal comfort and need is met from the private-access tenants’ lounge, a 24/7 lobby, a fully equipped fitness center\n      and the rich designer interiors. An expansive rooftop area with a pool combined with artfully designed green pockets and individual balconies for recreation and relaxation from the sanctity of home. Access to the city is made seamless by an abundance of space that\n      flows directly out to the bustling Half Street pedestrian thoroughfare.</p>\n  </div>\n</section>\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<section class=\"s-contact\">\n  <div class=\"container\">\n    <div class=\"s-contact__title _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">CONTACT US</div>\n    <f-contact id=\"contactFormSec\"></f-contact>\n    <div class=\"s-contact__wrapper _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">\n      <div class=\"s-contact__logo _1\">\n        <svg-use name=\"jbg-logo\"></svg-use>\n      </div>\n      <div class=\"s-contact__logo _2\">\n        <svg-use name=\"bp-logo\"></svg-use>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<footer class=\"s-footer _scrollFadeAnimate\" [ngClass]=\"{ _hidden: isHidden }\">\n  <div class=\"container\">\n    <div class=\"s-footer__outer\">\n      <div class=\"s-footer__address\">© 2018 JBG SMITH Properties</div>\n      <div class=\"s-footer__buttons\">\n        <button type=\"button\" (click)=\"showModal('modalPolicy')\" class=\"s-footer__policy\">Private Policy</button>\n        <div class=\"s-footer__buttons-outer\">\n          <div class=\"s-footer__home\">\n            <svg-use name=\"home\"></svg-use>\n          </div>\n          <div  class=\"s-footer__help\">\n            <svg-use name=\"wheelchair\"></svg-use>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<div class=\"s-greeting\">\n  <div class=\"s-greeting__menu\" [ngClass]=\"{ _disabled: !isCenterTitle }\">\n    <button type=\"button\"\n            (click)=\"goToState('')\"\n            class=\"s-greeting__logo\">\n      <svg-use name=\"logo\"></svg-use>\n    </button>\n    <m-greeting (onChange)=\"goToState($event)\"\n                [isOpen]=\"isOpenMenu\"\n                (onOpenMenu)=\"onOpenMenu($event)\"></m-greeting>\n  </div>\n\n  <div class=\"s-greeting__canvas-wrapper\">\n    <canvas width=\"1280\" height=\"800\" class=\"s-greeting__canvas\"></canvas>\n  </div>\n\n  <div class=\"s-greeting__block\">\n    <b-greeting-title\n      [isOutRight]=\"isTitleToRight\"\n      [isCenter]=\"isCenterTitle\"\n      [comment]=\"comment\"\n      [subtitle]=\"subtitle\"\n      [title]=\"title\"></b-greeting-title>\n    <b-greeting-control\n      [isDisable]=\"isButtonsDisabled\"\n      [next]=\"next\"\n      (onState)=\"onState($event)\"\n      [prev]=\"prev\"></b-greeting-control>\n  </div>\n\n  <div class=\"s-greeting__bottom\" [ngClass]=\"{ _visible: isArrowVisible }\">\n    <btn-down></btn-down>\n  </div>\n</div>\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<section class=\"s-neighborhood\">\n  <div class=\"s-neighborhood__top\">\n    <div class=\"container\">\n      <div class=\"s-neighborhood__col _hidden _img\" animate [offset]=\"100\" [className]=\"'_animated'\">\n        <div class=\"s-neighborhood__wrap-img\">\n          <img [src]=\"streetImage\" class=\"s-neighborhood__img\">\n        </div>\n      </div>\n      <div class=\"s-neighborhood__col _text\">\n        <div class=\"s-neighborhood__text\">\n          <p class=\" _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">Just steps from Nationals Park and the Capitol\n            Riverfront neighborhood and overlooking a creative streetscape lined with sensational restaurants and top retail brands, West Half has pride of place in the thriving Ballpark District. Moments from the Metro, minutes from downtown, and home to hundreds of events, this high-energy area is one of Washington DC’s most exciting, fast-growing neighborhoods.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"s-neighborhood__center _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">\n    <div class=\"s-neighborhood__center-wrap-img\">\n      <img [src]=\"sportImage\" class=\"s-neighborhood__center-img\">\n    </div>\n  </div>\n  <div class=\"s-neighborhood__bottom _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">\n    <div class=\"container\">\n      <p>West Half living means all-new accessibility. Positioned within the revitalized Capital Riverfront neighborhood, it’s a direct line to the Capitol, the waterfront and the new marina, the Yards and the Anacostia Riverwalk Trail. The Metro, I-295 and I-395 and a bikeshare program put DC’s best right at your feet, giving you endless options for work, recreation and discovery.</p>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<section class=\"s-options\">\n  <div class=\"container\" (click)=\"clicked($event)\">\n    <l-options [slick]=\"slick\"></l-options>\n    <sl-options (click)=\"clicked($event)\" (getSlickComponent)=\"saveSlickComponent($event)\"></sl-options>\n  </div>\n</section>\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<div class=\"sl-options\">\n  <div class=\"sl-options__outer\" appSlick (getSlickElement)=\"saveSlickElement($event)\" [config]=\"config\" [ngClass]=\"{ '_transparent' :isTextVisible }\">\n    <div class=\"sl-options__item\">\n      <div class=\"sl-options__wrapper\"><img [src]=\"images[0]\" class=\"sl-options__img\"/>\n        <div class=\"sl-options__text\">\n          <p>An expansive rooftop experience with a hotel-styled social space overlooking Half Street and the Nationals Baseball Stadium.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"sl-options__item\">\n      <div class=\"sl-options__wrapper\"><img [src]=\"images[1]\" class=\"sl-options__img\"/>\n        <div class=\"sl-options__text\">\n          <p>Perched on high, the tenant lounge provides breathtaking views of the Ballpark District providing a seat that puts you 'right in the action'.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"sl-options__item\">\n      <div class=\"sl-options__wrapper\"><img [src]=\"images[2]\" class=\"sl-options__img\"/>\n        <div class=\"sl-options__text\">\n          <p>Modelled on the flow and depth of a mountain range, the double-storey lobby entrance is a warm and ambient welcome home.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"sl-options__item\">\n      <div class=\"sl-options__wrapper\"><img [src]=\"images[3]\" class=\"sl-options__img\"/>\n        <div class=\"sl-options__text\">\n          <p>A state-of-the-art fitness center with an interior space that rivals the expectations of an elite sports club.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"sl-options__item\">\n      <div class=\"sl-options__wrapper\"><img [src]=\"images[4]\" class=\"sl-options__img\"/>\n        <div class=\"sl-options__text\">\n          <p>Tranquil tenant courtyard spaces to help balance your inside and outside experience.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"sl-options__close\" (click)=\"clicked($event)\">\n    <svg-use name=\"plus\"></svg-use>\n  </button>\n  <button type=\"button\" class=\"sl-options__animate-text\" (click)=\"textHide()\" [ngClass]=\"{ '_transparent' :isTextVisible }\">\n    <svg-use name=\"cross\"></svg-use>\n  </button>\n</div>\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<div class=\"sl-samples _hidden\" animate [offset]=\"100\" [className]=\"'_animated'\">\n  <div class=\"sl-samples__wrapper\" appSlick [isCounterInit]=\"true\" [config]=\"config\">\n    <div class=\"sl-samples__item\" *ngFor=\"let image of images\">\n      <div class=\"sl-samples__wrapper-img\"><img [src]=\"image\" class=\"sl-samples__img\"/></div>\n    </div>\n  </div>\n  <div class=\"sl-samples__text\">\n    <p>Mimicking the atmosphere of a small community, the explosive multi-dimensional facade provides a connection for a street scale interaction.</p>\n    <div class=\"sl-samples__pages\"></div>\n  </div>\n  <div class=\"sl-samples__background-text\" [ngClass]=\"{ '_transparent' :isSliderVisible }\">\n    <p>Mimicking the atmosphere of a small community, the explosive multi-dimensional facade provides a connection for a street scale interaction.</p>\n    <button class=\"sl-samples__close-text\" (click)=\"clicked()\">\n      <svg-use name=\"cross\"></svg-use>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<div class=\"building-page\">\n  <b-page-title></b-page-title>\n  <s-building></s-building>\n  <s-options></s-options>\n</div>\n\n\n\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-page\">\n  <b-page-title></b-page-title>\n  <s-contact></s-contact>\n</div>\n\n\n\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "<div class=\"home\" [ngClass]=\"{ _clickable: isPopupVisible }\">\n  <b-home-popup [isPopupVisible]=\"isPopupVisible\"\n                (onClosePopup)=\"closePopup()\"></b-home-popup>\n</div>\n"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "<div class=\"neighborhood-page\">\n  <b-page-title></b-page-title>\n  <s-neighborhood></s-neighborhood>\n</div>\n\n\n\n"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "<div class=\"no-index\">\n  <svg style=\"position: absolute;\"  preserveAspectRatio=\"none\">\n\n    <symbol id=\"svg-alert\" viewBox=\"0 0 85.205 85.204\">\n      <path d=\"M55.798 55.09V44.762c0-7.3-5.938-13.236-13.236-13.236-7.298 0-13.237 5.937-13.237 13.236v10.33c-1.2.193-2.117 1.23-2.117 2.486 0 1.393 1.13 2.522 2.522 2.522h25.662c1.394 0 2.523-1.13 2.523-2.522 0-1.255-.917-2.294-2.117-2.488zm-3.55-.035H32.875V44.762c0-5.34 4.345-9.686 9.686-9.686 5.34 0 9.686 4.345 9.686 9.685v10.296zm-6.57-15.716c-.212.5-.79.736-1.294.522-.604-.255-1.244-.385-1.904-.385-2.7 0-4.898 2.198-4.898 4.898 0 .547-.443.99-.988.99-.546 0-.988-.443-.988-.99 0-3.79 3.083-6.873 6.874-6.873.926 0 1.826.182 2.675.542.502.212.736.792.524 1.294zM25.77 46.285c-.87.036-1.74.007-2.61.008-.87 0-1.742.03-2.61-.006-1.21-.05-1.93-.756-1.934-1.838-.005-1.102.69-1.806 1.918-1.83 1.74-.035 3.48-.035 5.222 0 1.27.023 1.957.674 1.982 1.766.026 1.13-.692 1.848-1.966 1.9zm40.82-1.86c.01 1.053-.662 1.81-1.813 1.846-1.836.057-3.676.055-5.512.003-1.13-.032-1.808-.804-1.8-1.863.01-1.062.68-1.736 1.86-1.788.902-.04 1.806-.01 2.708-.008.902 0 1.807-.035 2.708.01 1.18.058 1.845.734 1.85 1.8zm-14.03-11.77c0-.003-.003-.005-.004-.007 0-.004.003-.007.005-.01-.026-.49.156-1.005.566-1.436 1.283-1.35 2.6-2.667 3.93-3.97.386-.38.87-.616 1.35-.564.473-.04.94.122 1.338.49.362.335.56.764.588 1.212.002 0 .005.004.006.006 0 .003-.003.005-.004.008.026.493-.156 1.005-.566 1.437-1.283 1.35-2.6 2.666-3.93 3.97-.386.38-.87.615-1.35.564-.473.042-.942-.12-1.338-.49-.362-.334-.56-.763-.588-1.21zM24.104 28.95l-.006-.008.005-.007c-.023-.448.128-.897.45-1.27.355-.408.802-.622 1.277-.632.47-.104.975.076 1.402.41 1.464 1.15 2.92 2.315 4.342 3.516.455.382.692.87.72 1.363l.006.01-.003.006c.022.447-.128.896-.45 1.27-.356.407-.802.62-1.277.63-.473.105-.977-.075-1.404-.41-1.465-1.15-2.92-2.314-4.343-3.515-.454-.384-.692-.873-.72-1.366zm16.728-1.36c-.035-1.898-.04-3.797 0-5.694.02-1.04.828-1.8 1.773-1.796.952.003 1.73.75 1.777 1.795.043.963.008 1.93.008 2.894h-.004c0 .93.03 1.866-.008 2.797-.045 1.142-.768 1.83-1.823 1.805-1.016-.023-1.7-.688-1.722-1.804z\"/>\n    </symbol>\n\n    <symbol id=\"svg-logo\" viewBox=\"29 -17 61.6 38\">\n      <path d=\"M64.8-15.7c.7 0 1.4-.4 1.7-1.1h1.4v15.1h-2v-13h-1.2v-1zM85.2 16.3c-.5.8-.8 1.7-.9 2.7h4.5v1.8H82V20c0-1.2.2-2.3.7-3.4.4-.9 1-1.7 1.6-2.5 1-1.3 1.6-2.2 1.9-2.6.5-.7.8-1.5.8-2.4 0-.4-.1-.8-.4-1.1-.2-.3-.6-.4-.9-.4-.5 0-.9.2-1.1.7-.2.4-.3.8-.3 1.3h-2c0-1 .2-1.9.8-2.7 1.3-1.6 3.4-1.9 4.9-.7l.3.3c.6.7.9 1.6.8 2.5 0 .9-.2 1.9-.7 2.7-.5.8-1 1.6-1.6 2.4-.5.7-1.1 1.4-1.6 2.2zM63 1.2h27.6v1.4H63zM54.6 21h-6.3L44.7-4.8h-.1L41 21h-6.3L29-17h5.6l3.5 29h.1L42-17h5.3l3.8 29h.1l3.6-29h5.5l-5.7 38z\"/>\n    </symbol>\n\n    <symbol id=\"svg-plus\" viewBox=\"0 0 35.832 35.832\">\n      <path d=\"M30.6 5.24c-7-7-18.37-7-25.36 0-7 7-7 18.36 0 25.35 3.5 3.5 8.08 5.2 12.67 5.2 4.6 0 9.2-1.74 12.7-5.24 7-7 7-18.37 0-25.36zm-.72 24.64c-6.6 6.6-17.33 6.6-23.93 0-6.6-6.6-6.6-17.33 0-23.93 6.6-6.6 17.33-6.6 23.93 0 6.6 6.6 6.6 17.34 0 23.93zm-6.32-16.9l-4.94 4.94 4.94 4.94-.7.7-4.95-4.94-4.9 4.95-.7-.7 4.95-4.95-4.93-4.95.7-.7 4.94 4.94 4.96-4.9.7.7z\"></path>\n    </symbol>\n\n    <symbol id=\"svg-house\" viewBox=\"0 0 16.71 14.428\">\n      <path d=\"M5.47 11.07h5.66V8.8H5.47v2.27zM8.37 0L0 5.55v2.2h1.13v6.68H15.6V7.76h1.1v-2.2L8.37 0zm5.5 12.14h-11v-5.6l5.5-3.65 5.5 3.64v5.6zm-8.4-3.86h5.66V6H5.47v2.28z\"></path>\n    </symbol>\n\n    <symbol id=\"svg-help\" viewBox=\"0 0 12.764 14.708\">\n      <path d=\"M7.9 5.44v1.14H4.3l.07.97h4.5c.15 0 .22.04.28.17l1.75 3.8.12.26 1.32-.58.42.92-2.48 1.1L9.74 12c-.46-1.02-.93-2.04-1.38-3.07-.06-.14-.13-.2-.28-.2-1.54.02-3.07.02-4.6.02h-.25l-.06-.86-.4-5.7c0-.35-.04-.66-.02-.97C2.8.53 3.43-.02 4.17 0 4.9.02 5.5.62 5.53 1.35c0 .7-.55 1.32-1.27 1.4H4.1l.16 2.7H7.9z\"></path>\n      <path d=\"M8.2 10.1c.2.46.36.93.6 1.36.16.33.1.58-.08.87-.8 1.36-2 2.16-3.57 2.35-2.4.28-4.63-1.4-5.08-3.8C-.28 9.03.72 6.9 2.4 6.05l.1-.03c.03.42.1.83.1 1.24 0 .07-.1.15-.15.2-.85.73-1.26 1.65-1.23 2.77.04 1.45 1.07 2.76 2.48 3.15 1.42.4 2.87-.08 3.76-1.25.42-.55.64-1.2.68-1.9v-.12h.06z\"></path>\n    </symbol>\n\n    <symbol id=\"svg-arrow-down\" viewBox=\"0 0 8.036 14.699\">\n      <path d=\"M4.02 14.7L0 10.68l.7-.7 2.83 2.82V0h1v12.77l2.8-2.8.7.7z\"></path>\n    </symbol>\n\n    <symbol id=\"svg-jbg-logo\" viewBox=\"0 0 118.2 51.2\">\n      <path d=\"M41.4 17.5c-.1 0-.1 0 0 0-.3.2-.4.6-.2.8.3.3 1.3 1.2 1.3 1.2.2.2.5.2.7.1.2-.1 1.1-.8 1.5-1.1.4-.4 1.5-1.2 1.6-1.4.1-.1.2-.3.1-.5l-.2-.6c-.1-.5-.4-1-.7-1.5-.4-.5-1.1-.9-1.8-.9-.3 0-.7 0-1 .1-.3.1-.5.4-.6.6-.3.4-.1.5-.1.7s.2.2.3.4c.1.3 0 .7-.1 1-.1.5-.4.9-.8 1.1zm8.4-5.2c-.3.1-.6.1-.9 0-.4-.1-.6 0-1.1.4-.1.1-.5.1-.8.4s-.8.6-.8 1.1c-.1.9.3 1.7 1 2.2.6.4 1.4.7 2.2.8.8.2 1.7.1 2.4-.3s1.4-.9 1.9-1.6c.7-.8.9-2 .6-3-.4-1-1-2-1.8-2.8-.8-.7-1.2-.9-1.3-1.6s-.3-.8-.2-1.1v-.2c0-.2-.3-.3-.3 0-.1.5-.2 1-.1 1.4.1.7.3 1.4.5 2.1.1 1-.4 1.9-1.3 2.2zm-2.9-.4l-.1.1h-.4c-.3 0-.5-.1-.5-.2-.1-.1-.1-.3-.2-.4 0-.1-.2-.2-.3-.1-.2 0-.1.1-.2.3s.3.7.3.8c.1.2.2.3.4.3.3.1.7 0 1-.1.3-.1.5-.3.7-.5.1-.2.2-.3.3-.4.3-.2 0-.5 0-.5-.1-.1-.3-.1-.4-.2h-1.1c-.1 0-.1.4 0 .4.1.1.3.1.5.1s.2.1.2.1v.2h-.2zm-2.8-1.5c.2-.1.3-.2.3-.4.2-.5.5-.9 1-1.1.2-.1.5-.3.6-.2.1 0 .1.1 0 .2s-.3.2-.3.4l-.5.5c0 .1-.1.2-.1.3 0 0 0 .2.1.2h.4c.5-.2 1-.2 1.6-.2.7.1 1.1.2 1.1.2s.2.2.5.3.4.4.5.4h.6c.1.1.1 0 .1-.1V9.5c.1-.3.1-.2.1-.6s0-.6-.3-.8-.5-.3-.5-.4c-.1-.2 0-.4.2-.5.4-.4.9-.8 1.3-1.2v-.4c0-.4.1-.8.2-1.2v-.2c0-.1-.1-.1-.2-.1s-.3.3-.3.3l-.6.3c-.3 0-.7.2-.9.4-.5.5-.8 1-1.1 1.3-.5.4-1 .8-1.6 1-.2.1-.3.1-.5.2-.8.2-1.5.8-1.9 1.5-.3.5-.7 1-.7 1s-.2.2 0 .3c.3.1.6.1.9 0zm-2.8 4.4c.2-.1.3-.2.6-1 .4-.6 1-.9 1.7-.9.4.1.7.2 1.1.4h.1c.1 0 .3-.1.3-.2-.1-.1-.2-.3-.3-.4-.1-.1-.4-.2-.5-.3s-.1-.2 0-.4c.2 0 .4-.1.5-.2.3-.4-.2-.5-.2-.5-.2-.1-.3-.1-.5-.1-.3 0-.6-.1-.8-.2-.2 0-.4.1-.6.2-.2.2-.3.4-.4.7-.1.2-.3.4-.5.7s-.6 1.3-.8 1.4-.4.3-.3.6c.1.2.3.3.6.2zm-.2 2c.2-.1.5-.2.6-.4.2-.3.2-.3.2-.6s-.1-.4-.3-.6c-.3-.1-.7-.1-1 0-.2 0-.4.1-.5.2-.2.2-.4.5-.5.8-.1.2-.1.5.1.6.1.1.3.3.5.3.2.1.4.1.6.2l.1-.3c-.1-.1 0-.1.2-.2zm3.4 3.8c.1 0 .1.2.2.3s.2-.1.2-.3v-1.3c0-.2-.2-.2-.2-.2s-.3.1-.4.2c-.3.2-.4.4-.5.7 0 .3.2.4.3.5.2.1.3.1.4.1zm4.3 2.7c-.6.3-1.3.4-2 .2-.4-.1-.8-.3-1.1-.6-.2-.2-.3-.4-.4-.5s-.3 0-.3.1c-.1.2-.1.4-.1.6 0 .3.2.5.5.7.5.3 1 .5 1.6.5 1.1.1 2.1-.3 2.9-1 .9-.7 1.4-1.7 1.3-2.8-.1-.9-.5-1.8-1.3-2.3-.8-.5-1.8-.8-2.7-.7-.6.1-1.2.4-1.7.8-.2.2-.1.3-.1.4s.2.2.5 0c.2-.2.5-.3.8-.4.3-.1.6-.1.9 0 .7 0 1.3.2 1.8.6.6.7.8 1.6.6 2.5 0 .8-.5 1.5-1.2 1.9zm-2.6 2.9c.6.1 1.3.3 1.5.4s.3-.1.6-.1c.9 0 1.7-.6 2.2-1.4.5-1 1.4-1.8 2.4-2.3.8-.5 1.5-1.1 2-1.9.3-.6.4-1.3.5-2 0-.4-.2-2.2-.2-2.5 0-.2-.1-.4-.2-.5-.1-.1-.5 0-.5 0-.1.1-.2.1-.3.2-.2.1-.7.4-1 .6-.4.2-1.1.7-1.1.7l-.3.2c-.3.3-.2.6-.2 1.1.2.7.2 1.4.2 2.1 0 1.1-.5 2.1-1.3 2.8-.7.7-1.7 1.1-2.7 1.1-.7.1-1.5-.1-2.2-.4-.2-.1-.3-.3-.5-.4s-.4-.1-.4.2c0 .2 0 .5-.1.7-.1.2 0 .4.3.7.3.5.7.7 1.3.7zm13.7 4.6c.7.2.4.2.9.5.7.3 1.4.4 2.2.4.6 0 1.1-.3 1.4-.9.1-.3.4-.5.7-.6 1.2-.1 2.3-.1 3.5 0 .8.1 1.6.3 2.3.7.3.1.4-.1.2-.3s-.3-.4-.8-.8c-.5-.6-1.1-1-1.8-1.2-.5-.1-1-.4-1.4-.6-.2-.1-.4-.3-.6-.5-.3-.4-.5-.9-.8-1.2-.6-.7-1.3-1.3-2.1-1.8-.7-.5-1.5-.7-2.3-.8-1.5-.1-2.8-1-3.6-2.3-.5-.9-.8-1.8-1.1-2.8-.1-.3-.3-1-.5-1.6s-.3 0-.3 0 0 .3.1.4c0 .1.1.7.1 1 .2 1.4-.2 2.7-1 3.8-.7.7-1.5 1.3-2.4 1.7-.2.1-.4.3-.6.4-.4.3-.6.7-.8 1.2-.2.6-.7 1.1-1.3 1.3-.6.2-1.2.3-1.9.3s-1.3.4-1.6 1l-.9 1.5c-.2.4-.5.6-.5.8s-.5.4-.5.5 0 .3.2.3c.3-.1.6-.3.9-.5.4-.3.8-.6 1.3-.7.4-.1.8-.1 1.1 0 .4.2.9.2 1.3.2.6-.2 1.2-.4 1.7-.7.7-.3 1.5-.4 2.2-.3.7.2.7.5.8.7s.3.2.7.2H56c1.3.1 2.6.3 3.9.7zm3.7-6.3c.1.1-.2-.1 0 0zm6.8-4.2c-.5 0-.5.1-1.4-.5-.8-.5-1.5-1.2-2.2-1.9-.6-.7-1.1-1.1-1.4-1.4s-1.7-.9-2.8-1.6-1.8-.4-3.1-.5c-.7 0-1.5-.3-2-.7-.2-.2-.3-.5-.7-.6l-1.2-.3c-.6-.1-.6.4-.6.8 0 .2-.1.3-.1.5 0 .5.4.6.7 1 .6.8 1.2 1.6 1.7 2.5.4 1.1.9 2.3 1.5 3.3.1.2.2.3.4.5.9.8 2 1.3 3.2 1.3 1 0 1.8.5 2.4 1.2.6.7 1.3 1.4 1.8 1.9.5.7 1.1 1.3 1.8 1.7.8.4 1.2.3 1.7.6.6.5 1.2 1.2 1.6 1.9.2.3.4.4.4.1s-.1-.1-.1-.5c-.1-.7-.2-1.4-.4-2.1-.3-.9-.5-1.8-.6-2.7-.1-.6 0-1.2.3-1.7.2-.5.3-1 .4-1.6 0-.2.1-.3.1-.4 0-.3-.2-.6-.4-.8h-1zm-1.7-7.1c-.5-.4-1.1-.7-1.7-.8-.8-.3-.9-.8-1.2-1.2-1.6-2-2.8-1.5-4.2-1.8-.8-.1-1.6-.5-2.2-1.1-.4-.3-.7-.4-1-.2s-.7.6-1.2 1.1-1 .9-1.5 1.4c-.3.3-.4.6-.3 1 .1.4.4.5 1 .6s1.1.1 1.5.6c.2.5.7.8 1.2.8 1.5-.1 3.1.1 4.5.8 2.1 1 4.1 3.2 4.8 4 .6.6 1.4 1.1 2.3 1.3.4.1.6-.1.3-.3-.3-.3-.5-.7-.6-1.1-.1-.5.4-1.1 0-2.6-.2-1-.8-1.9-1.7-2.5zM54 9c-.5.1-.8-.1-1.1 0s0 .3 0 .3c.3.2.5.4.7.6.3.3.6.6.8 1 .1.3.3.3.3.1.4-.9 1.1-1.7 2-2.2.7-.5 1.2-1.3 1.5-2.1.1-.7-.2-1.4-.8-1.7-.6-.3-1.3-.4-1.9-.4-.5.1-1 .1-1.4-.1-.5-.2-.5-.3-.8-.3-.5 0-.9.2-1.3.4-.5.2-.3.7-.4 1 0 .7.1 1.4.3 2.1.1.3.5.5.9.4.3-.1.4-.4.5-1s.1-.4.3-.8c.6-.8 1.7-1.2 2.6-.9.4.1.8.3.9.7.1.3.1.7-.8 1.9-.5.8-1.4 1.1-2.3 1zm9.1-3.2c-1 .1-2.1-.3-2.8-1.1-.6-.6-1.4-1-2.3-1.1-.5-.1-.9 0-1.4.1-.4.1-.2.4 0 .4.3 0 .7 0 1 .1.4.1.7.5 1 1.1.2.5.2 1 0 1.5V7c0 .2.2.4.4.3.5 0 1 .2 1.3.6.6.6 3 .8 3.7.9 1 .3 1.8.9 2.4 1.7.3.6.9 1.1 1.6 1.3.6.1 1.1.4 1.5.8.3.3.4.3.3.1 0-.4-.1-.7-.4-1-.4-.4-.3-.7-.4-1.2s.3-.8-1.3-3c-1.1-1.4-2.9-2.2-4.6-1.7zm-8.3-3.7c-.3.2-.6.4-.9.5-.3.1-.4.5-.4.7 0 .2.1.3.3.4 0 0 .4.3 1.4-.1.9-.6 1.8-.8 2.8-.7 1.1.2 1.9.1 2.4.6s.6.7 1 .9c.7.4 1.6.5 2.4.4.7-.1 1.4.1 2 .4.5.2 1 .5 1.4.9.1.2.1.1-.1-.3-.3-.6-.7-1.1-1.3-1.5-.4-.3-.2-.4-.4-.6-.3-.3-.8-.5-1.2-.4-.3.1-.5.1-.6-.4s-.4-.7-1-1.2c-1.1-.7-2.5-1-3.8-.8-.6.1-.6-.4-1-.3-.8.1-1.5.4-2.1.7-.4.3-.5.5-.9.8zm-3.5 1.2c.4.3.8.4 1.3.3.2-.1.3-.3.3-.5.1-.4-.1-.9.2-1.1s.5-.1.7-.3c.3-.3.6-.6.9-.8.5-.3 1-.5 1.5-.6.3-.1.5-.4-.2-.3-.6.1-1.5 0-2 .1l-.5.1c-.3 0-.5 0-.8.1-.3.1-.6.2-.8.4-.4.6-.6 1.2-.7 1.9.1.4-.2.4.1.7zm-1.9.9c.2-.2.5-.2.8-.4.3-.2.5-.3.5-.7V1.7c.1-.4.2-.8.5-1.1.3-.3.3-.6-.1-.4s-1.1 0-1.4.4c-.3.3-.5.8-.5 1.2 0 .4-.1.8-.2 1.2-.2.4-.2.8-.1 1.2.1.3.3.1.5 0zm-2.7 1.9c.3.1.6.1 1-.3l.6-.6s-.2-.6-.3-.8v-.7c.1-.3-.1-.3.1-.6.2-.4.4-.9.5-1.4 0-.4-.1-.6.1-.8s-.2-.3-.5 0-1.3.6-1.4 1.1c-.2.4-.2.9-.1 1.3.1.3 0 .7-.2 1-.2.2-.7.3-.3 1.3.1.2.3.4.5.5zM6.4 39.4c0-.7.1-.9.3-.9h1.7c1.1 0 1.7.5 2.4 1.7 0 .1.1.1.2.1s.2 0 .2-.1-.2-.4-.6-2c-.1-.5 0-.5-.2-.5s-.3.3-.8.3H1.9c-.6 0-.6-.4-.9-.4-.1 0-.2.4-.2.6-.7 1.9-.8 1.9-.8 2 0 0 .1.1.2.1s.2 0 .2-.1c.4-.9 1.3-1.6 2.3-1.7h1.5c.5 0 .6 0 .6.9v7.8c0 .4-.1.6-1.2.6-.4 0-.4.1-.4.2s0 .2.1.2h4.6c.1 0 .1 0 .1-.2s0-.2-.4-.2c-1.1 0-1.2-.2-1.2-.6v-7.8zm10.4 2.1h-3s-.1 0-.1.1 0 .2.1.2c.8 0 1 .2 1 .6v2.3h-3.7v-2.3s.2-.6 1-.6c.1 0 .1-.1.1-.2s0-.1-.1-.1h-3c-.1 0-.1 0-.1.1s0 .2.1.2c.8 0 1 .2 1 .6v5.1c0 .3-.1.4-.8.4-.3 0-.3 0-.3.2s0 .1.1.1h3s.1 0 .1-.1 0-.2-.3-.2c-.7 0-.8-.2-.8-.4V45h3.6v2.5c0 .3-.1.4-.8.4-.3 0-.3 0-.3.2s0 .1.1.1h3s.1 0 .1-.1 0-.2-.3-.2c-.7 0-.8-.2-.8-.4v-5.1s.2-.6 1-.6c.1 0 .1-.1.1-.2.1-.1.1-.1 0-.1zm6.4 5.2s-.1 0-.1.1c-.2.3-.7 1.2-1.1 1.2h-2.2c-.4 0-.5-.1-.5-.5V45h.7c1 0 1.1.1 1.2 1.1 0 .1.1.1.1.1s.1 0 .1-.1v-2.5c0-.1-.1-.1-.2-.1s-.1 0-.2.7c0 .1-.1.5-1.1.5h-.7v-2.2c0-.5 0-.7.3-.7l1.4-.1c.3-.1.5 0 .8.2.8.7.9 1 1 1s.1 0 .1-.1-.2-.5-.4-1.3c0-.1-.1-.1-.4-.1h-4.6s-.1 0-.1.1 0 .2.1.2c.8 0 .9.2.9.6v5.2c0 .3-.1.4-.8.4-.2 0-.2 0-.2.2s0 .1.1.1h5.3c.2-.5.4-.9.6-1.4.1-.1 0-.1-.1-.1zM31 38h-1.9s-2.1-.1-2.3-.1-.1.1-.1.2 0 .2.2.2c1.3 0 1.5.2 1.5 1v8.5c0 2.1-.4 2.4-.9 2.4s-.9-.8-1.6-.8c-.5 0-.8.4-.8.8v.1c0 .6.5 1 1.1.9.4 0 .8-.1 1.1-.3 1.7-.8 2.8-2.5 2.6-4.4v-7.1c0-.9.3-1 1.2-1 .2 0 .2-.2.2-.2s-.2-.2-.3-.2zm6.5 4.9c-.2 0-.3 0-.3-.1s.4-.1 1.2-.5c.8-.4 1.3-1.1 1.3-2 0-2-1.9-2.4-3.5-2.4-.7 0-1.5.1-1.9.1-.9 0-1.9-.1-2-.1s-.1.1-.1.2 0 .2.2.2c1 0 1.3.2 1.3 1v2l-.1 3.5v2.3c0 .4-.1.6-1 .6-.6.1-.6.2-.6.3s0 .2.1.2h4.7c2.3 0 3.1-1.4 3.1-2.6.1-1.6-.9-2.4-2.4-2.7zM35 39.6c0-1.2.1-1.2 1-1.2h.3c1.1.1 1.9 1 1.8 2.2v.4c-.1 1-1 1.8-2 1.7h-1.2v-3.1zm.9 8.2c-.9 0-.9-.2-.9-.8v-3.9h1.4c1.3.1 2.2 1.2 2.1 2.5 0 1.5-1.1 2.2-2.6 2.2zM52 44h-4.8c-.2 0-.2 0-.2.1 0 .2 0 .2.9.2 1.1 0 1.3.1 1.3.4V47c0 .8-.9 1-2.4 1h-.2c-2.4-.2-4.2-2.2-4-4.6 0-3.5 2.2-5.1 4-5.1 2.1 0 3.3.9 3.7 2.1.1.4.2.7.4 1 .1 0 .3 0 .3-.1 0-.6-.1-1.3 0-1.9 0-.6 0-.6-.1-.6s-.4.3-.5.3c-.1 0-.2 0-.2-.1-1.2-.7-2.6-1.1-4-.9H46c-2.9.1-5.2 2.6-5.1 5.6v.2c.1 2.8 2.5 5 5.3 4.8 1.5 0 3.1-.1 4.6-.5.2-.1.2-.1.2-.2s-.4-.2-.4-.6v-2c0-.4.1-.7 1.2-.7.3 0 .3-.1.3-.2s0-.5-.1-.5zm13.2 1.5c-.2 0-.2 0-.2.1-.5 1.4-1.8 2.3-3.3 2.4h-.2c-2.4-.2-4.2-2.2-4-4.6 0-3.5 2.2-5.1 4-5.1 1.6-.1 3 .9 3.4 2.5 0 .1.1.1.2.1s.3-.1.3-.2c-.1-.8-.2-1.5-.3-2.3 0-.2-.1-.2-.1-.2-.2 0-.3.2-.6.2-1-.4-2.1-.6-3.2-.5H61c-2.9.1-5.2 2.6-5.1 5.6v.2c.1 2.8 2.5 5 5.3 4.8 1.3 0 2.7-.2 3.9-.5.1 0 .2-.1.2-.3 0-.3.2-1.7.2-1.9s-.2-.3-.3-.3zm7.8-1.1c-.2-1.8-1.7-3.1-3.5-3h-.2c-1.9.1-3.4 1.7-3.3 3.6v.1c.1 1.8 1.7 3.2 3.5 3.1h.2c1.8 0 3.3-1.5 3.3-3.3v-.5zm-3.5 3.7c-1.7 0-2.3-1.9-2.3-3.2 0-.8.2-3.2 2.3-3.2 1.7 0 2.4 1.9 2.4 3.2 0 1.1-.2 3.2-2.4 3.2zm12-.2c-.3 0-.5-.2-.5-.4-.1-2.6-.2-4.6-.2-5.2 0-.4.1-.5.9-.5.1 0 .1 0 .1-.1s0-.2-.1-.2h-1.9c-.1 0-.1 0-.1.1-.7 1.8-1.4 3.5-2.1 5.2-.2-.3-1.5-4.2-1.7-4.8-.1-.3-.1-.4-.2-.4h-1.9c-.1 0-.1.1-.1.1s0 .1.1.1c.3 0 .5 0 .8.1.1.1.2.3.2.5 0 .3 0 .6-.1.9-.3 1.3-.5 2.7-.8 4.1-.1.5 0 .7-.5.7s-.5 0-.5.1 0 .2.1.2h2.1s.1-.1.1-.2-.1-.2-.4-.2-.5-.2-.5-.4c.2-1.6.4-3.2.8-4.7 0 0 1.6 4.2 1.8 4.8.2.7.2.7.3.7s.1-.1.5-1c.6-1.5 1.5-3.5 2.2-5.3.1 1.8.2 4.8.2 5.3 0 .4 0 .5-.6.5-.4 0-.4 0-.4.1s0 .2.1.2H82s.1-.1.1-.2-.1-.1-.6-.1zm4-2.5h.2c1.1 0 2-.9 2-2 0-.4-.2-1.9-2.5-1.9h-2.6c-.1 0-.1 0-.1.1s0 .2.1.2c.7 0 .8.2.8.6v5.1c0 .3-.1.4-.8.4-.3 0-.3 0-.3.2s0 .1.1.1h3.2s.1 0 .1-.1 0-.2-.3-.2c-.9 0-1-.3-1-.6v-2c.4.1.8.1 1.1.1zm-1.1-.6v-2.2c0-.8.1-.8.8-.8h.2c.8.1 1.5.8 1.4 1.6v.2c-.1.9-.9 1.5-1.8 1.4-.6.1-.6 0-.6-.2zm17-3.3h-2.6c-.1 0-.1.1-.1.2s0 .1.1.1c.8 0 1.2.1 1.2 1.5 0 .9-.1 2.6-.1 3.5-2.1-2.2-3.6-3.9-4.7-5.2l-.1-.1h-1.7c-.1 0-.1 0-.1.1s0 .2.1.2h.4c.2 0 .7.5.8.7v.4c0 2.7-.1 4.5-.1 4.7 0 .4-.5.4-.6.4h-.5c-.3 0-.6-.1-.7-.5-.7-1.5-2.2-5.9-2.3-6s0-.1-.2-.1-.2 0-.2.1c-.9 2.3-1.6 4.3-2.2 6-.1.4-.2.5-.5.5s-.3 0-.3.1 0 .2.1.2h2s.1 0 .1-.2-.1-.1-.6-.1-.5-.2-.5-.3c.1-.6.3-1.1.5-1.6.1-.2.1-.2.4-.2h2c.3.7.5 1.3.7 2 0 .2-.1.2-.5.2-.2 0-.4 0-.4.1s-.1.2 0 .2H96c.1 0 .1 0 .1-.1s0-.1-.5-.1-.7-.3-.7-.5v-4.8c4.3 4.7 5.1 5.7 5.2 5.7s.1 0 .1-.1c0-.9.1-5.3.2-5.6.1-.7.2-.8 1-.8.1 0 .1-.1.1-.2 0-.3 0-.4-.1-.4zm-12.2 4c-.3 0-.4 0-.4-.1.3-.9.6-1.8 1-2.6l1 2.8-1.6-.1zm15.5-4h-3s-.1 0-.1.1 0 .2.1.2c.8 0 1 .2 1 .6v1.3l-.1 2.3v1.5c0 .3-.1.4-.8.4-.3 0-.3 0-.3.2s0 .1.1.1h3s.1 0 .1-.1 0-.2-.3-.2c-.7 0-.8-.2-.8-.4v-5.1s.2-.6 1-.6c.1 0 .1-.1.1-.2v-.1zm6.2 5.2s-.1 0-.1.1c-.2.3-.7 1.2-1.1 1.2h-2.2c-.3 0-.5-.1-.5-.5V45h.7c.9 0 1.1.1 1.2 1.1 0 .1.1.1.1.1s.1 0 .1-.1v-2.6c0-.1-.1-.1-.2-.1s-.1 0-.2.7c0 .1-.1.5-1.1.5h-.6v-2.2c0-.5.1-.7.3-.7l1.4-.1c.2 0 .5.1.7.2.8.7.9 1 1 1s.1 0 .1-.1-.2-.5-.4-1.3c0-.1-.1-.1-.4-.1H105s-.1 0-.1.1 0 .2.1.2c.8 0 .9.2.9.6v5.3c0 .3-.1.4-.8.4-.2 0-.2 0-.2.2s0 .1.1.1h5.3c.2-.5.4-.9.6-1.4.2-.1.1-.1 0-.1zm2.4-2.7c-.4-.2-.7-.6-.7-1.1v-.1c0-.7.6-1.2 1.2-1.1.9 0 1.3.7 1.5 1.4 0 .1.1.1.2.1 0 0 .1 0 .1-.1-.1-.5-.1-1-.1-1.5 0-.1 0-.1-.1-.1s-.2.2-.3.2c-.4-.1-.8-.1-1.3-.2h-.2c-1 0-1.8.9-1.8 1.9 0 1 .7 1.3 1.4 1.8 1.3.7 1.7 1 1.7 1.7v.3c-.1.7-.7 1.1-1.4 1-.8 0-1.5-.6-1.7-1.4 0-.1 0-.1-.1-.1s-.2 0-.2.1.1.4.1 1.4c0 .1 0 .1.1.1.5.1 1.1.1 1.7.1 1.3 0 2.3-.6 2.3-2s-1.4-1.7-2.4-2.4zm3.9-2.8c-.5 0-.9.4-.9 1v.1c0 .6.5 1 1.1.9.6 0 1-.5.9-1.1-.1-.5-.5-.9-1.1-.9zm.8 1c0 .4-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8c.5 0 .8.3.8.8zm-.7 0c.1 0 .2-.1.2-.3 0-.1 0-.2-.1-.2-.1-.1-.2-.1-.3-.1h-.3v1h.2v-.4h.1c.1 0 .2.1.2.2s0 .2.1.3h.2c0-.1-.1-.2-.1-.3 0-.1-.1-.2-.2-.2zm-.2-.1h-.1v-.4h.1c.2 0 .3.1.3.2s-.1.2-.3.2z\"/>\n    </symbol>\n\n    <symbol id=\"svg-bp-logo\" viewBox=\"0 0 123.25 21.24\">\n      <path d=\"M121.32 21.24H1.92A1.77 1.77 0 0 1 0 19.32V1.92A1.77 1.77 0 0 1 1.92 0h119.4a1.77 1.77 0 0 1 1.92 1.92v17.4a1.77 1.77 0 0 1-1.92 1.92zM1.92.82a1 1 0 0 0-1.1 1.1v17.4a1 1 0 0 0 1.1 1.1h119.4a1 1 0 0 0 1.1-1.1V1.92a1 1 0 0 0-1.1-1.1z\"/>\n      <path d=\"M107.67 18.84h3a.64.64 0 0 0 .73-.73v-2.9a1 1 0 0 1 .2-.6l1.4-1.8c.12-.1.26-.1.33 0L116 18a1.33 1.33 0 0 0 1.4.85h2.88c.63 0 .75-.47.47-1.06l-4.18-8.5c-.12-.3-.14-.4 0-.6l4-5.3c.4-.6.16-1.1-.47-1.1h-2.9a1.64 1.64 0 0 0-1.48.8l-4.1 5.4c-.1.1-.27.1-.27-.1V3.1a.64.64 0 0 0-.73-.72h-3a.64.64 0 0 0-.73.8v15a.64.64 0 0 0 .7.73M91 18.8h3a.64.64 0 0 0 .7-.7v-4.3c0-.1.08-.2.24-.2h2.5a.53.53 0 0 1 .6.4l2 4.34a.84.84 0 0 0 .85.56h3.1c.6 0 .8-.33.6-.8l-2.5-5.5c-.1-.3-.2-.47 0-.66l1.1-1.17a2.5 2.5 0 0 0 1-2.16v-2a2.82 2.82 0 0 0-1-2.2l-1-.9a2.94 2.94 0 0 0-2.4-1H91a.64.64 0 0 0-.73.8v15a.64.64 0 0 0 .73.7m3.94-8.9c-.16 0-.23 0-.23-.2V6c0-.16.1-.23.3-.23h3.4a1 1 0 0 1 .9.35l.3.3a1 1 0 0 1 .4.82v1.2a1 1 0 0 1-.3.82l-.3.38a1 1 0 0 1-.8.35zM83.1 15.3c.16 0 .23.06.28.22L84 18c.16.66.38.85.92.85h2.94c.6 0 .75-.35.63-.85L84.6 3.34c-.2-.7-.47-.94-1.3-.94h-4.7c-.84 0-1.12.23-1.3.94L73.47 18c-.12.5 0 .85.63.85H77c.54 0 .75-.2.92-.85l.6-2.47c0-.16.13-.23.3-.23zm-3.43-3.56c-.14 0-.2-.1-.16-.2l1.4-5.46a.14.14 0 0 1 .3 0l1.4 5.45c0 .12 0 .2-.1.2zm-18.84 7.1h3a.64.64 0 0 0 .73-.73v-4.2c0-.1.07-.2.23-.2h4.4a3 3 0 0 0 2.4-1l.9-.9a2.82 2.82 0 0 0 1-2.2v-3a2.82 2.82 0 0 0-1-2.2l-1-.9a3 3 0 0 0-2.4-1h-8.4a.64.64 0 0 0-.8.8v15a.64.64 0 0 0 .7.76m3.9-8.7c-.18 0-.25-.1-.25-.3V6c0-.16.1-.23.2-.23h2.9a1 1 0 0 1 .86.35l.3.3a1 1 0 0 1 .35.82v1.5a1 1 0 0 1-.3.82l-.3.3a1 1 0 0 1-.87.35zm-17 8.6h9.54a.64.64 0 0 0 .73-.77v-2.3a.64.64 0 0 0-.7-.76h-5.6c-.2 0-.3-.05-.3-.2V3.1a.64.64 0 0 0-.7-.72h-3a.64.64 0 0 0-.74.73v15a.64.64 0 0 0 .7.8m-13.15 0H44a.64.64 0 0 0 .76-.7v-2.3a.64.64 0 0 0-.7-.7h-5.6c-.17 0-.24 0-.24-.2V3.2a.64.64 0 0 0-.7-.78h-3a.64.64 0 0 0-.74.7v15a.64.64 0 0 0 .72.73m-7.9-3.55c.12 0 .2.1.24.3l.6 2.4c.16.7.38.9.9.9h2.96c.6 0 .76-.3.64-.8l-3.8-14.7c-.2-.7-.46-1-1.3-1H22.2c-.86 0-1.14.23-1.33 1L17.1 18c-.12.5 0 .85.63.85h3c.57 0 .78-.2.9-.85l.6-2.47c0-.16.17-.23.3-.23zm-3.47-3.5c-.15 0-.2-.1-.17-.2l1.3-5.4a.14.14 0 0 1 .3 0l1.3 5.4c0 .1 0 .2-.16.2zM7 8.9c-.16 0-.23-.06-.23-.22V5.83c0-.16.07-.23.23-.23h3.05a1 1 0 0 1 .82.35l.28.28a1 1 0 0 1 .33.82v.4a1 1 0 0 1-.33.82l-.3.3a1 1 0 0 1-.86.34zm0 6.75c-.16 0-.23-.07-.23-.23v-3.08c0-.16.07-.23.23-.23h3.26a1 1 0 0 1 .85.4l.3.3a1 1 0 0 1 .4.8v.7a1 1 0 0 1-.3.8l-.3.3a1.07 1.07 0 0 1-.8.4zm-3.92 3.2h8.76a2.94 2.94 0 0 0 2.42-1l.92-.93a2.82 2.82 0 0 0 1-2.25v-.7a2.8 2.8 0 0 0-1-2.25l-1-1a.33.33 0 0 1 0-.54l.75-.75a2.77 2.77 0 0 0 1-2.25V6.6a2.82 2.82 0 0 0-1-2.25L14 3.43a2.94 2.94 0 0 0-2.42-1h-8.5a.64.64 0 0 0-.73.73v15a.64.64 0 0 0 .73.73\"/>\n    </symbol>\n\n    <symbol id=\"svg-arrow-red\" viewBox=\"0 0 21.7 21.7\">\n      <path d=\"M10.9,0C4.9,0,0,4.9,0,10.9c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9C21.7,4.9,16.8,0,10.9,0z M10.9,20.7\n        c-5.4,0-9.9-4.4-9.9-9.9C1,5.4,5.4,1,10.9,1c5.4,0,9.9,4.4,9.9,9.9C20.7,16.3,16.3,20.7,10.9,20.7z M9.9,7.6l3.5,3.5l-3.5,3.5\n        L9.4,14l2.9-2.9L9.4,8.1L9.9,7.6z\"/>\n    </symbol>\n\n   <symbol id=\"svg-wheelchair\" viewBox=\"0 0 14.1 15.7\">\n     <path d=\"M8.8,11.1l0.9,1.5v0c-0.8,1.8-2.6,3-4.6,3c-1.7,0-3.4-0.9-4.3-2.4C-0.7,10.8,0,7.7,2.4,6.2v1.7c-0.7,0.7-1.1,1.6-1.1,2.6\n      c0,2.1,1.6,3.9,3.7,3.9C6.9,14.3,8.5,13,8.8,11.1z M13.5,12l-1,0.7L9.8,8.2H4.6V6.6h2.7V5.5H4.6V3.3C5.5,3,6,2,5.6,1.1\n      s-1.3-1.3-2.2-1c-0.9,0.3-1.3,1.3-1,2.2c0.2,0.5,0.5,0.8,1,1v6h5.7l2.9,5l2.1-1.3L13.5,12z\"/>\n   </symbol>\n\n  <symbol id=\"svg-home\" viewBox=\"0 0 19.9 19\">\n      <path class=\"st0\" d=\"M1.5,15.5v0.3h0.7v0.3H1.5v0.4h0.8v0.3H1.2v-1.5h1.1v0.3H1.5z M2.5,18.1c0,0.4-0.3,0.8-0.7,0.9c0,0-0.1,0-0.1,0\n      c-0.4,0-0.6-0.4-0.6-0.8v0c0,0,0-0.1,0-0.1c0-0.4,0.3-0.7,0.7-0.7C2.2,17.5,2.5,17.8,2.5,18.1z M2.3,18.2c0-0.4-0.2-0.5-0.4-0.5\n      c-0.2,0-0.4,0.1-0.4,0.5c0,0.4,0.2,0.5,0.4,0.5C2,18.7,2.3,18.6,2.3,18.2z M3.2,16.8c-0.4,0-0.6-0.4-0.6-0.8c0,0,0-0.1,0-0.1\n      c0-0.4,0.3-0.7,0.7-0.7c0,0,0.1,0,0.1,0C3.8,15.3,4.1,15.6,4,16c0,0.2,0,0.4-0.2,0.5L4,16.7l-0.2,0.2l-0.2-0.2\n      C3.5,16.7,3.4,16.8,3.2,16.8C3.3,16.8,3.2,16.8,3.2,16.8z M3.3,16.5c0.1,0,0.1,0,0.2,0l-0.2-0.1l0.2-0.2l0.2,0.1\n      c0.1-0.1,0.1-0.2,0.1-0.3c0-0.4-0.2-0.5-0.4-0.5c-0.2,0-0.4,0.1-0.4,0.5C2.9,16.4,3.1,16.5,3.3,16.5z M5.4,16.2v-1H5.1v1\n      c0,0.2-0.2,0.3-0.3,0.3c-0.1,0-0.3-0.1-0.3-0.3v-1H4.2v1c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.3,0.2,0.5,0.2C5.2,16.8,5.4,16.6,5.4,16.2z\n       M6.5,16.4H6l-0.2,0.3H5.5L6,15.3h0.4l0.5,1.5H6.6L6.5,16.4z M6.4,16.2l-0.2-0.6L6,16.2H6.4z M7.5,15.3H7.2v1.5h1v-0.3H7.5V15.3z\n       M9,15.3v1.5h0.3v-0.7h0.6v0.7h0.3v-1.5H9.9v0.6H9.3v-0.6H9z M11.1,16.8c-0.4,0-0.7-0.4-0.6-0.8c0-0.1,0-0.1,0-0.2\n      c0-0.4,0.4-0.7,0.8-0.6c0.4,0,0.7,0.4,0.6,0.8c0,0.1,0,0.1,0,0.2C11.9,16.6,11.5,16.8,11.1,16.8z M11.6,16c0-0.4-0.2-0.5-0.4-0.5\n      c-0.2,0-0.4,0.1-0.4,0.5c0,0.4,0.2,0.5,0.4,0.5C11.4,16.5,11.6,16.4,11.6,16z M13.4,15.3h-0.3v1c0,0.2-0.2,0.3-0.3,0.3\n      c-0.1,0-0.3-0.1-0.3-0.3v-1h-0.3v1c0,0.1,0,0.2,0.1,0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.6-0.2,0.6-0.5V15.3z M14.5,16l-0.4-0.1\n      c-0.1,0-0.2,0-0.2-0.1s0.1-0.2,0.3-0.2c0.3,0,0.3,0.1,0.3,0.2h0.3c0-0.2-0.1-0.5-0.6-0.5c-0.5,0-0.6,0.3-0.6,0.5\n      c0,0.3,0.2,0.4,0.5,0.4h0.2c0.2,0,0.3,0,0.3,0.2s0,0.2-0.3,0.2s-0.3-0.2-0.3-0.2l-0.3,0c0,0.2,0.1,0.5,0.6,0.5c0.1,0,0.6,0,0.6-0.5\n      C14.8,16.1,14.7,16,14.5,16z M15.1,16.7h0.3v-1.5h-0.3V16.7z M16,15.7L16,15.7l0.6,1h0.3v-1.5h-0.3v1l-0.6-1h-0.3v1.5H16V15.7z\n       M17.9,15.5c0.1,0,0.3,0.1,0.3,0.2h0.3c-0.1-0.3-0.3-0.5-0.6-0.5c0,0-0.1,0-0.1,0c-0.4,0-0.7,0.4-0.6,0.8c0,0,0,0.1,0,0.1\n      c0,0.4,0.3,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.2v0.2h0.2V16h-0.6l0,0.3h0.3c0,0.2-0.2,0.3-0.4,0.3c-0.2,0-0.4-0.1-0.4-0.5\n      S17.7,15.5,17.9,15.5z M4.2,18C4.2,18,4.2,18,4.2,18c0,0.3-0.2,0.5-0.5,0.5H3.4V19H3.1v-1.5h0.7c0,0,0,0,0.1,0\n      C4.1,17.6,4.2,17.8,4.2,18z M3.9,18c0-0.1-0.1-0.2-0.3-0.2H3.4v0.4h0.3C3.9,18.2,3.9,18.1,3.9,18z M5.9,18C5.9,18,5.9,18,5.9,18\n      c0,0.3-0.3,0.5-0.5,0.5H5V19H4.7v-1.5h0.7c0,0,0,0,0.1,0C5.7,17.6,5.9,17.8,5.9,18z M5.5,18c0-0.1-0.1-0.2-0.3-0.2H5v0.4h0.3\n      c0,0,0,0,0.1,0C5.5,18.2,5.5,18.1,5.5,18z M7.7,18.1c0,0.4-0.3,0.7-0.6,0.8c-0.4,0-0.7-0.3-0.8-0.6c0,0,0-0.1,0-0.1\n      c0-0.4,0.3-0.7,0.7-0.7C7.4,17.5,7.7,17.7,7.7,18.1z M7.4,18.2c0-0.4-0.2-0.5-0.4-0.5c-0.2,0-0.4,0.1-0.4,0.5c0,0.4,0.2,0.5,0.4,0.5\n      C7.2,18.7,7.4,18.7,7.4,18.2z M9.4,18.7c0,0.2,0,0.3,0.1,0.3H9.1c0-0.1,0-0.2,0-0.3c0-0.2,0-0.3-0.2-0.3H8.6V19H8.3v-1.5H9\n      c0,0,0,0,0.1,0c0.2,0,0.4,0.2,0.4,0.5c0,0.2-0.1,0.3-0.2,0.3C9.3,18.4,9.4,18.5,9.4,18.7z M9.2,18c0-0.1,0-0.2-0.2-0.2H8.6v0.4h0.3\n      C9.1,18.2,9.2,18.1,9.2,18z M9.8,17.8h0.5V19h0.3v-1.2H11v-0.3H9.8V17.8z M12.4,18.5c0,0.2-0.1,0.3-0.3,0.3c0,0,0,0,0,0\n      c-0.1,0-0.2-0.1-0.2-0.3v-1h-0.3v1c0,0.1,0,0.3,0.1,0.3c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.6-0.2,0.6-0.5v-1h-0.3V18.5z M14.2,18.5\n      l-0.6-1h-0.3V19h0.3v-1.1l0.6,1.1h0.3v-1.5h-0.3V18.5z M15,19h0.3v-1.5H15V19z M15.8,17.8h0.4V19h0.3v-1.2H17v-0.3h-1.2V17.8z\n       M18,18.2l-0.3-0.6h-0.4l0.5,0.9V19h0.3v-0.6l0.5-0.9h-0.3L18,18.2z M19.9,4.9v2.3h-1.3V14H1.1V7.2H0V4.9L9.9,0L19.9,4.9z M16.5,5.7\n      L9.9,2.2L3.2,5.7V12h13.4V5.7z M6.8,7.9h6.1V5.8H6.8V7.9z M6.8,11h6.1V8.8H6.8V11z\"/>\n  </symbol>\n\n  <symbol id=\"svg-cross\" viewBox=\"0 0 34.92 34.92\">\n    <path d=\"M33.5 34.92c-.36 0-.72-.14-1-.42L.4 2.42c-.54-.55-.54-1.45 0-2 .57-.56 1.47-.56 2.02 0L34.5 32.5c.56.55.56 1.45 0 2-.27.28-.63.42-1 .42z\"/>\n    <path d=\"M34.5.4c-.55-.54-1.45-.54-2 0L.4 32.52c-.54.55-.54 1.45 0 2 .3.28.65.42 1.02.42s.72-.14 1-.42L34.5 2.42c.56-.55.56-1.45 0-2z\"/>\n  </symbol>\n\n  </svg>\n</div>\n"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\"\n     [attr.class]=\"'svg-' + name\"\n     focusable=\"false\">\n  <use attr.xlink:href=\"{{baseUrl + '#svg-' + name}}\"></use>\n</svg>\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mobile-bg-horisontal.bf6159bcc4ea4eef7c3c.jpg";

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mobile-bg-vertical.800896bb52bdc40f6c12.jpg";

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slider-background.ae4c0763be9c867aede3.png";

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(397);


/***/ })

},[819]);
//# sourceMappingURL=main.bundle.js.map
