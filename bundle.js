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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(6);


class InitComponentService {

    constructor() {}

    initComponent(template, selector) {
        this.insertComponent(template, selector);
        this.renderChildren(template, selector);
    }

    insertComponent(template, selector) {
        Array.from(document.getElementsByTagName(selector)).forEach((tag, i) => {
            tag.outerHTML = template;
        });
    }

    renderChildren(template, selector) {
        let module = new __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]();
        module.FILES.forEach((value, key, mapObj) => {
            if (template.indexOf('<' + key) !== -1 && key !== selector) {
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
class GetDataService {

    constructor() {
        this.url = "https://app.ticketmaster.com/discovery/v2/";
        this.apikey = "apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&";
    }

    httpGet(params, source) {
        return new Promise((resolve, reject) => {
            const $preloader = $('#page_prldr'),
                  $svg_anm = $preloader.find('.svg_anm');

            const urlSearchParams = decodeURIComponent(new URLSearchParams(params));
            const fullUrl = `${this.url}${source}${this.apikey}${urlSearchParams}`;

            let xhr = new XMLHttpRequest();
            xhr.open('GET', fullUrl, true);
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.onloadstart = function () {
                $svg_anm.fadeIn();
                $preloader.fadeIn();
            };

            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                    $svg_anm.fadeOut('slow');
                    $preloader.fadeOut('slow');
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_group_component_search_events_component_search_events_component__ = __webpack_require__(4);


class ShowEventsService {

    showEvents(json, section) {
        if (json.page.totalPages !== 0) {
            if (section === 'search-events') {
                this.createQueryResults(json.page.totalPages);
            };
            let categorySection = document.getElementsByTagName(section)[0];
            let events = json._embedded.events;
            Array.from(categorySection.getElementsByClassName('event')).forEach((categoryEvent, i) => {
                categoryEvent.getElementsByClassName('event__title')[0].innerText = events[i].name;
                categoryEvent.getElementsByClassName('date')[0].innerText = events[i].dates.start.localDate;
                this.showFoto(categoryEvent, events[i]);
                this.showDateMonth(categoryEvent, events[i]);
                this.showAdditInfo(categoryEvent, events[i]);
            });
        } else {
            this.noPages();
        };
    }

    showFoto(categoryEvent, event) {
        let width = 0,
            img;
        event.images.forEach(function (foto) {
            if (foto.width > width) {
                width = foto.width;
                img = foto.url;
            }
        });
        categoryEvent.getElementsByClassName('foto__image')[0].src = img;
    }

    showDateMonth(categoryEvent, event) {
        let month = event.dates.start.localDate.substr(5, 2);
        let date = event.dates.start.localDate.substr(8, 2);
        let mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        categoryEvent.getElementsByClassName('day')[0].innerText = date;
        categoryEvent.getElementsByClassName('month')[0].innerText = mS[month - 1];
        if (event.dates.start.localTime !== undefined) {
            categoryEvent.getElementsByClassName('time')[0].innerText = event.dates.start.localTime.substr(0, 5);
        };
    }

    showAdditInfo(categoryEvent, event) {
        if (event._embedded.venues[0].name !== undefined && event._embedded.venues[0].city.name !== undefined) {
            categoryEvent.getElementsByClassName('event__venues')[0].innerText = event._embedded.venues[0].name + " in " + event._embedded.venues[0].city.name;
        };
        if (event.info !== undefined) {
            categoryEvent.getElementsByClassName('event__descrip')[0].innerText = event.info;
        } else {
            categoryEvent.getElementsByClassName('info')[0].style.display = "none";
        };
        if (event.classifications !== undefined) {
            categoryEvent.getElementsByClassName('event__classifications')[0].innerText = event.classifications[0].genre.name + " / " + event.classifications[0].subGenre.name;
        };
    }

    noPages() {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        let errorTitle = document.createElement('div');
        errorTitle.classList.add('events__title');
        errorTitle.innerHTML = 'Can\'t find query results! Please, try again!';
        document.getElementsByClassName('content__events')[0].appendChild(errorTitle);
    }

    createQueryResults(quantity) {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        const queryResults = document.createElement('search-events');
        document.getElementsByClassName('content__events')[0].appendChild(queryResults);
        new __WEBPACK_IMPORTED_MODULE_0__event_group_component_search_events_component_search_events_component__["a" /* SearchEventsComponent */](quantity);
    }

    changePage(page, all, func) {
        if (page === 0) {
            Array.from(document.getElementsByClassName('previous')).forEach(prevButton => {
                prevButton.style.visibility = 'hidden';
            });
        };
        Array.from(document.getElementsByClassName('next')).forEach(nextButton => {
            nextButton.addEventListener('click', () => {
                Array.from(document.getElementsByClassName('previous')).forEach(prevButton => {
                    prevButton.style.visibility = 'visible';
                });
                if (page === all) {
                    page = 0;
                } else {
                    page = page + 1;
                };
                func(page);
            });
        });
        Array.from(document.getElementsByClassName('previous')).forEach(prevButton => {
            prevButton.addEventListener('click', () => {
                if (page === 0) {
                    page = 0;
                } else {
                    page = page - 1;
                };
                func(page);
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShowEventsService;
;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);


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

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppComponent;
;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);


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

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.renderChildren();
    }

    renderChildren() {
        const content = document.getElementsByTagName(this.selector)[0];
        if (this.quantity > 10) {
            this.quantity = 10;
        };
        for (let i = 1; i < this.quantity; i++) {
            let newEvent = document.createElement('event');
            content.insertBefore(newEvent, content.children[3]);
        };
        this.initService.renderChildren(this.template, this.selector);
        if (this.quantity < 10) {
            Array.from(document.getElementsByClassName('page_button')).forEach(button => {
                button.style.display = "none";
            });
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchEventsComponent;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component_app_component__ = __webpack_require__(3);


$(window).on('load', function () {
    let $preloader = $('#page_prldr'),
        $svg_anm = $preloader.find('.svg_anm');
    $svg_anm.delay(1500).fadeOut('slow');
    $preloader.delay(1500).fadeOut('slow');
});

let app = new __WEBPACK_IMPORTED_MODULE_0__app_component_app_component__["a" /* AppComponent */]();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__headline_component_headline_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_group_component_event_group_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_options_component_add_options_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_group_component_just_announced_component_just_announced_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_group_component_happening_soon_component_happening_soon_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__headline_component_categories_component_categories_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_group_component_search_events_component_search_events_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_group_component_events_event_component_event_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__headline_component_burger_menu_component_burger_menu_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__headline_component_search_bar_component_search_bar_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(3);












class AppModule {

    constructor() {
        this.FILES = new Map();
        this.FILES.set('app', () => new __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]());
        this.FILES.set('headline', () => new __WEBPACK_IMPORTED_MODULE_0__headline_component_headline_component__["a" /* HeadlineComponent */]());
        this.FILES.set('add-options', () => new __WEBPACK_IMPORTED_MODULE_2__add_options_component_add_options_component__["a" /* AddOptionsComponent */]());
        this.FILES.set('event-group', () => new __WEBPACK_IMPORTED_MODULE_1__event_group_component_event_group_component__["a" /* EventGroupComponent */]());
        this.FILES.set('events-ja', () => new __WEBPACK_IMPORTED_MODULE_3__event_group_component_just_announced_component_just_announced_component__["a" /* JustAnnouncedComponent */]());
        this.FILES.set('events-hs', () => new __WEBPACK_IMPORTED_MODULE_4__event_group_component_happening_soon_component_happening_soon_component__["a" /* HappeningSoonComponent */]());
        this.FILES.set('search-events', () => new __WEBPACK_IMPORTED_MODULE_6__event_group_component_search_events_component_search_events_component__["a" /* SearchEventsComponent */]());
        this.FILES.set('event', () => new __WEBPACK_IMPORTED_MODULE_7__event_group_component_events_event_component_event_component__["a" /* EventComponent */]());
        this.FILES.set('burger-menu', () => new __WEBPACK_IMPORTED_MODULE_8__headline_component_burger_menu_component_burger_menu_component__["a" /* BurgerMenuComponent */]());
        this.FILES.set('search-bar', () => new __WEBPACK_IMPORTED_MODULE_9__headline_component_search_bar_component_search_bar_component__["a" /* SearchBarComponent */]());
        this.FILES.set('categories', () => new __WEBPACK_IMPORTED_MODULE_5__headline_component_categories_component_categories_component__["a" /* CategoriesComponent */]());
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppModule;
;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(3);



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
                <categories></categories>
            </div>
        </headline>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.startPage();
    }

    startPage() {
        document.getElementsByClassName('header__logo')[0].onclick = () => {
            new __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]();
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeadlineComponent;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);


class EventGroupComponent {
    constructor() {
        this.selector = 'event-group';
        this.template = `
            <event-group class="content__events">
                <events-ja class="events__just-announced"></events-ja>
                <events-hs class="events__happening-soon"></events-hs>
            </event-group>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventGroupComponent;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_show_events_service__ = __webpack_require__(2);




class AddOptionsComponent {

    constructor() {
        this.selector = 'add-options';
        this.template = `
            <add-options class="content__aside">
                <form onsubmit="return false" class="aside__location-form" method="get">
                    <h3 class="aside__title">Shop for Events</h3>
                    <input class="location-form__item" name="city" type="text" autocomplete="on" placeholder="Enter city">
                    <select id="category" name="classificationName" class="location-form__item">
                        <option selected>Select category</option>
                    </select>
                    <select id="sub-category" name="keyword" class="location-form__item">
                        <option selected>Select sub category</option>
                    </select>
                    <span class="aside__text">From:</span>
                    <input class="location-form__item input-date" name="startDateTime" id="datePicker" type="date" placeholder="Select start data">
                    <span class="aside__text">To:</span>
                    <input class="location-form__item input-date" name="endDateTime" id="datePicker2" type="date" placeholder="Select end data">
                    <button class="location-form__submit" type="submit">Apply</button>
                </form>
            </add-options>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.dataService = new __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */]();
        this.showEventsService = new __WEBPACK_IMPORTED_MODULE_2__services_show_events_service__["a" /* ShowEventsService */]();
        this.getCategoriesData();
        this.searchData();
        this.dateWork();
    }

    getCategoriesData() {
        let source = "classifications.json?";
        this.dataService.httpGet(null, source).then(response => this.showCategoriesData(response), error => console.log(`Rejected: ${error}`));
    }

    showCategoriesData(json) {
        const category = document.getElementsByName('classificationName')[0];
        let APIdata = json._embedded.classifications;
        APIdata.forEach(classification => {
            if (classification.segment !== undefined) {
                let option = document.createElement('option');
                option.innerText = classification.segment.name;
                category.appendChild(option);
            };
        });
        this.showSubCategoriesData(category, APIdata);
    }

    showSubCategoriesData(category, APIdata) {
        const subCategory = document.getElementsByName('keyword')[1];
        category.onchange = function () {
            subCategory.style.display = "block";
            subCategory.innerHTML = '<option selected>Select sub category</option>';
            let selected = $("#category option:selected").text();
            APIdata.forEach(classification => {
                if (classification.segment !== undefined) {
                    if (selected === classification.segment.name) {
                        let genres = classification.segment._embedded.genres;
                        genres.forEach(genre => {
                            let option = document.createElement('option');
                            option.innerText = genre.name;
                            subCategory.appendChild(option);
                        });
                    }
                };
            });
        };
    }

    searchData() {
        document.getElementsByClassName('location-form__submit')[0].onclick = () => {
            document.getElementsByClassName('content__aside')[0].classList.toggle('content__aside_opened');
            Array.from(document.getElementsByClassName('navigation__item')).forEach((Button, i) => {
                Button.style.backgroundColor = 'transparent';
                Button.style.color = 'white';
            });
            this.getData(0);
        };
    }

    getData(page) {
        const params = new FormData(document.forms[0]);
        params.append('size', '10');
        params.set('startDateTime', new Date(params.get('startDateTime').replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')).toISOString().substr(0, 19) + 'Z');
        params.set('endDateTime', new Date(params.get('endDateTime').replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')).toISOString().substr(0, 19) + 'Z');
        if (params.get('classificationName') === 'Select category') {
            params.delete('classificationName');
        };
        if (params.get('keyword') === 'Select sub category') {
            params.delete('keyword');
        };
        params.set('page', page);
        const source = "events.json?";

        this.dataService.httpGet(params, source).then(response => this.showEvents(response), error => console.log(`Rejected: ${error}`));
    }

    showEvents(json) {
        let addComponent = this;
        this.showEventsService.showEvents(json, 'search-events');
        this.showEventsService.changePage(json.page.number, json.page.totalPages, this.getData.bind(this));
    }

    dateWork() {
        webshims.setOptions('waitReady', false);
        webshims.setOptions('forms-ext', { types: 'date' });
        webshims.polyfill('forms forms-ext');

        document.getElementById('datePicker').valueAsDate = new Date();
        let inWeek = new Date();
        let days = 7;
        inWeek.setDate(new Date().getDate() + days);
        document.getElementById('datePicker2').valueAsDate = inWeek;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddOptionsComponent;
;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_show_events_service__ = __webpack_require__(2);




class JustAnnouncedComponent {
    constructor() {
        this.selector = 'events-ja';
        this.template = `
            <events-ja class="events__just-announced">
                <h2 class="events__title">Just Announced</h2>
                <event></event>
                <event></event>
                <event></event>
                <event></event>
            </events-ja>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.dataService = new __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */]();
        this.showEventsService = new __WEBPACK_IMPORTED_MODULE_2__services_show_events_service__["a" /* ShowEventsService */]();
        this.getData();
    }

    getData() {
        let today = new Date();
        let inWeek = new Date();
        inWeek.setDate(today.getDate() + 10);
        today = today.toISOString().substr(0, 19) + 'Z';
        inWeek = inWeek.toISOString().substr(0, 19) + 'Z';

        const source = "events.json?";
        const params = new FormData();
        params.append('size', '4');
        params.append('startDateTime', today);
        params.append('endDateTime', inWeek);

        this.dataService.httpGet(params, source).then(response => this.showEventsService.showEvents(response, this.selector), error => console.log(`Rejected: ${error}`));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = JustAnnouncedComponent;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_show_events_service__ = __webpack_require__(2);




class HappeningSoonComponent {

    constructor() {
        this.selector = 'events-hs';
        this.template = `
            <events-hs class="events__happening-soon">
                <h2 class="events__title">Happening Soon</h2>
                <event class="hs-event"></event>
                <event class="hs-event"></event>
                <event class="hs-event"></event>
                <event class="hs-event"></event>
                <event class="hs-event"></event>
                <event class="hs-event"></event>
            </events-hs>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.dataService = new __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */]();
        this.showEventsService = new __WEBPACK_IMPORTED_MODULE_2__services_show_events_service__["a" /* ShowEventsService */]();
        this.getData();
    }

    getData() {
        let today = new Date();
        let inWeek = new Date();
        inWeek.setDate(today.getDate() + 3);
        today = today.toISOString().substr(0, 19) + 'Z';
        inWeek = inWeek.toISOString().substr(0, 19) + 'Z';

        const source = "events.json?";
        const params = new FormData();
        params.append('size', '6');
        params.append('startDateTime', today);
        params.append('endDateTime', inWeek);

        this.dataService.httpGet(params, source).then(response => this.showEventsService.showEvents(response, this.selector), error => console.log(`Rejected: ${error}`));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HappeningSoonComponent;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_show_events_service__ = __webpack_require__(2);




class CategoriesComponent {

    constructor() {
        this.selector = 'categories';
        this.template = `
                <categories class="header__navigation">
                    <a href="#" class="navigation__item">Music</a>
                    <a href="#" class="navigation__item">Sport</a>
                    <a href="#" class="navigation__item">Arts & Theater</a>
                    <a href="#" class="navigation__item">Family</a>
                </categories>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.dataService = new __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */]();
        this.showEventsService = new __WEBPACK_IMPORTED_MODULE_2__services_show_events_service__["a" /* ShowEventsService */]();
        this.getCategoryEvents();
    }

    getCategoryEvents() {
        Array.from(document.getElementsByClassName('navigation__item')).forEach(button => {
            button.onclick = () => {
                Array.from(document.getElementsByClassName('navigation__item')).forEach(button => {
                    button.style.backgroundColor = 'transparent';
                    button.style.color = 'white';
                });
                button.style.backgroundColor = '#fffbf9';
                button.style.color = '#58125b';
                this.categorysearch = button.text;
                this.getData(0);
            };
        });
    }

    getData(page) {
        const source = "events.json?";
        const params = new FormData();
        params.append('size', '10');
        params.append('classificationName', this.categorysearch);
        params.append('page', page);

        this.dataService.httpGet(params, source).then(response => this.showEvents(response), error => console.log(`Rejected: ${error}`));
    }

    showEvents(json) {
        let categoriesComponent = this;
        this.showEventsService.showEvents(json, 'search-events');
        document.getElementsByClassName('events__title')[0].innerHTML = this.categorysearch;
        this.showEventsService.changePage(json.page.number, json.page.totalPages, this.getData.bind(this));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoriesComponent;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);


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
                        <div class="event__title">
                                <h4></h4> 
                        </div>
                        <div class="event__venues">
                            <span></span>
                        </div>
                        <div class="event__descrip">
                            <p></p>
                        </div>
                        <span class="info">Read more...</span>
                        <div class="event__classifications">
                            <p></p>
                        </div>
                        <div class="event__data">
                            <span class="date"></span><span> at </span><span class="time"></span>
                        </div>
                    </div>
            </event>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.openDescription();
        this.addClass();
    }

    addClass() {
        if (document.getElementsByClassName('events__happening-soon')[0] !== undefined) {
            const element = document.getElementsByClassName('events__happening-soon')[0];
            Array.from(element.getElementsByClassName('event')).forEach(event => {
                event.classList.add('hs-event');
            });
        }
    }

    openDescription() {
        Array.from(document.getElementsByClassName('event')).forEach((event, i, arr) => {
            event.getElementsByClassName('info')[0].onclick = () => {
                event.getElementsByClassName('info')[0].style.display = 'none';
                event.getElementsByClassName('event__foto')[0].style.width = '100%';
                event.getElementsByClassName('event__descrip')[0].style.display = 'block';
                event.getElementsByClassName('event__classifications')[0].style.display = 'block';
                for (let j = 0; j < arr.length; j++) {
                    if (i !== j) {
                        arr[j].style.display = 'none';
                        Array.from(document.getElementsByClassName('page_button')).forEach(button => {
                            button.style.display = 'none';
                        });
                        Array.from(document.getElementsByClassName('events__title')).forEach(title => {
                            title.style.display = 'none';
                        });
                    }
                }
            };
            event.getElementsByClassName('event__foto')[0].onclick = event.getElementsByClassName('info')[0].onclick;
            event.getElementsByClassName('event__title')[0].onclick = event.getElementsByClassName('info')[0].onclick;
        });
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventComponent;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);


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

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
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
                if (event.target === elements[i]) return;
            };
            document.getElementsByClassName('burger-menu')[0].classList.remove('burger-menu_opened');
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BurgerMenuComponent;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_show_events_service__ = __webpack_require__(2);




class SearchBarComponent {

    constructor(page) {
        this.selector = 'search-bar';
        this.template = `
            <search-bar onsubmit="return false" class="header__search-bar" method="get">
                <input class="search-bar__input-text" name="keyword" type="search" autocomplete="on" placeholder="Search...">
                <button class="search-bar__button submit" type="submit">Search</button>
                <button class="search-bar__button setting" type="button">Search settings</button>
            </search-bar>`;

        this.initService = new __WEBPACK_IMPORTED_MODULE_0__services_init_component_service__["a" /* InitComponentService */]();
        this.initService.initComponent(this.template, this.selector);
        this.dataService = new __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */]();
        this.showEventsService = new __WEBPACK_IMPORTED_MODULE_2__services_show_events_service__["a" /* ShowEventsService */]();
        this.searchBarCloseOpen();
        this.searchEvents();
    }

    searchBarCloseOpen() {
        document.getElementsByClassName('setting')[0].onclick = () => {
            document.getElementsByClassName('content__aside')[0].classList.toggle('content__aside_opened');
            document.getElementsByClassName('burger-menu')[0].classList.remove('burger-menu_opened');
        };

        document.addEventListener("click", function (event) {
            let elements = document.getElementsByClassName('content__aside')[0].querySelectorAll('h3,input,select,span,button,div');
            for (let i = 0; i < elements.length; i++) {
                if (event.target === elements[i]) return;
            };
            if (event.target === document.getElementsByClassName('setting')[0]) return;
            document.getElementsByClassName('content__aside')[0].classList.remove('content__aside_opened');
        });
    }

    searchEvents() {
        const searchButton = document.getElementsByClassName('search-bar__button submit')[0];
        const enterButton = document.getElementsByClassName('search-bar__input-text')[0];
        searchButton.onclick = () => {
            const categoryButtons = document.getElementsByClassName('navigation__item');
            Array.from(document.getElementsByClassName('navigation__item')).forEach(button => {
                button.style.backgroundColor = 'transparent';
                button.style.color = 'white';
            });
            this.getData(0);
        };
        enterButton.onkeydown = event => {
            if (event.keyCode === 13) {
                searchButton.onclick();
            }
        };
    }

    getData(page) {
        const source = "events.json?";
        const params = new FormData();
        params.append('keyword', document.getElementsByClassName("search-bar__input-text")[0].value);
        params.append('size', '10');
        params.append('page', page);

        this.dataService.httpGet(params, source).then(response => this.showEvents(response), error => console.log(`Rejected: ${error}`));
    }

    showEvents(json) {
        this.showEventsService.showEvents(json, 'search-events');
        this.showEventsService.changePage(json.page.number, json.page.totalPages, this.getData.bind(this));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchBarComponent;


/***/ })
/******/ ]);