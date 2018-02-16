import {AppModule} from "../../app.module";
import {AppService} from "../../app.service";

export class AppComponent {

    constructor() {
        this.selector = 'app';
        this.template = `
            <app>
                <headline></headline>
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
        new AppService(this.template,this.selector);
    };

};