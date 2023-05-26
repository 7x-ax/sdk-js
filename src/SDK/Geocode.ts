import Http from "./Http"
import GeocodeCollectionDTO from "../DTO/Geocode/GeocodeCollection";
import GeocodeDTO from "../DTO/Geocode/Geocode";
import Country from "../DTO/Geocode/Country";
import Location from "../DTO/Geocode/Location";
import Coordinates from "../DTO/Common/Coordinates";

export default class Geocode extends Http {

    apiurl: string ='/geocode/v1';

    async geocode(location: string): Promise<GeocodeCollectionDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/geocode/" + location,
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

        let geocode = json.data;

        let collection = [];
        for (let obj of geocode) {
            let country = new Country(obj.location.country.name, obj.location.country.code);
            let coordinates = new Coordinates(obj.coordinates.latitude, obj.coordinates.longitude);
            let location = new Location(obj.location.name, obj.location.label, country, obj.location.region ?? null,
                obj.location.county ?? null, obj.location.locality ?? null, obj.location.continent ?? null);
            collection.push(new GeocodeDTO(obj.processed, obj.search, coordinates, location));
        }

        return new GeocodeCollectionDTO(collection);

    }

    async search(location: string): Promise<GeocodeCollectionDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/search/" + location,
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

        let geocode = json.data;

        let collection = [];
        for (let obj of geocode) {
            let country = new Country(obj.location.country.name, obj.location.country.code);
            let coordinates = new Coordinates(obj.coordinates.latitude, obj.coordinates.longitude);
            let location = new Location(obj.location.name, obj.location.label, country, obj.location.region ?? null,
                obj.location.county ?? null, obj.location.locality ?? null, obj.location.continent ?? null);
            collection.push(new GeocodeDTO(obj.processed, obj.search, coordinates, location));
        }

        return new GeocodeCollectionDTO(collection);

    }

    async reverse(latitude: number, longitude: number): Promise<GeocodeCollectionDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/reverse/" + Number(latitude) + ',' + Number(longitude),
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

        let geocode = json.data;

        let collection = [];
        for (let obj of geocode) {
            let country = new Country(obj.location.country.name, obj.location.country.code);
            let coordinates = new Coordinates(obj.coordinates.latitude, obj.coordinates.longitude);
            let location = new Location(obj.location.name, obj.location.label, country, obj.location.region ?? null,
                obj.location.county ?? null, obj.location.locality ?? null, obj.location.continent ?? null);
            collection.push(new GeocodeDTO(obj.processed, obj.search, coordinates, location));
        }

        return new GeocodeCollectionDTO(collection);

    }
}