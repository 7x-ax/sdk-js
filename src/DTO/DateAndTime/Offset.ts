export default class Offset {
    gmt: string[];
    utc: string;

    constructor(gmt: string[], utc: string) {
        this.gmt = gmt;
        this.utc = utc;
    }

}