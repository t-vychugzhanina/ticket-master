include("js/adv-options.component.js");
include("js/search.component.js");
include("js/event-group.component.js");
include("js/app.service.js");

var AppComponent = (function(){
    return {
        template:`<search></search>
        <app>
        <div class="main-container">
        <add-options></add-options>
        <event-group></event-group>
        </div>
        </app>`,

        init: function(){
            AppService.start(AppComponent.template);
            alert(new SearchComponent());
        },

        getData: function(){

        }

    }
})();