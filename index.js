import {AppComponent} from './app.component/app.component';

$(window).on('load', function () {
    let $preloader = $('#page_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.delay(1500).fadeOut('slow');
    $preloader.delay(1500).fadeOut('slow');
});

let app = new AppComponent();

