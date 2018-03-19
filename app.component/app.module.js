import {HeadlineComponent} from './headline.component/headline.component';
import {EventGroupComponent} from './event-group.component/event-group.component';
import {AddOptionsComponent} from './add-options.component/add-options.component';
import {JustAnnouncedComponent} from './event-group.component/just-announced.component/just-announced.component';
import {HappeningSoonComponent} from './event-group.component/happening-soon.component/happening-soon.component';
import {CategoriesComponent} from './headline.component/categories.component/categories.component';
import {SearchEventsComponent} from "./event-group.component/search-events.component/search-events.component";
import {EventComponent} from "./event-group.component/events/event.component/event.component";
import {BurgerMenuComponent} from "./headline.component/burger-menu.component/burger-menu.component";
import {SearchBarComponent} from "./headline.component/search-bar.component/search-bar.component";
import {AppComponent} from "./app.component";

export class AppModule {

    constructor() {
        this.FILES = new Map();
        this.FILES.set('app', () => new AppComponent());
        this.FILES.set('headline', () => new HeadlineComponent());
        this.FILES.set('add-options', () => new AddOptionsComponent());
        this.FILES.set('event-group', () => new EventGroupComponent());
        this.FILES.set('events-ja', () => new JustAnnouncedComponent());
        this.FILES.set('events-hs', () => new HappeningSoonComponent());
        this.FILES.set('search-events', () => new SearchEventsComponent());
        this.FILES.set('event', () => new EventComponent());
        this.FILES.set('burger-menu', () => new BurgerMenuComponent());
        this.FILES.set('search-bar', () => new SearchBarComponent());
        this.FILES.set('categories', () => new CategoriesComponent());
    };
};