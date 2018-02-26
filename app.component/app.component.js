import {InitComponentService} from "./services/init-component.service";

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

       this.initService = new InitComponentService;
       this.initService.initComponent(this.template,this.selector);
    };


};