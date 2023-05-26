import Geocode from "./Geocode";

export default class GeocodeCollection {
    objects: Geocode[];

    constructor(objects: Geocode[]) {
        this.objects = objects;
    }
}