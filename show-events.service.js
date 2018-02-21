import {SearchEventsComponent} from "./components/search-events.component/search-events.component";

export class ShowEventsService {

    constructor() {
    };

    showEvents(json,block) {
        if (json.page.totalPages==0) {
            this.noPages();
        }
        else {
            if (block=='search-events') {
                this.createQueryResults(json.page.totalPages);
            };
            let categoryBlock = document.getElementsByClassName(block)[0];
            let categoryEvents = categoryBlock.getElementsByClassName('event');
            let events = json._embedded.events;
            Array.from(categoryBlock.getElementsByClassName('event')).forEach( (categoryEvent,i) => {
                categoryEvent.getElementsByClassName('event__title')[0].innerText = events[i].name;
                categoryEvent.getElementsByClassName('date')[0].innerText = events[i].dates.start.localDate;
                categoryEvent.getElementsByClassName('foto__image')[0].src = events[i].images[0].url;
                let month = events[i].dates.start.localDate.substr(5, 2);
                let date = events[i].dates.start.localDate.substr(8, 2);
                let mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                categoryEvent.getElementsByClassName('day')[0].innerText = date;
                categoryEvent.getElementsByClassName('month')[0].innerText = mS[month-1];
                if ((events[i]._embedded.venues[0].name!=undefined) &&(events[i]._embedded.venues[0].city.name!=undefined)) {
                    categoryEvent.getElementsByClassName('event__venues')[0].innerText = events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name;
                };
                if (events[i].info!=undefined) {
                    categoryEvent.getElementsByClassName('event__descrip')[0].innerText=events[i].info;
                } else {
                    categoryEvent.getElementsByClassName('info')[0].style.display = "none";
                };
            });
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

    changePage(page,all,element) {
        if (page==0) {
            Array.from(document.getElementsByClassName('previous')).forEach( (prevButton) => {
                prevButton.style.visibility = 'hidden';
            });
        };
        Array.from(document.getElementsByClassName('next')).forEach( (nextButton) => {
            nextButton.addEventListener('click' , () => {
                Array.from(document.getElementsByClassName('previous')).forEach( (prevButton) => {
                    prevButton.style.visibility = 'visible';
                });
                if (page == all) {page = 0;}
                else { page=page+1;};
                element.getData(page);
            })
        });
        Array.from(document.getElementsByClassName('previous')).forEach( (prevButton) => {
            prevButton.addEventListener('click' , () => {
                if (page == 0) {page = 0; }
                else { page=page-1;};
                element.getData(page);
            })
        });
        return page;
    };

};