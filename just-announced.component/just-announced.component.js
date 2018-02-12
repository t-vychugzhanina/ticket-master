import {AppModule} from "../js/app.module";

export class JustAnnouncedComponent {

    constructor() {
        this.selector = 'events-ja';
        this.template = `<events-ja class="events__just-announced">
                <h2 class="events__title">Just Announced</h2>
                <article class="event">
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
                <article class="event">
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
                <article class="event">
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
                <article class="event">
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
            </events-ja>`;
        this.init();
    };


    init() {
        var all = document.getElementsByTagName(this.selector);
        for (var r = 0; r < all.length; r++) {
            all[r].outerHTML = this.template;
        };
        this.makeChildren();
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
}