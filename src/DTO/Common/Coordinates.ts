export default class Coordinates {
    latitude : number;
    longitude : number;

    constructor(latitude: number, longitude: number) {
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
    }
}