export class GetDataService {

    constructor() {
        this.url="https://app.ticketmaster.com/discovery/v2/";
        this.apikey="apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP&";
    };

    httpGet(params,source) {
        return new Promise( (resolve, reject) => {
            const $preloader = $('#page_prldr'),
                $svg_anm   = $preloader.find('.svg_anm');

            const urlSearchParams = decodeURIComponent(new URLSearchParams(params));
            const fullUrl = `${this.url}${source}${this.apikey}${urlSearchParams}`;

            let xhr = new XMLHttpRequest();
            xhr.open('GET', fullUrl, true);
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
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