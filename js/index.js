function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("js/app.component.js");

window.onload = function() {
    document.body.innerHTML = AppComponent.template;
    AppComponent.init();
};