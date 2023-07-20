export default class Month {
    number: number;
    name: string;
    abbreviation: string;
    days: number;

    constructor(number: number, name: string, abbreviation: string, days: number) {
        this.number = number;
        this.name = name;
        this.abbreviation = abbreviation;
        this.days = days;
    }
}