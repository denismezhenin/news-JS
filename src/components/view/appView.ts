import News from './news/news';
import Sources from './sources/sources';
import { drawSourcesData, drawNewsData } from '../types/interfaces';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: drawNewsData): void {
        const values: [] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: drawSourcesData): void {
        const values: [] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
