import Distance from "../src/SDK/Distance";

const API_KEY = '';

describe('Distance test',  () => {
    it('Distance by Coordinates', async () => {
        let dist= new Distance(API_KEY);
        let data=  await dist.getByCoordinates(22.2223, 33.3334, 33.444,44.555);
        //expect(await(data.distance)).toBe(2517.44);
        expect(await(data.unit)).toBe('km');
    });
});

describe('Distance test by address',  () => {
    it('Distance by address', async () => {
        let dist= new Distance(API_KEY);
        let data=  await dist.getByAddress('London, UK', 'Paris, France');
        expect(await(data.unit)).toBe('km');
    });
});