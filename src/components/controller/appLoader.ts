import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '78f36bf61fa84b27a488b49d2fb4407c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
