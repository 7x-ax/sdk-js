import Timezone from "../src/SDK/Timezone";

const API_KEY = '';

describe('Timezone test',  () => {
    it('Gets timezone for Egypt', async () => {
        let tz = new Timezone(API_KEY);
        let data = await tz.get(30.0444, 31.2357);
        expect(await(data.latitude)).toBe(30.0444);
        expect(await(data.longitude)).toBe(31.2357);
        expect(await(data.timezones[0])).toBe("Africa/Cairo");
    });
});