import {AppComponent} from './components/app.component/app.component';

$(window).on('load', function () {
    let $preloader = $('#page_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.delay(1200).fadeOut('slow');
    $preloader.delay(1200).fadeOut('slow');
});

let App = new AppComponent();

