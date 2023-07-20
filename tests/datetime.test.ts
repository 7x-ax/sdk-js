import DateAndTime from "../src/SDK/DateAndTime";
const API_KEY = '';

describe('Date and Time test',  () => {
    it('by timezone', async () => {
        let dt = new DateAndTime(API_KEY);
        let data = await dt.byTimezone('Europe/London');
        expect(await (data.timezone.name)).toBe('Europe/London');
    });

    it('by coordinates', async () => {
        let dt = new DateAndTime(API_KEY);
        let data = await dt.byCoordinates(24.5494, 45.58403);
        expect(await(data.timezone.name)).toBe('Asia/Riyadh');
    });

    it('by address', async () => {
        let dt = new DateAndTime(API_KEY);
        let data = await dt.byAddress('Tower Bridge, London, UK');
        expect(await(data.timezone.name)).toBe('Europe/London');
    });
});