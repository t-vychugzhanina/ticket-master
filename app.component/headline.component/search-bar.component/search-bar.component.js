import {InitComponentService} from "../../services/init-component.service";
import {GetDataService} from "../../services/get-data.service";
import {ShowEventsService} from "../../services/show-events.service";

export class SearchBarComponent {

    constructor(page) {
        this.selector = 'search-bar';
        this.template = `
            <search-bar onsubmit="return false" class="header__search-bar" method="get">
                <input class="search-bar__input-text" name="keyword" type="search" autocomplete="on" placeholder="Search...">
                <button class="search-bar__button submit" type="submit">Search</button>
                <button class="search-bar__button setting" type="button">Search settings</button>
            </search-bar>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.dataService = new GetDataService();
        this.showEventsService = new ShowEventsService();
        this.searchBarCloseOpen();
        this.searchEvents();
    };

    searchBarCloseOpen() {
        document.getElementsByClassName('setting')[0].onclick = () => {
            document.getElementsByClassName('content__aside')[0].classList.toggle('content__aside_opened');
            document.getElementsByClassName('burger-menu')[0].classList.remove('burger-menu_opened');
        };

        document.addEventListener("click", function(event) {
            let elements = document.getElementsByClassName('content__aside')[0].querySelectorAll('h3,input,select,span,button,div');
            for (let i = 0; i < elements.length; i++) {
                if (event.target === elements[i]) return;
            };
            if (event.target === document.getElementsByClassName('setting')[0]) return;
            document.getElementsByClassName('content__aside')[0].classList.remove('content__aside_opened');
        });
    };

    searchEvents() {
        const searchButton = document.getElementsByClassName('search-bar__button submit')[0];
        const enterButton = document.getElementsByClassName('search-bar__input-text')[0];
        searchButton.onclick = () => {
            const categoryButtons = document.getElementsByClassName('navigation__item');
            Array.from(document.getElementsByClassName('navigation__item')).forEach( (button) => {
                button.style.backgroundColor = 'transparent';
                button.style.color = 'white';
            });
            this.getData(0);
        };
        enterButton.onkeydown= (event) => {
            if(event.keyCode === 13) {
                searchButton.onclick();
            }
        };

    };

    getData(page) {
        const source = "events.json?";
        const params =  new FormData();
        params.append('keyword',document.getElementsByClassName("search-bar__input-text")[0].value);
        params.append('size','10');
        params.append('page',page);

        this.dataService.httpGet(params,source)
            .then(
                response => this.showEvents(response),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showEvents(json) {
        this.showEventsService.showEvents(json,'search-events');
        this.showEventsService.changePage(json.page.number, json.page.totalPages, this.getData.bind(this));
    };

}