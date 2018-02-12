import {HeaderComponent} from '../header.component/header.component';
import {EventGroupComponent} from '../event-group.component/event-group.component';
import {AddOptionsComponent} from '../add-options.component/add-options.component';
import {JustAnnouncedComponent} from '../just-announced.component/just-announced.component';
import {HappeningSoonComponent} from '../happening-soon.component/happening-soon.component';
import {CategoriesComponent} from '../categories.component/categories.component';

export class AppModule {

    constructor() {
        this.FILES = new Map();
        this.FILES.set('header', () => new HeaderComponent());
        this.FILES.set('add-options', () => new AddOptionsComponent());
        this.FILES.set('event-group', () => new EventGroupComponent());
        this.FILES.set('events-ja', () => new JustAnnouncedComponent());
        this.FILES.set('events-hs', () => new HappeningSoonComponent());
        this.FILES.set('events-categories', () => new CategoriesComponent());
    };
};