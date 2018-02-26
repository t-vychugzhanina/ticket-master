import {SearchEventsComponent} from "../event-group.component/search-events.component/search-events.component";

export class ShowEventsService {

    showEvents(json,section) {
        if (json.page.totalPages !== 0) {
            if (section === 'search-events') {
                this.createQueryResults(json.page.totalPages);
            };
            let categorySection = document.getElementsByTagName(section)[0];
            let events = json._embedded.events;
            Array.from(categorySection.getElementsByClassName('event')).forEach( (categoryEvent,i) => {
                categoryEvent.getElementsByClassName('event__title')[0].innerText = events[i].name;
                categoryEvent.getElementsByClassName('date')[0].innerText = events[i].dates.start.localDate;
                this.showFoto(categoryEvent, events[i]);
                this.showDateMonth(categoryEvent, events[i]);
                this.showAdditInfo(categoryEvent, events[i]);
            });
        }
        else {
            this.noPages();
        };
    };

    showFoto(categoryEvent, event){
        let width = 0, img;
        event.images.forEach( function(foto) {
            if (foto.width > width) {
                width = foto.width;
                img = foto.url;
            }
        });
        categoryEvent.getElementsByClassName('foto__image')[0].src = img;
    };

    showDateMonth(categoryEvent, event) {
        let month = event.dates.start.localDate.substr(5, 2);
        let date = event.dates.start.localDate.substr(8, 2);
        let mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        categoryEvent.getElementsByClassName('day')[0].innerText = date;
        categoryEvent.getElementsByClassName('month')[0].innerText = mS[month-1];
        if (event.dates.start.localTime !== undefined) {
            categoryEvent.getElementsByClassName('time')[0].innerText = event.dates.start.localTime.substr(0, 5);
        };
    };

    showAdditInfo(categoryEvent, event) {
        if ((event._embedded.venues[0].name !== undefined) && (event._embedded.venues[0].city.name !== undefined)) {
            categoryEvent.getElementsByClassName('event__venues')[0].innerText = event._embedded.venues[0].name + " in " + event._embedded.venues[0].city.name;
        };
        if (event.info !== undefined) {
            categoryEvent.getElementsByClassName('event__descrip')[0].innerText = event.info;
        } else {
            categoryEvent.getElementsByClassName('info')[0].style.display = "none";
        };
    };

    noPages() {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        let errorTitle = document.createElement('div');
        errorTitle.classList.add('events__title');
        errorTitle.innerHTML = 'Can\'t find query results! Please, try again!';
        document.getElementsByClassName('content__events')[0].appendChild(errorTitle);
    };

    createQueryResults(quantity) {
        document.getElementsByClassName('content__events')[0].innerHTML = '';
        const QueryResults = document.createElement('search-events');
        document.getElementsByClassName('content__events')[0].appendChild(QueryResults);
        new SearchEventsComponent(quantity);
    };

    changePage(page, all, func) {
        if (page === 0) {
            Array.from(document.getElementsByClassName('previous')).forEach( (prevButton) => {
                prevButton.style.visibility = 'hidden';
            });
        };
        Array.from(document.getElementsByClassName('next')).forEach( (nextButton) => {
            nextButton.addEventListener('click' , () => {
                Array.from(document.getElementsByClassName('previous')).forEach( (prevButton) => {
                    prevButton.style.visibility = 'visible';
                });
                if (page === all) {page = 0;}
                else { page = page + 1;};
                func(page);
            })
        });
        Array.from(document.getElementsByClassName('previous')).forEach( (prevButton) => {
            prevButton.addEventListener('click' , () => {
                if (page === 0) {page = 0; }
                else { page = page - 1;};
                func(page);
            })
        });
    };

};