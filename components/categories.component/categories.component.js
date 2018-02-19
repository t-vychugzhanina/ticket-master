import {InitComponentService} from "../../init-component.service";
import {GetDataService} from "../../get-data.service";

export class CategoriesComponent {

    constructor() {
        this.selector = 'events-categories';
        this.template = `<events-categories class="categories">
                 <section class="event category-event" id="Music">
                    <h3 class="category"> Music </h3>
                    <article class="event category__event">
                        <a href="#" class="event-link">
                            <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview category__preview">
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
                                    <span></span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="event category__event">
                        <a href="#" class="event-link">
                            <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview category__preview">
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
                                    <span></span>
                                </div>
                            </div>
                        </a>
                    </article>
                 </section>
                 <section class="event category-event" id="Sport">
                    <h3 class="category"> Sport </h3>
                    <article class="event category__event">
                        <a href="#" class="event-link">
                            <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview category__preview">
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
                                    <span></span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="event category__event">
                        <a href="#" class="event-link">
                            <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview category__preview">
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
                                    <span></span>
                                </div>
                            </div>
                        </a>
                    </article>
                 </section>
                 <section class="event category-event" id="Art">
                    <h3 class="category"> Arts & Theater </h3>
                    <article class="event category__event">
                        <a href="#" class="event-link">
                            <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview category__preview">
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
                                    <span></span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="event category__event">
                        <a href="#" class="event-link">
                            <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview category__preview">
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
                                    <span></span>
                                </div>
                            </div>
                        </a>
                    </article>
                 </section>
                 <section class="event category-event" id="Family">
                    <h3 class="category"> Family </h3>
                    <article class="event category__event">
                        <a href="#" class="event-link">
                            <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview category__preview">
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
                                    <span></span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="event category__event">
                        <a href="#" class="event-link">
                            <div class="event__foto">
                                <img class="foto__image" alt="" src="">
                            </div>
                            <div class="event__preview category__preview">
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
                                    <span></span>
                                </div>
                            </div>
                        </a>
                    </article>
                </section>
            </events-categories>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.initService.renderChildren(this.template,this.selector);
        this.dataService = new GetDataService();
        this.getData();
    };

    getData() {
        let categoryList = ['Music', 'Sport', 'Art', 'Family'];
        categoryList.forEach( (category, num, categorylist) => {
            this.getCategoryEvents(category);
        });
    };

    getCategoryEvents(categorysearch) {
        this.dataService.httpGet("https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&size=4&classificationName="+categorysearch)
            .then(
                response => this.showEvents(JSON.parse(response),categorysearch),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showEvents(json, categorysearch) {
        let categoryBlock = document.getElementById(categorysearch);
        let categoryEvents = categoryBlock.getElementsByClassName('category__event');
        let events = json._embedded.events;
        for (let i = 0; i < categoryEvents.length; i++) {
            categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
            categoryEvents[i].getElementsByClassName('event__data')[0].innerText = events[i].dates.start.localDate;
            categoryEvents[i].getElementsByClassName('event__venues')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
            categoryEvents[i].getElementsByClassName('foto__image')[0].src=events[i].images[0].url;
        };
    };
}