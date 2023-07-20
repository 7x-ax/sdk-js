import Numbers from '../src/SDK/Numbers';

const API_KEY = '';

describe('Numbers test',  () => {
    it('Latin to Arabic', async () => {
        let numbers = new Numbers(API_KEY);
        let data = await numbers.latinToArabic(12345);
        expect(await(data.arabic)).toBe('١٢٣٤٥');
    });

    it('Arabic to Latin', async () => {
        let numbers = new Numbers(API_KEY);
        let data = await numbers.arabicToLatin('١٢٣٤٥');
        expect(await(data.latin)).toBe(12345);
    });

    it('Arabic to HTML', async () => {
        let numbers = new Numbers(API_KEY);
        let data = await numbers.arabicToHtml('١٢٣٤٥');
        expect(await(data.html)).toBe('&#1633;&#1634;&#1635;&#1636;&#1637;');
    });
});