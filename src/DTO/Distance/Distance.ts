import DistanceMeta from "./DistanceMeta";

export default class Distance {
    distance: number;
    unit: string;
    meta: DistanceMeta;

    constructor(distance: number, unit: string, meta: DistanceMeta) {
        this.distance = Number(distance);
        this.unit = unit;
        this.meta = meta;
    }


}