import {InitService} from "../../init.service";
import {AppService} from "../../app.service";
import {GetDataService} from "../../get-data.service";
import {SearchEventsComponent} from "../search-events.component/search-events.component";

export class AddOptionsComponent{

    constructor() {
        this.selector = 'add-options';
        this.template = `
            <add-options class="content__aside">
                <form onsubmit="return false" class="aside__location-form" method="get">
                    <h3 class="aside__title">Shop for Events</h3>
                    <input class="location-form__item" name="city" type="text" autocomplete="on" placeholder="Enter city">
                    <select id="category" name="category" class="location-form__item">
                        <option selected>Select category</option>
                    </select>
                    <select id="sub-category" name="sub-category" class="location-form__item">
                        <option selected>Select sub category</option>
                    </select>
                    <span class="aside__text">From:</span>
                    <input class="location-form__item input-date" name="startDateTime" id="datePicker" type="date" placeholder="Select start data">
                    <span class="aside__text">To:</span>
                    <input class="location-form__item input-date" name="endDateTime" id="datePicker2" type="date" placeholder="Select end data">
                    <button class="location-form__submit" type="submit">Apply</button>
                </form>
            </add-options>`;

        new InitService(this.template,this.selector);
        new AppService(this.template,this.selector);
        this.dateWork();
        this.getCategoriesData();
        //this.searchData();
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

    getCategoriesData() {
        this.dataService = new GetDataService();
        this.json = this.dataService.getJSData("https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0");
        console.log(this.json);
        const category = document.getElementsByName('category')[0];
        const subCategory = document.getElementsByName('sub-category')[0];
        let APIdata = this.json._embedded.classifications;
        for (let i = 0; i < APIdata.length; i++) {
            try {
                let segment = APIdata[i].segment.name;
                let option = document.createElement('option');
                option.innerText = segment;
                category.appendChild(option);
            } catch (err) {
                console.log(err);
            };
        };
        category.onchange = function () {
            subCategory.style.display = "block";
            subCategory.innerHTML = '<option selected>Select sub category</option>';
            let selected = $( "#category option:selected" ).text();
            for (let i = 0; i < APIdata.length; i++) {
                try {
                    if (selected == APIdata[i].segment.name) {
                        let genres = APIdata[i].segment._embedded.genres;
                        for (let j = 0; j < genres.length; j++) {
                            let option = document.createElement('option');
                            option.innerText = genres[j].name;
                            subCategory.appendChild(option);
                        };
                    }
                } catch (err) {
                    console.log(err);
                };
            };
        };
    };

    searchData(){
        document.getElementsByClassName('location-form__submit')[0].onclick = () => {
            let city = document.getElementsByName('city')[0].value;
            let category = document.getElementsByName('category')[0].value;
            let subCategory = document.getElementsByName('sub-category')[0].value;
            let startDateTime = document.getElementsByName('startDateTime')[0].value;
            let endDateTime = document.getElementsByName('endDateTime')[0].value;
            this.getSearchData(city,category,subCategory,startDateTime,endDateTime);
        };
    };

    getSearchData(city,category,subCategory,startDateTime,endDateTime){
        startDateTime = new Date(startDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
        endDateTime = new Date(endDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
        startDateTime = startDateTime.toISOString().substr(0, 19)+'Z';
        endDateTime = endDateTime.toISOString().substr(0, 19)+'Z';
        let urlString = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&startDateTime="+startDateTime+"&endDateTime="+endDateTime;
        if (category!='Select category') {urlString=urlString+"&classificationName="+category};
        if (subCategory!='Select sub category') {urlString=urlString+"&keyword="+subCategory};
        if (city!='') {urlString=urlString+"&city="+city};

        $.ajax({
            type: "GET",
            url: urlString,
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
        if (json.page.totalPages==0) {
            document.getElementsByClassName('events__title')[0].innerHTML = 'Can\'t find query results! Please, try again!';
        }
        else {
            this.createQueryResults(json.page.totalPages);
            let categoryBlock = document.getElementsByClassName('search-events')[0];
            let categoryEvents = categoryBlock.getElementsByClassName('event');
            let events = json._embedded.events;
            for (let i = 0; i < categoryEvents.length; i++) {
                categoryEvents[i].getElementsByClassName('event__title')[0].innerText = events[i].name;
                categoryEvents[i].getElementsByClassName('event__data')[0].innerText = events[i].dates.start.localDate;
                categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
            };
        };
    };

    createQueryResults(quantity) {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        let QueryResults = document.createElement('search-events');
        document.getElementsByClassName('content__events')[0].appendChild(QueryResults);
        new SearchEventsComponent(quantity);
    };

};