import {AppModule} from "../../app.module";

export class EventGroupComponent {

        constructor() {
            this.selector = 'event-group';
            this.template = `<event-group class="content__events">
                <events-ja class="events__just-announced">
                </events-ja>
                <events-hs class="events__happening-soon">
                </events-hs>
                <events-categories class="categories">
                </events-categories>
            </event-group>`;
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