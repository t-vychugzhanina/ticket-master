import {InitComponentService} from "../../services/init-component.service";

export class BurgerMenuComponent {

    constructor() {
        this.selector = 'burger-menu';
        this.template = `
            <burger-menu class="header__burger">
                <div class="burger-icon">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </div>
                <ul class="burger-menu">
                    <li>
                        <a href="#">My Acc</a>
                    </li>
                    <li>
                        <a href="#">Bookmarks</a>
                    </li>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">Log out</a>
                    </li>
                </ul>
            </burger-menu>`;

        this.initService = new InitComponentService();
        this.initService.initComponent(this.template, this.selector);
        this.burgerMenuCloseOpen();
    };

    burgerMenuCloseOpen() {
        document.getElementsByClassName('burger-icon')[0].onclick = () => {
            document.getElementsByClassName('burger-menu')[0].classList.toggle('burger-menu_opened');
            document.getElementsByClassName('content__aside')[0].classList.remove('content__aside_opened');
        };

        document.addEventListener("click", function(event) {
            let elements = document.getElementsByClassName('header__burger')[0].querySelectorAll('div,ul,li,a');
            for (let i = 0; i < elements.length; i++) {
                if (event.target === elements[i]) return;
            };
            document.getElementsByClassName('burger-menu')[0].classList.remove('burger-menu_opened');
        });
    };
}