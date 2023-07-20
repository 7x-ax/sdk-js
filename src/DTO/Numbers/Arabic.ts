export default class Arabic {
    arabic: string;
    latin: number;

    constructor(arabic: string, latin: number) {
        this.arabic = arabic;
        this.latin = Number(latin);
    }
}