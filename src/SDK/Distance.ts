import Http from "./Http"
import DistanceDTO from "../DTO/Distance/Distance";
import DistanceMeta from "../DTO/Distance/DistanceMeta";
import DistanceCoordinates from "../DTO/Distance/DistanceCoordinates";
import Coordinates from "../DTO/Common/Coordinates";

export default class Distance extends Http {

    apiurl: string ='/distance/v1';

    async getByCoordinates(fromLatitude: number, fromLongitude:number, toLatitude: number, toLongitude: number, unit: string = 'km'): Promise<DistanceDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/bycoordinates/" + Number(fromLatitude) + ',' + Number(fromLongitude)
            + ',' + Number(toLatitude) + ',' + Number(toLongitude) + '?unit=' + unit,
            {
                headers: {
                    'User-Agent': this.useragent,
                    'apikey': this.apikey
                }
            }
        )
        const json = await response.json();

        if (response.status != 200) {
            throw response.statusText;
        }

        let distance = json.data;

        return new DistanceDTO(distance.distance, distance.unit,
            new DistanceMeta(
                new DistanceCoordinates(
                    new Coordinates(distance.meta.coordinates.from.latitude, distance.meta.coordinates.from.longitude),
                    new Coordinates(distance.meta.coordinates.to.latitude, distance.meta.coordinates.to.longitude)
                )
            )
        );
    }

    async getByAddress(from: string, to:string, unit: string = 'km'): Promise<DistanceDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/byaddress/" + from + '/' + to + '?unit=' + unit,
            {
                headers: {
                    'User-Agent': this.useragent,
                    'apikey': this.apikey
                }
            }
        )
        const json = await response.json();

        if (response.status != 200) {
            throw response.statusText;
        }

        let distance = json.data;

        return new DistanceDTO(distance.distance, distance.unit,
            new DistanceMeta(
                new DistanceCoordinates(
                    new Coordinates(distance.meta.coordinates.from.latitude, distance.meta.coordinates.from.longitude),
                    new Coordinates(distance.meta.coordinates.to.latitude, distance.meta.coordinates.to.longitude)
                )
            )
        );
    }
}