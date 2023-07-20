import Offset from './Offset';
export default class Timezone {
    name: string;
    daylightsaving: boolean;
    offset: Offset;
    abbreviation: string;
    constructor(name: string, daylightsaving: boolean, offset: Offset, abbreviation: string) {
        this.name = name;
        this.daylightsaving = daylightsaving;
        this.offset = offset;
        this.abbreviation = abbreviation;
    }
}

