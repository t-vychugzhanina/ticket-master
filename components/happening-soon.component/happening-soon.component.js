import {InitComponentService} from "../../init-component.service";
import {GetDataService} from "../../get-data.service";
import {ShowEventsService} from "../../show-events.service";

export class HappeningSoonComponent {

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

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.dataService = new GetDataService();
        this.showEventsService = new ShowEventsService();
        this.getData();
    };

    getData(){
        let today = new Date();
        let inWeek = new Date();
        inWeek.setDate(today.getDate() + 3);
        today = today.toISOString().substr(0, 19)+'Z';
        inWeek = inWeek.toISOString().substr(0, 19)+'Z';

        this.dataService.httpGet("&startDateTime="+today+"&endDateTime="+inWeek+"&size=6&sort=relevance,desc")
        //this.dataService.httpGet("https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&startDateTime="+today+"&endDateTime="+inWeek+"&size=6&sort=relevance,desc")
            .then(
                response => this.showEventsService.showEvents(response,"events__happening-soon"),
                error => console.log(`Rejected: ${error}`)
            );
    };
}