import {InitComponentService} from "../../../services/init-component.service";

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
                        <div class="event__title">
                                <h4></h4> 
                        </div>
                        <div class="event__venues">
                            <span></span>
                        </div>
                        <div class="event__descrip">
                            <p></p>
                        </div>
                        <span class="info">Read more...</span>
                        <div class="event__data">
                            <span class="date"></span><span> at </span><span class="time"></span>
                        </div>
                    </div>
            </event>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.openDescription();
        this.addClass();
    };

    addClass() {
        if (document.getElementsByClassName('events__happening-soon')[0] !== undefined) {
            const element = document.getElementsByClassName('events__happening-soon')[0];
            Array.from(element.getElementsByClassName('event')).forEach( (event) => {
                event.classList.add('hs-event');
            });
        }
    };

    openDescription() {
        Array.from(document.getElementsByClassName('event')).forEach( (event) => {
            event.getElementsByClassName('info')[0].onclick = () => {
                event.getElementsByClassName('info')[0].style.display = 'none';
                event.getElementsByClassName('event__foto')[0].style.width = '100%';
                event.getElementsByClassName('event__descrip')[0].style.display = 'block';
            };
            event.getElementsByClassName('event__foto')[0].onclick = event.getElementsByClassName('info')[0].onclick;
            event.getElementsByClassName('event__title')[0].onclick = event.getElementsByClassName('info')[0].onclick;
        });
    }

}