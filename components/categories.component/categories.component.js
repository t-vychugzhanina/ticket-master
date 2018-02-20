import {InitComponentService} from "../../init-component.service";
import {GetDataService} from "../../get-data.service";
import {SearchEventsComponent} from "../search-events.component/search-events.component";

export class CategoriesComponent {

    constructor() {
        this.selector = 'events-categories';
        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.dataService = new GetDataService();
        this.getData();
    };

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
                this.getCategoryEvents(categoryButtons[i].text);
            }
        };
    };

    getCategoryEvents(categorysearch) {
        console.log();
        this.dataService.httpGet("https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&classificationName="+categorysearch)
            .then(
                response => this.showEvents(JSON.parse(response),categorysearch),
                error => console.log(`Rejected: ${error}`)
            );
    };

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
            categoryEvents[i].getElementsByClassName('month')[0].innerText = mS[month-1];
            if (events[i].info!=undefined) {
                categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText=events[i].info;
                categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].innerText=events[i].info;
            } else {
                categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText='';
                categoryEvents[i].getElementsByClassName('info')[0].style.display = "none";
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