var SearchComponent = (function(){
    return {

        template:`<search class="header">
            <div class="content">
                <div class="header__top">
                    <a class="header__logo" href="index.html"> Logo-Ticketmaster </a>
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
        </search>`,

        init: function(){
            alert(template);
        },

        getData: function(url){
            /*
            * Тут будет код ajax запроса на сервер, который в случае успеха сохранит результат в переменную res
            */

            //Отрисуем наши данные
            this.render(res);
        }

    }
})();