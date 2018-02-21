import {AppModule} from "./app.module";

export class InitComponentService {

    constructor() {
    };

    initComponent(template,selector) {
        this.insertComponent(template,selector);
        this.renderChildren(template,selector);
    };

    insertComponent(template,selector) {
        Array.from(document.getElementsByTagName(selector)).forEach( (tag,i) => {
            tag.outerHTML = template;
        });
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