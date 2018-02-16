import {SearchEventsComponent} from "../search-events.component/search-events.component";
import {InitService} from "../../init.service";

export class SearchBarComponent {

    constructor(page) {
        this.selector = 'search-bar';
        this.template = `
            <search-bar onsubmit="return false" class="header__search-bar" method="get">
                <input class="search-bar__input-text" name="search" type="search" autocomplete="on" placeholder="Search...">
                <button class="search-bar__button submit" type="submit">Search</button>
                <button class="search-bar__button setting" type="button">Search settings</button>
            </search-bar>`;

        new InitService(this.template,this.selector);
        this.SearchBarCloseOpen();
        //this.SearchEvents(page);
    };

    SearchBarCloseOpen() {
        $('.setting').click(function(){
            $('.content__aside').toggleClass('content__aside_opened');
            $('.burger-menu').removeClass('burger-menu_opened');
        });
        $(document).click(function(event) {
            if ($(event.target).closest(".content__aside").length) return;
            if ($(event.target).closest(".setting").length) return;
            $('.content__aside').removeClass('content__aside_opened');
            event.stopPropagation();
        });
    };

    SearchEvents() {
        const searchButton = document.getElementsByClassName('search-bar__button submit')[0];
        searchButton.onclick = () => {
            this.createQueryResults();
            this.getData(document.getElementsByName('search')[0].value);
        };
    };

    getData(keyword) {
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword="+keyword,
            async: true,
            dataType: "json",
            success: (json) => { this.showEvents(json);},
            error: (xhr, status, err) => { console.log(err);}
        });
    };

    showEvents(json) {
        if (json.page.totalPages==0) {
            document.getElementsByClassName('events__title')[0].innerHTML = 'Can\'t find query results! Please, try again!';
        }
        else {
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
    };

    createQueryResults(quantity) {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        let QueryResults = document.createElement('search-events');
        document.getElementsByClassName('content__events')[0].appendChild(QueryResults);
        new SearchEventsComponent(quantity);
    };
}