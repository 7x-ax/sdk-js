export default class Http {
    baseurl: string = 'https://api.7x.ax';
    useragent: string = '7x/js/php/1.0';
    apikey: string;

    constructor(apikey: string) {
        this.apikey = apikey;
    }
}