import {AppModule} from "../../app.module";

export class CategoriesComponent {

    constructor() {
        this.selector = 'events-categories';
        this.template = `<events-categories class="categories">
                 <section class="event category-event" id="music">
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
                 <section class="event category-event" id="sport">
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
                 <section class="event category-event" id="art">
                    <h3 class="category"> Arts & Theater </h3>
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
                 <section class="event category-event" id="family">
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
                 <section class="event category-event" id="vip">
                    <h3 class="category"> VIP </h3>
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
                 <section class="event category-event" id="deals">
                    <h3 class="category"> Deals </h3>
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
                value();
            }
        });
    };
}