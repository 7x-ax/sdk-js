import Country from "./Country";

export default class Location {
    name: string;
    label: string;
    country: Country
    region?: string;
    county?: string;
    locality?: string;
    continent?: string;

    constructor(name: string, label: string, country: Country, region?: string, county?: string, locality?: string, continent?: string) {
        this.name = name;
        this.label = label;
        this.country = country;
        this.region = region;
        this.county = county;
        this.locality = locality;
        this.continent = continent;
    }
}