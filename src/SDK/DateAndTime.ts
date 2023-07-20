import Http from "./Http"
import DateAndTimeDTO from "../DTO/DateAndTime/DateAndTime";
import Day from "../DTO/DateAndTime/Day";
import Month from "../DTO/DateAndTime/Month";
import Time from "../DTO/DateAndTime/Time";
import Timezone from "../DTO/DateAndTime/Timezone";
import Offset from "../DTO/DateAndTime/Offset";
import Week from "../DTO/DateAndTime/Week";
import Year from "../DTO/DateAndTime/Year";
import Hour from "../DTO/DateAndTime/Hour";
import Meridiem from "../DTO/DateAndTime/Meridiem";

export default class DateAndTime extends Http {

    apiurl: string ='/datetime/v1';

    async byTimezone(timezone: string ): Promise<DateAndTimeDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/bytimezone/" + timezone,
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

        let dt = json.data;

        let day = new Day(dt.day.ofweek, dt.day.ofmonth, dt.day.ofyear, dt.day.name, dt.day.abbreviation, dt.day.ordinalsuffix);
        let month = new Month(dt.month.number, dt.month.name, dt.month.abbreviation, dt.month.days);
        let hour = new Hour(dt.time.hour["12"], dt.time.hour["24"]);
        let meridiem = new Meridiem(dt.time.meridiem.uppercase, dt.time.meridiem.lowercase);
        let time = new Time(hour, dt.minute, dt.second, meridiem);
        let timezoneres = new Timezone(dt.timezone.name, dt.timezone.daylightsaving,
            new Offset(dt.timezone.offset.gmt, dt.timezone.offset.utc), dt.timezone.abbreviation);
        let week = new Week(dt.week.ofyear);
        let year = new Year(dt.year.number, dt.year.leapyear);

        return new DateAndTimeDTO(dt.iso8601, dt.rfc2822, dt.rfc5322, dt.timestamp, timezoneres, time, day, month, week, year);

    }

    async byCoordinates(latitude: number, longitude: number ): Promise<DateAndTimeDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/bycoordinates/" + latitude + "," + longitude,
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

        let dt = json.data;

        let day = new Day(dt.day.ofweek, dt.day.ofmonth, dt.day.ofyear, dt.day.name, dt.day.abbreviation, dt.day.ordinalsuffix);
        let month = new Month(dt.month.number, dt.month.name, dt.month.abbreviation, dt.month.days);
        let hour = new Hour(dt.time.hour["12"], dt.time.hour["24"]);
        let meridiem = new Meridiem(dt.time.meridiem.uppercase, dt.time.meridiem.lowercase);
        let time = new Time(hour, dt.minute, dt.second, meridiem);
        let timezoneres = new Timezone(dt.timezone.name, dt.timezone.daylightsaving,
            new Offset(dt.timezone.offset.gmt, dt.timezone.offset.utc), dt.timezone.abbreviation);
        let week = new Week(dt.week.ofyear);
        let year = new Year(dt.year.number, dt.year.leapyear);

        return new DateAndTimeDTO(dt.iso8601, dt.rfc2822, dt.rfc5322, dt.timestamp, timezoneres, time, day, month, week, year);

    }

    async byAddress(address: string ): Promise<DateAndTimeDTO> {
        let response = await fetch(this.baseurl + this.apiurl + "/byaddress/" + address,
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

        let dt = json.data;

        let day = new Day(dt.day.ofweek, dt.day.ofmonth, dt.day.ofyear, dt.day.name, dt.day.abbreviation, dt.day.ordinalsuffix);
        let month = new Month(dt.month.number, dt.month.name, dt.month.abbreviation, dt.month.days);
        let hour = new Hour(dt.time.hour["12"], dt.time.hour["24"]);
        let meridiem = new Meridiem(dt.time.meridiem.uppercase, dt.time.meridiem.lowercase);
        let time = new Time(hour, dt.minute, dt.second, meridiem);
        let timezoneres = new Timezone(dt.timezone.name, dt.timezone.daylightsaving,
            new Offset(dt.timezone.offset.gmt, dt.timezone.offset.utc), dt.timezone.abbreviation);
        let week = new Week(dt.week.ofyear);
        let year = new Year(dt.year.number, dt.year.leapyear);

        return new DateAndTimeDTO(dt.iso8601, dt.rfc2822, dt.rfc5322, dt.timestamp, timezoneres, time, day, month, week, year);

    }
}