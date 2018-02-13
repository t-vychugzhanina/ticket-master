/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_component_header_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_event_group_component_event_group_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_add_options_component_add_options_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_just_announced_component_just_announced_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_happening_soon_component_happening_soon_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_categories_component_categories_component__ = __webpack_require__(8);







class AppModule {

    constructor() {
        this.FILES = new Map();
        this.FILES.set('header', () => new __WEBPACK_IMPORTED_MODULE_0__components_header_component_header_component__["a" /* HeaderComponent */]());
        this.FILES.set('add-options', () => new __WEBPACK_IMPORTED_MODULE_2__components_add_options_component_add_options_component__["a" /* AddOptionsComponent */]());
        this.FILES.set('event-group', () => new __WEBPACK_IMPORTED_MODULE_1__components_event_group_component_event_group_component__["a" /* EventGroupComponent */]());
        this.FILES.set('events-ja', () => new __WEBPACK_IMPORTED_MODULE_3__components_just_announced_component_just_announced_component__["a" /* JustAnnouncedComponent */]());
        this.FILES.set('events-hs', () => new __WEBPACK_IMPORTED_MODULE_4__components_happening_soon_component_happening_soon_component__["a" /* HappeningSoonComponent */]());
        this.FILES.set('events-categories', () => new __WEBPACK_IMPORTED_MODULE_5__components_categories_component_categories_component__["a" /* CategoriesComponent */]());
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppModule;
;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app_component_app_component__ = __webpack_require__(2);


let App = new __WEBPACK_IMPORTED_MODULE_0__components_app_component_app_component__["a" /* AppComponent */]();

let anchorHeight = function () {
    var headerHeight = $('.header').outerHeight();
    $('a').on('click', function (e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerHeight
        }, 900, 'easeInOutExpo');
        event.preventDefault();
        history.pushState({}, "", this.href);
    });
};

window.onload = anchorHeight();
window.onresize = anchorHeight();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(0);


class AppComponent {

    constructor() {
        this.selector = 'app';
        this.template = `<app>
            <header></header>
               <div class="content">
               <div class="main-container">
               <add-options></add-options>
               <event-group></event-group>
               </div>
               </div> 
             </app>`;
        this.init();
    }

    init() {
        document.body.innerHTML = this.template;
        this.makeChildren();
    }

    makeChildren() {
        let tempTemplate = this.template;
        let module = new __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]();
        let tags = module.FILES;
        tags.forEach(function (value, key, mapObj) {
            if (tempTemplate.indexOf('<' + key) != -1) {
                value();
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppComponent;
;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(0);


class HeaderComponent {

    constructor() {
        this.selector = 'header';
        this.template = `<header class="header">
            <div class="content">
                <div class="header__top">
                    <a class="header__logo" href=#> Logo-Ticketmaster </a>
                    <form class="header__search-bar" method="get">
                        <input class="search-bar__input-text" name="search" type="search" placeholder="Search...">
                        <button class="search-bar__button submit" type="submit">Search</button>
                        <button class="search-bar__button setting" type="button">Search settings</button>
                    </form>
                    <nav class="header__menu">
                        <a href="#" class="menu__item my-acc">My Acc</a>
                        <a href="#" class="menu__item">Help</a>
                    </nav>
                    <div class="header__burger">
                    <div class="burger-icon">
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                    </div>
                    <ul class="burger-menu">
                        <li>
                            <a href="#">My Acc</a>
                        </li>
                        <li>
                            <a href="#">Bookmarks</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Log out</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <nav class="header__navigation">
                    <a href="#music" class="navigation__item">Music</a>
                    <a href="#sport" class="navigation__item">Sport</a>
                    <a href="#art" class="navigation__item">Arts & Theater</a>
                    <a href="#family" class="navigation__item">Family</a>
                    <a href="#vip" class="navigation__item">VIP</a>
                    <a href="#deals" class="navigation__item">Deals</a>
                </nav>
            </div>
            </header>`;
        this.init();
    }

    init() {
        var all = document.getElementsByTagName(this.selector);
        for (var r = 0; r < all.length; r++) {
            all[r].outerHTML = this.template;
        };
        this.makeChildren();
        this.burgerMenuFunctions();
    }

    makeChildren() {
        let tempTemplate = this.template;
        let tempSelector = this.selector;
        let module = new __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]();
        let tags = module.FILES;
        tags.forEach(function (value, key, mapObj) {
            if (tempTemplate.indexOf('<' + key) != -1 & key != tempSelector) {
                value();
            }
        });
    }

    burgerMenuFunctions() {
        $('.burger-icon').click(function () {
            $('.burger-menu').toggleClass('burger-menu_opened');
            $('.content__aside').removeClass('content__aside_opened');
        });

        $('.setting').click(function () {
            $('.content__aside').toggleClass('content__aside_opened');
            $('.burger-menu').removeClass('burger-menu_opened');
        });
        $(document).click(function (event) {
            if ($(event.target).closest(".burger-menu").length) return;
            if ($(event.target).closest(".burger-icon").length) return;
            if ($(event.target).closest(".content__aside").length) return;
            if ($(event.target).closest(".setting").length) return;
            $('.burger-menu').removeClass('burger-menu_opened');
            $('.content__aside').removeClass('content__aside_opened');
            event.stopPropagation();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeaderComponent;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(0);


class EventGroupComponent {

    constructor() {
        this.selector = 'event-group';
        this.template = `<event-group class="content__events">
                <events-ja class="events__just-announced">
                </events-ja>
                <events-hs class="events__happening-soon">
                </events-hs>
                <events-categories class="categories">
                </events-categories>
            </event-group>`;
        this.init();
    }

    init() {
        var all = document.getElementsByTagName(this.selector);
        for (var r = 0; r < all.length; r++) {
            all[r].outerHTML = this.template;
        };
        this.makeChildren();
    }

    makeChildren() {
        let tempTemplate = this.template;
        let tempSelector = this.selector;
        let module = new __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]();
        let tags = module.FILES;
        tags.forEach(function (value, key, mapObj) {
            if (tempTemplate.indexOf('<' + key) != -1 & key != tempSelector) {
                value();
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventGroupComponent;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(0);


class AddOptionsComponent {

    constructor() {
        this.selector = 'add-options';
        this.template = `<add-options class="content__aside">
            <form class="aside__location-form" method="get">
                <h3 class="aside__title">Your location</h3>
                    <input class="location-form__item" name="city" type="text" placeholder="Enter city">
                <h3 class="aside__title">Shop for Events</h3>
                    <select name="category" class="location-form__item">
                        <option selected disabled>Select category</option>
                        <option>Music</option>
                        <option>Sport</option>
                        <option>Arts & Theater</option>
                        <option>Family</option>
                        <option>VIP</option>
                        <option>Family</option>
                        <option>Deals</option>
                    </select>
                    <select name="sub-category" class="location-form__item">
                        <option selected disabled>Select sub category</option>
                        <option>Music</option>
                        <option>Sport</option>
                        <option>Arts & Theater</option>
                        <option>Family</option>
                        <option>VIP</option>
                        <option>Family</option>
                        <option>Deals</option>
                    </select>
                    <span class="aside__text">From:</span>
                    <input class="location-form__item input-date" name="date-start" id="datePicker" type="date" placeholder="Select start data">
                    <span class="aside__text">To:</span>
                    <input class="location-form__item input-date" name="date-end" id="datePicker2" type="date" placeholder="Select end data">
                    <button class="location-form__submit" type="submit">Apply</button>
                </form>
        </add-options>`;
        this.init();
    }

    init() {
        var all = document.getElementsByTagName(this.selector);
        for (var r = 0; r < all.length; r++) {
            all[r].outerHTML = this.template;
        };
        this.makeChildren();
        this.DataWork();
    }

    makeChildren() {
        let tempTemplate = this.template;
        let tempSelector = this.selector;
        let module = new __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]();
        let tags = module.FILES;
        tags.forEach(function (value, key, mapObj) {
            if (tempTemplate.indexOf('<' + key) != -1 & key != tempSelector) {
                value();
            }
        });
    }

    DataWork() {
        webshims.setOptions('waitReady', false);
        webshims.setOptions('forms-ext', { types: 'date' });
        webshims.polyfill('forms forms-ext');

        Date.prototype.addDays = function (days) {
            var dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat;
        };

        document.getElementById('datePicker').valueAsDate = new Date();
        var inWeek = new Date();
        inWeek = inWeek.addDays(1);
        document.getElementById('datePicker2').valueAsDate = inWeek;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddOptionsComponent;
;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(0);


class JustAnnouncedComponent {

    constructor() {
        this.selector = 'events-ja';
        this.template = `<events-ja class="events__just-announced">
                <h2 class="events__title">Just Announced</h2>
                <article class="event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                                <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                            </div>
                            <div class="event__preview">
                                <div class="event__title">
                                    <h4>New music concert</h4>
                                </div>
                                <div class="event__descrip">
                                    <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                                </div>
                                <div class="event__data">
                                    <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
            </events-ja>`;
        this.init();
    }

    init() {
        var all = document.getElementsByTagName(this.selector);
        for (var r = 0; r < all.length; r++) {
            all[r].outerHTML = this.template;
        };
        this.makeChildren();
    }

    makeChildren() {
        let tempTemplate = this.template;
        let tempSelector = this.selector;
        let module = new __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]();
        let tags = module.FILES;
        tags.forEach(function (value, key, mapObj) {
            if (tempTemplate.indexOf('<' + key) != -1 & key != tempSelector) {
                value();
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = JustAnnouncedComponent;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(0);


class HappeningSoonComponent {

    constructor() {
        this.selector = 'events-hs';
        this.template = `<events-hs class="events__happening-soon">
                <h2 class="events__title">Happening Soon</h2>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
            </events-hs>`;
        this.init();
    }

    init() {
        var all = document.getElementsByTagName(this.selector);
        for (var r = 0; r < all.length; r++) {
            all[r].outerHTML = this.template;
        };
        this.makeChildren();
    }

    makeChildren() {
        let tempTemplate = this.template;
        let tempSelector = this.selector;
        let module = new __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]();
        let tags = module.FILES;
        tags.forEach(function (value, key, mapObj) {
            if (tempTemplate.indexOf('<' + key) != -1 & key != tempSelector) {
                value();
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HappeningSoonComponent;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(0);


class CategoriesComponent {

    constructor() {
        this.selector = 'events-categories';
        this.template = `<events-categories class="categories">
                 <section class="event category-event" id="music">
                        <h3 class="category"> Music </h3>
                        <article class="event__preview category__preview">
                                <a href="#">
                                <div class="event__title">
                                    <h4 class="event__title_text">New music concert</h4>
                                </div>
                                <div class="event__descrip">
                                    <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                                </div>
                                <div class="event__data">
                                    <span>19 февраля 2017, 12:00.</span>
                                </div>
                                </a>
                            </article>
                        <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                 </section>
                 <section class="event category-event" id="sport">
                        <h3 class="category"> Sport </h3>
                        <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                        <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                    </section>
                 <section class="event category-event" id="art">
                    <h3 class="category"> Arts & Theater </h3>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                </section>
                 <section class="event category-event" id="family">
                    <h3 class="category"> Family </h3>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                </section>
                 <section class="event category-event" id="vip">
                    <h3 class="category"> VIP </h3>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                </section>
                 <section class="event category-event" id="deals">
                    <h3 class="category"> Deals </h3>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                </section>
            </events-categories>`;
        this.init();
    }

    init() {
        var all = document.getElementsByTagName(this.selector);
        for (var r = 0; r < all.length; r++) {
            all[r].outerHTML = this.template;
        };
        this.makeChildren();
    }

    makeChildren() {
        let tempTemplate = this.template;
        let tempSelector = this.selector;
        let module = new __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]();
        let tags = module.FILES;
        tags.forEach(function (value, key, mapObj) {
            if (tempTemplate.indexOf('<' + key) != -1 & key != tempSelector) {
                value();
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoriesComponent;


/***/ })
/******/ ]);