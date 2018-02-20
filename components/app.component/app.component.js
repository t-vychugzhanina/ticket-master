import {InitComponentService} from "../../init-component.service";

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
        let initService = new InitComponentService;
        initService.initComponent(this.template,this.selector);
        initService.renderChildren(this.template,this.selector);
    };

};