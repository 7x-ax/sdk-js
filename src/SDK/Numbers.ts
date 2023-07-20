import Http from "./Http"
import ArabicDTO from "../DTO/Numbers/Arabic";
import HtmlDTO from "../DTO/Numbers/Html";

export default class Timezone extends Http {

    apiurl: string ='/numbers/v1';

    async arabicToLatin(arabic: string, ): Promise<ArabicDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/arabic-to-latin/" + arabic,
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

        let numbers = json.data;

        return new ArabicDTO(numbers.arabic, numbers.latin);

    }

    async latinToArabic(latin: number, ): Promise<ArabicDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/latin-to-arabic/" + latin,
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

        let numbers = json.data;

        return new ArabicDTO(numbers.arabic, numbers.latin);

    }

    async arabicToHtml(arabic: string, ): Promise<HtmlDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/arabic-to-html/" + arabic,
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

        let numbers = json.data;

        return new HtmlDTO(numbers.arabic, numbers.html);

    }
}