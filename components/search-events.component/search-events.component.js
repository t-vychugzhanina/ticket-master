import {AppService} from "../../app.service";
import {InitService} from "../../init.service";

export class SearchEventsComponent {

    constructor(quantity) {
        this.quantity= quantity;
        this.selector = 'search-events';
        this.template = `<search-events class="search-events">
                <h2 class="events__title">Query results</h2>
                <button class="page_button previous">previous</button>
                <button class="page_button next">next</button>
                <event></event>
                <button class="page_button previous">previous</button>
                <button class="page_button next">next</button>
            </search-events>`;

        new InitService(this.template,this.selector);
        this.renderChildren();
        this.Buttons();
    };

    renderChildren(){
        const content =  document.getElementsByTagName(this.selector)[0];
        if (this.quantity>10) {this.quantity=10;};
        for (let i = 0; i < this.quantity; i++) {
            let newEvent = document.createElement('event');
            content.insertBefore(newEvent, content.children[3]);
        };
        new AppService(this.template,this.selector);
    };

    Buttons(){
        const nextButtons = document.getElementsByClassName('next');
        for (let i = 0; i < nextButtons.length; i++) {
            console.log(nextButtons[i]);
            nextButtons[i].onclick = function () {

            };
        };
    };
}