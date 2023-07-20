export default class Day {
    ofweek: number;
    ofmonth: number;
    ofyear: number;
    name: string;
    abbreviation: string;
    ordinalsuffix: string;

    constructor(ofweek: number, ofmonth: number, ofyear: number, name: string, abbreviation: string, ordinalsuffix: string) {
        this.ofweek = ofweek;
        this.ofmonth = ofmonth;
        this.ofyear = ofyear;
        this.name = name;
        this.abbreviation = abbreviation;
        this.ordinalsuffix = ordinalsuffix;
    }
}