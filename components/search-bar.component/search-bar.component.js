import {SearchEventsComponent} from "../search-events.component/search-events.component";
import {InitComponentService} from "../../init-component.service";
import {GetDataService} from "../../get-data.service";

export class SearchBarComponent {

    constructor(page) {
        this.selector = 'search-bar';
        this.template = `
            <search-bar onsubmit="return false" class="header__search-bar" method="get">
                <input class="search-bar__input-text" name="search" type="search" autocomplete="on" placeholder="Search...">
                <button class="search-bar__button submit" type="submit">Search</button>
                <button class="search-bar__button setting" type="button">Search settings</button>
            </search-bar>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.dataService = new GetDataService();
        this.SearchBarCloseOpen();
        this.SearchEvents(page);
    };

    SearchBarCloseOpen() {
        document.getElementsByClassName('setting')[0].onclick = () => {
            document.getElementsByClassName('content__aside')[0].classList.toggle('content__aside_opened');
            document.getElementsByClassName('burger-menu')[0].classList.remove('burger-menu_opened');
        };

        document.addEventListener("click", function(event) {
            let elements = document.getElementsByClassName('content__aside')[0].querySelectorAll('h3,input,select,span,button,div');
            for (let i = 0; i < elements.length; i++) {
                if (event.target==elements[i]) return;
            };
            if (event.target== document.getElementsByClassName('setting')[0]) return;
            document.getElementsByClassName('content__aside')[0].classList.remove('content__aside_opened');
        });
    };

    SearchEvents() {
        const searchButton = document.getElementsByClassName('search-bar__button submit')[0];
        const enterButton = document.getElementsByClassName('search-bar__input-text')[0];
        searchButton.onclick = () => {
            const categoryButtons = document.getElementsByClassName('navigation__item');
            for (let i = 0; i < categoryButtons.length; i++) {
                categoryButtons[i].style.backgroundColor = 'transparent';
                categoryButtons[i].style.color = 'white';
            };
            this.getData(document.getElementsByName('search')[0].value);
            this.createQueryResults();
        };

        enterButton.onkeydown= (event) => {
            if(event.keyCode==13) {
                searchButton.onclick();
            }
        };
    };



    getData(keyword) {
        this.dataService.httpGet("https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword="+keyword)
            .then(
                response => this.showEvents(JSON.parse(response)),
                error => console.log(`Rejected: ${error}`)
            );
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
                categoryEvents[i].getElementsByClassName('date')[0].innerText = events[i].dates.start.localDate;
                categoryEvents[i].getElementsByClassName('event__venues')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
                let month = events[i].dates.start.localDate.substr(5, 2);
                let date = events[i].dates.start.localDate.substr(8, 2);
                let mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                categoryEvents[i].getElementsByClassName('day')[0].innerText = date;
                categoryEvents[i].getElementsByClassName('month')[0].innerText = mS[month-1];
                if (events[i].info!=undefined) {
                    categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText=events[i].info;
                    categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].innerText=events[i].info;
                } else {
                    categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText='';
                    categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].style.display = "none";
                };
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