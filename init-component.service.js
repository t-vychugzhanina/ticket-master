import {AppModule} from "./app.module";

export class InitComponentService {

    constructor() {
    };

    initComponent(template,selector) {
        let allTags = document.getElementsByTagName(selector);
        for (let i = 0; i < allTags.length; i++) {
            allTags[i].outerHTML = template;
        };
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