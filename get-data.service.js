export class GetDataService {

    constructor() {
    };

    httpGet(params,fullUrl) {

        return new Promise(function (resolve, reject) {
            let $preloader = $('#page_prldr'),
                $svg_anm   = $preloader.find('.svg_anm');
            let url = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP" + params;
            if (params==null) {url=fullUrl};
            let xhr = new XMLHttpRequest();

            xhr.open('GET', url, true);

            xhr.onloadstart  = function () {
                $svg_anm.fadeIn();
                $preloader.fadeIn();
            };

            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                    $svg_anm.fadeOut('slow');
                    $preloader.fadeOut('slow');
                } else {
                    let error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };

            xhr.send();
        });

    };
};