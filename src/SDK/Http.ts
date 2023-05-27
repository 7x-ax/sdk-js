export default class Http {
    baseurl: string = 'https://api.7x.ax';
    useragent: string = '7x/js/1.0.5';
    apikey: string;

    constructor(apikey: string) {
        this.apikey = apikey;
    }
}