import {InitComponentService} from "../services/init-component.service";

export class EventGroupComponent {
    constructor() {
        this.selector = 'event-group';
        this.template = `
            <event-group class="content__events">
                <events-ja class="events__just-announced"></events-ja>
                <events-hs class="events__happening-soon"></events-hs>
            </event-group>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
    };
}