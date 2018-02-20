import {InitComponentService} from "../../init-component.service";
import {GetDataService} from "../../get-data.service";

export class HappeningSoonComponent {

    constructor() {
        this.selector = 'events-hs';
        this.template = `
            <events-hs class="events__happening-soon">
                <h2 class="events__title">Happening Soon</h2>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
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
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
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
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
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
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
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
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
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
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
                <article class="event hs-event">
                        <div class="event__foto">
                            <img class="foto__image" alt="" src="">
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
                            <div class="event__data">
                                <span class="date"></span>
                            </div>
                        </div>
                        <div class="event__descrip-mini">
                        <p></p>
                        </div>
                </article>
            </events-hs>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.initService.renderChildren(this.template,this.selector);
        this.dataService = new GetDataService();
        this.getData();
    };

    getData(){
        let today = new Date();
        let inWeek = new Date();
        inWeek.setDate(today.getDate() + 3);
        today = today.toISOString().substr(0, 19)+'Z';
        inWeek = inWeek.toISOString().substr(0, 19)+'Z';

        this.dataService.httpGet("https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&startDateTime="+today+"&endDateTime="+inWeek+"&size=6&sort=relevance,desc")
            .then(
                response => this.showEvents(JSON.parse(response)),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showEvents(json) {
        let categoryBlock = document.getElementsByClassName('events__happening-soon')[0];
        let categoryEvents = categoryBlock.getElementsByClassName('hs-event');
        let events = json._embedded.events;
        for (let i = 0; i < categoryEvents.length; i++) {
            categoryEvents[i].getElementsByClassName('event__title')[0].innerText=events[i].name;
            categoryEvents[i].getElementsByClassName('date')[0].innerText=events[i].dates.start.localDate;
            categoryEvents[i].getElementsByClassName('event__venues')[0].innerText=events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
            categoryEvents[i].getElementsByClassName('foto__image')[0].src=events[i].images[0].url;
            if (events[i].info!=undefined) {
                categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].innerText=events[i].info;
            } else {
                categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].style.display = "none";
            };
        };
    };
}