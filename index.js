import {AppComponent} from './components/app.component/app.component';

$(window).on('load', function () {
    let $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(1200).fadeOut('slow');
});

let App = new AppComponent();

