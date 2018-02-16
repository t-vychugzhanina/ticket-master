import {InitService} from "../../../init.service";

export class EventComponent {
    constructor() {
        this.selector = 'event';
        this.template = `
            <event class="event">
                <a href="#" class="event-link">
                    <div class="event__foto">
                        <img class="foto__image" alt="" src="">
                    </div>
                    <div class="event__preview">
                        <div class="event__title">
                            <h4></h4>
                        </div>
                        <div class="event__descrip">
                            <p></p>
                        </div>
                        <div class="event__data">
                            <span></span>
                        </div>
                    </div>
                </a>
            </event>`;

        new InitService(this.template,this.selector);
    };
}