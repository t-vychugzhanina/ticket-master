import {InitComponentService} from "../../init-component.service";
import {GetDataService} from "../../get-data.service";
import {ShowEventsService} from "../../show-events.service";

export class JustAnnouncedComponent {
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

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.dataService = new GetDataService();
        this.showEventsService = new ShowEventsService();
        this.getData();
    };

    getData(){
        let today = new Date();
        let inWeek = new Date();
        inWeek.setDate(today.getDate() + 10);
        this.today = today.toISOString().substr(0, 19)+'Z';
        this.inWeek = inWeek.toISOString().substr(0, 19)+'Z';
        this.getEvents(0);
    };

    getEvents(page) {
        this.dataService.httpGet("&size=4&sort=relevance,desc&onsaleStartDateTime=" + this.today + "&onsaleEndDateTime=" + this.inWeek + "&page=" + page)
            .then(
                response => this.showEventsService.showEvents(response,"events__just-announced"),
                error => console.log(`Rejected: ${error}`)
            );
    };

}