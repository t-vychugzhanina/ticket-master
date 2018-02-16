import {InitService} from "../../init.service";

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

        new InitService(this.template, this.selector);
        this.burgerMenuCloseOpen2();
    };

    burgerMenuCloseOpen() {
        $('.burger-icon').click(function(){
            $('.burger-menu').toggleClass('burger-menu_opened');
            $('.content__aside').removeClass('content__aside_opened');
        });
        $(document).click(function(event) {
            if ($(event.target).closest(".burger-menu").length) return;
            if ($(event.target).closest(".burger-icon").length) return;
            $('.burger-menu').removeClass('burger-menu_opened');
            event.stopPropagation();
        });
    };

    burgerMenuCloseOpen2() {
        document.getElementsByClassName('burger-icon')[0].onclick = () => {
            document.getElementsByClassName('burger-menu')[0].classList.toggle('burger-menu_opened');
            document.getElementsByClassName('.content__aside')[0].classList.remove('content__aside_opened');
        };

        document.onclick = () => {

        };

        $(document).click(function(event) {
            if ($(event.target).closest(".burger-menu").length) return;
            if ($(event.target).closest(".burger-icon").length) return;
            $('.burger-menu').removeClass('burger-menu_opened');
            event.stopPropagation();
        });
    };
}