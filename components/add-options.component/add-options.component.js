import {InitComponentService} from "../../init-component.service";
import {GetDataService} from "../../get-data.service";
import {ShowEventsService} from "../../show-events.service";

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
        this.dataService = new GetDataService();
        this.showEventsService = new ShowEventsService();
        this.getCategoriesData();
        this.searchData();
        this.dateWork();

    };

    getCategoriesData() {
        this.dataService.httpGet(null,"https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0")
            .then(
                response => this.showCategoriesData(response),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showCategoriesData(json) {
        const category = document.getElementsByName('category')[0];
        const subCategory = document.getElementsByName('sub-category')[0];
        let APIdata = json._embedded.classifications;
        APIdata.forEach((classification) => {
            if (classification.segment!=undefined) {
                let option = document.createElement('option');
                option.innerText = classification.segment.name;
                category.appendChild(option);
            };
        });
        category.onchange = function () {
            subCategory.style.display = "block";
            subCategory.innerHTML = '<option selected>Select sub category</option>';
            let selected = $( "#category option:selected" ).text();
            APIdata.forEach((classification) => {
                if (classification.segment!=undefined) {
                    if (selected == classification.segment.name) {
                        let genres = classification.segment._embedded.genres;
                        genres.forEach((genre) => {
                            let option = document.createElement('option');
                            option.innerText = genre.name;
                            subCategory.appendChild(option);
                        });
                    }
                };
            });
        };
    };

    searchData(dataService){
        document.getElementsByClassName('location-form__submit')[0].onclick = () => {
            document.getElementsByClassName('content__aside')[0].classList.toggle('content__aside_opened');
            Array.from(document.getElementsByClassName('navigation__item')).forEach( (Button,i) => {
                Button.style.backgroundColor = 'transparent';
                Button.style.color = 'white';
            });
            this.city = document.getElementsByName('city')[0].value;
            this.category = document.getElementsByName('category')[0].value;
            this.subCategory = document.getElementsByName('sub-category')[0].value;
            this.startDateTime = document.getElementsByName('startDateTime')[0].value;
            this.endDateTime = document.getElementsByName('endDateTime')[0].value;
            this.startDateTime = new Date(this.startDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
            this.endDateTime = new Date(this.endDateTime.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1'));
            this.startDateTime = this.startDateTime.toISOString().substr(0, 19)+'Z';
            this.endDateTime = this.endDateTime.toISOString().substr(0, 19)+'Z';
            this.getData(0);
        };
    };

    getData(page){
        let urlString = "&size=10&page="+page+"&startDateTime="+this.startDateTime+"&endDateTime="+this.endDateTime;
        if (this.category!='Select category') {urlString=urlString+"&classificationName="+this.category};
        if (this.subCategory!='Select sub category') {urlString=urlString+"&keyword="+this.subCategory};
        if (this.city!='') {urlString=urlString+"&city="+this.city};

        this.dataService.httpGet(urlString)
            .then(
                response => this.showEvents(response),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showEvents(json) {
        this.showEventsService.showEvents(json,'search-events');
        this.showEventsService.changePage(json.page.number, json.page.totalPages,this);
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