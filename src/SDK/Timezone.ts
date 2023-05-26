import Http from "./Http"
import TimezoneDTO from "../DTO/Timezone/Timezone";

export default class Timezone extends Http {

    apiurl: string ='/timezone/v1';

    async get(latitude: number, longitude:number): Promise<TimezoneDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/bycoordinates/" + latitude + ',' + longitude,
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

        let timezones = json.data;

        return new TimezoneDTO(timezones.latitude, timezones.longitude, timezones.timezones);

    }
}