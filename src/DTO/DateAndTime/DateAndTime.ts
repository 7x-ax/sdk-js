import Timezone from "./Timezone";
import Time from "./Time";
import Day from "./Day";
import Month from "./Month";
import Week from "./Week";
import Year from "./Year";

export default class DateAndTime {
    iso8601: string;
    rfc2822: string;
    rfc5322: string;
    timestamp: number;
    timezone: Timezone
    time: Time;
    day: Day;
    month: Month;
    week: Week;
    year: Year;

    constructor(iso8601: string, rfc2822: string, rfc5322: string, timestamp: number, timezone: Timezone, time: Time, day: Day, month: Month, week: Week, year: Year) {
        this.iso8601 = iso8601;
        this.rfc2822 = rfc2822;
        this.rfc5322 = rfc5322;
        this.timestamp = timestamp;
        this.timezone = timezone;
        this.time = time;
        this.day = day;
        this.month = month;
        this.week = week;
        this.year = year;
    }


}