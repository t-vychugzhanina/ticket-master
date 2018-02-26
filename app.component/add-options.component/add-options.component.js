import {InitComponentService} from "../services/init-component.service";
import {GetDataService} from "../services/get-data.service";
import {ShowEventsService} from "../services/show-events.service";

export class AddOptionsComponent{

    constructor() {
        this.selector = 'add-options';
        this.template = `
            <add-options class="content__aside">
                <form onsubmit="return false" class="aside__location-form" method="get">
                    <h3 class="aside__title">Shop for Events</h3>
                    <input class="location-form__item" name="city" type="text" autocomplete="on" placeholder="Enter city">
                    <select id="category" name="classificationName" class="location-form__item">
                        <option selected>Select category</option>
                    </select>
                    <select id="sub-category" name="keyword" class="location-form__item">
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
        let source = "classifications.json?";
        this.dataService.httpGet(null,source)
            .then(
                response => this.showCategoriesData(response),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showCategoriesData(json) {
        const category = document.getElementsByName('classificationName')[0];
        let APIdata = json._embedded.classifications;
        APIdata.forEach( (classification) => {
            if (classification.segment !== undefined) {
                let option = document.createElement('option');
                option.innerText = classification.segment.name;
                category.appendChild(option);
            };
        });
        this.showSubCategoriesData(category,APIdata);
    };

    showSubCategoriesData(category,APIdata) {
        const subCategory = document.getElementsByName('keyword')[0];
        category.onchange = function () {
            subCategory.style.display = "block";
            subCategory.innerHTML = '<option selected>Select sub category</option>';
            let selected = $( "#category option:selected" ).text();
            APIdata.forEach((classification) => {
                if (classification.segment !== undefined) {
                    if (selected === classification.segment.name) {
                        let genres = classification.segment._embedded.genres;
                        genres.forEach( (genre) => {
                            let option = document.createElement('option');
                            option.innerText = genre.name;
                            subCategory.appendChild(option);
                        });
                    }
                };
            });
        };
    };

    searchData(){
        document.getElementsByClassName('location-form__submit')[0].onclick = () => {
            document.getElementsByClassName('content__aside')[0].classList.toggle('content__aside_opened');
            Array.from(document.getElementsByClassName('navigation__item')).forEach( (Button,i) => {
                Button.style.backgroundColor = 'transparent';
                Button.style.color = 'white';
            });
            this.getData(0);
        };
    };

    getData(page){
        const params =  new FormData(document.forms[0]);
        params.append('size','10');
        params.set('startDateTime', new Date(params.get('startDateTime').replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')).toISOString().substr(0, 19) + 'Z');
        params.set('endDateTime', new Date(params.get('endDateTime').replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')).toISOString().substr(0, 19) + 'Z');
        if (params.get('classificationName') === 'Select category') {params.delete('classificationName')};
        if (params.get('keyword') === 'Select sub category') {params.delete('keyword')};
        params.set('page',page);
        const source = "events.json?";

        this.dataService.httpGet(params,source)
            .then(
                response => this.showEvents(response),
                error => console.log(`Rejected: ${error}`)
            );
    };

    showEvents(json) {
        let addComponent = this;
        this.showEventsService.showEvents(json,'search-events');
        this.showEventsService.changePage(json.page.number, json.page.totalPages, this.getData.bind(this));
    };

    dateWork() {
        webshims.setOptions('waitReady', false);
        webshims.setOptions('forms-ext', {types: 'date'});
        webshims.polyfill('forms forms-ext');

        document.getElementById('datePicker').valueAsDate = new Date();
        let inWeek = new Date();
        let days = 7;
        inWeek.setDate(new Date().getDate() + days);
        document.getElementById('datePicker2').valueAsDate = inWeek;
    };

};