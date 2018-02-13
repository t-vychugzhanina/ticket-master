import {AppModule} from "../../app.module";

export class AddOptionsComponent{

        constructor() {
            this.selector = 'add-options';
            this.template = `<add-options class="content__aside">
            <form class="aside__location-form" method="get">
                <h3 class="aside__title">Your location</h3>
                    <input class="location-form__item" name="city" type="text" placeholder="Enter city">
                <h3 class="aside__title">Shop for Events</h3>
                    <select id="category" name="category" class="location-form__item">
                        <option selected disabled>Select category</option>
                        <option>Music</option>
                        <option>Sports</option>
                        <option>Arts & Theatre</option>
                        <option>Film</option>
                    </select>
                    <select id="sub-category" name="sub-category" class="location-form__item">
                        <option selected disabled>Select sub category</option>
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
            this.dateWork();
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

        dateWork() {
            webshims.setOptions('waitReady', false);
            webshims.setOptions('forms-ext', {types: 'date'});
            webshims.polyfill('forms forms-ext');

            Date.prototype.addDays = (function(days) {
                let dat = new Date(this.valueOf());
                dat.setDate(dat.getDate() + days);
                return dat;
            });

            document.getElementById('datePicker').valueAsDate = new Date();
            let inWeek = new Date();
            inWeek = inWeek.addDays(1);
            document.getElementById('datePicker2').valueAsDate = inWeek;
        };

        getData() {

                $.ajax({
                    type: "GET",
                    url: "https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0",
                    async: true,
                    dataType: "json",
                    success: function (json) {
                        showEvents(json);
                    },
                    error: function (xhr, status, err) {
                        console.log(err);
                    }
                });

                function showEvents(json) {
                    let category = document.getElementsByName('category')[0];
                    let subCategory = document.getElementsByName('sub-category')[0];
                    let categoryAPI = json._embedded.classifications;
                    category.onchange = function () {
                        subCategory.style.display = "block";
                        subCategory.innerHTML = '';
                        let selected = $( "#category option:selected" ).text();
                        for (let i = 0; i < categoryAPI.length; i++) {
                            try {
                            if (selected == categoryAPI[i].segment.name) {
                                let genres = categoryAPI[i].segment._embedded.genres;
                                for (let j = 0; j < categoryAPI.length; j++) {
                                    let option = document.createElement('option');
                                    option.innerText = genres[j].name;
                                    subCategory.appendChild(option);
                                }; }
                            } catch (err) {
                                console.log(err);
                            };
                        }
                    }
                }

         }

};