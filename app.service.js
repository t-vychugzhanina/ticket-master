import {AppModule} from "./app.module";

export class AppService {

    constructor(template,selector) {
        this.renderChildren(template,selector);
    };

    renderChildren(template,selector) {
        const module = new AppModule();
        module.FILES.forEach( (value, key, mapObj) => {
            if ((template.indexOf('<'+key)!=-1)&(key!=selector)) {
                value();
            };
        });
    };

};