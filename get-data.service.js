export class GetDataService {

    constructor() {
    };

    getData(url) {
        this.API = $.ajax({
            type: "GET",
            url: url,
            async: true,
            dataType: "json",
            success: ((json) => this.data = json),
            error: (xhr, status, err) => { console.log(err); }
        });
    };

    getJSData(url) {
        let data = '';
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = () => {
            data = JSON.parse(xhr.responseText);
        };
        xhr.onerror = () => {
            console.log( 'error ' + this.status );
        };
        xhr.send();
        return data;
    };
};