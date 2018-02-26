import {InitComponentService} from "../../services/init-component.service";
import {GetDataService} from "../../services/get-data.service";
import {ShowEventsService} from "../../services/show-events.service";

export class CategoriesComponent {

    constructor() {
        this.selector = 'categories';
        this.template = `
                <categories class="header__navigation">
                    <a href="#" class="navigation__item">Music</a>
                    <a href="#" class="navigation__item">Sport</a>
                    <a href="#" class="navigation__item">Arts & Theater</a>
                    <a href="#" class="navigation__item">Family</a>
                </categories>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.dataService = new GetDataService();
        this.showEventsService = new ShowEventsService();
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
        const source = "events.json?";
        const params =  new FormData();
        params.append('size','10');
        params.append('classificationName',this.categorysearch);
        params.append('page',page);

        this.dataService.httpGet(params, source)
            .then(
                response => this.showEvents(response),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showEvents(json) {
        let categoriesComponent = this;
        this.showEventsService.showEvents(json,'search-events');
        document.getElementsByClassName('events__title')[0].innerHTML = this.categorysearch;
        this.showEventsService.changePage(json.page.number, json.page.totalPages, this.getData.bind(this));
    };

}