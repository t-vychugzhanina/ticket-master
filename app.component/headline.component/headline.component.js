import {InitComponentService} from "../services/init-component.service";
import {AppComponent} from "../app.component";

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
                <categories></categories>
            </div>
        </headline>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template,this.selector);
        this.startPage();
    };

    startPage(){
        document.getElementsByClassName('header__logo')[0].onclick = () => {
            new AppComponent();
        };
    };

}

