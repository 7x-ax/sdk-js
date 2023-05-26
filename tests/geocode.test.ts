import Geocode from "../src/SDK/Geocode";
import GeocodeDTO from "../src/DTO/Geocode/Geocode";
import CoordinatesDTO from "../src/DTO/Common/Coordinates";
import LocationDTO from "../src/DTO/Geocode/Location";
import GeocodeCollection from "../src/DTO/Geocode/GeocodeCollection";

const API_KEY = '';

describe('Geocode an address',  () => {
    it('Geocode London, UK', async () => {
        let geo = new Geocode(API_KEY);
        let data = await geo.geocode('London, UK');
        expect(await(data)).toBeInstanceOf(GeocodeCollection);
        expect(await(data.objects[0])).toBeInstanceOf(GeocodeDTO);
        expect(await(data.objects[0].coordinates)).toBeInstanceOf(CoordinatesDTO);
        expect(await(data.objects[0].location)).toBeInstanceOf(LocationDTO);
    });
});

describe('Geocode search',  () => {
    it('Search Lon', async () => {
        let geo = new Geocode(API_KEY);
        let data = await geo.search('Lon');
        expect(await(data)).toBeInstanceOf(GeocodeCollection);
        expect(await(data.objects[0])).toBeInstanceOf(GeocodeDTO);
        expect(await(data.objects[0].coordinates)).toBeInstanceOf(CoordinatesDTO);
        expect(await(data.objects[0].location)).toBeInstanceOf(LocationDTO);
    });
});

describe('Reverse geocode',  () => {
    it('Test some reverse co-ordinates', async () => {
        let geo = new Geocode(API_KEY);
        let data = await geo.reverse(55.55, 33.33);
        expect(await(data)).toBeInstanceOf(GeocodeCollection);
        expect(await(data.objects[0])).toBeInstanceOf(GeocodeDTO);
        expect(await(data.objects[0].coordinates)).toBeInstanceOf(CoordinatesDTO);
        expect(await(data.objects[0].location)).toBeInstanceOf(LocationDTO);
    });
});