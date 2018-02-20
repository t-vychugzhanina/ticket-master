import {InitComponentService} from "../../../init-component.service";

export class EventComponent {
    constructor() {
        this.selector = 'event';
        this.template = `
            <event class="event">
                    <div class="event__foto">
                        <div class="foto__container">
                            <span class="foto__data"><span class="day"></span><br><span class="month"></span></span>
                            <img class="foto__image" alt="" src="">
                        </div>
                    </div>
                    <div class="event__preview">
                        <a href="#">
                            <div class="event__title">
                                <h4></h4> 
                            </div>
                        </a>
                        <div class="event__venues">
                            <span></span>
                        </div>
                        <div class="event__descrip">
                            <p></p>
                        </div>
                        <div class="event__data">
                            <span class="date"></span>
                            <span class="info">info</span>
                        </div>
                    </div>
                    <div class="event__descrip-mini">
                        <p></p>
                    </div>
            </event>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
    };


}