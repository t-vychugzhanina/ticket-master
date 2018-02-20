import {InitComponentService} from "../../init-component.service";
import {SearchEventsComponent} from "../search-events.component/search-events.component";
import {AppComponent} from "../app.component/app.component";

export class HeadlineComponent {
    constructor() {
        this.selector = 'headline';
        this.template = `
        <headline class="header">
            <div class="content">
                <div class="header__top">
                    <a class="header__logo" href=#> Logo-Ticketmaster </a>
                    <search-bar></search-bar>
                    <header-menu class="header__menu">
                        <a href="#" class="menu__item my-acc">My Acc</a>
                        <a href="#" class="menu__item">Help</a>
                    </header-menu>
                    <burger-menu></burger-menu>
                </div>
                <nav class="header__navigation">
                    <a href="#" class="navigation__item">Music</a>
                    <a href="#" class="navigation__item">Sport</a>
                    <a href="#" class="navigation__item">Arts & Theater</a>
                    <a href="#" class="navigation__item">Family</a>
                </nav>
            </div>
        </headline>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.initService.renderChildren(this.template,this.selector);
        this.startPage();
    };

    startPage(){
        document.getElementsByClassName('header__logo')[0].onclick = () => {
            new AppComponent();
        };
    };

}

