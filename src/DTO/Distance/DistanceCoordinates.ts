import Coordinates from "../Common/Coordinates";
export default class DistanceCoordinates {
    from: Coordinates;
    to: Coordinates;

    constructor(from: Coordinates, to: Coordinates) {
        this.from = from;
        this.to = to;
    }
}