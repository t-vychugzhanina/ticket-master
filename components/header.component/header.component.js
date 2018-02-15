import {AppModule} from "../../app.module";
import {SearchEventsComponent} from "../search-events.component/search-events.component";

export class HeaderComponent {

        constructor() {
            this.selector = 'header';
            this.template = `<header class="header">
            <div class="content">
                <div class="header__top">
                    <a class="header__logo" href=#> Logo-Ticketmaster </a>
                    <form onsubmit="return false" class="header__search-bar" method="get">
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
                    <a href="#Music" class="navigation__item">Music</a>
                    <a href="#Sport" class="navigation__item">Sport</a>
                    <a href="#Art" class="navigation__item">Arts & Theater</a>
                    <a href="#Family" class="navigation__item">Family</a>
                </nav>
            </div>
            </header>`;
            this.init();
        };

        init(){
            var all = document.getElementsByTagName(this.selector);
            for (var r = 0; r < all.length; r++) {
                all[r].outerHTML = this.template;
            };
            this.makeChildren();
            this.burgerMenuFunctions();
            this.getData();
        };

        makeChildren(){
            let tempTemplate = this.template;
            let tempSelector = this.selector;
            let module = new AppModule();
            let tags = module.FILES;
            tags.forEach(function (value, key, mapObj) {
                if ((tempTemplate.indexOf('<'+key)!=-1)&(key!=tempSelector)) {
                    value();
                }
            });
        };

        burgerMenuFunctions() {
            $('.burger-icon').click(function(){
                $('.burger-menu').toggleClass('burger-menu_opened');
                $('.content__aside').removeClass('content__aside_opened');
            });

            $('.setting').click(function(){
                $('.content__aside').toggleClass('content__aside_opened');
                $('.burger-menu').removeClass('burger-menu_opened');
            });
            $(document).click(function(event) {
                if ($(event.target).closest(".burger-menu").length) return;
                if ($(event.target).closest(".burger-icon").length) return;
                if ($(event.target).closest(".content__aside").length) return;
                if ($(event.target).closest(".setting").length) return;
                $('.burger-menu').removeClass('burger-menu_opened');
                $('.content__aside').removeClass('content__aside_opened');
                event.stopPropagation();
            });
        };

    getData() {
        let getData = this;
        this.createQueryResults = function(){
            let content = document.getElementsByClassName('content__events')[0];
            content.innerHTML = '';
            let QueryResults = document.createElement('search-events');
            content.appendChild(QueryResults);
            new SearchEventsComponent();
        };

        this.getSearchData = function(keyword){
            $.ajax({
                type: "GET",
                url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword="+keyword,
                async: true,
                dataType: "json",
                success: function (json) {
                    showEvents(json);
                },
                error: function (xhr, status, err) {
                    console.log(err);
                }
            });

            function showEvents(json) {
                let categoryBlock = document.getElementsByClassName('search-events')[0];
                let categoryEvents = categoryBlock.getElementsByClassName('event');
                if (json.page.totalPages==0) {
                    let title = categoryBlock.getElementsByClassName('events__title')[0];
                    title.innerHTML = 'Запрос некорректен! Введите его заново!';
                }
                else {
                    let events = json._embedded.events;
                    for (let i = 0; i < categoryEvents.length; i++) {
                        categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
                        categoryEvents[i].getElementsByClassName('event__data')[0].innerText = events[i].dates.start.localDate;
                        categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                        categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
                    };
                };
            };
        };

        let searchButton = document.getElementsByClassName('search-bar__button submit')[0];
        searchButton.onclick = function () {
            let keyword = document.getElementsByName('search')[0].value;
            getData.createQueryResults();
            getData.getSearchData(keyword);
        };


    };

}