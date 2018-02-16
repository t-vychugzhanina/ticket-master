import {AppService} from "../../app.service";
import {InitService} from "../../init.service";

export class EventGroupComponent {
    constructor() {
        this.selector = 'event-group';
        this.template = `
            <event-group class="content__events">
                <events-ja class="events__just-announced"></events-ja>
                <events-hs class="events__happening-soon"></events-hs>
                <events-categories class="categories"></events-categories>
            </event-group>`;

        new InitService(this.template,this.selector);
        new AppService(this.template,this.selector);
    };
}