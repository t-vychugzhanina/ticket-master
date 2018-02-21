import {GetDataService} from "../../get-data.service";
import {ShowEventsService} from "../../show-events.service";

export class CategoriesComponent {

    constructor() {
        this.selector = 'events-categories';
        this.dataService = new GetDataService();
        this.showEventsService = new ShowEventsService;
        this.getCategoryEvents();
    };

    getCategoryEvents() {
        Array.from(document.getElementsByClassName('navigation__item')).forEach( (button) => {
            button.onclick = () => {
                Array.from(document.getElementsByClassName('navigation__item')).forEach( (button) => {
                    button.style.backgroundColor = 'transparent';
                    button.style.color = 'white';
                });
                button.style.backgroundColor = '#fffbf9';
                button.style.color = '#58125b';
                this.categorysearch = button.text;
                this.getData(0);
            }
        });
    };

    getData(page) {
        this.dataService.httpGet("&size=10&classificationName="+this.categorysearch+"&page="+page)
            .then(
                response => this.showEvents(response),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showEvents(json) {
        this.showEventsService.showEvents(json,'search-events');
        document.getElementsByClassName('events__title')[0].innerHTML = this.categorysearch;
        this.showEventsService.changePage(json.page.number, json.page.totalPages,this);
    };

}