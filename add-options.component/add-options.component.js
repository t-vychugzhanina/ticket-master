import {AppModule} from "../js/app.module";

export class AddOptionsComponent{

        constructor() {
            this.selector = 'add-options';
            this.template = `<add-options class="content__aside">
            <form class="aside__location-form" method="get">
                <h3 class="aside__title">Your location</h3>
                    <input class="location-form__item" name="city" type="text" placeholder="Enter city">
                <h3 class="aside__title">Shop for Events</h3>
                    <select name="category" class="location-form__item">
                        <option selected disabled>Select category</option>
                        <option>Music</option>
                        <option>Sport</option>
                        <option>Arts & Theater</option>
                        <option>Family</option>
                        <option>VIP</option>
                        <option>Family</option>
                        <option>Deals</option>
                    </select>
                    <select name="sub-category" class="location-form__item">
                        <option selected disabled>Select sub category</option>
                        <option>Music</option>
                        <option>Sport</option>
                        <option>Arts & Theater</option>
                        <option>Family</option>
                        <option>VIP</option>
                        <option>Family</option>
                        <option>Deals</option>
                    </select>
                    <span class="aside__text">From:</span>
                    <input class="location-form__item input-date" name="date-start" id="datePicker" type="date" placeholder="Select start data">
                    <span class="aside__text">To:</span>
                    <input class="location-form__item input-date" name="date-end" id="datePicker2" type="date" placeholder="Select end data">
                    <button class="location-form__submit" type="submit">Apply</button>
                </form>
        </add-options>`;
            this.init();
        };

        init() {
            var all = document.getElementsByTagName(this.selector);
            for (var r = 0; r < all.length; r++) {
                all[r].outerHTML = this.template;
            };
            this.makeChildren();
            this.DataWork();
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

        DataWork() {
            webshims.setOptions('waitReady', false);
            webshims.setOptions('forms-ext', {types: 'date'});
            webshims.polyfill('forms forms-ext');

            Date.prototype.addDays = (function(days) {
                var dat = new Date(this.valueOf());
                dat.setDate(dat.getDate() + days);
                return dat;
            });

            document.getElementById('datePicker').valueAsDate = new Date();
            var inWeek = new Date();
            inWeek = inWeek.addDays(1);
            document.getElementById('datePicker2').valueAsDate = inWeek;
        }

};