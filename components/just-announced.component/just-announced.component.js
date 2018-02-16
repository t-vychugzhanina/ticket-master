import {AppService} from "../../app.service";
import {InitService} from "../../init.service";

export class JustAnnouncedComponent {
    constructor() {
        this.selector = 'events-ja';
        this.template = `<events-ja class="events__just-announced">
                <h2 class="events__title">Just Announced</h2>
                <article class="event">
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
                </article>
                <article class="event">
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
                </article>
                <article class="event">
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
                </article>
                <article class="event">
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
                </article>
            </events-ja>`;
        new InitService(this.template,this.selector);
        new AppService(this.template,this.selector);
        //this.getData();
    };

    getData(){
        Date.prototype.addDays = (function(days) {
            let dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat;
        });

        let today = new Date();
        today.setUTCMilliseconds(0);
        let inWeek = today.addDays(3);
        this.today = today.toISOString().substr(0, 19)+'Z';
        this.inWeek = inWeek.toISOString().substr(0, 19)+'Z';
        this.getEvents(0);
    };

    getEvents(page) {
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&size=4&onsaleStartDateTime=" + this.today + "&onsaleEndDateTime=" + this.inWeek + "&page=" + page,
            async: true,
            dataType: "json",
            success: (json) => {
                this.showEvents(json);
            },
            error: (xhr, status, err) => {
                console.log(err);
            }
        });
    };

    showEvents(json) {
        let categoryBlock = document.getElementsByClassName('events__just-announced')[0];
        let categoryEvents = categoryBlock.getElementsByClassName('event');
        let events = json._embedded.events;
        for (let i = 0; i < categoryEvents.length; i++) {
            categoryEvents[i].getElementsByClassName('event__title')[0].innerText=events[i].name;
            categoryEvents[i].getElementsByClassName('event__data')[0].innerText=events[i].dates.start.localDate;
            categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText=events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
            categoryEvents[i].getElementsByClassName('foto__image')[0].src=events[i].images[0].url;
        };
        this.changeEvents(json.page.number, json.page.totalPages);
    };

    changeEvents(page, all) {
        let changePage = (page,all) => {
            if (page < 0) { page = 0; };
            if (page > all-1) {page = 0;};
            page=page+1;
            this.getEvents(page);
        };
        //setTimeout(changePage, 10000, page,all);
    };

}