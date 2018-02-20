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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(5);


class InitComponentService {

    constructor() {}

    initComponent(template, selector) {
        let allTags = document.getElementsByTagName(selector);
        for (let i = 0; i < allTags.length; i++) {
            allTags[i].outerHTML = template;
        };
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
/* harmony export (immutable) */ __webpack_exports__["a"] = InitComponentService;
;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_component_service__ = __webpack_require__(0);


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

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.renderChildren();
        this.openDescription();
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
        this.initService.renderChildren(this.template, this.selector);
        if (this.quantity < 10) {
            for (let i = 0; i < document.getElementsByClassName('page_button').length; i++) {
                document.getElementsByClassName('page_button')[i].style.display = "none";
            };
        };
    }

    openDescription() {
        let events = document.getElementsByClassName('event');
        for (let i = 0; i < events.length; i++) {
            events[i].getElementsByClassName('info')[0].onclick = () => {
                events[i].getElementsByClassName('event__descrip-mini')[0].classList.toggle('descrip-mini_opened');
            };
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchEventsComponent;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GetDataService {

    constructor() {}

    httpGet(url) {

        return new Promise(function (resolve, reject) {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    let error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };

            xhr.send();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GetDataService;
;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_component_service__ = __webpack_require__(0);


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
        let initService = new __WEBPACK_IMPORTED_MODULE_0__init_component_service__["a" /* InitComponentService */]();
        initService.initComponent(this.template, this.selector);
        initService.renderChildren(this.template, this.selector);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppComponent;
;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app_component_app_component__ = __webpack_require__(3);


$(window).on('load', function () {
    let $preloader = $('#p_prldr'),
        $svg_anm = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(1200).fadeOut('slow');
});

let App = new __WEBPACK_IMPORTED_MODULE_0__components_app_component_app_component__["a" /* AppComponent */]();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_headline_component_headline_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_event_group_component_event_group_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_add_options_component_add_options_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_just_announced_component_just_announced_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_happening_soon_component_happening_soon_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_categories_component_categories_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_search_events_component_search_events_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_events_component_event_component_event_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_burger_menu_component_burger_menu_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_search_bar_component_search_bar_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_app_component_app_component__ = __webpack_require__(3);












class AppModule {

    constructor() {
        this.FILES = new Map();
        this.FILES.set('app', () => new __WEBPACK_IMPORTED_MODULE_10__components_app_component_app_component__["a" /* AppComponent */]());
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_events_component_search_events_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component_app_component__ = __webpack_require__(3);




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
                    <a href="#" class="navigation__item">Music</a>
                    <a href="#" class="navigation__item">Sport</a>
                    <a href="#" class="navigation__item">Arts & Theater</a>
                    <a href="#" class="navigation__item">Family</a>
                </nav>
            </div>
        </headline>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.initService.renderChildren(this.template, this.selector);
        this.startPage();
    }

    startPage() {
        document.getElementsByClassName('header__logo')[0].onclick = () => {
            new __WEBPACK_IMPORTED_MODULE_2__app_component_app_component__["a" /* AppComponent */]();
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeadlineComponent;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_component_service__ = __webpack_require__(0);


class EventGroupComponent {
    constructor() {
        this.selector = 'event-group';
        this.template = `
            <event-group class="content__events">
                <events-ja class="events__just-announced"></events-ja>
                <events-hs class="events__happening-soon"></events-hs>
                <events-categories class="categories"></events-categories>
            </event-group>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.initService.renderChildren(this.template, this.selector);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventGroupComponent;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_data_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_events_component_search_events_component__ = __webpack_require__(1);




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

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.initService.renderChildren(this.template, this.selector);
        this.dataService = new __WEBPACK_IMPORTED_MODULE_1__get_data_service__["a" /* GetDataService */]();
        this.getCategoriesData(this.dataService);
        this.searchData(this.dataService);
        this.dateWork();
    }

    getCategoriesData(dataService) {
        dataService.httpGet("https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0").then(response => this.showCategoriesData(JSON.parse(response)), error => console.log(`Rejected: ${error}`));
    }

    showCategoriesData(json) {
        const category = document.getElementsByName('category')[0];
        const subCategory = document.getElementsByName('sub-category')[0];
        let APIdata = json._embedded.classifications;
        for (let i = 0; i < APIdata.length; i++) {
            try {
                let segment = APIdata[i].segment.name;
                let option = document.createElement('option');
                option.innerText = segment;
                category.appendChild(option);
            } catch (err) {};
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
                } catch (err) {};
            };
        };
    }

    searchData(dataService) {
        document.getElementsByClassName('location-form__submit')[0].onclick = () => {
            document.getElementsByClassName('content__aside')[0].classList.toggle('content__aside_opened');
            const categoryButtons = document.getElementsByClassName('navigation__item');
            for (let i = 0; i < categoryButtons.length; i++) {
                categoryButtons[i].style.backgroundColor = 'transparent';
                categoryButtons[i].style.color = 'white';
            };
            this.city = document.getElementsByName('city')[0].value;
            this.category = document.getElementsByName('category')[0].value;
            this.subCategory = document.getElementsByName('sub-category')[0].value;
            this.startDateTime = document.getElementsByName('startDateTime')[0].value;
            this.endDateTime = document.getElementsByName('endDateTime')[0].value;
            this.startDateTime = new Date(this.startDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
            this.endDateTime = new Date(this.endDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
            this.startDateTime = this.startDateTime.toISOString().substr(0, 19) + 'Z';
            this.endDateTime = this.endDateTime.toISOString().substr(0, 19) + 'Z';
            this.getSearchData(0);
        };
    }

    getSearchData(page) {
        let urlString = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&page=" + page + "&startDateTime=" + this.startDateTime + "&endDateTime=" + this.endDateTime;
        if (this.category != 'Select category') {
            urlString = urlString + "&classificationName=" + this.category;
        };
        if (this.subCategory != 'Select sub category') {
            urlString = urlString + "&keyword=" + this.subCategory;
        };
        if (this.city != '') {
            urlString = urlString + "&city=" + this.city;
        };

        this.dataService.httpGet(urlString).then(response => this.showEvents(JSON.parse(response)), error => console.log(`Rejected: ${error}`));
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
                categoryEvents[i].getElementsByClassName('date')[0].innerText = events[i].dates.start.localDate;
                categoryEvents[i].getElementsByClassName('event__venues')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
                let month = events[i].dates.start.localDate.substr(5, 2);
                let date = events[i].dates.start.localDate.substr(8, 2);
                let mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                categoryEvents[i].getElementsByClassName('day')[0].innerText = date;
                categoryEvents[i].getElementsByClassName('month')[0].innerText = mS[month - 1];
                if (events[i].info != undefined) {
                    categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i].info;
                    categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].innerText = events[i].info;
                } else {
                    categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = '';
                    categoryEvents[i].getElementsByClassName('info')[0].style.display = "none";
                };
            };
        };
        this.changePage(json.page.number, json.page.totalPages);
    }

    createQueryResults(quantity) {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        let QueryResults = document.createElement('search-events');
        document.getElementsByClassName('content__events')[0].appendChild(QueryResults);
        new __WEBPACK_IMPORTED_MODULE_2__search_events_component_search_events_component__["a" /* SearchEventsComponent */](quantity);
    }

    changePage(page, all) {
        const nextButtons = document.getElementsByClassName('next');
        const prevButtons = document.getElementsByClassName('previous');
        for (let i = 0; i < nextButtons.length; i++) {
            nextButtons[i].onclick = () => {
                if (page == all) {
                    page = 0;
                } else {
                    page = page + 1;
                };
                this.getSearchData(page);
            };
        };
        for (let i = 0; i < prevButtons.length; i++) {
            prevButtons[i].onclick = () => {
                if (page == 0) {
                    page = 0;
                } else {
                    page = page - 1;
                };
                this.getSearchData(page);
            };
        };
    }

    dateWork() {
        webshims.setOptions('waitReady', false);
        webshims.setOptions('forms-ext', { types: 'date' });
        webshims.polyfill('forms forms-ext');

        document.getElementById('datePicker').valueAsDate = new Date();
        let inWeek = new Date();
        inWeek.setDate(inWeek.getDate() + 7);
        document.getElementById('datePicker2').valueAsDate = inWeek;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddOptionsComponent;
;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_data_service__ = __webpack_require__(2);



class JustAnnouncedComponent {
    constructor() {
        this.selector = 'events-ja';
        this.template = `<events-ja class="events__just-announced">
                <h2 class="events__title">Just Announced</h2>
                <article class="event">
                    <div class="event__foto">
                        <img class="foto__image" alt="" src="">
                    </div>
                    <div class="event__preview">
                        <div class="event__title">
                            <h4></h4>
                        </div>
                        <div class="event__venues">
                            <span></span>
                        </div>
                        <div class="event__descrip">
                            <p></p>
                        </div>
                        <div class="event__data">
                            <span class="date"></span>
                        </div>
                    </div>
                    <div class="event__descrip-mini">
                        <p></p>
                    </div>
                </article>
                <article class="event">
                    <div class="event__foto">
                        <img class="foto__image" alt="" src="">
                    </div>
                    <div class="event__preview">
                        <div class="event__title">
                            <h4></h4>
                        </div>
                        <div class="event__venues">
                            <span></span>
                        </div>
                        <div class="event__descrip">
                            <p></p>
                        </div>
                        <div class="event__data">
                            <span class="date"></span>
                        </div>
                    </div>
                    <div class="event__descrip-mini">
                        <p></p>
                    </div>
                </article>
                <article class="event">
                    <div class="event__foto">
                        <img class="foto__image" alt="" src="">
                    </div>
                    <div class="event__preview">
                        <div class="event__title">
                            <h4></h4>
                        </div>
                        <div class="event__venues">
                            <span></span>
                        </div>
                        <div class="event__descrip">
                            <p></p>
                        </div>
                        <div class="event__data">
                            <span class="date"></span>
                        </div>
                    </div>
                    <div class="event__descrip-mini">
                        <p></p>
                    </div>
                </article>
                <article class="event">
                    <div class="event__foto">
                        <img class="foto__image" alt="" src="">
                    </div>
                    <div class="event__preview">
                        <div class="event__title">
                            <h4></h4>
                        </div>
                        <div class="event__venues">
                            <span></span>
                        </div>
                        <div class="event__descrip">
                            <p></p>
                        </div>
                        <div class="event__data">
                            <span class="date"></span>
                        </div>
                    </div>
                    <div class="event__descrip-mini">
                        <p></p>
                    </div>
                </article>
            </events-ja>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.initService.renderChildren(this.template, this.selector);
        this.dataService = new __WEBPACK_IMPORTED_MODULE_1__get_data_service__["a" /* GetDataService */]();
        this.getData();
    }

    getData() {
        let today = new Date();
        let inWeek = new Date();
        inWeek.setDate(today.getDate() + 10);
        this.today = today.toISOString().substr(0, 19) + 'Z';
        this.inWeek = inWeek.toISOString().substr(0, 19) + 'Z';
        this.getEvents(0);
    }

    getEvents(page) {
        this.dataService.httpGet("https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&size=4&sort=relevance,desc&onsaleStartDateTime=" + this.today + "&onsaleEndDateTime=" + this.inWeek + "&page=" + page).then(response => this.showEvents(JSON.parse(response)), error => console.log(`Rejected: ${error}`));
    }

    showEvents(json) {
        let categoryBlock = document.getElementsByClassName('events__just-announced')[0];
        let categoryEvents = categoryBlock.getElementsByClassName('event');
        let events = json._embedded.events;
        for (let i = 0; i < categoryEvents.length; i++) {
            categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
            categoryEvents[i].getElementsByClassName('date')[0].innerText = events[i].dates.start.localDate;
            categoryEvents[i].getElementsByClassName('event__venues')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
            categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
            if (events[i].info != undefined) {
                categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i].info;
                categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].innerText = events[i].info;
            } else {
                categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = '';
                categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].style.display = "none";
            };
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = JustAnnouncedComponent;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_data_service__ = __webpack_require__(2);



class HappeningSoonComponent {

    constructor() {
        this.selector = 'events-hs';
        this.template = `
            <events-hs class="events__happening-soon">
                <h2 class="events__title">Happening Soon</h2>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4></h4>
                            </div>
                            <div class="event__venues">
                                <span></span>
                            </div>
                            <div class="event__descrip">
                                <p></p>
                            </div>
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4></h4>
                            </div>
                            <div class="event__venues">
                                <span></span>
                            </div>
                            <div class="event__descrip">
                                <p></p>
                            </div>
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4></h4>
                            </div>
                            <div class="event__venues">
                                <span></span>
                            </div>
                            <div class="event__descrip">
                                <p></p>
                            </div>
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4></h4>
                            </div>
                            <div class="event__venues">
                                <span></span>
                            </div>
                            <div class="event__descrip">
                                <p></p>
                            </div>
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4></h4>
                            </div>
                            <div class="event__venues">
                                <span></span>
                            </div>
                            <div class="event__descrip">
                                <p></p>
                            </div>
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4></h4>
                            </div>
                            <div class="event__venues">
                                <span></span>
                            </div>
                            <div class="event__descrip">
                                <p></p>
                            </div>
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
            </events-hs>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.initService.renderChildren(this.template, this.selector);
        this.dataService = new __WEBPACK_IMPORTED_MODULE_1__get_data_service__["a" /* GetDataService */]();
        this.getData();
    }

    getData() {
        let today = new Date();
        let inWeek = new Date();
        inWeek.setDate(today.getDate() + 3);
        today = today.toISOString().substr(0, 19) + 'Z';
        inWeek = inWeek.toISOString().substr(0, 19) + 'Z';

        this.dataService.httpGet("https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&startDateTime=" + today + "&endDateTime=" + inWeek + "&size=6&sort=relevance,desc").then(response => this.showEvents(JSON.parse(response)), error => console.log(`Rejected: ${error}`));
    }

    showEvents(json) {
        let categoryBlock = document.getElementsByClassName('events__happening-soon')[0];
        let categoryEvents = categoryBlock.getElementsByClassName('hs-event');
        let events = json._embedded.events;
        for (let i = 0; i < categoryEvents.length; i++) {
            categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
            categoryEvents[i].getElementsByClassName('date')[0].innerText = events[i].dates.start.localDate;
            categoryEvents[i].getElementsByClassName('event__venues')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
            categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
            if (events[i].info != undefined) {
                categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].innerText = events[i].info;
            } else {
                categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].style.display = "none";
            };
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HappeningSoonComponent;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_data_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_events_component_search_events_component__ = __webpack_require__(1);




class CategoriesComponent {

    constructor() {
        this.selector = 'events-categories';
        this.initService = new __WEBPACK_IMPORTED_MODULE_0__init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.dataService = new __WEBPACK_IMPORTED_MODULE_1__get_data_service__["a" /* GetDataService */]();
        this.getData();
    }

    getData() {
        const categoryButtons = document.getElementsByClassName('navigation__item');
        for (let i = 0; i < categoryButtons.length; i++) {
            categoryButtons[i].onclick = () => {
                for (let j = 0; j < categoryButtons.length; j++) {
                    categoryButtons[j].style.backgroundColor = 'transparent';
                    categoryButtons[j].style.color = 'white';
                };
                categoryButtons[i].style.backgroundColor = '#fffbf9';
                categoryButtons[i].style.color = '#58125b';
                this.categorysearch = categoryButtons[i].text;
                this.getCategoryEvents(0);
            };
        };
    }

    getCategoryEvents(page) {
        this.dataService.httpGet("https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&classificationName=" + this.categorysearch + "&page=" + page).then(response => this.showEvents(JSON.parse(response), this.categorysearch), error => console.log(`Rejected: ${error}`));
    }

    showEvents(json, categorysearch) {
        this.createQueryResults(json.page.totalPages);
        document.getElementsByClassName('events__title')[0].innerHTML = categorysearch;
        let categoryBlock = document.getElementsByClassName('search-events')[0];
        let categoryEvents = categoryBlock.getElementsByClassName('event');
        let events = json._embedded.events;
        for (let i = 0; i < categoryEvents.length; i++) {
            categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
            categoryEvents[i].getElementsByClassName('date')[0].innerText = events[i].dates.start.localDate;
            categoryEvents[i].getElementsByClassName('event__venues')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
            categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
            let month = events[i].dates.start.localDate.substr(5, 2);
            let date = events[i].dates.start.localDate.substr(8, 2);
            let mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            categoryEvents[i].getElementsByClassName('day')[0].innerText = date;
            categoryEvents[i].getElementsByClassName('month')[0].innerText = mS[month - 1];
            if (events[i].info != undefined) {
                categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i].info;
                categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].innerText = events[i].info;
            } else {
                categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = '';
                categoryEvents[i].getElementsByClassName('info')[0].style.display = "none";
            };
        };
        this.changePage(json.page.number, json.page.totalPages);
    }

    changePage(page, all) {
        const nextButtons = document.getElementsByClassName('next');
        const prevButtons = document.getElementsByClassName('previous');
        for (let i = 0; i < nextButtons.length; i++) {
            nextButtons[i].onclick = () => {
                if (page == all) {
                    page = 0;
                } else {
                    page = page + 1;
                };
                this.getCategoryEvents(page);
            };
        };
        for (let i = 0; i < prevButtons.length; i++) {
            prevButtons[i].onclick = () => {
                if (page == 0) {
                    page = 0;
                } else {
                    page = page - 1;
                };
                this.getCategoryEvents(page);
            };
        };
    }

    createQueryResults(quantity) {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        let QueryResults = document.createElement('search-events');
        document.getElementsByClassName('content__events')[0].appendChild(QueryResults);
        new __WEBPACK_IMPORTED_MODULE_2__search_events_component_search_events_component__["a" /* SearchEventsComponent */](quantity);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoriesComponent;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_component_service__ = __webpack_require__(0);


class EventComponent {
    constructor() {
        this.selector = 'event';
        this.template = `
            <event class="event">
                    <div class="event__foto">
                        <div class="foto__container">
                            <span class="foto__data"><span class="day"></span><br><span class="month"></span></span>
                            <img class="foto__image" alt="" src="">
                        </div>
                    </div>
                    <div class="event__preview">
                        <a href="#">
                            <div class="event__title">
                                <h4></h4> 
                            </div>
                        </a>
                        <div class="event__venues">
                            <span></span>
                        </div>
                        <div class="event__descrip">
                            <p></p>
                        </div>
                        <div class="event__data">
                            <span class="date"></span>
                            <span class="info">info</span>
                        </div>
                    </div>
                    <div class="event__descrip-mini">
                        <p></p>
                    </div>
            </event>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventComponent;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_component_service__ = __webpack_require__(0);


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

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.burgerMenuCloseOpen();
    }

    burgerMenuCloseOpen() {
        document.getElementsByClassName('burger-icon')[0].onclick = () => {
            document.getElementsByClassName('burger-menu')[0].classList.toggle('burger-menu_opened');
            document.getElementsByClassName('content__aside')[0].classList.remove('content__aside_opened');
        };

        document.addEventListener("click", function (event) {
            let elements = document.getElementsByClassName('header__burger')[0].querySelectorAll('div,ul,li,a');
            for (let i = 0; i < elements.length; i++) {
                if (event.target == elements[i]) return;
            };
            document.getElementsByClassName('burger-menu')[0].classList.remove('burger-menu_opened');
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BurgerMenuComponent;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_events_component_search_events_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_data_service__ = __webpack_require__(2);




class SearchBarComponent {

    constructor(page) {
        this.selector = 'search-bar';
        this.template = `
            <search-bar onsubmit="return false" class="header__search-bar" method="get">
                <input class="search-bar__input-text" name="search" type="search" autocomplete="on" placeholder="Search...">
                <button class="search-bar__button submit" type="submit">Search</button>
                <button class="search-bar__button setting" type="button">Search settings</button>
            </search-bar>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_1__init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.dataService = new __WEBPACK_IMPORTED_MODULE_2__get_data_service__["a" /* GetDataService */]();
        this.SearchBarCloseOpen();
        this.SearchEvents(page);
    }

    SearchBarCloseOpen() {
        document.getElementsByClassName('setting')[0].onclick = () => {
            document.getElementsByClassName('content__aside')[0].classList.toggle('content__aside_opened');
            document.getElementsByClassName('burger-menu')[0].classList.remove('burger-menu_opened');
        };

        document.addEventListener("click", function (event) {
            let elements = document.getElementsByClassName('content__aside')[0].querySelectorAll('h3,input,select,span,button,div');
            for (let i = 0; i < elements.length; i++) {
                if (event.target == elements[i]) return;
            };
            if (event.target == document.getElementsByClassName('setting')[0]) return;
            document.getElementsByClassName('content__aside')[0].classList.remove('content__aside_opened');
        });
    }

    SearchEvents() {
        const searchButton = document.getElementsByClassName('search-bar__button submit')[0];
        const enterButton = document.getElementsByClassName('search-bar__input-text')[0];
        searchButton.onclick = () => {
            const categoryButtons = document.getElementsByClassName('navigation__item');
            for (let i = 0; i < categoryButtons.length; i++) {
                categoryButtons[i].style.backgroundColor = 'transparent';
                categoryButtons[i].style.color = 'white';
            };
            this.getData(document.getElementsByName('search')[0].value, 0);
            this.createQueryResults();
        };

        enterButton.onkeydown = event => {
            if (event.keyCode == 13) {
                searchButton.onclick();
            }
        };
    }

    getData(keyword, page) {
        this.dataService.httpGet("https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=" + keyword + "&page=" + page).then(response => this.showEvents(JSON.parse(response)), error => console.log(`Rejected: ${error}`));
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
                categoryEvents[i].getElementsByClassName('date')[0].innerText = events[i].dates.start.localDate;
                categoryEvents[i].getElementsByClassName('event__venues')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
                let month = events[i].dates.start.localDate.substr(5, 2);
                let date = events[i].dates.start.localDate.substr(8, 2);
                let mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                categoryEvents[i].getElementsByClassName('day')[0].innerText = date;
                categoryEvents[i].getElementsByClassName('month')[0].innerText = mS[month - 1];
                if (events[i].info != undefined) {
                    categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i].info;
                    categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].innerText = events[i].info;
                } else {
                    categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = '';
                    categoryEvents[i].getElementsByClassName('info')[0].style.display = "none";
                };
            };
        };
        this.changePage(json.page.number, json.page.totalPages);
    }

    changePage(page, all) {
        const nextButtons = document.getElementsByClassName('next');
        const prevButtons = document.getElementsByClassName('previous');
        for (let i = 0; i < nextButtons.length; i++) {
            nextButtons[i].onclick = () => {
                if (page == all) {
                    page = 0;
                } else {
                    page = page + 1;
                };
                this.getData(document.getElementsByName('search')[0].value, page);
            };
        };
        for (let i = 0; i < prevButtons.length; i++) {
            prevButtons[i].onclick = () => {
                if (page == 0) {
                    page = 0;
                } else {
                    page = page - 1;
                };
                this.getData(document.getElementsByName('search')[0].value, page);
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


/***/ })
/******/ ]);