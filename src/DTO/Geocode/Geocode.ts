import Coordinates from "../Common/Coordinates";
import Location from "./Location";

export default class Geocode {
    search: string;
    processed?: string;
    coordinates: Coordinates;
    location: Location;

    constructor(search: string, processed: string, coordinates: Coordinates, location: Location) {
        this.search = search;
        this.processed = processed;
        this.coordinates = coordinates;
        this.location = location;
    }
}