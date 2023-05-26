import DistanceCoordinates from "./DistanceCoordinates";

export default class DistanceMeta {
    coordinates: DistanceCoordinates;

    constructor(coordinates: DistanceCoordinates) {
        this.coordinates = coordinates;
    }
}