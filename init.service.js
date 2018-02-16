export class InitService {

    constructor(template,selector) {
        this.initComponent(template,selector);
    };

    initComponent(template,selector) {
        let allTags = document.getElementsByTagName(selector);
        for (let i = 0; i < allTags.length; i++) {
            allTags[i].outerHTML = template;
        };
    };

};