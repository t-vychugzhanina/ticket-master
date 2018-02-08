var App = (function(){
    return {
        init: function(){
            // Инициализация модуля. В ней мы инициализируем все остальные модули на странице
            Content.init();
            Search.init();
        }
    }
})();

App.init();