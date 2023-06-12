export default class Http {
    baseurl: string;
    useragent: string = '7x/js/1.0.12';
    apikey: string;

    constructor(apikey: string, baseurl: string = 'https://api.7x.ax') {
        this.apikey = apikey;
        this.baseurl = baseurl;
    }
}