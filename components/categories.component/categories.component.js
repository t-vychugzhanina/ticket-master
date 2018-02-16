import {AppService} from "../../app.service";
import {InitService} from "../../init.service";

export class CategoriesComponent {

    constructor() {
        this.selector = 'events-categories';
        this.template = `<events-categories class="categories">
                 <section class="event category-event" id="Music">
                        <h3 class="category"> Music </h3>
                        <article class="event__preview category__preview">
                                <a href="#">
                                <div class="event__title">
                                    <h4 class="event__title_text">New music concert</h4>
                                </div>
                                <div class="event__descrip">
                                    <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                                </div>
                                <div class="event__data">
                                    <span>19 февраля 2017, 12:00.</span>
                                </div>
                                </a>
                            </article>
                        <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                 </section>
                 <section class="event category-event" id="Sport">
                        <h3 class="category"> Sport </h3>
                        <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                        <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                    </section>
                 <section class="event category-event" id="Art">
                    <h3 class="category"> Arts & Theater </h3>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии амбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                     <article class="event__preview category__preview">
                         <a href="#">
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
                         </a>
                     </article>
                </section>
                 <section class="event category-event" id="Family">
                    <h3 class="category"> Family </h3>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                     <article class="event__preview category__preview">
                         <a href="#">
                             <div class="event__title">
                                 <h4>New music concert</h4>
                             </div>
                             <div class="event__descrip">
                                 <p>В преддверии плей-офф вспоминаем самые яркие события регулярного чемпионата-2016/17 — невероятные камбеки, курьёзы и скандалы.</p>
                             </div>
                             <div class="event__data">
                                 <span>19 февраля 2017, 12:00.</span>
                             </div>
                         </a>
                     </article>
                </section>
            </events-categories>`;
        new InitService(this.template,this.selector);
        new AppService(this.template,this.selector);
        //this.getData();
    };

    getData() {
        let categoryList = ['Music', 'Sport', 'Art', 'Family'];
        categoryList.forEach( (category, num, categorylist) => {
            this.getCategoryEvents(category);
        });
    };

    getCategoryEvents(categorysearch) {
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&size=4&classificationName="+categorysearch,
            async: true,
            dataType: "json",
            success: (json) => {
                this.showEvents(json,categorysearch);
            },
            error: (xhr, status, err) => {
                console.log(err);
            }
        });
    };

    showEvents(json, categorysearch) {
        let categoryBlock = document.getElementById(categorysearch);
        let categoryEvents = categoryBlock.getElementsByClassName('event__preview');
        let events = json._embedded.events;
        for (let i = 0; i < categoryEvents.length; i++) {
            categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
            categoryEvents[i].getElementsByClassName('event__data')[0].innerText = events[i].dates.start.localDate;
            categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
        };
    };
}