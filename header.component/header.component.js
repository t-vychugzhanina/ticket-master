import {AppModule} from "../js/app.module";

export class HeaderComponent {

        constructor() {
            this.selector = 'header';
            this.template = `<header class="header">
            <div class="content">
                <div class="header__top">
                    <a class="header__logo" href=#> Logo-Ticketmaster </a>
                    <form class="header__search-bar" method="get">
                        <input class="search-bar__input-text" name="search" type="search" placeholder="Search...">
                        <button class="search-bar__button submit" type="submit">Search</button>
                        <button class="search-bar__button setting" type="button">Search settings</button>
                    </form>
                    <nav class="header__menu">
                        <a href="#" class="menu__item my-acc">My Acc</a>
                        <a href="#" class="menu__item">Help</a>
                    </nav>
                    <div class="header__burger">
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
                    </div>
                </div>
                <nav class="header__navigation">
                    <a href="#music" class="navigation__item">Music</a>
                    <a href="#sport" class="navigation__item">Sport</a>
                    <a href="#art" class="navigation__item">Arts & Theater</a>
                    <a href="#family" class="navigation__item">Family</a>
                    <a href="#vip" class="navigation__item">VIP</a>
                    <a href="#deals" class="navigation__item">Deals</a>
                </nav>
            </div>
            </header>`;
            this.init();
        };

        init(){
            var all = document.getElementsByTagName(this.selector);
            for (var r = 0; r < all.length; r++) {
                all[r].outerHTML = this.template;
            };
            this.makeChildren();
            this.burgerMenuFunctions();
        };

        makeChildren(){
            let tempTemplate = this.template;
            let tempSelector = this.selector;
            let module = new AppModule();
            let tags = module.FILES;
            tags.forEach(function (value, key, mapObj) {
                if ((tempTemplate.indexOf('<'+key)!=-1)&(key!=tempSelector)) {
                    value();
                }
            });
        };

        burgerMenuFunctions() {
            $('.burger-icon').click(function(){
                $('.burger-menu').toggleClass('burger-menu_opened');
                $('.content__aside').removeClass('content__aside_opened');
            });

            $('.setting').click(function(){
                $('.content__aside').toggleClass('content__aside_opened');
                $('.burger-menu').removeClass('burger-menu_opened');
            });
            $(document).click(function(event) {
                if ($(event.target).closest(".burger-menu").length) return;
                if ($(event.target).closest(".burger-icon").length) return;
                if ($(event.target).closest(".content__aside").length) return;
                if ($(event.target).closest(".setting").length) return;
                $('.burger-menu').removeClass('burger-menu_opened');
                $('.content__aside').removeClass('content__aside_opened');
                event.stopPropagation();
            });
        }
}