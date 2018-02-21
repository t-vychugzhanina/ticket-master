import {InitComponentService} from "../../init-component.service";
import {GetDataService} from "../../get-data.service";
import {ShowEventsService} from "../../show-events.service";

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
        this.showEventsService = new ShowEventsService();
        this.SearchBarCloseOpen();
        this.SearchEvents();
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
            Array.from(document.getElementsByClassName('navigation__item')).forEach( (button) => {
                button.style.backgroundColor = 'transparent';
                button.style.color = 'white';
            });
            this.keyword = document.getElementsByName('search')[0].value;
            this.getData(0);
        };
        enterButton.onkeydown= (event) => {
            if(event.keyCode==13) {
                searchButton.onclick();
            }
        };

    };

    getData(page) {
        this.dataService.httpGet("&size=10&keyword="+this.keyword+"&page="+page)
            .then(
                response => this.showEvents(response),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showEvents(json) {
        this.showEventsService.showEvents(json,'search-events');
        this.showEventsService.changePage(json.page.number, json.page.totalPages,this);
    };

}