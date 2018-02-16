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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(1);


class AppService {

    constructor(template, selector) {
        this.renderChildren(template, selector);
    }

    renderChildren(template, selector) {
        const module = new __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]();
        module.FILES.forEach((value, key, mapObj) => {
            if (template.indexOf('<' + key) != -1 & key != selector) {
                value();
            };
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppService;
;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_headline_component_headline_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_event_group_component_event_group_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_add_options_component_add_options_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_just_announced_component_just_announced_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_happening_soon_component_happening_soon_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_categories_component_categories_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_search_events_component_search_events_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_events_component_event_component_event_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_burger_menu_component_burger_menu_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_search_bar_component_search_bar_component__ = __webpack_require__(14);











class AppModule {

    constructor() {
        this.FILES = new Map();
        this.FILES.set('headline', () => new __WEBPACK_IMPORTED_MODULE_0__components_headline_component_headline_component__["a" /* HeadlineComponent */]());
        this.FILES.set('add-options', () => new __WEBPACK_IMPORTED_MODULE_2__components_add_options_component_add_options_component__["a" /* AddOptionsComponent */]());
        this.FILES.set('event-group', () => new __WEBPACK_IMPORTED_MODULE_1__components_event_group_component_event_group_component__["a" /* EventGroupComponent */]());
        this.FILES.set('events-ja', () => new __WEBPACK_IMPORTED_MODULE_3__components_just_announced_component_just_announced_component__["a" /* JustAnnouncedComponent */]());
        this.FILES.set('events-hs', () => new __WEBPACK_IMPORTED_MODULE_4__components_happening_soon_component_happening_soon_component__["a" /* HappeningSoonComponent */]());
        this.FILES.set('events-categories', () => new __WEBPACK_IMPORTED_MODULE_5__components_categories_component_categories_component__["a" /* CategoriesComponent */]());
        this.FILES.set('search-events', () => new __WEBPACK_IMPORTED_MODULE_6__components_search_events_component_search_events_component__["a" /* SearchEventsComponent */]());
        this.FILES.set('event', () => new __WEBPACK_IMPORTED_MODULE_7__components_events_component_event_component_event_component__["a" /* EventComponent */]());
        this.FILES.set('burger-menu', () => new __WEBPACK_IMPORTED_MODULE_8__components_burger_menu_component_burger_menu_component__["a" /* BurgerMenuComponent */]());
        this.FILES.set('search-bar', () => new __WEBPACK_IMPORTED_MODULE_9__components_search_bar_component_search_bar_component__["a" /* SearchBarComponent */]());
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppModule;
;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class InitService {

    constructor(template, selector) {
        this.initComponent(template, selector);
    }

    initComponent(template, selector) {
        let allTags = document.getElementsByTagName(selector);
        for (let i = 0; i < allTags.length; i++) {
            allTags[i].outerHTML = template;
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InitService;
;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_service__ = __webpack_require__(2);



class SearchEventsComponent {

    constructor(quantity) {
        this.quantity = quantity;
        this.selector = 'search-events';
        this.template = `<search-events class="search-events">
                <h2 class="events__title">Query results</h2>
                <button class="page_button previous">previous</button>
                <button class="page_button next">next</button>
                <event></event>
                <button class="page_button previous">previous</button>
                <button class="page_button next">next</button>
            </search-events>`;

        new __WEBPACK_IMPORTED_MODULE_1__init_service__["a" /* InitService */](this.template, this.selector);
        this.renderChildren();
        this.Buttons();
    }

    renderChildren() {
        const content = document.getElementsByTagName(this.selector)[0];
        if (this.quantity > 10) {
            this.quantity = 10;
        };
        for (let i = 0; i < this.quantity; i++) {
            let newEvent = document.createElement('event');
            content.insertBefore(newEvent, content.children[3]);
        };
        new __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* AppService */](this.template, this.selector);
    }

    Buttons() {
        const nextButtons = document.getElementsByClassName('next');
        for (let i = 0; i < nextButtons.length; i++) {
            console.log(nextButtons[i]);
            nextButtons[i].onclick = function () {};
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchEventsComponent;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app_component_app_component__ = __webpack_require__(5);


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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(0);



class AppComponent {

    constructor() {
        this.selector = 'app';
        this.template = `
            <app>
                <headline></headline>
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
        new __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */](this.template, this.selector);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppComponent;
;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_service__ = __webpack_require__(2);



class HeadlineComponent {
    constructor() {
        this.selector = 'headline';
        this.template = `
        <headline class="header">
            <div class="content">
                <div class="header__top">
                    <a class="header__logo" href=#> Logo-Ticketmaster </a>
                    <search-bar></search-bar>
                    <header-menu class="header__menu">
                        <a href="#" class="menu__item my-acc">My Acc</a>
                        <a href="#" class="menu__item">Help</a>
                    </header-menu>
                    <burger-menu></burger-menu>
                </div>
                <nav class="header__navigation">
                    <a href="#Music" class="navigation__item">Music</a>
                    <a href="#Sport" class="navigation__item">Sport</a>
                    <a href="#Art" class="navigation__item">Arts & Theater</a>
                    <a href="#Family" class="navigation__item">Family</a>
                </nav>
            </div>
        </headline>`;

        new __WEBPACK_IMPORTED_MODULE_1__init_service__["a" /* InitService */](this.template, this.selector);
        new __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* AppService */](this.template, this.selector);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeadlineComponent;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_service__ = __webpack_require__(2);



class EventGroupComponent {
    constructor() {
        this.selector = 'event-group';
        this.template = `
            <event-group class="content__events">
                <events-ja class="events__just-announced"></events-ja>
                <events-hs class="events__happening-soon"></events-hs>
                <events-categories class="categories"></events-categories>
            </event-group>`;

        new __WEBPACK_IMPORTED_MODULE_1__init_service__["a" /* InitService */](this.template, this.selector);
        new __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* AppService */](this.template, this.selector);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventGroupComponent;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_events_component_search_events_component__ = __webpack_require__(3);





class AddOptionsComponent {

    constructor() {
        this.selector = 'add-options';
        this.template = `
            <add-options class="content__aside">
                <form onsubmit="return false" class="aside__location-form" method="get">
                    <h3 class="aside__title">Shop for Events</h3>
                    <input class="location-form__item" name="city" type="text" autocomplete="on" placeholder="Enter city">
                    <select id="category" name="category" class="location-form__item">
                        <option selected>Select category</option>
                    </select>
                    <select id="sub-category" name="sub-category" class="location-form__item">
                        <option selected>Select sub category</option>
                    </select>
                    <span class="aside__text">From:</span>
                    <input class="location-form__item input-date" name="startDateTime" id="datePicker" type="date" placeholder="Select start data">
                    <span class="aside__text">To:</span>
                    <input class="location-form__item input-date" name="endDateTime" id="datePicker2" type="date" placeholder="Select end data">
                    <button class="location-form__submit" type="submit">Apply</button>
                </form>
            </add-options>`;

        new __WEBPACK_IMPORTED_MODULE_0__init_service__["a" /* InitService */](this.template, this.selector);
        new __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */](this.template, this.selector);
        this.dateWork();
        this.getCategoriesData();
        //this.searchData();
    }

    dateWork() {
        webshims.setOptions('waitReady', false);
        webshims.setOptions('forms-ext', { types: 'date' });
        webshims.polyfill('forms forms-ext');

        Date.prototype.addDays = function (days) {
            let dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat;
        };

        document.getElementById('datePicker').valueAsDate = new Date();
        let inWeek = new Date();
        inWeek = inWeek.addDays(1);
        document.getElementById('datePicker2').valueAsDate = inWeek;
    }

    getCategoriesData() {
        this.dataService = new __WEBPACK_IMPORTED_MODULE_2__get_data_service__["a" /* GetDataService */]();
        this.json = this.dataService.getJSData("https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0");
        console.log(this.json);
        const category = document.getElementsByName('category')[0];
        const subCategory = document.getElementsByName('sub-category')[0];
        let APIdata = this.json._embedded.classifications;
        for (let i = 0; i < APIdata.length; i++) {
            try {
                let segment = APIdata[i].segment.name;
                let option = document.createElement('option');
                option.innerText = segment;
                category.appendChild(option);
            } catch (err) {
                console.log(err);
            };
        };
        category.onchange = function () {
            subCategory.style.display = "block";
            subCategory.innerHTML = '<option selected>Select sub category</option>';
            let selected = $("#category option:selected").text();
            for (let i = 0; i < APIdata.length; i++) {
                try {
                    if (selected == APIdata[i].segment.name) {
                        let genres = APIdata[i].segment._embedded.genres;
                        for (let j = 0; j < genres.length; j++) {
                            let option = document.createElement('option');
                            option.innerText = genres[j].name;
                            subCategory.appendChild(option);
                        };
                    }
                } catch (err) {
                    console.log(err);
                };
            };
        };
    }

    searchData() {
        document.getElementsByClassName('location-form__submit')[0].onclick = () => {
            let city = document.getElementsByName('city')[0].value;
            let category = document.getElementsByName('category')[0].value;
            let subCategory = document.getElementsByName('sub-category')[0].value;
            let startDateTime = document.getElementsByName('startDateTime')[0].value;
            let endDateTime = document.getElementsByName('endDateTime')[0].value;
            this.getSearchData(city, category, subCategory, startDateTime, endDateTime);
        };
    }

    getSearchData(city, category, subCategory, startDateTime, endDateTime) {
        startDateTime = new Date(startDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
        endDateTime = new Date(endDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
        startDateTime = startDateTime.toISOString().substr(0, 19) + 'Z';
        endDateTime = endDateTime.toISOString().substr(0, 19) + 'Z';
        let urlString = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&startDateTime=" + startDateTime + "&endDateTime=" + endDateTime;
        if (category != 'Select category') {
            urlString = urlString + "&classificationName=" + category;
        };
        if (subCategory != 'Select sub category') {
            urlString = urlString + "&keyword=" + subCategory;
        };
        if (city != '') {
            urlString = urlString + "&city=" + city;
        };

        $.ajax({
            type: "GET",
            url: urlString,
            async: true,
            dataType: "json",
            success: json => {
                this.showEvents(json);
            },
            error: (xhr, status, err) => {
                console.log(err);
            }
        });
    }

    showEvents(json) {
        if (json.page.totalPages == 0) {
            document.getElementsByClassName('events__title')[0].innerHTML = 'Can\'t find query results! Please, try again!';
        } else {
            this.createQueryResults(json.page.totalPages);
            let categoryBlock = document.getElementsByClassName('search-events')[0];
            let categoryEvents = categoryBlock.getElementsByClassName('event');
            let events = json._embedded.events;
            for (let i = 0; i < categoryEvents.length; i++) {
                categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
                categoryEvents[i].getElementsByClassName('event__data')[0].innerText = events[i].dates.start.localDate;
                categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
            };
        };
    }

    createQueryResults(quantity) {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        let QueryResults = document.createElement('search-events');
        document.getElementsByClassName('content__events')[0].appendChild(QueryResults);
        new __WEBPACK_IMPORTED_MODULE_3__search_events_component_search_events_component__["a" /* SearchEventsComponent */](quantity);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddOptionsComponent;
;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_service__ = __webpack_require__(2);



class JustAnnouncedComponent {
    constructor() {
        this.selector = 'events-ja';
        this.template = `<events-ja class="events__just-announced">
                <h2 class="events__title">Just Announced</h2>
                <article class="event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview">
                                <div class="event__title">
                                    <h4></h4>
                                </div>
                                <div class="event__descrip">
                                    <p></p>
                                </div>
                                <div class="event__data">
                                    <span></span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview">
                                <div class="event__title">
                                    <h4></h4>
                                </div>
                                <div class="event__descrip">
                                    <p></p>
                                </div>
                                <div class="event__data">
                                    <span></span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview">
                                <div class="event__title">
                                    <h4></h4>
                                </div>
                                <div class="event__descrip">
                                    <p></p>
                                </div>
                                <div class="event__data">
                                    <span></span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview">
                                <div class="event__title">
                                    <h4></h4>
                                </div>
                                <div class="event__descrip">
                                    <p></p>
                                </div>
                                <div class="event__data">
                                    <span></span>
                            </div>
                        </div>
                    </a>
                </article>
            </events-ja>`;
        new __WEBPACK_IMPORTED_MODULE_1__init_service__["a" /* InitService */](this.template, this.selector);
        new __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* AppService */](this.template, this.selector);
        //this.getData();
    }

    getData() {
        Date.prototype.addDays = function (days) {
            let dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat;
        };

        let today = new Date();
        today.setUTCMilliseconds(0);
        let inWeek = today.addDays(3);
        this.today = today.toISOString().substr(0, 19) + 'Z';
        this.inWeek = inWeek.toISOString().substr(0, 19) + 'Z';
        this.getEvents(0);
    }

    getEvents(page) {
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&size=4&onsaleStartDateTime=" + this.today + "&onsaleEndDateTime=" + this.inWeek + "&page=" + page,
            async: true,
            dataType: "json",
            success: json => {
                this.showEvents(json);
            },
            error: (xhr, status, err) => {
                console.log(err);
            }
        });
    }

    showEvents(json) {
        let categoryBlock = document.getElementsByClassName('events__just-announced')[0];
        let categoryEvents = categoryBlock.getElementsByClassName('event');
        let events = json._embedded.events;
        for (let i = 0; i < categoryEvents.length; i++) {
            categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
            categoryEvents[i].getElementsByClassName('event__data')[0].innerText = events[i].dates.start.localDate;
            categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
            categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
        };
        this.changeEvents(json.page.number, json.page.totalPages);
    }

    changeEvents(page, all) {
        let changePage = (page, all) => {
            if (page < 0) {
                page = 0;
            };
            if (page > all - 1) {
                page = 0;
            };
            page = page + 1;
            this.getEvents(page);
        };
        //setTimeout(changePage, 10000, page,all);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = JustAnnouncedComponent;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(0);



class HappeningSoonComponent {

    constructor() {
        this.selector = 'events-hs';
        this.template = `
            <events-hs class="events__happening-soon">
                <h2 class="events__title">Happening Soon</h2>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview">
                                <div class="event__title">
                                    <h4></h4>
                                </div>
                                <div class="event__descrip">
                                    <p></p>
                                </div>
                                <div class="event__data">
                                    <span></span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview">
                                <div class="event__title">
                                    <h4></h4>
                                </div>
                                <div class="event__descrip">
                                    <p></p>
                                </div>
                                <div class="event__data">
                                    <span></span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview">
                                <div class="event__title">
                                    <h4></h4>
                                </div>
                                <div class="event__descrip">
                                    <p></p>
                                </div>
                                <div class="event__data">
                                    <span></span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview">
                                <div class="event__title">
                                    <h4></h4>
                                </div>
                                <div class="event__descrip">
                                    <p></p>
                                </div>
                                <div class="event__data">
                                    <span></span>
                            </div>
                        </div>
                    </a>
                </article>
            </events-hs>`;

        new __WEBPACK_IMPORTED_MODULE_0__init_service__["a" /* InitService */](this.template, this.selector);
        new __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */](this.template, this.selector);
        //this.getData();
    }

    getData() {
        Date.prototype.addDays = function (days) {
            let dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat;
        };

        let today = new Date();
        today.setUTCMilliseconds(0);
        let inWeek = today.addDays(1);
        today = today.toISOString().substr(0, 19) + 'Z';
        inWeek = inWeek.toISOString().substr(0, 19) + 'Z';

        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&startDateTime=" + today + "&endDateTime=" + inWeek + "&size=4",
            async: true,
            dataType: "json",
            success: json => {
                this.showEvents(json);
            },
            error: (xhr, status, err) => {
                console.log(err);
            }
        });
    }

    showEvents(json) {
        let categoryBlock = document.getElementsByClassName('events__happening-soon')[0];
        let categoryEvents = categoryBlock.getElementsByClassName('hs-event');
        let events = json._embedded.events;
        for (let i = 0; i < categoryEvents.length; i++) {
            categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
            categoryEvents[i].getElementsByClassName('event__data')[0].innerText = events[i].dates.start.localDate;
            categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
            categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HappeningSoonComponent;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_service__ = __webpack_require__(2);



class CategoriesComponent {

    constructor() {
        this.selector = 'events-categories';
        this.template = `<events-categories class="categories">
                 <section class="event category-event" id="Music">
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
                 <section class="event category-event" id="Sport">
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
                 <section class="event category-event" id="Art">
                    <h3 class="category"> Arts & Theater </h3>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии амбеки, курьёзы и скандалы.</p>
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
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                </section>
                 <section class="event category-event" id="Family">
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
            </events-categories>`;
        new __WEBPACK_IMPORTED_MODULE_1__init_service__["a" /* InitService */](this.template, this.selector);
        new __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* AppService */](this.template, this.selector);
        //this.getData();
    }

    getData() {
        let categoryList = ['Music', 'Sport', 'Art', 'Family'];
        categoryList.forEach((category, num, categorylist) => {
            this.getCategoryEvents(category);
        });
    }

    getCategoryEvents(categorysearch) {
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&size=4&classificationName=" + categorysearch,
            async: true,
            dataType: "json",
            success: json => {
                this.showEvents(json, categorysearch);
            },
            error: (xhr, status, err) => {
                console.log(err);
            }
        });
    }

    showEvents(json, categorysearch) {
        let categoryBlock = document.getElementById(categorysearch);
        let categoryEvents = categoryBlock.getElementsByClassName('event__preview');
        let events = json._embedded.events;
        for (let i = 0; i < categoryEvents.length; i++) {
            categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
            categoryEvents[i].getElementsByClassName('event__data')[0].innerText = events[i].dates.start.localDate;
            categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoriesComponent;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_service__ = __webpack_require__(2);


class EventComponent {
    constructor() {
        this.selector = 'event';
        this.template = `
            <event class="event">
                <a href="#" class="event-link">
                    <div class="event__foto">
                        <img class="foto__image" alt="" src="">
                    </div>
                    <div class="event__preview">
                        <div class="event__title">
                            <h4></h4>
                        </div>
                        <div class="event__descrip">
                            <p></p>
                        </div>
                        <div class="event__data">
                            <span></span>
                        </div>
                    </div>
                </a>
            </event>`;

        new __WEBPACK_IMPORTED_MODULE_0__init_service__["a" /* InitService */](this.template, this.selector);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventComponent;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_service__ = __webpack_require__(2);


class BurgerMenuComponent {

    constructor() {
        this.selector = 'burger-menu';
        this.template = `
            <burger-menu class="header__burger">
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
            </burger-menu>`;

        new __WEBPACK_IMPORTED_MODULE_0__init_service__["a" /* InitService */](this.template, this.selector);
        this.burgerMenuCloseOpen2();
    }

    burgerMenuCloseOpen() {
        $('.burger-icon').click(function () {
            $('.burger-menu').toggleClass('burger-menu_opened');
            $('.content__aside').removeClass('content__aside_opened');
        });
        $(document).click(function (event) {
            if ($(event.target).closest(".burger-menu").length) return;
            if ($(event.target).closest(".burger-icon").length) return;
            $('.burger-menu').removeClass('burger-menu_opened');
            event.stopPropagation();
        });
    }

    burgerMenuCloseOpen2() {
        document.getElementsByClassName('burger-icon')[0].onclick = () => {
            document.getElementsByClassName('burger-menu')[0].classList.toggle('burger-menu_opened');
            document.getElementsByClassName('.content__aside')[0].classList.remove('content__aside_opened');
        };

        document.onclick = () => {};

        $(document).click(function (event) {
            if ($(event.target).closest(".burger-menu").length) return;
            if ($(event.target).closest(".burger-icon").length) return;
            $('.burger-menu').removeClass('burger-menu_opened');
            event.stopPropagation();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BurgerMenuComponent;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_events_component_search_events_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_service__ = __webpack_require__(2);



class SearchBarComponent {

    constructor(page) {
        this.selector = 'search-bar';
        this.template = `
            <search-bar onsubmit="return false" class="header__search-bar" method="get">
                <input class="search-bar__input-text" name="search" type="search" autocomplete="on" placeholder="Search...">
                <button class="search-bar__button submit" type="submit">Search</button>
                <button class="search-bar__button setting" type="button">Search settings</button>
            </search-bar>`;

        new __WEBPACK_IMPORTED_MODULE_1__init_service__["a" /* InitService */](this.template, this.selector);
        this.SearchBarCloseOpen();
        //this.SearchEvents(page);
    }

    SearchBarCloseOpen() {
        $('.setting').click(function () {
            $('.content__aside').toggleClass('content__aside_opened');
            $('.burger-menu').removeClass('burger-menu_opened');
        });
        $(document).click(function (event) {
            if ($(event.target).closest(".content__aside").length) return;
            if ($(event.target).closest(".setting").length) return;
            $('.content__aside').removeClass('content__aside_opened');
            event.stopPropagation();
        });
    }

    SearchEvents() {
        const searchButton = document.getElementsByClassName('search-bar__button submit')[0];
        searchButton.onclick = () => {
            this.createQueryResults();
            this.getData(document.getElementsByName('search')[0].value);
        };
    }

    getData(keyword) {
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=" + keyword,
            async: true,
            dataType: "json",
            success: json => {
                this.showEvents(json);
            },
            error: (xhr, status, err) => {
                console.log(err);
            }
        });
    }

    showEvents(json) {
        if (json.page.totalPages == 0) {
            document.getElementsByClassName('events__title')[0].innerHTML = 'Can\'t find query results! Please, try again!';
        } else {
            this.createQueryResults(json.page.totalPages);
            const categoryBlock = document.getElementsByClassName('search-events')[0];
            let categoryEvents = categoryBlock.getElementsByClassName('event');
            let events = json._embedded.events;
            for (let i = 0; i < categoryEvents.length; i++) {
                categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
                categoryEvents[i].getElementsByClassName('event__data')[0].innerText = events[i].dates.start.localDate;
                categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
            };
        };
    }

    createQueryResults(quantity) {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        let QueryResults = document.createElement('search-events');
        document.getElementsByClassName('content__events')[0].appendChild(QueryResults);
        new __WEBPACK_IMPORTED_MODULE_0__search_events_component_search_events_component__["a" /* SearchEventsComponent */](quantity);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchBarComponent;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GetDataService {

    constructor() {}

    getData(url) {
        this.API = $.ajax({
            type: "GET",
            url: url,
            async: true,
            dataType: "json",
            success: json => this.data = json,
            error: (xhr, status, err) => {
                console.log(err);
            }
        });
    }

    getJSData(url) {
        let data = '';
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = () => {
            data = JSON.parse(xhr.responseText);
        };
        xhr.onerror = () => {
            console.log('error ' + this.status);
        };
        xhr.send();
        return data;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GetDataService;
;

/***/ })
/******/ ]);