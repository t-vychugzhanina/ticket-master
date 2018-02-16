import {HeadlineComponent} from './components/headline.component/headline.component';
import {EventGroupComponent} from './components/event-group.component/event-group.component';
import {AddOptionsComponent} from './components/add-options.component/add-options.component';
import {JustAnnouncedComponent} from './components/just-announced.component/just-announced.component';
import {HappeningSoonComponent} from './components/happening-soon.component/happening-soon.component';
import {CategoriesComponent} from './components/categories.component/categories.component';
import {SearchEventsComponent} from "./components/search-events.component/search-events.component";
import {EventComponent} from "./components/events.component/event.component/event.component";
import {BurgerMenuComponent} from "./components/burger-menu.component/burger-menu.component";
import {SearchBarComponent} from "./components/search-bar.component/search-bar.component";

export class AppModule {

    constructor() {
        this.FILES = new Map();
        this.FILES.set('headline', () => new HeadlineComponent());
        this.FILES.set('add-options', () => new AddOptionsComponent());
        this.FILES.set('event-group', () => new EventGroupComponent());
        this.FILES.set('events-ja', () => new JustAnnouncedComponent());
        this.FILES.set('events-hs', () => new HappeningSoonComponent());
        this.FILES.set('events-categories', () => new CategoriesComponent());
        this.FILES.set('search-events', () => new SearchEventsComponent());
        this.FILES.set('event', () => new EventComponent());
        this.FILES.set('burger-menu', () => new BurgerMenuComponent());
        this.FILES.set('search-bar', () => new SearchBarComponent());
    };
};