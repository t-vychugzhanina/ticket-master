import {InitComponentService} from "../../init-component.service";
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

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.initService.renderChildren(this.template,this.selector);
        this.dataService = new GetDataService();
        this.getCategoriesData(this.dataService);
        this.searchData(this.dataService);
        this.dateWork();

    };

    getCategoriesData(dataService) {
        dataService.httpGet("https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0")
            .then(
                response => this.showCategoriesData(JSON.parse(response)),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showCategoriesData(json) {
        const category = document.getElementsByName('category')[0];
        const subCategory = document.getElementsByName('sub-category')[0];
        let APIdata = json._embedded.classifications;
        for (let i = 0; i < APIdata.length; i++) {
            try {
                let segment = APIdata[i].segment.name;
                let option = document.createElement('option');
                option.innerText = segment;
                category.appendChild(option);
            } catch (err) {
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
                };
            };
        };
    };

    searchData(dataService){
        document.getElementsByClassName('location-form__submit')[0].onclick = () => {
            document.getElementsByClassName('content__aside')[0].classList.toggle('content__aside_opened');
            const categoryButtons = document.getElementsByClassName('navigation__item');
            for (let i = 0; i < categoryButtons.length; i++) {
                categoryButtons[i].style.backgroundColor = 'transparent';
                categoryButtons[i].style.color = 'white';
            };
            this.city = document.getElementsByName('city')[0].value;
            this.category = document.getElementsByName('category')[0].value;
            this.subCategory = document.getElementsByName('sub-category')[0].value;
            this.startDateTime = document.getElementsByName('startDateTime')[0].value;
            this.endDateTime = document.getElementsByName('endDateTime')[0].value;
            this.startDateTime = new Date(this.startDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
            this.endDateTime = new Date(this.endDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
            this.startDateTime = this.startDateTime.toISOString().substr(0, 19)+'Z';
            this.endDateTime = this.endDateTime.toISOString().substr(0, 19)+'Z';
            this.getSearchData(0);
        };
    };

    getSearchData(page){
        let urlString = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&page="+page+"&startDateTime="+this.startDateTime+"&endDateTime="+this.endDateTime;
        if (this.category!='Select category') {urlString=urlString+"&classificationName="+this.category};
        if (this.subCategory!='Select sub category') {urlString=urlString+"&keyword="+this.subCategory};
        if (this.city!='') {urlString=urlString+"&city="+this.city};

        this.dataService.httpGet(urlString)
            .then(
                response => this.showEvents(JSON.parse(response)),
                error => console.log(`Rejected: ${error}`)
            );
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
                categoryEvents[i].getElementsByClassName('date')[0].innerText = events[i].dates.start.localDate;
                categoryEvents[i].getElementsByClassName('event__venues')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                categoryEvents[i].getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
                let month = events[i].dates.start.localDate.substr(5, 2);
                let date = events[i].dates.start.localDate.substr(8, 2);
                let mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                categoryEvents[i].getElementsByClassName('day')[0].innerText = date;
                categoryEvents[i].getElementsByClassName('month')[0].innerText = mS[month-1];
                if (events[i].info!=undefined) {
                    categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText=events[i].info;
                    categoryEvents[i].getElementsByClassName('event__descrip-mini')[0].innerText=events[i].info;
                } else {
                    categoryEvents[i].getElementsByClassName('event__descrip')[0].innerText='';
                    categoryEvents[i].getElementsByClassName('info')[0].style.display = "none";
                };
            };
        };
        this.changePage(json.page.number, json.page.totalPages);
    };

    createQueryResults(quantity) {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        let QueryResults = document.createElement('search-events');
        document.getElementsByClassName('content__events')[0].appendChild(QueryResults);
        new SearchEventsComponent(quantity);
    };

    changePage(page,all) {
        const nextButtons = document.getElementsByClassName('next');
        const prevButtons = document.getElementsByClassName('previous');
        for (let i = 0; i < nextButtons.length; i++) {
            nextButtons[i].onclick = () => {
                if (page == all) {page = 0;}
                else { page=page+1;};
                this.getSearchData(page);
            };
        };
        for (let i = 0; i < prevButtons.length; i++) {
            prevButtons[i].onclick = () => {
                if (page == 0) { page = 0;}
                else {page=page-1;};
                this.getSearchData(page);
            };
        };
    };

    dateWork() {
        webshims.setOptions('waitReady', false);
        webshims.setOptions('forms-ext', {types: 'date'});
        webshims.polyfill('forms forms-ext');

        document.getElementById('datePicker').valueAsDate = new Date();
        let inWeek = new Date();
        inWeek.setDate(inWeek.getDate() + 7);
        document.getElementById('datePicker2').valueAsDate = inWeek;
    };

};