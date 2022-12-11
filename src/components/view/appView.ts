import News from './news/news';
import Sources from './sources/sources';
import { drawSourcesData, drawNewsData } from '../types/interfaces';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: drawNewsData) {
        const values: [] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: drawSourcesData) {
        const values: [] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
