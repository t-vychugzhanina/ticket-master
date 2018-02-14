import {AppModule} from "../../app.module";
import {SearchEventsComponent} from "../search-events.component/search-events.component";

export class AddOptionsComponent{

        constructor() {
            this.selector = 'add-options';
            this.template = `<add-options class="content__aside">
            <form onsubmit="return false" class="aside__location-form" method="get">
                <h3 class="aside__title">Shop for Events</h3>
                    <input class="location-form__item" name="city" type="text" autocomplete="on" placeholder="Enter city">
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
                    <input class="location-form__item input-date" name="startDateTime" id="datePicker" type="date" placeholder="Select start data">
                    <span class="aside__text">To:</span>
                    <input class="location-form__item input-date" name="endDateTime" id="datePicker2" type="date" placeholder="Select end data">
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
            this.applyWork();
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
         };

         applyWork(){
             let applyWork = this;
             this.createQueryResults = function(){
                 let content = document.getElementsByClassName('content__events')[0];
                     content.innerHTML = '';
                     let QueryResults = document.createElement('search-events');
                     content.appendChild(QueryResults);
                     new SearchEventsComponent();
             };

             this.getSearchData = function(city,category,subCategory,startDateTime,endDateTime){
                 startDateTime = new Date(startDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
                 endDateTime = new Date(endDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
                 startDateTime = startDateTime.toISOString().substr(0, 19)+'Z';
                 endDateTime = endDateTime.toISOString().substr(0, 19)+'Z';

                 $.ajax({
                     type: "GET",
                     url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&city="+city+"&classificationName"+category+
                     "&startDateTime="+startDateTime+"&endDateTime="+endDateTime,
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
                     var categoryBlock = document.getElementsByClassName('search-events')[0];
                     console.log(categoryBlock);
                     var categoryEvents = categoryBlock.getElementsByClassName('event');
                     var events = json._embedded.events;
                     console.log(categoryEvents);
                     for (var i = 0; i < categoryEvents.length; i++) {
                         categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
                         categoryEvents[i].getElementsByClassName('event__data')[0].innerText = events[i].dates.start.localDate;
                         categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                         categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
                     }
                     ;
                 };
             };

            let applyButton = document.getElementsByClassName('location-form__submit')[0];
            applyButton.onclick = function () {
                applyWork.results = this;
                let city = document.getElementsByName('city')[0].value;
                let category = document.getElementsByName('category')[0].value;
                let subCategory = document.getElementsByName('sub-category')[0].value;
                let startDateTime = document.getElementsByName('startDateTime')[0].value;
                let endDateTime = document.getElementsByName('endDateTime')[0].value;
                console.log(city,category,subCategory,startDateTime,endDateTime);
                applyWork.createQueryResults();
                applyWork.getSearchData(city,category,subCategory,startDateTime,endDateTime);
            };


         };


};