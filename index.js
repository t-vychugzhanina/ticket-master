import {AppComponent} from './components/app.component/app.component';

let App = new AppComponent();

let anchorHeight = (function() {
    var headerHeight = $('.header').outerHeight();
    $('a').on('click', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerHeight
        }, 900, 'easeInOutExpo');
        event.preventDefault();
        history.pushState({}, "", this.href);})
});

window.onload = anchorHeight();
window.onresize = anchorHeight();

