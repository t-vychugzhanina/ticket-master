import {InitComponentService} from "../../services/init-component.service";
import {GetDataService} from "../../services/get-data.service";
import {ShowEventsService} from "../../services/show-events.service";

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
        today = today.toISOString().substr(0, 19) + 'Z';
        inWeek = inWeek.toISOString().substr(0, 19) + 'Z';

        const source = "events.json?";
        const params =  new FormData();
        params.append('size','6');
        params.append('startDateTime',today);
        params.append('endDateTime',inWeek);

        this.dataService.httpGet(params,source)
            .then(
                response => this.showEventsService.showEvents(response, this.selector),
                error => console.log(`Rejected: ${error}`)
            );
    };
}