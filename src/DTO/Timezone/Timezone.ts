export default class Timezone {
    latitude: number;
    longitude: number;
    timezones: string[];

    constructor(latitude: number, longitude: number, timezones: string[]) {
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
        this.timezones = timezones;
    }
}