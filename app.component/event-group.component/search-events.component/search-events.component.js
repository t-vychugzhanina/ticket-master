import {InitComponentService} from "../../services/init-component.service";

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

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.renderChildren();
    };

    renderChildren(){
        const content =  document.getElementsByTagName(this.selector)[0];
        if (this.quantity > 10) { this.quantity = 10; };
        for (let i = 1; i < this.quantity; i++) {
            let newEvent = document.createElement('event');
            content.insertBefore(newEvent, content.children[3]);
        };
        this.initService.renderChildren(this.template,this.selector);
        if (this.quantity < 10) {
            Array.from(document.getElementsByClassName('page_button')).forEach( (button) => {
                button.style.display = "none";
            });
        };
    };

}