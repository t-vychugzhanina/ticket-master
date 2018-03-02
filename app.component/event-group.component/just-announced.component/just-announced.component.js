import {InitComponentService} from "../../services/init-component.service";
import {GetDataService} from "../../services/get-data.service";
import {ShowEventsService} from "../../services/show-events.service";

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
        today = today.toISOString().substr(0, 19) + 'Z';
        inWeek = inWeek.toISOString().substr(0, 19) + 'Z';

        const source = "events.json?";
        const params =  new FormData();
        params.append('size','4');
        params.append('onsaleStartDateTime',today);
        params.append('onsaleEndDateTime',inWeek);

        this.dataService.httpGet(params,source)
            .then(
                response => this.showEventsService.showEvents(response, this.selector),
                error => console.log(`Rejected: ${error}`)
            );
    };

}