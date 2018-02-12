import {AppModule} from "../js/app.module";

export class AppComponent {

    constructor() {
        this.selector = 'app';
        this.template = `<app>
            <header></header>
               <div class="content">
               <div class="main-container">
               <add-options></add-options>
               <event-group></event-group>
               </div>
               </div> 
             </app>`;
            this.init();
        };

    init() {
        document.body.innerHTML = this.template;
        this.makeChildren();
    };

makeChildren(){
    let tempTemplate = this.template;
    let module = new AppModule();
    let tags = module.FILES;
    tags.forEach(function (value, key, mapObj) {
        if (tempTemplate.indexOf('<'+key)!=-1) {
            value(); }
        });
    };
};