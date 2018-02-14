import {AppModule} from "../../app.module";

export class HappeningSoonComponent {

    constructor() {
        this.selector = 'events-hs';
        this.template = `<events-hs class="events__happening-soon">
                <h2 class="events__title">Happening Soon</h2>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article class="event hs-event">
                    <a href="#" class="event-link">
                        <div class="event__foto">
                            <img class="foto__image" alt="Elton John" src="https://s1.ticketm.net/tm/en-us/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_614581_CUSTOM.jpg">
                        </div>
                        <div class="event__preview">
                            <div class="event__title">
                                <h4>New music concert</h4>
                            </div>
                            <div class="event__descrip">
                                <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                            </div>
                            <div class="event__data">
                                <span>19 февраля 2017, 12:00.</span>
                            </div>
                        </div>
                    </a>
                </article>
            </events-hs>`;
        this.init();
    };

    init() {
        var all = document.getElementsByTagName(this.selector);
        for (var r = 0; r < all.length; r++) {
            all[r].outerHTML = this.template;
        };
        this.makeChildren();
        this.getData();
    };

    makeChildren(){
        let tempTemplate = this.template;
        let tempSelector = this.selector;
        let module = new AppModule();
        let tags = module.FILES;
        tags.forEach(function (value, key, mapObj) {
            if ((tempTemplate.indexOf('<'+key)!=-1)&(key!=tempSelector)) {
                (value)();
            }
        });
    };

    getData(){

        Date.prototype.addDays = (function(days) {
            let dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat;
        });

        let today = new Date();
        today.setUTCMilliseconds(0);
        let inWeek = today.addDays(1);
        today = today.toISOString().substr(0, 19)+'Z';
        inWeek = inWeek.toISOString().substr(0, 19)+'Z';

        $.ajax({
            type:"GET",
            url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&startDateTime="+today+"&endDateTime="+inWeek+"&size=4",
            async:true,
            dataType: "json",
            success: function(json) {
                showEvents(json);
            },
            error: function(xhr, status, err) {
                console.log(err);
            }
        });

        function showEvents(json) {
            var categoryBlock = document.getElementsByClassName('events__happening-soon')[0];
            var categoryEvents = categoryBlock.getElementsByClassName('hs-event');
            var events = json._embedded.events;
            for (var i = 0; i < categoryEvents.length; i++) {
                categoryEvents[i].getElementsByClassName('event__title')[0].innerText=events[i].name;
                categoryEvents[i].getElementsByClassName('event__data')[0].innerText=events[i].dates.start.localDate;
                categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText=events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                categoryEvents[i].getElementsByClassName('foto__image')[0].src=events[i].images[0].url;
            };
        }

    };

}